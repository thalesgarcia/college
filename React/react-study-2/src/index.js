import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/pure-min.css';
import './css/side-menu.css';
import './css/grids-min.css';
import './css/grids-responsive-min.css';
import './css/style.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import People from './Components/Pages/People';
import Starships from './Components/Pages/Starships'
import Vehicles from './Components/Pages/Vehicles'
import Species from './Components/Pages/Species'
import Planets from './Components/Pages/Planets'

ReactDOM.render(
        <BrowserRouter>
            <Switch>
                <Route path='/' component={App} exact={true}/>
                <Route path='/people' component={People} />
                <Route path='/starships' component={Starships} />
                <Route path='/vehicles' component={Vehicles} />
                <Route path='/species' component={Species} />
                <Route path='/planets' component={Planets} />
            </Switch>
        </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
