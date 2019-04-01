const Koa = require('koa');
const next = require('next');
const { default: createShopifyAuth } = require('@shopify/koa-shopify-auth');
const dotenv = require('dotenv');
const { verifyRequest } = require('@shopify/koa-shopify-auth');
const session = require('koa-session');
require('isomorphic-fetch');
dotenv.config();
const cookies = require('js-cookie');
const fs = require('fs');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const { SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY } = process.env;

app.prepare().then(() => {
    const server = new Koa();
    server.use(session(server));
    server.keys = [SHOPIFY_API_SECRET_KEY];

    server.use(
        createShopifyAuth({
            apiKey: SHOPIFY_API_KEY,
            secret: SHOPIFY_API_SECRET_KEY,
            scopes: ['read_products', 'write_products', 'read_orders', 'write_orders'],
            async afterAuth(ctx) {
                const { shop, accessToken } = ctx.session;
                       ctx.cookies.set('shopOrigin', shop, { httpOnly: false });
                       ctx.cookies.set('accessToken', accessToken, {httpOnly: false})
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
                        var obj = data.orders
                        
                        fs.writeFile('./data.json', JSON.stringify(obj, null, 4), (error) => {
                            if (error) {
                                console.error(error);
                                return;
                            }
                            console.log('File has been created');
                        });
                        
                        var customers = []

                        var orders = [
                            { 
                              id:"All",
                              info:[]
                            },
                            {
                              id:"First",
                              info:[]
                            },
                            {
                              id:"Second",
                              info:[]
                            },
                            { 
                              id:"Third",
                              info:[]
                            },
                            { 
                              id:"Fourth",
                              info:[]
                            },
                            { 
                              id:"Fifth",
                              info:[]
                            }
                        ]

                        var count = 0

                        for (var i in obj) {

                          var index = customers.indexOf(customers.find(x => x.email === obj[i].email));

                          var items = obj[i].line_items

                          var purchases = []

                          for (var x in items) {

                            purchases.push({
                              id: items[x].id,
                              name: items[x].title,
                              quantity: items[x].quantity
                            })

                          }

                          if (index != -1){
                            customers[index].times.push(obj[i].created_at)

                            var length = customers[index].times.length

                            for (var purchase in purchases){
                              let id = orders[0].info.indexOf(orders[0].info.find(y => y.name === purchases[purchase].name));
                              if (id == -1){
                                orders[0].info.push({
                                  id: purchases[purchase].id,
                                  name: purchases[purchase].name,
                                  quantity: purchases[purchase].quantity
                                })
                              }
                              else{
                                orders[0].info[id].quantity += purchases[purchase].quantity
                              }
                            }

                            if (length < 6){
                              for (var purchase in purchases){
                                let id = orders[length].info.indexOf(orders[length].info.find(x => x.name === purchases[purchase].name));
                                if (id == -1){
                                  orders[length].info.push({
                                    id: purchases[purchase].id,
                                    name: purchases[purchase].name,
                                    quantity: purchases[purchase].quantity
                                  })
                                }
                                else{
                                  orders[length].info[id].quantity += purchases[purchase].quantity
                                }
                              }
                            }

                          }

                          else{
                            customers[count] = {
                              email: obj[i].email,
                              times: [],
                            }

                            customers[count].times.push(obj[i].created_at)

                            count += 1

                            for (var purchase in purchases){
                              let id = orders[0].info.indexOf(orders[0].info.find(y => y.name === purchases[purchase].name));
                              if (id == -1){
                                orders[0].info.push({
                                  id: purchases[purchase].id,
                                  name: purchases[purchase].name,
                                  quantity: purchases[purchase].quantity
                                })
                              }
                              else{
                                orders[0].info[id].quantity += purchases[purchase].quantity
                              }
                            }

                            for (var purchase in purchases){
                              let id = orders[1].info.indexOf(orders[1].info.find(x => x.name === purchases[purchase].name));
                              if (id == -1){
                                orders[1].info.push({
                                  id: purchases[purchase].id,
                                  name: purchases[purchase].name,
                                  quantity: purchases[purchase].quantity
                                })
                              }
                              else{
                                orders[1].info[id].quantity += purchases[purchase].quantity
                              }
                            }
                          }
                        }

                        for (var item in orders){
                          orders[item].info.sort((a, b) => (a.quantity < b.quantity) ? 1 : (a.quantity === b.quantity) ? ((a.name > b.name) ? 1 : -1) : -1 )
                          while (orders[item].info.length > 10){
                            orders[item].info.pop()
                          }
                        }

                        var timeBetweenData = [
                            {
                              "id": 0,
                              "name": "Between Any Two",
                              "months": 2,
                              "days": 15,
                              "hours": 13
                            },
                            {
                              "id": 1,
                              "name": "First and Second",
                              "months": 0,
                              "days": 26,
                              "hours": 7
                            },
                            {
                              "id": 2,
                              "name": "Second and Third",
                              "months": 1,
                              "days": 12,
                              "hours": 9
                            },
                            {
                              "id": 3,
                              "name": "Third and Fourth",
                              "months": 2,
                              "days": 9,
                              "hours": 17
                            },
                            {
                              "id": 4,
                              "name": "Fourth and Fifth",
                              "months": 3,
                              "days": 3,
                              "hours": 20
                            },
                            {
                              "id": 5,
                              "name": "Fifth and Sixth",
                              "months": 3,
                              "days": 24,
                              "hours": 6
                            }
                        ]  

                        var overallTime = 0
                        var overallCount = 0

                        for (i = 0; i < 5; i++){
                          var count = 0
                          var time = 0
                          for (var customer in customers){
                            if (customers[customer].times.length > (i + 1)){
                              var date1 = new Date(customers[customer].times[i])
                              var date2 = new Date(customers[customer].times[(i + 1)])
                              time += Math.abs((date1.getTime() - date2.getTime()) / 3600000)
                              count += 1

                            }
                          }

                          overallTime += time
                          overallCount += count

                          if (time == 0){
                            timeBetweenData[(i + 1)].months = 0
                            timeBetweenData[(i + 1)].days = 0
                            timeBetweenData[(i + 1)].hours = 0
                          }
                          else {
                            time = Math.abs(time / count)
                            let months = Math.floor(Math.abs(time / 730))
                            timeBetweenData[(i + 1)].months = months
                            let days = Math.floor(Math.abs((time - 730 * months) / 24))
                            timeBetweenData[(i + 1)].days = days
                            timeBetweenData[(i + 1)].hours = Math.ceil(time % 24)
                          }
                        }

                        overallTime = overallTime / overallCount
                        var months = Math.floor(Math.abs(overallTime / 730))
                        timeBetweenData[(0)].months = months
                        let days = Math.floor(Math.abs((overallTime - 730 * months) / 24))
                        timeBetweenData[(0)].days = days
                        timeBetweenData[(0)].hours = Math.ceil(overallTime % 24)

                        overallTime = overallTime * 3

                        var churn = {
                          months: Math.floor(Math.abs(overallTime / 730)),
                          days: Math.floor(Math.abs((overallTime % 730) / 24)),
                          hours: Math.ceil(overallTime % 24)
                        }

                        fs.writeFile('./pages/timeBetween.json', JSON.stringify(timeBetweenData, null, 4), (error) => {
                            if (error) {
                                console.error(error);
                                return;
                            }
                            console.log('File has been created');
                        });
                        fs.writeFile('./pages/churn.json', JSON.stringify(churn, null, 4), (error) => {
                          if (error) {
                              console.error(error);
                              return;
                          }
                          console.log('File has been created');
                        });
                        fs.writeFile('./pages/popular.json', JSON.stringify(orders, null, 4), (error) => {
                          if (error) {
                              console.error(error);
                              return;
                          }
                          console.log('File has been created');
                        });
                    })
                    .catch((error) => console.error( error));
                ctx.redirect('/');
            },

        }),
    );

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