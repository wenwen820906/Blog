import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import './App.css';
import { Col,Grid,Navbar,Nav,NavItem } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <Grid>
        <Col md={1}>
        </Col>

        <Col md={10}>
          <Header />
          <Main />
        </Col>

        <Col md={1}>
        </Col>

      </Grid>
    );
  }
}

export default App;
