(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),r=n.n(s),o=n(4),a=n.n(o),i=(n(14),n(5)),u=n(6),l=n(2),h=n(8),d=n(7),j=(n(15),n(16),function(e){return Object(c.jsx)("input",{class:"search",type:"search",placeholder:e.placeholder,onChange:e.func})}),f=(n(17),function(e){var t=e.y.id.toString();return Object(c.jsxs)("div",{className:"card-container",children:[Object(c.jsx)("img",{alt:"monster",src:"https://robohash.org/"+t+"?set=set2&size=180x180"}),Object(c.jsx)("h2",{children:e.y.name}),Object(c.jsx)("p",{children:e.y.email})]})}),b=(n(18),function(e){return Object(c.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(c.jsx)(f,{y:e},e.id)}))})}),p=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).func=function(t){e.setState({searchField:t.target.value})},e.state={Monsters:[],searchField:""},e.altFunc=e.altFunc.bind(Object(l.a)(e)),e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({Monsters:t})}))}},{key:"altFunc",value:function(e){this.setState({searchField:e.target.value})}},{key:"render",value:function(){var e=this.state,t=e.Monsters,n=e.searchField,s=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"Monster Rolodex"}),Object(c.jsx)(j,{placeholder:"search monsters",func:this.altFunc}),Object(c.jsx)(b,{monsters:s})]})}}]),n}(r.a.Component),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),s(e),r(e),o(e)}))};a.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),m()}],[[19,1,2]]]);
//# sourceMappingURL=main.426484bf.chunk.js.map