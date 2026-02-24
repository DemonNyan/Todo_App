const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
// /api path ကနေ ဝင်လာတာတွေကို handle လုပ်ဖို့ rewrite လုပ်ပေးရပါမယ်
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  }),
);
server.use(router);

module.exports = server;
