import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import Article from './Article';

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
     <div className='app'>
        <Header />
        <Wrapper />
     </div>
    );
  }
}

export default App;
