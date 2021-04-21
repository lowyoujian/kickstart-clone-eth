const ethers = require('ethers');

// const provider = new ethers.providers.Web3Provider(window.ethereum)
let provider;
let wallet;
let signer;
let accounts;

export default async function (){

    if(typeof(window) !== 'undefined' && typeof(window.ethereum) !== 'undefined'){
        // metamask ok
        accounts = await window.ethereum.enable();
        provider = new ethers.providers.Web3Provider(window.ethereum)
        signer = provider.getSigner();
        
    } else {
        // not running metamask or on the server
        
        provider = new ethers.providers.InfuraProvider('rinkeby',
        
        process.env.INFURA_PROJECT_ID
        );
        signer = new ethers.Wallet(process.env.ETH_SECRET_KEY, provider)
    }
    return signer;
}




