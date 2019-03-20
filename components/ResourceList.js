import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Card,
         ResourceList,
         Stack,
         TextStyle,
         Thumbnail,
         DisplayText,
         DescriptionList,
         DataTable,
} from '@shopify/polaris';
import store from 'store-js';
import { Redirect } from '@shopify/app-bridge/actions';
import * as PropTypes from 'prop-types';

const GET_PRODUCTS_BY_ID = gql`
  query getProducts {
      orders(first: 3) {
        edges {
          node {
            lineItems(first: 10) {
              edges {
                node {
                  image {
                    originalSrc
                  }
                  name
                  quantity
                }
              }
            }
          }
        }
      }
  }
`;

class ResourceListWithProducts extends React.Component {
    state = { item: '',};
        
    static contextTypes = {
        polaris: PropTypes.object
    };
        
    redirectToProduct = () => {
        const redirect = Redirect.create(this.context.polaris.appBridge);
        redirect.dispatch(
            Redirect.Action.APP,
            '/edit-products'
        );
    };
   render() {
     return (
       <Query query={GET_PRODUCTS_BY_ID}>
         {({ data, loading, error }) => {
           if (loading) return <div>Loading…</div>;
           if (error) return <div>{error.message}</div>;
           console.log(data);
           return (
             <Card sectioned>
                <DescriptionList
                    items = {[
                        {   term: data.products.edges[0].node.title,
                            description: '', },
                        {   term: data.products.edges[1].node.title,
                            description: '', },
                        {   term: data.products.edges[2].node.title,
                            description: '', },
                        {   term: data.products.edges[3].node.title,
                            description: '', },
                        {   term: data.products.edges[4].node.title,
                            description: '', },
                        {   term: data.products.edges[5].node.title,
                            description: '', },  
                        {   term: data.products.edges[6].node.title,
                            description: '', },
                        {   term: data.products.edges[7].node.title,
                            description: '', },
                        {   term: data.products.edges[8].node.title,
                            description: '', },
                        {   term: data.products.edges[9].node.title,
                            description: '', },
                    ]}>
                </DescriptionList>
             </Card>
           );
         }}
       </Query>
     );
   }
 }
    
 export default ResourceListWithProducts;