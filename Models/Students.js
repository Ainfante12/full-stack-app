const { Sequelize, DataTypes } = require('sequelize');
const campus = require('./campuses')
const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/postgres') // estsblishing connection to database 
 
const Student = sequelize.define('student', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    first_name: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: { msg: "Please enter First name" }
        }
    },
        last_name: {
          type: DataTypes.STRING,
            validate: {
             notEmpty: { msg: "Please enter Last name" }
        }
    },
    email: {
        type: DataTypes.STRING,
          validate: {
           notEmpty: { msg: "Please enter Email" }
          }
    },
    gpa: {
        type: DataTypes.DOUBLE(5),
          validate: {
           notEmpty: { msg: "Please enter GPA" }
          }
    },
    campus_id: {
        type: DataTypes.INTEGER,
          references: {
              model:campus,
              key:'id'              
          }
    }
}, {
    timestamps:false
})
    module.exports = Student 