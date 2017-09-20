import React, { Component } from 'react'
import './index.less'
export default class Loading extends Component {
    constructor() {
        super();
        this.state = {
            list: []
        };
        document.title = '党史辞典';
    }
    componentWillMount() {
        let mothod = {
            method: 'GET'
        }
        fetch('http://hongyan.cqupt.edu.cn/red-wx/RedWeb/RedWeb/TextUrl.php',mothod)
        .then(res => res.json())
        .then(data => {
            this.setState({list: data})
        })
    }
    hoverStart(e) {
        e.target.className = 'hover history-list-a';
    }
    hoverEnd(e) {
        e.target.className ='history-list-a';
    }
    render() {
        const list = this.state.list.map((item,index) => 
        (<li className="history-list-li" key={index} onTouchStart={(e) => this.hoverStart(e)} onTouchEnd={(e) => this.hoverEnd(e)}>
            <a className="history-list-a" href={item.url}>
                {item.name}
            </a>
            </li>)
        )
        return (
        <ul className="history-list">
            {list}
        </ul>
        )
    }
}