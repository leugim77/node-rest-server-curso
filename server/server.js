﻿require('./config/config');
const mongoose = require('mongoose');
const express = require('express')
const app = express()

const bodyParser = require('body-parser');



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(require('./routes/usuario'));


mongoose.connect('mongodb://localhost:27017/cafe', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

/*
mongoose.connect('mongodb://localhost:27017/cafe', (err, res) => {
    if (err) throw err;

    console.log('Base de datos ONLINE')

});

*/


app.listen(process.env.PORT, () => {
    console.log('Escucnhando el puerto', process.env.PORT);
})