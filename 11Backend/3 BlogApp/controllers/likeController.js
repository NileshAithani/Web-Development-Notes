//impor the models 
const Post = require("../models/postModel");
const Like  = require("../models/likeModel");

//like a post 
exports.likepost = async (req,res)=>{
    try{

        const{post ,user} = req.body;
        const like = new Like({
            post,user,
        });

        const savedLike = await like.save();

        //update the post collection basis on this 
        const updatePost =await Post.findByIdAndUpdate(post, {$push:{likes: savedLike._id}} ,{new :true});

        res.json({
            post:updatePost,
        })
    }

    catch(error){
        return res.status(500).json({
            error : "Error while Liking Post",
        })
    }
}


//Unlike a Post
exports.unlikePost = async(req,res)=>{
    try{
        //fetch the data from req body
        const {post , like} =req.body;

        //find and delete the like collection me se
        const deletedLike = await Like.findOneAndDelete({post:post , _id : like})  

        //update the post collection
        const updatedPost =await Post.findByIdAndUpdate(post , {$pull : {likes:deletedLike._id}} , {new : true})
        .populate("comments")  //populate the comments array with comment documnet
        .exec();

        res.json({
            post : updatedPost
        })

    }
    catch(error){
        return res.status(500).json({
            error : "Error while Unliking Post",
        })
    }
    
}




exports.dummyLink = (req , res) =>{
    res.send("<h1>This is your Dummy Page </h1>");
};