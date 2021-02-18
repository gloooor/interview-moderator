const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const entityRouter = require('./routes/entity.js';

const app = express();

app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());

// environment variables will be added later
const CONNECTION_URL = "mongodb+srv://NAME:PASS@cluster0.bl249.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser : true, useUnifiedTopology: true})
  .then(() => app.listen(PORT, () => console.log(`Server running on: http://localhost:${PORT}`)))
  .catch((error)=> console.log(error.message))

  mongoose.set('useFindAndModify', false)
