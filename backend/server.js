const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;
const colors = require('colors')
const app = express();
const connectDB = require('./config/db')
const path = require('path')

const publicPath = path.join(process.cwd(), 'frontend', 'dist');

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
//send api calls to router

app.use('/api/Projects', require('./routes/projectRoutes'));
app.use(express.static(publicPath))


//send the main page on url load
app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// connect to db before starting server
connectDB.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.rainbow);
  })
})

// To Do:
// Add app.use(USERS)

