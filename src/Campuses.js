import React from 'react';
import './App.css';

class Campuses extends React.Component{
    constructor(props){
        super(props);
        this.state = {name: ''}
      }



  render(){
    return(
      <div className="navbar">
        <h1>All Campuses</h1>
      </div>
    )
  }
}

export default Campuses;