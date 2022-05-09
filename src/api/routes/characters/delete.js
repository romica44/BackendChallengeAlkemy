var express = require('express');
var router = express.Router()
var Character = require('../../sequelize/models/character')

router.delete('/', async (req, res, next) => {
    Character.delete({ where: { id: req.body.id } })
        .then(response => {
            !response && res.status(404).send("ID not found.")
            response && res.status(200).send("The Character was delete")
        })
        .catch(err => next(err))
});

module.exports = router
