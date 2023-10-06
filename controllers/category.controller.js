const categoryService = require('../services/category.services')

exports.findAll = async(req, res) => {
    console.log('Find all categories');
    try{
        const result = await categoryService.findAll();
        res.status(200).json({status: true});
        console.log("Success in finding all categories");


    }catch(err){
        res.status(400).json({status: false, data: err});
        console.log("Problem in finding all categories");

    }

}

exports.findOne = async(req, res) => {
    const result = await categoryService.findOne();
    const id = req.params.id;
    console.log("Find category with id ", id);

    try{
        res.status(200).json({status:true, data:result})
        console.log("Success in finding category with id", id);

    }catch(err){
        res.status(400).json({status:false, data: err});
        console.log("problem in finding category with id", id);
    }
}

exports.create = async(req, res) => {
    console.log("Insert new category name");
    const name = req.body.name;

    try{
        const result = await categoryService.create(name);
        res.status(200).json({status: true, data: result});
        console.log("Success in inserting/saving the category");        
    } catch(err) {
        req.status(400).json({status: false, data: err});
        console.log("Problem in saving category")
    }
}

exports.update = async(req,res) =>{
    const id = req.params.id;
    console.log("update category with id", id);

    try{
        const result = await categoryService.update(req.body);
        res.status(200).json({status:true, data:result});
        console.log("Success in updating category", id);

    }catch(err){
        res.status(400).json({status:false, data:err});
        console.log("Problem in updating category", id)
    }
}

exports.delete = async(req, res) =>{
    const id = req.params.id;
    console.log("service deleting category", id);

    try{
        const result = await categoryService.deleteCategory(id);
        req.status(200).json({status: true, data: result});
        console.log("Success in deleting category with id", id);

    }catch(err){
        res.status(400).json({status:false, data:err});
        console.log("Problem in deleting category", id);
    }
}