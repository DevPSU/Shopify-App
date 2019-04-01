import React from 'react';
import {Card, Collapsible, Layout, Page, ResourceList, SettingToggle, TextStyle, Thumbnail} from '@shopify/polaris';
import store from 'store-js';
import popular from './popularData.json';

class classname extends React.Component {
  
state = {
      user: store.get('user'),
      enabled: false,
  };

data = popular;

handleToggle = () => {
    this.setState(({ enabled }) => {
          return { enabled: !enabled };
        });
  };

render() {
    const {enabled} = this.state;
    const contentStatus = enabled ? 'Less' : 'More';
    const textStatus = enabled ? 'All, First, Second, Third, Fourth, Fifth' : 'All, First, Second';
    const data = this.data;

    return (
      <Page>
          <h1 class="Polaris-DisplayText Polaris-DisplayText--sizeLarge">Most Purchased Products</h1>
          <p><br /></p>
          <Card>
            <SettingToggle
               action={{
             content: contentStatus,
                 onAction: this.handleToggle, 
               }}
               enabled={enabled}
             >
               The top 10 Products ordered during the following purchases are displayed:{' '}
               <TextStyle variation="strong">{textStatus}</TextStyle>
            </SettingToggle>
          </Card>
          <p><br/></p>
            <Layout>
              <Layout.Section oneThird>
                <Card title="All Purchases">
                  <Card.Section>
                    <TextStyle variation="subdued">Products bought during any purchase</TextStyle>
                  </Card.Section>
                  <Card.Section title="Top 10">
                    <ResourceList
                      items={data[0].info}
                      renderItem={(item) => {
                        const {id, url, name, sku, image, quantity} = item;
                    
                        return (
                          <ResourceList.Item
                            id={id}
                            media={(
                              <Thumbnail
                                source={image}
                                alt={name}
                              />
                            )}
                            accessibilityLabel={`View details for ${name}`}
                          >
                            <h3>
                              <TextStyle variation="strong">{name}</TextStyle>
                            </h3>
                            <div>{quantity} bought</div>
                          </ResourceList.Item>
                        );
                      }}
                    />
                  </Card.Section>
                </Card>
              </Layout.Section>
              <Layout.Section oneThird>
                <Card title="First Purchase">
                  <Card.Section>
                    <TextStyle variation="subdued">Products bought during first purchase</TextStyle>
                  </Card.Section>
                  <Card.Section title="Top 10">
                    <ResourceList
                      items={data[1].info}
                      renderItem={(item) => {
                        const {id, url, name, sku, image, quantity} = item;
                    
                        return (
                          <ResourceList.Item
                            id={id}
                            media={(
                              <Thumbnail
                                source={image}
                                alt={name}
                              />
                            )}
                            accessibilityLabel={`View details for ${name}`}
                          >
                            <h3>
                              <TextStyle variation="strong">{name}</TextStyle>
                            </h3>
                            <div>{quantity} bought</div>
                          </ResourceList.Item>
                        );
                      }}
                    />
                  </Card.Section>
                </Card>
              </Layout.Section>
              <Layout.Section oneThird>
                <Card title="Second Purchase">
                  <Card.Section>
                    <TextStyle variation="subdued">Products bought during second purchase</TextStyle>
                  </Card.Section>
                  <Card.Section title="Top 10">
                    <ResourceList
                      items={data[2].info}
                      renderItem={(item) => {
                        const {id, url, name, sku, image, quantity} = item;
                    
                        return (
                          <ResourceList.Item
                            id={id}
                            media={(
                              <Thumbnail
                                source={image}
                                alt={name}
                              />
                            )}
                            accessibilityLabel={`View details for ${name}`}
                          >
                            <h3>
                              <TextStyle variation="strong">{name}</TextStyle>
                            </h3>
                            <div>{quantity} bought</div>
                          </ResourceList.Item>
                        );
                      }}
                    />
                  </Card.Section>
                </Card>
              </Layout.Section>
            </Layout>
            <p><br/></p>
            <Collapsible open={enabled} id="basic-collapsible">
            <Layout>
              <Layout.Section oneThird>
                <Card title="Third Purchase">
                  <Card.Section>
                    <TextStyle variation="subdued">Products bought during third purchase</TextStyle>
                  </Card.Section>
                  <Card.Section title="Top 10">
                    <ResourceList
                      items={data[3].info}
                      renderItem={(item) => {
                        const {id, url, name, sku, image, quantity} = item;
                    
                        return (
                          <ResourceList.Item
                            id={id}
                            media={(
                              <Thumbnail
                                source={image}
                                alt={name}
                              />
                            )}
                            accessibilityLabel={`View details for ${name}`}
                          >
                            <h3>
                              <TextStyle variation="strong">{name}</TextStyle>
                            </h3>
                            <div>{quantity} bought</div>
                          </ResourceList.Item>
                        );
                      }}
                    />
                  </Card.Section>
                </Card>
              </Layout.Section>
              <Layout.Section oneThird>
                <Card title="Fourth Purchase">
                  <Card.Section>
                    <TextStyle variation="subdued">Products bought during fourth purchase</TextStyle>
                  </Card.Section>
                  <Card.Section title="Top 10">
                    <ResourceList
                      items={data[4].info}
                      renderItem={(item) => {
                        const {id, url, name, sku, image, quantity} = item;
                    
                        return (
                          <ResourceList.Item
                            id={id}
                            media={(
                              <Thumbnail
                                source={image}
                                alt={name}
                              />
                            )}
                            accessibilityLabel={`View details for ${name}`}
                          >
                            <h3>
                              <TextStyle variation="strong">{name}</TextStyle>
                            </h3>
                            <div>{quantity} bought</div>
                          </ResourceList.Item>
                        );
                      }}
                    />
                  </Card.Section>
                </Card>
              </Layout.Section>
              <Layout.Section oneThird>
                <Card title="Fifth Purchase">
                  <Card.Section>
                    <TextStyle variation="subdued">Products bought during fifth purchase</TextStyle>
                  </Card.Section>
                  <Card.Section title="Top 10">
                    <ResourceList
                      items={data[5].info}
                      renderItem={(item) => {
                        const {id, url, name, sku, image, quantity} = item;
                    
                        return (
                          <ResourceList.Item
                            id={id}
                            media={(
                              <Thumbnail
                                source={image}
                                alt={name}
                              />
                            )}
                            accessibilityLabel={`View details for ${name}`}
                          >
                            <h3>
                              <TextStyle variation="strong">{name}</TextStyle>
                            </h3>
                            <div>{quantity} bought</div>
                          </ResourceList.Item>
                        );
                      }}
                    />
                  </Card.Section>
                </Card>
              </Layout.Section>
            </Layout>
          </Collapsible>
        </Page>
    );
  }
}

export default classname;