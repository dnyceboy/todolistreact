import React from 'react';
import "./Todos.css"

function Todos(props){

    function completedTodo(event){
        props.completedTodo()
    }

    function handleRemove(){
        props.remove(props.id);
    }

    return(
        <div className="Todos d-flex justify-content-between">
            <h3 className={`${props.completed ? "Todos-done" : "null" }`} onClick={completedTodo} >{props.todo}</h3>
            <button className="btn btn-danger" onClick={handleRemove} >X</button>
        </div>
    )
}

export default Todos;

// make todo list that adds deletes and line through when completed
// 2 components todolist and todos
// double check if they work
// hard code 2 default values for useState array
// map array onto page and return component
// create form
// create input
// make the input controlled
// use handlechange
// create button
// handlesubmit
// todo is gonna need id to delete
// uuid or index?
// pass uuid into todo
// filter array and remove todo that matches id
// make boolean state for completed
// when todo is clicked change boolean to true
// change style text decoration to linethrough