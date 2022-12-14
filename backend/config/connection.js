const path = require('path')
const mongoose = require('mongoose');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })

mongoose.connect(process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

module.exports = mongoose.connection;
