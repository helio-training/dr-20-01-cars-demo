const { vehicles } = require('../logic')

const ejs = require('ejs')
const express = require('express')
const router = express.Router()



let html = ejs.render(`
<ul>
    <% names.forEach(function(name){ %>
        <li> <%= name %> </li>
    <% }); %>
</ul>`, {
    names: vehicles.map(v => v.name)
})

router.get('/home', (req, res) => res.send(html))

router.get('/', (req, res) => {
    res.contentType('application/json')
    res.send(JSON.stringify(vehicles))
})

router.get('/:id', (req, res) => res.send('got vehicle by id'))

module.exports = router