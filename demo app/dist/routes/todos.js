"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let todos = [];
router.get('/', (req, res) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res) => {
    const body = req.body;
    const newTodo = {
        id: new Date().toISOString(),
        text: body.text
    };
    todos.push(newTodo);
    res.status(201).json({ todos: newTodo });
});
router.put('/todo/:todoId', (req, res) => {
    const body = req.body;
    const params = req.params;
    const id = params.todoId;
    const todoIndex = todos.findIndex((todoItems) => {
        return todoItems.id = id;
    });
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todos[todoIndex].id, text: body.text };
        return res.status(200).json({ todos: todos });
    }
    res.status(404).json({ message: 'could not find id.' });
});
router.delete('/todo/:todoId', (req, res) => {
    const params = req.params;
    todos = todos.filter((todoItem) => todoItem.id !== params.todoId);
    res.status(200).json({ message: 'Deleted todo', todos: todos });
});
exports.default = router;