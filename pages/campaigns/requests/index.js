import React, {Component} from 'react';
import {Button, Grid} from 'semantic-ui-react';
import {Link} from '../../../routes';
import Layout from '../../../components/Layout'
class RequestIndex extends Component{

    static async getInitialProps(props){
        const {address} = props.query;
        return {address}
    }
    render(){
        return(
          <Layout>
              <Grid>
                  <Grid.Column floated='left' width = {5}>
                  <h3>Requests</h3>

                  </Grid.Column>
                  <Grid.Column floated='right' width = {5}>
                    <Link route={`/campaigns/${this.props.address}/requests/new`}>
                        <a>
                            <Button primary>Add Request</Button>
                        </a>
                    </Link>

                  </Grid.Column>
              </Grid>
             
          </Layout>

        )
    }
}

export default RequestIndex;