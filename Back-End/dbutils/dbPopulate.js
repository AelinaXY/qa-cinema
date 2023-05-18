const fs = require("fs");
const { connection } = require("./dbConnect.js");

const populate = async () => {
// Insert the film data into the database
require("./films.json").forEach((film) => {
  let sql = "INSERT INTO films SET ?";
  connection.query(sql, film, (err) => {
    if (err) throw err;
  });
});

//read the screens file

  require("./screens.json").forEach((screen) => {
    let sql = "INSERT INTO screens SET ?";
    connection.query(sql, screen, (err) => {
      if (err) throw err;
    });
  });


//read the users file

require("./users.json").forEach((user) => {
    let sql = "INSERT INTO users SET ?";
    connection.query(sql, user, (err) => {
      if (err) throw err;
    });
  });


//read the showings file

require("./showings.json").forEach((showing) => {
    let sql = "INSERT INTO showings SET ?";
    connection.query(sql, showing, (err) => {
      if (err) throw err;
    });
  });


//read the tickets file

require("./tickets.json").forEach((ticket) => {
    let sql = "INSERT INTO tickets SET ?";
    connection.query(sql, ticket, (err) => {
      if (err) throw err;
    });
  });


//read the ccdetails file

require("./ccdetails.json").forEach((ccdetail) => {
    let sql = "INSERT INTO cc_details SET ?";
    connection.query(sql, ccdetail, (err) => {
      if (err) throw err;
    });
  });

//read the discussionboard file

require("./discussionboard.json").forEach((post) => {
    let sql = "INSERT INTO discussion_board SET ?";
    connection.query(sql, post, (err) => {
      if (err) throw err;
    });
  });

}
// populate();

module.exports = populate;