import React from 'react';
import './NewStudent.css';
import { Button, Modal, ModalBody, ModalFooter, Input } from 'reactstrap';

class NewStudent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: '',
      email:''
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

handleChangeStudent= (e) =>{
  const {name, value}= e.target;
  this.setState({
    [name]:value
  });
}

  render() {
    return (
      <div className="box">
        <Button outline color="primary" onClick={this.toggle}>
            Add Student
        </Button>
        <Modal  isOpen={this.state.modal}
                toggle={this.toggle}
                className={this.props.className}>
            <ModalBody>
            
             <h1 className="student-info">Student Info:</h1>
             <Input onChange={this.handleChangeStudent} id="student-name" type="text" placeholder="student name" />
             <div><Input onChange={this.handleChangeStudent} id="student-email" type="email" placeholder="student email" /></div>
             <div><Input onChange={this.handleChangeStudent} id="student-gpa" type="number" placeholder="student gpa" /></div>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={() => {this.toggle();this.props.handleStudentName();}}> 
                    Add Student
                </Button>{' '}
                <Button color="secondary"
                        onClick={this.toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
      </div>
    );
  }



}

//in the button I have to use redux in order for that onformation to show up on the home page

   
//   render(){
//     return(
//       <div>
//         <label className="label">Student Name:</label>
//         <input type="text"></input>
//         <div>
//         <label>GPA:</label>
//         <input type="numbers"></input>
//         <div>
//         <label>Student Email:</label>
//         <input type="email"></input>
//         </div>
//         <button type="submit" onSubmit={this.handleSubmit}>Submit</button>
//         </div>
//       </div>
//     )
//   }
// }

export default NewStudent;


// constructor(props){
//   super(props);
//   this.state = {
//       items:[],
//       zipcode:'10032',
//       city: 'City',
//       stat:'NEW YORK',
//       student:'Student Name',
//       url: 'face.jpg',
//       loading: true
//   }
// }

// async componentDidMount(){
//   const url = `http://ctp-zip-api.herokuapp.com/${this.state.city}/${this.state.stat}`
//   const response = await fetch(url);
//   const data = await response.json();
//   this.setState({items: data})
//   console.log(data);
// }




// render(){
 
  
//   return (
      
//       <div>
//           <div className='container-header'>
//               <button className='add-campus' >Add Student</button>
//           </div>
          

//           <div className='container-allcampuses'>
//               <div className='container-box'>
                  
//                   <div className='container-boxcamp'>
//                       <Box items={this.state.items} student={this.state.student} pic={this.state.url}></Box>
//                       <button className='edit-button' >Edit</button>
//                       <button className='delete-button' >Delete</button>
//                   </div>
        
//               </div>
          

//           </div>

//       </div>

          
//   )
// }