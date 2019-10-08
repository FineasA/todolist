import React, { Component } from 'react';
import './App.css';
import Todo from './components/Todo/Todo';
import Todos from './components/Todo/Todos';
import Radium from 'radium';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      todo: '',
      isCompleted: false
    };
  }
  updateToDo = e => {
    const task = e.target.value;
    this.setState({
      todo: task
    });
  };
  addTask = () => {
    this.setState({
      todos: [...this.state.todos, this.state.todo]
      // completions: [...this.state.completions, false]
    });
    // console.log(this.state.completions);
  };
  deleteTask = index => {
    this.setState({
      todos: this.state.todos.filter((_, i) => i !== index)
    });
  };
  isCompleted = index => {
    this.setState({
      isCompleted: !this.state.isCompleted
    });
    console.log(this.state.isCompleted);
  };

  render() {
    const todosTasks = this.state.todos.map((todo, index) => {
      return (
        <Todos
          key={index}
          todo={todo}
          deleteTask={() => this.deleteTask(index)}
          completed={() => this.isCompleted(index)}
          styleFxn={
            this.state.isCompleted ? { textDecoration: 'line-through' } : null
          }
          // sendCompletions={this.state.isCompleted}
        />
      );
    });
    return (
      <div className='App'>
        <h1 style={headerStyling}>Todo List App</h1>
        <Todo
          changed={this.updateToDo}
          submit={this.addTask.bind(this.addTask, this)}
        />
        {todosTasks}
      </div>
    );
  }
}

const headerStyling = {
  padding: '60px',
  borderRadius: '20px',
  textAlign: 'center',
  background: '#003399',
  color: 'white',
  fontSize: '30px'
};

export default Radium(App);

//completions: [
//   ...this.state.completions,
//   this.state.completions[index] === !this.state.isCompleted
// ]

//[...this.state.task.todos, this.state.task.todo]
