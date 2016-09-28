import React from 'react';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title:"", body: "", done: false};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.props.createTodo({todo:this.state});
  }

  handleChange(key) {
    return (event => this.setState( {[key]: event.currentTarget.value }));
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <h2>Submit a Todo</h2>
        <br></br>
        <br></br>
        <label>Body:
          <textarea onChange={this.handleChange('body')} value={this.state.body}></textarea>
        </label>
        <br></br>
        <br></br>
        <label>Title:
          <input onChange={this.handleChange('title')} type="text" value={this.state.title}></input>
        </label>
        <button>Create Todo Item</button>
      </form>
    );
  }
}
