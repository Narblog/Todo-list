import TodoListItem from "./TodoListItem"
const TodoList=()=>{
 let items=[
  {text:"Learn Js", important:true},
  {test:"Learn React", important:false},
  {test:"Learn TYpeScript", important:true},
  {test:"Learn Python", important:true}
 ]
 return (
  <ul>
  <TodoListItem text={items[0].text} important={items[0].important}/>
  <TodoListItem text={items[1].text} important={items[1].important}/>
  <TodoListItem text={items[2].text} important={items[2].important}/>
  <TodoListItem text={items[3].text} important={items[3].important}/>
  </ul>)
}

export default TodoList