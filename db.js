const path = require('path');
const { Sequelize, DataTypes, Model } = require('sequelize');

// TODO - create the new sequelize connection

const sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite',
    storage: './music.sqlite',
    logging: false
});

module.exports = {
    sequelize,
    Sequelize,
    Model,
    DataTypes
};
