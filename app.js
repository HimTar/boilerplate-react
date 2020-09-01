const express = require("express");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const app = express();

//Configuring MongoDB
const db = "mongodb://localhost:27017/mernauth";

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

//Middlewares
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Including User Routes
const userRouter = require("./routes/User");
app.use("/user", userRouter);

//Setting PORT and Listening
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
