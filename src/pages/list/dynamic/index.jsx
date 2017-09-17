import React, { Component } from 'react'
import './index.less'
export default class Loading extends Component {
  render() {
    return (
      <ul className="dynamic-list">
        <li className="dynamic-list-li">
          <img className="dynamic-list-img" src="" alt=""/>
          <div className="dynamic-list-right">
            <p className="dynamic-list-title"></p>
            <p className="dynamic-list-date"></p>
          </div>
        </li>
      </ul>
    )
  }
}