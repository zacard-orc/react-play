const net = require('net');
const http = require('http');
const EventEmitter = require('events');

const HOST = '127.0.0.1';
const PORT = 5000;
const ee = new EventEmitter();

const client = new net.Socket();
client.connect(PORT, HOST, () => {
  console.log('[tcp] connected', HOST, PORT);
});

client.on('data', (data) => {
  console.log('[tcp] ev@rx %d <= %s', data.length, data.toString());
  const goso = JSON.parse(data.toString());
  const goSeq = goso['Seq'];
  ee.emit(`gw${goSeq}`, data.toString());
});

client.on('close', () => {
  console.log('[tcp] ev@close');
});

client.on('ready', () => {
  console.log('[tcp] ev@ready');
});

client.on('error', () => {
  console.log('[tcp] ev@error');
});

client.on('connect', () => {
  console.log('[tcp] ev@connect');
});

const server = http.createServer((req, res) => {
  const pd = {
    Seq: '000000',
    OpsCode: 'getItemList',
    PayLoad: {
      foo: 'bar',
      hello: true,
      farm: {
        tree: 'apple',
        fruit: 'orange',
      },
      factory: ['bike', 'ham', 'gloove'],
    },
  };

  const chunk = [];
  req.on('data', (ck) => {
    chunk.push(ck);
  });

  req.on('end', () => {
    // console.log(chunk.join().toString());
    const seqId = Date.now() + Math.random().toString().slice(3, 9);
    pd['Seq'] = seqId;
    ee.once(`gw${seqId}`, (gopayString) => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(gopayString);
    });

    client.write(JSON.stringify(pd));
  });

  //
});

server.listen(3000);
