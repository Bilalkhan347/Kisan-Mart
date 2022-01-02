const express = require("express");
const app = express();
const errormiddleware = require("./middleware/error");

app.use(express.json())
//route imports
const product = require("./routes/productroute");
app.use("/api/v1",product);

//app.use("./api/v1",user);
//milldeware for errors
app.use(errormiddleware);
module.exports = app