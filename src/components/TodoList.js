import TodoListItem from "./TodoListItem"
const TodoList=()=>{
 let items=[
  {text:"Learn Js", important:true},
  {text:"Learn React", important:false},
  {text:"Learn TypeScript", important:true},
  {text:"Learn Python", important:true},
  {text:"Learn Node Js", important:false}
 ]


 const data=items.map(({text,important})=>{
  return(<TodoListItem text={text} important={important}/>)
 });
 return (
  <ul>{data}</ul>)
}

export default TodoList