import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { DropdownButton, Dropdown } from "react-bootstrap";
import React, { useState } from "react";

const Ratings = () => {
  const [activeItems, setActiveItems] = useState([]);

  const handleItemClick = (index) => {
    if (activeItems.includes(index)) {
      setActiveItems(activeItems.filter((item) => item !== index));
    } else {
      setActiveItems([...activeItems, index]);
    }
  };
  return (
    <>
      <Container className="ratings-container">
        <Row>
          <Col md={4}>
            <Card style={{ width: "18rem" }} className="ratings-card mx-auto">
              <Card.Img
                variant="top"
                src="images/u-rating.png"
                className="ratings-img"
              />
              <Card.Body>
                <Card.Title className="ratings-title">
                  Suitable for all
                </Card.Title>
                <Card.Text className="ratings-text">
                  A U film should be suitable for audiences aged four years and
                  over, although it is impossible to predict what might upset
                  any particular child.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "18rem" }} className="ratings-card mx-auto">
              <Card.Img variant="top" src="images/pg-rating.png" />
              <Card.Body>
                <Card.Title className="ratings-title">
                  Parental guidance
                </Card.Title>
                <Card.Text className="ratings-text">
                  General viewing, but some scenes may be unsuitable for young
                  children. Unaccompanied children of any age may watch, but
                  parents are advised to consider whether the content may upset
                  younger, or more sensitive, children.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "18rem" }} className="ratings-card  mx-auto">
              <Card.Img
                variant="top"
                src="images/12-rating.png"
                className="ratings-img"
              />
              <Card.Body>
                <Card.Title className="ratings-title">
                  Suitable for 12 years and over
                </Card.Title>
                <Card.Text className="ratings-text">
                  General viewing, but some scenes may be unsuitable for young
                  children. Unaccompanied children of any age may watch, but
                  parents are advised to consider whether the content may upset
                  younger, or more sensitive, children.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Card style={{ width: "18rem" }} className="ratings-card  mx-auto">
              <Card.Img variant="top" src="images/12a-rating.jpeg" />
              <Card.Body>
                <Card.Title className="ratings-title">
                  Suitable for 12 years and over
                </Card.Title>
                <Card.Text className="ratings-text">
                  Films classified 12A and video works classified 12 contain
                  material that is not generally suitable for children aged
                  under 12. No one younger than 12 may see a 12A film in a
                  cinema unless accompanied by an adult. Adults planning to take
                  a child under 12 to view a 12A film should consider whether
                  the film is suitable for that child. To help them decide, we
                  recommend that they check the content advice for that film in
                  advance. No one younger than 12 may rent or buy a 12 rated
                  video work.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "18rem" }} className="ratings-card mx-auto">
              <Card.Img variant="top" src="images/15-rating.png" />
              <Card.Body>
                <Card.Title className="ratings-title">
                  Suitable only for 15 years and over
                </Card.Title>
                <Card.Text className="ratings-text">
                  No one younger than 15 may see a 15 film in a cinema. No one
                  younger than 15 may rent or buy a 15 rated video work.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "18rem" }} className="ratings-card mx-auto">
              <Card.Img variant="top" src="images/18-rating.png" />
              <Card.Body>
                <Card.Title className="ratings-title">
                  Suitable only for adults
                </Card.Title>
                <Card.Text className="ratings-text">
                  No one younger than 18 may see an 18 film in a cinema. No one
                  younger than 18 may rent or buy an 18 rated video work. Adults
                  should be free to choose their own entertainment.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="faq-container">
        <Row>
          <Col>
            <h2 className="header text-center">FAQ'S</h2>
            <ul className="list-group">
              <li
                className="list-group-item"
                onClick={() => handleItemClick(0)}
              >
                Do I need a paper ticket?
                {activeItems.includes(0) && (
                  <ul className="list-group">
                    <li className="list-group-item">
                      All of our ticketing is done electronically so you will
                      not be sent a physical ticket. You can print out your
                      e-tickets if you like but we advise saving the paper and
                      loading the tickets on your phone or tablet to be scanned
                      at the ticket tent on entrance.
                    </li>
                  </ul>
                )}
              </li>
              <li
                className="list-group-item"
                onClick={() => handleItemClick(1)}
              >
                DO YOU OFFER ANY CONCESSIONS ON TICKET PRICES?
                {activeItems.includes(1) && (
                  <ul className="list-group">
                    <li className="list-group-item">
                      We offer off-peak student and senior citizen concessions
                      at all of our cinemas on select showings. Student tickets
                      apply to those in full time education with valid student
                      photo ID including an expiry date. Senior tickets apply to
                      senior citizens of 60 years and over. Please ask about
                      these in venue or select the relevant ticket option when
                      booking online. NFTS Student Concession at Gerrards Cross
                      Students with a valid National Film and Television School
                      student card are entitled to 50% off food and drink
                      anytime Monday-Thursday and before 5pm Friday-Sunday.
                      Please note this concession is only valid at Everyman
                      Gerrards Cross, a valid student card must be presented to
                      receive this discount.
                    </li>
                  </ul>
                )}
              </li>
              <li
                className="list-group-item"
                onClick={() => handleItemClick(2)}
              >
                CAN SOMEONE UNDER THE AGE REQUIREMENT TO SEE A 15 OR 18 RATED
                FILM WITH AN ACCOMPANYING ADULT?
                {activeItems.includes(2) && (
                  <ul className="list-group">
                    <li className="list-group-item">
                      Guests of any age can attend but those under 16 must be
                      accompanied by an adult over the age of 18. Children under
                      2 can come in for free and do not need a ticket* The film
                      certification always applies so please also make sure the
                      film is suitable and of the correct certification. We
                      reserve the rights to refuse entry to anyone under 16 who
                      is unaccompanied or anyone who is under the certification
                      age.
                    </li>
                  </ul>
                )}
              </li>
              <li
                className="list-group-item"
                onClick={() => handleItemClick(2)}
              >
                HOW LONG ARE YOUR ADS AND TRAILERS?
                {activeItems.includes(2) && (
                  <ul className="list-group">
                    <li className="list-group-item">
                      We play 25 minutes worth of adverts and trailers prior to
                      each film screening; the length of ads and trailers varies
                      for special events and it can be between 15 and 40
                      minutes, subject to type of event.
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Ratings;
