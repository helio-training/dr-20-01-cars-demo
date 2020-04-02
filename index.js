require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 4000

const customersRoutes = require('./Routes/mongoCustomers')
const vehiclesRoutes = require('./Routes/vehicles')

app.use(express.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    
    next()
})

app.use('/customers', customersRoutes)
app.use('/vehicles', vehiclesRoutes)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))