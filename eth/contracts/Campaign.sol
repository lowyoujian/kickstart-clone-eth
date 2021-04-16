// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;


contract CampaignFactory {
    Campaign[] public deployedCampaigns;
    
    function createCampaign(uint minimum) public{
        Campaign newCampaign = new Campaign(minimum, msg.sender);
        deployedCampaigns.push(newCampaign);
    }
    
    function getDeployedCampaigns() public view returns(Campaign[] memory){
        return deployedCampaigns;
    }
}

contract Campaign{
    struct Request{
        string description;
        uint value;
        address payable recipient;
        bool complete; 
        uint approvalCount;
        mapping(address => bool) approvals;
    }
    
    address public manager;
    mapping(address => bool) public approvers;
    uint public  numRequests;
    mapping(uint => Request) public requests;
    uint public approversCount;
    
    uint public minimumContribution;
    
    modifier restricted(){
        require(msg.sender == manager);
        _;
    }
    
    
    constructor(uint minimum, address sender){
        manager = sender;
        minimumContribution = minimum;
    }
    
    function contribute() public payable {
        require(msg.value > minimumContribution);
        approvers[msg.sender] = true;
        approversCount++;
    }
    
    function createRequest(string memory description , uint value, address payable recipient) public payable restricted {
           Request storage r = requests[numRequests++];
                r.description = description;
                r.value = value;
                r.recipient = recipient;
                r.complete = false;
                r.approvalCount = 0;

    }
    
    function approveRequest(uint index) public {
        Request storage request  = requests[index];
         require(approvers[msg.sender]);
         require(!request.approvals[msg.sender]); 
        request.approvals[msg.sender] = true;
       request.approvalCount++;
    }
    
    function finalizeRequest(uint index) public payable restricted{
        Request storage request = requests[index];
        require(request.approvalCount > (approversCount /2));
        require(!requests[index].complete);
        request.recipient.transfer(request.value);
        
        request.complete = true;
        
    }
    
   
    
    
    
    
}