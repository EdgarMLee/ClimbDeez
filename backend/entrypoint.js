const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors"); // Middleware for enabling Cross-Origin Resource Sharing (CORS).
const helmet = require("helmet"); // Middleware for securing HTTP headers.
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();
const PORT = process.env.PORT || 3000;

// Create Server
const ClimbDeezWebExpressServer = express();

// Middleware setup
ClimbDeezWebExpressServer.use(bodyParser.json()); // Parse JSON request bodies
ClimbDeezWebExpressServer.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded request bodies
ClimbDeezWebExpressServer.use(morgan("dev")); // HTTP request logging
ClimbDeezWebExpressServer.use(cors()); // Enable CORS
ClimbDeezWebExpressServer.use(helmet()); // Secure HTTP headers

// Define routes
ClimbDeezWebExpressServer.get("/", (req, res) => {
  res.send("Welcome to my API!");
});

// Start the server, everything happens here
ClimbDeezWebExpressServer.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
