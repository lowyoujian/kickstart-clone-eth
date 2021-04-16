const assert = require('assert');
const ganache = require('ganache-cli');
const ethers = require('ethers');


const compiledFactory = require('../eth/build/CampaignFactory.json');
const compiledCampaign = require('../eth/build/Campaign.json');

let accounts;
let factoryContract;
let campaignAddress;
let campaign;
let signer;
let provider;

beforeEach(async() => {
    const url = "http://localhost:8545";

     provider = new ethers.providers.JsonRpcProvider()
     // console.log('Attempting to deploy from account ',accounts[0])
    
     signer = provider.getSigner(0);
     const accounts = await provider.listAccounts();
    const factory = new ethers.ContractFactory(compiledFactory.abi, compiledFactory.evm.bytecode.object, signer)
     factoryContract = await factory.deploy();
    // factoryContract.deployTransaction
    // console.log(factoryContract.address)
    
    await factoryContract.createCampaign(200);
    const [campaignAddress] = await (factoryContract.getDeployedCampaigns());
    campaign =  new ethers.Contract(campaignAddress, compiledCampaign.abi,signer );

   
}) 

describe('Campaign  contract', ()=>{
    it('can deploy a factory and a campaign', async ()=>{
       
       
        assert.ok(campaign.address);
        assert.ok(factoryContract.address);
    });

    // it('make sure manager of campaign is the creater of the campaign', async() =>{
    //     const signerAddress = await signer.getAddress();
    //     const manager = await  campaign.manager();
    //     assert.strictEqual(signerAddress, manager);
    // })

    // it('allows people to contribute money and marks them as approvers', async() => {
    //     const signer = await provider.getSigner(1);
    //     const signer1Address = await signer.getAddress();
    //     const signer2 = await provider.getSigner(2);
    //     const signer2Address = await signer2.getAddress();
    //     const signer0 = await provider.getSigner(0);
    //     const signer0Address = await signer0.getAddress();

    //     const tx = await campaign.contribute({ value  :'211'});
    //     const isApproval = await campaign.approvers(signer0Address);
    //     console.log(signer1Address,signer2Address)
    //     console.log(isApproval);
    //     assert(isApproval);
    // })
    // it('requires a miminum contribution', async() => {

    //     try {
    //         await campaign.contribute({value:'19'})
    //         assert(false);
    //     } catch (err) {
    //         assert(err);
    //     }
   
    // })
    
    // it('allows a manager to make a payment request', async() =>{
    //     const signer1 = await provider.getSigner(1);
    //     const signer1Address = await signer1.getAddress();
 
    //     await campaign.createRequest('Buy batteries',4000, signer1Address,{value:'30000'}  )
    //     const request = await campaign.requests(0);
    //     assert.strictEqual('Buy batteries', request.description)
    // }
    // )
    it('processes requests', async() =>{
        const signer1 = await provider.getSigner(1);
        const signer1Address = await signer1.getAddress();
        let signer1InitialBalance = await signer1.getBalance();

        await campaign.contribute({value:  (15 * ethers.constants.WeiPerEther).toString()})
        await campaign.createRequest('Buy batteries', (5 * ethers.constants.WeiPerEther).toString(), signer1Address,{value:'30000'}  );
        await campaign.approveRequest(0);
        await campaign.finalizeRequest(0);
        const request = await campaign.requests(0);

        const approvalCount = await request.approvalCount;
        let signer1Balance = await signer1.getBalance();
        assert(signer1Balance.gt(signer1InitialBalance));
    })
})

