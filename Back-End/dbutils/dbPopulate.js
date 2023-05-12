const fs = require('fs');
const db = require('./dbConnect');

// Read the JSON file
fs.readFile('films.json', 'utf8', (err, data) => {
  if (err) throw err;

  // Parse the JSON data
  const films = JSON.parse(data);

  // Insert the film data into the database
  films.forEach(film => {
    let sql = 'INSERT INTO films SET ?';
    db.query(sql, film, (err) => {
      if (err) throw err;
    });
  });

  console.log('Film data inserted into database');
});

//read the screens file
fs.readFile('screens.json','utf8',(err,data)=>{
    if(err) throw err;
    const screens = JSON.parse(data);
    screens.forEach(screen=>{
        let sql = 'INSERT INTO films SET ?';
        db.query(sql,screen,(err)=>{
            if (err) throw err;
        });
    });
    console.log('Film data inserted into database');
});

//read the users file
fs.readFile('users.json','utf8',(err,data)=>{
    if(err) throw err;
    const users = JSON.parse(data);
    users.forEach(user=>{
        let sql = 'INSERT INTO users SET ?';
        db.query(sql,user,(err)=>{
            if (err) throw err;
        });
    });
    console.log('User data inserted into database');
});

//read the showings file
fs.readFile('showings.json','utf8',(err,data)=>{
    if(err) throw err;
    const showings = JSON.parse(data);
    showings.forEach(showing=>{
        let sql = 'INSERT INTO showings SET ?';
        db.query(sql,showing,(err)=>{
            if (err) throw err;
        });
    });
    console.log('Showing data inserted into database');
});

//read the tickets file
fs.readFile('tickets.json','utf8',(err,data)=>{
    if(err) throw err;
    const tickets = JSON.parse(data);
    tickets.forEach(ticket=>{
        let sql = 'INSERT INTO tickets SET ?';
        db.query(sql,ticket,(err)=>{
            if (err) throw err;
        });
    });
    console.log('Ticket data inserted into database');
});

//read the ccdetails file
fs.readFile('ccdetails.json','utf8',(err,data)=>{
    if(err) throw err;
    const ccdetails = JSON.parse(data);
    ccdetails.forEach(ccdetail=>{
        let sql = 'INSERT INTO cc_details SET ?';
        db.query(sql,ccdetail,(err)=>{
            if (err) throw err;
        });
    });
    console.log('ccdetail data inserted into database');
});

//read the discussionboard file
fs.readFile('discussionboard.json','utf8',(err,data)=>{
    if(err) throw err;
    const discussionboard = JSON.parse(data);
    discussionboard.forEach(post=>{
        let sql = 'INSERT INTO cc_details SET ?';
        db.query(sql,post,(err)=>{
            if (err) throw err;
        });
    });
    console.log('discussionboard data inserted into database');
});
