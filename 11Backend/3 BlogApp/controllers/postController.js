const Post = require("../models/postModel");


exports.createPost = async (req , res ) =>{
    try{

        //fetch data from req body
        const {title , body} = req.body ;
        
        //create a post objext
        const post = new Post({
            title,body,
        });

        //save the new post into the database
        const savedPost =await post.save();


        res.json({
            post : savedPost
        })

    }
    catch(error){
        return res.status(400).json({
            error: "Errror while creating post"
        });
       

    }
};

exports.getAllPosts = async (req , res )=>{
    try{
        const posts = await Post.find().populate("likes").populate("comments").exec();
        res.json({
            posts,
        })
    }
    catch(error){
        return res.status(400).json({
            error: "Errror while creating post"
        });
    }
}