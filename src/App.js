import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ReactDOM from 'react-dom';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import SearchBox from './components/SearchBox';
import Title from './components/Title';
import Tip from './components/Tip';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Search Text',
      searching: 'This is the search string...',
    };
  }

  render() {
    return (
      <div className="App">
        <div className='container'>
          <Title/>
          <SearchBox />
          <Tip/>
        </div>
      </div>
    );
  }
}

export default App;
