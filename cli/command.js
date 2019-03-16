const { prompt } = require('enquirer');

function stringNotEmpty(string) {
    if (!string.replace(/\s/g, '').length)
        return false;
    return true
}

async function command() {
    const { tokenName } = await prompt({
        type: 'input',
        initial: 'Binance Coin',
        name: 'tokenName',
        message: 'Enter Token Name',
        validate: stringNotEmpty
    });

    const { tokenSymbol } = await prompt({
        type: 'input',
        initial: 'BNB',
        name: 'tokenSymbol',
        message: 'Enter Token Symbol',
        validate: stringNotEmpty
    });

    const { tokenQuantity } = await prompt({
        type: 'input',
        name: 'tokenQuantity',
        initial: 10000,
        message: 'Enter Token Quantity',
        validate: (n) => n>0
    });

    const { accountAddress } = await prompt({
        type: 'input',
        name: 'accountAddress',
        initial: "0x7df4ff20e5f35b92fc80bac49fd690ddaa7ad6b9",
        message: 'Enter Your Account Address',
        validate: stringNotEmpty
    });

    const { accountKey } = await prompt({
        type: 'input',
        name: 'accountKey',
        initial: "7c2c52e87011b19444a0ee5ce395f4427d6c9c02d2e361e8d76de73c3dc71cf4",
        message: 'Enter Your Account\'s Private Key',
        validate: stringNotEmpty
    });

}

command();
