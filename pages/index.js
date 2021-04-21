import React, {Component} from 'react';
import { Card, Button } from 'semantic-ui-react';
import contractFunction from '../eth/factory';
import Layout from '../components/Layout';

class CampaignIndex extends Component {

    static async getInitialProps() {
        let instance = await contractFunction();
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
              <Button floated="right"
         content="create Campaign:"
         icon = "add circle" 
         primary />
            <h3>Open Campaigns</h3> {this.renderCampaigns()}
        
      </div></Layout>
    }
}

export default CampaignIndex;