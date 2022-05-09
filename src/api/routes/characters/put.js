var express = require('express')
var router = express.Router()
var Character = require('../../sequelize/models/character')


router.put('/', (req, res, next) => {

    let options = { where: { id: req.body.id } }
    Character.update(options)
        .then(response => {
            !response[0] && res.status(404).send("Character ID not found")
            response[0] && res.status(200).send("Character succesfully updated")
        })
        .catch(err => {
            if (err.errors[0].type == 'Validation error') res.status(400).send(err.message)
            else next(err)
        })
})

module.exports = router
