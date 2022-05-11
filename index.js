const sequelize = require('sequelize');
const {Band} = require('./Band')
const {Musician} = require('./Musician')

const {sequelize, DataTypes, Model} = require('./db');

Musician.belongsTo(Band);
Band.hasMany(Musician);

module.exports = {
    Band,
    Musician
};
