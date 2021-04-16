const ethers = require('ethers');
const compiledFactory = require('./build/CampaignFactory.json');

// const provider = new HDWalletProvider(
//     'elbow average maze leisure view lonely alone pistol neck force oppose like',
//     'https://rinkeby.infura.io/v3/ec1cca45e02d4ba8bc9fcb9aab0ceab9'
// )
//no longer using HDwalletprovider



const deploy = async ()=> {
    const url = "https://rinkeby.infura.io/v3/ec1cca45e02d4ba8bc9fcb9aab0ceab9";
    const privateKey = '' ;
    var provider = new ethers.providers.JsonRpcProvider(url,"rinkeby");
   var wallet = new ethers.Wallet(privateKey,provider);
   console.log(wallet);
    // console.log('Attempting to deploy from account ',accounts[0])
    // const result = await provider.getBlock(0)
    // console.log(result);
    // const signer = provider.getSigner(0)
    try{

        const factory = new ethers.ContractFactory(compiledFactory.abi, compiledFactory.evm.bytecode.object, wallet)
        var contract = await factory.deploy();
        console.log(contract.address);
        console.log(contract);
    } catch(err){
        console.log(err);
    }
    
}
deploy();