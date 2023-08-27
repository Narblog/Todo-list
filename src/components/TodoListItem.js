const TodoListItem=({text,important})=>{
    
    const style={
        color:important? "red" : "black"
    }
    return (
    <div>
         <li style={style}>{text}</li>
         
    </div>)
}

export default TodoListItem