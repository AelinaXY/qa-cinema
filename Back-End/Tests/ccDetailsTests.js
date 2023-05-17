const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../index.js");
const CCDetails = require("../models/ccdetails");
const app = require("../index.js");
const dbConnect = require("../dbutils/dbConnect.js");
const { DB } = require("../dbutils/dbconfig.js");
const dbconfig = require("../dbutils/dbconfig.js");
const { cleanUpDb } = require("./cleanUpDb.js");

chai.use(chaiHttp);
const expect = chai.expect;

describe("CCDetails", () => {
  afterEach(async () => {
    await cleanUpDb();
  });

  it("should create new ccdetails", (done) => {
    const filmData = {
      cc_user: "test user",
      cc_number: "12345678910",
      cc_date: "23/09/24",
      cc_ccv: "123 ",
    };

    chai
      .request(app)
      .post("/ccdetails/")
      .send(ccdetailsData)
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.body).to.include(ccdetailsData);
        chai.expect(res.status).to.equal(200);
        done();
      });
  });
});
