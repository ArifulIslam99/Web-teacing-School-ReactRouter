import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {

    const  activeStyle={
        fontWeight: "bold",
        color: "red"
      };
    return (
        <div class="topnav"> 

        
           <div  className="Nav">
           <NavLink activeStyle={activeStyle} className="link" to='/home'>Home</NavLink>
        <NavLink activeStyle={activeStyle} className="link" to='/services'>Services</NavLink>
        <NavLink activeStyle={activeStyle} className="link" to='review'>Feedback</NavLink>
        <NavLink activeStyle={activeStyle} className="link" to='/aboutus'>About Us</NavLink>  
       
    
        </div> 

    </div>
    );
};

export default Header;