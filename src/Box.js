import React from 'react';

const box = (props) => {
    return(
        <div className='container-box-camp'>
            <div className='image'>
                <img src={props.pic} alt='' width='50' height='50'></img>
            </div>
            <div className='display-box'>
                <div className='campus'>
                    {props.campus}
                </div>
                <div className='info'>
                    {props.items.length}
                </div>
            </div>
            
            
        </div>
            
    )

}
export default box;

