const postService = require('../services/post.services');

exports.findAll = async (req, res) =>{
    console.log("Find All posts ")

    try{
        const result = await postService.findAll();
    }catch(err){
        res.status(400).json({sttus:false, data:err})
        console.log("Problem in fetching all posts");
    }
}

exports.findOne = async (req, res) =>{
    const id = req.params.id;
    console.log("Find the post with id", id);

    try{
        const result = await postService.findOne();
        res.status(200).json({status:true, data:result})
        console.log("Succes in finding post")
    }catch(err){
        res.status(400).json({status:false, data:err});
        console.log("Problem in finding post with id", id);
    }
}

exports.create = async(req, res) => {
    const data = req.body;

    console.log("Insert post ", data.title);

    try{
        const result = await postService.create(data);
        res.status(200).json({status:true, data:result});
        console.log("Success in saving post ", title);

    }catch(err){

        res.status(400).json({status:false, data:err});
        console.log("Problem in saving post");
    }
}

exports.updatePost = async(req, res) => {
    const id = req.params.id;
    console.log("Update post with id", id);
    try{
        const result = await postService.updatePost(req.body);
        res.status(200).json({status:true, data:result});
        console.log("Success in updating the post")
    }catch(err){
        res.status(400).json({status:false, data: err});
        console.log("Problem in updating post", err)
    }
}

exports.updateCategory = async(req, res)=>{
    const id = req.params.id;
    console.log("Service that updates the categories of a post")
    try{
        const result = await postService.updateCategory(req.body);
        res.status(200).json({status:true, data:result});
        console.log("Success in updating the post's category")
    }catch(err){
        res.status(400).json({status:false, data: err});
        console.log("Problem in updating post category", err)
    }

}

exports.deletePost = async(req, res)=>{
    const id = req.params.id;
    console.log("Service that deletes a post")
    try{
        const result = await postService.deletePost(id);
        res.status(200).json({status:true, data:result});
        console.log("Success in deleting the post")
    }catch(err){
        res.status(400).json({status:false, data: err});
        console.log("Problem in deleting the post", err)
    }

}


exports.deleteCategories = async(req, res)=>{
    const id = req.params.id;
    console.log("Service that deletes a post")
    try{
        const result = await postService.deletePost(id);
        res.status(200).json({status:true, data:result});
        console.log("Success in deleting the post")
    }catch(err){
        res.status(400).json({status:false, data: err});
        console.log("Problem in deleting the post", err)
    }

}