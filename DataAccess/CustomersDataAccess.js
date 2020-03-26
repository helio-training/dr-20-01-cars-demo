const { MongoClient, ObjectId } = require('mongodb');
const uri = process.env.MONGO_URL;

console.log('uri', uri)

const getConnectedClient = async () => {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    return await client.connect()
}

const getAllCustomers = async () => {
    const client = await getConnectedClient()

    const collection = await client.db("car-demo").collection("customers");

    const data = await collection.find().toArray()

    await client.close();

    return data
}

const getCustomer = async (customerId) => {
    console.log('customerId', customerId)

    const client = await getConnectedClient()
    const collection = client.db("car-demo").collection("customers");

    const foundCustomerArray = await collection.find({ _id: ObjectId(customerId) }).toArray()

    const foundCustomer = foundCustomerArray[0]

    client.close();
    
    console.log('foundCustomer', foundCustomer)

    return foundCustomer
}

const createNewCustomer = async (customerToCreate) => {
    const client = await getConnectedClient()

    const customers = client.db("car-demo").collection("customers");

    await customers.insertOne(customerToCreate)

    client.close();

    return customerToCreate
}


module.exports = {
    getAllCustomers,
    getCustomer,
    createNewCustomer
}