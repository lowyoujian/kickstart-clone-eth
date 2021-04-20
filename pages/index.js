import React, {Component} from 'react';
import { Card, Button } from 'semantic-ui-react';
import instance from '../eth/factory';
import Layout from '../components/Layout';

import 'semantic-ui-css/semantic.min.css'
class CampaignIndex extends Component {

    static async getInitialProps() {
        const campaigns =     await instance.getDeployedCampaigns();
        return {campaigns};
    }
    
    renderCampaigns() {
        const items = this.props.campaigns.map(address =>  {
            return {
                header: address,
                description:<a>View Campaign</a>,
                fluid: true
            }
        })
        return <Card.Group items={items}/>;
    }

    render() {
        return <Layout><div>
            
            <h3>Open Campaigns</h3> {this.renderCampaigns()}
        
        <Button
         content="create Campaign:"
         icon = "add circle" 
         primary /></div></Layout>
    }
}

export default CampaignIndex;