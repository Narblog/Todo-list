import { Component } from 'react';
import ErrorMessage from "../ErrorMessage"
import './add-item.css';
import { validateInput } from '../../utils/validator';

class AddItem extends Component {

  state = {
    inputValue: '',
    isError:false,
  
  }

  onInputChange = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  onBtnClick = (text) => {
      if(!validateInput(this.state.inputValue)){

        this.setState({isError:true})
        return

      }
      this.setState({isError:false})
    this.props.onAddItem(this.state.inputValue);
    this.setState({inputValue: ''})
   


    
  }

  render() {
    const {isError}=this.state
    return (
      <div className='additem'>

{
            isError ?  <ErrorMessage message="Error message " type="error"/>:null
         }
        <input
        type="text"
        value={this.state.inputValue}
        placeholder="Item text..."
        onChange={this.onInputChange}
            />
         
        <button onClick={this.onBtnClick}>Add item</button>
      </div>
    )
  }
}

export default AddItem;

