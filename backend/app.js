

const express = require('express')
const cors = require('cors');
const {db} = require('./db/db'); //database
const {readdirSync} = require('fs');
const {route} = require('./routes/transactions');
const app = express()

require('dotenv').config()

const PORT = process.env.PORT

//Middlewares
app.use(express.json())
app.use(cors({
 //Empty for now
}))

// routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))


app.get('/', (req, res) => {
    res.send('Hello World')
})

const server = () =>{
    db() // database conected
    app.listen(PORT, () => {
        // to see if there is a conection with postman(local)
        console.log('listening to port: ', PORT) 
    })

    //console.log('You rae listening to porto: ', PORT
    //);
}

server()