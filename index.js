const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require('cors')

//Import routes
const authRoute = require("./routes/auth");
const todoRoute = require("./routes/todo");
const calendarRoute = require("./routes/calendar");
const courseRoute = require('./routes/courses')

dotenv.config();

app.use(cors())

//conect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
  console.log("connected to DB")
);

//Middlewate
app.use(express.json());


//Route Middlewares
app.use("/api/user", authRoute);
app.use("/api/todo", todoRoute);
app.use("/api/calendar", calendarRoute);
app.use("/api/courses", courseRoute);

app.listen(3001, () => console.log("server running"));
