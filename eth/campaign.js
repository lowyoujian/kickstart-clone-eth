import signerFunction from './web3';
import Campaign from './build/Campaign.json';
const ethers = require('ethers');



export default async(address) => {
    
    let signer =  await signerFunction();
    const contract = new ethers.Contract(address,Campaign.abi, signer)
    return contract; 
}