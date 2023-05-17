const express = require("express");
const cors = require("cors");
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger-output.json')

const app = express();
const app1 = express();

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));
app1.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());
app1.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app1.use(express.urlencoded({ extended: true }));

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app1.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to test application." });
});
app1.get("/", (req, res) => {
  res.json({ message: "Welcome to test application." });
});

const usersRoutes=require("./routes/usersRoute.js");
usersRoutes.configureRoutes(app,app1);
const ccdetailsRoutes = require("./routes/ccdetailsRoute.js");
ccdetailsRoutes.configureRoutes(app,app1)
const filmsRoutes = require("./routes/filmsRoute.js");
filmsRoutes.configureRoutes(app, app1);
const showingsRoutes = require("./routes/showingsRoute.js");
showingsRoutes.configureRoutes(app,app1);
const screensRoutes = require("./routes/screensRoute.js");
screensRoutes.configureRoutes(app,app1)
const ticketsRoutes = require("./routes/ticketsRoute.js");
ticketsRoutes.configureRoutes(app,app1);
const discussionRoutes = require("./routes/discussionBoardRoute.js");
discussionRoutes.configureRoutes(app,app1);


// // set port, listen for requests
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });

// Set ports for two databases
const cinemaDbPort = 8080;
const cinema_testDbPort = 8081;

app.listen(cinemaDbPort, () => {
  console.log(`Server is running on cinema db port ${cinemaDbPort}.`);
});

app1.listen(cinema_testDbPort, () => {
  console.log(`Server is running on cinema_test db port ${cinema_testDbPort}.`);
});

module.exports={app,app1};