const express  = require("express");
const app = express();

//Loading Configration 
require("dotenv").config();
const PORT = process.env.PORT || 3000 ;


//MiddleWare 
app.use(express.json());

const blog = require("./routes/blog");

//mount 
app.use("/api/v1" , blog);


//database call
const connectWithDB = require("./config/database");
connectWithDB();


//start the server 
app.listen(PORT , ()=>{
    console.log(`App is Started at port no ${PORT}`);
})


//By default 
app.get("/" , (req , res) => {
    res.send("<h1>This is my Home Page </h1>")
})
