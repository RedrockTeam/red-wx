import React, { Component } from 'react'
import './index.less'
const requireContext = require.context("../../../assets/imgs", true,/dynamic\d(.*)(png|jpe?g)(\?.*)?$/);
const images = requireContext.keys().map(requireContext);
export default class Loading extends Component {
  constructor() {
    super();
    this.state = {
			list: [
        {img: images[0],title:'班级团学活动之“一学一做”',url: 'https://mp.weixin.qq.com/s?srcid=06212cvmu9xevbSjw1ZyOfoj&scene=23&mid=2247484199&sn=d79150ae3d51167cc49bca3b340477fb&idx=2&__biz=MzIzNjYwODAwOQ%3D%3D&chksm=e8d40c41dfa3855746e18f3e09369ba32135a643e6de987f8f165daca82304bf77a4cc67fa47&mpshare=1#rd&appinstall=0'},
        {img: images[1],title: '经济管理学院积极开展“学习总书记讲话 做合格共青团员”系列活动',url: 'http://mp.weixin.qq.com/s?srcid=0621zNAlsh7LvJzkZwPfz8wg&scene=23&mid=2650747788&sn=eee354ed73cc4cfb6fec61ddb4110ba3&idx=1&__biz=MjM5ODY4NTY0MQ%3D%3D&chksm=becd6d2a89bae43cfe9c8b49d66606652eff8f7729a31159d03f4bac04df6f6dbb54284e0747&mpshare=1#rd&appinstall=0'},
        {img: images[2],title:'外国语|学习总书记讲话，做合格共青团员',url: 'http://mp.weixin.qq.com/s?srcid=0621rPS6Av4BgaQ1T4bT3JNI&scene=23&mid=2652869309&sn=cb8213f2389049a377d700fbfc32b89e&idx=1&__biz=MzA4ODk1MDkyMA%3D%3D&chksm=8bc9635abcbeea4c76987de793c7ccbe1d32aeb2157a0630a682f397db8a4709e9fb676d48ed&mpshare=1#rd'},
        {img: images[3],title:'体育学院全院共青团员隆重集会参加“学习总书记讲话 做合格共青团员”系列活动之五四庆祝活动',url: 'http://mp.weixin.qq.com/s?srcid=0621Xs92g9K1sGmYkO2mWKnq&scene=23&mid=2649779059&sn=899bf8d9298a635d01886ceeacf6862d&idx=1&__biz=MjM5MDkzOTkxMQ%3D%3D&chksm=beb9e51b89ce6c0d1e6b44d33c8b3404d4bb2f6df28ad9e719cde1a55d6f1d6c54fe0aefe620&mpshare=1#rd&appinstall=0'},
        {img: images[4],title:'“不忘初心跟党走” | 2017年新团员入团宣誓仪式暨五四表彰大会',url:'https://mp.weixin.qq.com/s?__biz=MjM5Nzc4NjczMg==&mid=2651983066&idx=1&sn=f27601593e8edbce72083148d5a1003b&chksm=bd3209d98a4580cfcc099e03dea7894141f2d005240f402d8d3ad9cfb7eba7e57ee8495972e0&mpshare=1&scene=23&srcid=0621npAW0ytSiOgqpnyX9ybW#rd'},
        {img: images[5],title:'理学院丨学习总书记讲话，做合格共青团员”专题团课暨五四表彰大会 ',url:'http://mp.weixin.qq.com/s/q5udjnn8PUcpxbHiKuUkHg'},
        {img: images[6],title:'生物信息学院|“学习总书记讲话，做合格共青团员”团课',url:'http://mp.weixin.qq.com/s/9Qg33KHFLOObqj_gdS71Hw'},
        {img: images[7],title:'学习总书记讲话 做合格共青团员|软件工程学院“五四”表彰暨青年榜样分享交流会',url:'https://mp.weixin.qq.com/s/e7N_-CBkMVaqASRWrxtUBw'},
        {img: images[8],title:'国际学院2016年度共青团暨科技竞赛表彰大会',url:'http://mp.weixin.qq.com/s/ar-hDtafFNqAagbO2jKvuA'},
        {img: images[9],title:'软件工程学院集中开展“学习总书记讲话 做合格共青团员”专题组织生活会',url:'https://mp.weixin.qq.com/s?__biz=MjM5MzU5NzA3NQ==&mid=2650556734&idx=1&sn=521851b385bd3c1c374a3bcf76983f38&chksm=be9c7ac289ebf3d4969f513ce00e5bf6641c7738d3c3af01137262200d5f764f3e5a1a7a7112&mpshare=1&scene=23&srcid=0504dtaRG4hhGNo61gc9R6WA#rd'}
      ],
      news: []
		};
    //document.title = '基层动态';
  }
  componentWillMount() {
    console.log('will');
    let mothod = {
        method: 'GET'
    }
    fetch('/red-wx/RedWeb/RedWeb/news.php?page=0&items=10',mothod)
    .then(res => res.json())
    .then(data => {
        this.setState({news: data.Data})
    })
  }
  render() {
    const list = this.state.list.map((item,index) => 
      (<li className="dynamic-list-li" key={index}>
          <a href={item.url}>
            <img className="dynamic-list-img" src={item.img} alt=""/>
              <p className="dynamic-list-title">{item.title}</p>
          </a>
        </li>)
    )
    const news = this.state.news.map((item,index) => 
      (<li className="dynamic-list-li" key={index}>
          <a href={item.link}>
            <img className="dynamic-list-img" src={item.pic_url} alt=""/>
              <p className="dynamic-list-title">{item.title}</p>
          </a>
        </li>)
    )
    return (
      <ul className="dynamic-list">
        {list}
        {news}
      </ul>
    )
  }
}