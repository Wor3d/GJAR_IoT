(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports={whitebox:"AboutUsPage_whitebox__2vLfU",aboutProject:"AboutUsPage_aboutProject__3D2ng",aboutProjectText:"AboutUsPage_aboutProjectText__20u4J",image:"AboutUsPage_image__3iovr",about_us_title:"AboutUsPage_about_us_title__3gtZv",about_us:"AboutUsPage_about_us__3_5d9"}},20:function(e,t,a){e.exports={hamburger:"HamburgerButton_hamburger__2Slo7",isactive:"HamburgerButton_isactive__3hwjF",hamburgerinner:"HamburgerButton_hamburgerinner__cOLe5",hamburgerbox:"HamburgerButton_hamburgerbox__3QCCA",hamburgersqueeze:"HamburgerButton_hamburgersqueeze__2LUNL"}},208:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(75),c=a.n(o),i=(a(96),a(10)),l=a(11),s=a(13),u=a(12),m=a(14),v=a(44),d=a.n(v),h=a(20),b=a.n(h),p=function(e){var t=e.active?b.a.isactive:null;return n.a.createElement("div",{className:[b.a.hamburger,b.a.hamburgersqueeze,t].join(" "),onClick:e.click},n.a.createElement("div",{className:b.a.hamburgerbox},n.a.createElement("div",{className:b.a.hamburgerinner})))},E=a(31),_=a.n(E),k=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:_.a.GjarIot},"GJAR IOT"),n.a.createElement("p",{className:_.a.Activeroom},e.title),n.a.createElement("div",{className:_.a.HamburgerButton},n.a.createElement(p,{click:e.click,active:e.active})))},g=a(24),f=a.n(g),y=a(90),j=a(4),N=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,"1. poscodie"),n.a.createElement(j.b,{style:{textDecoration:"none"},to:"/"},n.a.createElement("li",{onClick:function(){return e.click("Byt (29)",16)}},"Byt (29)")),n.a.createElement("div",null,"2. poschodie"),n.a.createElement(j.b,{style:{textDecoration:"none"},to:"/"},n.a.createElement("li",{onClick:function(){return e.click("Inf kabinet (53)",53)}},"Inf kabinet (53)")),n.a.createElement(j.b,{style:{textDecoration:"none"},to:"/"},n.a.createElement("li",{onClick:function(){return e.click("III.A (61)",61)}},"III.A (61)")),n.a.createElement(j.b,{style:{textDecoration:"none"},to:"/"},n.a.createElement("li",{onClick:function(){return e.click("Kniznica (70)",70)}},"Kniznica (70)")),n.a.createElement(j.b,{style:{textDecoration:"none"},to:"/"},n.a.createElement("li",{onClick:function(){return e.click("Aj 1 (71)",71)}},"Aj 1 (71)")),n.a.createElement(j.b,{style:{textDecoration:"none"},to:"/"},n.a.createElement("li",{onClick:function(){return e.click("Nj 2 (77)",77)}},"Nj 2 (77)")),n.a.createElement("div",null,"3. poschodie"),n.a.createElement(j.b,{style:{textDecoration:"none"},to:"/"},n.a.createElement("li",{onClick:function(){return e.click("Bio kabinet (83)",83)}},"Bio kabinet (83)")),n.a.createElement(j.b,{style:{textDecoration:"none"},to:"/"},n.a.createElement("li",{onClick:function(){return e.click("VI.OA (84)",84)}},"VI.OA (84)")),n.a.createElement(j.b,{style:{textDecoration:"none"},to:"/about-project"},n.a.createElement("div",{style:{textDecoration:"underline"},onClick:e.aboutProjectClick},"O projekte")))},C=function(e){var t=e.active?[f.a.SideDrawer,f.a.Active].join(" "):f.a.SideDrawer;return n.a.createElement("div",{className:t},n.a.createElement("div",{className:f.a.CloseBtn,onClick:e.clicked},n.a.createElement(y.a,{size:"1.7em",value:{style:{verticalAlign:"middle"}}}),"Close"),n.a.createElement(N,{aboutProjectClick:e.aboutProjectClick,click:e.click}))},x=a(78),A=a.n(x),D=function(e){return e.show?n.a.createElement("div",{className:A.a.Backdrop,onClick:e.clicked}):null},w=a(47),B=a.n(w),P=function(e){return n.a.createElement("div",{className:B.a.DesktopSideDrawer},n.a.createElement(N,{aboutProjectClick:e.aboutProjectClick,styling:B.a,click:e.click}))},O=a(48),R=a.n(O),S=a(79),H=a.n(S),M=a(80),I=a.n(M),L=a(81),z=a.n(L),G=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=null,t=null,a=null;return"temperature"===this.props.type?(a="Aktu\xe1lna teplota",t="\xb0C",e=n.a.createElement("img",{src:H.a,alt:"chart"})):"humidity"===this.props.type?(a="Aktu\xe1lna vlhkos\u0165",t="%",e=n.a.createElement("img",{src:z.a,alt:"chart"})):"brightness"===this.props.type&&(a="Aktu\xe1lna osvietenos\u0165",t="%",e=n.a.createElement("img",{src:I.a,alt:"chart"})),n.a.createElement("div",{className:R.a.Whitebox},n.a.createElement("p",null,a),n.a.createElement("h1",null,this.props.value,t),n.a.createElement("div",{className:R.a.Icon},e))}}]),t}(r.Component),W=a(82),U=a.n(W),J=function(e){return n.a.createElement("div",{className:U.a.Boxes},n.a.createElement(G,{type:"temperature",value:e.temperature}),n.a.createElement(G,{type:"humidity",value:e.humidity}),n.a.createElement(G,{type:"brightness",value:e.brightness}))},K=a(83),F=a(85),T=a.n(F),V=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={chartData:{labels:a.props.time,datasets:[{label:"Teplota",data:a.props.temperature,fill:!0,backgroundColor:"rgba(85, 186, 254, .3)",borderWidth:4,borderColor:"#55D8FE"},{label:"Vlhkos\u0165",data:a.props.humidity,fill:!0,backgroundColor:"rgba(163, 160, 251, .3)",borderWidth:4,borderColor:"#A3A0FB"},{label:"Osvietenos\u0165",data:a.props.brightness,fill:!0,backgroundColor:"rgba(94, 226, 160, .3)",borderWidth:4,borderColor:"#5EE2A0"}]}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:T.a.Graph},n.a.createElement(K.a,{data:this.state.chartData,options:{responsive:!0,maintainAspectRatio:!1,legend:{position:"bottom"}}}))}}]),t}(r.Component),q=a(86),X=a.n(q),Z=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:X.a.MainPage},n.a.createElement(J,{temperature:this.props.values.temperature[this.props.values.temperature.length-1],humidity:this.props.values.humidity[this.props.values.humidity.length-1],brightness:this.props.values.brightness[this.props.values.brightness.length-1]}),n.a.createElement(V,{temperature:this.props.values.temperature,humidity:this.props.values.humidity,brightness:this.props.values.brightness,time:this.props.values.times}))}}]),t}(r.Component),Q=a(87),$=a.n(Q).a.create({baseURL:"http://iot.gjar-po.sk/"}),Y=a(32),ee=a.n(Y),te=function(){return n.a.createElement("div",{className:ee.a.spinner},n.a.createElement("div",{className:ee.a.cube1}),n.a.createElement("div",{className:ee.a.cube2}))},ae=a(88),re=a.n(ae),ne=function(e){return n.a.createElement("div",{className:re.a.errDiv},n.a.createElement("p",null,e.errMessage))},oe=a(15),ce=a(17),ie=a.n(ce),le=a(89),se=a.n(le),ue=function(){return n.a.createElement("div",{className:ie.a.whitebox},n.a.createElement("div",{className:ie.a.aboutProject},n.a.createElement("div",{className:ie.a.image},n.a.createElement("img",{src:se.a,alt:"wemos"})),n.a.createElement("div",{className:ie.a.aboutProjectText},n.a.createElement("p",null,"Cie\u013eom tohto projektu je moderniz\xe1cia \u0161koly. V miestnostiach \u0161koly sa bude mera\u0165 teplota vzduchu, osvietenos\u0165 a vlkos\u0165."))),n.a.createElement("div",{className:ie.a.about_us_title},"Na projekte pracovali:"),n.a.createElement("div",{className:ie.a.about_us},n.a.createElement("div",null,n.a.createElement("h2",null,"Maro\u0161"),n.a.createElement("p",null,"Pracoval som na koncepte tohto projektu a hardware pre Node jednotky. M\xe1m 19 rokov a som absolvent Gymn\xe1zia J\xe1na Adama Raymana.")),n.a.createElement("div",null,n.a.createElement("h2",null,"Samo"),n.a.createElement("p",null,"Pracoval som na softv\xe9ri a spr\xe1ve servera. M\xe1m 20 rokov a som absolventom Gymn\xe1zia J\xe1na Adama Raymana.")),n.a.createElement("div",null,n.a.createElement("h2",null,"Daniel"),n.a.createElement("p",null,"Pracoval som na webstr\xe1nke. M\xe1m 17 rokov. Nav\u0161tevujem Gymn\xe1zium J\xe1na Adama Raymana v Pre\u0161ove a som \u017eiakom 3.D triedy.")),n.a.createElement("div",null,n.a.createElement("h2",null,"Miro"),n.a.createElement("p",null,"Pracoval som na softv\xe9ri pre Node. M\xe1m 18 rokov. Nav\u0161tevujem Gymn\xe1zium J\xe1na Adama Raymana v Pre\u0161ove a som \u017eiakom 4.C triedy."))))},me=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={activeNav:!1,activeRoom:"Byt (29)",activeRoomNumber:null,values:{temperature:[],humidity:[],brightness:[],times:[]},render:!1,serverError:!1,errMessage:null},a.hamburgerButtonClickedHandler=function(){a.setState(function(){return{activeNav:!a.state.activeNav}})},a.changeActiveRoomHandler=function(e,t){var r={room:t,time:{"time-from":"2019-01-01 00:00:00","time-to":"2020-01-01 00:00:00"}};a.state.activeRoomNumber===t&&null!==a.state.activeRoomNumber||(a.setState({activeRoom:e,activeRoomNumber:t,render:!1,serverError:!1,errMessage:null}),!0===a.state.activeNav&&a.setState({activeNav:!a.state.activeNav}),$({method:"POST",data:r,url:"api/v1/view",headers:{"content-type":"application/json","cache-control":"no-cache"}}).then(function(e){a.processResponse(e)}).catch(function(e){a.setState({render:!1,serverError:!0,errMessage:e.message})}))},a.processResponse=function(e){for(var t=[],r=[],n=[],o=[],c=e.data.length-1;c>e.data.length-4;c--)t.unshift(e.data[c].temperature),r.unshift(e.data[c].humidity),n.unshift(e.data[c].brightness),o.unshift(e.data[c].time);a.setState({values:{temperature:t,humidity:r,brightness:n,times:o},render:!0,serverError:!1})},a.aboutProjectClickHandler=function(){a.setState({activeRoom:"O projekte",activeRoomNumber:null}),!0===a.state.activeNav&&a.setState({activeNav:!a.state.activeNav})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.changeActiveRoomHandler("Byt (29)",16)}},{key:"render",value:function(){var e=n.a.createElement(te,null);return this.state.serverError?e=n.a.createElement(ne,{errMessage:this.state.errMessage}):this.state.serverError||this.state.render?this.state.render&&(e=n.a.createElement(Z,{activeRoomNumber:this.state.activeRoomNumber,values:this.state.values,render:this.state.render})):e=n.a.createElement(te,null),n.a.createElement(n.a.Fragment,null,n.a.createElement("nav",{className:d.a.Navbar},n.a.createElement(k,{click:this.hamburgerButtonClickedHandler,active:this.state.activeNav,title:this.state.activeRoom})),n.a.createElement("main",{className:d.a.Content},n.a.createElement(oe.a,{path:"/",exact:!0,render:function(){return e}}),n.a.createElement(oe.a,{path:"/about-project",exact:!0,component:ue})),n.a.createElement(P,{aboutProjectClick:this.aboutProjectClickHandler,click:this.changeActiveRoomHandler}),n.a.createElement(C,{aboutProjectClick:this.aboutProjectClickHandler,active:this.state.activeNav,clicked:this.hamburgerButtonClickedHandler,click:this.changeActiveRoomHandler}),n.a.createElement(D,{show:this.state.activeNav,clicked:this.hamburgerButtonClickedHandler}))}}]),t}(r.Component);var ve=function(){return n.a.createElement(j.a,null,n.a.createElement(me,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},24:function(e,t,a){e.exports={SideDrawer:"SideDrawer_SideDrawer__2_5yL",CloseBtn:"SideDrawer_CloseBtn__1K8XD",Active:"SideDrawer_Active__2O2CH"}},31:function(e,t,a){e.exports={GjarIot:"Navbar_GjarIot__27MKK",Activeroom:"Navbar_Activeroom__39KZK",HamburgerButton:"Navbar_HamburgerButton__3RO-s"}},32:function(e,t,a){e.exports={spinner:"Loader_spinner__187Cz",cube1:"Loader_cube1__BhFHQ",cube2:"Loader_cube2__2W8Kn","sk-cubemove":"Loader_sk-cubemove__3yN5Z"}},44:function(e,t,a){e.exports={Content:"Layout_Content__krf-c",Navbar:"Layout_Navbar__3Ebfe",ErrMessage:"Layout_ErrMessage__1V6jL"}},47:function(e,t,a){e.exports={DesktopSideDrawer:"DesktopSideDrawer_DesktopSideDrawer__3On42"}},48:function(e,t,a){e.exports={Icon:"Box_Icon__1tVt7",Whitebox:"Box_Whitebox__30joy"}},78:function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__W4if8"}},79:function(e,t,a){e.exports=a.p+"static/media/bluechart.1e9aebf7.svg"},80:function(e,t,a){e.exports=a.p+"static/media/greenchart.dcd133bc.svg"},81:function(e,t,a){e.exports=a.p+"static/media/purplechart.cce984ae.svg"},82:function(e,t,a){e.exports={Boxes:"Boxes_Boxes__1hXkX"}},85:function(e,t,a){e.exports={Graph:"Graph_Graph__1Sqyi"}},86:function(e,t,a){e.exports={MainPage:"MainPage_MainPage__3cp2k"}},88:function(e,t,a){e.exports={errDiv:"ErrorDiv_errDiv__3-W_o"}},89:function(e,t,a){e.exports=a.p+"static/media/wemos.4187a81e.jpg"},91:function(e,t,a){e.exports=a(208)},96:function(e,t,a){}},[[91,1,2]]]);
//# sourceMappingURL=main.7ea6f829.chunk.js.map