import React from 'react';
import Radium from 'radium';

const Todos = props => {
  return (
    <div>
      <li
        key={props.key}
        style={
          (listStyle,
          props.sendIsCompleted ? { textDecoration: 'line-through' } : null)
        }
      >
        {props.todo}
      </li>
      <button key={1} style={taskButtons} onClick={props.completed}>
        Mark Completed
      </button>
      <button key={2} style={taskButtons} onClick={props.deleteTask}>
        Delete Task
      </button>
    </div>
  );
};

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
