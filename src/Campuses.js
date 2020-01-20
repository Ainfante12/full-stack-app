import React, { Component } from 'react';
import Box from './Box';



class Campuses extends Component{
    constructor(props){
        super(props);
        this.state = {
            items:[],
            zipcode:'10032',
            city: 'City',
            stat:'NEW YORK',
            campus:'Campus Name',
            url: 'face.jpg',
            loading: true
        }
    }

    async componentDidMount(){
        const url = `http://ctp-zip-api.herokuapp.com/${this.state.city}/${this.state.stat}`
        const response = await fetch(url);
        const data = await response.json();
        this.setState({items: data})
        console.log(data);
    }
    

    

    render(){
       
        
        return (
            
            <div>
                <div className='container-header'>
                    <h1 className='name-title' >All Campuses</h1>
                    <button className='add-campus' >Add Campus</button>
                </div>
                

                <div className='container-allcampuses'>
                    {/* <h1>All Campuses</h1> */}
                    <div className='container-box'>
                        
                        <div className='container-boxcamp'>
                            <Box items={this.state.items} campus={this.state.campus} pic={this.state.url}></Box>
                            <button className='edit-button' >Edit</button>
                            <button className='delete-button' >Delete</button>
                        </div>
                        {/* <div className='container-button'>
                            <div className='edit'>
                                <button>Edit</button>
                            </div>
                            <div className='delete'>
                                <button>Delete</button>
                            </div>
                        </div> */}
                    </div>
                

                </div>

            </div>

                
        )
    }



}
export default Campuses;