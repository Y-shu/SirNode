let mongoose = require("mongoose");
let Hotel = require('../../app/model/hotels.model.js');

let chai = require('chai');
var expect = chai.expect
let chaiHttp = require('chai-http');
let server = require('../../server');
let should = chai.should();
let app=require('../../routes/index.js')

chai.use(chaiHttp);


  describe('/GET hotels', () => {
      it('it should GET all the hotels', (done) => {
        chai.request('http://localhost:7070/api')
            .get('/hotels')
            .end((err, res) => {
              // console.log(res);
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('array');
      res.type.should.equal('application/json');
      res.body[0].should.have.property('_id');
      res.body[0].should.not.have.property('age');
      res.body[0].should.have.property('stars');
      res.body[0].should.have.property('reviews')
        done();
            });
      });
      it('it should GET/get one hotel a hotel by the given id', (done) => {
               chai.request('http://localhost:7070/api')
                  .get('/hotels/5bac696efb6fc01d131ad4a4')
                  .end((err, res) => {
                    // console.log("res=>",res.body)
                        res.should.have.status(200);
                        expect({name:'mfc friends'}).to.have.property('name');
                        expect({stars: 5}).to.be.an('object');
                         expect(res).to.be.an('object');
                         expect(res.body).to.have.property('name')
                    done();
                  });
                });
  });

  describe('/POST hotels', () => {
   var hotelId;
    it('Inserting One Hotel Happy Flow',(done)=>{
      var hotel={name: 'kfc',stars:4}
      chai.request('http://localhost:7070/api')
        .post('/hotels/new')
        .send(hotel)
        .end((err, res)=>{
          console.log(res.body);
          hotelId= res.body._id;
          // console.log(res);
          res.should.have.status(200);
          res.body.should.have.property('name');
          res.body.should.have.property('stars');
          res.body.should.be.a('object');
          expect(res.body).to.include({name: 'kfc',stars:4});
          done();
        });
        });
        it('should update one hotel test happy flow',(done)=>{
          chai.request('http://localhost:7070/api')
                .put('/hotels/'+hotelId)
                .send({'name': 'bakeryy'})
                .end((error, response)=>{
                  response.should.have.status(200);
                  response.should.be.json;
                  response.body.should.be.a('object');
                  expect(response.body).to.be.an('object');
                  expect(response.body).to.have.property('name').to.eql('bakeryy');
                  expect(response.body).to.have.property('reviews');
                  done();
            });
        });
        it('Delete One Hotel Happy Flow',(done)=>{
          chai.request('http://localhost:7070/api')
            .delete('/hotels/'+hotelId)
            .end((err, res)=>{
              console.log(res.body);
              res.should.have.status(200);
              res.body.should.be.a('object');
              done();
        });
      });
});

