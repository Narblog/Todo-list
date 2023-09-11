import { Component } from 'react';
import './search.css';


class Search extends Component {
  state = {
    text: this.props.text,
  }
  handleSearch = (text) => {
    this.props.handleSearch(this.props.text)
  }
  handleDone=()=>{
    this.props.handleDone(this.props.id)
  }
 handleImportant=()=>{
  this.props.handleImportant(this.props.id)
 }
  render() {
    return (
      <div className='search'>
        <input
          type="text"
          placeholder="Type text for search..."
          onChange={(e)=> this.handleSearch(e.target.value)} />
        <button className='search-btn-all'>All</button>
        <button className='search-btn-done' onClick={this.handleDone}>Done</button>
        <button className='search-btn-important' onClick={this.handleImportant}>Important</button>
      </div>
    );
  }
}
export default Search
/*
const Search = () => {
  return (
    <div className='search'>
      <input type="text" placeholder="Type text for search..." />
      <button className='search-btn-all'>All</button>
      <button className='search-btn-done'>Done</button>
      <button className='search-btn-important'>Important</button>
    </div>
  );
}*/

