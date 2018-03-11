import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import startImg from '../../../assets/imgs/start.png'
import './index.less'
export default class Loading extends Component {
    constructor() {
        super();
        this.state = {
            list: []
        };
        //document.title = '影视资料';
    }
    componentDidMount() {
        let mothod = {
            method: 'GET'
        }
        let arr = [];
        fetch('/red-wx/RedWeb/RedWeb/VideoUrl.php',mothod)
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
        const list = this.state.list.map((item,index) => {
            let liStyle = index%2 === 0 ? 'movie-list-li' : 'movie-list-li right';
            return (<Link key={index} to={`/video/${index}`}>
                <li className={liStyle}>
                    <img src={item.picurl}  className="movie-list-img" alt=""/>
                    <p className="movie-list-title">{item.name}</p>
                    <img src={startImg} className="movie-list-start" alt=""/>
                </li>
            </Link>)
                
        })

        return (
        <div className="movie-background">
            <ul className="movie-list">
                {list}
            </ul>
        </div>)
    }
}