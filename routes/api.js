const express = require('express')
const router = express.Router()
const Ninja = require('../models/ninja')

//get a list of ninjas from the db
router.get('/ninjas', (req, res, next) => {
    res.send({
        type: 'GET'
    })
})

//add a new ninja to the db
router.post('/ninjas', (req, res, next) => {
    //console.log(req.body)

    // var ninja = new Ninja(req.body) //creating new instance of the ninja by using body of the response to be added to db
    // ninja.save()

    Ninja.create(req.body).then( (ninja) => {
        res.send(ninja)
    }).catch(next)
    // res.send({
    //     type: 'POST',
    //     name: req.body.name,
    //     rank: req.body.rank,
    // })
})


//update a ninnja in the db
router.put('/ninjas/:id', (req, res, next) => {
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then((ninja) => {
        res.send(ninja)
    })
   // res.send({ type: 'PUT'})
})

//delete a ninja from the db
router.delete('/ninjas/:id', (req, res, next) => {
    //console.log(req.params.id)
    Ninja.findByIdAndRemove({_id: req.params.id}).then(() => {
        Ninja.findOne({_id: req.params.id}).then((ninja) => {
            res.send(ninja)
        })
    })
   // res.send({ type: 'DELETE'})
})

studentrouter.delete("/student/:id", (req, res) => {
    Student.findById(req.params.id)
      .then(student => student.remove().then(() => res.json({ success: true })))
      .catch(err => res.status(404).json({ success: false }))
  }) 

module.exports = router