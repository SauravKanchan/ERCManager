const ERCManager = require('../lib/index');
var erc20 = new ERCManager();
(async () => {
   console.log(await erc20.transfer("0x9CC14A288BB5cb9Ec0e85b606Cb6585BB7ca6a8E",2));
   console.log("balance",await erc20.balance());
})()

