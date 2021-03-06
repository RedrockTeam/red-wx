import React, { Component } from 'react'
import './header.less'
import titleImg from '../../../assets/imgs/title.png'
const requireContext = require.context("../../../assets/imgs", true,/carousel\d(.*)(png|jpe?g)(\?.*)?$/);
const images = requireContext.keys().map(requireContext);
const imgUrl = 'https://wx.idsbllp.cn/red-wx/RedWeb/public/'
export default class Loading extends Component {
  constructor() {
    super();
    this.state = {
      list: [
      {img:imgUrl + 'carousel1.jpg',url:'http://xwzx.cqupt.edu.cn/cqupt_xwzx/news.jsp?id=706JG61J98M6DQ65'},
      {img:imgUrl + 'carousel2.jpg',url:'http://xwzx.cqupt.edu.cn/cqupt_xwzx/news.jsp?id=71UC5RKU2W141868'},
      {img:imgUrl + 'carousel2.jpg',url:'http://mp.weixin.qq.com/s/bmqEWlK-f6vGx8vvjYTgfg'}
      ]
    }
  }
  componentDidMount() {
    let mothod = {
            method: 'GET'
        }
     
    fetch('https://wx.idsbllp.cn/red-wx/RedWeb/RedWeb/imgsUrl.php',mothod)
    .then(res => res.json())
    .then(data => {
      //console.log('fetch')
        this.setState({list: data})
        
    })
    
  }
  componentDidMount() {
    //carousel
    let carousel = this.refs.carousel,
    startX,
    startY,
    moveEndX,
    moveEndY,
    X,
    Y,
    num = 1,
    maxNum = this.state.list.length + 1,
    imgWidth = parseInt(window.getComputedStyle(this.refs.carousel).width);
    setInterval(() => {
      if(num < maxNum) {
       this.refs.carouselUl.style.left = - imgWidth * num + 'px';
       num++;
      } else {
        this.refs.carouselUl.style.left = '0px';
        num = 0;
      }
    },3000)
    carousel.addEventListener('touchstart',(e) => {
      //e.preventDefault();
      startX = e.touches[0].pageX;
      startY = e.touches[0].pageY;
    })
    carousel.addEventListener('touchend',(e) => {
        //e.preventDefault();
        moveEndX = e.changedTouches[0].pageX;
        moveEndY = e.changedTouches[0].pageY;
        X = moveEndX - startX;
        Y = moveEndY - startY;
        if( Math.abs(X) > Math.abs(Y) && Math.abs(X) > 0 ) {
          if(num < maxNum) {
            num++;
            this.refs.carouselUl.style.left = - imgWidth * num + 'px';
          } else {
            this.refs.carouselUl.style.left = '0px';
            num = 0;
          }
        } else if(Math.abs(X) > Math.abs(Y) && X < 0) {
          if(num > 1) {
            num--;
            this.refs.carouselUl.style.left = - imgWidth * num + 'px';
          } else if(num == 1){
            this.refs.carouselUl.style.left = '0px';
            num = 0;
          }
        }
    })
  }
  render() {
    const list = this.state.list;
    const li = list.map((item,index) => (
      <li className="carousel-li" key={index}>
        <a className="carousel-a" href={item.url}>
          <img src={item.img} alt="" className="carousel-img"/>
        </a>
      </li>
    ))
    return (
	  <header>
        <img className="title-image" src={titleImg} alt=""/>
        <div className="carousel" ref="carousel">
          <ul className="carousel-ul" ref="carouselUl">
            <li className="carousel-li">
              <a className="carousel-a" href={list[0].url}>
                <img src={list[0].img} alt="" className="carousel-img"/>
              </a>
            </li>
            {li}
            <li className="carousel-li">
              <a className="carousel-a" href={list[list.length-1].url}>
                <img src={list[list.length-1].img} alt="" className="carousel-img"/>
              </a>
            </li>
          </ul>
        </div>
      </header>
    )
  }
}










