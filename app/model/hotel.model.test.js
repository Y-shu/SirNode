const chai = require('chai');
const expect = chai.expect;

var Hotel = require('./hotels.model.js');

describe('User model', () => {
    it('should return error if required fields are missing', (done) => {
        let hotel = new Hotel();

        hotel.validate((err) => {
            expect(err.errors.name).to.exist;
            expect(err.errors.email).to.exist;
            expect(err.errors.age).to.not.exist;

            done();
        });
    });

    it('should have optional age property', (done) => {
        let hotel = new Hotel({
            name:"mfc",
    
            stars:5,
            currency:"$2000"
        });

        expect(hotel).to.have.property('name').to.equal(mfc);
        done();
    });
});