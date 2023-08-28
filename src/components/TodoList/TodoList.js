import "./todolist.css"

import TodoListItem from "./TodoListItem/TodoListItem"
const TodoList = () => {
  let items = [
    { text: "Learn Js", important: true, id: 1 },
    { text: "Learn React", important: false, id: 2 },
    { text: "Learn TypeScript", important: true, id: 3 },
    { text: "Learn Python", important: true, id: 4 },
    { text: "Learn Node Js", important: false, id: 5 }
  ]
    

  const data = items.map(({ text, important, id }) => {
    return (<TodoListItem text={text} important={important} key={id} />)
  });
  return (
    <ul className="todoul">{data} </ul> )
}

export default TodoList