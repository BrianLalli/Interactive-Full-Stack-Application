const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;
const colors = require('colors')
const app = express();
const connectDB = require('./config/db')
const path = require('path')
const publicPath = path.join(process.cwd(), 'frontend', 'dist');
const session = MyModel.startSession();
const doc = await MyModel.findOne().session(session);
doc.$session() === session; // true
doc.$session(null);
doc.$session() === null; // true

// Set up sessions with cookies using SQL
// const sess = {
//   secret: 'Super secret secret',
//   cookie: {
//     // Stored in milliseconds (86400 === 1 day)
//     maxAge: 86400,
//   },
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize,
//   }),
// };

// app.use(session(sess));

// Set up sessions with cookies using Mongo
// db = db.getMongo().startSession({retryWrites: true, causalConsistency: true}).getDatabase(db.getName());

// db.runCommand(
//   {
//     startSession: 1
//   }
// )


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
//send api calls to router

app.use('/api/Projects', require('./routes/projectRoutes'));
app.use('api/Users', require('./routes/userRoutes'));
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

