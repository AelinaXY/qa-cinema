const Films = require('../models/films'); 
const chai = require("chai");
const chaiHttp = require("chai-http");
const { app } = require("../server.js");
const { reset } = require("./cleanUpDb.js");
const { connection } = require("../dbutils/dbConnect.js");
const populate = require("../dbutils/dbPopulate");

chai.use(chaiHttp);
const expect = chai.expect;

describe('User API', function () {

  this.timeout(30_000);

  beforeEach(async () => {
    await reset();
    await populate();
  });


  it('should create a user', (done) => {
    const userData = {  
      id: 6,       
      user_name: "test",
      user_fname: "testtesttest",
    };

    chai
      .request(app)                         
      .post('/users/')                   
      .send(userData)                          
      .end((err, res) => {
        chai.expect(err).to.be.null;                
        chai.expect(res.body).to.include(userData); 
        chai.expect(res.status).to.equal(200);
        done();
      });
  });

  const expectedUserData = {
    id:1,
    user_name: "maryum_s",
    user_fname: "maryum",
    user_pass: "pass123"      
  };

  it('should retrieve all users', (done) => {
    chai
      .request(app)
      .get('/users/')
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(200);
        expect(res.body).to.be.an("array");
        chai.expect(res.body).to.deep.include(expectedUserData)
        done();
      });
  })

  it('should retrieve a user by ID', (done) => {
    const userId = '1'; 
  
    chai
      .request(app)
      .get(`/users/${userId}`)
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.body).to.deep.include(expectedUserData); 
        chai.expect(res.status).to.equal(200);
        done();
      });
  });
  
  it('should update a user by ID', (done) => {
    const userId = '3'; 
    const updatedUserData = {
      "user_name": "pear",
      "user_fname": "apple",
      "user_pass": "orange"                   
    };
  
    // update test
    chai
      .request(app)
      .put(`/users/${userId}`)
      .send(updatedUserData)
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.body).to.deep.include(updatedUserData)
        chai.expect(res.status).to.equal(200);
        done();
      });
  });

  it('should remove a user', (done) => {
  let userIdToBeRemoved=3;
    chai.request(app)
      .delete(`/users/${userIdToBeRemoved}`)
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(200);
        chai.expect(res.body).to.have.property('message').equal('User was deleted successfully!');
        done();
  });
});

// after(() => {
//   connection.destroy();
// });
});