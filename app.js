const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./db/connect");
require('dotenv').config();


const PORT = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
const auth_route = require('./routes/Auth.route');
const doctors_routes = require("./routes/doctors");


app.get("/", (req, res) => {
    res.send("My app server is running....");
});


app.use("/auth", auth_route);
app.use("/api/all-users", doctors_routes);
// app.use("/api/products", products_routes);


const start = async () => {
    await connectDB(process.env.DB_URL);

    try {
        app.listen(PORT, () => {
            console.log(`${PORT} Yes I am connected`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
