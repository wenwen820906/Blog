import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import Article from './Article';
import { Col,Grid,Navbar,Nav,NavItem } from 'react-bootstrap';

const Wrapper = () => {
  return (
      <main>
          <Switch>
              <Route exact path='/' component={Main} />
              <Route path='/article' component={Article} />
          </Switch>
      </main>
  )
}
class App extends Component {
  render() {
    return (
      <Grid>
      <Col md={1}>
      </Col>

      <Col md={10}>
        <Header />
        <Wrapper />
      </Col>

      <Col md={1}>
      </Col>

    </Grid>
    );
  }
}

export default App;
