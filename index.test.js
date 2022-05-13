const { TestWatcher } = require('jest')
const {sequelize} = require('./db');
const {Band, Musician} = require('./index')

describe('Band and Musician Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const testMusician = await Musician.create({name: 'Prince'})
        expect(testMusician.name).toBe('Prince');
    })

    test('can create a Band', async () => {
        // TODO - test creating a band
        const testBand = await Band.create({name: 'Walk Off the Earth'})
        expect(testBand.name).toBe('Walk Off the Earth');
    })

    test('musicians can play an instrument', async () => {
        const testMusician = await Musician.create({name: 'Elton John', instrument: 'Piano'});
        expect(testMusician.instrument).toBe('Piano')
    })

    test('bands have a genre', async () => {
        const testBand = await Band.create({name: 'Five Finger Death Punch', genre: 'Rock'})
        expect(testBand.genre).toBe('Rock')
    })

    test('Bands can have many musicians', async () => {
        const testBand = await Band.create({name: 'Fake Band', genre: 'Pop'})

        const member1 = await Musician.create({name: 'Fake Guy', instrument: 'Guitar'});
        const member2 = await Musician.create({name: 'Pal Buddy', instrument: 'Vocals'});
        const member3 = await Musician.create({name: 'Boy Howdy', instrument: 'Spoons'});

        await testBand.addMusician(member1);
        await testBand.addMusician(member2);
        await testBand.addMusician(member3);

        const musicians = await testBand.getMusicians();

        expect(musicians.length).toBe(3);
        expect(musicians[0] instanceof Musician).toBeTruthy
    })
})