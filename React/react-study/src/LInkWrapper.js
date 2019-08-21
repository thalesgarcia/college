import React from 'react';
import {NavLink} from 'react-router-dom';

let LinkWrapper=(props)=>{
    //receive the props and apply the styl to all of them\/ and overwrites the style as well
    return(
        <NavLink activeStyle={{fontWeight:'bold'}}{...props}></NavLink>
    )
}
export default LinkWrapper;