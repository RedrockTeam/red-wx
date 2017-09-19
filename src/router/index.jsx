import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'
import asyncComponent from '../components/async'
import Header from '../components/header'
const List = asyncComponent(() => import('../pages/list/index.jsx').then(module => module.default))
const Video = asyncComponent(() => import('../pages/video').then(module => module.default))
export default class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/list" component={List}></Route>
            <Route path="/video/:id" component={Video}></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}