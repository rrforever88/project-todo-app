const knex = require("./knex");

function getAllToDo() {
    return knex("todo").select("*");
};

function getToDo(id) {
    return knex("todo")
    .where("ID", id)
    .first();
};

module.exports = {
    getAllToDo,
    getToDo
};