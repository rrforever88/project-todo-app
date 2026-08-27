const knex = require("./knex");

function getAllToDo() {
    return knex("todo").select("*");
};

function getToDo(id) {
    return knex("todo")
    .where("ID", id)
    .first();
};

function createToDo(todo) {
    return knex("todo").insert(todo);
};

module.exports = {
    getAllToDo,
    getToDo,
    createToDo,
};