import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from '../actions/todo_actions';
import merge from 'lodash/merge';

const defaultState = {
  "1": {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  "2": {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};

const TodosReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TODOS:
      let newState = {};
      action.todos.forEach(todo => newState[todo.id] = todo);
      return newState;
    case RECEIVE_TODO:
      let newerState = merge({}, state);
      newerState[action.todo.id] = action.todo;
      return newerState;
    case REMOVE_TODO:
      let evenNewerState = merge({}, state);
      delete evenNewerState[action.todo.id];
      return evenNewerState;
    default:
      return state;
  }
};

export default TodosReducer;
