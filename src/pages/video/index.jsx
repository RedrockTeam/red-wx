import React, { Component } from 'react'
export default class Loading extends Component {
    constructor() {
        super();
        this.state = {
            list: []
        };
    }
    componentWillMount() {
        // let mothod = {
        //     method: 'GET'
        // }
        // fetch('http://32p2p8.natappfree.cc/RedWeb/VideoUrl.php',mothod)
        // .then(res => res.json())
        // .then(data => {
        //     this.setState({list: data})
        //     console.log(this.state.list)
        // })
        console.log(this.props.match.params.id)

    }

    render() {
        return (
        <div className="movie-list">
            <video controls="controls" data-x-webkit-airplay="true" data-playsinline="" data-webkit-playsinline="true" src="https://www.newscctv.net/tap2cdn/video/short_video/2017/09/19/c0c76d134c35d344f1fc380bc7d72925/index.m3u8" poster="https://www.newscctv.net/tap2cdn/video/images//images/10003/449/1/20170919130800395.gif" style={{fontSize: '0px',width: '100%'}}></video>
        </div>
        )
    }
}