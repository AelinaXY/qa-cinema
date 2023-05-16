const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index.js');
const Films = require('../models/films');
const app = require('../index.js');
const dbConnect = require('../dbutils/dbConnect.js');
const { DB } = require('../dbutils/dbconfig.js');
const dbconfig = require('../dbutils/dbconfig.js');
const cleanUpDb = require('./cleanUpDb.js');
const h2db = require('./test_dbutils/h2SetUp.js');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Film API', () => {

  it('should create a film', (done) => {
    const filmData = {
      film_title: 'TestFilm',
      film_year: 2023,
      film_rating: '12A',
      film_genre: 'Action',
      film_secondary_genre: 'Adventure',
      film_poster: 'test url'
    };

    chai
      .request(app)
      .post('/films/')
      .send(filmData)
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.body).to.include(filmData);
        chai.expect(res.status).to.equal(200);
        done();
      });
  });

  // it('should retrieve all films', (done) => {
  //   chai
  //     .request(app)
  //     .get('/films/')
  //     .end((err, res) => {
  //       chai.expect(err).to.be.null;
  //       chai.expect(res.status).to.equal(200);
  //       chai.expect(res.body).to.deep.include({
  //         id: 1,
  //         film_title: 'Joker',
  //         film_year: 2019,
  //         film_rating: '15',
  //         film_genre: 'Crime',
  //         film_secondary_genre: 'Drama',
  //         film_poster: 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg'
  //       });
  //       done();
  //     });
  // })

  // it('should retrieve a film by ID', (done) => {
  //   const filmId = 1;

  //   chai
  //     .request(app)
  //     .get(`/films/byId/${filmId}`)
  //     .end((err, res) => {
  //       chai.expect(err).to.be.null;
  //       chai.expect(res.body).to.include({
  //         id: 1,
  //         film_title: 'Joker',
  //         film_year: 2019,
  //         film_rating: '15',
  //         film_genre: 'Crime',
  //         film_secondary_genre: 'Drama',
  //         film_poster: 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg'
  //       });
  //       chai.expect(res.status).to.equal(200);
  //       done();
  //     });
  // });

  // it('should update a film by ID', (done) => {
  //   const filmId = 1;
  //   const updatedFilmData = {
  //     id: '1',
  //     film_title: 'UpdatedFilm',
  //     film_year: '2023',
  //     film_rating: '12A',
  //     film_genre: 'Comedy',
  //     film_secondary_genre: 'Drama',
  //     film_poster: 'updated_film poster'
  //   };
  //   // update test
  //   chai
  //     .request(app)
  //     .put(`/films/${filmId}`)
  //     .send(updatedFilmData)
  //     .end((err, res) => {
  //       chai.expect(err).to.be.null;
  //       chai.expect(res.body).to.deep.include(updatedFilmData);
  //       chai.expect(res.status).to.equal(200);
  //       done();
  //     });

  // });
  // // restoring the original film data
  // after(() => {
  //   dbConnect.destroy();
  // });
});
