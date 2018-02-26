import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import DayPage from './DayPage'
import WeekPage from './WeekPage'

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/today" component={DayPage}/>
        <Route exact path="/" component={WeekPage}/>
      </div>
    );
  }
}

export default App;