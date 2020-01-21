import React from 'react';
import './App.css';
// import {Route, Link, Switch, BrowserRouter as Router} from 'react-router-dom';
import NewStudent from './NewStudent';


class App extends React.Component{
  render(){
    return(
    <form >
      <div className="students">
        <h1> New Student:</h1>
        <NewStudent handleNewStudent={this.handleNewStudent} />
       
      </div>
    </form> 
    )
  }
}

export default App;
// <button className="btn">Add Student</button>
// <input type="text" placeholder="Enter Students Name" />
// <Router>
// <div>
// <Link to="/NewStudent">Click Here</Link>
// <Switch>
//   <Route path="/NewStudent" component={NewStudent}></Route>
// </Switch>
// </div>
// </Router>