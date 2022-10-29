import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import MainLayout from '../components/Layout';
import { Link } from '../routes';

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns };
  }
  renderCampaigns() {
    const items = this.props.campaigns.map((address) => {
      return {
        header: address,
        description:
          <Link route={`/campaigns/${address}`}>
            <a>
              View Campaign
            </a>
          </Link>,
        fluid: true
      };
    });
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <div>
        <MainLayout>
          <div>
            <h3>Open Campaigns</h3>
            <Link route='/campaigns/new'>
              <a>
                <Button floated='right' content="Add startup" icon="add circle" primary />
              </a>
            </Link>
            <div style={{ marginLeft: '-8px' }}>
              {this.renderCampaigns()}
            </div>
          </div>
        </MainLayout>
      </div>
    );
  }
}

export default CampaignIndex;