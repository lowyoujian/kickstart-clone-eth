import provider from './web3';
const ethers = require('ethers')
import CampaignFactory from './build/CampaignFactory.json';

console.log(provider,'asdf');
const instance = new ethers.Contract('0x6d6E8D64ED5b409E589d273Fd7f7fBC19964271f',CampaignFactory.abi, provider)

export default instance;