import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from  'react-router-dom';
import Home from './pages/home';
import About from './pages/about';

 class App extends Component {
  render() {
    return (
      <div className="App"> 
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/about" component={About} exact/>
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
  