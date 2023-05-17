const chai = require('chai');
const chaiHttp = require('chai-http');
const Films = require('../models/films'); 
const {app} = require('../server.js');
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

  const expectedFilmAtId12 = {
    id:12,
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
        chai.expect(res.body).to.deep.include(expectedFilmAtId12)
        done();
      });
  })

  it('should retrieve a film by ID', (done) => {
    const filmId = '12'; 
  
    chai
      .request(app)
      .get(`/films/byId/${filmId}`)
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.body).to.deep.include(expectedFilmAtId12); 
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
        chai.expect(res.body).to.deep.include(updatedFilmData)
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

  it('should retrieve films by genre', (done) => {
    const genre = 'Crime';

    chai
      .request(app)
      .get(`/films/genre/${genre}`)
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(200);
        chai.expect(res.body).to.deep.include(expectedFilmAtId12);
        done();
      });
  });

  it('should retrieve films by rating', (done) => {
    const rating = '15';

    chai
      .request(app)
      .get(`/films/rating/${rating}`)
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(200);
        chai.expect(res.body).to.deep.include(expectedFilmAtId12);
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
      .request(app)
      .get(`/films/title/${title}`)
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(200);
        chai.expect(res.body).to.deep.include(expectedDataForTitle);
        done();
      });
  });

  it('should retrieve films by year', (done) => {
    const year = 2019;

    chai
      .request(app)
      .get(`/films/year/${year}`)
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(200);
        chai.expect(res.body).to.deep.include(expectedFilmAtId12);
        done();
      });
  });

  it('should remove a film', (done) => {
    const filmId = 15; 

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

    chai.request(app)
      .delete(`/films/${filmId}`)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('message').equal('Film was deleted successfully!');
        done();
      });
    after(() => {
      chai
        .request(app)
        .post(`/films/${originalFilmData}`)
        .send(originalFilmData) 
        .end((err, res) => {
          chai.expect(err).to.be.null;
        });
    });
  });
});