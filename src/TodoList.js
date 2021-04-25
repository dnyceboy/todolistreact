import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = { todos: [] };
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.edit = this.edit.bind(this);
        this.toggleCompleted = this.toggleCompleted.bind(this);
    }
    create(newTodo){
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }
    remove(id){
        this.setState({
            todos: this.state.todos.filter(t => t.id !== id)
        })
    }
    edit(id, updatedTask){
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, task: updatedTask}
            }
            return todo;
        })
        this.setState({todos: updatedTodos})
    }
    toggleCompleted(id){
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, completed: !todo.completed}
            }
            return todo;
        })
        this.setState({todos: updatedTodos})
    }
    render(){
        const todos = this.state.todos.map(todo => {
            return <Todo key={todo.id} id={todo.id} task={todo.task} completed={todo.completed} removeTodo={this.remove} updateTodo={this.edit} toggleTodo={this.toggleCompleted} />
        })
        return(
            <div className="TodoList">
                <h1>Todo List! <span>React Todo List</span></h1>
                <ul>
                    {todos}
                    <NewTodoForm createTodo={this.create} />
                </ul>
            </div>
        )
    }
}

export default TodoList;