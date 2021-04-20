const ethers = require('ethers');

// const provider = new ethers.providers.Web3Provider(window.ethereum)
let provider;

if(typeof(window) !== 'undefined' && typeof(window.ethereum) !== 'undefined'){
    // metamask ok
    provider = new ethers.providers.Web3Provider(window.ethereum)
} else {
    // not running metamask or on the server
     provider = new ethers.providers.InfuraProvider('rinkeby','ec1cca45e02d4ba8bc9fcb9aab0ceab9' )
      
}
console.log(provider)

export default provider;