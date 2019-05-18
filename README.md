# DeliveryTracking

## Description
The project simulates a landing page for an order tracking system according to an order number. Includes admin tools to simulate creating a new order, clicking on a specific order link and changing the order state.

## Tech Stack
### Frontend
**built with**
* Angular 7.3.8
### Backend
**built with**
* NodeJS, express
### Database
**built with**
* MongoDB

## Functionality
**Create new order:** Create new order in the DB.

**Show order tracking:** The button appears after clicking on the 'create new order' button. Simulates a click on an email link to track a specific order.

**Next step:** Increments the state of the current order by one step both in the backend application (nodejs, mongo) and on the DOM.

## Setup and Installation
#### Note
This project requires that Angular7, MongoDB, Node.js and NPM be installed on your computer.
***
### Client
1. Open the `client` folder in the terminal
2. Run `npm i`
3. Now setup the server before launching the app, [here](#server) 
4. Once the server is up and running, from the `client` folder, run: `ng serve --open`


### Server
1. Open the `server` folder in the terminal
2. Run `npm start`
3. Once the server is up and running you can now [run the  client](#client)

The website should load automatically in the default browser (preferably Chrome). Play around and Enjoy!

## API
METHOD | PATH | RESULT | EXAMPLE
| - | - | - | -|
| `GET` | `/order/:orderNumber` | returns an order object | `http://localhost:3030/orders/bfd17ad0-701d-11e9-aa4a-154e9923b248` |
| `GET` | `/orders/promote_step/:orderNumber` | returns boolean (true if promoted and false if not) |  `http://localhost:3030/orders/promote_step/bfd17ad0-701d-11e9-aa4a-154e9923b248` |
| `POST` | `/orders/new_order` | creates a new order object and save it in the db | `http://localhost:3030/orders/newOrder` |  

### Models

#### Order Model
```javascript

{
  "title": "SMART TV",
  "description": "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in magni porro quas veniam, reiciendis beatae provident quasi obcaecati cumque. Officiis possimus reprehenderit pariatur cupiditate? Quas eum odit nostrum laudantium.",
  "imgUrl": "https://images.philips.com/is/image/PhilipsConsumer/40HFL3011T_12-IMS-en_AU?wid=494&hei=435&$pnglarge$",
  "price": 230,
  "customer": {
      "name": "jhon snow",
      "email": "abc@abc.abc",
      "phone": 972534253694,
      "address": {
          "country": "Israel",
          "city": "Tel-Aviv",
          "street": "Dubnov",
          "number": 9
      }
  },
  "provider": {
      "name": "Ladingo",
      "email": "xyz@xyz.xyz",
      "phone": 543329856,
      "address": {
          "country": "China",
          "city": "Beijing",
          "street": "Qianmen",
          "number": 9
      }
  }
}
```