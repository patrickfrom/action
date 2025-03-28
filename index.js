const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

let server = null; // Store the server instance

if (require.main === module) {
  server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

module.exports = { app, startServer: () => server = app.listen(port), stopServer: () => server?.close() };
