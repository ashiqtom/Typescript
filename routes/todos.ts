import { Router } from "express";

const router=Router();

import {Todo} from '../models/todo';

let todos : Todo[]=[];

router.get('/',(req,res)=>{
    res.status(200).json({todos:todos});
})

router.post('/todo',(req,res)=>{
    const newTodo :Todo={
        id: new Date().toISOString(),
        text:req.body.text
    };
    todos.push(newTodo);
    res.status(201).json({todos:newTodo})
})

router.put('/todo/:todoId',(req,res)=>{
    const id=req.params.todoId;
    const todoIndex=todos.findIndex((todoItems)=>{
        return todoItems.id=id
    });
    if(todoIndex >= 0){
        todos[todoIndex]={id: todos[todoIndex].id,text:req.body.text}
        return res.status(200).json({todos:todos});
    }
    res.status(404).json({message:'could not find id.'});
});
 
router.delete('/todo/:todoId',(req,res)=>{
    todos=todos.filter((todoItem)=>todoItem.id !== req.params.todoId);
    res.status(200).json({message:'Deleted todo',todos:todos});
});

export default router; 