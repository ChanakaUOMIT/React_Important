import React from 'react';
import {NavLink} from 'react-router-dom';
import './header.css'

const Header = (props) =>{
    return(
        <nav>
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/about" exact>About</NavLink>
        </nav>
    )
}

export default Header;