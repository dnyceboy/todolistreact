import React, { useState } from 'react';
import TodoList from "./TodoList";
import Todos from "./Todos";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>TodoList</h1>
      <TodoList />
    </div>
  );
}

export default App;


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