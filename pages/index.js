import React, {Component} from 'react';
import instance from '../eth/factory';

class CampaignIndex extends Component {
    async componentDidMount(){
        console.log(instance);
        const campaigns =     await instance.getDeployedCampaigns();
    }

    render() {
        return <div> Index</div>
    }
}

export default CampaignIndex;