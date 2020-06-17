require('./config/config');
const mongoose = require('mongoose');
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



app.get('/usuario', function(req, res) {
    res.json('GET Usuario')
});

app.put('/usuario/:id', function(req, res) {

    let id = req.params.id;

    res.json({
        id
    })
});

app.post('/usuario', function(req, res) {

    let body = req.body;

    if (body.nombre === undefined) {

        res.status(400).json({
            ok: false,
            mensaje: 'El Nombre es Necesario'
        })
    }
    res.json({
        persona: body
    })
});

app.delete('/usuario', function(req, res) {
    res.json('Delete Usuario')
});

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