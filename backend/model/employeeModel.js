const mongoose = require('mongoose')


//mongoose schema
//the is the schema for mongoDB
const EmployeeSchema = new mongoose.Schema({
    name: String,
    id: Number,
    email: String,
    officeNumber: String,
    gitHub: String,
    school: String,
})

module.exports = mongoose.model('Employee', EmployeeSchema)

