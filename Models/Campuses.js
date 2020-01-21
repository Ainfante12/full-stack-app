const { Sequelize,DataTypes } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/postgres') // estsblishing connection to database 
const Campuses = sequelize.define('campus',{
    id : {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type: DataTypes.STRING,
        defaultValue:'college',
        validate: {
            notEmpty: { msg: "Please enter campus name" }
          }
    },
    imageUrl: {
        type:DataTypes.STRING,
        defaultValue: 'https://svgshare.com/i/DdH.svg',
    },
    description: {
        type: DataTypes.STRING,
        defaultValue: 'The greatest college on both coast',
        validate: {
            notEmpty: { msg: "Please enter campus description" }
          }
    }

    
}, {
    timestamps:false
})

module.exports = Campuses // like return value