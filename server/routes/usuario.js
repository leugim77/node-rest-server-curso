const express = require('express')

const app = express()

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


module.exports = app;