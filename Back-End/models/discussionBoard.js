const sql = require("../dbutils/dbConnect.js");

const DiscussionBoardPost = function(discussionBoardPost){
    this.discussionBoardPost_title= discussionBoard.discussionBoardPost_title;
    this.discussionBoardPost_body = discussionBoard.discussionBoardPost_body;
    this.discussionBoardPost_film_id = discussionBoard.discussionBoardPost_film_id;
    this.discussionBoardPost_film_rating = discussionBoard.discussionBoardPost_film_rating;
}

DiscussionBoardPost.create = (newPost,result)=>{
    sql.query("INSERT INTO discussion_board SET ?",newPost,(err,res)=>{
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
          }
      
          console.log("created post: ", { id: res.insertId, ...newPost });
          result(null, { id: res.insertId, ...newPost });
    });
}

DiscussionBoardPost.getAll = (title, result) => {
    let query = "SELECT * FROM discussion_board";
  
    if (title) {
      query += ` WHERE title LIKE '%${title}%'`;
    }
  
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("posts: ", res);
      result(null, res);
    });
  };

  DiscussionBoardPost.findById = (id, result) => {
    sql.query(`SELECT * FROM discussion_board WHERE id = ${id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found post: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found post with the id
      result({ kind: "not_found" }, null);
    });
  };

  DiscussionBoardPost.updateById = (id, post, result) => {
    sql.query(
      "UPDATE discussion_board SET title = ?, body = ?, film_id = ?, film_rating = ? WHERE id = ?",
      [post.title, post.body, post.film_id, post.film_rating],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found Post with the id
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("updated post: ", { id: id, ...post });
        result(null, { id: id, ...post });
      }
    );
  };

  DiscussionBoardPost.remove = (id, result) => {
    sql.query("DELETE FROM discussion_board WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // not found Post with the id
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted post with id: ", id);
      result(null, res);
    });
  };

  module.exports = DiscussionBoardPost;
