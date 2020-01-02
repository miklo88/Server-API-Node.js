const server = require("./api/server");

const port = 4000;

server.listen(port, () => {
  console.log(`Listening on the adobo express http://localhost:${port}`);
});
