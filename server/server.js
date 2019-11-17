const express = require("express");
const path = require("path");
const app = express();
const sslRedirect = require("heroku-ssl-redirect");

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(sslRedirect());

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
  console.log(`App listening on port ${PORT}!`);
});



