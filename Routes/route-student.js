const Campuses=require('../Models').Campuses
const Students=require('../Models').Students;
let router = require("express").Router();
  

   
  
    // Retrieve all Students
    router.get("/Students",(req,res) =>{
      Students.findAll({
        include: [
          {
            model: campuses,
            as: "Campuses"
          }
        ]
      })
        .then(students => {
          res.status(200).send(students);
        })
        .catch(error => {
          console.log(error);
          res.status(400).send(error);
        });
    },
    
  
    
    router.get("/Students/:id", (req,res)=>{
      return Students.findByPk(req.params.id, {
        include: [
          {
            model: campus,
            as: "Campuses"
          }
        ]
      })
        .then(student => {
          if (!student) {
            return res.status(404).send({
              message: "Unable to retrieve student information"
            });
          }
          return res.status(200).send(student);
        })
        .catch(error => res.status(400).send(error));
    },
    
router.post('/Students',(req,res)=>{
  return Students.create(req.body)
      .then(student => res.status(201).send(student))
      .catch(error => res.status(400).send(error));
  },


    // Update a student with id
    router.put("/Students/:id",(req,res)=>{
      return Students.findByPk(req.params.id, {
        include: [
          {
            model: Campuses,
            as: "campuses"
          }
        ]
      })
        .then(student => {
          if (!student) {
            return res.status(404).send({
              message: "Student Not Found"
            });
          }
          return student
            .update(req.body)
            .then(() => res.status(200).send(student))
            .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
    },


    // Delete a Student with id
    router.delete("/Students/:id",(req,res)=>{
      return Students.findByPk(req.params.id)
      .then(student => {
        if (!student) {
          return res.status(400).send({
            message: "Student Not Found"
          });
        }
        return student
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }


