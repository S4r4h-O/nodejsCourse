const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");

const app = express();

// app.use("/", (req, res, next) => {
//   console.log("This always runs.");
//   next();
// });

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  console.log("Not found");
  res.status(404).send("<h1>Page not found 404.</h1>");
});

app.listen(3000);
