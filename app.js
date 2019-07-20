const express = require('express')
const routes = require('./routes/api')
const bodyParser = require("body-parser");
const mongoose = require('mongoose')

//set up express app
const app = express()

//connect to mongo db
mongoose.connect('mongodb://localhost:27017/ninjago', { useNewUrlParser: true })
mongoose.Promise = global.Promise

app.use(bodyParser.json())

//initialize routes
app.use('/api', routes)

// app.get('/api', (req, res) => {
//     console.log('GET request')
//     res.send({
//         name: "Yoshi"
//     })
// })

//error handling middlewares
app.use(function(error, req, res, next){
    //console.log(error.message)
   res.status(422).send({error: error.message})
})

//listen for requests
app.listen(process.env.port || 4000, () => {
    console.log("listening for requests")
})

