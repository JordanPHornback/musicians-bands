const {Sequelize, sequelize, DataTypes, Model} = require('./db');

// TODO - define the Band model
class Song extends Model {};

Song.init({
    title: DataTypes.STRING,
}, {
    sequelize
});

module.exports = {
    Song
};