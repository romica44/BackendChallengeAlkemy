var express = require('express')
var router = express.Router()
var Movie = require('../../sequelize/models/movie')


router.put('/', (req, res, next) => {
   
    let options = { where: { id: req.body.id } }
    Movie.update(options)
        .then(response => {
            !response[0] && res.status(404).send("Movie ID not found")
            response[0] && res.status(200).send("Movie updated successfully")
        })
        .catch(err => {
            if (err.errors[0].type == 'Validation error') res.status(400).send(err.message)
            else next(err)
        })
})

module.exports = router
