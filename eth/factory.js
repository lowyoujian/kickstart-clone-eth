import signerFunction from './web3';
const ethers = require('ethers')
let signer
let contract
import CampaignFactory from './build/CampaignFactory.json';


// infuraProvider.getSigner();
// console.log(`Your current ITX balance is ${balance}`)

export default async function(){


    console.log("contract at : " );
   let signer =  await signerFunction();
    const contract = new ethers.Contract(process.env.DEPLOYED_CONTRACT_ADDRESS,CampaignFactory.abi, signer)
    return contract;
        
}
