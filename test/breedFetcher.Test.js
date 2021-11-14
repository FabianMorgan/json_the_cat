const { assert } = require('chai');

const { fetchBreedDescription } = require('../breedFetcher');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
     
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament...";

      assert.equal(expectedDesc, desc);

      done();
    });
  });
  
  it('returns an error when the race is unknown.', (done) => {
    fetchBreedDescription('blahblah', (err, desc) => {
     
      assert.exists(err);
      assert.equal(undefined, desc);
      done();
    });
  });
});