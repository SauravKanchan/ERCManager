# ERCManager

> Npm package that simplifies deployment and usage of erc tokens on ethereum Blockchain


[![Build Status](https://travis-ci.com/SauravKanchan/ERCManager.svg?token=2yjAythLGDwdY1XXtyDa&branch=master)](https://travis-ci.com/SauravKanchan/ERCManager)
[![NPM Version][npm-image]][npm-url]
[![Hits](http://hits.dwyl.io/SauravKanchan/ERCManager.svg)][npm-url]
[![Web 3](https://img.shields.io/badge/web3-1.0.1-blue.svg)](https://www.npmjs.com/package/web3)


One to two paragraph statement about your product and what it does.


## Installation


```sh
npm install ercmanager --save
```


## Usage example
Create a new ERC20 token.

```javascript
const ERCManager = require('ercmanager');

let erc20 = new ERCManager({
        myAddress: "0x9CC14A288BB5cb9Ec0e85b606Cb6585BB7ca6a8E",
        privateKey: '88BAEA1C45C1434E494604F48A39EEDB780BA71086D109B78CC3B7D41AA49773'
});

erc20.create(symbol="SNK", token_name = "Kanchan Coin").then(function (data) {
    console.log(data)
});

```

Connect to a deployed token.
```javascript
let deployed_token = new ERCManager({
    myAddress: "0x9CC14A288BB5cb9Ec0e85b606Cb6585BB7ca6a8E",
    privateKey: '88BAEA1C45C1434E494604F48A39EEDB780BA71086D109B78CC3B7D41AA49773',
    contractAddress: "0x8298cb3a2dc8fe592504dea860ad7be1882cdcfa",
});

```

Check balance of an account
```javascript
deployed_token.balance().then(function (data) {
    console.log(data);
})
```

Trasnfer tokens: transfer(destination_account,amount)
```javascript
deployed_token.transfer("0x25666A25Ef50B0d87F1f41a47883D7583DCf7980",1).then(function (data) {
    console.log(data);
})

```

## Development setup


```sh
git clone https://github.com/SauravKanchan/ERCManager
cd ERCManager
npm install
npm test
```

## Release History

* 1.0.1
    * Add transfer
* 1.0.0
    * Work in progress

## Meta


Distributed under the MIT license. See ``LICENSE`` for more information.

[LICENSE](https://github.com/SauravKanchan/ERCManager/blob/master/LICENSE)

### Contributing

 * We're are open to `enhancements` & `bug-fixes` :smile:.
 * Feel free to add issues and submit patches

## Contributors

 * Saurav Kanchan - [SauravKanchan](https://github.com/SauravKanchan)
 * Owais Khan - [owaiswiz](https://github.com/owaiswiz)
 * Rohit Vadali - [enigmavadali](https://github.com/enigmavadali)
 * Sandip Kumar - [yadavsandip32](https://github.com/yadavsandip32)


<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/ercmanager.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/ercmanager
[npm-downloads]: https://img.shields.io/npm/dw/ercmanager.svg

