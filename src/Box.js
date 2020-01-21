import React from 'react';

const box = (props) => {
    const values = props.items
    return(
        values.map(item =>(
            <div key={item.id} className='container-box-camp'>
                <div className='image'>
                    <img src={item.images.original.url} alt='' width='100' height='100'></img>
                    
                </div>
                <div className='display-box'>
                    <div className='campus'>
                        {item.title}
                    </div>
                    <div className='info'>
                        <h4>{props.items.length} Students</h4> 
                    </div>
                    <div className='container-buttons'>
                        <button className='edit-button' >Edit</button>
                        <button className='delete-button' >Delete</button>
                    </div>
                    
                </div>
                {/* <br></br> */}
                
            
             </div>  
             
        ))
        
            
    )

}
export default box;

