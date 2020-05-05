import React from 'react'
import Todos from './Todos'

function Todo({ todo }) {
  const todosContainer = Todos.useContainer();

  return (
    <li key={todo.id}>{todo.title}<button onClick={() => todosContainer.removeTodo(todo.id)}>delete</button></li>
  )
}

export default Todo;
