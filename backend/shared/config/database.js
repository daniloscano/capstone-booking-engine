const mongoose = require('mongoose')
require('dotenv').config()

const databaseConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION)
        console.log('Database connected successfully!')
    } catch (err) {
        console.error(`Database connection error: ${err}`)
        process.exit(1)
    }
}

module.exports = databaseConnection