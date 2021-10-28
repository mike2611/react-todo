/* eslint-disable react/prop-types */
import React from 'react';

class TodoItem extends React.PureComponent {
  render() {
    const { todo, handleChangeProps, deleteTodoProps } = this.props;
    return (
      <li>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleChangeProps(todo.id)}
        />
        <button type="button" onClick={() => deleteTodoProps(todo.id)}>Delete</button>
        {todo.title}
      </li>
    );
  }
}

export default TodoItem;
