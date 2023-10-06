const { createQueryBuilder } = require('typeorm');

const CategoryEntity = require('../model/Category').CategoryEntity;
const dataSource = require('../connect').dataSource;

function findAll() {
    const result = dataSource
    .getRepository(CategoryEntity)
    .createQueryBuilder()
    .select('category')
    .from(CategoryEntity, 'category')
    .getMany()

    return result;
}

//to .select('category') einai san na leme select * from Category as 'category'

function findOne(id) {
    const result = dataSource
    .getRepository(CategoryEntity)
    .createQueryBuilder()
    .select('ct')
    .from(CategoryEntity, 'ct')
    .where('ct.id = :ID', {ID : id})
    .getOne()

    return result

}

function create(name){
    console.log('Service category create' , name);

    const result = dataSource
        .getRepository(CategoryEntity)
        .createQueryBuilder()
        .insert()
        .into(CategoryEntity)
        .values([
            {name : name}
        ])
        .execute()
        .catch(err => console.log(error));

        return result;
}

function update(name){
    console.log('Service category update', name);

    const result = dataSource
    .getRepository(CategoryEntity)
    .createQueryBuilder()
    .update(CategoryEntity)
    .set({name: data.name})
    .where('id = :ID', {ID: data.id})
    .execute()
    .catch(error => console.log(error));

    return result;
}

function deleteCategory(id){
    const result = dataSource
    .getRepository(CategoryEntity)
    .createQueryBuilder()
    .delete()
    .from(CategoryEntity)
    .where('id = :ID', {ID: id})
    .execute()
    .catch(error => console.log(error));

    return result;
}

module.exports = { findAll, findOne, create }