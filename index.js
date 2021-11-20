const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config({ path: "./.env" });

const app = express();
const Routes = require("./routes/index");

const connectMongo = require("./config/mongo.js");
connectMongo();

const port = process.env.PORT || 5000;

app.use(cors({ origin: "*" }));
app.use(express.json({ extended: false }));
app.use("/api", Routes);

app.get("/test", (req, res) => {
  return res.send({ success: true, data: "Test Route" });
});

console.log("hello");

app.listen(port, () => console.log(`Listening on port ${port}`));
