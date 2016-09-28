import React from 'react';
import { TodoListItem } from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestTodos();
  }

  render() {
    const allTodoListItems = this.props.todos.map((item, idx) => {
      return (
        <TodoListItem item={item} methods={this.props}
        key={ idx }/>
      );
    });

    return (
      <div>
        <ul>
          {allTodoListItems}
        </ul>
        <TodoForm props={this.props} />
      </div>
    );
  }
}

export default TodoList;
