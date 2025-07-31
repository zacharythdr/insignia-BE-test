require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/connection");
const app = express();
const port = process.env.PORT || 3000;
const userRoutes = require("./routes/userRoutes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World! Ini test Insignia!");
});

app.use("/users", userRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
