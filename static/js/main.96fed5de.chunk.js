(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,n){e.exports=n.p+"static/media/logo.ff9a163f.svg"},34:function(e,t,n){e.exports=n(48)},39:function(e,t,n){},40:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),o=n.n(c),i=(n(39),n(12)),l=n(5),s=n(27),u=n.n(s),p=(n(40),n(10)),m=n.n(p),d=n(13),v=n(14),f=n(15),h=n(18),b=n(16),g=n(19),w=n(6),E=n(7),k=n(17),y=n.n(k);function j(){var e=Object(w.a)(["\n  box-shadow: 0 0 35px black;\n"]);return j=function(){return e},e}var x=function(e){var t=e.movie;return r.a.createElement(i.b,{to:"/".concat(t.id)},r.a.createElement(y.a,{id:t.id},r.a.createElement(O,{src:"".concat("http://image.tmdb.org/t/p/w154").concat(t.poster_path),alt:"".concat(t.title)})))},O=E.a.img(j());function _(){var e=Object(w.a)(["\n  display: grid;\n  padding: 1rem;\n  grid-template-columns: repeat(6, 1fr);\n  grid-row-gap: 1rem;\n"]);return _=function(){return e},e}var A=E.a.div(_()),S=function(e){function t(){var e,n;Object(v.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={movies:[]},n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(m.a.mark(function e(){var t,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/discover/movie?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,this.setState({movies:n.results}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}},e,this,[[0,10]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.movies;return r.a.createElement(A,null,e.map(function(e){return r.a.createElement(x,{key:e.id,movie:e})}))}}]),t}(a.PureComponent);function N(){var e=Object(w.a)(["\n    background: white;\n    text-align: left;\n    padding: 2rem 10%;\n    display: flex;\n    > div {\n        margin-left: 20px;\n    }\n    img {\n        position: relative;\n        top: -5rem;\n    }\n"]);return N=function(){return e},e}function B(){var e=Object(w.a)(["\n    position: relative;\n    padding-top: 50vh;\n    background: url(",") no-repeat;\n    background-size: cover;\n"]);return B=function(){return e},e}var C=function(e){function t(){var e,n;Object(v.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={movie:[]},n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(m.a.mark(function e(){var t,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(this.props.match.params.id,"?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,this.setState({movie:n}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}},e,this,[[0,10]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.movie;return r.a.createElement(D,{backdrop:"".concat("http://image.tmdb.org/t/p/w1280").concat(e.backdrop_path)},r.a.createElement(J,null,r.a.createElement(y.a,{id:e.id},r.a.createElement(O,{src:"".concat("http://image.tmdb.org/t/p/w154").concat(e.poster_path),alt:"".concat(e.title)})),r.a.createElement("div",null,r.a.createElement("h1",null,e.title),r.a.createElement("h3",null,e.release_date),r.a.createElement("p",null,e.overview))))}}]),t}(a.Component),D=E.a.div(B(),function(e){return e.backdrop}),J=E.a.div(N()),M=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(i.b,{to:"/"},r.a.createElement("img",{src:u.a,className:"App-logo",alt:"logo"}))),r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:S}),r.a.createElement(l.a,{path:"/:id",component:C}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.96fed5de.chunk.js.map