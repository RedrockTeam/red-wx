webpackJsonp([9],{"3mpV":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("Zx67"),i=e.n(r),o=e("Zrlr"),a=e.n(o),s=e("wxAW"),l=e.n(s),c=e("zwoO"),u=e.n(c),h=e("Pf15"),f=e.n(h),m=e("U7vG"),p=e.n(m),v=e("pKXO"),d=(e.n(v),function(t){function n(){a()(this,n);var t=u()(this,(n.__proto__||i()(n)).call(this));return t.state={list:[]},document.title="党史辞典",t}return f()(n,t),l()(n,[{key:"componentWillMount",value:function(){var t=this,n={method:"GET"};fetch("http://kfzkyi.natappfree.cc/RedWeb/TextUrl.php",n).then(function(t){return t.json()}).then(function(n){t.setState({list:n})})}},{key:"hoverStart",value:function(t){t.target.className="hover history-list-a"}},{key:"hoverEnd",value:function(t){t.target.className="history-list-a"}},{key:"render",value:function(){var t=this,n=this.state.list.map(function(n,e){return p.a.createElement("li",{className:"history-list-li",key:e,onTouchStart:function(n){return t.hoverStart(n)},onTouchEnd:function(n){return t.hoverEnd(n)}},p.a.createElement("a",{className:"history-list-a",href:n.url},n.name))});return p.a.createElement("ul",{className:"history-list"},n)}}]),n}(m.Component));n.default=d},nAVI:function(t,n,e){n=t.exports=e("bKW+")(void 0),n.push([t.i,".history-list {\n  width: 9.16rem;\n  margin: 0 auto 0.26666667rem;\n}\n.history-list-li {\n  width: 9.16rem;\n  margin-top: 0.26666667rem;\n  text-align: center;\n}\n.history-list-a {\n  font-size: 0.4rem;\n  line-height: 0.90666667rem;\n}\n.hover {\n  color: #d52918;\n  text-decoration: underline;\n}\n",""])},pKXO:function(t,n,e){var r=e("nAVI");"string"==typeof r&&(r=[[t.i,r,""]]);var i={};i.transform=void 0;e("P2Jt")(r,i);r.locals&&(t.exports=r.locals)}});
//# sourceMappingURL=9.e2dbf.js.map