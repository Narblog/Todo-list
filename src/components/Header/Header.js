import './header.css';
import IconsInfo from '../IconsInfo';
import {Component} from "react"


class Header extends Component{
  render(){
    return (
      <div className='header'>
        <h1>My Todo List</h1> 
    <IconsInfo/>
      </div>
    );

  }
}
/*
const Header = () => {
  return (
    <div className='header'>
      <h1>My Todo List</h1> 
<IconsInfo/>
    
     
      
    </div>
  );
}
*/
export default Header;