// Server Instantiate
const { request } = require('express');
const express = require('express');
const app = express();


// Use to parse req.body in express -> PUt & post
const bodyParser = require('body-parser');
// specifically parse JSON data & add it to the request.Body object
app.use(bodyParser.json());




// Acivate the server on 3000 port 
app.listen(3000 , ()=>{
    console.log("Server Started at port number 3000");
});

// Routes
app.get('/',(request,response)=>{
    response.send("Hello Everyone..Kaise ho");
})

app.post('/api/cars' , (request ,response)=>{
    const{name,brand} =request.body;
    console.log(name);
    console.log(brand);
    response.send("car Submitted Successfully");
    
})

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myDatabase',{
    useNewUrlParser:true ,
    useUnifiedTopology:true
})
.then(()=>{console.log("Connection Successful")})
.catch((error)=>{console.log("Recieve an error")})