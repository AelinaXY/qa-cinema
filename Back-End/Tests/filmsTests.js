const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index.js'); 
const Films = require('../models/films'); 

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
      .request(server)                         
      .post('/films/create')                   
      .send(filmData)                          
      .end((err, res) => {
        expect(err).to.be.null;                
        expect(res).to.have.status(201);       
        expect(res.body).to.deep.include(filmData); 
        done();                                
      });
  });
});
