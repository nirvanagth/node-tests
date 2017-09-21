const express = require('express')

var app = express()

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found'
    })
})

app.get('/users', (req, res) => {
    res.send({
        name: 'Tianhao',
        age: 26
    })
})

app.listen(3000)

module.exports.app = app