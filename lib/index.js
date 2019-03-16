var Web3 = require('web3');
var Tx = require('ethereumjs-tx');

class ERCManager {

    constructor(
        myAddress = "0x580a28388E292adBB6fCf83fbdb56d5b313D04dA",
        privateKey = '1068E1D200D2BD3140445AFEC1AC7829F0012B87FF6C646F6B01023C95DB13C8',
        destAddress = "0x25666A25Ef50B0d87F1f41a47883D7583DCf7980",
        transferAmount = 1,
        contractAddress = "0x8298cb3a2dc8fe592504dea860ad7be1882cdcfa",
        gasPriceGwei = 3,
        gasLimit = 3000000,
        chainId =4,
        provider = "https://rinkeby.infura.io/",
    ) {
        this.myAddress = myAddress;
        this.privateKey = privateKey;
        this.destAddress = destAddress;
        this.transferAmount = transferAmount;
        this.contractAddress = contractAddress;
        this.gasPriceGwei = gasPriceGwei;
        this.gasLimit = gasLimit;
        this.chainId = chainId;
        this.web3 = new Web3(provider);
    }

    async transfer() {

        // Determine the nonce
        var count = await this.web3.eth.getTransactionCount(this.myAddress);
        console.log(`num transactions so far: ${count}`);
        var abiArray = [{
            "constant": true,
            "inputs": [],
            "name": "name",
            "outputs": [{"name": "", "type": "string"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"name": "_spender", "type": "address"}, {"name": "_value", "type": "uint256"}],
            "name": "approve",
            "outputs": [{"name": "success", "type": "bool"}],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "totalSupply",
            "outputs": [{"name": "", "type": "uint256"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"name": "_from", "type": "address"}, {"name": "_to", "type": "address"}, {
                "name": "_value",
                "type": "uint256"
            }],
            "name": "transferFrom",
            "outputs": [{"name": "success", "type": "bool"}],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{"name": "", "type": "address"}],
            "name": "balances",
            "outputs": [{"name": "", "type": "uint256"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "decimals",
            "outputs": [{"name": "", "type": "uint8"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{"name": "", "type": "address"}, {"name": "", "type": "address"}],
            "name": "allowed",
            "outputs": [{"name": "", "type": "uint256"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{"name": "_owner", "type": "address"}],
            "name": "balanceOf",
            "outputs": [{"name": "balance", "type": "uint256"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "symbol",
            "outputs": [{"name": "", "type": "string"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"name": "_to", "type": "address"}, {"name": "_value", "type": "uint256"}],
            "name": "transfer",
            "outputs": [{"name": "success", "type": "bool"}],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{"name": "_owner", "type": "address"}, {"name": "_spender", "type": "address"}],
            "name": "allowance",
            "outputs": [{"name": "remaining", "type": "uint256"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [{"name": "_initialAmount", "type": "uint256"}, {
                "name": "_tokenName",
                "type": "string"
            }, {"name": "_decimalUnits", "type": "uint8"}, {"name": "_tokenSymbol", "type": "string"}],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        }, {
            "anonymous": false,
            "inputs": [{"indexed": true, "name": "_from", "type": "address"}, {
                "indexed": true,
                "name": "_to",
                "type": "address"
            }, {"indexed": false, "name": "_value", "type": "uint256"}],
            "name": "Transfer",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{"indexed": true, "name": "_owner", "type": "address"}, {
                "indexed": true,
                "name": "_spender",
                "type": "address"
            }, {"indexed": false, "name": "_value", "type": "uint256"}],
            "name": "Approval",
            "type": "event"
        }]

        var contract = new this.web3.eth.Contract(abiArray, this.contractAddress, {
            from: this.myAddress
        });

        // How many tokens do I have before sending?
        var balance = await contract.methods.balanceOf(this.myAddress).call();
        console.log(`Balance before send: ${balance} `);

        // Use Gwei for the unit of gas price
        // Chain ID of Rinkeby Test Net is 4, replace it to 1 for Main Net
        var rawTransaction = {
            "from": this.myAddress,
            "nonce": "0x" + count.toString(16),
            "gasPrice": this.web3.utils.toHex(this.gasPriceGwei * 1e9),
            "gasLimit": this.web3.utils.toHex(this.gasLimit),
            "to": this.contractAddress,
            "value": "0x0",
            "data": contract.methods.transfer(this.destAddress, this.transferAmount).encodeABI(),
            "chainId": this.web3.utils.toHex(this.chainId)
        };

        console.log(`Raw of Transaction: \n${JSON.stringify(rawTransaction, null, '\t')}\n------------------------`);

        var privKey = new Buffer(this.privateKey, 'hex');
        var tx = new Tx(rawTransaction);
        tx.sign(privKey);

        var serializedTx = tx.serialize();
        console.log(`Attempting to send signed tx:  ${serializedTx.toString('hex')}\n------------------------`);
        var receipt = await this.web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'));
        console.log(`Receipt info: \n${JSON.stringify(receipt, null, '\t')}\n------------------------`);
    }
}


module.exports = ERCManager
