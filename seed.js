const Student = require('./Models/students')
const Campus = require('./Models/campuses')//import these 2 models 

async function pt(){ // async run operation do something while op finishes
await Campus.sync({force:true})// create campus first because student references campuses will get error since they run concurrently
await Student.sync({force:true})
}

pt()
