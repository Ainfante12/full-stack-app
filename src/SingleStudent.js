//need drop down menu ro select campus
//needs to display student name, their gpa, and an image, as well as the campus they have if they have one
//Here I will have the delete and edit buttons


import React, { useState } from "react";

import {Container, Row, Col } from "reactstrap";

import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

import NewStudent from './NewStudent';
const Students = () => {
  const [students, setStudents] = useState([
    
  ]);

  const handleStudentName = name => {
    const newName = [...students, {name}];
    setStudents(newName);
  };

  const emptyStudentDataLayout = () => {
    return (
      <React.Fragment>
        <h1>All Students</h1>
        <p>No students registered in the database</p>  
        <NewStudent
        handleStudentName={this.handleStudentName}
       
        />
      </React.Fragment>
    );
  };

  const studentDataLayout = () => {
    return (
      <Container>
        <Row>
          <Col xs="6" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            All Student
          </Col>
          <Col xs="6">
            <NewStudent
            handleNewStudents={this.handleNewStudents}
            
            />
          </Col>
          
        </Row>
          
          <Row>
          {students.map( (name) => {
            return(
               <div>
               <Card
               style={{color: "grey", margin: "0.2rem 0.2rem"}}>
                 <CardImg  alt={students.name} />
                 <CardBody>
                   <CardTitle>Name: {name.name}</CardTitle>
                   <CardSubtitle>ID: Student Empl ID</CardSubtitle>                   
                   <CardText>Campus: Campus Name.</CardText>
                 </CardBody>
               </Card>
               </div>
              )          
            })} 
          </Row>  
       </Container>
      
    );
  };


  return (
    <div style={{ paddingTop: "5rem" }}>
      {!students || students.length === 0 ? emptyStudentDataLayout() : studentDataLayout()}
    </div>
  );
  
};

export default Students;