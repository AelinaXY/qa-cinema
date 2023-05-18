const express = require("express");
const cors = require("cors");
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');

const app = express();

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to test application." });
});

require("./routes/usersRoute.js")(app);
require("./routes/ccdetailsRoute.js")(app);
require("./routes/filmsRoute.js")(app);
require("./routes/showingsRoute.js")(app);
require("./routes/screensRoute.js")(app);
require("./routes/ticketsRoute.js")(app);
require("./routes/discussionBoardRoute.js")(app);

// // set port, listen for requests
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   
// });

// Set ports for two databases
const port = 8080;


app.listen(port, () => {
  
});

const stripe = require("stripe")(
  "sk_test_51N6WNWCKjd8RwmSKm2ukkDLFViI5khLyvD5GKLcIFEBtEIHyFp1ZJ4utF3x0tV4WXamYpI6mXVypvqA3SBLqE1Y600o867sDCD"
);

app.use(express.static("public"));



const calculateOrderAmount = (items) => {
  
  let returnAmount = 0;


  items.forEach(i => {

    if(i.id === 'adult-ticket')
    {
      returnAmount+=1100;
    }
    if(i.id === 'child-ticket')
    {
      returnAmount+=500;
    }
    if(i.id === 'concession-ticket')
    {
      returnAmount+=600;
    }
  });

  console.log(returnAmount);


  return returnAmount;

};

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;
  console.log("I'm an ORDER");

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "gbp",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
    id: paymentIntent.id,
  });
});

app.post("/update-payment-intent", async (req, res) => {
  const { items } = req.body;
  const {id} = req.body;
  console.log("I'm an UPDATE");


  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.update(id,{
    amount: calculateOrderAmount(items)
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(4242, () => console.log("Node server listening on port 4242!"));




// const port = process.env.PORT || 8080;
// app.listen(port, () => {
//   
// });


module.exports={app};