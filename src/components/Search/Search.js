import { Component } from 'react';
import './search.css';


 class Search extends Component{


  handleSearch = (text) => {
   console.log(text)
   }

  render(){
    return (
      <div className='search'>
        <input type="text" placeholder="Type text for search..."
        onChange={(e)=> this.handleSearch(e.target.value)}/>
        <button className='search-btn-all'>All</button>
        <button className='search-btn-done'>Done</button>
        <button className='search-btn-important'>Important</button>
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

