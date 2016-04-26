import React from 'react';
import { todos } from './todos';
import TodosList from './todos-list';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        todos
    };
  }

  render() {
    return (
        <div>
            <h1>JAVLC React ToDo App</h1>
            <TodosList todos={this.state.todos}/>
        </div>
    );
  }
}
export default TodoApp;
