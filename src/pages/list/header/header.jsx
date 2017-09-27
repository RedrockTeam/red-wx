import React, { Component } from 'react'
import './header.less'
import titleImg from '../../../assets/imgs/title.png'
const requireContext = require.context("../../../assets/imgs", true,/carousel\d(.*)(png|jpe?g)(\?.*)?$/);
const images = requireContext.keys().map(requireContext);
export default class Loading extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    }
  }
  componentWillMount() {
    let mothod = {
            method: 'GET'
        }
     
    fetch('/red-wx/RedWeb/RedWeb/imgsUrl.php',mothod)
    .then(res => res.json())
    .then(data => {
        this.setState({list: data})
        //console.log(this.state.list)
    })
    
  }
  componentDidMount() {
    //fetch
    //carousel
    let num = 1;
    let maxNum = this.state.list.length + 1;
    let imgWidth = parseInt(window.getComputedStyle(this.refs.carouselUl.children[0]).width);
    setInterval(() => {
      if(num < maxNum) {
       this.refs.carouselUl.style.left = - imgWidth * num + 'px';
       num++;
      } else {
        this.refs.carouselUl.style.left = '0px';
        num = 0;
      }
    },1500)
    
  }
  render() {
    const list = this.state.list;
    const li = list.map((item,index) => (
      <li className="carousel-li" key={index}>
        <a href={item.url}>
          <img src={item.img} alt="" className="carousel-img"/>
        </a>
      </li>
    ))
    return (
	  <header>
        <img className="title-image" src={titleImg} alt=""/>
        <div className="carousel">
          <ul className="carousel-ul" ref="carouselUl">
            <li className="carousel-li">
              <a href={list[0].url}>
                <img src={list[0].img} alt="" className="carousel-img"/>
              </a>
            </li>
            {li}
            <li className="carousel-li">
              <a href={list[list.length-1].url}>
                <img src={list[list.length-1].img} alt="" className="carousel-img"/>
              </a>
            </li>
          </ul>
        </div>
      </header>
    )
  }
}