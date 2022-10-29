import React, { Component } from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';
import MainLayout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import ComntributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';

class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);

    const summary = await campaign.methods.getSummary().call();

    return {
      address: props.query.address,
      minimumContribution: summary[0],
      totalBalance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4]
    };
  }

  renderCards() {
    const {
      totalBalance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount
    } = this.props;

    const items = [
      {
        header: manager,
        meta: 'Address of Manager',
        description: 'The manager created this campaign',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: minimumContribution,
        meta: 'Minimum Contribution(wei)',
        description: 'You must contribute at least this much wei'
      },
      {
        header: requestsCount,
        meta: 'Number of Requests',
        description: 'A request trie to withdraw money from the contract.'
      },
      {
        header: approversCount,
        meta: 'Number of Approvers',
        description: 'Number of people who have already donated to this contract.'
      },
      {
        header: web3.utils.fromWei(totalBalance, 'ether'),
        meta: 'Campaign Balance (ethere)',
        description: 'The balance is how much money this campaign has spent.'
      }
    ];

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <MainLayout>
        <h3 style={{ margin: '0 0 14px 0'}}>Campaign Show</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>
              {this.renderCards()}
            </Grid.Column>
            <Grid.Column width={6}>
              <ComntributeForm address={this.props.address} />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Link route={`/campaigns/${this.props.address}/requests`}>
                <a>
                  <Button primary> View requests</Button>
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </MainLayout>
    );
  };
}

export default CampaignShow;