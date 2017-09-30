import React, { Component } from 'react'
import './index.less'
import political from '../../../assets/imgs/political.jpg';

export default class Loading extends Component {
  constructor() {
    super();
    this.state = {
	    list: []
	  };
    //document.title = '时代先锋';
  }
componentWillMount() {
  if(this.props.match.params.type === 'history') {
    let mothod = {
        method: 'GET'
    }
    fetch('/red-wx/RedWeb/RedWeb/TextUrl.php',mothod)
    .then(res => res.json())
    .then(data => {
        this.setState({list: data})
    })
  } else if(this.props.match.params.type === 'era') {
    this.setState({list:[{name:'王华君',title:'"红色义工”的追求',url:'http://biaozhang.12371.cn/2017/09/18/ARTI1505686572024241.shtml'},
            {name:'马善祥',title:'终身献给党的群众工作事业',url:'http://biaozhang.12371.cn/2017/09/15/ARTI1505425160435717.shtml'},
            {name:'刘安国',title:'誓让荒山起松涛',url:'http://biaozhang.12371.cn/2017/09/14/ARTI1505345674285787.shtml'},
            {name:'李志强',title:'用生命画出“同心圆”',url:'http://biaozhang.12371.cn/2017/09/13/ARTI1505291846935224.shtml'},
            {name:'张毅',title:'55岁生命定格在扶贫一线',url:'http://biaozhang.12371.cn/2017/09/13/ARTI1505291441344208.shtml'},
            {name:'王养国',title:'44公里 来回走了27年',url:'http://biaozhang.12371.cn/2017/09/11/ARTI1505078205130544.shtml'},
            {name:'张曙光',title:'曙光照亮川岩村',url:'http://biaozhang.12371.cn/2017/09/10/ARTI1504997356047155.shtml'},
            {name:'王南石',title:'用心听 忘情做',url:'href="http://biaozhang.12371.cn/2017/09/07/ARTI1504735058474738.shtml"'},
            {name:'朱彩芹',title:'“芹花”在小兴安岭绽放',url:'http://biaozhang.12371.cn/2017/08/30/ARTI1504049040474173.shtml'},
            {name:'柯小海',title:'不干事 凭什么让人相信你',url:'http://biaozhang.12371.cn/2017/08/19/VIDE1503144720334133.shtml'}]})
  }
}
  render() {
    const list = this.state.list.map((item,index) => 
      (<li className="era-list-li" key={index}>
          <a className="era-list-a" href={item.url}>
            <img className="era-list-img" src={political} alt=""/>
            <div className="era-list-center">
                <p className="era-list-name">{item.name}</p>
                <p className="era-list-title">{item.title === undefined ? '' : item.title}</p>
            </div>
            <i className="iconfont icon-jiantou"></i>
          </a>
        </li>)
    )
    return (
      <ul className="era-list">
        {list}
      </ul>
    )
  }
}