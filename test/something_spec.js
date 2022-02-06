var axios = require('axios');


var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
	it('thist stuff', async function() {
		returnedAgencies = await axios.get('http://localhost:3000/applications/42d0fd0e-630f-4331-b3c3-5cc4a31c8d8e/areas');
		console.log(returnedAgencies.data);
	})
  });
});