(this["webpackJsonprootzjs-org"]=this["webpackJsonprootzjs-org"]||[]).push([[14],{144:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n(7),i=Object(o.y)((function(e){return{link:{padding:"1px 4px",fontWeight:"bold",color:e.text[10],textDecoration:"none",backgroundColor:Object(o.x)(e.palette.secondary.main,.25),borderBottom:"solid 2px ".concat(e.palette.secondary.main)},button:{fontSize:20,display:"flex",cursor:"pointer",flexDirection:"column",color:e.text["00"],textTransform:"capitalize",padding:e.isMobile?"15px 25px":"15px 50px",margin:e.isMobile?"25px 0 120px":"25px 0 50px",backgroundColor:Object(o.x)(e.palette.secondary.main,.25),"&:hover":{backgroundColor:Object(o.x)(e.palette.secondary.main,.4)}},btnSubLabel:{fontSize:15,color:e.text[30]},buttonContainer:{display:"flex",justifyContent:"space-between"},btnContentWrapper:{display:"flex","& svg":{margin:3}},noteContainer:{fontSize:17,borderRadius:3,margin:"40px 0",padding:"10px 20px",borderLeft:"solid 7px #E4A800",backgroundColor:Object(o.x)("#E4A800",.25)},noteContainerAttention:{fontSize:17,borderRadius:3,margin:"40px 0",padding:"10px 20px",borderLeft:"solid 7px #E44100",backgroundColor:Object(o.x)("#E44100",.25)},noteContainerInfo:{fontSize:17,borderRadius:3,margin:"40px 0",padding:"10px 20px",borderLeft:"solid 7px #00BDE4",backgroundColor:Object(o.x)("#00BDE4",.25)},noteLabel:{marginRight:7,fontWeight:"bold",color:e.text[20]},noteContent:{color:e.text[20]},noteContentLink:{display:"block",margin:"25px 0 15px","& li":{margin:10}},embedCode:{margin:"10px 0 25px"},hasLinkContainer:{marginTop:40,display:"flex",alignItems:"center","& a":{flex:1,display:"flex"},"&:hover svg":{display:"inline-flex"}},hashLinkIcon:{display:"none",margin:"0 10px",fontSize:"3vmin",position:"relative",marginLeft:"calc(-3vmin - 10px)",color:e.palette.secondary.main}}}))},145:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n(7),i=Object(o.y)((function(e){return{root:{margin:e.isMobile?10:"25px 75px",width:"100%","& > p":{marginTop:25,lineHeight:1.75,color:e.text["00"]},"& li>p":{marginTop:20,color:e.text["00"]},"& ul > li":{color:e.text["00"]},"& code":{borderRadius:2,padding:"2px 7px",color:e.text["00"],backgroundColor:Object(o.x)("#E4A800",.25)}},divider:{flexShrink:0,backgroundColor:e.text[80]},pageTitle:{fontSize:60,fontWeight:"bold",margin:"25px 0 15px",color:e.text[20],textDecoration:"auto"},contentTitle:{fontSize:35,fontWeight:"bold",color:e.text[20],textDecoration:"auto",borderBottom:"solid 2px ".concat(e.text[50])},contentSubTitle:{fontSize:28,fontWeight:"bold",color:e.text[30],textDecoration:"auto"},codeHeadLabel:{fontSize:20,marginTop:40,fontWeight:"bold",color:e.text[40],textDecoration:"auto"},logo:{width:"90vmin"},logoContract:{height:"60vmin"},codeHeadIcon:{fontSize:22,marginRight:10,color:"#E4A800"},imgWrapper:{display:"flex",backgroundColor:e.background[10]}}}))},146:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.genericHashLink=m,t.NavHashLink=t.HashLink=void 0;var o=a(n(0)),i=a(n(5)),r=n(45);function a(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var d="",b=null,u=null,j=null;function h(){d="",null!==b&&b.disconnect(),null!==u&&(window.clearTimeout(u),u=null)}function p(e){return["BUTTON","INPUT","SELECT","TEXTAREA"].includes(e.tagName)&&!e.hasAttribute("disabled")||["A","AREA"].includes(e.tagName)&&e.hasAttribute("href")}function x(){var e=null;if("#"===d)e=document.body;else{var t=d.replace("#","");null===(e=document.getElementById(t))&&"#top"===d&&(e=document.body)}if(null!==e){j(e);var n=e.getAttribute("tabindex");return null!==n||p(e)||e.setAttribute("tabindex",-1),e.focus({preventScroll:!0}),null!==n||p(e)||(e.blur(),e.removeAttribute("tabindex")),h(),!0}return!1}function m(e){return o.default.forwardRef((function(t,n){var i="";"string"===typeof t.to&&t.to.includes("#")?i="#".concat(t.to.split("#").slice(1).join("#")):"object"===l(t.to)&&"string"===typeof t.to.hash&&(i=t.to.hash);var a={};e===r.NavLink&&(a.isActive=function(e,t){return e&&e.isExact&&t.hash===i});t.scroll,t.smooth,t.timeout,t.elementId;var p=s(t,["scroll","smooth","timeout","elementId"]);return o.default.createElement(e,c({},a,p,{onClick:function(e){h(),d=t.elementId?"#".concat(t.elementId):i,t.onClick&&t.onClick(e),""!==d&&(j=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},function(e){window.setTimeout((function(){!1===x()&&(null===b&&(b=new MutationObserver(x)),b.observe(document,{attributes:!0,childList:!0,subtree:!0}),u=window.setTimeout((function(){h()}),e||1e4))}),0)}(t.timeout))},ref:n}),t.children)}))}var f=m(r.Link);t.HashLink=f;var O=m(r.NavLink);t.NavHashLink=O;var g={onClick:i.default.func,children:i.default.node,scroll:i.default.func,timeout:i.default.number,elementId:i.default.string,to:i.default.oneOfType([i.default.string,i.default.object])};f.propTypes=g,O.propTypes=g},147:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var o=n(25),i=n(31),r=n(12),a=n(2),c=(n(0),n(144)),s=n(7),l=Object(i.createNode)("NavigationButton",(function(e){var t=e.props,n=e.actions,o=Object(c.a)();return Object(a.jsxs)("div",{className:o.buttonContainer,children:[Object(a.jsxs)("div",{className:o.button,onClick:function(){return n.GOTO_PREVIOUS(t)},style:{alignItems:"flex-end",justifyContent:"flex-start",visibility:t.back?"visible":"hidden"},children:[Object(a.jsx)("div",{className:o.btnSubLabel,style:{},children:"Jump To"}),Object(a.jsxs)("div",{className:o.btnContentWrapper,children:[Object(a.jsx)(s.p,{}),t.back]})]}),Object(a.jsxs)("div",{className:o.button,onClick:function(){return n.GOTO_NEXT(t)},style:{alignItems:"flex-start",justifyContent:"flex-end",visibility:t.next?"visible":"hidden"},children:[Object(a.jsx)("div",{className:o.btnSubLabel,children:"Jump To"}),Object(a.jsxs)("div",{className:o.btnContentWrapper,children:[t.next,Object(a.jsx)(s.q,{})]})]})]})})),d=Object(o.a)(l,2),b=d[0],u=d[1];b.useContract("AppDrawer","GOTO_NEXT",(function(e,t){var n=Object(o.a)(t,1)[0],i=n.next;return n.history.push("/"+i.toLowerCase().replace(/ /g,"-")),{activeSection:i}})),b.useContract("AppDrawer","GOTO_PREVIOUS",(function(e,t){var n=Object(o.a)(t,1)[0],i=n.back;return n.history.push("/"+i.toLowerCase().replace(/ /g,"-")),{activeSection:i}}));var j=Object(r.o)(u(b))},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(2),i=(n(0),n(144)),r=function(e){var t=e.content,n=e.type,r=void 0===n?"note":n,a=e.children,c=Object(i.a)();switch(r){case"note":return Object(o.jsxs)("div",{className:c.noteContainer,children:[Object(o.jsx)("span",{className:c.noteLabel,children:"Note:"}),Object(o.jsx)("span",{className:c.noteContent,children:t}),a&&Object(o.jsx)("span",{className:c.noteContentLink,children:a})]});case"attention":return Object(o.jsxs)("div",{className:c.noteContainerAttention,children:[Object(o.jsx)("span",{className:c.noteLabel,children:"Attention:"}),Object(o.jsx)("span",{className:c.noteContent,children:t}),a&&Object(o.jsx)("span",{className:c.noteContentLink,children:a})]});case"info":return Object(o.jsxs)("div",{className:c.noteContainerInfo,children:[Object(o.jsx)("span",{className:c.noteLabel,children:"Info:"}),Object(o.jsx)("span",{className:c.noteContent,children:t}),a&&Object(o.jsx)("span",{className:c.noteContentLink,children:a})]});default:return Object(o.jsxs)("div",{className:c.noteContainer,children:[Object(o.jsx)("span",{className:c.noteLabel,children:"Note:"}),Object(o.jsx)("span",{className:c.noteContent,children:t}),a&&Object(o.jsx)("span",{className:c.noteContentLink,children:a})]})}}},150:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var o=n(25),i=n(31),r=n(2),a=n(13);function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}n(0);var s=n(7),l=n(146),d=n(144),b=Object(i.createNode)("HashLink",(function(e){var t=e.props,n=Object(d.a)(),o=t.children,i=c(t,["children"]),b=window.location.pathname;return Object(r.jsxs)("div",{className:n.hasLinkContainer,children:[Object(r.jsx)(s.j,{className:n.hashLinkIcon}),Object(r.jsx)(l.HashLink,Object(a.a)(Object(a.a)({smooth:!0,to:b+"#"+i.id},i),{},{children:o}))]})})),u=Object(o.a)(b,2),j=u[0],h=(0,u[1])(j)},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var o=n(25),i=n(31),r=n(2),a=(n(0),n(144)),c=n(146),s=Object(i.createNode)("SelfLink",(function(e){var t=e.props,n=e.actions,o=Object(a.a)();return Object(r.jsx)(c.HashLink,{className:o.link,style:{cursor:"pointer"},to:t.route+"#"+t.id,onClick:function(){return n.NAVIGATE_TO(t)},children:t.name})})),l=Object(o.a)(s,2),d=l[0],b=l[1];d.useContract("AppDrawer","NAVIGATE_TO",(function(e,t){var n=Object(o.a)(t,1)[0],i=n.name,r=(n.route,n.mask);return{activeSection:void 0!==r&&r||i}}));var u=b(d)},459:function(e,t,n){"use strict";n.r(t);var o=n(25),i=n(31),r=n(12),a=n(2),c=(n(0),n(7)),s=n(149),l=n(151),d=n(150),b=n(147),u=n.p+"static/media/rootz-anatomy.85adc529.svg",j=n(145),h=Object(i.createNode)("ThinkingRootzSection",(function(e){e.props;var t=Object(j.a)();return Object(a.jsxs)("div",{className:t.root,children:[Object(a.jsx)("div",{id:"thinking-rootz",className:t.pageTitle,children:"Thinking Rootz"}),Object(a.jsx)(c.w,{variant:"body1",gutterBottom:!0,children:"Rootz JS is a tiny library which makes it easier to solve problems related to state in your application. Before we start with the core concepts of Rootz in detail, let's take a look at a disciplined approach of how exactly Rootz helps in managing the state. To Implement Rootz, basic knowledge of JavaScript would do just fine."}),Object(a.jsx)(c.w,{variant:"body1",gutterBottom:!0,children:"Let's take a virtual tour on how a React-Rootz application would look like."}),Object(a.jsx)("img",{alt:"logo",src:u,className:t.logo}),Object(a.jsx)(c.w,{variant:"body1",gutterBottom:!0,children:"These are the key elements which one needs to be aware of for understanding Rootz. Most of the boilerplate in Rootz is done by the Root Layer itself. Root layer consists of inbuilt functionalities which help generating actions and contract. These are then passed through the NodePorps for the components to access them. "}),Object(a.jsx)(c.w,{variant:"body1",gutterBottom:!0,children:"Node controls the functionalities of the Component stored in Root. It directs the Component for its rendering outcome. Components are basically dumb in Rootz application. They normally behave the way Node directs them to. This way nature of the application is defined by how these Nodes interact with components. These interactions are carried out with Actions and Contract. They along with the state defines the nature of the Node which intern defines the behavior of the app."}),Object(a.jsx)(s.a,{content:"Root layer is the internal part of the Rootz JS. Node and Component are the only user interactive layers."}),Object(a.jsx)(d.a,{id:"core-elements",className:t.contentTitle,children:"Core Elements"}),Object(a.jsx)(d.a,{id:"core-elements-node",className:t.contentSubTitle,children:"Node"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsxs)(c.w,{variant:"body1",gutterBottom:!0,children:["A ",Object(a.jsx)(l.a,{name:"Node",route:"/nodes"})," is an interactive layer between the Component and the Root"]})}),Object(a.jsx)("li",{children:Object(a.jsx)(c.w,{variant:"body1",gutterBottom:!0,children:"Each Node has Methods which helps in adding dynamic features to the component."})}),Object(a.jsx)("li",{children:Object(a.jsxs)(c.w,{variant:"body1",gutterBottom:!0,children:["These Methods are used in creating ",Object(a.jsx)(l.a,{name:"State",route:"/Node",id:"node-state"}),", ",Object(a.jsx)(l.a,{name:"Actions",route:"/Node",id:"node-useaction"}),", ",Object(a.jsx)(l.a,{name:"Contract",route:"/Node",id:"node-usecontract"})," and ",Object(a.jsx)(l.a,{name:"Profile",route:"/Node",id:"node-setprofile"}),"."]})}),Object(a.jsx)("li",{children:Object(a.jsx)(c.w,{variant:"body1",gutterBottom:!0,children:"All nodes have a unique Id, called NODE_ID"})}),Object(a.jsx)("li",{children:Object(a.jsx)(c.w,{variant:"body1",gutterBottom:!0,children:"A React-Rootz application is a tree with interconnected Nodes."})})]}),Object(a.jsx)(d.a,{id:"core-elements-root",className:t.contentSubTitle,children:"Root"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(c.w,{variant:"body1",gutterBottom:!0,children:"A Root consists of the state container and Generators."})}),Object(a.jsx)("li",{children:Object(a.jsx)(c.w,{variant:"body1",gutterBottom:!0,children:"State containers is where the state of all Nodes are stored."})}),Object(a.jsx)("li",{children:Object(a.jsx)(c.w,{variant:"body1",gutterBottom:!0,children:"Generators are of two types Action and Contract Generators."})}),Object(a.jsx)("li",{children:Object(a.jsxs)(c.w,{variant:"body1",gutterBottom:!0,children:["These generators helps in creating ",Object(a.jsx)(l.a,{name:"Actions",route:"/actions"})," and ",Object(a.jsx)(l.a,{name:"Contract",route:"/contract"}),", which are responsible for updating the state."]})}),Object(a.jsx)("li",{children:Object(a.jsxs)(c.w,{variant:"body1",gutterBottom:!0,children:["The ",Object(a.jsx)(l.a,{name:"State",route:"/state"})," of the Root is true to the application's current state, hence the only source of truth."]})})]}),Object(a.jsx)(d.a,{id:"core-elements-actions",className:t.contentSubTitle,children:"Actions"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(c.w,{variant:"body1",gutterBottom:!0,children:"An action helps in defining how a Component would be interacting to an Event."})}),Object(a.jsx)("li",{children:Object(a.jsxs)(c.w,{variant:"body1",gutterBottom:!0,children:[Object(a.jsx)(l.a,{name:"Actions",route:"/actions"})," are functions which updates the state of the Node in which it is defined."]})}),Object(a.jsx)("li",{children:Object(a.jsx)(c.w,{variant:"body1",gutterBottom:!0,children:"An action should always return a JavaScript object."})}),Object(a.jsx)("li",{children:Object(a.jsx)(c.w,{variant:"body1",gutterBottom:!0,children:"Actions are limited to the scope of the Node it is defined in."})}),Object(a.jsx)("li",{children:Object(a.jsx)(c.w,{variant:"body1",gutterBottom:!0,children:"Actions are created using the Node methods."})})]}),Object(a.jsx)(d.a,{id:"core-elements-contract",className:t.contentSubTitle,children:"Contract"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(c.w,{variant:"body1",gutterBottom:!0,children:"A Contract helps in defining how other Components would interact to an Event."})}),Object(a.jsx)("li",{children:Object(a.jsxs)(c.w,{variant:"body1",gutterBottom:!0,children:[Object(a.jsx)(l.a,{name:"Contract",route:"/contract"})," is an agreement made to update the state of a Node in the Application."]})}),Object(a.jsx)("li",{children:Object(a.jsx)(c.w,{variant:"body1",gutterBottom:!0,children:"A Contract is an Action by nature."})}),Object(a.jsx)("li",{children:Object(a.jsx)(c.w,{variant:"body1",gutterBottom:!0,children:"Contract too is created using Node methods."})})]}),Object(a.jsx)(d.a,{id:"core-elements-node-methods",className:t.contentSubTitle,children:"Node Methods"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(c.w,{variant:"body1",gutterBottom:!0,children:"Node Methods are functionalities by which Nodes interact with the Components."})}),Object(a.jsx)("li",{children:Object(a.jsx)(c.w,{variant:"body1",gutterBottom:!0,children:"For Example, setting the initial state of a Node. or raising an action on an event."})}),Object(a.jsx)("li",{children:Object(a.jsxs)(c.w,{variant:"body1",gutterBottom:!0,children:["Predefined Methods like, ",Object(a.jsx)("code",{children:"state"}),", ",Object(a.jsx)("code",{children:"useAction"}),", ",Object(a.jsx)("code",{children:"useContract"}),", ",Object(a.jsx)("code",{children:"setProfile"})," can be used based on situations."]})})]}),Object(a.jsx)(d.a,{id:"core-elements-node-props",className:t.contentSubTitle,children:"Node Props"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsxs)(c.w,{variant:"body1",gutterBottom:!0,children:[Object(a.jsx)(l.a,{name:"NodeProps",route:"/nodeprops",id:"accessing-nodeprops"})," are used in a component to access the defined Node Methods in Node."]})}),Object(a.jsx)("li",{children:Object(a.jsxs)(c.w,{variant:"body1",gutterBottom:!0,children:["Nodeprops consists of ",Object(a.jsx)("code",{children:"props"}),", ",Object(a.jsx)("code",{children:"state"}),", ",Object(a.jsx)("code",{children:"actions"})," and ",Object(a.jsx)("code",{children:"profile"}),"."]})})]}),Object(a.jsx)(b.a,{back:"Installation",next:"App Structure"})]})})),p=Object(o.a)(h,2),x=p[0],m=p[1];t.default=Object(r.o)(m(x))}}]);
//# sourceMappingURL=14.5e9d0246.chunk.js.map