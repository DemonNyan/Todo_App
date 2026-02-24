const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // သင့် db.json ဖိုင်အမည်
const middlewares = jsonServer.defaults();
const serverless = require("serverless-http");

server.use(middlewares);
server.use("/.netlify/functions/api", router);

module.exports.handler = serverless(server);
