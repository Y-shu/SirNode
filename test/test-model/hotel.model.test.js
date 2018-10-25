  var chai = require('chai')
  var expect=chai.expect;
  // var chaihttp = require('chai-Http');
  var Hotel=require('../../app/model/hotels.model.js');
  // var server= require('../server.js');
  // chai.use(chaihttp)

  describe('User model happy test flow', () => {

it('test for hotel model data', (done) => {
        var hotel = new Hotel({
            name:"Hotel ann Carlton belfort Medellin",
            stars:5,
            currency:"$2000"
        });
        expect(hotel).to.have.property('name').to.equal("Hotel ann Carlton belfort Medellin");
        expect(hotel).to.have.property('stars').to.equal(5);
        expect(hotel).to.have.property('currency');
        expect('stars').to.not.have.string(true);
        expect(hotel).to.have.property('stars')
      expect(hotel).to.not.have.property('age')
        expect(hotel).to.have.property('name').to.be.a('string');
        done();
    });
});
