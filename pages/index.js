import React from 'react';
import {Card, DescriptionList, ResourceList, Layout, List, Page, TextStyle, Thumbnail} from '@shopify/polaris';

class classname extends React.Component {

render() {
    return (
      <Page>
          <h1 class="Polaris-DisplayText Polaris-DisplayText--sizeLarge">Shopify Store Analytics</h1>
          <p><br/></p>
          <div> </div>
          <Layout>
            <Layout.Section>
            <Card>
                  <Card.Section>
                    <h2 class="Polaris-Heading">Project Overview</h2>
                  </Card.Section>
                  <Card.Section>
                    <List type="bullet">
                      <List.Item>Determine the most popular products for each purchase</List.Item>
                      <List.Item>Calculate customer churn</List.Item>
                      <List.Item>Find average time between purchases</List.Item>
                    </List>
                  </Card.Section>
            </Card>
            <Card>
                  <Card.Section>
                    <h2 class="Polaris-Heading">Our Sponsors</h2>
                  </Card.Section>
                  <Card.Section>
                    <ResourceList
                      resourceName={{singular: 'customer', plural: 'customers'}}
                      items={[
                        {
                          id: 341,
                          url: "https://acm.psu.edu/wp-content/uploads/2018/10/DEVPSULOGO-1024x1024.jpg",
                          name: "DevPSU Logo",
                          text: 'Developed with DevPSU',
                        },
                        {
                          id: 256,
                          url: "http://static1.squarespace.com/static/5c63721a34c4e223bbcd826d/t/5c6726c1e79c704ba4cab911/1550264001810/wavebreak-logo.png?format=1500w",
                          name: "Wavebreak Logo",
                          text: 'Tasked by Wavebreak',
                        },
                      ]}
                      renderItem={(item) => {
                        const {id, url, name, text} = item;

                        return (
                            <ResourceList.Item
                              id={id}
                              media={(
                                <Thumbnail
                                  source={url}
                                  size="large"
                                  alt={name}
                                />
                              )}
                              accessibilityLabel={`View details for ${name}`}
                            >
                              <h3>
                                <TextStyle variation="strong">{text}</TextStyle>
                              </h3>
                            </ResourceList.Item>
                        );
                      }}
                    />
                  </Card.Section>
                </Card>
                <Card>
                  <Card.Section>
                    <h2 class="Polaris-Heading">Our Team</h2>
                  </Card.Section>
                  <Card.Section>
                    <DescriptionList
                      items={[
                        {
                          term: 'Gabriel Stewart',
                          description: 'Software Engineer',},
                        {
                          term: 'Joshua Yan',
                          description: 'Software Engineer',
                        },
                        {
                          term: 'Stanley Kwok ',
                          description: 'Software Engineer',
                        },
                        {
                          term: 'Louden Maclay',
                          description: 'Software Engineer',
                        },
                        {
                          term: 'Robert Hsu',
                          description: 'Project Manager',
                        },
                      ]}
                    />
                  </Card.Section>
                </Card>
            </Layout.Section>
          </Layout>
        </Page>
    );
  }
}

export default classname;