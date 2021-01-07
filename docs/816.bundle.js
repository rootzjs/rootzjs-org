(this.webpackChunkrootzjs_org=this.webpackChunkrootzjs_org||[]).push([[816],{6187:function(e,t,n){"use strict";n.d(t,{d:function(){return s}});var a=n(7294),o=n(8920),r=n(9693),i=n(9282),c=n(9739),l=n(2399),s=function(e){var t=e.isLight,n=e.codeString,s=e.lang,d=(0,o.Z)();return a.createElement(i.Z,{language:s,customStyle:{fontSize:17,borderRadius:3,padding:"12px 25px",margin:"10px 0 15px",backgroundColor:t?(0,r.U1)(d.text[80],1):d.background[20]},style:t?l.Z:c.Z},n)}},4426:function(e,t,n){"use strict";n.d(t,{N:function(){return r}});var a=n(7294),o=n(2656),r=function(e){var t=e.content,n=e.type,r=void 0===n?"note":n,i=e.children,c=(0,o.z)();switch(r){case"note":return a.createElement("div",{className:c.noteContainer},a.createElement("span",{className:c.noteLabel},"Note:"),a.createElement("span",{className:c.noteContent},t),i&&a.createElement("span",{className:c.noteContentLink},i));case"attention":return a.createElement("div",{className:c.noteContainerAttention},a.createElement("span",{className:c.noteLabel},"Attention:"),a.createElement("span",{className:c.noteContent},t),i&&a.createElement("span",{className:c.noteContentLink},i));case"info":return a.createElement("div",{className:c.noteContainerInfo},a.createElement("span",{className:c.noteLabel},"Info:"),a.createElement("span",{className:c.noteContent},t),i&&a.createElement("span",{className:c.noteContentLink},i));default:return a.createElement("div",{className:c.noteContainer},a.createElement("span",{className:c.noteLabel},"Note:"),a.createElement("span",{className:c.noteContent},t),i&&a.createElement("span",{className:c.noteContentLink},i))}}},1269:function(e,t,n){"use strict";n.d(t,{z:function(){return r}});var a=n(1120),o=n(9693),r=(0,a.Z)((function(e){return{root:{margin:e.isMobile?10:"25px 75px",width:"100%","& > p":{marginTop:25,lineHeight:1.75,color:e.text["00"]},"& li>p":{marginTop:20,color:e.text["00"]},"& ul > li":{color:e.text["00"]},"& code":{borderRadius:2,padding:"2px 7px",color:e.text["00"],backgroundColor:(0,o.U1)("#E4A800",.25)}},divider:{flexShrink:0,backgroundColor:e.text[80]},pageTitle:{fontSize:60,fontWeight:"bold",margin:"25px 0 15px",color:e.text[20],textDecoration:"auto"},contentTitle:{fontSize:35,fontWeight:"bold",color:e.text[20],textDecoration:"auto",borderBottom:"solid 2px ".concat(e.text[50])},contentSubTitle:{fontSize:28,fontWeight:"bold",color:e.text[30],textDecoration:"auto"},codeHeadLabel:{fontSize:20,marginTop:40,fontWeight:"bold",color:e.text[40],textDecoration:"auto"},logo:{width:"90vmin"},logoContract:{height:"60vmin"},codeHeadIcon:{fontSize:22,marginRight:10,color:"#E4A800"},imgWrapper:{display:"flex",backgroundColor:e.background[10]}}}))},2656:function(e,t,n){"use strict";n.d(t,{z:function(){return r}});var a=n(1120),o=n(9693),r=(0,a.Z)((function(e){return{link:{padding:"1px 4px",fontWeight:"bold",color:e.text[10],textDecoration:"none",backgroundColor:(0,o.U1)(e.palette.secondary.main,.25),borderBottom:"solid 2px ".concat(e.palette.secondary.main)},button:{fontSize:20,display:"flex",cursor:"pointer",flexDirection:"column",color:e.text["00"],textTransform:"capitalize",padding:e.isMobile?"15px 25px":"15px 50px",margin:e.isMobile?"25px 0 120px":"25px 0 50px",backgroundColor:(0,o.U1)(e.palette.secondary.main,.25),"&:hover":{backgroundColor:(0,o.U1)(e.palette.secondary.main,.4)}},btnSubLabel:{fontSize:15,color:e.text[30]},buttonContainer:{display:"flex",justifyContent:"space-between"},btnContentWrapper:{display:"flex","& svg":{margin:3}},noteContainer:{fontSize:17,borderRadius:3,margin:"40px 0",padding:"10px 20px",borderLeft:"solid 7px #E4A800",backgroundColor:(0,o.U1)("#E4A800",.25)},noteContainerAttention:{fontSize:17,borderRadius:3,margin:"40px 0",padding:"10px 20px",borderLeft:"solid 7px #E44100",backgroundColor:(0,o.U1)("#E44100",.25)},noteContainerInfo:{fontSize:17,borderRadius:3,margin:"40px 0",padding:"10px 20px",borderLeft:"solid 7px #00BDE4",backgroundColor:(0,o.U1)("#00BDE4",.25)},noteLabel:{marginRight:7,fontWeight:"bold",color:e.text[20]},noteContent:{color:e.text[20]},noteContentLink:{display:"block",margin:"25px 0 15px","& li":{margin:10}},embedCode:{margin:"10px 0 25px"},hasLinkContainer:{marginTop:40,display:"flex",alignItems:"center","& a":{flex:1,display:"flex"},"&:hover svg":{display:"inline-flex"}},hashLinkIcon:{display:"none",margin:"0 10px",fontSize:"3vmin",position:"relative",marginLeft:"calc(-3vmin - 10px)",color:e.palette.secondary.main}}}))},9816:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var a=n(7364),o=n(5977),r=n(7294),i=n(2318),c=n(6187),l=n(4426),s=n(8876),d=n(9809),u=n(7107),m=n(1269),p="// *** VALID STATE ***\n// 1.\nnode.state({\n    mounted: false\n});\n\n// 2.\nlet intialState = { mounted: true }\nnode.state(intialState);\n",f="// *** INVALID STATE ***\n// 1. \nnode.state(10);\n\n// 2. \nnode.state(false);\n\n// 3.\nlet mounted = false;\nnode.state(mounted);\n",h='\nnode.state({\n    mounted: false\n});\n\nnode.useAction(\n    "ON_MOUNT", \n    { mounted: true }\n);\n',g='\nnode.state({\n    todos: [\n        {\n            completed: false,\n            name: "Learning Rootz JS"\n\n        },\n        {\n            completed: false,\n            name: "Create a React-Rootz App"\n        }\n    ]\n});\n\n// updating todo of name "Learning Rootz Js" as completed\nnode.useAction(\n    "ON_UPDATE", \n    (state, args) => {\n        const todos = state.todos.map(todo => {\n            if(todo.name === "Learning Rootz JS") {\n                return { ...todo, isCompleted: true }\n            } else {\n                return todo\n            }\n        });\n\n        return { todos }\n    }\n);\n',b="\n// *** RIGHT WAY ***\n\n<button onClick={actions.ON_BUTTON_CLICK}>\n    Click Me\n</button>\n",y="\n// *** WRONG WAY ***\n\n<button onClick={() => { state.clicked = true }}>\n    Click Me\n</button>\n",v="\nimport { getAllNodes } from '@rootzjs/core';\n\n// propvides state container object\nconst appState = getAllNodes();\n",E="\n{\n    #NODE_ID: {\n        actions: [],\n        contract: [],\n        state: {},\n        scope: {}\n    },\n    ...\n}\n";function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var S,N,C=(0,a.createNode)("StateSection",(function(e){var t=e.props,n=(0,m.z)(),a="light"===t.theme;return r.createElement("div",{className:n.root},r.createElement("div",{id:"state",className:n.pageTitle},"State"),r.createElement(i.Z,{variant:"body1",gutterBottom:!0},"State are simple JavaScript objects. In a React-Rootz app state are centrally stored and maintained within the ",r.createElement(s.a,{name:"State Container",route:"/thinking-rootz",mask:"Thinking Rootz "}),". As other properties of ",r.createElement(s.a,{name:"NodeProps",route:"/nodeprops",id:"properties"}),", ",r.createElement("code",null,"state")," too is initialized within a Node. Initializing a state can be done through ",r.createElement("code",null,"node.state()"),"."),r.createElement(l.N,{content:"This provides you a perception of creating state for individual Nodes like in flux architechture, but is rather stored and managed centrally. This provides user to focus on defining the state of individual Nodes at a time, based on its own contribution to the application's behavior. And in case of debugging it makes it easy for the user to identify the change in state of a Node than rectifying the entire application.",type:"info"}),r.createElement(d.f,{id:"state-container",className:n.contentTitle},"State Container"),r.createElement(i.Z,{variant:"body1",gutterBottom:!0},"State Container is where the entire state of the application is stored and maintained. Users can view the current state of the application at any time by accessing the state container Object. This Object is ",r.createElement("code",null,"read-only")," in nature. The state container object can be accessed by ",r.createElement("code",null,"getAllNodes")," method."),r.createElement(d.f,{id:"using-getallnodes",className:n.contentSubTitle},"Using ",r.createElement("code",null,"getAllNodes")),r.createElement(c.d,{lang:"javascript",isLight:a,codeString:v}),r.createElement(i.Z,{variant:"body1",gutterBottom:!0},r.createElement("code",null,"getAllNodes")," returns the entire ",r.createElement(s.a,{name:"Root",route:"/thinking-rootz",mask:"Thinking Rootz",id:"core-elements"})," variable. This variable consists of entries of Nodes along with its properties. "),r.createElement(d.f,{id:"container-object",className:n.contentSubTitle},"Container Object"),r.createElement(i.Z,{variant:"body1",gutterBottom:!0},"The Root object provides insight not only of the Node state variables but also the Actions and Contracts defined in within them."),r.createElement(c.d,{lang:"json",isLight:a,codeString:E}),r.createElement(d.f,{id:"define-state",className:n.contentTitle},"Define State"),r.createElement(i.Z,{variant:"body1",gutterBottom:!0},"State should only be created using ",r.createElement("code",null,"node.state()")," method. A valid state should always be a JavaScript object."),r.createElement(c.d,{lang:"javascript",isLight:a,codeString:p}),r.createElement(i.Z,{variant:"body1",gutterBottom:!0},"State cannot be a ",r.createElement("code",null,"number"),", ",r.createElement("code",null,"boolean")," or any other data type accept ",r.createElement("code",null,"Objects"),"."),r.createElement(c.d,{lang:"javascript",isLight:a,codeString:f}),r.createElement(d.f,{id:"updating-state",className:n.contentTitle},"Updating State"),r.createElement(i.Z,{variant:"body1",gutterBottom:!0},"The state container enqueues the changes to the node state and tells React that the components within this node and it's children needs to be re-rendered with the updated state. The state container uses react state ",r.createElement("code",null,"updater")," for any updates to be carried out thoughout the application. The Roots Layer smartly handles the state of each Nodes within the state container and on request for state update, enqueues the requested change to the react state ",r.createElement("code",null,"updater"),"."),r.createElement(d.f,{id:"always-use-actions-tu-update-state",className:n.contentSubTitle},"Always use ",r.createElement("code",null,"Actions")," to update state"),r.createElement(i.Z,{variant:"body1",gutterBottom:!0},"You can think of actions as a smart messenger which computes the logical body defined and requests the state container to update the state of the Node. That makes it mandatory to update the state through actions only."),r.createElement(c.d,{lang:"javascript",isLight:a,codeString:b}),r.createElement(i.Z,{variant:"body1",gutterBottom:!0},"Rather than updating the state directly."),r.createElement(c.d,{lang:"javascript",isLight:a,codeString:y}),r.createElement(d.f,{id:"single-vs-nested-state-update",className:n.contentSubTitle},"Single vs Nested state update"),r.createElement(i.Z,{variant:"body1",gutterBottom:!0},"They can have multi-layered object structure based on the requirements. Although we recommend to define single layered state variables. But in some cases requirements often insisit upon complex layered objects as part of the state."),r.createElement(i.Z,{variant:"body1",gutterBottom:!0},"In case of updating single layered state objects you can use ",r.createElement("code",null,"useAction")," property of ",r.createElement(s.a,{name:"Node",route:"/node",id:"node-useaction"})," without a callback functionality."),r.createElement(d.f,{id:"updating-single-layered-state-properties",className:n.contentSubTitle},"Updating single layered state properties"),r.createElement(c.d,{lang:"javascript",isLight:a,codeString:h}),r.createElement(i.Z,{variant:"body1",gutterBottom:!0},r.createElement("code",null,"useAction")," with a callback or ",r.createElement("code",null,"useActionCallback")," is used when the state have nested propserties to be updated. These property methods provide state varaible as handy in first argument."),r.createElement(d.f,{id:"updating-nested-state-properties",className:n.contentSubTitle},"Updating nested state properties"),r.createElement(c.d,{lang:"javascript",isLight:a,codeString:g}),r.createElement(i.Z,{variant:"body1",gutterBottom:!0},"Considering the above example of updating the nested state properties the entire state object was returned with updates. There are other ways of updating nested objects. We strongly recommend to follow immutability along with any procedures."),r.createElement(u.W,{back:"NodeProps",next:"Actions"}))})),A=(N=2,function(e){if(Array.isArray(e))return e}(S=C)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,o=!1,r=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){o=!0,r=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw r}}return n}}(S,N)||function(e,t){if(e){if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(e,t):void 0}}(S,N)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),k=A[0],T=A[1],w=(0,o.EN)(T(k))},9809:function(e,t,n){"use strict";n.d(t,{f:function(){return g}});var a=n(7364),o=n(7294),r=(0,n(5209).Z)(o.createElement("path",{d:"M17 7h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c1.65 0 3 1.35 3 3s-1.35 3-3 3h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-9 5c0 .55.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1H9c-.55 0-1 .45-1 1zm2 3H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h3c.55 0 1-.45 1-1s-.45-1-1-1H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h3c.55 0 1-.45 1-1s-.45-1-1-1z"}),"LinkRounded"),i=n(7853),c=n(2656);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var u,m,p=(0,a.createNode)("HashLink",(function(e){var t=e.props,n=(0,c.z)(),a=t.children,d=s(t,["children"]),u=window.location.pathname;return o.createElement("div",{className:n.hasLinkContainer},o.createElement(r,{className:n.hashLinkIcon}),o.createElement(i.fO,l({smooth:!0,to:u+"#"+d.id},d),a))})),f=(m=2,function(e){if(Array.isArray(e))return e}(u=p)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,o=!1,r=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){o=!0,r=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw r}}return n}}(u,m)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(u,m)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),h=f[0],g=(0,f[1])(h)},7107:function(e,t,n){"use strict";n.d(t,{W:function(){return f}});var a=n(7364),o=n(5977),r=n(7294),i=n(2656),c=n(5291),l=n(9686);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,o=!1,r=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){o=!0,r=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw r}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var u=s((0,a.createNode)("NavigationButton",(function(e){var t=e.props,n=e.actions,a=(0,i.z)();return r.createElement("div",{className:a.buttonContainer},r.createElement("div",{className:a.button,onClick:function(){return n.GOTO_PREVIOUS(t)},style:{alignItems:"flex-end",justifyContent:"flex-start",visibility:t.back?"visible":"hidden"}},r.createElement("div",{className:a.btnSubLabel,style:{}},"Jump To"),r.createElement("div",{className:a.btnContentWrapper},r.createElement(c.Z,null),t.back)),r.createElement("div",{className:a.button,onClick:function(){return n.GOTO_NEXT(t)},style:{alignItems:"flex-start",justifyContent:"flex-end",visibility:t.next?"visible":"hidden"}},r.createElement("div",{className:a.btnSubLabel},"Jump To"),r.createElement("div",{className:a.btnContentWrapper},t.next,r.createElement(l.Z,null))))})),2),m=u[0],p=u[1];m.useContract("AppDrawer","GOTO_NEXT",(function(e,t){var n=s(t,1)[0],a=n.next;return n.history.push("/"+a.toLowerCase().replace(/ /g,"-")),{activeSection:a}})),m.useContract("AppDrawer","GOTO_PREVIOUS",(function(e,t){var n=s(t,1)[0],a=n.back;return n.history.push("/"+a.toLowerCase().replace(/ /g,"-")),{activeSection:a}}));var f=(0,o.EN)(p(m))},8876:function(e,t,n){"use strict";n.d(t,{a:function(){return m}});var a=n(7364),o=n(7294),r=n(2656),i=n(7853);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,o=!1,r=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){o=!0,r=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw r}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var s=c((0,a.createNode)("SelfLink",(function(e){var t=e.props,n=e.actions,a=(0,r.z)();return o.createElement(i.fO,{className:a.link,style:{cursor:"pointer"},to:t.route+"#"+t.id,onClick:function(){return n.NAVIGATE_TO(t)}},t.name)})),2),d=s[0],u=s[1];d.useContract("AppDrawer","NAVIGATE_TO",(function(e,t){var n=c(t,1)[0],a=n.name,o=(n.route,n.mask);return{activeSection:void 0!==o&&o||a}}));var m=u(d)}}]);