const Campuses =require('../Models').Campuses
const Students =require('../Models').Students;
const router = express.Router();


router.get("/Campuses",(req,res) =>{
     return Campuses.findAll({
      include: [
        {
          model: student,
          as: "Students"
        }
      ]
    })
      .then(campuses => {
        res.status(200).send(campuses);
      })
      .catch(error => {
        console.log(error);
        res.status(400).send(error);
      });
  },


  // Retrieve all published Tutorials
  router.get("/Campuses/:id", (req,res)=>{
    return Campuses.findByPk(req.params.id, {
      include: [
        {
          model: students,
          as: "Students"
        }
      ]
    })
      .then(campus => {
        if (!campus) {
          return res.status(404).send({
            message: "Unable to retrieve campus information"
          });
        }
        return res.status(200).send(campus);
      })
      .catch(error => res.status(400).send(error));
  },
  
router.post('/Campuses',(req,res)=>{
return Campuses.create(req.body,{
    include: [
        {
          model: students,
          as: "Students"
        }
      ]
    })
      .then(campus => res.status(201).send(campus))
      .catch(error => res.status(400).send(error));
  },



  // Update a Tutorial with id
  router.put("/Campuses/:id",(req,res)=>{
    return Campuses.findByPk(req.params.id, {
      include: [
        {
          model: campuses,
          as: "Campuses"
        }
      ]
    }).then(campus => {
        if (!campus) {
          return res.status(404).send({
            message: "Campus Not Found"
          });
        }
        return campus
          .update(req.body)
          .then(() => res.status(200).send(campus))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },


  // Delete a Student with id
  router.delete("/Campuses/:id",(req,res) =>{
    return Campuses.findByPk(req.params.id).then(campus => {
      if (!campus) {
        return res.status(400).send({
          message: "Campus Not Found"
        });
      }
      return campus
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
},



//Bracket error
//Bracket error