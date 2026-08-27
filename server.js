const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./db/todo");


app.use(bodyParser.urlencoded({ extend: false }));
app.use(bodyParser.json());

app.get("/test", (req, res) => {
    res.status(200).json({success: true});
});

app.get("/ToDoItems", async (req, res) => {
    const todo = await db.getAllToDo();
    res.status(200).json({todo});
});

app.get("/ToDoItems/:id", async (req, res) => {
    const id = await db.getToDo(req.params.id);
    res.status(200).json({id});
});

app.post("/ToDoItems", async (req, res) => {
    await db.createToDo(req.body);
    res.status(201).json({success: true});
});

app.patch("/ToDoItems/:id", async (req, res) => {
    await db.updateToDo(req.params.id, req.body);
    res.status(200).json({success: true});
});

app.listen(1337, () => console.log("server is running on port 1337"));