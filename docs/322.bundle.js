(this.webpackChunkrootzjs_org=this.webpackChunkrootzjs_org||[]).push([[322],{6187:function(e,t,n){"use strict";n.d(t,{d:function(){return s}});var a=n(7294),o=n(8920),r=n(9693),i=n(9282),c=n(9739),l=n(2399),s=function(e){var t=e.isLight,n=e.codeString,s=e.lang,d=(0,o.Z)();return a.createElement(i.Z,{language:s,customStyle:{fontSize:17,borderRadius:3,padding:"12px 25px",margin:"10px 0 15px",backgroundColor:t?(0,r.U1)(d.text[80],1):d.background[20]},style:t?l.Z:c.Z},n)}},9173:function(e,t,n){"use strict";n.d(t,{E:function(){return i}});var a=n(7294),o=n(2656);function r(e){var t=(0,o.z)();return a.createElement("div",{className:t.embedCode,dangerouslySetInnerHTML:{__html:e.iframe?e.iframe:""}})}var i=function(e){var t=e.iFrame;return a.createElement(r,{iframe:t,allow:"autoplay"})}},4426:function(e,t,n){"use strict";n.d(t,{N:function(){return r}});var a=n(7294),o=n(2656),r=function(e){var t=e.content,n=e.type,r=void 0===n?"note":n,i=e.children,c=(0,o.z)();switch(r){case"note":return a.createElement("div",{className:c.noteContainer},a.createElement("span",{className:c.noteLabel},"Note:"),a.createElement("span",{className:c.noteContent},t),i&&a.createElement("span",{className:c.noteContentLink},i));case"attention":return a.createElement("div",{className:c.noteContainerAttention},a.createElement("span",{className:c.noteLabel},"Attention:"),a.createElement("span",{className:c.noteContent},t),i&&a.createElement("span",{className:c.noteContentLink},i));case"info":return a.createElement("div",{className:c.noteContainerInfo},a.createElement("span",{className:c.noteLabel},"Info:"),a.createElement("span",{className:c.noteContent},t),i&&a.createElement("span",{className:c.noteContentLink},i));default:return a.createElement("div",{className:c.noteContainer},a.createElement("span",{className:c.noteLabel},"Note:"),a.createElement("span",{className:c.noteContent},t),i&&a.createElement("span",{className:c.noteContentLink},i))}}},1269:function(e,t,n){"use strict";n.d(t,{z:function(){return r}});var a=n(1120),o=n(9693),r=(0,a.Z)((function(e){return{root:{margin:e.isMobile?10:"25px 75px",width:"100%","& > p":{marginTop:25,lineHeight:1.75,color:e.text["00"]},"& li>p":{marginTop:20,color:e.text["00"]},"& ul > li":{color:e.text["00"]},"& code":{borderRadius:2,padding:"2px 7px",color:e.text["00"],backgroundColor:(0,o.U1)("#E4A800",.25)}},divider:{flexShrink:0,backgroundColor:e.text[80]},pageTitle:{fontSize:60,fontWeight:"bold",margin:"25px 0 15px",color:e.text[20],textDecoration:"auto"},contentTitle:{fontSize:35,fontWeight:"bold",color:e.text[20],textDecoration:"auto",borderBottom:"solid 2px ".concat(e.text[50])},contentSubTitle:{fontSize:28,fontWeight:"bold",color:e.text[30],textDecoration:"auto"},codeHeadLabel:{fontSize:20,marginTop:40,fontWeight:"bold",color:e.text[40],textDecoration:"auto"},logo:{width:"90vmin"},logoContract:{height:"60vmin"},codeHeadIcon:{fontSize:22,marginRight:10,color:"#E4A800"},imgWrapper:{display:"flex",backgroundColor:e.background[10]}}}))},2656:function(e,t,n){"use strict";n.d(t,{z:function(){return r}});var a=n(1120),o=n(9693),r=(0,a.Z)((function(e){return{link:{padding:"1px 4px",fontWeight:"bold",color:e.text[10],textDecoration:"none",backgroundColor:(0,o.U1)(e.palette.secondary.main,.25),borderBottom:"solid 2px ".concat(e.palette.secondary.main)},button:{fontSize:20,display:"flex",cursor:"pointer",flexDirection:"column",color:e.text["00"],textTransform:"capitalize",padding:e.isMobile?"15px 25px":"15px 50px",margin:e.isMobile?"25px 0 120px":"25px 0 50px",backgroundColor:(0,o.U1)(e.palette.secondary.main,.25),"&:hover":{backgroundColor:(0,o.U1)(e.palette.secondary.main,.4)}},btnSubLabel:{fontSize:15,color:e.text[30]},buttonContainer:{display:"flex",justifyContent:"space-between"},btnContentWrapper:{display:"flex","& svg":{margin:3}},noteContainer:{fontSize:17,borderRadius:3,margin:"40px 0",padding:"10px 20px",borderLeft:"solid 7px #E4A800",backgroundColor:(0,o.U1)("#E4A800",.25)},noteContainerAttention:{fontSize:17,borderRadius:3,margin:"40px 0",padding:"10px 20px",borderLeft:"solid 7px #E44100",backgroundColor:(0,o.U1)("#E44100",.25)},noteContainerInfo:{fontSize:17,borderRadius:3,margin:"40px 0",padding:"10px 20px",borderLeft:"solid 7px #00BDE4",backgroundColor:(0,o.U1)("#00BDE4",.25)},noteLabel:{marginRight:7,fontWeight:"bold",color:e.text[20]},noteContent:{color:e.text[20]},noteContentLink:{display:"block",margin:"25px 0 15px","& li":{margin:10}},embedCode:{margin:"10px 0 25px"},hasLinkContainer:{marginTop:40,display:"flex",alignItems:"center","& a":{flex:1,display:"flex"},"&:hover svg":{display:"inline-flex"}},hashLinkIcon:{display:"none",margin:"0 10px",fontSize:"3vmin",position:"relative",marginLeft:"calc(-3vmin - 10px)",color:e.palette.secondary.main}}}))},1322:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});var a=n(7364),o=n(5977),r=n(7294),i=n(2318),c=n(6187),l=n(4426),s=n(9173),d=n(8876),u=n(9809),m=n(7107),p=n(1269),f="\nimport { createNode } from '@rootzjs/core';\nimport { Component } from '../components/Message';\n\n/*\n* createNode\n* @param: Message: String\n* @param: Component: React.Component | React.FC\n* @returnType: [node: Node, dispatchNode: Function]\n*/\nconst [node, dispatchNode] = createNode(\"Message\", Component);\n\nexport const Message = dispatchNode(node);\n",h="node.state(STATE_PROPS: { })",b="// with UPDATED_STATE as an Object\n\nnode.useAction(\n    ACTION_ID: string, \n    UPDATED_STATE: { }\n)",g="// with UPDATED_STATE as a callback function\n\nnode.useAction(\n    ACTION_ID: string, \n    (stateOfNode: { }, ARGUMENTS: [ ]) => UPDATED_STATE: { }\n)",E="// with UPDATED_STATE as an Object\n\nnode.useContract(\n    TARGET_NODE_ID: string,\n    ACTION_ID: string, \n    UPDATED_STATE: { }\n)",y="// with UPDATED_STATE as a callback function\n\nnode.useContract(\n    TARGET_NODE_ID: string,\n    ACTION_ID: string, \n    (stateOfTargetNode: { }, ARGUMENTS: [ ]) => UPDATED_STATE: { }\n)",v="// with UPDATED_STATE as callback function\n\nnode.useActionCallback(\n    ACTION_ID: string, \n    (stateOfNode: { }, ARGUMENTS: [ ]) => UPDATED_STATE: { }\n)",N="// with UPDATED_STATE as callback function\n\nnode.useContractCallback(\n    TARGET_NODE_ID: string,\n    ACTION_ID: string, \n    (stateOfTargetNode: { }, ARGUMENTS: [ ]) => UPDATED_STATE: { }\n)",T="node.setProfile(PROFILE: { })";function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var A,S,C=(0,a.createNode)("NodeSection",(function(e){var t=e.props,n=(0,p.z)(),a="light"===t.theme,o='<iframe src="https://codesandbox.io/embed/rootzjs-concepts-example1-dyv6g?autoresize=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2Fnodes%2FMaster.js&theme='.concat(t.theme,'"\n    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"\n    title="rootzjs-concepts-example1"\n    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"\n    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"\n  ></iframe>');return r.createElement("div",{className:n.root},r.createElement("div",{id:"node",className:n.pageTitle},"Node"),r.createElement(i.Z,{variant:"body1",gutterBottom:!0},"Node exists as an interactive layer between ",r.createElement(d.a,{name:"Root",route:"/thinking-rootz",mask:"Thinking Rootz",id:"core-elements"})," and the ",r.createElement(d.a,{name:"Components",route:"/components"}),". It acts as a controller for the components which can be seen as a view in a React-Rootz app. "),r.createElement(i.Z,{variant:"body1",gutterBottom:!0},"A Node provides dynamic nature to a components. It provides functionality to define the initial state of the Node. Additionally a Node also provides functionalities to manage the change in state through actions and contract. Methods like ",r.createElement("code",null,"useAction")," and ",r.createElement("code",null,"useContract")," helps in managing the change in state of the Node."),r.createElement(i.Z,{variant:"body1",gutterBottom:!0},"Let's take a look at a simple Node definition in a React-Rootz application."),r.createElement(c.d,{lang:"javascript",isLight:a,codeString:f}),r.createElement(l.N,{content:"The above example assumes the Node and Components are decoupled into separate files."}),r.createElement("div",{className:n.codeHeadLabel},"Try it out..."),r.createElement(s.E,{iFrame:o}),r.createElement(u.f,{id:"create-a-node",className:n.contentTitle},"Create a Node"),r.createElement(i.Z,{variant:"body1",gutterBottom:!0},"To create a node you should be aware of the certain concepts which are mentioned in details along with their syntax below. By the end of this section one should be in a state to create a simple React-Rootz app to update a message. You can refer to the working example mentioned above."),r.createElement(u.f,{id:"createnode",className:n.contentSubTitle},"createNode"),r.createElement(i.Z,{variant:"body1",gutterBottom:!0},"The ",r.createElement("code",null,"createNode")," method creates an instance of the Node. It accepts a unique Id ",r.createElement("code",null,"NODE_ID")," of type string followed by a Component ",r.createElement("i",null,"(React.Component / React.FC)"),". In return it provides an array of 2 ",r.createElement("code",null,"createNode: (NODE_ID: string, Component: Function) => [node: Node, (node: Node) => React.PureComponent]"),", the instance of Node class at 0th index followed by the dispatch functionality at the 1st index."),r.createElement(u.f,{id:"dispatchnode",className:n.contentSubTitle},"dispatchNode"),r.createElement(i.Z,{variant:"body1",gutterBottom:!0},"The ",r.createElement("code",null,"dispatchNode")," method accepts the instance of the Node as a parameter inturn returning a pure component. All the components in React-Rootz app is wrapped with a pure component providing an advantage for performance. "),r.createElement(u.f,{id:"properties-of-node",className:n.contentTitle},"Properties of Node"),r.createElement(i.Z,{variant:"body1",gutterBottom:!0},"The instance of Node class provides list of predefined functionalities known as ",r.createElement("b",null,"Node Methods"),". These methods are used to define NodeProps. Let's consider each of these methods in detail."),r.createElement(u.f,{id:"node-state",className:n.contentSubTitle},"node.state"),r.createElement(i.Z,{variant:"body1",gutterBottom:!0},r.createElement("code",null,"state"),"accepts a plain JavaScript object ",r.createElement("code",null,"STATE_PROPS")," to declare the ",r.createElement(d.a,{name:"State",route:"/state",id:"define-state"})," of the component. This state is then accessible as part of the ",r.createElement(d.a,{name:"NodeProps",route:"/nodeprops",id:"properties"}),"."),r.createElement("div",{className:n.codeHeadLabel},"syntax:"),r.createElement(c.d,{lang:"javascript",isLight:a,codeString:h}),r.createElement(u.f,{id:"node-useaction",className:n.contentSubTitle},"node.useAction"),r.createElement(i.Z,{variant:"body1",gutterBottom:!0},r.createElement("code",null,"useAction")," provides a functionality to create ",r.createElement(d.a,{name:"Actions",route:"/actions",id:"create-actions"}),". It takes two parameters, ",r.createElement("code",null,"ACTION_ID")," a unique id followed by a second parameter which can be an object or a callback function. The callback function provides state of the Node as a parameter along with the array of arguments, passed during the function call."),r.createElement("div",{className:n.codeHeadLabel},"syntax 1:"),r.createElement(c.d,{lang:"javascript",isLight:a,codeString:b}),r.createElement("div",{className:n.codeHeadLabel},"syntax 2:"),r.createElement(c.d,{lang:"javascript",isLight:a,codeString:g}),r.createElement(u.f,{id:"node-useactioncallback",className:n.contentSubTitle},"node.useActionCallback"),r.createElement(i.Z,{variant:"body1",gutterBottom:!0},r.createElement("code",null,"useActionCallback")," is the same overloading function of ",r.createElement("code",null,"useAction")," with a callback."),r.createElement("div",{className:n.codeHeadLabel},"syntax:"),r.createElement(c.d,{lang:"javascript",isLight:a,codeString:v}),r.createElement(u.f,{id:"node-usecontract",className:n.contentSubTitle},"node.useContract"),r.createElement(i.Z,{variant:"body1",gutterBottom:!0},r.createElement("code",null,"useContract")," is similar to creating an Action. The only difference is that it takes an additional parameter, ",r.createElement("code",null,"TARGET_NODE_ID")," The Node which it intends to update when the action is raised. The callback function in a Contract would return the current state of the target Node."),r.createElement("div",{className:n.codeHeadLabel},"syntax 1:"),r.createElement(c.d,{lang:"javascript",isLight:a,codeString:E}),r.createElement("div",{className:n.codeHeadLabel},"syntax 2:"),r.createElement(c.d,{lang:"javascript",isLight:a,codeString:y}),r.createElement(u.f,{id:"node-usecontractcallback",className:n.contentSubTitle},"node.useContractCallback"),r.createElement(i.Z,{variant:"body1",gutterBottom:!0},r.createElement("code",null,"useContractCallback")," is the same overloading function of ",r.createElement("code",null,"useContract")," with a callback."),r.createElement("div",{className:n.codeHeadLabel},"syntax:"),r.createElement(c.d,{lang:"javascript",isLight:a,codeString:N}),r.createElement(u.f,{id:"node-setprofile",className:n.contentSubTitle},"node.setProfile"),r.createElement(i.Z,{variant:"body1",gutterBottom:!0},r.createElement("code",null,"setProfile")," provides a functionality to create ",r.createElement(d.a,{name:"Profiles",route:"/profile",mask:"Profile"}),". It accepts a JavaScript object as a parameter."),r.createElement("div",{className:n.codeHeadLabel},"syntax:"),r.createElement(c.d,{lang:"javascript",isLight:a,codeString:T}),r.createElement(l.N,{content:"ACTION_ID should be unique within the scope of a Node. Similar ACTION_IDs can be used in another Nodes."}),r.createElement(i.Z,{variant:"body1",gutterBottom:!0},"In this section you have learnt to create a Node and use its Methods to define state, actions, contract and profiles. Lets see how these defined properties would be used within a component through ",r.createElement("b",null,"NodeProps")),r.createElement(m.W,{back:"Components",next:"NodeProps"}))})),w=(S=2,function(e){if(Array.isArray(e))return e}(A=C)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,o=!1,r=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){o=!0,r=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw r}}return n}}(A,S)||function(e,t){if(e){if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(e,t):void 0}}(A,S)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),k=w[0],O=w[1],I=(0,o.EN)(O(k))},9809:function(e,t,n){"use strict";n.d(t,{f:function(){return b}});var a=n(7364),o=n(7294),r=(0,n(5209).Z)(o.createElement("path",{d:"M17 7h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c1.65 0 3 1.35 3 3s-1.35 3-3 3h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-9 5c0 .55.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1H9c-.55 0-1 .45-1 1zm2 3H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h3c.55 0 1-.45 1-1s-.45-1-1-1H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h3c.55 0 1-.45 1-1s-.45-1-1-1z"}),"LinkRounded"),i=n(7853),c=n(2656);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var u,m,p=(0,a.createNode)("HashLink",(function(e){var t=e.props,n=(0,c.z)(),a=t.children,d=s(t,["children"]),u=window.location.pathname;return o.createElement("div",{className:n.hasLinkContainer},o.createElement(r,{className:n.hashLinkIcon}),o.createElement(i.fO,l({smooth:!0,to:u+"#"+d.id},d),a))})),f=(m=2,function(e){if(Array.isArray(e))return e}(u=p)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,o=!1,r=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){o=!0,r=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw r}}return n}}(u,m)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(u,m)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),h=f[0],b=(0,f[1])(h)},7107:function(e,t,n){"use strict";n.d(t,{W:function(){return f}});var a=n(7364),o=n(5977),r=n(7294),i=n(2656),c=n(5291),l=n(9686);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,o=!1,r=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){o=!0,r=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw r}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var u=s((0,a.createNode)("NavigationButton",(function(e){var t=e.props,n=e.actions,a=(0,i.z)();return r.createElement("div",{className:a.buttonContainer},r.createElement("div",{className:a.button,onClick:function(){return n.GOTO_PREVIOUS(t)},style:{alignItems:"flex-end",justifyContent:"flex-start",visibility:t.back?"visible":"hidden"}},r.createElement("div",{className:a.btnSubLabel,style:{}},"Jump To"),r.createElement("div",{className:a.btnContentWrapper},r.createElement(c.Z,null),t.back)),r.createElement("div",{className:a.button,onClick:function(){return n.GOTO_NEXT(t)},style:{alignItems:"flex-start",justifyContent:"flex-end",visibility:t.next?"visible":"hidden"}},r.createElement("div",{className:a.btnSubLabel},"Jump To"),r.createElement("div",{className:a.btnContentWrapper},t.next,r.createElement(l.Z,null))))})),2),m=u[0],p=u[1];m.useContract("AppDrawer","GOTO_NEXT",(function(e,t){var n=s(t,1)[0],a=n.next;return n.history.push("/"+a.toLowerCase().replace(/ /g,"-")),{activeSection:a}})),m.useContract("AppDrawer","GOTO_PREVIOUS",(function(e,t){var n=s(t,1)[0],a=n.back;return n.history.push("/"+a.toLowerCase().replace(/ /g,"-")),{activeSection:a}}));var f=(0,o.EN)(p(m))},8876:function(e,t,n){"use strict";n.d(t,{a:function(){return m}});var a=n(7364),o=n(7294),r=n(2656),i=n(7853);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,o=!1,r=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){o=!0,r=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw r}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var s=c((0,a.createNode)("SelfLink",(function(e){var t=e.props,n=e.actions,a=(0,r.z)();return o.createElement(i.fO,{className:a.link,style:{cursor:"pointer"},to:t.route+"#"+t.id,onClick:function(){return n.NAVIGATE_TO(t)}},t.name)})),2),d=s[0],u=s[1];d.useContract("AppDrawer","NAVIGATE_TO",(function(e,t){var n=c(t,1)[0],a=n.name,o=(n.route,n.mask);return{activeSection:void 0!==o&&o||a}}));var m=u(d)}}]);