import { Component } from "react";

import TodoListItem from "./TodoListItem";
import "./todo-list.css";

class TodoList extends Component {

  render() {
    const { items, deletItem, DoneImportant } = this.props;

    const data = items.map(({ text, important, done, id }) => {
      return (
        <TodoListItem
          text={text}
          important={important}
          key={id}
          id={id}
          deletItem={deletItem}
          done={done}
          DoneImportant={DoneImportant}
      
        />
      );
    });
  
    return (
      <ul className="todolist">{data}</ul>
    );
  }
}

export default TodoList;
