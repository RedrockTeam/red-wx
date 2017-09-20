import React, { Component } from 'react'
export default class Loading extends Component {
    constructor() {
        super();
        this.state = {
            now: {}
        };
    }
    componentWillMount() {
        let mothod = {
            method: 'GET'
        }
        fetch('http://hongyan.cqupt.edu.cn/red-wx/RedWeb/RedWeb/VideoUrl.php',mothod)
        .then(res => res.json())
        .then(data => {
            this.setState({now: data[this.props.match.params.id]})
            console.log(this.state.now)
            document.title = this.state.now.name;
        })
    }

    render() {
        const now = this.state.now;
        return (
        <div className="movie-list">
            <video controls="controls" data-x-webkit-airplay="true" data-playsinline=""
             data-webkit-playsinline="true" src={now.videourl} poster={now.picurl} style={{fontSize: '0px',width: '100%'}}></video>
        </div>
        )
    }
}