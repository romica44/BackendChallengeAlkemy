const { Sequelize } = require('sequelize')
const sequelize = new Sequelize(process.env.POSTGRES)

module.exports = sequelize
