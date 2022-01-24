const express = require('express');
const app = express();
const authRoute = require('./routes/Auth');
const userRoute = require('./routes/user');
const dotenv = require("dotenv");
const mongoose = require('mongoose');

dotenv.config();


mongoose.connect('mongodb://localhost/my_db', { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('connection establisted with db'))
    .catch((err) => console.log(err));

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});