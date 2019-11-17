const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "..", "build")));

if(process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https') res.redirect(`https://${req.header('host')}${req.url}`);
    else next();
  });
};

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
  console.log(`App listening on port ${PORT}!`);
});



