import './header.css';
import IconsInfo from '../IconsInfo';
import { Component } from "react"


class Header extends Component {
  render() {
    const {done,important}=this.props
    return (
      <div className='header'>
        <h1>My Todo List</h1>
      
        <span className='header-info'>
          <span className='header-done'> Done:{done}</span>
          <span className='header-done'> Important:{important}</span>
        </span>
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