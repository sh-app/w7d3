import React from 'react';

export const TodoListItem = ({item, methods}) => {
  return (
    <li>
      <h2>{item.title}</h2>
      <p>{item.body}</p>
      <button onClick={methods.destroyTodo(item)}>Delete</button>
      <button onClick={methods.updateTodo(item)}>Edit</button>
    </li>
  );
};
