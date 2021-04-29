import React, { Component } from 'react'
import { Form, Button, Message, Input, Label} from 'semantic-ui-react';
import Layout from '../../../components/Layout'
import Campaign from '../../../eth/web3'
import {Link, Router} from '../../../routes'
class RequestNew extends Component{

    state= {
        value:'',
        description:'',
        recipient:'',
        errorMsg:'',
        loading:false
    }
    static async getInitialProps(props){
        const {address } = props.query;
        return {address};
    }

    onSubmit = async (event) => {
        event.preventDefault()
        this.setState({errorMsg:'', loading:true})
        const campaign = await  Campaign(this.props.address)
        try{
           await campaign.createRequest(this.state.description, ether.util.parseEther(this.state.value), this.state.recipient)
            Router.pushRoute(`/campaigns/${this.props.address}/`)
        } catch(err){
            console.log(err)
            this.setState({errorMsg:err.message, loading:false})
        }
    }
    render(){
        return (
            <Layout>
                <h3> Create your request</h3>
                <Link route={`/campaigns/${this.props.address}`}>
                    <a>Back to request</a>
                </Link>
                <Form onSubmit={this.onSubmit} error ={!!this.state.errorMsg}>
                    <Form.Field>
                        <label> Description</label>
                        <Input value={this.state.description}
                        onChange={event => this.setState({description : event.target.value})} />
                    </Form.Field>
                    <Form.Field>
                        <label> Value in Ether</label>
                        <Input value={ this.state.value}
                        onChange={event => this.setState({value : event.target.value})} />

                    </Form.Field>
                    <Form.Field>
                        <label> Recipient address</label>
                        <Input value={ this.state.recipient}
                        onChange={event => this.setState({recipient : event.target.value})} />

                    </Form.Field>
                    <Button primary>Create !</Button>
                    <Message error header="Opps" content={this.state.errorMsg}></Message>

                </Form>
            </Layout>

        )
    }
}

export default RequestNew;