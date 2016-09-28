import {
  REQUEST_TODOS,
  RECEIVE_TODOS,
  CREATE_TODO,
  UPDATE_TODO,
  DESTROY_TODO,
  receiveTodos,
  receiveTodo
  } from '../actions/todo_actions';
import { fetchTodos, createTodo, destroyTodo, updateTodo } from '../util/todo_api_utils';


export const TodoMiddleWare = (store) => next => action => {
  let success, error;
  switch (action.type) {
    case REQUEST_TODOS:
      success = todos => store.dispatch(receiveTodos(todos));
      error = e => console.log(e);
      return fetchTodos(success, error);

    case CREATE_TODO:
      success = todo => store.dispatch(receiveTodo(todo));
      error = e => console.log(e);
      return createTodo(action.todo, success, error);
    case UPDATE_TODO:
      success = todo => store.dispatch(receiveTodo(todo));
      error = e => console.log(e);
      return updateTodo(action.todo, success, error);
    case DESTROY_TODO:
      success = todo => store.dispatch(removeTodo(todo.id));
      error = e => console.log(e); 
      return destroyTodo(action.todo, success, error);
    default:
      return next(action);
  }
};
