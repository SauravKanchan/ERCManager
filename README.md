<p align="center">
  <a href="" rel="noopener">
 <img width=300px src="./ERCManager.jpg" alt="ERCManager-logo"></a>
</p>




<div align = "center">

[![Build Status](https://travis-ci.com/SauravKanchan/ERCManager.svg?token=2yjAythLGDwdY1XXtyDa&branch=master)](https://travis-ci.com/SauravKanchan/ERCManager)
[![NPM Version][npm-image]][npm-url]
![npm](https://img.shields.io/npm/dt/ercmanager.svg)
[![Web 3](https://img.shields.io/badge/web3-1.0.1-blue.svg)](https://www.npmjs.com/package/web3)
[![Hits](http://hits.dwyl.io/SauravKanchan/ERCManager.svg)][npm-url]

</div>

# ERCManager

A node package in order to deploy ERC20 compliant contracts or introduce new ERC20 tokens in the Ethereum blockchain. Simplify interaction with tokens , connectivity with web3.js all in a single package. Launch your very own token or transact with other pre-deployed tokens and raise huge funds in maybe your next ICO.

## Installation


```sh
npm install ercmanager --save
```


## Usage example
**Create a new ERC20 token.**

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
>  - The constructor creates the ERC20 token.
>  - The essential parameters are address of the creator and  their private key.
>  - The optional parameters are gas required, maximum limit of gas and the web3 provider(default = rinkeby.infura.io).

**Connect to a deployed token.**
```javascript
let deployed_token = new ERCManager({
    myAddress: "0x9CC14A288BB5cb9Ec0e85b606Cb6585BB7ca6a8E",
    privateKey: '88BAEA1C45C1434E494604F48A39EEDB780BA71086D109B78CC3B7D41AA49773',
    contractAddress: "0x8298cb3a2dc8fe592504dea860ad7be1882cdcfa",
});

```

**Check balance of an account.**
```javascript
deployed_token.balance().then(function (data) {
    console.log(data);
})
```

**Transfer tokens: transfer(destination_account,amount)**
```javascript
deployed_token.transfer("0x25666A25Ef50B0d87F1f41a47883D7583DCf7980",1).then(function (data) {
    console.log(data);
})

```

**Approve spender to spend your tokens: approve(spender_address, amount)**
```javascript
deployed_token.approve("0x25666A25Ef50B0d87F1f41a47883D7583DCf7980",100).then(function (data) {
    console.log(data);
})

```


**Transfer token from approved account to another: transferFrom(from_address, to_address, amount)**
```javascript
deployed_token.transferFrom("0x25666A25Ef50B0d87F1f41a47883D7583DCf7980", "0x420493959C379D8375aFFA6Bb0De9E5C87f0A4c3",100).then(function (data) {
    console.log(data);
})

```

**Check Allowance: checkAllowance(spender_address, amount)**
```javascript
deployed_token.checkAllowance("0x25666A25Ef50B0d87F1f41a47883D7583DCf7980", 100).then(function (data) {
    console.log(data);
})

```

**Watch transfer of tokens.**
```javascript
deployed_token.watch_transfer(function (data) {
   console.log(data.returnValues._from,data.returnValues._to,data.returnValues._value)
})
```

Watch Approval of tokens.
```javascript
deployed_token.watch_approval(function (data) {
   console.log(data.returnValues._from,data.returnValues._to,data.returnValues._value)
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

* 1.0.4
    * Add transferFrom, Approve, CheckAllowance
* 1.0.3
    * Create new tokens 
* 1.0.2
    * Fix Minor bugs 
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

