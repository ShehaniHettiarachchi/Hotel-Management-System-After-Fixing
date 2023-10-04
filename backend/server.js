const express = require("express"); // Express web server framework
const mongoose = require("mongoose"); // MongoDB
const bodyParser = require("body-parser"); // Parses the request body to be a readable json format
const cors = require("cors"); // Cross Origin Resource Sharing
const dotenv = require("dotenv"); // Loads environment variables from a .env file into process.env
const csrf = require("csurf"); // CSRF Protection
const app = express(); // Initialize the Express application
require("dotenv").config(); // Loads environment variables from a .env file into process.env
const helmet = require("helmet");
const rateLimit = require("express-rate-limit"); // Import express-rate-limit
const passportStrategy = require("./passport");

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL; // MongoDB URL

mongoose.connect(URL, {});

const connection = mongoose.connection; // MongoDB Connection
connection.once("open", () => {
  console.log("MongoDB Database Connection Successfull"); // Display in console if connection is successful
});

// CSRF Protection middleware
// Use csurf middleware
const csrfProtection = csrf({ 
  cookie: true,
  secure: true,
  sameSite: 'none',
  httpOnly: true,
});

//Content Security Policy middleware
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", 'localhost'],
      upgradeInsecureRequests: true,
    },
  }
));

// Define a rate limiting strategy (e.g., 100 requests per hour per IP)
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 100, // limit each IP to 100 requests per windowMs
});


// Admin Routes

const AdminRouter = require("./routes/admin.js");
app.use("/admin", AdminRouter, csrfProtection, limiter);

// Customer Routes

const customerRouter = require("./routes/customers.js");
app.use("/customer", customerRouter);

// Tour Routes

const tourRouter = require("./routes/tour");
app.use("/tour", tourRouter);

// Supplier Routes

const supplierRouter = require("./routes/suppliers.js");
app.use("/suppliers", supplierRouter);

//Paysheet Routes

const paysheetRouter = require("./routes/paysheets.js");
app.use("/paysheets", paysheetRouter);

//Manager Routes

const managerRouter = require("./routes/managers.js");
app.use("/manager", managerRouter);

// Foods Endpoints

const foodRouter = require("./routes/foods.js");
app.use("/foods", foodRouter);

// Employee Routes

const employee = require("./routes/employee.js");
app.use("/Employee", employee);

//Resource Management

const resmangerrouter = require("./routes/resmanger");
app.use("/resmanger", resmangerrouter);

//Package Management

const packmangerrouter = require("./routes/packageman");
app.use("/package", packmangerrouter);

//Inventory Management

const itemRouter = require("./routes/items");
app.use("/item", itemRouter);

//Feedback Management

const feedbackmangerrouter = require("./routes/feedbacks");
app.use("/feedback", feedbackmangerrouter);

// Material Endpoint

const materialRouter = require("./routes/material");
app.use("/material", materialRouter);

// Booking Management

const bookingRouter = require("./routes/bookings");
app.use("/booking", bookingRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port number : ${PORT}`); // Dipaly in console if server is running
});
