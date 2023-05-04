const mongoose = require("mongoose");

require("dotenv").config();
const connectWithDB = ()=>{
    mongoose.connect(process.env.DATABASE_URL , {
        useNewUrlParser : true , 
        useUnifiedTopology : true ,
    })
    .then(console.log("DataBase Connected Successfully"))
    .catch((error) => {
        console.log("DataBase Facing Connection Issue");
        console.log(error);
        process.exit(1);
    })
};

module.exports = connectWithDB ;
