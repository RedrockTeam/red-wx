import React, { Component } from 'react'
import './header.less'
import bannerImg from '../../../assets/imgs/banner.png'
export default class Loading extends Component {
  render() {
    return (
	  <header>
        <img className="header-img" src={bannerImg} alt=""/>
      </header>
    )
  }
}