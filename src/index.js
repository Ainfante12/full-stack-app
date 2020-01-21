import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, Switch, BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';
import Home from './home'
import Campuses from './Campuses';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <ul>
                <div className="container-heading">
                    <li className="navbar-left">
                        <Link to="/home" className="links">Home</Link>
                    </li>
                    <li>
                        <Link to="/campuses" className='links' >Campuses</Link>
                    </li>
                    <li>
                        <Link to="/" className="links">Students</Link>
                    </li>
                </div>
            </ul>
            <Switch>
                <Route exact path="/" component={App}></Route>
                <Route path="/home" component={Home}></Route>
                <Route path="/campuses" component={Campuses}></Route>
            </Switch>
        </div>
    
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
