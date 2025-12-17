import { addTodo, getTodo, updateTodo, deleteTodo } from "../Controller/controller.js";

import express from 'express'

const route = express.Router()

route.post('/addtodo', addTodo);
route.get('/gettodo', getTodo);
route.put('/updatetodo/:id', updateTodo);
route.delete('/deletetodo/:id', deleteTodo);

export default route

//These are the thread operations
// route.post
// route.get
// route.put
// route.delete