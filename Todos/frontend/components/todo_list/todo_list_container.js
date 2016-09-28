import { connect } from 'react-redux';
import TodoList from './todo_list';
import TodoForm from './todo_form';
import { allTodos } from '../../reducers/selector';
import { requestTodos, createTodo, requestTodo, updateTodo, destroyTodo } from '../../actions/todo_actions';


const mapStateToProps = (state) => ({
    todos: allTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  requestTodos: () => dispatch(requestTodos()),
  createTodo: (todo) => dispatch(createTodo(todo)),
  updateTodo: (todo) => dispatch(updateTodo(todo)),
  destroyTodo: (todo) => dispatch(destroyTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
