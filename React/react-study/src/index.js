import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import About from './About';
import Books from './Books';
import Authors from './Authors';
import NotFound from './NotFound';

ReactDOM.render(
    //BrowserRouter indicate the usage of routes
    //Switch container for the routes
    <BrowserRouter>
    
        <Switch>
            <Route path='/' exact={true}component={App}/>
            <Route path='/about' component={About}/>
            <Route path='/books' component={Books}/>
            <Route path='/authors' component={Authors}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
