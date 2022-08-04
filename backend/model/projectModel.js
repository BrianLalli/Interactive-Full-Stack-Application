const mongoose = require('mongoose')


//mongoose schema
//the is the schema for mongoDB
const ProjectSchema = new mongoose.Schema({
    name: String,
    id: Number,
    deadline: String,
    budget: Number,
    status: String,
})

module.exports = mongoose.model('Project', ProjectSchema)

