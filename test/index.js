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

let deployed_token = new ERCManager({
    myAddress: "0x9CC14A288BB5cb9Ec0e85b606Cb6585BB7ca6a8E",
    privateKey: '88BAEA1C45C1434E494604F48A39EEDB780BA71086D109B78CC3B7D41AA49773',
    contractAddress: "0x8298cb3a2dc8fe592504dea860ad7be1882cdcfa",
});

deployed_token.balance().then(function (data) {
    console.log(data);
})

deployed_token.transfer("0x25666A25Ef50B0d87F1f41a47883D7583DCf7980",1).then(function (data) {
   console.log(data);
   deployed_token.checkAllowance().then(function (data) {
      console.log("Allowance:", data);
   });
   deployed_token.approve("0x3a44501B80dd7C2A2A7EeB00721fdB8b8c66f9E7", 100).then(function(data) {
      console.log("Approved:", data);
      let deployed_token2 = new ERCManager({
         myAddress: "0x3a44501B80dd7C2A2A7EeB00721fdB8b8c66f9E7",
         privateKey: '8B79AFDF4568FECD18A85309F87F9CD93F7F901C6E30271B14ED52EC3FC0E7C2',
         contractAddress: "0x8298cb3a2dc8fe592504dea860ad7be1882cdcfa",
      });
      deployed_token2.transferFrom("0x9CC14A288BB5cb9Ec0e85b606Cb6585BB7ca6a8E", "0x420493959C379D8375aFFA6Bb0De9E5C87f0A4c3", 12).then(function(data) {
         console.log("Transfered:", data);
      });
   });
});
