// NPM Require
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");

// Local Require
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const indexRouter = require("./routes/index");
const authorRouter = require("./routes/authors");

const app = express();

// Templating Engine (EJS)
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");

// Templating Engine (EJS-LAYOUTS)
app.use(expressLayouts);
app.use(express.static("public"));

// Related to MongoDB
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to DB"));

// Using Routes
app.use("/", indexRouter);
app.use("/authors", authorRouter);

// Server Listen
app.listen(process.env.PORT || 5000, () => console.log("Running Server..."));
