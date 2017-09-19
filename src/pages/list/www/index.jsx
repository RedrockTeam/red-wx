import React, { Component } from 'react'
import './index.less'
const requireContext = require.context("../../../assets/imgs", true,/game(.*)(png|jpe?g)(\?.*)?$/);
const images = requireContext.keys().map(requireContext);
export default class Loading extends Component {
    constructor() {
        super();
        this.state = {
            list: [
                [{img:images[0],title: '团团打卡学讲话',url:'https://redrock.cqupt.edu.cn/praise_xi_shanbei_chongyou/'},
                {img:images[1],title: '学讲话，问问答',url:'https://redrock.cqupt.edu.cn/one-learn-one-do-two_cy/?from=singlemessage&oauthstatus=success&openid=ouRCyjiA3J82QQGF2kbxCwz2VTps&nickname=%E7%B3%8A%E6%B6%82%E6%B6%82&sex=0&language=zh_CN&city=&province=&country=&headimgurl=http%3A%2F%2Fwx.qlogo.cn%2Fmmopen%2FEVGWGlX9SWU6QDCIkEwaHkXpc5vzmUENy6OxDSCpk6smG4KD0Kxm46jlhT4CSzhtzMjLs1ZRicDA2lbK067G5Vn6Z4xjABqhk%2F0&privilege='}],
                [{img:images[2],title: '我爱学党章',url:'https://redrock.cqupt.edu.cn/game/learnpartyconstitution?oauthstatus=success&openid=ouRCyjvu6Y2zZgmvNBvykwSzOi_E&nickname=91&sex=2&language=zh_CN&city=&province=%E6%96%AF%E5%9B%BE%E5%8A%A0%E7%89%B9&country=%E5%BE%B7%E5%9B%BD&headimgurl=http%3A%2F%2Fwx.qlogo.cn%2Fmmopen%2Fvi_32%2FQ0j4TwGTfTJzZNt8amJBL0xXJDcr9bZR5rWldvcicWDN0m2HbiajicGa1on1kx7XAs9Lo678It4aw2OCgZAjWf3ibg%2F0&privilege='},
                {img:images[3],title: '学用典赞习大大',url:'https://redrock.cqupt.edu.cn/game/praise-xi?openid=ouRCyjqHsZmjIrJXh_7ghR_QEw4U'}],
                [{img:images[4],title: '时代先锋问问答',url:'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx81a4a4b77ec98ff4&redirect_uri=http%3A%2F%2Fhongyan.cqupt.edu.cn%2FMagicLoop%2Findex.php%3Fs%3D%2Faddon%2FApi%2FApi%2Foauth%26redirect%3Dhttps%253A%252F%252Fredrock.cqupt.edu.cn%252Fgame%252Ftwolearnonedo&response_type=code&scope=snsapi_userinfo&state=sfasdfasdfefvee#wechat_redirect'},
                {img:images[5],title: '突出重围',url:'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx81a4a4b77ec98ff4&redirect_uri=http%3A%2F%2Fhongyan.cqupt.edu.cn%2Fpuzzle%2Findex.php%2FHome%2FBreakOut%2Findex&response_type=code&scope=snsapi_userinfo&state=auth#wechat_redirect'}],
                [{img:images[6],title: '我和重邮合个影',url:'https://redrock.cqupt.edu.cn/game/cqupt-group-photo?code=011CePHT0r6t0V1gnzIT0WJZHT0CePHL&state=sfasdfasdfefvee'},
                {img:images[7],title: '我要升旗',url:'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx81a4a4b77ec98ff4&redirect_uri=http%3A%2F%2Fhongyan.cqupt.edu.cn%2Fcyxbs_api_2014%2Fnatday%2Findex.php%3Fs%3D%2Fhome%2Ffloag&response_type=code&scope=snsapi_base&state=STATE&connect_redirect=1#wec'}],
                [{img:images[8],title: '中国好公民',url:'https://redrock.cqupt.edu.cn/game/goodcitizen'},
                {img:images[9],title: '重邮问问答',url:'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx81a4a4b77ec98ff4&redirect_uri=http%3A%2F%2Fhongyan.cqupt.edu.cn%2Fcquptque%2FHome%2FIndex%2Findex&response_type=code&scope=snsapi_userinfo&state=STATE&connect_redirect=1#wechat_redirect'}],
                [{img:images[10],title: '拼拼价值观',url:'https://redrock.cqupt.edu.cn/game/2048'},
                {img:images[11],title: '夸父追日',url:'https://redrock.cqupt.edu.cn/game/sun'}]
                // {img:images[12],title: '奔跑吧兄弟',url:'https://redrock.cqupt.edu.cn/game/run#rd?sukey=66d4519b2d3854cd9c23252e1b82ad95f89538084ef43cce1e555cdff1b3d7644bc98dde661bdcd23f2cb87d8df67d42'}
            ]
        };
        console.log(this.state.list)
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