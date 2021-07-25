//app.js
var app = require('express')();
var http = require('http').Server(app);

var leakobjs = [];
function LeakClass() {
  this.x = 1;
}

app.get('/', function (req, res) {
  console.log('get /');
  for (var i = 0; i < 1000; i++) {
    leakobjs.push(new LeakClass());
  }
  res.send('<h1>Hello world</h1>');
});

http.listen(3000, function () {
  console.log('listening on port 3000');
});
