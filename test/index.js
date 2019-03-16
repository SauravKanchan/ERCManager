const ERCManager = require('../lib/index');
var erc20 = new ERCManager();
(async () => {
   console.log(await erc20.transfer())
})()

