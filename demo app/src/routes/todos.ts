import { Router } from "express";
import {Todo} from '../models/todo';

const router=Router();

type RequestBody={ text: string};
type RequestParams={todoId: string};

let todos : Todo[]=[];

router.get('/',(req,res)=>{
    res.status(200).json({todos:todos});
})

router.post('/todo',(req,res)=>{
    const body=req.body as RequestBody;
    const newTodo :Todo={
        id: new Date().toISOString(),
        text:body.text
    };
    todos.push(newTodo);
    res.status(201).json({todos:newTodo})
})

router.put('/todo/:todoId',(req,res)=>{
    const body=req.body as RequestBody;
    const params=req.params as RequestParams;
    const id=params.todoId;
    const todoIndex=todos.findIndex((todoItems)=>{
        return todoItems.id=id
    });
    if(todoIndex >= 0){
        todos[todoIndex]={id: todos[todoIndex].id,text:body.text}
        return res.status(200).json({todos:todos});
    }
    res.status(404).json({message:'could not find id.'});
});
 
router.delete('/todo/:todoId',(req,res)=>{
    const params=req.params as RequestParams;
    todos=todos.filter((todoItem)=>todoItem.id !== params.todoId);
    res.status(200).json({message:'Deleted todo',todos:todos});
});

export default router; 