import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card, Tabs, Tab, Button } from 'react-bootstrap';

import { fetch } from './Api.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      news: []
    };
  }

  componentDidMount() {
    const news = fetch()
    console.log(news)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <h1 className="header-title">React News</h1>
            <p className="header-discription">Powerd by NewsApi</p>
          </div>

        </header>
        <main className="main">
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Home">
              <Row>
                <Col md={3}>
                  <Card>
                    <Card.Img variant="top" src="../logo512.png" />
                    <Card.Body>
                      <Card.Title>Card Title1</Card.Title>
                      <Card.Text>
                        Card Text
                      </Card.Text>
                      <Button variant="primary">GO</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card>
                    <Card.Img variant="top" src="../logo512.png" />
                    <Card.Body>
                      <Card.Title>Card Title2</Card.Title>
                      <Card.Text>
                        Card Text
                      </Card.Text>
                      <Button variant="primary">GO</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3}> <Card>
                  <Card.Img variant="top" src="../logo512.png" />
                  <Card.Body>
                    <Card.Title>Card Title3</Card.Title>
                    <Card.Text>
                      Card Text
                      </Card.Text>
                    <Button variant="primary">GO</Button>
                  </Card.Body>
                </Card></Col>
                <Col md={3}> <Card>
                  <Card.Img variant="top" src="../logo512.png" />
                  <Card.Body>
                    <Card.Title>Card Title4</Card.Title>
                    <Card.Text>
                      Card Text
                      </Card.Text>
                    <Button variant="primary">GO</Button>
                  </Card.Body>
                </Card></Col>
              </Row>
            </Tab>
            <Tab eventKey="profile" title="Profile">
              Profile
                     </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
              Contact
          </Tab>
          </Tabs>
        </main>
        <footer className="footer">
          <img src={logo} className="footer-logo" alt="logo" />
          <p className="footer-discription">React News by RemoteWorkChannel</p>
        </footer>
      </div>
    );
  }
}

export default App;
