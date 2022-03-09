
const express = require('express');
const app = express();
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const cors = require("cors");

const productRoute = require("./routes/product");
const authRoute = require('./routes/Auth');
const userRoute = require('./routes/user');

dotenv.config();


mongoose.connect('mongodb+srv://purbo75:purbo75@cluster0.dl3qq.mongodb.net/my_db?retryWrites=true&w=majority' , { ssl: true ,sslValidate: false })
.then((result) => console.log('connection establisted with db'))
.catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/products", productRoute);

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
