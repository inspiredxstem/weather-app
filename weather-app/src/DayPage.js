import React from 'react'
import Header from './Header'

class HomePage extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header title="Today's Forecast"/>
      </div>
    )
  }
}

export default HomePage