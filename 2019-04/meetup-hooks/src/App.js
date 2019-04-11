import React, { useState } from 'react';
import './App.css';

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }} className="todo">
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    //since it is a form
    e.preventDefault();

    //dont submit for empty value
    if (!value) return;
    //add value
    addTodo(value);
    // reset value back to empty string
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Add todo..."
      />
    </form>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'eat lunch',
      isCompleted: false,
    },
    {
      text: 'learn hooks',
      isCompleted: false,
    },
  ]);

  const addTodo = text => {
    //update the state
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    // initialize newTodos with an array that has todos state passed in
    const newTodos = [...todos];
    // find todo by passing index, in order to manipulate that particular isCompleted value in state => set isCompleted to true
    newTodos[index].isCompleted = true;
    // set the state
    setTodos(newTodos);
  };

  const removeTodo = index => {
    // create newTodos with spread
    const newTodos = [...todos];
    // index is where to start, 1 is how many items to remove
    newTodos.splice(index, 1);
    // setTdods to newTodos
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
