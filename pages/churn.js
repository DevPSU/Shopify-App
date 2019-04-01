import React from 'react';
import {Card, Layout, Page} from '@shopify/polaris';
import store from 'store-js';
import churn from './churn.json';

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
          <Layout>
            <Layout.Section>
                <Card>
                  <Card.Section>
                    <h2 class="Polaris-Heading">Following this period, customers are unlikely to return</h2>
                  </Card.Section>
                  <Card.Section>
                    <div>{data.months} Months : {data.days} Days : {data.hours} Hours</div>
                  </Card.Section>
                </Card>
            </Layout.Section>
          </Layout>
        </Page>
    );
  }
}

export default classname;