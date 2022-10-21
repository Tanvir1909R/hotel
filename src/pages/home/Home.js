import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';
import "./home.css";

function Home() {
  return (
    <section>
      <div className="heroSlide">
        <Carousel>
          <Carousel.Item>
            <img
              className="img-fluid vh-100 w-100 slideImg"
              src="./img/hero-1.webp"
              alt="First slide"
            />
            <div className="caption">
              <h3>Montana Resort</h3>
              <p>Unlock to enjoy the view of Martine</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img-fluid vh-100 w-100 slideImg"
              src="./img/hero-2.webp"
              alt="Second slide"
            />

            <div className="caption">
              <h3>Life is Beautiful</h3>
              <p>Unlock to enjoy the view of Martine</p>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="offers">
        <div className="title">
          <p>Our Offers</p>
          <h1>Ongoing Offers</h1>
        </div>
        <div className="container">
          <div className="offersCards">
            <Row md={3} xs={1} className="g-5">
              <Col>
                <Card>
                  <Card.Img variant="top" src="./img/offer-1.webp" className="img-fluid" />
                  <Card.Body>
                    <Card.Title>
                      Up to 35% savings on Club rooms and Suites
                    </Card.Title>
                    <Card.Text>
                        <li>Luxaries condition</li>
                        <li>3 Adults & 2 Children size</li>
                        <li>Sea view side</li>
                    </Card.Text>
                  </Card.Body>
                  <Button variant="outline-info">Book Now</Button>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img variant="top" src="./img/offer-2.webp" className="img-fluid" />
                  <Card.Body>
                    <Card.Title>
                      Up to 35% savings on Club rooms and Suites
                    </Card.Title>
                    <Card.Text>
                        <li>Luxaries condition</li>
                        <li>3 Adults & 2 Children size</li>
                        <li>Sea view side</li>
                    </Card.Text>
                  </Card.Body>
                  <Button variant="outline-info">Book Now</Button>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img variant="top" src="./img/offer-3.png" className="img-fluid" />
                  <Card.Body>
                    <Card.Title>
                      Up to 35% savings on Club rooms and Suites
                    </Card.Title>
                    <Card.Text>
                        <li>Luxaries condition</li>
                        <li>3 Adults & 2 Children size</li>
                        <li>Sea view side</li>
                    </Card.Text>
                  </Card.Body>
                  <Button variant="outline-info">Book Now</Button>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
