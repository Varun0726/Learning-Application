const dotenv = require("dotenv")

dotenv.config({path:".env"})

const express = require("express");
const bodyparser = require("body-parser");
const AdminRouter = require();
const UserRouter = require();
const app = express();
const {connectDB} = require("./Database/index");

connectDB();

app.use(bodyparser.json());

app.use("Admin",);
app.use("User",);




app.listen(Process.env.PORT,()=>{
    console.log(`Welcome to the server ${process.env.PORT}`);
})