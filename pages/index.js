import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Card, 
         EmptyState,
         Layout, 
         Page, 
         ResourceList, 
         ResourcePicker, 
         TextStyle, 
         Thumbnail } from '@shopify/polaris';
import store from 'store-js';
import ResourceListWithProducts from '../components/ResourceList';

const GET_ORDER_DATA = gql`
  query getOrders {
    shop{
        name
    }
  }
`;
class Index extends React.Component {
state = { open: false };
hold = store.get('test');

    render() {
        const emptyState = store.get('ids');
            return (
                <Query query={GET_ORDER_DATA}>
                {({ data, loading, error }) => {
                  if (loading) return <div>Loading…</div>;
                  if (error) return <div>{error.message}</div>;
                  return (
                    <Layout>
                        <Layout.Section oneThird>
                            <Card title="Florida" actions={[{content: 'Manage'}]}>
                            <Card.Section>
                                <TextStyle variation="subdued">455 units available</TextStyle>
                            </Card.Section>
                            <Card.Section title="Items">
                                <ResourceList
                                resourceName={{singular: 'product', plural: 'products'}}
                                items={[
                                    {
                                    id: 341,
                                    url: 'produdcts/341',
                                    name: 'Black & orange scarf',
                                    sku: '9234194023',
                                    quantity: '254',
                                    media: (
                                        <Thumbnail
                                        source="https://burst.shopifycdn.com/photos/black-orange-stripes_373x@2x.jpg"
                                        alt="Black orange scarf"
                                        />
                                    ),
                                    },
                                    {
                                    id: 256,
                                    url: 'produdcts/256',
                                    name: 'Tucan scarf',
                                    sku: '9234194010',
                                    quantity: '201',
                                    media: (
                                        <Thumbnail
                                        source="https://burst.shopifycdn.com/photos/tucan-scarf_373x@2x.jpg"
                                        alt="Tucan scarf"
                                        />
                                    ),
                                    },
                                ]}
                                renderItem={(item) => {
                                    const {id, url, name, sku, media, quantity} = item;

                                    return (
                                    <ResourceList.Item
                                        id={id}
                                        url={url}
                                        media={media}
                                        accessibilityLabel={`View details for ${name}`}
                                    >
                                        <h3>
                                        <TextStyle variation="strong">{name}</TextStyle>
                                        </h3>
                                        <div>SKU: {sku}</div>
                                        <div>{quantity} available</div>
                                    </ResourceList.Item>
                                    );
                                }}
                                />
                            </Card.Section>
                            </Card>
                        </Layout.Section>
                        <Layout.Section oneThird>
                            <Card title="Nevada" actions={[{content: 'Manage'}]}>
                            <Card.Section>
                                <TextStyle variation="subdued">301 units available</TextStyle>
                            </Card.Section>
                            <Card.Section title="Items">
                                <ResourceList
                                resourceName={{singular: 'product', plural: 'products'}}
                                items={[
                                    {
                                    id: 341,
                                    url: 'produdcts/341',
                                    name: 'Black & orange scarf',
                                    sku: '9234194023',
                                    quantity: '100',
                                    media: (
                                        <Thumbnail
                                        source="https://burst.shopifycdn.com/photos/black-orange-stripes_373x@2x.jpg"
                                        alt="Black orange scarf"
                                        />
                                    ),
                                    },
                                    {
                                    id: 256,
                                    url: 'produdcts/256',
                                    name: 'Tucan scarf',
                                    sku: '9234194010',
                                    quantity: '201',
                                    media: (
                                        <Thumbnail
                                        source="https://burst.shopifycdn.com/photos/tucan-scarf_373x@2x.jpg"
                                        alt="Tucan scarf"
                                        />
                                    ),
                                    },
                                ]}
                                renderItem={(item) => {
                                    const {id, url, name, sku, media, quantity} = item;

                                    return (
                                    <ResourceList.Item
                                        id={id}
                                        url={url}
                                        media={media}
                                        accessibilityLabel={`View details for ${name}`}
                                    >
                                        <h3>
                                        <TextStyle variation="strong">{name}</TextStyle>
                                        </h3>
                                        <div>SKU: {sku}</div>
                                        <div>{quantity} available</div>
                                    </ResourceList.Item>
                                    );
                                }}
                                />
                            </Card.Section>
                            </Card>
                        </Layout.Section>
                        <Layout.Section oneThird>
                            <Card title="Minneapolis" actions={[{content: 'Manage'}]}>
                            <Card.Section>
                                <TextStyle variation="subdued">1931 units available</TextStyle>
                            </Card.Section>
                            <Card.Section title="Items">
                                <ResourceList
                                resourceName={{singular: 'product', plural: 'products'}}
                                items={[
                                    {
                                    id: 341,
                                    url: 'produdcts/341',
                                    name: 'Black & orange scarf',
                                    sku: '9234194023',
                                    quantity: '1230',
                                    media: (
                                        <Thumbnail
                                        source="https://burst.shopifycdn.com/photos/black-orange-stripes_373x@2x.jpg"
                                        alt="Black orange scarf"
                                        />
                                    ),
                                    },
                                    {
                                    id: 256,
                                    url: 'produdcts/256',
                                    name: 'Tucan scarf',
                                    sku: '9234194010',
                                    quantity: '701',
                                    media: (
                                        <Thumbnail
                                        source="https://burst.shopifycdn.com/photos/tucan-scarf_373x@2x.jpg"
                                        alt="Tucan scarf"
                                        />
                                    ),
                                    },
                                ]}
                                renderItem={(item) => {
                                    const {id, url, name, sku, media, quantity} = item;

                                    return (
                                    <ResourceList.Item
                                        id={id}
                                        url={url}
                                        media={media}
                                        accessibilityLabel={`View details for ${name}`}
                                    >
                                        <h3>
                                        <TextStyle variation="strong">{name}</TextStyle>
                                        </h3>
                                        <div>SKU: {sku}</div>
                                        <div>{quantity} available</div>
                                    </ResourceList.Item>
                                    );
                                }}
                                />
                            </Card.Section>
                            </Card>
                        </Layout.Section>
                        </Layout>
                  );
                }}
                </Query>
            );
     }
     handleSelection = (resources) => {
        const idsFromResources = resources.selection.map((product) => product.id);
        this.setState({open: false});
        store.set('ids', idsFromResources)
     }
}