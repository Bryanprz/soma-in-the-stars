import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Consultations from './views/consultations'
import NotFound from './views/not-found'

const getBasename = () => {
  if (!process.env.PUBLIC_URL) {
    return '/'
  }

  try {
    return new URL(process.env.PUBLIC_URL).pathname || '/'
  } catch (error) {
    return process.env.PUBLIC_URL
  }
}

const App = () => {
  return (
    <Router basename={getBasename()}>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Consultations} exact path="/consultations" />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
