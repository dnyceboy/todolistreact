import React, { useState } from 'react';
import Todos from "./Todos";

import "./TodoList.css"

function TodoList(){
    const [todo, setTodo] = useState(["code", "work"]);
    const [inputText, setInputText] = useState("");
    const [isCompleted, setIsCompleted] = useState(false);
    
    function change(event){
        const {value} = event.target
        
        setInputText(value)
    }
    
    function add(){
        let newTodo = inputText;
        
        setTodo([ ...todo, newTodo ]);  
    }
    
    function submit(event){
        event.preventDefault();
        add();
        setInputText("");
    }

    function remove(id){
        let newTodo = todo.filter((todos, index) => index !== id);

        setTodo(newTodo)
    }

    function completedTodo(){
        setIsCompleted(!isCompleted);
    }
    
    const mappedTodos = todo.map((todos, index) => (
        <li className={`list-group-item`} onClick={completedTodo} ><Todos key={index} id={index} todo={todos} remove={remove} completed={isCompleted} completedTodo={completedTodo} /></li>
    ))

    return (
        <div className="TodoList container">
            <form className="d-flex justify-content-between" onSubmit={submit} >
                <input className="TodoList-input" onChange={change} name="task" value={inputText} placeholder="Write New Todo" />
                <button className="btn btn-md btn-primary">Add New Todo</button>
            </form>
            <ul className="TodoList-ul list-group-flush">
                {mappedTodos}
            </ul>
        </div>
    )
}

export default TodoList;

// make todo list that adds deletes and line through when completed
// 2 components todolist and todos
// double check if they work
// hard code 2 default values for useState array
// map array onto page and return component
// create form
// create input
// make the input controlled
// set value to state
// set name 
// use handlechange to call function
// create button
// submit form preventdefault
// call add function in submit
// get value of inputText in add function
// setTodo in add function
// todo is gonna need id to delete
// uuid or index?
// pass uuid into todo
// filter array and remove todo that matches id
// make boolean state for completed
// when todo is clicked change boolean to true
// change style text decoration to linethrough