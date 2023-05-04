const express = require("express");
const router = express.Router();

//import Controller
const{createTodo} = require("../controllers/createTodo");
const{getTodo ,getTodoById} = require("../controllers/getTodo")
const {updateTodo} = require("../controllers/updateTodo")
const{deleteTodo} = require("../controllers/deleteTodo")

//Define API route -> Post Request say 
router.post("/createTodo" , createTodo);
router.get("/getTodos" , getTodo);
router.get("/getTodo/:id" , getTodoById);
router.put("/updateTodo/:id" , updateTodo);
router.delete("/deleteTodo/:id" , deleteTodo)

module.exports = router;