// const http = require("http");

// const host = "127.0.0.1";
// const port = 4000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text-plain");
//   res.end("Hello world from Carls Localhost");
// });

// server.listen(port, host, () => {
//   console.log(`Carls API running at http://${host}:${port}/`);
// });
const server = require("./api/server.js");

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`FBI listening on https://localhost:${port}`);
});
