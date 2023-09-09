import { Component } from 'react';
import { FaTrash, FaInfo, FaCheck,FaPenToSquare } from 'react-icons/fa6';
import './todo-list-item.css';


class TodoListItem extends Component {
  state = {
    isDone: false,
    isImportant: this.props.important,
    isValue: "",
    isEdit:false
  }
  onDone=(id)=>{
    this.setState({
      isDone: !this.state.isDone
    })
  }
  onImportant = () => {
    this.setState({
      isImportant: !this.state.isImportant
    });
  }
  onDelete=()=>{
    this.props.deletItem(this.props.id)
  }
  onEdit=()=>{
    this.props.editItem(this.props.id)
    this.setState({
      isEdit:!this.state.isEdit
       })
      

       
    
 };


  render() {
    const { text } = this.props;
    const { isDone, isImportant } = this.state;

    const textStyle = {
      textDecoration: isDone ? 'line-through' : 'none',
      color: isDone ? '#aaa' : (isImportant ? 'red': 'black'),
      fontWeight: isDone ? "normal": (isImportant ? "bold" : "normal"),

    }
  
    return (
      <li className='list-item'>
        <span className='item-text' style={textStyle} onClick={ this.onDone }>
          {text}
        </span>
  
        <span className='item-btns'>
        <button className='item-btn-edit' onClick={this.onEdit} ><FaPenToSquare /></button>
        {
          this.state.isEdit ? <input defaultValue={text}  />  : "" 
          
         
        }
       
          <button className='item-btn-done' onClick={ this.onDone }><FaCheck /></button>
          <button className='item-btn-important' onClick={ this.onImportant }><FaInfo /></button>
          <button className='item-btn-remove' onClick={this.onDelete}><FaTrash /></button>
        </span>
      </li>
    );
  }
}
  
export default TodoListItem;
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
  
