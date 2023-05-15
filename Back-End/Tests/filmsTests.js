const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index.js'); 
const Films = require('../models/films'); 
const app = require('../index.js');
const dbConnect = require('../dbutils/dbConnect.js');
const { DB } = require('../dbutils/dbconfig.js');
const dbconfig = require('../dbutils/dbconfig.js');
const { cleanUpDb } = require('./cleanUpDb'); 

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
});
