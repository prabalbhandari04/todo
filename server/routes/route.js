import express, { Router } from 'express';
import { createTodo, getAllTodo,updateTodoDone, updateTodo, deleteTodo } from '../controller/todo-controller.js';

const route = express.Router();


route.post('/todos', createTodo)
route.get('/todos', getAllTodo);
route.get('/todos/:id',updateTodoDone);
route.put('/todos/:id', updateTodo);
route.delete('/todos/:id', deleteTodo);


export default route; 