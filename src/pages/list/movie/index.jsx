import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.less'
export default class Loading extends Component {
    constructor() {
        super();
        this.state = {
            list: []
        };
        document.title = '影视资料';
    }
    componentWillMount() {
        let mothod = {
            method: 'GET'
        }
        fetch('http://kfzkyi.natappfree.cc/RedWeb/VideoUrl.php',mothod)
        .then(res => res.json())
        .then(data => {
            this.setState({list: data})
            //console.log(this.state.list)
        })

    }
    hoverStart(e) {
        e.target.className = 'hover movie-list-a';
    }
    hoverEnd(e) {
        e.target.className ='movie-list-a';
    }
   
    render() {
        const list = this.state.list.map((item,index) => 
        (<li className="movie-list-li" key={index} onTouchStart={(e) => this.hoverStart(e)} onTouchEnd={(e) => this.hoverEnd(e)}>
            <Link to={`/video/${index}`} className="movie-list-a">
                {item.name}
            </Link>
            </li>)
        )
        return (
        <ul className="movie-list">
            {list}
        </ul>
        )
    }
}