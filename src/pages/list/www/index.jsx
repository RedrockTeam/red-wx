import React, { Component } from 'react'
import './index.less'
const requireContext = require.context("../../../assets/imgs", true,/game(.*)(png|jpe?g)(\?.*)?$/);
const images = requireContext.keys().map(requireContext);
export default class Loading extends Component {
    constructor() {
        super();
        this.state = {
            list: [
                [{img:images[12],title: '学习十九大',url:'https://wx.idsbllp.cn/game/19th/index.php/Home/Index/index'},
                {img:images[13],title: '文明修身监督员',url:'https://wx.idsbllp.cn/PoliteSupervisor/index.php#StartPage'}],
                [{img:images[0],title: '团团打卡学讲话',url:'https://wx.idsbllp.cn/game/praise_xi_shanbei_chongyou/'},
                {img:images[1],title: '学讲话，问问答',url:'https://wx.idsbllp.cn/game/one-learn-one-do-two_cy/'}],
                [{img:images[2],title: '我爱学党章',url:'https://wx.idsbllp.cn/game/game/index.php/learnpartyconstitution'},
                {img:images[3],title: '学用典赞习大大',url:'https://wx.idsbllp.cn/game/game/index.php/praise-xi'}],
                // [{img:images[4],title: '时代先锋问问答',url:'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx81a4a4b77ec98ff4&redirect_uri=http%3A%2F%2Fhongyan.cqupt.edu.cn%2FMagicLoop%2Findex.php%3Fs%3D%2Faddon%2FApi%2FApi%2Foauth%26redirect%3Dhttps%253A%252F%252Fwx.idsbllp.cn/game%252Fgame%252Ftwolearnonedo&response_type=code&scope=snsapi_userinfo&state=sfasdfasdfefvee#wechat_redirect'},
                // {img:images[5],title: '突出重围',url:'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx81a4a4b77ec98ff4&redirect_uri=http%3A%2F%2Fhongyan.cqupt.edu.cn%2Fpuzzle%2Findex.php%2FHome%2FBreakOut%2Findex&response_type=code&scope=snsapi_userinfo&state=auth#wechat_redirect'}],
                [{img:images[6],title: '我和重邮合个影',url:'https://wx.idsbllp.cn/game/game/index.php/cqupt-group-photo'},
                {img:images[7],title: '我要升旗',url:'https://wx.idsbllp.cn/game/cyxbs_api_2014/natday/index.php?s=/home/floag'}],
                [{img:images[8],title: '中国好公民',url:'https://wx.idsbllp.cn/game/game/index.php/goodcitizen'},
                {img:images[9],title: '重邮问问答',url:'https://wx.idsbllp.cn/cquptque/Home/Index/index'}],
                [{img:images[10],title: '拼拼价值观',url:'https://wx.idsbllp.cn/game/game/index.php/2048'},
                {img:images[11],title: '夸父追日',url:'https://wx.idsbllp.cn/game/game/index.php/sun'}],
                // {img:images[12],title: '奔跑吧兄弟',url:'https://wx.idsbllp.cn/game/game/run#rd?sukey=66d4519b2d3854cd9c23252e1b82ad95f89538084ef43cce1e555cdff1b3d7644bc98dde661bdcd23f2cb87d8df67d42'}
            ]
        };
        //document.title = '网络活动';
    }

    render() {
        const list = this.state.list.map((item,index) => 
            (<li className="www-list-li" key={index}>
                <div className="www-list-content">
                    <a className="www-list-a" href={item[0].url}>
                        <img src={item[0].img}  className="www-list-img" alt=""/>
                        <p className="www-list-title">{item[0].title}</p>
                    </a>
                </div>
                <div className="www-list-content">
                    <a className="www-list-a" href={item[1].url}>
                        <img src={item[1].img}  className="www-list-img" alt=""/>
                        <p className="www-list-title">{item[1].title}</p>
                    </a>
                </div> 
            </li>)
        )
        return (
        <ul className="www-list">
            {list}
        </ul>
        )
    }
}