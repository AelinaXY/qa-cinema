const Films = require('../models/films'); 
const chai = require("chai");
const chaiHttp = require("chai-http");
const { app } = require("../server.js");
const { reset } = require("./cleanUpDb.js");
const { connection } = require("../dbutils/dbConnect.js");
const populate = require("../dbutils/dbPopulate");

chai.use(chaiHttp);
const expect = chai.expect;

describe('Screen API', function () {

  this.timeout(30_000);

  beforeEach(async () => {
    await reset();
    await populate();
  });


  it('should create a screen', (done) => {
    const screenData = {         
      screen_max_seats: '72'        
    };

    chai
      .request(app)                         
      .post('/screens/')                   
      .send(screenData)                          
      .end((err, res) => {
        chai.expect(err).to.be.null;                
        chai.expect(res.body).to.include(screenData); 
        chai.expect(res.status).to.equal(200);
        done();
      });
  });

  const expectedScreenData = {
    id:1,
    screen_max_seats: 100    
  };

  it('should retrieve all screens', (done) => {
    chai
      .request(app)
      .get('/screens/')
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(200);
        expect(res.body).to.be.an("array");
        chai.expect(res.body).to.deep.include(expectedScreenData)
        done();
      });
  })

  it('should retrieve a screen by ID', (done) => {
    const screenId = '1'; 
  
    chai
      .request(app)
      .get(`/screens/${screenId}`)
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.body).to.deep.include(expectedScreenData); 
        chai.expect(res.status).to.equal(200);
        done();
      });
  });
  
  it('should update a film by ID', (done) => {
    const screenId = '3'; 
    const updatedScreenData = {
      screen_max_seats: 52                    
    };
  
    // update test
    chai
      .request(app)
      .put(`/screens/${screenId}`)
      .send(updatedScreenData)
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.body).to.deep.include(updatedScreenData)
        chai.expect(res.status).to.equal(200);
        done();
      });
  });

  it('should remove a screen', (done) => {
  let screenIdToBeRemoved=3;
    chai.request(app)
      .delete(`/screens/${screenIdToBeRemoved}`)
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(200);
        chai.expect(res.body).to.have.property('message').equal('Screen was deleted successfully!');
        done();
  });
});

// after(() => {
//   connection.destroy();
// });
});