import React from 'react';
import ReactDOM from 'react-dom';
import {Route ,Link, BrowserRouter as Router, Switch} from 'react-router-dom';
import './index.css';
import Home from './Home';
import Campuses from './Campuses';
import Students from './Students';
import * as serviceWorker from './serviceWorker';

const linking = (
    <Router>
        <div>
            <ul>
                <div className='container-heading'>
                    <li>
                        <Link to="/" className='links' >Home</Link>
                    </li>
                
                    <li>
                        <Link to="/campuses" className='links' >Campuses</Link>
                    </li>
                    <li>
                        <Link to="/Students" className='links' >Students</Link>
                    </li>
                </div>
                
            </ul>
            

            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/Campuses' component={Campuses}/>
                <Route path='/Students' component={Students}/>
            </Switch>
        </div>
    </Router>

)
// ReactDOM.render(<Home />, document.getElementById('root'));
ReactDOM.render(linking, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
