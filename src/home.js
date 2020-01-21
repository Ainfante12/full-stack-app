import React from 'react';
import './App.css';
import SingleStudent from './SingleStudent'
// import StudentStatus from './StudentStatus'


class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          students: [],
          

        }
      }


  

  render(){
    return(
      <div className="navbar">
        <h1>Welcome To Your Campus Manager</h1>
        <button >See Student Status</button>
        <button className="btn-right">See Campus Status</button>
        
      </div>
    )
  }
}

export default Home;

// <SingleStudent handleStudentName={this.handleStudentName} />