import React, { Component } from 'react';
import './css/App.css';
import HomePage from './components/home';
import courses from './components/courses';
import projects from './components/projects';
import articles from './components/articles';
import contact from './components/contact';
import Gosainkunda from './components/gosainkunda';
import Solitude from './components/solitude';
import Iwillrise from './components/iwllrise';

import { BrowserRouter, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div id="container">
         <BrowserRouter> 
         <div>
              <Route path="/" component={HomePage} exact />
              <Route path="/courses" component={courses}  />
              <Route path="/projects" component={projects}  />
              <Route path="/articles" component={articles}  />
              <Route path="/contact" component={contact}  />
              <Route path="/gosainkunda" component={Gosainkunda}  />
              <Route path="/iwllrise" component={Iwillrise}  />
              <Route path="/solitude" component={Solitude}  />
          </div>
        </BrowserRouter> 


      </div>
    );
  }
}

export default App;
 