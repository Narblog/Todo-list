import { Component } from 'react';
import ErrorMessage from "../ErrorMessage"
import './add-item.css';
import { validateInput } from '../../utils/validator';

class AddItem extends Component {

  state = {
    inputValue: '',
    isError:false,
    text:this.props.text
  }

  onInputChange = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  onBtnClick = (text) => {
    this.props.onAddItem(this.state.inputValue);
    this.setState({inputValue: ''})
    if( !validateInput(text)){
      return{
        isError:true
      }
    }
    return {
      isError:false
    }


    
  }

  render() {
    const {isError}=this.state
    return (
      <div className='additem'>


        <input
        type="text"
        value={this.state.inputValue}
        placeholder="Item text..."
        onChange={this.onInputChange}
            />
          {
            isError ?  <ErrorMessage message="Error message " type="error"/>:null
         }
        <button onClick={this.onBtnClick}>Add item</button>
      </div>
    )
  }
}

export default AddItem;

