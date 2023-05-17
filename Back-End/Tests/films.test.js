const chai = require('chai');
const chaiHttp = require('chai-http');
const Films = require('../models/films'); 
const {app1} = require('../index.js');
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
      .request(app1)                         
      .post('/films1/')                   
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
      .request(app1)
      .get('/films1/')
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(200);
        chai.expect(res.body).to.deep.include(expectedFilmAtId2)
        done();
      });
  })

  it('should retrieve a film by ID', (done) => {
    const filmId = '2'; 
  
    chai
      .request(app1)
      .get(`/films1/byId/${filmId}`)
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.body).to.deep.include(expectedFilmAtId2); 
        chai.expect(res.status).to.equal(200);
        done();
      });
  });
  
  it('should update a film by ID', (done) => {
    const filmId = '3'; 
    const updatedFilmData = {
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
      .request(app1)
      .get(`/films1/byId/${filmId}`)
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(200);
        originalFilmData = res.body; 
      });
  
    // update test
    chai
      .request(app1)
      .put(`/films1/${filmId}`)
      .send(updatedFilmData)
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.body).to.deep.include(updatedFilmData)
        chai.expect(res.status).to.equal(200);
        done();
      });
  
    // restoring the original film data
    after(() => {
      chai
        .request(app1)
        .put(`/films1/${filmId}`)
        .send(originalFilmData) 
        .end((err, res) => {
          chai.expect(err).to.be.null;
        });
    });
  });

  it('should retrieve films by genre', (done) => {
    const genre = 'Crime';

    chai
      .request(app1)
      .get(`/films1/genre/${genre}`)
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(200);
        chai.expect(res.body).to.deep.include(expectedFilmAtId2);
        done();
      });
  });

  it('should retrieve films by rating', (done) => {
    const rating = '15';

    chai
      .request(app1)
      .get(`/films1/rating/${rating}`)
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(200);
        chai.expect(res.body).to.deep.include(expectedFilmAtId2);
        done();
      });
  });

  const expectedDataForTitle= {
    id:5,
    film_title: 'Guardians of the Galaxy Vol. 3',
    film_year: 2023,
    film_rating: '12A',
    film_genre: 'Action',
    film_secondary_genre: 'Adventure',
    film_poster: 'https://cdn.shopify.com/s/files/1/0037/8008/3782/products/IMG_0661-1_1024x1024@2x.jpg?v=1673620887'
  };
  it('should retrieve films by title', (done) => {
    const title = 'Guardian';

    chai
      .request(app1)
      .get(`/films1/title/${title}`)
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(200);
        chai.expect(res.body).to.deep.include(expectedDataForTitle);
        done();
      });
  });

  it('should retrieve new releases', (done) => {
    chai
      .request(app1)
      .get('/films1/new-releases/')
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(200);
        // Assert the expected response or data here
        done();
      });
  });
});