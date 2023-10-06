const {dataSource} = require('../connect');

const PostEntity = require('../model/Post').PostEntity;

function findAll(){
    const result = dataSource
    .getRepository(PostEntity)
    .createQueryBuilder("post")
    .leftJoinAndSelect("post.categories", "category")
    .getMany()

    return result;
}

function findOne(id){
    const result = dataSource
    .getRepository(PostEntity)
    .createQueryBuilder('post')
    .leftJoinAndSelect("post.categories", "category")
    .where("post.id = :ID", {ID: id})
    .getOne()

    return result;
}

function create(data) {
    const result = dataSource
    .getRepository(PostEntity)
    .save(data)
    .catch((error) => console.log("Problem in creating the post", err))

    return result;
}

// Create json in postman 
// { 
//  "title" :"my second post"
//   "text" : " my second post test"
//    "categories" : [
//          {"id": 29},
//          {"id": 31}
//      ]
// }

function updatePost(data){
    const result = dataSource
    .getRepository(PostEntity)
    .createQueryBuilder()
    .update(PostEntity)
    .set({
        title: data.title,
        text: data.text
    })
    .where("id = :ID" , { ID : data.id})
    .execute()

    return result;
}

//allos tropos update ektos apo to set pou exouyme dei sto category
//edo kanoume update ta categories tou post
async function updateCategory(data){
    const actualRelationShips = await dataSource
    .getRepository(PostEntity)
    .createQueryBuilder()
    .relation(PostEntity, "categories")
    .off(data.id)
    .loadMany()

    const result = await dataSource
    .getRepository(PostEntity)
    .createQueryBuilder()
    .relation(PostEntity, "categories")
    .of(data.id)
    .addAndRemove(data.categories, actualRelationShips)
    .catch((error) => console.log("Cannot update categories", error))

    return result;
    //return actualRelationShips;
}

function deletePost(id){
    const result = dataSource
    .getReposiroty(PostEntity)
    .createQueryBuilder()
    .delete()
    .from(PostEntity)
    .where('id = :ID', {ID: id})

    .execute()

    return result;
}

function deleteCategories(data){
    const result = dataSource
    .getRepository(PostEntity)
    .createQueryBuilder()
    .relation(PostEntity, "categories")
    .of(data)
    .remove(data.categories)
        

        return result;
}

module.exports = {findAll, findOne, create, updatePost, updateCategory, deletePost, deleteCategories}