const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index.js'); 
const Films = require('../models/films'); 
const app = require('../index.js');
const dbConnect = require('../dbutils/dbConnect.js');
const { DB } = require('../dbutils/dbconfig.js');
const dbconfig = require('../dbutils/dbconfig.js');
const { cleanUpDb } = require('./cleanUpDb.js'); 

chai.use(chaiHttp);
const expect = chai.expect;

describe('Film API', () => {

  afterEach(async () => {
    await cleanUpDb(); 
  });

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

  const expectedFilmAtId2 = {
    id:2,
    film_title: 'Joker',              
    film_year: 2019,                        
    film_rating: '15',                      
    film_genre: 'Crime',                     
    film_secondary_genre: 'Drama',         
    film_poster: 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg'        
  };

  it('should retrieve all films', (done) => {
    chai
      .request(app)
      .get('/films/')
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(200);
        const responseBody = JSON.stringify(res.body); 
        const expectedFilm = JSON.stringify(expectedFilmAtId2); 
        chai.expect(responseBody).to.include(expectedFilm); 
        done();
      });
  })

  it('should retrieve a film by ID', (done) => {
    const filmId = '2'; 
  
    chai
      .request(app)
      .get(`/films/byId/${filmId}`)
      .end((err, res) => {
        chai.expect(err).to.be.null;
        const responseBody = JSON.stringify(res.body); 
        const expectedFilm = JSON.stringify(expectedFilmAtId2); 
        chai.expect(responseBody).to.include(expectedFilm); 
        chai.expect(res.status).to.equal(200);
        done();
      });
  });
  
  it('should update a film by ID', (done) => {
    const filmId = '2'; 
    const updatedFilmData = {
      id:2,
      film_title: 'UpdatedFilm',              
      film_year: 2023,                        
      film_rating: '12A',   
      film_genre: 'genre',                     
      film_secondary_genre: 'secondary_genre',         
      film_poster: 'UpdatedFilm film_poster'                     
    };
  
    let originalFilmData; 
    // retrieving the original film data
    chai
      .request(app)
      .get(`/films/byId/${filmId}`)
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(200);
        originalFilmData = res.body; 
      });
  
    // update test
    chai
      .request(app)
      .put(`/films/${filmId}`)
      .send(updatedFilmData)
      .end((err, res) => {
        chai.expect(err).to.be.null;
        const responseBody = JSON.stringify(res.body); 
        console.log(responseBody);
        const updatedFilm = JSON.stringify(updatedFilmData); 
        chai.expect(responseBody).to.include(updatedFilm); 
        chai.expect(res.status).to.equal(200);
        done();
      });
  
    // restoring the original film data
    after(() => {
      chai
        .request(app)
        .put(`/films/${filmId}`)
        .send(originalFilmData) 
        .end((err, res) => {
          chai.expect(err).to.be.null;
        });
    });
  });
});
