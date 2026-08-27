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

function updateToDo(id, todo) {
    return knex("todo")
    .where("ID", id)
    .update(todo);
};

function deleteToDo(id) {
    return knex("todo").where("ID", id).del();
};

module.exports = {
    getAllToDo,
    getToDo,
    createToDo,
    updateToDo,
    deleteToDo,
};