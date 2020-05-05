import React from 'react'
import Todos from './Todos';
import DisplayTodos from './DisplayTodos';

function TodoList () {
  return (
    <Todos.Provider>
      <DisplayTodos />
    </Todos.Provider>
  )
}

export default TodoList;
