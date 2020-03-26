const express = require('express')
const router = express.Router()

const customers = [
    {
        id: 2,
        name: 'Holly',
        age: 35
    },
    {
        id: 1,
        name: 'Danny',
        age: 34
    }
]
//

//CREATE
router.post('/', (req, res) => {
    const requestedCustomer = req.body

    const maxExistingId = customers.reduce((previousMaxId, customer) => {
        return previousMaxId < customer.id ? customer.id : previousMaxId
    }, 0)
    const newId = maxExistingId + 1

    const newCustomer = {
        id: newId,
        ...requestedCustomer
    }

    customers.push(newCustomer)

    res.send(newCustomer)
})

//READ
router.get('/', (req, res) => {
    res.send(customers)
})

//DELETE
router.delete('/', (req, res) => {
    for (i = customers.length; i > 0; i--) {
        customers.pop()
    }
    res.send('Deleted all customers')
})

//*****Secific Item

//CREATE
router.post('/:id', (req, res) => res.send('Created a single Customer with the specified id'))

//READ
router.get('/:id', (req, res) => {
    const id = Number.parseInt(req.params.id)
    const c = customers.reduce((targetCustomer, customer) => {
        return customer.id === id ? customer : targetCustomer
    }, { message: 'No customer found' })

    res.send(c)
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