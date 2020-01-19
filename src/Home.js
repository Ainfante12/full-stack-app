import React, { Component } from 'react';
import {Route ,Link, BrowserRouter as Router, Switch} from 'react-router-dom';

import './index.css'


class Home extends Component{
  constructor(props){
    super(props);
    this.state = {name: ''}
  }//end constructor

  




  render(){
    return(
      <div>
        <h1>All Campuses</h1>
      </div>
    )
  }



}//end class