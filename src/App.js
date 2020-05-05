import React from 'react';
import './App.css';
import { createContainer } from 'unstated-next'
import TodoList from './TodoList'

function App() {
  return (
    <>
      <h3>Unstated Next</h3>
      <hr />
      <TodoList/>
    </>
  );
}

export default App;
