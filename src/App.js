import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import store from './store';
import PostList from './screens/PostList';
import About from './screens/About';
import Home from './screens/Home';
import Contact from './screens/Contact';
import Error from './screens/Error';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About} />
              <Route path="/posts" component={PostList} />
              <Route path="/contact" component={Contact} />
              <Route component={Error} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
