(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{15:function(e,t,n){e.exports=n(29)},20:function(e,t,n){},21:function(e,t,n){},27:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(3),o=n.n(r),c=(n(20),n(14)),s=n(5),l=n(6),u=n(8),m=n(7),d=n(2),h=n(9),f=(i.a.Component,n(21),n(12));var p=function(e){var t=e.items.map((function(t){return i.a.createElement("div",{className:"list",key:t.key},i.a.createElement("p",null,t.text,i.a.createElement("span",null,i.a.createElement(f.a,{className:"faicons",icon:"trash",onClick:function(){return e.deleteItem(t.key)}}))))}));return i.a.createElement("div",null,t)},v=(n(27),n(28),n(4)),I=n(13);v.b.add(I.a);var b=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={items:[],currentItem:{text:"",key:""}},n.handleInput=n.handleInput.bind(Object(d.a)(n)),n.addItem=n.addItem.bind(Object(d.a)(n)),n.deleteItem=n.deleteItem.bind(Object(d.a)(n)),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleInput",value:function(e){this.setState({currentItem:{text:e.target.value,key:Date.now()}})}},{key:"addItem",value:function(e){e.preventDefault();var t=this.state.currentItem;if(""!==t.text){var n=[].concat(Object(c.a)(this.state.items),[t]);this.setState({items:n,currentItem:{text:"",key:""}})}}},{key:"deleteItem",value:function(e){var t=this.state.items.filter((function(t){return t.key!==e}));this.setState({items:t})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",null,i.a.createElement("form",{id:"to-do-form",onSubmit:this.addItem},i.a.createElement("input",{type:"text",placeholder:"",value:this.state.currentItem.text,onChange:this.handleInput}),i.a.createElement("button",{type:"submit"},"Add"))),i.a.createElement(p,{items:this.state.items,deleteItem:this.deleteItem}))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.787120f2.chunk.js.map