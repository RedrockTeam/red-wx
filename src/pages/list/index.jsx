import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'
import asyncComponent from '../../components/async'
import CompoentHeader from './header/header'
const ComponentChoice = asyncComponent(() => import('./choice').then(module => module.default))
const CompoentDynamic = asyncComponent(() => import('./dynamic').then(module => module.default))
const CompoentEra = asyncComponent(() => import('./era').then(module => module.default))
const CompoentHistory = asyncComponent(() => import('./history').then(module => module.default))
const CompoentWww = asyncComponent(() => import('./www').then(module => module.default))
const CompoentMovie = asyncComponent(() => import('./movie').then(module => module.default))
export default class Index extends Component {
  render() {
    return (
      <div>
          <CompoentHeader />
          <Switch>
            <Route path="/list" exact component={ComponentChoice}></Route>
            <Route path="/list/dynamic" component={CompoentDynamic}></Route>
            <Route path="/list/era/:type" component={CompoentEra}></Route>
            <Route path="/list/history" component={CompoentHistory}></Route>
            <Route path="/list/www" component={CompoentWww}></Route>
            <Route path="/list/movie" component={CompoentMovie}></Route>
          </Switch>
       </div>
    )
  }
}