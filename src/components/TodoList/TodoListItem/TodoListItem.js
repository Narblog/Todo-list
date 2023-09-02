import { Component } from 'react';
import {FaTrash,FaInfo,FaCheck} from 'react-icons/fa6'
import './todo-list-item.css';

class TodoListItem extends Component{
 
render(){
  const{text,important}=this.props
  const style = {
    color: important ? "#d72020" : "black",
    fontWeight:important ? "bold":"normal" 
  }

  return (
    <li className='list-item' style={style}>
      <span className='item-text'>  {text}</span>
    

      <span className='item-btns'>
        <button className='item-btn-done'><FaCheck/></button>
        <button className='item-btn-important'><FaInfo/></button>
        <button className='item-btn-remove'><FaTrash/></button>
      </span>
    </li>
  );
}
}

/*
const TodoListItem = ({ text, important }) => {
  const style = {
    color: important ? "#d72020" : "black",
    fontWeight:important ? "bold":"normal" 
  }

  return (
    <li className='list-item' style={style}>
      <span className='item-text'>  {text}</span>
    

      <span className='item-btns'>
        <button className='item-btn-done'><FaCheck/></button>
        <button className='item-btn-important'><FaInfo/></button>
        <button className='item-btn-remove'><FaTrash/></button>
      </span>
    </li>
  );
}*/
  
export default TodoListItem;