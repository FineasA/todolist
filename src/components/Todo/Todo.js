import React from 'react';
import Radium from 'radium';

const Todo = props => {
  return (
    <div>
      <input style={toDoStyling} onChange={props.changed} type='text' />
      <button
        key='buttonStylingKey'
        className='buttonHover'
        style={buttonStyling}
        onClick={props.submit}
      >
        Add Task
      </button>
    </div>
  );
};

const toDoStyling = {
  padding: '10px',
  fontSize: '16px',
  margin: '10px',
  marginRight: '0px',
  backgroundColor: '#0066FF',
  color: '#FFF',
  border: '2px solid #0066FF',
  borderRadius: '8px',
  ':focus': {
    outline: '0'
  }
};
const buttonStyling = {
  backgroundColor: '#0066FF',
  padding: '10px',
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

export default Radium(Todo);
