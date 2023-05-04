//Import the Model 

const Todo = require("../models/Todo");

//Define Router Handler

exports.createTodo = async(req ,res) => {
    try{
        //extract title and description from req bady
        const {title , description} =req.body;
        
        //create a new Todo object and insert in DAtabase
        const response = await Todo.create({title ,description});

        //send a json response with success flag
        res.status(200).json(
            {
                success : true ,
                data : response,
                message:"Entry Done",
            }
        );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message,
        })

    }
}
