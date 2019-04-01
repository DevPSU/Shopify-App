import { EmptyState, Layout, Page , ResourcePicker} from '@shopify/polaris';
import cookies from 'js-cookie';
import Cookies from 'js-cookie';
import store from 'store-js';

class Index extends React.Component {
state = { open: false };
    render() {
            return (
            <Page
                primaryAction={{
                    content: 'Select products',
                    // onAction: () => this.setState({open: true}),
                    onAction: () => this.rewrite(),

                }}
            >
                <ResourcePicker
                    open={this.state.open}
                    resourceType="Product"
                    showVariants={false}
                    onSelection={(resources) => this.handleSelection(resources)}
                    onCancel={() => this.setState({open: false})}/>
                <Layout>
                    <EmptyState
                        heading="Select products to start"
                        action={{
                            content: 'Select products',
                            onAction: () => this.setState({open: true}),
                        }}
                        image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
                    >
                        <p>Select products and change their price temporarily</p>
                    </EmptyState>
                </Layout>
            </Page>
            );
     }
     handleSelection = (resources) => {
        const idsFromResources = resources.selection.map((product) => product.id);
        this.setState({open: false});
         console.log(resources)
     }

     async rewrite(){
        console.log("rewrite");
        console.log(cookies.get('accessToken'));
         const options = {
             method: 'GET',
             credentials: 'include',
             headers: {
                 'X-Shopify-Access-Token': cookies.get('accessToken'),
                 'Content-Type': 'application/json',
             },
         };
         await fetch(`https://${cookies.get('shopOrigin')}/admin/orders.json?status=any`, options)
             .then((response) => response.json())
             .then((data) => {
                 cookies.set
                 console.log(data);
             })
             .catch((error) => console.error( error));
     }
}

export default Index;