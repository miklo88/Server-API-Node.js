const express = require("express");
const helmet = require("helmet");

// SERVER
const server = express();
// ROUTER IMPORTS FOR ROUTERS
// const actionsRouter = require("../data/routers/actionsRouter");
// const projectsRouter = require("../data/routers/projectsRouter");
const Home = require("../routes/Home");
const About = require("../routes/About");
const Contact = require("../routes/Contact");
//GLOBAL MIDDLEWARE
server.use(express.json());
server.use(helmet());

// ROUTERS BEING UTILIZED FROM IMPORTS.
// server.use("/actions", actionsRouter);
// server.use("/projects", projectsRouter);
// testapi to hook up to front end
server.use("/home", Home);
server.use("/about", About);
server.use("/contact", Contact);
// ENDPOINTS
// this request handler executes when making a GET request to "/

server.get("/", (req, res) => {
  res.status(200).json({
    url: "/",
    message: "Welcome to Carl's Server",
    operation: "GET"
  });
}); // ENDPOINTS

module.exports = server;
