
const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised).should();

const GaryBuseyMovies = require('../models/movies');

describe('busey model', () => {
    it('should retrieve all the random busey movies', async () => {
        const buseyMovies = await GaryBuseyMovies.getAll();
        expect(buseyMovies).to.be.an.instanceOf(Array);
    });
    it('should be abel to retieve a year that busey dropped a movie', async () => {
        const buseyFlix = await GaryBuseyMovies.getById(4);
        expect(buseyFlix.yearReleased).to.equal(1978);
    });
});