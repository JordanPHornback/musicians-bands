const {Band} = require('./Band')
const {Musician} = require('./Musician')
const {sequelize, DataTypes, Model} = require('./db');
const { Song } = require('./song');

Musician.belongsTo(Band);
Band.hasMany(Musician);

Song.belongsToMany(Band, { through: 'playlist'});
Band.belongsToMany(Song, { through: 'playlist'})

module.exports = {
    Band,
    Musician,
    Song
};
