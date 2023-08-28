import Button from "../Button/Button"
import "./additem.css"
const AddItem = () => {
  return (
    <div className="additem">

      <input type="text" placeholder='Add item...' />
      <Button text="Add item" />
    </div>
  )
}
export default AddItem