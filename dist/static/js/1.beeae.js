webpackJsonp([1],{HQZk:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("Zx67"),a=n.n(o),r=n("Zrlr"),i=n.n(r),l=n("wxAW"),s=n.n(l),c=n("zwoO"),u=n.n(c),p=n("Pf15"),d=n.n(p),f=n("U7vG"),h=n.n(f),v=function(t){function e(){i()(this,e);var t=u()(this,(e.__proto__||a()(e)).call(this));return t.state={now:{}},t}return d()(e,t),s()(e,[{key:"componentWillMount",value:function(){var t=this,e={method:"GET"};fetch("http://kfzkyi.natappfree.cc/RedWeb/VideoUrl.php",e).then(function(t){return t.json()}).then(function(e){t.setState({now:e[t.props.match.params.id]}),console.log(t.state.now),document.title=t.state.now.name})}},{key:"render",value:function(){var t=this.state.now;return h.a.createElement("div",{className:"movie-list"},h.a.createElement("video",{controls:"controls","data-x-webkit-airplay":"true","data-playsinline":"","data-webkit-playsinline":"true",src:t.videourl,poster:t.picurl,style:{fontSize:"0px",width:"100%"}}))}}]),e}(f.Component);e.default=v}});
//# sourceMappingURL=1.beeae.js.map