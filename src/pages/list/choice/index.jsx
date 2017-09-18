import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.less'
import speechImg from '../../../assets/imgs/speech.png'
import dynamicImg from '../../../assets/imgs/dynamic.png'
import eraPioneerImg from '../../../assets/imgs/era-pioneer.png'
import historyImg from '../../../assets/imgs/history.png'
import movieImg from '../../../assets/imgs/movie.png'
import wwwImg from '../../../assets/imgs/www.png'
export default class ComponentChoice extends Component {
  render() {
    return (
      <div>
      <ul className="index-list">
        <li className="index-list-li">
          <a href="http://jhsjk.people.cn/?from=timeline">
            <img className="index-list-img" src={speechImg} alt=""/>
            <span className="index-list-span">学习讲话</span>
          </a>
        </li>
        <li className="index-list-li li-right">
          <Link to="/list/dynamic">
            <img className="index-list-img" src={dynamicImg} alt=""/>
            <span className="index-list-span">基层动态</span>
          </Link>
        </li>
        <li className="index-list-li">
          <Link to="/list/www">
            <img className="index-list-img" src={wwwImg} alt=""/>
            <span className="index-list-span">网络活动</span>
          </Link>
        </li>
        <li className="index-list-li li-right">
          <Link to="/list/history">
            <img className="index-list-img" src={historyImg} alt=""/>
            <span className="index-list-span">党史辞典</span>
          </Link>
        </li>
        <li className="index-list-li">
          <Link to="/list/era">
            <img className="index-list-img" src={eraPioneerImg} alt=""/>
            <span className="index-list-span">时代先锋</span>
          </Link>
        </li>
        <li className="index-list-li li-right">
          <Link to="/list/movie">
            <img className="index-list-img" src={movieImg} alt=""/>
            <span className="index-list-span">影视资料</span>
          </Link>
        </li>
      </ul>
      <bottom className="list-bottom">
        <p className="bottom-introuduce">©红岩网校工作站</p>
     </bottom>
     </div>
    )
  }
}