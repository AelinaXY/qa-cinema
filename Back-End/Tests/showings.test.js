const chai = require("chai");
const chaiHttp = require("chai-http");
const Showings = require("../models/showings");
const { app } = require("../server.js");
const { reset } = require("./cleanUpDb.js");
const { connection } = require("../dbutils/dbConnect.js");
const populate = require("../dbutils/dbPopulate");
chai.use(chaiHttp);
const expect = chai.expect;

describe("Showings API", function () {
  this.timeout(30_000);

  beforeEach(async () => {
    await reset();
    await populate();
  });

  it("should create a showing", (done) => {
    const showingData = {
      showing_film: 3,
      showing_screen: 1,
      showing_time: "2023-06-19T20:00:00",
    };

    chai
      .request(app)
      .post("/showings/")
      .send(showingData)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.body).to.deep.include(showingData);
        expect(res.status).to.equal(200);
        done();
      });
  });

  const showingExpectedData = {
    id: 5,
    showing_film: 4,
    showing_screen: 2,
    showing_time: "2023-05-15T15:45:00.000Z"
  };

  it("should retrieve all showings", (done) => {
    chai
      .request(app)
      .get("/showings/")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an("array");
        expect(res.body).to.deep.include(showingExpectedData);
        done();
      });
  });

  it("should retrieve a showing by ID", (done) => {
    const showingId = 5;

    chai
      .request(app)
      .get(`/showings/${showingId}`)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.equal(200);
        expect(res.body.id).to.equal(showingId);
        expect(res.body).to.deep.include(showingExpectedData);
        done();
      });
  });

  it("should update a showing by ID", (done) => {
    const showingId = 4;
    const updatedShowingData = {
      showing_film: 3,
      showing_screen: 1,
      showing_time: "2023-11-12T21:50:05",
    };
    

    // update test
    chai
      .request(app)
      .put(`/showings/${showingId}`)
      .send(updatedShowingData)
      .end((err, res) => {
        chai.expect(err).to.be.null;
        console.log(res.body);
        chai.expect(res.body).to.deep.include(updatedShowingData);
        chai.expect(res.status).to.equal(200);
        done();
      });
    });

  it('should remove a showing', (done) => {
    const showingIdRemoveTest = 4;
    // Remove the showing
    chai.request(app)
      .delete(`/showings/${showingIdRemoveTest}`)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('message').equal('Showing was deleted successfully!');
        done();
    });
  });

  it('should retrieve showings by film title', (done) => {
    const title = 'Spider-Man: No Way Home';

    const expectedTitleData = {
      id: 2,
      showing_screen: 2,
      showing_time: "2023-05-12T19:00:00.000Z",
    }
    chai
      .request(app)
      .get(`/showings/film/${title}`)
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(200);
        chai.expect(res.body).to.deep.include(expectedTitleData);
        done();
      });
  });

    after(() => {
      connection.destroy();
    });
  });
