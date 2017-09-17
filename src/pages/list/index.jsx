import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'
import asyncComponent from '../../components/async'
import CompoentHeader from './header/header'
const ComponentChoice = asyncComponent(() => import('./choice').then(module => module.default))
const CompoentDynamic = asyncComponent(() => import('./dynamic').then(module => module.default))
import CompoentBottom from './bottom'
export default class Index extends Component {
  render() {
    return (
      <div>
          <CompoentHeader />
          <Switch>
            <Route path="/list" exact component={ComponentChoice}></Route>
            <Route path="/list/dynamic" component={CompoentDynamic}></Route>
          </Switch>
          <CompoentBottom />
       </div>
    )
  }
}