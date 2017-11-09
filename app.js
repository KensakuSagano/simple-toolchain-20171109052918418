"use strict";

const express = require("express");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(`${__dirname}/dist`));

app.all("*", (req, res) => {
  console.log(`[TRACE] Server 404 request: ${req.originalUrl}`);
  res.status(200).sendFile(`${__dirname}/dist/index.html`);
});

app.listen(port, () => {
  console.log(`App started at port ${port}`);
});
