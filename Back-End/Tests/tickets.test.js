const tickets = require('../models/tickets'); 
const chai = require("chai");
const chaiHttp = require("chai-http");
const { app } = require("../server.js");
const { reset } = require("./cleanUpDb.js");
const { connection } = require("../dbutils/dbConnect.js");
const populate = require("../dbutils/dbPopulate");

chai.use(chaiHttp);
const expect = chai.expect;

describe('ticket API', function () {

    this.timeout(30_000);

    beforeEach(async () => {
        await reset();
        await populate();
    });
   
    it('should create a tikcet', (done) => {
        const ticketsData= {
            ticket_showing: 2,
            ticket_user: 2
        }
    
        chai
          .request(app)                         
          .post('/tickets/')                   
          .send(ticketsData)                          
          .end((err, res) => {
            chai.expect(err).to.be.null;                
            chai.expect(res.body).to.include(ticketsData); 
            chai.expect(res.status).to.equal(200);
            done();
          });
    });

    const ticketsExpectedData= {
        id:1,
        ticket_showing: 1,
        ticket_user: 1
    }

    it('should retrieve all tickets', (done) => {
    chai
        .request(app)
        .get('/tickets/')
        .end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(200);
            expect(res.body).to.be.an("array");
            chai.expect(res.body).to.deep.include(ticketsExpectedData)
            done();
        });
    })

    it('should retrieve a ticket by ID', (done) => {
        const TicketId = 1; 
        
        chai
            .request(app)
            .get(`/tickets/${TicketId}`)
            .end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.body).to.deep.include(ticketsExpectedData); 
            chai.expect(res.status).to.equal(200);
            done();
        });
    });


      
    it('should update a ticket by ID', (done) => {
        const ticketId = 4; 
        const updatedTicketData = {
          ticket_showing: 3,
           ticket_user: 1                    
        };
    
          //update test
         chai
            .request(app)
            .put(`/tickets/${ticketId}`)
            .send(updatedTicketData)
            .end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res.body).to.deep.include(updatedTicketData)
                chai.expect(res.status).to.equal(200);
                done();
        });
     });

    it('should remove a ticket', (done) => {
        let ticketIdToBeRemoved=4;
        chai
            .request(app)
            .delete(`/tickets/${ticketIdToBeRemoved}`)
            .end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res.status).to.equal(200);
                chai.expect(res.body).to.have.property('message').equal('Ticket was deleted successfully!');
                done();
        });
    });

    it('should book a ticket', (done) => {

        const ticketsData= {
            showing: 3,
            username: "maryum_s"
        }
        const bookingExpectedData ={
            id: 7
        }
    
        chai
          .request(app)                         
          .post('/tickets/book/?username=maryum_s&showing=3')                   
          .end((err, res) => {
            chai.expect(err).to.be.null;                
            chai.expect(res.body).to.include(bookingExpectedData); 
            chai.expect(res.status).to.equal(200);
            done();
          });
    });
});


