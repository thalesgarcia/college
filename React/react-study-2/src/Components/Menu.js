import React from 'react';
import LinkWrapper from './LinkWrapper';
import '../css/pure-min.css';
import '../css/side-menu.css';
import '../css/grids-min.css';
import '../css/grids-responsive-min.css';
import '../css/style.css';
let Menu =()=>{
    
        return(
            <nav>
            <div id="menu">
                <div className="pure-menu">
                   <LinkWrapper to="/" activeStyle={{}}> Death Star</LinkWrapper>  
                    <ul className="pure-menu-list">
                        <LinkWrapper to="/" ><li>Home</li></LinkWrapper>
                        <LinkWrapper to="/people" ><li >People</li></LinkWrapper>
                        <LinkWrapper to="/planets" ><li>
                           Planets
                        </li></LinkWrapper>
                        <LinkWrapper to="/species" ><li >Species</li></LinkWrapper>
                        <LinkWrapper to="/starships" ><li >Starships</li></LinkWrapper>
                        <LinkWrapper to="/vehicles" ><li >Vehicles</li></LinkWrapper>
                        <LinkWrapper to="/films" ><li >Films</li></LinkWrapper>
                    </ul>
                </div>
            </div>
            </nav>
        );
}
export default Menu;