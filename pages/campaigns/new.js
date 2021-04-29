import React, {Component} from 'react';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import contractFunction from '../../eth/factory';
import { Router} from '../../routes';

class CampaignNew extends Component {
    state ={
        minimumContribution:'',
        errorMessage:'',
        loading:false
    }

     onSubmit = async event => {
        event.preventDefault();
        this.setState({loading:true, errorMessage:''})
        try{
            let contract = await contractFunction();
            await contract.createCampaign(this.state.minimumContribution);
            Router.pushRoute('/');
        } catch(err){
            this.setState({errorMessage: err.message})
        }

        this.setState({loading:false})

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
            <Button loading={this.state.loading} primary>Create!</Button>
        </Form>
        </Layout>
    )
    }

    
}


export default CampaignNew