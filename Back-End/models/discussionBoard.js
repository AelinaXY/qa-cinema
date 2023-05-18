const connection = require("../dbutils/dbConnect.js");

const DiscussionBoardPost = function(discussionBoardPost){
    this.title= discussionBoardPost.title;
    this.body = discussionBoardPost.body;
    this.film_id = discussionBoardPost.film_id;
    this.film_rating = discussionBoardPost.film_rating;
    this.cinema_rating = discussionBoardPost.cinema_rating;
}

DiscussionBoardPost.create = (newPost,result)=>{
  connection.query("INSERT INTO discussion_board SET ?",newPost,(err,res)=>{
        if (err) {
            
            result(err, null);
            return;
          }
      
          
          result(null, { id: res.insertId, ...newPost });
    });
}

DiscussionBoardPost.getAll = (result) => {
    let query = "SELECT * FROM discussion_board";
  
    // if (title) {
    //   query += ` WHERE title LIKE '%${title}%'`;
    // }
  
    connection.query(query, (err, res) => {
      if (err) {
        
        result(null, err);
        return;
      }
  
      
      
      result(null, res);
    });
  };

  DiscussionBoardPost.findById = (id, result) => {
    connection.query(`SELECT * FROM discussion_board WHERE id = ${id}`, (err, res) => {
      if (err) {
        
        result(err, null);
        return;
      }
  
      if (res.length) {
        
        result(null, res[0]);
        return;
      }
  
      // not found post with the id
      result({ kind: "not_found" }, null);
    });
  };

  DiscussionBoardPost.updateById = (id, post, result) => {
    connection.query(
      "UPDATE discussion_board SET title = ?, body = ?, film_id = ?, film_rating = ? WHERE id = ?",
      [post.title, post.body, post.film_id, post.film_rating, id],
      (err, res) => {
        if (err) {
          
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found Post with the id
          result({ kind: "not_found" }, null);
          return;
        }
  
        
        result(null, { id: id, ...post });
      }
    );
  };

  DiscussionBoardPost.remove = (id, result) => {
    connection.query("DELETE FROM discussion_board WHERE id = ?", id, (err, res) => {
      if (err) {
        
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // not found Post with the id
        result({ kind: "not_found" }, null);
        return;
      }
  
      
      result(null, res);
    });
  };

  module.exports = DiscussionBoardPost;
