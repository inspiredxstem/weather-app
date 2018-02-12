import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Weekly Forecast</Link></li>
        <li><Link to="/day">Day</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Weekly}/>
      <Route path="/day" component={Daily}/>
    </div>
  </Router>
)

const Weekly = () => (
  <div>
    <h2>Weekly Forecast</h2>
    <ul>
        <li></li>    
    </ul>
  </div>
)

const Daily = () => (
  <div>
    <h2>Daily</h2>
    <p></p>
  </div>
)


export default BasicExample