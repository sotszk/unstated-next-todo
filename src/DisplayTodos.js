import React from 'react'
import Todos from './Todos';
import Todo from './Todo';

export default function DisplayTodos () {
  const todosContainer = Todos.useContainer();

  return (
    <>
      <input type="text" value={todosContainer.todo.title} onChange={todosContainer.handleInput} />
      <button onClick={todosContainer.addTodo}>add</button>
      <hr/>
      {
        todosContainer.todos.map(todo => (
          <Todo key={todo.id} todo={todo}/>
        ))
      }
    </>
  )
}
