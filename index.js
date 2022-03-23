require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const displayRoutes = require('express-routemap')
const mySqlConnection = require('./config/mysql')
const userRoutes = require('./routes/users.routes')
const port = process.env.PORT

// parse application/json
app.use(bodyParser.json())


app.listen(port, () => {
    console.log(`Invoicing is listening on ${port}`)
    displayRoutes(app)

    mySqlConnection.connect(err => {
        
        if (err)  
        // connected successfully and if error occurs, it return back to the user with error message
       console.log('successfully connected: ' , mySqlConnection.threadId)
      })
})

   


app.use(morgan('combined'))
app.use(userRoutes)
 

app.get('/', (req, res) => {
    
    res.status(200).send({
        status: "success",
        message: "Welcome Alaayemi, Odape ori e wanbe. Saa do something",
        data: []
    })

})

//Todo App default display to users
app.use((req, res, next) => {

    res.status(404).send({
        status: "error",
        message: "Hey Alaaye! Kilofeeh? Please get yourself familiar with our activities and move"
    })

})