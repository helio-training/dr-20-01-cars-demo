const express = require('express')
const router = express.Router()

const customersDataAccess = require("../DataAccess/CustomersDataAccess")

//CREATE
router.post('/', async (req, res) => {
    const newCustomer = req.body
    console.log('newCustomer', newCustomer)

    const createdCustomer = await customersDataAccess.createNewCustomer(newCustomer)

    res.send(createdCustomer)
})

//READ
router.get('/', async (req, res) => {
    const allCustomers = await customersDataAccess.getAllCustomers()
    res.send(allCustomers)
})

//*****Secific Item

//READ
router.get('/:id', async (req, res) => {
    const id = req.params.id
    console.log('id', id)

    const foundCustomer = await customersDataAccess.getCustomer(id)

    res.send(foundCustomer)
})

//UPDATE
router.put('/:id', (req, res) => {
    const updatedCustomer = req.body

    const customerIndex = customers.reduce((targetIndex, customer, currentIndex) => {
        return customer.id === updatedCustomer.id ? currentIndex : targetIndex
    }, -1)

    if (customerIndex === -1) {
        res.sendStatus(404)
    }

    customers[customerIndex] = updatedCustomer

    res.sendStatus(204)
})
router.patch('/:id', (req, res) => res.send('Updated single customer by id via PATCH'))

//Delete
router.delete('/:id', (req, res) => res.send('Delete single customer by id'))


module.exports = router