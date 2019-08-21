import React from 'react';
import LInkWrapper from './LInkWrapper'

let Header=()=>{
    return(
    <nav>
        <div className="nav-wrapper orange darken-1">
            <LInkWrapper to='/'className="brand-logo" activeStyle={{}}>Library</LInkWrapper> 
            <ul className="right hide-on-med-and-down">
            <li><LInkWrapper to='/authors'>Authors</LInkWrapper></li>
            <li><LInkWrapper to='/books'>Books</LInkWrapper></li>
            <li><LInkWrapper to='/about'>About Us</LInkWrapper></li>
            </ul>
        </div>
    </nav>
      
);
}
 export default Header