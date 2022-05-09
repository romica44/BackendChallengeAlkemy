var express = require('express')
var router = express.Router()
var Character = require('../../sequelize/models/character')
var { Op } = require('sequelize')

router.get('/', async (req, res, next) => {
    let limitedQueries = limitToFields(req.query, fields)

    if (req.query.id) {
        let { id } = req.query
        if (isNaN(id)) return res.status(400).send("ID must be an integer.")
        Character.findOne({ where: { id } })
            .then(response => {
                if (!response) res.status(404).send('ID not found.')
                else res.json(response)
            })
            .catch(err => next(err))
    }
    else if (req.body.name || req.body.weight || req.body.age){
        let {age, weight, name} = req.body
        if (age && isNaN(age)) return res.status(400).send("Age must be an integer")
        if (weight && isNaN(weight)) return res.status(400).send("Weight must be an integer")

        if (name) {
            searchOptions.where.name = {
                [Op.regexp]: name.toLowerCase()
            }
        }
        if (order) {
            searchOptions.order = [['name', order == "DESC" ? "DESC" : "ASC"]]
            delete searchOptions.where.order
        }

        Character.findAll(searchOptions)
            .then(response => res.json(response))
            .catch(err => next(err))
    }
    else {
        Character.findAll({ attributes: ['image', 'name'] })
            .then(response => res.json(response))
            .catch(err => next(err))
    }
});

module.exports = router
