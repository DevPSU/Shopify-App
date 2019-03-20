const Koa = require('koa');
const next = require('next');
const { default: createShopifyAuth } = require('@shopify/koa-shopify-auth');
const dotenv = require('dotenv');
const { verifyRequest } = require('@shopify/koa-shopify-auth');
const session = require('koa-session');
require('isomorphic-fetch');
const Router = require('koa-router');
//const processPayment = require('./server/router');
const fs = require('fs');
const { default: graphQLProxy } = require('@shopify/koa-shopify-graphql-proxy');
dotenv.config();

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const { SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY, TUNNEL_URL } = process.env;

app.prepare().then(() => {
    const server = new Koa();
    //const router = new Router();
    server.use(session(server));
    server.keys = [SHOPIFY_API_SECRET_KEY];
  
    //router.get('/', processPayment);

    server.use(
      createShopifyAuth({
        apiKey: SHOPIFY_API_KEY,
        secret: SHOPIFY_API_SECRET_KEY,
        scopes: ['read_products', 'write_products', 'read_orders', 'write_orders', 'read_all_orders'],
        async afterAuth(ctx) {
          const { shop, accessToken } = ctx.session;
          ctx.cookies.set('shopOrigin', shop, { httpOnly: false });
          // const stringifiedBillingParams = JSON.stringify({
          //   recurring_application_charge: {
          //     name: 'Recurring charge',
          //     price: 20.01,
          //     return_url: TUNNEL_URL,
          //     test: true
          //   }
          // })
          // const options = {
          //   method: 'POST',
          //   body: stringifiedBillingParams,
          //   credentials: 'include',
          //   headers: {
          //     'X-Shopify-Access-Token': accessToken,
          //     'Content-Type': 'application/json',
          //   },
          // };
          const options = {
            method: 'GET',
            credentials: 'include',
            headers: {
              'X-Shopify-Access-Token': accessToken,
              'Content-Type': 'application/json',
            },
          };
          
          await fetch(`https://${shop}/admin/orders.json?status=any`, options)
            .then((response) => response.json())
            .then((data) => {
              fs.writeFile('./data', JSON.stringify(data, null, 4), (error) => {
                if (error) {
                  console.error(error);
                  return;
                }
                console.log('File has been created');
              });
            }) 
            .catch((error) => console.error( error));
        },
      }),
    );
    server.use(graphQLProxy());
    //server.use(router.routes());
    server.use(verifyRequest());
    server.use(async (ctx) => {
      await handle(ctx.req, ctx.res);
      ctx.respond = false;
      ctx.res.statusCode = 200;
      return
    });
  
    server.listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`);
    });
  });