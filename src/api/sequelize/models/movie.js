const { DataTypes, Model } = require('sequelize')
const { isArrayOfInts } = require('../../../helpers')
const { TEXT, DATE, INTEGER, ARRAY } = DataTypes
const sequelize = require('../index')

class Movie extends Model { }
Movie.init({
    image: {
        type: TEXT,
        allowNull: false,
    },
    title: {
        type: TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    creationDate: {
        type: DATE,
        allowNull: false,
        validate: {
            isDate: true
        }
    },
    rating: {
        type: INTEGER,
        allowNull: false,
        validate: {
            isInt: true,
            min: 1,
            max: 5,
        }
    },
    relatedCharacters: {
        type: ARRAY(INTEGER),
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    genre: {
        type: ARRAY(INTEGER),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
})

module.exports = Movie
