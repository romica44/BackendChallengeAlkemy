const { DataTypes, Model } = require('sequelize')
const { isArrayOfInts } = require('../../../helpers')
const { TEXT, INTEGER, ARRAY, DECIMAL } = DataTypes
var sequelize = require('../index')

class Character extends Model { };
Character.init({
    image: {
        type: TEXT,
        allowNull: false,
    },
    name: {
        type: TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    age: {
        type: INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
            isInt: true
        }
    },
    weight: {
        type: DECIMAL,
        allowNull: false,
        validate: {
            notEmpty: true,
            isDecimal: true
        }
    },
    story: {
        type: TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    relatedMovies: {
        type: ARRAY(INTEGER),
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    }
})

module.exports = Character
