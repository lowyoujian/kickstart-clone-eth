import { ethers } from 'ethers';
import React, { Component } from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Campaign from '../../eth/campaign';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';


class CampaignShow extends Component {

    static async getInitialProps(props){
        const campaign = await Campaign(props.query.address);
        const summary = await campaign.getSummary();
        return{
            address: props.query.address, 
            minimumContribution: summary[0].toString(),
            balance: summary[1],
            requestsCount: summary[2].toString(),
            approversCount:summary[3].toString(),
            manager: summary[4]
        }
    }

    renderCards(){
        const{
            balance,
            manager,
            minimumContribution,
            requestsCount,
            approversCount
        } = this.props;
        const items = [
            {
                header: manager,
                meta:'Address of Manager',
                description:" The manager who created the campaing and able to send money",
                style:{overflowWrap:'break-word'}
            },
        {
        header: minimumContribution,
        meta:"Minimum contribution",
        description:' You must contribute at least this much wei to become an approver'
        },
        {
            header:requestsCount,
            meta: 'Number of Requests',
            description:'A request tries to withdraw money from the contract. Request must be approved by approvers'


        },
        {
            header:approversCount,
            meta:'Number of approvers',
            description:'Number of people who have already donated to this campaign'
        },{
            header: ethers.utils.formatEther(balance),
            meta:'Campaign balance(ether)',
            description:' The balance is how much money this campaign has got to spend'    
        }
        ]

        return <Card.Group items={items}/>
    }
    render() {
        return (
            <Layout>
                <h3>Show Campaign</h3>

                <Grid>
                    <Grid.Row>
                    <Grid.Column width={10}>
                    {this.renderCards()}
                  

                    </Grid.Column>
                <Grid.Column width={4}>
                    <ContributeForm address={this.props.address}>

                    </ContributeForm>
                </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                <Grid.Column width={10}>
                <Link route ={`/campaigns/${this.props.address}/requests`}>
                        <a>
                            <Button primary>
                                View Requests
                            </Button>
                        </a>
                    </Link>
                    </Grid.Column>
                </Grid.Row>
                </Grid>

            </Layout>);
    }

    
}
export default CampaignShow;