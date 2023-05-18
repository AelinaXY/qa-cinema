const chai = require("chai");
const chaiHttp = require("chai-http");
const DiscussionBoardPost = require("../models/discussionBoard");
const { app } = require("../server.js");
const { reset } = require("./cleanUpDb.js");
const { connection } = require("../dbutils/dbConnect.js");
const populate = require("../dbutils/dbPopulate");

chai.use(chaiHttp);
const expect = chai.expect;

describe("discussion baord api", function () {
  this.timeout(30_000);

  beforeEach(async () => {
    await reset();
    await populate();
  });

  it("should create a new comment in discussion board", (done) => {
    const discussionBoardPostData = {
      title: "Test title",
      body: "test comment",
      film_id: 1,
      film_rating: 3,
    };

    chai
      .request(app)
      .post("/discussionBoard/")
      .send(discussionBoardPostData)
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.body).to.include(discussionBoardPostData);
        chai.expect(res.status).to.equal(200);
        done();
      });
  });

  const expectSpidermanRating = {
    id: 1,
    title: "spiderman - no way home post",
    body: "best spiderman movie ever!",
    film_id: 2,
    film_rating: 5,
    cinema_rating: "good",
  };
  it("should retrieve all films", (done) => {
    chai
      .request(app)
      .get("/discussionBoard/")
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(200);
        chai.expect(res.body).to.be.an("array");
        chai.expect(res.body).to.deep.include(expectSpidermanRating);
        done();
      });
  });

  it("should retrieve a post by ID", (done) => {
    const discussionBoardId = 1;

    chai
      .request(app)
      .get(`/discussionBoard/${discussionBoardId}`)
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.body).to.deep.include(expectSpidermanRating);
        chai.expect(res.status).to.equal(200);
        done();
      });
  });

  it("Should update a post by ID", (done) => {
    const discussionBoardId = 1;
    const updatedPostData = {
      title: "new stuff",
      body: "crap!",
      film_id: 2,
      film_rating: 3,
      // cinema_rating: "excellent",
    };

    chai
      .request(app)
      .put(`/discussionBoard/${discussionBoardId}`)
      .send(updatedPostData)
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.body).to.deep.include(updatedPostData);
        chai.expect(res.status).to.equal(200);
        done();
      });
  });

  it("Should remove a showing ", (done) => {
    const discussionBoardRemoveTest = 1;

    chai
      .request(app)
      .delete(`/discussionBoard/${discussionBoardRemoveTest}`)
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(200);

        chai
          .expect(res.body)
          .to.have.property("message")

          .equal("Post was deleted successfully!");
      });
  });
});
