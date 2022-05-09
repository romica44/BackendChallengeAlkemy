const { DataTypes, Model, INTEGER } = require('sequelize')
const { TEXT, ARRAY, INTEGER } = DataTypes
const sequelize = require('../index')

class Genre extends Model { }
Genre.init({
    name: {
        type: TEXT,
        allowNull: false
    },
    image: {
        type: TEXT,
        allowNull: false
    },
    relatedMovies: {
        type: ARRAY(INTEGER),
        allowNull: false
    }
})

module.exports = Genre
