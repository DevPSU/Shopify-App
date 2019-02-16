import { EmptyState, Layout, Page } from '@shopify/polaris';

const Index = () => (
    <Page
      primaryAction={{
        content: 'Select products',
      }}
    >
    <Layout>
      <EmptyState
        heading="Discount your products temporarily"
        action={{
          content: 'Select products',
          onAction: () => console.log('clicked'),
        }}
        image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
      >
        <p>Select products to change their price temporarily.</p>
      </EmptyState>
    </Layout>
    </Page>
  );
  
  export default Index;