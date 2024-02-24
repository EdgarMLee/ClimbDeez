/**
 * Router for application to handle requests to
 * 1.) Create a Climber profile
 * 2.) Add metadata to Climber profile
 * 3.) Update Climber profile metadata
 * 4.) Read Climber profile metadata
 * 5.) Delete Climber profile
 */

const express = require("express");
const ClimberRouter = express.Router();

ClimberRouter.get("/", (req, res) => {
  res.send("Welcome to my Climber Profile Page!");
});
module.exports = ClimberRouter;
