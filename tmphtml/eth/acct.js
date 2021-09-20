const bip39 = require('bip39');
const { hdkey } = require('ethereumjs-wallet');

const util = require('ethereumjs-util');

const mnemonic = bip39.generateMnemonic();
console.log(`助记词: ${mnemonic}`);

bip39.mnemonicToSeed(mnemonic).then((seed) => {
  console.log(`种子: ${util.bufferToHex(seed)}\n`);

  const hdWallet = hdkey.fromMasterSeed(seed);

  for (let i = 0; i < 1; i++) {
    /*
     m / purpose‘ / coin_type’ / account‘ / change / address_index
     purpose: 提案bip-44
     coin_type: 币种型号，以太坊60
     account: 独立子账户
     change:
     address_index:
     */
    const key = hdWallet.derivePath(`m/44'/60'/0'/0/${i}`);
    const pf = `m/44'/60'/0'/0/${i}`;

    console.log(`${pf} 私钥：${util.bufferToHex(key._hdkey._privateKey)}`);
    console.log(`${pf} 公钥：${util.bufferToHex(key._hdkey._publicKey)}`);

    let address = util.pubToAddress(key._hdkey._publicKey, true);
    address = util.toChecksumAddress(`0x${address.toString('hex')}`);

    console.log(`${pf} 地址：${address.toString().toLowerCase()}`, '\n');
  }
});
