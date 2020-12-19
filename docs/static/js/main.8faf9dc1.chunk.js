(this["webpackJsonprootzjs-org"]=this["webpackJsonprootzjs-org"]||[]).push([[0],{365:function(e,t,o){},366:function(e,t,o){"use strict";o.r(t);var a=o(2),n=o(0),i=o.n(n),r=o(11),c=o.n(r),s=o(8),l=o(12),d=o(14),p=o(394),b=o(367),g=o(397),h=o(25),j=o(399),u=o(417),m=o(416),x=o(401),O=o(402),f=o(419),v=o(400),y=o(59),C=o(403),k=o(404),N=o(405),S=o(418),w=o(406),E=o(13),R=o(24),T=o(407),A=o(408),D=o(409),z=o(410),B=o(411),F=o(412),I=o(413),M="#465565",L="#00D4BE",W={TYPE:"dark",TEXT:{"00":"#FFFFFF",10:"#F8F9FA",20:"#E2E5E7",30:"#D2D9DF",40:"#BAC4CC",50:"#8B9BA7",60:"#6B7E8D",70:"#566978",80:"#485B6A",90:"#273540"},BACKGROUND:{"00":"#162330",10:"#233240",20:"#111a24",30:"#444444",none:"transparent"},REVERSE:{BACKGROUND:{"00":"#FFFFFF",10:"#DDDDDD",20:"#888888",30:"#444444",none:"transparent"}},SHADOW:{"00":"0px 1px 3px 0px rgb(0 0 0)",10:"0px 1px 3px 2px rgba(0,0,0,0.7)",20:"0px 1px 3px 1px rgba(0,0,0,0.05)"},CHART:{"00":"#44757a"}},_={TYPE:"light",TEXT:{"00":"#000000",10:"#303B48",20:"#465465",30:"#627788",40:"#788C9C",50:"#627788",60:"#ABB3BD",70:"#C7D0D8",80:"#DADFE4",90:"#E6EAEF"},BACKGROUND:{"00":"#FFFFFF",10:"#EFF1F3",20:"#FFFFFF",30:"#DFE3E6",none:"transparent"},REVERSE:{BACKGROUND:{"00":"#0F0F1E",10:"#444444",20:"#888888",30:"#DDDDDD",none:"transparent"}},SHADOW:{"00":"0px 1px 3px 0px rgba(103,123,140,0.25)",10:"0px 1px 3px 2px rgba(103,123,140,0.1)",20:"0px 1px 3px 1px rgba(103,123,140,0.05)"},CHART:{"00":"#EAFFFF"}},P={theme:W.TYPE,palette:{primary:{main:M},secondary:{main:L}},text:W.TEXT,background:W.BACKGROUND,reverse:{background:W.REVERSE.BACKGROUND},shadow:W.SHADOW,chart:W.CHART},U={theme:_.TYPE,palette:{primary:{main:M},secondary:{main:L}},text:_.TEXT,background:_.BACKGROUND,reverse:{background:_.REVERSE.BACKGROUND},shadow:_.SHADOW,chart:_.CHART},H={PRIMARY:{fontSize:17,padding:"5px 15px",color:"#FFFFFF"},SECONDARY:{fontSize:17,color:M,padding:"5px 15px",backgroundColor:"#EEEEEE"}},G={light:U,dark:P},K=function(e){return{divider:{"00":{backgroundColor:G[e].text[80]},10:{backgroundColor:G[e].text[80],margin:"1px 12px 1px"}},verticalDivider:{"00":{width:1,height:"auto",margin:"8px 4px",alignSelf:"stretch",backgroundColor:G[e].text[80]},10:{width:1,height:"80%",margin:"8px 4px",alignSelf:"stretch",backgroundColor:G[e].text[80]}},animation:{smoothRollUp:"smoothRollUp 1s ease-out both;"},ellipsis:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},checkbox:{"& .MuiButtonBase-root":{color:G[e].text[50]},"& .Mui-checked":{color:G[e].palette.primary.main}},typography:{fontFamily:["Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'],body1:{fontSize:17,fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'},h6:{fontSize:15,fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'}},btn:{primary:H.PRIMARY,secondary:H.SECONDARY},icons:{size:{primary:{fontSize:18}}},isMobile:/Android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}},J=o(103),Y=o(414),V=function(e,t){return"light"===e?Object(J.a)(Object(d.a)(Object(d.a)({},U),K(e))):"dark"===e?Object(J.a)(Object(d.a)(Object(d.a)({},P),K(e))):Object(J.a)(Object(d.a)(Object(d.a)({},U),K(e)))},X=function(e){var t=e.children,o=e.theme;e.forComponent;return Object(a.jsx)(Y.a,{theme:V(o),children:t})},Z=o(15),q=Object(T.a)((function(e){return{root:{display:"flex",width:e.isMobile?0:325},toolbar:{minHeight:50},divider:{flexShrink:0,backgroundImage:"linear-gradient(to right, ".concat(e.background[10],", ").concat(Object(E.b)(e.text[20],.12),", ").concat(e.background[10],")")},dividerMain:{flexShrink:0,backgroundColor:e.text[80]},drawerPaper:{width:250,borderRight:"none",color:e.text[10],backgroundColor:e.background["00"]},drawerPaperMobile:{width:"75%",backgroundColor:e.background[10],color:e.text[10],border:"none"},icons:{color:e.text[30],minWidth:40},iconSvg:{width:40,fontSize:20},iconRemove:{fontSize:11},listItem:{padding:"4px 0 4px 40px","&:hover":{backgroundColor:Object(E.b)(e.text[80],.5)}},activeSection:{borderRight:"solid 4px ".concat(e.palette.secondary.main),backgroundColor:Object(E.b)(e.palette.secondary.main,.1),"&:hover":{backgroundColor:Object(E.b)(e.text[80],.5)},"& svg":{fill:e.palette.primary.main},"& span":{fontWeight:"bold",color:e.text[10]}},sectionText:{margin:0,color:e.text[10],"& span":{fontSize:15}},sectionTextHeader:{paddingLeft:24,margin:"12px 0 0",lineHeight:"30px",fontWeight:"bold",color:e.text[50],textTransform:"uppercase","& span":{fontSize:13}},listItemLabelButton:{cursor:"pointer",color:e.palette.primary.main,paddingLeft:11},listSubHeader:{color:e.text[50],fontSize:e.typography.body1.fontSize},addIconButton:{textTransform:"Capitalize",color:e.palette.primary.main,padding:7},addDynamicName:{fontSize:14,color:e.text[10]},buttonRemove:{padding:5,minWidth:"auto"},logoContainer:{flex:1,width:"70%",alignItems:"center",display:"inline-flex"},closeContainer:{display:"inline-flex",alignItems:"center"},iconContainer:{padding:"2px 0 1px 0",color:e.text[10]},title:{display:"inline-flex",fontSize:17,color:e.palette.secondary.main,marginLeft:10,fontWeight:400,alignItems:"center"},titleMobileExtraCss:{flex:1},logo:{height:e.isMobile?35:20,display:"inline-flex","& svg":{color:e.text[50]}},logoSectionDrawer:{display:"flex",padding:"5px 15px",backgroundColor:e.background[20]},rotateIcon90deg:{transform:"rotate(135deg)"},drawerFooter:{flex:0,display:"flex",marginBottom:25},drawerBody:{flex:1,display:"flex",flexDirection:"column"},drawerMobileContainer:{height:"100%",display:"flex",flexDirection:"column",backgroundColor:e.background["00"]}}})),Q=Object(l.createNode)("DrawerSections",(function(e){var t=e.props,o=e.actions,n=q();return Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)("div",{className:n.drawerBody,children:t.sections.map((function(e,i){return Object(a.jsx)(p.a,{subheader:Object(a.jsx)(N.a,{component:"div",className:n.sectionTextHeader,children:e.id}),children:e.subSections.map((function(e,i){var r=t.comminSoon.includes(e);return Object(a.jsx)(f.a,{button:!0,disabled:r,onClick:function(){return o.ON_SECTION_CLICK(e,t.history)},className:"".concat(n.listItem," ").concat(t.activeSection===e&&n.activeSection),children:Object(a.jsx)(k.a,{className:n.sectionText,primary:"".concat(e," ").concat(r?"(premiere)":"")})},e+i)}))},e.id+i)}))}),Object(a.jsx)("div",{className:n.drawerFooter})]})})),$=Object(s.a)(Q,2),ee=$[0],te=$[1];ee.useContract("AppDrawer","ON_SECTION_CLICK",(function(e,t){var o=Object(s.a)(t,2),a=o[0];return o[1].push(a.toLowerCase().replace(/ /g,"-")),{isMenuOpen:!1,activeSection:a}}));var oe=te(ee),ae=o.p+"static/media/logo.ebb39433.svg",ne=o.p+"static/media/title.48451029.svg",ie=o.p+"static/media/logoDark.ebb39433.svg",re=o.p+"static/media/titleDark.135f7169.svg",ce=Object(l.createNode)("MobileSection",(function(e){var t=e.props,o=e.actions,n=q(),i=t.isLight;return Object(a.jsxs)("div",{className:n.drawerMobileContainer,role:"presentation",children:[Object(a.jsxs)("div",{className:n.logoSectionDrawer,children:[Object(a.jsx)("div",{className:n.logoContainer,children:Object(a.jsxs)(v.a,{className:n.iconContainer,disabled:!0,children:[Object(a.jsx)("img",{alt:"logo",className:n.logo,src:i?ae:ie}),Object(a.jsx)("img",{alt:"logo",className:n.logoTitle,src:i?ne:re})]})}),Object(a.jsx)("div",{className:n.closeContainer,children:Object(a.jsx)(v.a,{className:n.iconContainer,onClick:o.ON_CLOSE_CLICK,children:Object(a.jsx)(D.a,{})})})]}),Object(a.jsx)(O.a,{className:n.dividerMain}),Object(a.jsx)(oe,Object(d.a)({},t))]})})),se=Object(s.a)(ce,2),le=se[0],de=se[1];le.useContract("AppDrawer","ON_CLOSE_CLICK",{isMenuOpen:!1});var pe=de(le),be=Object(l.createNode)("AppDrawer",(function(e){var t=e.props,o=e.state,n=e.actions,i=q(),r=Object(R.a)(),c="light"===t.theme;return Object(a.jsx)("div",{className:i.root,children:r.isMobile?Object(a.jsx)(S.a,{className:i.drawer,open:o.isMenuOpen,onOpen:n.ON_MENU_OPEN,onClose:n.ON_MENU_CLOSE,classes:{paper:i.drawerPaperMobile},children:Object(a.jsx)(pe,Object(d.a)({history:t.history,isLight:c},o))}):Object(a.jsxs)(h.a,{className:i.drawer,variant:"permanent",classes:{paper:i.drawerPaper},children:[Object(a.jsx)("div",{className:i.toolbar}),Object(a.jsx)(oe,Object(d.a)({history:t.history},o))]})})})),ge=Object(s.a)(be,2),he=ge[0],je=ge[1];he.state({isMenuOpen:!1,activeSection:"Introduction",sections:[{id:"Getting Started",subSections:["Introduction","Installation","Thinking Rootz"]},{id:"Concepts",subSections:["Nodes","State","Actions","Contract"]},{id:"Workbook",subSections:["Overview","App Structure","App Flow","Go Async","With Data","Performance"]}],comminSoon:["Impact","Timelines"]}),he.useAction("ON_MENU_OPEN",{isMenuOpen:!0}),he.useAction("ON_MENU_CLOSE",{isMenuOpen:!1});var ue=Object(Z.f)(je(he)),me=o(33),xe=Object(T.a)((function(e){var t,o;return{root:{display:"flex"},appBar:{boxShadow:"none",zIndex:e.zIndex.drawer+1,backgroundColor:e.background[20],borderBottom:"solid 1px ".concat(e.text[90])},divider:e.divider["00"],dividerVertical:e.verticalDivider["00"],checkbox:{marginLeft:20},logoContainer:{flex:1,marginRight:10,"& button":{padding:"5px 0 0 0"}},logo:(t={height:30,marginRight:5,marginBottom:3,cursor:"pointer"},Object(me.a)(t,e.breakpoints.up("sm"),{display:"block"}),Object(me.a)(t,"& svg",{color:e.text[50]}),t),logoTitle:(o={height:"auto",marginBottom:4,cursor:"pointer"},Object(me.a)(o,e.breakpoints.up("sm"),{display:"block"}),Object(me.a)(o,"& svg",{color:e.text[50]}),o),search:Object(me.a)({width:"100%",marginLeft:0,marginRight:10,position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(E.b)(e.background[10],.8),"&:hover":{backgroundColor:e.background[10]}},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{height:"100%",display:"flex",alignItems:"center",position:"absolute",pointerEvents:"none",color:e.text[50],width:e.spacing(7),justifyContent:"center","& svg":{fontSize:18}},inputRoot:{color:e.text["00"]},inputInput:Object(me.a)({fontSize:13,width:"100%",padding:e.spacing(1,1,1,7),transition:e.transitions.create("width")},e.breakpoints.up("sm"),{width:"35vw","&:focus":{width:"40vw",backgroundColor:e.background[10]}}),themeTogglerFab:{width:25,height:25,opacity:.1,minHeight:25},themeTogglerDay:Object(d.a)(Object(d.a)({},e.btn.primary),{},{padding:2,fontSize:16,borderRadius:15,transform:"rotate(120deg)",color:e.background["00"],backgroundColor:e.reverse.background["00"]}),themeTogglerNight:Object(d.a)(Object(d.a)({},e.btn.primary),{},{padding:2,fontSize:16,borderRadius:15,transform:"rotate(120deg)",color:e.reverse.background["00"],backgroundColor:e.palette.primary.main}),menuTabs:{minHeight:20,backgroundColor:e.background[10],"& button":{minHeight:20,color:e.text[30],textTransform:"Capitalize",fontSize:e.typography.body1.fontSize}},iconButton:{padding:5,margin:"0px 7px",color:e.text[60],"&:hover":{color:e.palette.primary.main,backgroundColor:Object(E.b)(e.palette.primary.main,.1)}},popoverIN:{color:e.text[30],backgroundColor:e.background["00"],"& ul>li:hover":{color:e.text[10],backgroundColor:e.background[10]}},iconFacebook:{height:25},hamburger:{color:e.text[10],padding:7},copyMenuWrapper:{padding:0},copyMenuPaper:{padding:0,boxShadow:e.shadow[10],backgroundColor:e.background["00"],"& ul":{padding:0}},copyMenuContainer:{display:"flex",padding:0,alignItems:"center",outline:"none","& svg":{outline:"none",margin:"5px 15px",color:e.palette.primary.main}},link:{marginLeft:15,color:e.text[30]},lblCopied:{padding:10,marginLeft:10,color:"#31636E",backgroundColor:"#BFE0D6",textTransform:"capitalize","&:hover":{backgroundColor:"#BFE0D6"}}}})),Oe=Object(l.createNode)("ThemeToggler",(function(e){var t=e.props,o=xe();return Object(a.jsx)(m.a,{title:"toggle to ".concat(t.isLight?"dark":"light"," theme"),children:Object(a.jsx)(u.a,{size:"small",color:"primary",checked:!t.isLight,className:o.checkbox,onChange:t.onToggle,icon:Object(a.jsx)(B.a,{className:o.themeTogglerDay}),checkedIcon:Object(a.jsx)(z.a,{className:o.themeTogglerNight}),classes:{track:o.checkBoxTrack}})})})),fe=Object(s.a)(Oe,2),ve=fe[0],ye=(0,fe[1])(ve),Ce=Object(l.createNode)("MobileToolbar",(function(e){var t=e.actions,o=xe();return Object(a.jsx)("div",{className:o.logoContainer,children:Object(a.jsx)(m.a,{title:"open filter section",children:Object(a.jsx)(v.a,{component:"span",className:o.hamburger,onClick:t.ON_APP_DRAWER_MENU_OPEN,children:Object(a.jsx)(A.a,{})})})})})),ke=Object(s.a)(Ce,2),Ne=ke[0],Se=ke[1];Ne.useContract("AppDrawer","ON_APP_DRAWER_MENU_OPEN",{isMenuOpen:!0});var we=Se(Ne),Ee=Object(l.createNode)("DesktopToolbar",(function(e){var t=e.props,o=xe(),n=t.isLight;return Object(a.jsx)(i.a.Fragment,{children:Object(a.jsx)("div",{className:o.logoContainer,children:Object(a.jsxs)(v.a,{className:o.iconContainer,disabled:!0,children:[Object(a.jsx)("img",{alt:"logo",className:o.logo,src:n?ae:ie}),Object(a.jsx)("img",{alt:"logo",className:o.logoTitle,src:n?ne:re})]})})})})),Re=Object(s.a)(Ee,2),Te=Re[0],Ae=(0,Re[1])(Te),De=Object(l.createNode)("AppHeader",(function(e){var t=e.props,o=e.actions,n=xe(),i=Object(R.a)(),r="light"===t.theme;return Object(a.jsx)("div",{className:n.root,children:Object(a.jsx)(w.a,{value:t.history.location.pathname,children:Object(a.jsx)(j.a,{position:"fixed",color:"primary",className:n.appBar,children:Object(a.jsxs)(x.a,{variant:"dense",children:[i.isMobile?Object(a.jsx)(we,{}):Object(a.jsx)(Ae,{isLight:r}),Object(a.jsx)(ye,{isLight:r,onToggle:o.ON_THEME_CHANGE})]})})})})})),ze=Object(s.a)(De,2),Be=ze[0],Fe=ze[1];Be.useContract("AppMaster","ON_THEME_CHANGE",(function(e,t){return{theme:Object(s.a)(t,1)[0].target.checked?"dark":"light"}}));var Ie=Object(Z.f)(Fe(Be)),Me=o(95),Le=o(96),We=o(105),_e=o(104),Pe=function(e){Object(We.a)(o,e);var t=Object(_e.a)(o);function o(){return Object(Me.a)(this,o),t.apply(this,arguments)}return Object(Le.a)(o,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&document.getElementById("masterPage").scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),o}(i.a.Component),Ue=Object(Z.f)(Pe),He=Object(T.a)((function(e){return{root:{width:"100vw",height:"100vh"},oopsSomethingWentWrongContianer:{justifyContent:"center",alignItems:"center",display:"flex",marginTop:50,backgroundColor:"inherit"},logo:{height:"65vh",marginLeft:40},errorTextTitleContainer:{width:"100vw",display:"flex",justifyContent:"center",flexDirection:"row",flexWrap:"wrap",textAlign:"center",marginBottom:30},title:{fontWeight:"bold",fontSize:25,color:e.text[10],flex:"0 1 100%",marginBottom:20},content:{flex:"0 1 50%",color:e.text[30],fontSize:16},btnContainer:{textAlign:"center",padding:10},btnReload:Object(d.a)(Object(d.a)({},e.btn.primary),{},{color:e.text[90],fontSize:14,padding:"7px 27px",margin:7}),btnDetails:{fontSize:14,padding:"7px 27px",margin:7}}})),Ge=o.p+"static/media/somethingWentWrongDark.25bb0b4d.svg",Ke=o.p+"static/media/somethingWentWrongLight.a64d511d.svg",Je="Sorry, something went wrong",Ye="Try reloading the page. We're working hard to fix Prism for you as soon as possible",Ve=function(e){var t=e.onReload,o=e.details,n=He(),i="light"===Object(R.a)().theme;return Object(a.jsxs)("div",{className:n.root,children:[Object(a.jsx)(b.a,{elevation:"0",className:n.oopsSomethingWentWrongContianer,children:Object(a.jsx)("img",{className:n.logo,src:i?Ke:Ge,alt:"logo"})}),Object(a.jsxs)("div",{className:n.errorTextTitleContainer,children:[Object(a.jsx)("div",{className:n.title,children:Je}),Object(a.jsx)("div",{className:n.content,children:Ye})]}),Object(a.jsxs)("div",{className:n.btnContainer,children:[Object(a.jsx)(g.a,{color:"primary",variant:"contained",className:n.btnReload,onClick:t,children:"Reload"}),Object(a.jsx)(g.a,{color:"primary",className:n.btnDetails,onClick:function(){console.log(o)},children:"Details"})]})]})},Xe=o(31),Ze=Object(T.a)((function(e){return{link:{padding:"1px 4px",fontWeight:"bold",color:e.text[10],textDecoration:"none",backgroundColor:Object(E.b)(e.palette.secondary.main,.25),borderBottom:"solid 2px ".concat(e.palette.secondary.main)},button:{fontSize:20,display:"flex",cursor:"pointer",flexDirection:"column",color:e.text["00"],textTransform:"capitalize",padding:e.isMobile?"15px 25px":"15px 50px",margin:e.isMobile?"25px 0 120px":"25px 0 50px",backgroundColor:Object(E.b)(e.palette.secondary.main,.25),"&:hover":{backgroundColor:Object(E.b)(e.palette.secondary.main,.4)}},btnSubLabel:{fontSize:15,color:e.text[30]},buttonContainer:{display:"flex",justifyContent:"space-between"},btnContentWrapper:{display:"flex","& svg":{margin:3}},noteContainer:{fontSize:15,borderRadius:3,padding:"10px 20px",borderLeft:"solid 5px #E4A800",backgroundColor:Object(E.b)("#E4A800",.25)},noteLabel:{marginRight:7,fontWeight:"bold",color:e.text[20]},noteContent:{color:e.text[20]}}})),qe=function(e){var t=e.name,o=e.url,n=Ze();return Object(a.jsx)("a",{className:n.link,href:o,children:t})},Qe=o(415),$e=o(102),et=o(101),tt=function(e){var t=e.isLight,o=e.codeString,n=e.lang,i=Object(R.a)();return Object(a.jsx)(Qe.a,{language:n,customStyle:{fontSize:17,borderRadius:3,padding:"12px 25px",margin:"10px 0 15px",backgroundColor:t?Object(E.b)(i.text[80],1):i.background[20]},style:t?et.a:$e.a,children:o})},ot=Object(l.createNode)("SelfLink",(function(e){var t=e.props,o=e.actions,n=Ze();return Object(a.jsx)("a",{href:!0,className:n.link,style:{cursor:"pointer"},onClick:function(){return o.NAVIGATE_TO(t)},children:t.name})})),at=Object(s.a)(ot,2),nt=at[0],it=at[1];nt.useContract("AppDrawer","NAVIGATE_TO",(function(e,t){var o=Object(s.a)(t,1)[0],a=o.name,n=o.history,i=o.route;return n.push(i),{activeSection:a}}));var rt=Object(Z.f)(it(nt)),ct=Object(l.createNode)("NavigationButton",(function(e){var t=e.props,o=e.actions,n=Ze();return Object(a.jsxs)("div",{className:n.buttonContainer,children:[Object(a.jsxs)("div",{className:n.button,onClick:function(){return o.GOTO_PREVIOUS(t)},style:{alignItems:"flex-end",justifyContent:"flex-start",visibility:t.back?"visible":"hidden"},children:[Object(a.jsx)("div",{className:n.btnSubLabel,style:{},children:"Jump To"}),Object(a.jsxs)("div",{className:n.btnContentWrapper,children:[Object(a.jsx)(I.a,{}),t.back]})]}),Object(a.jsxs)("div",{className:n.button,onClick:function(){return o.GOTO_NEXT(t)},style:{alignItems:"flex-start",justifyContent:"flex-end",visibility:t.next?"visible":"hidden"},children:[Object(a.jsx)("div",{className:n.btnSubLabel,children:"Jump To"}),Object(a.jsxs)("div",{className:n.btnContentWrapper,children:[t.next,Object(a.jsx)(F.a,{})]})]})]})})),st=Object(s.a)(ct,2),lt=st[0],dt=st[1];lt.useContract("AppDrawer","GOTO_NEXT",(function(e,t){var o=Object(s.a)(t,1)[0],a=o.next;return o.history.push("/"+a),{activeSection:a}})),lt.useContract("AppDrawer","GOTO_PREVIOUS",(function(e,t){var o=Object(s.a)(t,1)[0],a=o.back;return o.history.push("/"+a),{activeSection:a}}));var pt=Object(Z.f)(dt(lt)),bt=Object(T.a)((function(e){return{root:{margin:e.isMobile?10:"25px 75px",width:"100%","& > p":{marginTop:25,color:e.text["00"]},"& li>p":{marginTop:20,color:e.text["00"]},"& ul > li":{color:e.text["00"]}},divider:{flexShrink:0,backgroundColor:e.text[80]},pageTitle:{fontSize:60,fontWeight:"bold",margin:"25px 0 15px",color:e.text[20]},contentTitle:{fontSize:35,marginTop:40,fontWeight:"bold",color:e.text[20]}}})),gt="npx create-react-app my-app --template rootzjs",ht="npm install \u2014-save @rootzjs/core",jt="yarn add --dev @rootzjs/core",ut=Object(l.createNode)("IntroductionSection",(function(e){var t=e.props,o=bt(),n="light"===t.theme;return Object(a.jsxs)("div",{className:o.root,children:[Object(a.jsx)("div",{className:o.pageTitle,children:"Introduction"}),Object(a.jsx)(y.a,{variant:"body1",gutterBottom:!0,children:"Rootz JS is a state management tool for React apps."}),Object(a.jsxs)(y.a,{variant:"body1",gutterBottom:!0,children:["It follows a  ",Object(a.jsx)(qe,{name:"structural-functional",url:"https://en.wikipedia.org/wiki/Structural_functionalism"})," paradigm, which sees your application as a set of Nodes interconnected through definitive set of actions, defined during the application building process. Each action defines the change of state of the Node it is written within or written for. All the Nodes abide by these actions resulting into expected application's behaviour."]}),Object(a.jsx)(y.a,{variant:"body1",gutterBottom:!0,children:"This makes it easy to manage the state of your application. Another way of looking at this is, it helps you manage the data you display and how you respond to user actions. It helps you to view your application state as a whole at any point during application run."}),Object(a.jsx)(y.a,{variant:"body1",gutterBottom:!0,children:"Rootz, helps you write applications with complete hold over its state. This makes it possible for you to monitor changes happening at each component level. "}),Object(a.jsxs)(y.a,{variant:"body1",gutterBottom:!0,children:["Rootz is just over ",Object(a.jsx)(qe,{name:"2kb",url:"https://www.npmjs.com/package/@rootzjs/core"}),", including dependencies."]}),Object(a.jsx)("div",{className:o.contentTitle,children:"Create a React-Rootz App"}),Object(a.jsxs)(y.a,{variant:"body1",gutterBottom:!0,children:["The recommeded way to use Rootz in a React application is by using the official ",Object(a.jsx)(qe,{name:"Rootz JS",url:"https://github.com/rootzjs/cra-template-rootzjs"})," template for ",Object(a.jsx)(qe,{name:"create-react-app",url:"https://github.com/facebook/create-react-app"}),"."]}),Object(a.jsx)(tt,{lang:"git",isLight:n,codeString:gt}),Object(a.jsx)(y.a,{variant:"body1",gutterBottom:!0,children:"To install the core library with npm:"}),Object(a.jsx)(tt,{lang:"git",isLight:n,codeString:ht}),Object(a.jsx)(y.a,{variant:"body1",gutterBottom:!0,children:"with yarn:"}),Object(a.jsx)(tt,{lang:"git",isLight:n,codeString:jt}),Object(a.jsx)("div",{className:o.contentTitle,children:"Why Rootz?"}),Object(a.jsx)(y.a,{variant:"body1",gutterBottom:!0,children:"Rootz, provides a definitive structure to your application and its state, by which you achieve better lines of code (LOC) to behaviour ratio. This helps you to achieve expected behaviour of your application with minimal LOC. "}),Object(a.jsxs)(y.a,{variant:"body1",gutterBottom:!0,children:["The behaviour of the application is contributed by the",Object(a.jsx)(rt,{name:"State",route:"/state"}),"and the",Object(a.jsx)(rt,{name:"Actions",route:"/actions"}),"defined. States being a simple JavaScript object, while actions are result of built in boilerplate methods which concludes in ease of use with minimal learning curve."]}),Object(a.jsx)("div",{className:o.contentTitle,children:"When to use Rootz?"}),Object(a.jsx)(y.a,{variant:"body1",gutterBottom:!0,children:"Using Rootz is beneficial when:"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(y.a,{variant:"body1",gutterBottom:!0,children:"Multiple components of an application has inter-component-state dependencies."})}),Object(a.jsx)("li",{children:Object(a.jsx)(y.a,{variant:"body1",gutterBottom:!0,children:"Applications having reasonable data change / update over time."})}),Object(a.jsx)("li",{children:Object(a.jsx)(y.a,{variant:"body1",gutterBottom:!0,children:"Scenario, where too much dependencies are imposed on a single component. Making it difficult to manage updates."})})]}),Object(a.jsx)(y.a,{variant:"body1",gutterBottom:!0,children:"Nevertheless Rootz can be used with any React Application, adopting any use cases. It not only manages the state but also helps in structuring the application for better long term maintainability and easy debugging. With just over 2KB (including dependencies) it contributes to benefit almost any application with performance constraints. "}),Object(a.jsx)(pt,{back:"",next:"Installation"})]})})),mt=Object(s.a)(ut,2),xt=mt[0],Ot=mt[1],ft=Object(Z.f)(Ot(xt)),vt=function(e){var t=e.content,o=Ze();return Object(a.jsxs)("div",{className:o.noteContainer,children:[Object(a.jsx)("span",{className:o.noteLabel,children:"Note:"}),Object(a.jsx)("span",{className:o.noteContent,children:t})]})},yt="npx create-react-app my-app --template rootzjs",Ct="npm install \u2014-save @rootzjs/core",kt="yarn add --dev @rootzjs/core",Nt="cd /PATH/TO/YOUR/REACT_ROOTZ_APP\nnpm run start",St=Object(l.createNode)("InstallationSection",(function(e){var t=e.props,o=bt(),n="light"===t.theme;return Object(a.jsxs)("div",{className:o.root,children:[Object(a.jsx)("div",{className:o.pageTitle,children:"Installation"}),Object(a.jsxs)(y.a,{variant:"body1",gutterBottom:!0,children:["React-Rootz applications can be created by using the official ",Object(a.jsx)(qe,{name:"Rootz JS",url:"https://github.com/rootzjs/cra-template-rootzjs"})," template for ",Object(a.jsx)(qe,{name:"create-react-app",url:"https://github.com/facebook/create-react-app"}),". This is the recommended way to use Rootz in React applications. As this takes the advantage of Rootz integration with React components."]}),Object(a.jsx)(tt,{lang:"git",isLight:n,codeString:yt}),Object(a.jsx)(y.a,{variant:"body1",gutterBottom:!0,children:"To install the core library with npm:"}),Object(a.jsx)(tt,{lang:"git",isLight:n,codeString:Ct}),Object(a.jsx)(y.a,{variant:"body1",gutterBottom:!0,children:"with yarn:"}),Object(a.jsx)(tt,{lang:"git",isLight:n,codeString:kt}),Object(a.jsx)("div",{className:o.contentTitle,children:"Post Installation"}),Object(a.jsx)(y.a,{variant:"body1",gutterBottom:!0,children:"Once the React-Rootz application is installed, run command:"}),Object(a.jsx)(tt,{lang:"git",isLight:n,codeString:Nt}),Object(a.jsx)(vt,{content:"This is considering you have used Rootz JS template to create your application."}),Object(a.jsx)(y.a,{variant:"body1",gutterBottom:!0,children:"A splash page would be rendered post app start. Now you are all set to create great apps with Rootz JS :)"}),Object(a.jsx)(pt,{back:"Introduction",next:"Thinking Rootz"})]})})),wt=Object(s.a)(St,2),Et=wt[0],Rt=wt[1],Tt=Object(Z.f)(Rt(Et)),At=Object(T.a)((function(e){return{root:{width:"100vw",display:"flex",height:"100vh",backgroundColor:e.background[10]},playgroundMasterContainer:{marginTop:48,width:"100%",display:"flex",overflowY:"auto",justifyContent:"center",height:"calc(100% - 50px)",backgroundColor:e.background[10],marginBottom:e.isMobile?50:0,padding:e.isMobile?"0 15px 48px 15px":"","& h1":{fontSize:15,fontWeight:"normal",color:e.text[50]}},oopsSomethingWentWrongContianer:{}}})),Dt=function(e){var t=At();return Object(a.jsx)(Xe.a,{children:Object(a.jsx)(Ue,{children:Object(a.jsxs)("div",{className:t.root,children:[Object(a.jsx)(C.a,{}),Object(a.jsx)(Ie,{noIcons:!1,theme:e.theme,config:e.config}),Object(a.jsx)(ue,{theme:e.theme}),Object(a.jsxs)("div",{id:"masterPage",className:t.playgroundMasterContainer,children:[Object(a.jsx)(Z.b,{exact:!0,path:"/Introduction",component:function(){return Object(a.jsx)(ft,{theme:e.theme})}}),Object(a.jsx)(Z.b,{exact:!0,path:"/Installation",component:function(){return Object(a.jsx)(Tt,{theme:e.theme})}}),Object(a.jsx)(Z.b,{exact:!0,path:"/",render:function(){return Object(a.jsx)(Z.a,{to:"/Introduction"})}})]}),e.didSomethingWentWrong?Object(a.jsx)(Ve,{details:e.errorDetails,onReload:function(){window.location.reload(!0)}}):Object(a.jsx)(i.a.Fragment,{})]})})})},zt=Object(l.createNode)("AppMaster",(function(e){var t=e.props,o=e.state;e.actions;return Object(a.jsx)(X,{theme:o.theme,forComponent:"APP",children:Object(a.jsx)(Dt,Object(d.a)(Object(d.a)({},t),o))})})),Bt=Object(s.a)(zt,2),Ft=Bt[0],It=Bt[1];Ft.state({theme:"dark",errorDetails:"",isAuthenticated:!1,didSomethingWentWrong:!1}),Ft.useAction("ON_ERROR_OCCURED",(function(e,t){var o=Object(s.a)(t,2),a=o[0];o[1];return{didSomethingWentWrong:!0,errorDetails:a||"error"}}));var Mt=It(Ft),Lt=(o(365),function(){return Object(a.jsx)(Mt,{})});c.a.render(Object(a.jsx)(Lt,{}),document.getElementById("rootzjs-org-root"))}},[[366,1,2]]]);
//# sourceMappingURL=main.8faf9dc1.chunk.js.map