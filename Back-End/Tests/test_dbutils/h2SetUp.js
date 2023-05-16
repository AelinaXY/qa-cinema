const h2 = require('h2');
const knex = require('knex');
const testData = require('./testData.js'); 

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: ':memory:',
  },
  useNullAsDefault: true,
});

async function setupDatabase() {
  await db.schema.createTable('films', (table) => {
    table.increments('id').primary();
    table.string('film_title');
    table.integer('film_year');
    table.string('film_rating');
    table.string('film_genre');
    table.string('film_secondary_genre');
    table.string('film_poster');
  });

  // Insert test data into the tables
  for (const films in testData) {
    if (testData.hasOwnProperty(films)) {
      const tableData = testData[films];
      await db(films).insert(tableData);
    }
  }

  console.log('Database setup completed');
}

setupDatabase()
  .then(() => {
    module.exports = db;
  })
  .catch((error) => {
    console.error('Database setup error:', error);
    process.exit(1);
  });