(this.webpackChunkrootzjs_org=this.webpackChunkrootzjs_org||[]).push([[989],{95683:function(e,t,n){e.exports=n(69447)},63263:function(e,t,n){e.exports=n(84710)},89356:function(e,t,n){e.exports=n(93799)},80122:function(e,t,n){var o=n(95683),a=n(63263),r=n(44590);e.exports=function(e,t){if(null==e)return{};var n,i,s=r(e,t);if(a){var c=a(e);for(i=0;i<c.length;i++)n=c[i],o(t).call(t,n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}},44590:function(e,t,n){var o=n(95683),a=n(89356);e.exports=function(e,t){if(null==e)return{};var n,r,i={},s=a(e);for(r=0;r<s.length;r++)n=s[r],o(t).call(t,n)>=0||(i[n]=e[n]);return i}},96187:function(e,t,n){"use strict";n.d(t,{d:function(){return l}});var o=n(67294),a=n(8920),r=n(59693),i=n(99282),s=n(89739),c=n(32399),l=function(e){var t=e.isLight,n=e.codeString,l=e.lang,d=(0,a.Z)();return o.createElement(i.Z,{language:l,customStyle:{fontSize:17,borderRadius:3,padding:"12px 25px",margin:"10px 0 15px",backgroundColor:t?(0,r.U1)(d.text[80],1):d.background[20]},style:t?c.Z:s.Z},n)}},54426:function(e,t,n){"use strict";n.d(t,{N:function(){return r}});var o=n(67294),a=n(42656),r=function(e){var t=e.content,n=e.type,r=void 0===n?"note":n,i=e.children,s=(0,a.z)();switch(r){case"note":return o.createElement("div",{className:s.noteContainer},o.createElement("span",{className:s.noteLabel},"Note:"),o.createElement("span",{className:s.noteContent},t),i&&o.createElement("span",{className:s.noteContentLink},i));case"attention":return o.createElement("div",{className:s.noteContainerAttention},o.createElement("span",{className:s.noteLabel},"Attention:"),o.createElement("span",{className:s.noteContent},t),i&&o.createElement("span",{className:s.noteContentLink},i));case"info":return o.createElement("div",{className:s.noteContainerInfo},o.createElement("span",{className:s.noteLabel},"Info:"),o.createElement("span",{className:s.noteContent},t),i&&o.createElement("span",{className:s.noteContentLink},i));default:return o.createElement("div",{className:s.noteContainer},o.createElement("span",{className:s.noteLabel},"Note:"),o.createElement("span",{className:s.noteContent},t),i&&o.createElement("span",{className:s.noteContentLink},i))}}},1269:function(e,t,n){"use strict";n.d(t,{z:function(){return r}});var o=n(41120),a=n(59693),r=(0,o.Z)((function(e){return{root:{margin:e.isMobile?10:"25px 75px",width:"100%","& > p":{marginTop:25,lineHeight:1.75,color:e.text["00"]},"& li>p":{marginTop:20,color:e.text["00"]},"& ul > li":{color:e.text["00"]},"& code":{borderRadius:2,padding:"2px 7px",color:e.text["00"],backgroundColor:(0,a.U1)("#E4A800",.25)}},divider:{flexShrink:0,backgroundColor:e.text[80]},pageTitle:{fontSize:60,fontWeight:"bold",margin:"25px 0 15px",color:e.text[20],textDecoration:"auto"},contentTitle:{fontSize:35,fontWeight:"bold",color:e.text[20],textDecoration:"auto",borderBottom:"solid 2px ".concat(e.text[50])},contentSubTitle:{fontSize:28,fontWeight:"bold",color:e.text[30],textDecoration:"auto"},codeHeadLabel:{fontSize:20,marginTop:40,fontWeight:"bold",color:e.text[40],textDecoration:"auto"},logo:{width:"90vmin"},logoContract:{height:"60vmin"},codeHeadIcon:{fontSize:22,marginRight:10,color:"#E4A800"},imgWrapper:{display:"flex",backgroundColor:e.background[10]}}}))},42656:function(e,t,n){"use strict";n.d(t,{z:function(){return r}});var o=n(41120),a=n(59693),r=(0,o.Z)((function(e){return{link:{padding:"1px 4px",fontWeight:"bold",color:e.text[10],textDecoration:"none",backgroundColor:(0,a.U1)(e.palette.secondary.main,.25),borderBottom:"solid 2px ".concat(e.palette.secondary.main)},button:{fontSize:20,display:"flex",cursor:"pointer",flexDirection:"column",color:e.text["00"],textTransform:"capitalize",padding:e.isMobile?"15px 25px":"15px 50px",margin:e.isMobile?"25px 0 120px":"25px 0 50px",backgroundColor:(0,a.U1)(e.palette.secondary.main,.25),"&:hover":{backgroundColor:(0,a.U1)(e.palette.secondary.main,.4)}},btnSubLabel:{fontSize:15,color:e.text[30]},buttonContainer:{display:"flex",justifyContent:"space-between"},btnContentWrapper:{display:"flex","& svg":{margin:3}},noteContainer:{fontSize:17,borderRadius:3,margin:"40px 0",padding:"10px 20px",borderLeft:"solid 7px #E4A800",backgroundColor:(0,a.U1)("#E4A800",.25)},noteContainerAttention:{fontSize:17,borderRadius:3,margin:"40px 0",padding:"10px 20px",borderLeft:"solid 7px #E44100",backgroundColor:(0,a.U1)("#E44100",.25)},noteContainerInfo:{fontSize:17,borderRadius:3,margin:"40px 0",padding:"10px 20px",borderLeft:"solid 7px #00BDE4",backgroundColor:(0,a.U1)("#00BDE4",.25)},noteLabel:{marginRight:7,fontWeight:"bold",color:e.text[20]},noteContent:{color:e.text[20]},noteContentLink:{display:"block",margin:"25px 0 15px","& li":{margin:10}},embedCode:{margin:"10px 0 25px"},hasLinkContainer:{marginTop:40,display:"flex",alignItems:"center","& a":{flex:1,display:"flex"},"&:hover svg":{display:"inline-flex"}},hashLinkIcon:{display:"none",margin:"0 10px",fontSize:"3vmin",position:"relative",marginLeft:"calc(-3vmin - 10px)",color:e.palette.secondary.main}}}))},15989:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var o=n(18777),a=n.n(o),r=n(27364),i=n(5977),s=n(67294),c=n(22318),l=n(96187),d=n(54426),p=n(58876),m=n(19809),u=n(87107),f=n(1269),h="src/\n    components/\n        AddTodo.jsx\n        TodoList.jsx\n        FilterTodo.jsx\n    nodes/\n        AddTodo.js\n        TodoList.js\n        FilterTodo.js",g='\nimport React from "react";\n\n/*\n* @param {state, props, actions, profile}\n* @type NodeProps Object\n*/\nexport const Component = function ({ state, actions }) {\n    return (\n        <div className="container">\n            <p>{state.message}</p>\n            <button className="btn" onClick={actions.NEW_MESSAGE}>\n                Add Message\n            </button>\n        </div>\n    );\n};\n',b='\nimport { createNode } from "@rootzjs/core";\nimport { Component } from "../components/Master";\n\nconst [node, dispatchNode] = createNode("Master", Component);\n\n// define intial state\nnode.state({ message: "..." });\n\n// define actions on button clicked\nnode.useAction("NEW_MESSAGE", {\n    message: "It\'s just that simple !!"\n});\n\n// dispatch Node\nexport const Master = dispatchNode(node);\n',x='\nimport React from \'react\';\nimport { createNode } from "@rootzjs/core";\n\n/*\n* @param {state, props, actions, profile}\n* @type NodeProps Object\n*/\nconst [node, dispatchNode] = createNode("Master", function ({\n    state,\n    actions\n}) {\n    return (\n        <div className="container">\n            <p>{state.message}</p>\n            <button className="btn" onClick={actions.NEW_MESSAGE}>\n                Add Message\n            </button>\n        </div>\n    );\n});\n\n// define intial state\nnode.state({ message: "..." });\n\n// define actions on button clicked\nnode.useAction("NEW_MESSAGE", {\n    message: "It\'s just that simple !!"\n});\n\n// dispatch Node\nexport const Master = dispatchNode(node);\n',v=(0,r.createNode)("AppStructureSection",(function(e){var t=e.props,n=(0,f.z)(),o="light"===t.theme;return s.createElement("div",{className:n.root},s.createElement("div",{id:"structuring-a-rootz-app",className:n.pageTitle},"Structuring a Rootz App"),s.createElement(c.Z,{variant:"body1",gutterBottom:!0},"The essential requirement when it comes to the Rootz app is how to structure it with Rootz configuration. There is no single answer to it. We recommend to follow the below structure, although Rootz provides freedom to experiment with suitable structure for your application."),s.createElement(l.d,{lang:"text",isLight:o,codeString:h}),s.createElement(m.f,{id:"nodes-and-components",className:n.contentSubTitle},"Nodes and Components"),s.createElement(c.Z,{variant:"body1",gutterBottom:!0},"Rootz segregates the functionalities for managing state from a React component. A component is the basic building block of any application. Thus the components can be created generically to extend its reusability. Components in Rootz handles the rendering part of the application. While the Node provides a character to a component making it dynamic in nature. "),s.createElement(c.Z,{variant:"body1",gutterBottom:!0},"Let's take an example of a simple component."),s.createElement("div",{className:n.codeHeadLabel},"Message.jsx"),s.createElement(l.d,{lang:"javascript",isLight:o,codeString:x}),s.createElement(c.Z,{variant:"body1",gutterBottom:!0},"In the above example we have created a Node with a component as a callback function, along with the definition of its properties. This approach would work just fine. As the components are tightly coupled to a specific Node, they cannot be reused as a part of other Nodes. To extend the reusability of the components it is suggested to decouple the Nodes and the components into their respective folders. "),s.createElement(d.N,{content:"Decoupling of the components from nodes makes them reusable entities, for better maintainability and debugging. It also segregates the responsibilities of the Node and the Component. Where the Node would be represented as the logical playground for the component. And the component now becomes a listener to the Nodes it is bounded to.",key:"Note"}),s.createElement(c.Z,{variant:"body1",gutterBottom:!0},"Let's take an example of a component decoupled from a Node."),s.createElement("div",{className:n.codeHeadLabel},"components/Message.jsx"),s.createElement(l.d,{lang:"javascript",isLight:o,codeString:g}),s.createElement(c.Z,{variant:"body1",gutterBottom:!0},"In the above example the component is a react component with pre-defined props. These props are known as ",s.createElement(p.a,{name:"NodeProps",route:"/nodeprops",id:"properties"}),". NodeProps helps in accessing the functionalities defined within a Node. The state and the actions used within the ",s.createElement("b",null,"ShowMessage.jsx")," component is defined in its Node."),s.createElement(c.Z,{variant:"body1",gutterBottom:!0},"Let's take a look at the corresponding Node for ",s.createElement("b",null,"ShowMessage.jsx")," component."),s.createElement("div",{className:n.codeHeadLabel},"node/Message.js"),s.createElement(l.d,{lang:"javascript",isLight:o,codeString:b}),s.createElement(c.Z,{variant:"body1",gutterBottom:!0},"As mentioned in the above example multiple Nodes can use the same component with different conditions. This increases the reusability of the available components."),s.createElement(d.N,{content:"Node is where the dynamic functionalities of a component is declared. A Component is where these functionalities are used, through NodeProps.",key:"Note"}),s.createElement(c.Z,{variant:"body1",gutterBottom:!0},"The Node ",s.createElement("b",null,"ShowMessage.js")," clearly mentions the definition of the initial state of the message being ",s.createElement("code",null,'"..."')," and the action ",s.createElement("code",null,"NEW_MESSAGE")," which when called returns an updated state with a ",s.createElement("code",null,'"It\'s just that simple !!"')," message. "),s.createElement(c.Z,{variant:"body1",gutterBottom:!0},"More details on Rootz along with examples are covered in the",s.createElement(p.a,{mask:"Overview",name:"Workbook",route:"/overview",id:""}),"section. You can refer ",s.createElement(p.a,{name:"Actions",route:"/actions",id:""})," and ",s.createElement(p.a,{name:"State",route:"State",id:""})," sections to know more about them."),s.createElement(u.W,{back:"Thinking Rootz",next:"Components"}))})),E=a()(v,2),N=E[0],y=E[1],k=(0,i.EN)(y(N))},19809:function(e,t,n){"use strict";n.d(t,{f:function(){return b}});var o=n(18777),a=n.n(o),r=n(27364),i=n(5872),s=n.n(i),c=n(80122),l=n.n(c),d=n(67294),p=(0,n(25209).Z)(d.createElement("path",{d:"M17 7h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c1.65 0 3 1.35 3 3s-1.35 3-3 3h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-9 5c0 .55.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1H9c-.55 0-1 .45-1 1zm2 3H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h3c.55 0 1-.45 1-1s-.45-1-1-1H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h3c.55 0 1-.45 1-1s-.45-1-1-1z"}),"LinkRounded"),m=n(97853),u=n(42656),f=(0,r.createNode)("HashLink",(function(e){var t=e.props,n=(0,u.z)(),o=t.children,a=l()(t,["children"]),r=window.location.pathname;return d.createElement("div",{className:n.hasLinkContainer},d.createElement(p,{className:n.hashLinkIcon}),d.createElement(m.fO,s()({smooth:!0,to:r+"#"+a.id},a),o))})),h=a()(f,2),g=h[0],b=(0,h[1])(g)},87107:function(e,t,n){"use strict";n.d(t,{W:function(){return h}});var o=n(18777),a=n.n(o),r=n(27364),i=n(5977),s=n(67294),c=n(42656),l=n(15291),d=n(49686),p=(0,r.createNode)("NavigationButton",(function(e){var t=e.props,n=e.actions,o=(0,c.z)();return s.createElement("div",{className:o.buttonContainer},s.createElement("div",{className:o.button,onClick:function(){return n.GOTO_PREVIOUS(t)},style:{alignItems:"flex-end",justifyContent:"flex-start",visibility:t.back?"visible":"hidden"}},s.createElement("div",{className:o.btnSubLabel,style:{}},"Jump To"),s.createElement("div",{className:o.btnContentWrapper},s.createElement(l.Z,null),t.back)),s.createElement("div",{className:o.button,onClick:function(){return n.GOTO_NEXT(t)},style:{alignItems:"flex-start",justifyContent:"flex-end",visibility:t.next?"visible":"hidden"}},s.createElement("div",{className:o.btnSubLabel},"Jump To"),s.createElement("div",{className:o.btnContentWrapper},t.next,s.createElement(d.Z,null))))})),m=a()(p,2),u=m[0],f=m[1];u.useContract("AppDrawer","GOTO_NEXT",(function(e,t){var n=a()(t,1)[0],o=n.next;return n.history.push("/"+o.toLowerCase().replace(/ /g,"-")),{activeSection:o}})),u.useContract("AppDrawer","GOTO_PREVIOUS",(function(e,t){var n=a()(t,1)[0],o=n.back;return n.history.push("/"+o.toLowerCase().replace(/ /g,"-")),{activeSection:o}}));var h=(0,i.EN)(f(u))},58876:function(e,t,n){"use strict";n.d(t,{a:function(){return u}});var o=n(18777),a=n.n(o),r=n(27364),i=n(67294),s=n(42656),c=n(97853),l=(0,r.createNode)("SelfLink",(function(e){var t=e.props,n=e.actions,o=(0,s.z)();return i.createElement(c.fO,{className:o.link,style:{cursor:"pointer"},to:t.route+"#"+t.id,onClick:function(){return n.NAVIGATE_TO(t)}},t.name)})),d=a()(l,2),p=d[0],m=d[1];p.useContract("AppDrawer","NAVIGATE_TO",(function(e,t){var n=a()(t,1)[0],o=n.name,r=(n.route,n.mask);return{activeSection:void 0!==r&&r||o}}));var u=m(p)},8700:function(e,t,n){n(99076);var o=n(35703);e.exports=o("Array").indexOf},34570:function(e,t,n){var o=n(8700),a=Array.prototype;e.exports=function(e){var t=e.indexOf;return e===a||e instanceof Array&&t===a.indexOf?o:t}},69447:function(e,t,n){var o=n(34570);e.exports=o},84710:function(e,t,n){var o=n(30498);e.exports=o},93799:function(e,t,n){var o=n(48494);e.exports=o},99076:function(e,t,n){"use strict";var o=n(76887),a=n(31692).indexOf,r=n(34194),i=n(65486),s=[].indexOf,c=!!s&&1/[1].indexOf(1,-0)<0,l=r("indexOf"),d=i("indexOf",{ACCESSORS:!0,1:0});o({target:"Array",proto:!0,forced:c||!l||!d},{indexOf:function(e){return c?s.apply(this,arguments)||0:a(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);