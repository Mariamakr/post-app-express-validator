const EntitySchema = require("typeorm").EntitySchema;

const CategoryEntity = new EntitySchema({
    name:"Category",
    target: "Category",
    column: {
        id:{
            primary: true,
            type: "int",
            genersted: true
        },
        name: {
            type: "varchar"
        }
    }
});

module.exports = {CategoryEntity}