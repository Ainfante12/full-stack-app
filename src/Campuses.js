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
            key: 'jrw5ouPx80uapcJddCsjJiOwiB2yh9FD',
            loading: true
        }
    }

    async componentDidMount(){
        // const url = `http://ctp-zip-api.herokuapp.com/${this.state.city}/${this.state.stat}`
        const url1 = `https://api.giphy.com/v1/gifs/search?q=dog&api_key=${this.state.key}&limit=7`
        const response = await fetch(url1);
        const data = await response.json();
        this.setState({items: data.data})
        console.log(data);
    }

    deleteCampus = () =>{
        
    }
    

    

    render(){
       
        
        return (
            
            <div>
                <div className='container-header'>
                    <h1 className='name-title' >All Campuses</h1>
                    <button className='add-campus' >Add Campus</button>
                </div>
                

                <div className='container-allcampuses'>
                    <Box items={this.state.items}></Box>
                    
                </div>

            </div>

                
        )
    }



}
export default Campuses;