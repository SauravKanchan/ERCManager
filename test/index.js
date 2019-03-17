const ERCManager = require('../lib/index');

let erc20 = new ERCManager(
    myAddress = "0x9CC14A288BB5cb9Ec0e85b606Cb6585BB7ca6a8E",
    privateKey = '88BAEA1C45C1434E494604F48A39EEDB780BA71086D109B78CC3B7D41AA49773'
);

erc20.create(symbol="SNK", token_name = "Kanchan Coin").then(function (data) {
    console.log(data)
});

