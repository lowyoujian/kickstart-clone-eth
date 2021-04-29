import { ethers } from 'ethers';
import React, {Component } from 'react';
import { Form, Input, Button, Message } from 'semantic-ui-react';
import Campaign from '../eth/campaign';
import {Router} from '../routes';
class ContributeForm extends Component{

    state ={
        value:'',
        loading:false,
        errorMsg:'',
    }

    onSubmit = async (event) => {

        event.preventDefault();

        this.setState({loading:true, errorMsg:''})
        const campaign = await Campaign(this.props.address);

        try{
            await campaign.contribute({ value  : ethers.utils.parseEther(this.state.value)})
            Router.replaceRoute(`/campaigns/${this.props.address}`);

        } catch(err){
            this.setState({errorMsg:err.message})
            console.log(err.message)
        }
        this.setState({loading:false, value:''})



    }
    render(){
        return(
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMsg}>
                <Form.Field>
                    <label>Amount to contribute</label>
                    <Input
                    value={this.state.value}
                    onChange = {event=> this.setState({value: event.target.value})}
                    label='ether'
                    labelPosition='right'
                    />
                     </Form.Field>
                     <Form.Field>
                        <Message error header="Opps" content={this.state.errorMsg}></Message>
                        <Button primary loading={this.state.loading}>
                            Contribute!
                        </Button>
                     </Form.Field>
                                             <Message error header="Opps" content={this.state.errorMsg}></Message>

               
            </Form>
        )
    }
}

export default ContributeForm;