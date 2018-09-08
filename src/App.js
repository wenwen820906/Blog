import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import Article from './Article';
import Gallerys from './Gallery';
import Footer from './Footer';

const Wrapper = () => {
  return (
      <main >
          <Switch>
              <Route exact path='/Blog' component={Main} />
              <Route path='/Blog/article' component={Article} />
              <Route path='/Blog/gallery' component={Gallerys} />
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
        <Footer/>
     </div>

    );
  }
}

export default App;
