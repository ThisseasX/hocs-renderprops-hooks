(this["webpackJsonphocs-renderprops-hooks"]=this["webpackJsonphocs-renderprops-hooks"]||[]).push([[0],{33:function(e,t,n){e.exports=n(38)},38:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),u=n(31),i=n.n(u),a=function(e){var t=e.x,n=e.y;return r.a.createElement("div",null,"My mouse is at X:",t," Y:",n)},s=n(15),o=n(16),b=n(25),l=n(17),f=n(26),p=n(27),h=n(39),j=n(20),O=n(40),m=n(41),k=function(e){return function(t){function n(){var e;return Object(s.a)(this,n),(e=Object(b.a)(this,Object(l.a)(n).call(this))).state={x:0,y:0},e}return Object(f.a)(n,t),Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=new p.a;this.clicks=Object(h.a)(window,"click").subscribe((function(){return t.next()})),this.tracker=Object(h.a)(window,"mousemove").pipe(Object(j.a)((function(e){return{x:e.clientX,y:e.clientY}})),Object(O.a)(t),Object(m.a)((function(){return t}))).subscribe((function(t){return e.setState(t)}))}},{key:"componentWillUnmount",value:function(){this.clicks.unsubscribe(),this.tracker.unsubscribe()}},{key:"render",value:function(){return r.a.createElement(e,this.state)}}]),n}(r.a.Component)},v=n(42),d=n(43),w=n(44),y=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(b.a)(this,Object(l.a)(t).call(this))).state={x:0,y:0},e}return Object(f.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=new v.a(!0);this.clicks=Object(h.a)(window,"click").subscribe((function(){return t.next(!t.getValue())}));var n=Object(h.a)(window,"mousemove").pipe(Object(j.a)((function(e){return{x:e.clientX,y:e.clientY}})));this.tracker=t.pipe(Object(w.a)((function(e){return e?n:d.a}))).subscribe((function(t){return e.setState(t)}))}},{key:"componentWillUnmount",value:function(){this.clicks.unsubscribe(),this.tracker.unsubscribe()}},{key:"render",value:function(){return this.props.render(this.state)}}]),t}(c.Component),x=n(32),E=function(){var e=Object(c.useState)({x:0,y:0}),t=Object(x.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){var e=new p.a,t=Object(h.a)(window,"click").subscribe((function(){return e.next()})),n=Object(h.a)(window,"mousemove").pipe(Object(j.a)((function(e){return{x:e.clientX,y:e.clientY}})),Object(O.a)(e),Object(m.a)((function(){return e}))).subscribe((function(e){return r(e)}));return function(){t.unsubscribe(),n.unsubscribe()}}),[]),n},X=k(a),Y=function(){var e=E();return r.a.createElement(r.a.Fragment,null,r.a.createElement(X,null),r.a.createElement(y,{render:a}),r.a.createElement(a,e),r.a.createElement("p",null,"Click anywhere to pause"))};i.a.render(r.a.createElement(Y,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.7b259747.chunk.js.map