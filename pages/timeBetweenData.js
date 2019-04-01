import React from 'react';
import {Card, Layout, Page} from '@shopify/polaris';
import store from 'store-js';
import timeBetween from './timeBetweenData.json';

class classname extends React.Component {
  
state = {
      user: store.get('user'),
      enabled: false,
  };

data = timeBetween;

render() {
    const data = this.data;

    return (
      <Page>
          <h1 class="Polaris-DisplayText Polaris-DisplayText--sizeLarge">Time Between Purchases</h1>
          <p><br/></p>
          <Card>
            <Card.Section>
               <div>Display the average time between different purchases by the same customer</div>
            </Card.Section>
          </Card>
          <p><br/></p>
          <Layout>
            <Layout.Section oneThird>
                <Card>
                  <Card.Section>
                    <h2 class="Polaris-Heading">{data[0].name} Purchases</h2>
                  </Card.Section>
                  <Card.Section>
                    <h4 class="Polaris-Heading">Time</h4>
                    <p><br/></p>
                    <div>{data[0].months} Months : {data[0].days} Days : {data[0].hours} Hours</div>
                  </Card.Section>
                </Card>
            </Layout.Section>
            <Layout.Section oneThird>
                <Card>
                  <Card.Section>
                    <h2 class="Polaris-Heading">{data[1].name} Purchases</h2>
                  </Card.Section>
                  <Card.Section>
                    <h4 class="Polaris-Heading">Time</h4>
                    <p><br/></p>
                    <div>{data[1].months} Months : {data[1].days} Days : {data[1].hours} Hours</div>
                  </Card.Section>
                </Card>
            </Layout.Section>
            <Layout.Section oneThird>
                <Card>
                  <Card.Section>
                    <h2 class="Polaris-Heading">{data[2].name} Purchases</h2>
                  </Card.Section>
                  <Card.Section>
                    <h4 class="Polaris-Heading">Time</h4>
                    <p><br/></p>
                    <div>{data[2].months} Months : {data[2].days} Days : {data[2].hours} Hours</div>
                  </Card.Section>
                </Card>
            </Layout.Section>
          </Layout>
          <p><br/></p>
          <Layout>
          <Layout.Section oneThird>
                <Card>
                  <Card.Section>
                    <h2 class="Polaris-Heading">{data[3].name} Purchases</h2>
                  </Card.Section>
                  <Card.Section>
                    <h4 class="Polaris-Heading">Time</h4>
                    <p><br/></p>
                    <div>{data[3].months} Months : {data[3].days} Days : {data[3].hours} Hours</div>
                  </Card.Section>
                </Card>
            </Layout.Section>
            <Layout.Section oneThird>
                <Card>
                  <Card.Section>
                    <h2 class="Polaris-Heading">{data[4].name} Purchases</h2>
                  </Card.Section>
                  <Card.Section>
                    <h4 class="Polaris-Heading">Time</h4>
                    <p><br/></p>
                    <div>{data[4].months} Months : {data[4].days} Days : {data[4].hours} Hours</div>
                  </Card.Section>
                </Card>
            </Layout.Section>
            <Layout.Section oneThird>
                <Card>
                  <Card.Section>
                    <h2 class="Polaris-Heading">{data[5].name} Purchases</h2>
                  </Card.Section>
                  <Card.Section>
                    <h4 class="Polaris-Heading">Time</h4>
                    <p><br/></p>
                    <div>{data[5].months} Months : {data[5].days} Days : {data[5].hours} Hours</div>
                  </Card.Section>
                </Card>
            </Layout.Section>
          </Layout>
        </Page>
    );
  }
}

export default classname;