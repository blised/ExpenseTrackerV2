const mongoose = require('mongoose')

// query to conected to my database
const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('DB Connected')
    } catch (error) {
        console.log('DB Connecction Error');
        
    }
}

module.exports = {db}