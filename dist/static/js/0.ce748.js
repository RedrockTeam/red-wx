webpackJsonp([0],{MwFL:function(e,t,n){e.exports=n.p+"static/img/carousel1.e53f105.jpg"},"P/Jh":function(e,t,n){t=e.exports=n("bKW+")(void 0),t.push([e.i,"header {\n  display: block;\n}\n.title-image {\n  width: 100%;\n}\n.carousel {\n  margin-top: -0.10666667rem;\n  width: 100%;\n  height: 4.97333333rem;\n  overflow: hidden;\n}\n.carousel-ul {\n  position: relative;\n  width: 500%;\n  height: 4.97333333rem;\n}\n.carousel-li {\n  float: left;\n  width: 20%;\n  height: 4.97333333rem;\n}\n.carousel-img {\n  width: 100%;\n  height: 4.97333333rem;\n}\n",""])},PLCE:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Zx67"),r=n.n(a),l=n("Zrlr"),i=n.n(l),c=n("wxAW"),o=n.n(c),u=n("zwoO"),s=n.n(u),m=n("Pf15"),h=n.n(m),f=n("U7vG"),p=n.n(f),d=n("F8kA"),g=n("WBcq"),E=n("cZ53"),y=n.i(g.a)(function(){return n.e(6).then(n.bind(null,"W+5T")).then(function(e){return e.default})}),v=n.i(g.a)(function(){return n.e(5).then(n.bind(null,"nwe4")).then(function(e){return e.default})}),b=n.i(g.a)(function(){return n.e(8).then(n.bind(null,"5KLQ")).then(function(e){return e.default})}),w=n.i(g.a)(function(){return n.e(9).then(n.bind(null,"3mpV")).then(function(e){return e.default})}),x=n.i(g.a)(function(){return n.e(4).then(n.bind(null,"KpPh")).then(function(e){return e.default})}),k=n.i(g.a)(function(){return n.e(7).then(n.bind(null,"zmc/")).then(function(e){return e.default})}),_=function(e){function t(){return i()(this,t),s()(this,(t.__proto__||r()(t)).apply(this,arguments))}return h()(t,e),o()(t,[{key:"render",value:function(){return p.a.createElement("div",null,p.a.createElement(E.a,null),p.a.createElement(d.b,null,p.a.createElement(d.c,{path:"/list",exact:!0,component:y}),p.a.createElement(d.c,{path:"/list/dynamic",component:v}),p.a.createElement(d.c,{path:"/list/era",component:b}),p.a.createElement(d.c,{path:"/list/history",component:w}),p.a.createElement(d.c,{path:"/list/www",component:x}),p.a.createElement(d.c,{path:"/list/movie",component:k})))}}]),t}(f.Component);t.default=_},"b+iQ":function(e,t,n){e.exports=n.p+"static/img/carousel3.c1924ad.jpg"},cZ53:function(e,t,n){"use strict";var a=n("Zx67"),r=n.n(a),l=n("Zrlr"),i=n.n(l),c=n("wxAW"),o=n.n(c),u=n("zwoO"),s=n.n(u),m=n("Pf15"),h=n.n(m),f=n("U7vG"),p=n.n(f),d=n("y+i4"),g=(n.n(d),n("hzuk")),E=n.n(g),y=n("hQbx"),v=y.keys().map(y),b=function(e){function t(){i()(this,t);var e=s()(this,(t.__proto__||r()(t)).call(this));return e.state={list:[{img:v[0],url:"http://fanyi.baidu.com/?aldtype=16047#zh/en/%E8%BD%AE%E6%92%AD"},{img:v[1],url:"http://fanyi.baidu.com/?aldtype=16047#zh/en/%E8%BD%AE%E6%92%AD"},{img:v[2],url:"http://fanyi.baidu.com/?aldtype=16047#zh/en/%E8%BD%AE%E6%92%AD"}]},e}return h()(t,e),o()(t,[{key:"componentWillMount",value:function(){var e=this,t={method:"GET"};fetch("http://hongyan.cqupt.edu.cn/red-wx/RedWeb/RedWeb/imgsUrl.php",t).then(function(e){return e.json()}).then(function(t){e.setState({list:t}),console.log(e.state.list)})}},{key:"componentDidMount",value:function(){var e=this,t=1,n=this.state.list.length+1,a=parseInt(window.getComputedStyle(this.refs.carouselUl.children[0]).width);setInterval(function(){t<n?(e.refs.carouselUl.style.left=-a*t+"px",t++):(e.refs.carouselUl.style.left="0px",t=0)},1500)}},{key:"render",value:function(){var e=this.state.list,t=e.map(function(e,t){return p.a.createElement("li",{className:"carousel-li",key:t},p.a.createElement("a",{href:e.url},p.a.createElement("img",{src:e.img,alt:"",className:"carousel-img"})))});return p.a.createElement("header",null,p.a.createElement("img",{className:"title-image",src:E.a,alt:""}),p.a.createElement("div",{className:"carousel"},p.a.createElement("ul",{className:"carousel-ul",ref:"carouselUl"},p.a.createElement("li",{className:"carousel-li"},p.a.createElement("a",{href:e[0].url},p.a.createElement("img",{src:e[0].img,alt:"",className:"carousel-img"}))),t,p.a.createElement("li",{className:"carousel-li"},p.a.createElement("a",{href:e[e.length-1].url},p.a.createElement("img",{src:e[e.length-1].img,alt:"",className:"carousel-img"}))))))}}]),t}(f.Component);t.a=b},hQbx:function(e,t,n){function a(e){return n(r(e))}function r(e){var t=l[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var l={"./carousel1.jpg":"MwFL","./carousel2.jpg":"spyI","./carousel3.jpg":"b+iQ"};a.keys=function(){return Object.keys(l)},a.resolve=r,e.exports=a,a.id="hQbx"},hzuk:function(e,t,n){e.exports=n.p+"static/img/title.13a1048.png"},spyI:function(e,t,n){e.exports=n.p+"static/img/carousel2.55e73b6.jpg"},"y+i4":function(e,t,n){var a=n("P/Jh");"string"==typeof a&&(a=[[e.i,a,""]]);var r={};r.transform=void 0;n("P2Jt")(a,r);a.locals&&(e.exports=a.locals)}});
//# sourceMappingURL=0.ce748.js.map