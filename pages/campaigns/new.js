import React, {Component} from 'react';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import contractFunction from '../../eth/factory';

class CampaignNew extends Component {
    state ={
        minimumContribution:'',
        errorMessage:'',
    }

     onSubmit = async event => {
        event.preventDefault();
        try{

            let contract = await contractFunction();
            await contract.createCampaign(this.state.minimumContribution);
        } catch(err){
            this.setState({errorMessage: err.message})
        }
    }
    render(){ return(
        <Layout>

         <h1> New Campaign</h1>
        <Form error={!!this.state.errorMessage} onSubmit={this.onSubmit}>
            <Form.Field>
                <label> Minimum contribution</label>
                <Input label="wei" labelPosition="right"
                value={this.state.minimumContribution}
                onChange = {event =>this.setState({minimumContribution:event.target.value})}/>
            </Form.Field>
            <Message error header="Ooops!" content ={this.state.errorMessage}/>
            <Button primary>Create</Button>
        </Form>
        </Layout>
    )
    }

    
}


export default CampaignNew