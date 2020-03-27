require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const customersRoutes = require('./Routes/mongoCustomers')
const vehiclesRoutes = require('./Routes/vehicles')

app.use(express.json())

app.use('/customers', customersRoutes)
app.use('/vehicles', vehiclesRoutes)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))