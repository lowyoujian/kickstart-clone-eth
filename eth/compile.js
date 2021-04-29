const path = require('path')
const solc = require('solc')
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build')
fs.removeSync(buildPath);
const contractPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');

const source = fs.readFileSync(contractPath, 'utf8');

const input = {
    language: 'Solidity',
    sources: {
        'campaign.sol': {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*']
            }
        }
    }
}


fs.ensureDirSync(buildPath);
console.log(input)
// const { abi: interface, evm: { bytecode: { object } } }
var result = JSON.parse(solc.compile(JSON.stringify(input))).contracts['campaign.sol']; // 

for (let contract in result){
    fs.outputJSONSync(
        path.resolve(buildPath, contract + '.json'),
        result[contract]
    )
}