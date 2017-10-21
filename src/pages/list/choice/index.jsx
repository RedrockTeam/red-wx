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
  // changeTitle() {
  //   setTimeout(()=>{
      
  //   })
    
  // }
  render() {
    return (
      <div>
      <ul className="index-list">
        <li className="index-list-li">
          <a href="http://19th.cpcnews.cn/GB/147/index.html?from=singlemessage&isappinstalled=0">
            <img className="index-list-img" src={speechImg} alt=""/>
            <span className="index-list-span">最新报道</span>
          </a>
        </li>
        <li className="index-list-li li-right">
          <a href="http://mp.weixin.qq.com/s/48hYOpHW-qDhOeb6qHW2wQ">
            <img className="index-list-img" src={dynamicImg} alt=""/>
            <span className="index-list-span">学习报告</span>
          </a>
        </li>
        <li className="index-list-li li-right">
          <Link to="/list/dynamic">
            <img className="index-list-img" src={dynamicImg} alt=""/>
            <span className="index-list-span">基层动态</span>
          </Link>
        </li>
        <li className="index-list-li">
          <Link to="/list/era/history">
            <img className="index-list-img" src={historyImg} alt=""/>
            <span className="index-list-span">党史辞典</span>
          </Link>
        </li>
        <li className="index-list-li li-right">
          <Link to="/list/www">
            <img className="index-list-img" src={wwwImg} alt=""/>
            <span className="index-list-span">网络活动</span>
          </Link>
          {/*<Link to="/list/era/era">
            <img className="index-list-img" src={eraPioneerImg} alt=""/>
            <span className="index-list-span">时代先锋</span>
          </Link>*/}
        </li>
        <li className="index-list-li li-right">
          <Link to="/list/movie">
            <img className="index-list-img" src={movieImg} alt=""/>
            <span className="index-list-span">影视资料</span>
          </Link>
        </li>
      </ul>
      <bottom className="bottom">
        <ul className="bottom-list">
          <li className="bottom-list-li">
            <a className="bottom-list-a" href="http://www.people.com.cn/">人民网</a>
          </li>
          <li className="bottom-list-li">
            <a className="bottom-list-a" href="http://www.gmw.cn/">光明网</a>
          </li>
          <li className="bottom-list-li">
            <a className="bottom-list-a" href="http://www.xinhuanet.com/">新华网</a>
          </li>
          <li className="bottom-list-li">
            <a className="bottom-list-a" href="http://www.12371.gov.cn/">七一网</a>
          </li>
          <li className="bottom-list-li">
            <a className="bottom-list-a" href="https://www.youth.cn/">中青网</a>
          </li>
          <li className="bottom-list-li">
            <a className="bottom-list-a" href="http://www.cqnews.net/">华龙网</a>
          </li>
        </ul>
        <p className="bottom-introuduce">©红岩网校工作站</p>
     </bottom>
     </div>
    )
  }
}