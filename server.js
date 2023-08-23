const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config.parse();
}
const indexRouter = require("./routes/index");

const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");

app.use(expressLayouts);
app.use(express.static("public"));

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db / once("open", () => console.log("Connected to DB"));

app.use("/", indexRouter);

app.listen(process.env.PORT || 5000, () => console.log("Running Server..."));
