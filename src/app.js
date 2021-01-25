require('dotenv').config();
const express = require('express');
const cors = require('cors')
const app = express();

//settings
app.set('PORT',process.env.PORT);





//initialitations
app.use(cors());
app.use(express.json());



//routes
app.use("/api/v1/usuarios",require('./routes/usuarios'));


module.exports = app;