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
