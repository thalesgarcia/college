import React,{Fragment} from 'react';
import Header from './Header';

let NotFound=()=>{
    return(
        <Fragment>
            <Header/>
                <h1>Page not found!</h1>
        </Fragment>
    );
}
export default NotFound;