const {Sequelize, sequelize, DataTypes, Model} = require('./db');

// TODO - define the Band model
class Band extends Model {};

Band.init({
    name: DataTypes.STRING,
    genre: DataTypes.ENUM('Rock', 'Pop', 'Hip Hop', 'R&B')
}, {
    sequelize
});

module.exports = {
    Band
};