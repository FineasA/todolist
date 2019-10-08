import React, { Component } from 'react';
import Radium from 'radium';

/*IMPORTANT: THE ISSUE IS THE LOGIC BEHIND WHEN THE CONDITIONAL BECOMES TRUE.
 **WHEN YOU ARE CLICKING THE BUTTON THAT MARKS COMPLETION, THERE IS ONLY ONE STATE
 **FOR ALL ELEMENTS. THE BEST WAY TO SOLVING THIS ISSUE IS CREATING IN YOUR ORIGINAL STATE
 **AND ARRAY OF OBJECTS THAT CONTAIN TASKS WHICH CONTAIN TODO, AND THE STATE OF COMPLETION
 **(I.E. INITIALIZED AT FALSE)
 */
class Todos extends Component {
  render() {
    return (
      <div>
        <li key={this.props.key} style={this.props.styleFxn}>
          {this.props.todo}
          <button key={1} style={taskButtons} onClick={this.props.completed}>
            Mark Completed
          </button>
          <button key={2} style={taskButtons} onClick={this.props.deleteTask}>
            Delete Task
          </button>
        </li>
      </div>
    );
  }
}

const listStyle = {
  listStyleType: 'none',
  paddingLeft: '0px',
  padding: '15px',
  marginBottom: '15px',
  borderRadius: '5px',
  width: '250px',
  backgroundColor: 'rgba(255,255,255,.5)',
  margin: 'auto'
};

const taskButtons = {
  marginTop: '5px',
  marginBottom: '5px',
  backgroundColor: '#0066FF',
  padding: '5px',
  fontSize: '16px',
  border: '2px solid #FFF',
  marginLeft: '15px',
  borderRadius: '8px',
  cursor: 'pointer',
  border: '2px solid #003399',
  ':hover': {
    backgroundColor: '#003399'
  },
  ':focus': {
    outline: 0
  }
};

export default Radium(Todos);
