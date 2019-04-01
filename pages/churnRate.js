import React from 'react';
import {Card, Layout, Page} from '@shopify/polaris';
import store from 'store-js';
import churn from './churnRate.json';

class classname extends React.Component {
  
state = {
      user: store.get('user'),
      enabled: false,
  };

data = churn;

render() {
    const data = this.data;

    return (
      <Page>
          <h1 class="Polaris-DisplayText Polaris-DisplayText--sizeLarge">Average Customer Churn</h1>
          <p><br/></p>
          <Card>
            <Card.Section>
               <div>Display the percentage of customers lost after a designated period of time since their last purchase</div>
            </Card.Section>
          </Card>
          <p><br/></p>
          <Layout>
            <Layout.Section oneThird>
                <Card>
                  <Card.Section>
                    <h2 class="Polaris-Heading">Churn {data[0].name}</h2>
                  </Card.Section>
                  <Card.Section>
                    <div>{data[0].churn}% of Customers Lost {data[0].name}</div>
                  </Card.Section>
                </Card>
            </Layout.Section>
            <Layout.Section oneThird>
                <Card>
                  <Card.Section>
                    <h2 class="Polaris-Heading">Churn {data[1].name}</h2>
                  </Card.Section>
                  <Card.Section>
                    <div>{data[1].churn}% of Customers Lost {data[1].name}</div>
                  </Card.Section>
                </Card>
            </Layout.Section>
            <Layout.Section oneThird>
                <Card>
                  <Card.Section>
                    <h2 class="Polaris-Heading">Churn {data[2].name}</h2>
                  </Card.Section>
                  <Card.Section>
                    <div>{data[2].churn}% of Customers Lost {data[2].name}</div>
                  </Card.Section>
                </Card>
            </Layout.Section>
          </Layout>
          <p><br/></p>
          <Layout>
            <Layout.Section oneThird>
                <Card>
                  <Card.Section>
                    <h2 class="Polaris-Heading">Churn {data[3].name}</h2>
                  </Card.Section>
                  <Card.Section>
                    <div>{data[3].churn}% of Customers Lost {data[3].name}</div>
                  </Card.Section>
                </Card>
            </Layout.Section>
            <Layout.Section oneThird>
                <Card>
                  <Card.Section>
                    <h2 class="Polaris-Heading">Churn {data[4].name}</h2>
                  </Card.Section>
                  <Card.Section>
                    <div>{data[4].churn}% of Customers Lost {data[4].name}</div>
                  </Card.Section>
                </Card>
            </Layout.Section>
            <Layout.Section oneThird>
                <Card>
                  <Card.Section>
                    <h2 class="Polaris-Heading">Churn {data[5].name}</h2>
                  </Card.Section>
                  <Card.Section>
                    <div>{data[5].churn}% of Customers Lost {data[5].name}</div>
                  </Card.Section>
                </Card>
            </Layout.Section>
          </Layout>
        </Page>
    );
  }
}

export default classname;