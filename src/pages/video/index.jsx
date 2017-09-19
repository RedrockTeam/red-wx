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
            <video id="html5Player" src="http://asp.cntv.lxdns.com/asp/hls/main/0303000a/3/default/4a5b8aede7a44168baa7692ba4451b35/main.m3u8?maxbr=2048&amp;minbr=400"></video>
        </div>
        )
    }
}