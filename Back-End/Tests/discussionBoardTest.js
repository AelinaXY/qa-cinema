const chai = require("chai");
const chaiHttp = require("chai-http");
const DiscussionBoardPost = require("../models/discussionBoard");
const app = require("../index.js");
const dbConnect = require("../dbutils/dbConnect.js");
const { DB } = require("../dbutils/dbconfig.js");
const dbconfig = require("../dbutils/dbconfig.js");
const { cleanUpDb } = require("./cleanUpDb.js");

chai.use(chaiHttp);
const expect = chai.expect;

describe("discussion baord api", () => {
  afterEach(async () => {
    await cleanUpDb();
  });

  it("should create a new comment in discussion board", (done) => {
    const discussionBoardPostData = {};
  });
});
