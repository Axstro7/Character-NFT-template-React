import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import JoinGame from './views/join-game'
import Lobby from './views/lobby'
import CreateGame from './views/create-game'
import Home from './views/home'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={JoinGame} exact path="/join-game" />
        <Route component={Lobby} exact path="/lobby" />
        <Route component={CreateGame} exact path="/create-game" />
        <Route component={Home} exact path="/" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
