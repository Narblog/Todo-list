import "./todolistitem.css"
import Button from "../../Button/Button"
const TodoListItem = ({ text, important }) => {

    const style = {
        color: important ? "red" : "black"
    }
    return (
        <div className="todoli">
            <li  style={style}>{text}  </li>
            <div className="EditButton">
            <Button text="Delete"/>
            <Button text="Important"/>
            <Button text="Edit"/>
            </div>
        </div>)
}

export default TodoListItem