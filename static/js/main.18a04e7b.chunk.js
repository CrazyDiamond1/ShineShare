(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(31)},23:function(e,t,n){},26:function(e,t,n){e.exports=n.p+"static/media/ShineShareTemp.9dd573a1.png"},27:function(e){e.exports={pokemon:[{species:"Pikachu",nickname:"F",region:"Ultra-Moon",date:"5/23/2018",gender:"f"},{species:"Unown",nickname:"F",region:"Ultra-Moon",date:"5/23/2018",gender:"f"},{species:"Unown",nickname:"U",region:"Ultra-Moon",date:"5/23/2018",gender:"u"},{species:"Unown",nickname:"C",region:"Ultra-Moon",date:"5/23/2018",gender:"c"},{species:"Unown",nickname:"K",region:"Ultra-Moon",date:"5/23/2018",gender:"k"},{species:"Venusaur",nickname:"F",region:"Ultra-Moon",date:"5/23/2018",gender:"m"},{species:"Unown",nickname:"F",region:"Ultra-Moon",date:"5/23/2018",gender:"m"},{species:"Unown",nickname:"U",region:"Ultra-Moon",date:"5/23/2018",gender:"e"},{species:"Charizard",nickname:"F",region:"Ultra-Moon",date:"5/23/2018",gender:"m"},{species:"Unown",nickname:"C",region:"Ultra-Moon",date:"5/23/2018",gender:"p"},{species:"Unown",nickname:"K",region:"Ultra-Moon",date:"5/23/2018",gender:"l"},{species:"Unown",nickname:"F",region:"Ultra-Moon",date:"5/23/2018",gender:"e"},{species:"Unown",nickname:"U",region:"Ultra-Moon",date:"5/23/2018",gender:"a"},{species:"Unown",nickname:"C",region:"Ultra-Moon",date:"5/23/2018",gender:"s"},{species:"Unown",nickname:"K",region:"Ultra-Moon",date:"5/23/2018",gender:"e"},{species:"Blastoise",nickname:"F",region:"Ultra-Moon",date:"5/23/2018",gender:"m"}]}},28:function(e){e.exports={news:[{title:"Look at That SHIT!",content:"Wow look at that!",date:"5/23/2018"},{title:"Look at That SHIT!",content:"Wow look at that!",date:"5/23/2018"},{title:"Look at That SHIT!",content:"Wow look at that!",date:"5/23/2018"},{title:"Look at That SHIT!",content:"Wow look at that!",date:"5/23/2018"},{title:"Look at That SHIT!",content:"Wow look at that!",date:"5/23/2018"},{title:"Look at That SHIT!",content:"Wow look at that!",date:"5/23/2018"},{title:"Look at That SHIT!",content:"Wow look at that!",date:"5/23/2018"},{title:"Look at That SHIT!",content:"Wow look at that!",date:"5/23/2018"},{title:"Look at That SHIT!",content:"Wow look at that!",date:"5/23/2018"}]}},29:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(15),i=n.n(r),c=(n(23),n(2)),l=n(3),s=n(5),m=n(4),u=n(6),d=n(33),p=n(34),h=n(35),g=n(32),k=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("ul",{className:"navbar"},o.a.createElement(g.a,{to:"/",className:"navbar-item"},"Home"),o.a.createElement(g.a,{to:"/",className:"navbar-item"},"Pokemon"),o.a.createElement(g.a,{to:"/",className:"navbar-item"},"Community"),o.a.createElement(g.a,{to:"/",className:"navbar-item"},"About"),o.a.createElement(g.a,{to:"/",className:"navbar-item"},"Support")))}}]),t}(a.Component),w=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"LogUserIn",value:function(){document.getElementById("username").value,document.getElementById("password").value}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"login-panel"},o.a.createElement("form",null,o.a.createElement("p",null,"Login:",o.a.createElement("input",{type:"text",id:"username",placeholder:"Username"}),o.a.createElement("input",{type:"password",id:"password",placeholder:"Password"}))),o.a.createElement("div",{className:"register-link"},o.a.createElement("p",null,"Need to ",o.a.createElement(g.a,{to:"/Register",className:"navbar-item"},"REGISTER?")))),o.a.createElement("img",{className:"banner",alt:"",src:n(26)}),o.a.createElement(k,null))}}]),t}(a.Component),b=n(10),f=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={Name:"",Game:"",Gender:"",Image:"",BackupImage:""},n.delta.bind(Object(b.a)(Object(b.a)(n))),n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"delta",value:function(e){this.setState({Image:e})}},{key:"setInitialState",value:function(){this.setState({Name:this.props.name,Gender:this.props.gender,Game:this.props.game})}},{key:"testImage",value:function(e){return new Promise(function(t,n){var a=new Image;a.addEventListener("load",function(){t(this)}),a.addEventListener("error",function(){n()}),a.src=e})}},{key:"setImage",value:function(e){var t=this.props.gender,n=this.props.name,a="",o=";";"!"!==t&&"?"!==t&&"none"!==t?(a="https://play.pokemonshowdown.com/sprites/xyani-shiny/".concat(n.toLowerCase(),"-").concat(t.toLowerCase(),".gif"),o="https://play.pokemonshowdown.com/sprites/xyani-shiny/".concat(n.toLowerCase(),".gif")):a="!"===this.props.gender?"https://play.pokemonshowdown.com/sprites/xyani-shiny/".concat(n.toLowerCase(),"-exclamation.gif"):"?"===this.props.gender?"https://play.pokemonshowdown.com/sprites/xyani-shiny/".concat(n.toLowerCase(),"-question.gif"):"https://play.pokemonshowdown.com/sprites/xyani-shiny/".concat(n.toLowerCase(),".gif"),this.setState({Image:a}),this.testImage(a).then(function(t){console.log("That image is found and loaded",t),e.delta(a)},function(){console.log("That image was not found"),e.delta(o)})}},{key:"componentDidMount",value:function(){this.setInitialState(),this.setImage(this)}},{key:"render",value:function(){return o.a.createElement("div",{className:"popular-hunts-card"},o.a.createElement("div",{className:"popular-hunts-card-text"},o.a.createElement("div",null,this.state.Name),o.a.createElement("div",null,this.state.Game)),o.a.createElement("img",{src:this.state.Image}))}}]),t}(a.Component),E=n(27).pokemon,v=0,y=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"popular-hunts"},o.a.createElement("h1",null,"Popular Hunts"),E.map(function(e){return o.a.createElement(f,{key:v+=1,name:e.species,gender:e.gender,game:e.region})}))}}]),t}(a.Component),j=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={Title:"",Content:"",Date:""},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"setInitialState",value:function(){this.setState({Title:this.props.title,Content:this.props.content,Date:this.props.date})}},{key:"componentDidMount",value:function(){this.setInitialState()}},{key:"render",value:function(){return o.a.createElement("div",{className:"news-card"},o.a.createElement("div",{className:"news-card-text"},o.a.createElement("h2",null,this.state.Title),o.a.createElement("h3",null,this.state.Date),o.a.createElement("div",null,this.state.Content)))}}]),t}(a.Component),O=n(28).news,U=0,I=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={state:"Java"},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"news"},o.a.createElement("h1",null,"News"),O.map(function(e){return o.a.createElement(j,{key:U+=1,title:e.title,content:e.content,date:e.date})}))}}]),t}(a.Component),C=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"footer"},o.a.createElement(k,null),o.a.createElement("p",{id:"copyright"},"Copyright \xa92018 by Noah W. Tanner"))}}]),t}(a.Component),T=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"page-container"},o.a.createElement("div",{id:"content-wrap"},o.a.createElement(w,null),o.a.createElement(y,null),o.a.createElement(I,null),o.a.createElement(C,null)))}}]),t}(a.Component),N=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(w,null),o.a.createElement("form",null,o.a.createElement("p",null,"Register "),o.a.createElement("input",{type:"text",id:"username",placeholder:"Username"})," ",o.a.createElement("br",null),o.a.createElement("input",{type:"password",id:"password",placeholder:"Password"}),o.a.createElement("br",null),o.a.createElement("input",{type:"password",id:"confirm-password",placeholder:"Confirm Password"}),o.a.createElement("br",null)),o.a.createElement(C,null))}}]),t}(a.Component),S=(n(29),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"main-app-container"},o.a.createElement(d.a,null,o.a.createElement(p.a,null,o.a.createElement(h.a,{exact:!0,path:"/",component:T}),o.a.createElement(h.a,{exact:!0,path:"/register",component:N}))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.18a04e7b.chunk.js.map