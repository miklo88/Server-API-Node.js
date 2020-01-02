const server = require("./api/server");
// PORT
const port = 4000;
// WHERE THE FBI TAPS IN
server.listen(port, () => {
  console.log(`Listening on the adobo express http://localhost:${port}`);
});
