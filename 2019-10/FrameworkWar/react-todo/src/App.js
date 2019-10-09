import React, { Component } from 'react';
import './App.css';

export default class App extends Component {

  state = {
    input: '',
    todoList: [
      {
        id: '1',
        description: 'Go to the store',
        completed: false
      },
      {
        id: '2',
        description: 'Write Code',
        completed: false
      },
      {
        id: '3',
        description: 'Read emails',
        completed: false
      },
    ]
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleAdd = () => {
    this.setState({
      input: '',
      todoList: [...this.state.todoList,
      {
        id: String(this.state.todoList.length + 1),
        description: this.state.input,
        completed: false
      }]
    })
  }

  handleUpdate = (e) => {
    this.setState({
      todoList: this.state.todoList.map((todo) => {
        if (todo.id === e.target.id) {
          return { ...todo, completed: !todo.completed }
        } else
          return todo;
      })
    })
  }

  handleDelete = (e) => {
    const todoList = this.state.todoList.filter(todo => {
      return todo.id !== e.target.id
    });
    this.setState({
      todoList
    });
  }

  render() {
    return (
      <div className="App">
        <h1>React TODO App</h1>
        <div>

          <input name="input" type="text" placeholder="Add a TODO item" onChange={this.handleInput} value={this.state.input} />

          <button onClick={this.handleAdd}>Add TODO</button>

          {this.state.todoList.map((todo, i) => (
            <div key={i} className={todo.completed ? 'completed' : ''}>
              <input type="checkbox" checked={todo.completed} onChange={this.handleUpdate} id={todo.id} />
              {todo.description}
              <button onClick={this.handleDelete} id={todo.id}>X</button>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
