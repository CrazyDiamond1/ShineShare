(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(31)},23:function(e,t,n){},26:function(e,t,n){e.exports=n.p+"static/media/ShineShareTemp.9dd573a1.png"},27:function(e){e.exports={pokemon:[{species:"Pikachu",nickname:"F",region:"Ultra-Moon",date:"5/23/2018",gender:"f"},{species:"Unown",nickname:"F",region:"Ultra-Moon",date:"5/23/2018",gender:"f"},{species:"Unown",nickname:"U",region:"Ultra-Moon",date:"5/23/2018",gender:"u"},{species:"Unown",nickname:"C",region:"Ultra-Moon",date:"5/23/2018",gender:"c"},{species:"Unown",nickname:"K",region:"Ultra-Moon",date:"5/23/2018",gender:"k"},{species:"Venusaur",nickname:"F",region:"Ultra-Moon",date:"5/23/2018",gender:"m"},{species:"Unown",nickname:"F",region:"Ultra-Moon",date:"5/23/2018",gender:"m"},{species:"Unown",nickname:"U",region:"Ultra-Moon",date:"5/23/2018",gender:"e"},{species:"Charizard",nickname:"F",region:"Ultra-Moon",date:"5/23/2018",gender:"m"},{species:"Unown",nickname:"C",region:"Ultra-Moon",date:"5/23/2018",gender:"p"},{species:"Unown",nickname:"K",region:"Ultra-Moon",date:"5/23/2018",gender:"l"},{species:"Unown",nickname:"F",region:"Ultra-Moon",date:"5/23/2018",gender:"e"},{species:"Unown",nickname:"U",region:"Ultra-Moon",date:"5/23/2018",gender:"a"},{species:"Unown",nickname:"C",region:"Ultra-Moon",date:"5/23/2018",gender:"s"},{species:"Unown",nickname:"K",region:"Ultra-Moon",date:"5/23/2018",gender:"e"},{species:"Blastoise",nickname:"F",region:"Ultra-Moon",date:"5/23/2018",gender:"m"}]}},28:function(e){e.exports={news:[{title:"Demo Site Deployed to Github Pages!",content:"Today I learned how to deploy React projects to github! This is so exciting! For those of you who are new, the colors are like this because it's easy to tell what components everything is made from!",date:"10/15/2019"},{title:"Look at That!",content:"Wow look at that!",date:"5/23/2018"}]}},29:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),i=n.n(o),c=(n(23),n(2)),s=n(3),l=n(5),m=n(4),u=n(6),p=n(33),d=n(34),h=n(35),g=n(32),b=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar"},r.a.createElement(g.a,{to:"/",className:"navbar-item"},"Home"),r.a.createElement(g.a,{to:"/",className:"navbar-item"},"Pokemon"),r.a.createElement(g.a,{to:"/",className:"navbar-item"},"Community"),r.a.createElement(g.a,{to:"/",className:"navbar-item"},"About"),r.a.createElement(g.a,{to:"/",className:"navbar-item"},"Support")))}}]),t}(a.Component),f=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"LogUserIn",value:function(){document.getElementById("username").value,document.getElementById("password").value}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"login-panel"},r.a.createElement("form",null,r.a.createElement("p",null,"Login:",r.a.createElement("input",{type:"text",id:"username",placeholder:"Username"}),r.a.createElement("input",{type:"password",id:"password",placeholder:"Password"}))),r.a.createElement("div",{className:"register-link"},r.a.createElement("p",null,"Need to ",r.a.createElement(g.a,{to:"/ShineShare/Register",className:"navbar-item"},"REGISTER?")))),r.a.createElement("img",{className:"banner",alt:"",src:n(26)}),r.a.createElement(b,null))}}]),t}(a.Component),E=n(10),w=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={Name:"",Game:"",Gender:"",Image:"",BackupImage:""},n.delta.bind(Object(E.a)(Object(E.a)(n))),n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"delta",value:function(e){this.setState({Image:e})}},{key:"setInitialState",value:function(){this.setState({Name:this.props.name,Gender:this.props.gender,Game:this.props.game})}},{key:"testImage",value:function(e){return new Promise(function(t,n){var a=new Image;a.addEventListener("load",function(){t(this)}),a.addEventListener("error",function(){n()}),a.src=e})}},{key:"setImage",value:function(e){var t=this.props.gender,n=this.props.name,a="",r=";";"!"!==t&&"?"!==t&&"none"!==t?(a="https://play.pokemonshowdown.com/sprites/xyani-shiny/".concat(n.toLowerCase(),"-").concat(t.toLowerCase(),".gif"),r="https://play.pokemonshowdown.com/sprites/xyani-shiny/".concat(n.toLowerCase(),".gif")):a="!"===this.props.gender?"https://play.pokemonshowdown.com/sprites/xyani-shiny/".concat(n.toLowerCase(),"-exclamation.gif"):"?"===this.props.gender?"https://play.pokemonshowdown.com/sprites/xyani-shiny/".concat(n.toLowerCase(),"-question.gif"):"https://play.pokemonshowdown.com/sprites/xyani-shiny/".concat(n.toLowerCase(),".gif"),this.setState({Image:a}),this.testImage(a).then(function(t){console.log("That image is found and loaded",t),e.delta(a)},function(){console.log("That image was not found"),e.delta(r)})}},{key:"componentDidMount",value:function(){this.setInitialState(),this.setImage(this)}},{key:"render",value:function(){return r.a.createElement("div",{className:"popular-hunts-card"},r.a.createElement("div",{className:"popular-hunts-card-text"},r.a.createElement("div",null,this.state.Name),r.a.createElement("div",null,this.state.Game)),r.a.createElement("img",{src:this.state.Image}))}}]),t}(a.Component),y=n(27).pokemon,v=0,k=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"popular-hunts"},r.a.createElement("h1",null,"Popular Hunts"),y.map(function(e){return r.a.createElement(w,{key:v+=1,name:e.species,gender:e.gender,game:e.region})}))}}]),t}(a.Component),j=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={Title:"",Content:"",Date:""},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"setInitialState",value:function(){this.setState({Title:this.props.title,Content:this.props.content,Date:this.props.date})}},{key:"componentDidMount",value:function(){this.setInitialState()}},{key:"render",value:function(){return r.a.createElement("div",{className:"news-card"},r.a.createElement("div",{className:"news-card-text"},r.a.createElement("h2",null,this.state.Title),r.a.createElement("h3",null,this.state.Date),r.a.createElement("div",null,this.state.Content)))}}]),t}(a.Component),O=n(28).news,U=0,C=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={state:"Java"},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"news"},r.a.createElement("h1",null,"News"),O.map(function(e){return r.a.createElement(j,{key:U+=1,title:e.title,content:e.content,date:e.date})}))}}]),t}(a.Component),N=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"footer"},r.a.createElement(b,null),r.a.createElement("p",{id:"copyright"},"Copyright \xa92018 by Noah W. Tanner"))}}]),t}(a.Component),I=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"page-container"},r.a.createElement("div",{id:"content-wrap"},r.a.createElement(f,null),r.a.createElement(k,null),r.a.createElement(C,null),r.a.createElement(N,null)))}}]),t}(a.Component),S=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement("form",null,r.a.createElement("p",null,"Register "),r.a.createElement("input",{type:"text",id:"username",placeholder:"Username"})," ",r.a.createElement("br",null),r.a.createElement("input",{type:"password",id:"password",placeholder:"Password"}),r.a.createElement("br",null),r.a.createElement("input",{type:"password",id:"confirm-password",placeholder:"Confirm Password"}),r.a.createElement("br",null)),r.a.createElement(N,null))}}]),t}(a.Component),M=(n(29),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-app-container"},r.a.createElement(p.a,null,r.a.createElement(d.a,null,r.a.createElement(h.a,{exact:!0,path:"/ShineShare",component:I}),r.a.createElement(h.a,{exact:!0,path:"/ShineShare/register",component:S}))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.a282472b.chunk.js.map