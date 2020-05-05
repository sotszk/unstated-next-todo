import { useState } from 'react';
import { createContainer } from 'unstated-next'

function useTodos(initialState = []) {
  const [todos, setTodo] = useState(initialState);
  const [todo, setTodoItem] = useState({});

  const addTodo = evt => {
    evt.preventDefault();
    setTodo([...todos, todo]);
    setTodoItem({});
  }

  const removeTodo = id => {
    const rest = todos.filter(todo => todo.id !== id);
    setTodo(rest);
  }

  const handleInput = (evt) => setTodoItem({ id: evt.target.value, title: evt.target.value });

  return { todos, todo, addTodo, removeTodo, handleInput };
}

const Todos = createContainer(useTodos);

export default Todos;
