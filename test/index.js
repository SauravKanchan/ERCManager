const ERCManager = require('../lib/index');

let erc20 = new ERCManager({
        myAddress: "0x9CC14A288BB5cb9Ec0e85b606Cb6585BB7ca6a8E",
        privateKey: '88BAEA1C45C1434E494604F48A39EEDB780BA71086D109B78CC3B7D41AA49773'
});

erc20.create(symbol = "SNK", token_name = "Kanchan Coin").then(function (data) {
    console.log(data)
    erc20.transfer("0x25666A25Ef50B0d87F1f41a47883D7583DCf7980",1).then(function (data) {
       console.log(data);
    })

});

// let deployed_coin = new ERCManager({
//     myAddress: "0x9CC14A288BB5cb9Ec0e85b606Cb6585BB7ca6a8E",
//     privateKey: '88BAEA1C45C1434E494604F48A39EEDB780BA71086D109B78CC3B7D41AA49773',
//     contractAddress: "0x978bA1CA75c1eEFa71b569C0E1a6544A5D884909",
// });
//
// deployed_coin.transfer("0x25666A25Ef50B0d87F1f41a47883D7583DCf7980",1).then(function (data) {
//     console.log(data);
// })

