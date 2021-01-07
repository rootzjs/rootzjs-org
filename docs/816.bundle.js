(this.webpackChunkrootzjs_org=this.webpackChunkrootzjs_org||[]).push([[816],{6187:function(e,t,n){"use strict";n.d(t,{d:function(){return l}});var a=n(7294),o=n(8920),r=n(9693),i=n(9282),s=n(9739),c=n(2399),l=function(e){var t=e.isLight,n=e.codeString,l=e.lang,d=(0,o.Z)();return a.createElement(i.Z,{language:l,customStyle:{fontSize:17,borderRadius:3,padding:"12px 25px",margin:"10px 0 15px",backgroundColor:t?(0,r.U1)(d.text[80],1):d.background[20]},style:t?c.Z:s.Z},n)}},4426:function(e,t,n){"use strict";n.d(t,{N:function(){return r}});var a=n(7294),o=n(2656),r=function(e){var t=e.content,n=e.type,r=void 0===n?"note":n,i=e.children,s=(0,o.z)();switch(r){case"note":return a.createElement("div",{className:s.noteContainer},a.createElement("span",{className:s.noteLabel},"Note:"),a.createElement("span",{className:s.noteContent},t),i&&a.createElement("span",{className:s.noteContentLink},i));case"attention":return a.createElement("div",{className:s.noteContainerAttention},a.createElement("span",{className:s.noteLabel},"Attention:"),a.createElement("span",{className:s.noteContent},t),i&&a.createElement("span",{className:s.noteContentLink},i));case"info":return a.createElement("div",{className:s.noteContainerInfo},a.createElement("span",{className:s.noteLabel},"Info:"),a.createElement("span",{className:s.noteContent},t),i&&a.createElement("span",{className:s.noteContentLink},i));default:return a.createElement("div",{className:s.noteContainer},a.createElement("span",{className:s.noteLabel},"Note:"),a.createElement("span",{className:s.noteContent},t),i&&a.createElement("span",{className:s.noteContentLink},i))}}},1269:function(e,t,n){"use strict";n.d(t,{z:function(){return r}});var a=n(1120),o=n(9693),r=(0,a.Z)((function(e){return{root:{margin:e.isMobile?10:"25px 75px",width:"100%","& > p":{marginTop:25,lineHeight:1.75,color:e.text["00"]},"& li>p":{marginTop:20,color:e.text["00"]},"& ul > li":{color:e.text["00"]},"& code":{borderRadius:2,padding:"2px 7px",color:e.text["00"],backgroundColor:(0,o.U1)("#E4A800",.25)}},divider:{flexShrink:0,backgroundColor:e.text[80]},pageTitle:{fontSize:60,fontWeight:"bold",margin:"25px 0 15px",color:e.text[20],textDecoration:"auto"},contentTitle:{fontSize:35,fontWeight:"bold",color:e.text[20],textDecoration:"auto",borderBottom:"solid 2px ".concat(e.text[50])},contentSubTitle:{fontSize:28,fontWeight:"bold",color:e.text[30],textDecoration:"auto"},codeHeadLabel:{fontSize:20,marginTop:40,fontWeight:"bold",color:e.text[40],textDecoration:"auto"},logo:{width:"90vmin"},logoContract:{height:"60vmin"},codeHeadIcon:{fontSize:22,marginRight:10,color:"#E4A800"},imgWrapper:{display:"flex",backgroundColor:e.background[10]}}}))},2656:function(e,t,n){"use strict";n.d(t,{z:function(){return r}});var a=n(1120),o=n(9693),r=(0,a.Z)((function(e){return{link:{padding:"1px 4px",fontWeight:"bold",color:e.text[10],textDecoration:"none",backgroundColor:(0,o.U1)(e.palette.secondary.main,.25),borderBottom:"solid 2px ".concat(e.palette.secondary.main)},button:{fontSize:20,display:"flex",cursor:"pointer",flexDirection:"column",color:e.text["00"],textTransform:"capitalize",padding:e.isMobile?"15px 25px":"15px 50px",margin:e.isMobile?"25px 0 120px":"25px 0 50px",backgroundColor:(0,o.U1)(e.palette.secondary.main,.25),"&:hover":{backgroundColor:(0,o.U1)(e.palette.secondary.main,.4)}},btnSubLabel:{fontSize:15,color:e.text[30]},buttonContainer:{display:"flex",justifyContent:"space-between"},btnContentWrapper:{display:"flex","& svg":{margin:3}},noteContainer:{fontSize:17,borderRadius:3,margin:"40px 0",padding:"10px 20px",borderLeft:"solid 7px #E4A800",backgroundColor:(0,o.U1)("#E4A800",.25)},noteContainerAttention:{fontSize:17,borderRadius:3,margin:"40px 0",padding:"10px 20px",borderLeft:"solid 7px #E44100",backgroundColor:(0,o.U1)("#E44100",.25)},noteContainerInfo:{fontSize:17,borderRadius:3,margin:"40px 0",padding:"10px 20px",borderLeft:"solid 7px #00BDE4",backgroundColor:(0,o.U1)("#00BDE4",.25)},noteLabel:{marginRight:7,fontWeight:"bold",color:e.text[20]},noteContent:{color:e.text[20]},noteContentLink:{display:"block",margin:"25px 0 15px","& li":{margin:10}},embedCode:{margin:"10px 0 25px"},hasLinkContainer:{marginTop:40,display:"flex",alignItems:"center","& a":{flex:1,display:"flex"},"&:hover svg":{display:"inline-flex"}},hashLinkIcon:{display:"none",margin:"0 10px",fontSize:"3vmin",position:"relative",marginLeft:"calc(-3vmin - 10px)",color:e.palette.secondary.main}}}))},9816:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return L}});var a=n(3038),o=n.n(a),r=n(7364),i=n(5977),s=n(7294),c=n(2318),l=n(6187),d=n(4426),u=n(8876),m=n(9809),p=n(7107),g=n(1269),h="// *** VALID STATE ***\n// 1.\nnode.state({\n    mounted: false\n});\n\n// 2.\nlet intialState = { mounted: true }\nnode.state(intialState);\n",b="// *** INVALID STATE ***\n// 1. \nnode.state(10);\n\n// 2. \nnode.state(false);\n\n// 3.\nlet mounted = false;\nnode.state(mounted);\n",f='\nnode.state({\n    mounted: false\n});\n\nnode.useAction(\n    "ON_MOUNT", \n    { mounted: true }\n);\n',E='\nnode.state({\n    todos: [\n        {\n            completed: false,\n            name: "Learning Rootz JS"\n\n        },\n        {\n            completed: false,\n            name: "Create a React-Rootz App"\n        }\n    ]\n});\n\n// updating todo of name "Learning Rootz Js" as completed\nnode.useAction(\n    "ON_UPDATE", \n    (state, args) => {\n        const todos = state.todos.map(todo => {\n            if(todo.name === "Learning Rootz JS") {\n                return { ...todo, isCompleted: true }\n            } else {\n                return todo\n            }\n        });\n\n        return { todos }\n    }\n);\n',v="\n// *** RIGHT WAY ***\n\n<button onClick={actions.ON_BUTTON_CLICK}>\n    Click Me\n</button>\n",x="\n// *** WRONG WAY ***\n\n<button onClick={() => { state.clicked = true }}>\n    Click Me\n</button>\n",y="\nimport { getAllNodes } from '@rootzjs/core';\n\n// propvides state container object\nconst appState = getAllNodes();\n",N="\n{\n    #NODE_ID: {\n        actions: [],\n        contract: [],\n        state: {},\n        scope: {}\n    },\n    ...\n}\n",C=(0,r.createNode)("StateSection",(function(e){var t=e.props,n=(0,g.z)(),a="light"===t.theme;return s.createElement("div",{className:n.root},s.createElement("div",{id:"state",className:n.pageTitle},"State"),s.createElement(c.Z,{variant:"body1",gutterBottom:!0},"State are simple JavaScript objects. In a React-Rootz app state are centrally stored and maintained within the ",s.createElement(u.a,{name:"State Container",route:"/thinking-rootz",mask:"Thinking Rootz "}),". As other properties of ",s.createElement(u.a,{name:"NodeProps",route:"/nodeprops",id:"properties"}),", ",s.createElement("code",null,"state")," too is initialized within a Node. Initializing a state can be done through ",s.createElement("code",null,"node.state()"),"."),s.createElement(d.N,{content:"This provides you a perception of creating state for individual Nodes like in flux architechture, but is rather stored and managed centrally. This provides user to focus on defining the state of individual Nodes at a time, based on its own contribution to the application's behavior. And in case of debugging it makes it easy for the user to identify the change in state of a Node than rectifying the entire application.",type:"info"}),s.createElement(m.f,{id:"state-container",className:n.contentTitle},"State Container"),s.createElement(c.Z,{variant:"body1",gutterBottom:!0},"State Container is where the entire state of the application is stored and maintained. Users can view the current state of the application at any time by accessing the state container Object. This Object is ",s.createElement("code",null,"read-only")," in nature. The state container object can be accessed by ",s.createElement("code",null,"getAllNodes")," method."),s.createElement(m.f,{id:"using-getallnodes",className:n.contentSubTitle},"Using ",s.createElement("code",null,"getAllNodes")),s.createElement(l.d,{lang:"javascript",isLight:a,codeString:y}),s.createElement(c.Z,{variant:"body1",gutterBottom:!0},s.createElement("code",null,"getAllNodes")," returns the entire ",s.createElement(u.a,{name:"Root",route:"/thinking-rootz",mask:"Thinking Rootz",id:"core-elements"})," variable. This variable consists of entries of Nodes along with its properties. "),s.createElement(m.f,{id:"container-object",className:n.contentSubTitle},"Container Object"),s.createElement(c.Z,{variant:"body1",gutterBottom:!0},"The Root object provides insight not only of the Node state variables but also the Actions and Contracts defined in within them."),s.createElement(l.d,{lang:"json",isLight:a,codeString:N}),s.createElement(m.f,{id:"define-state",className:n.contentTitle},"Define State"),s.createElement(c.Z,{variant:"body1",gutterBottom:!0},"State should only be created using ",s.createElement("code",null,"node.state()")," method. A valid state should always be a JavaScript object."),s.createElement(l.d,{lang:"javascript",isLight:a,codeString:h}),s.createElement(c.Z,{variant:"body1",gutterBottom:!0},"State cannot be a ",s.createElement("code",null,"number"),", ",s.createElement("code",null,"boolean")," or any other data type accept ",s.createElement("code",null,"Objects"),"."),s.createElement(l.d,{lang:"javascript",isLight:a,codeString:b}),s.createElement(m.f,{id:"updating-state",className:n.contentTitle},"Updating State"),s.createElement(c.Z,{variant:"body1",gutterBottom:!0},"The state container enqueues the changes to the node state and tells React that the components within this node and it's children needs to be re-rendered with the updated state. The state container uses react state ",s.createElement("code",null,"updater")," for any updates to be carried out thoughout the application. The Roots Layer smartly handles the state of each Nodes within the state container and on request for state update, enqueues the requested change to the react state ",s.createElement("code",null,"updater"),"."),s.createElement(m.f,{id:"always-use-actions-tu-update-state",className:n.contentSubTitle},"Always use ",s.createElement("code",null,"Actions")," to update state"),s.createElement(c.Z,{variant:"body1",gutterBottom:!0},"You can think of actions as a smart messenger which computes the logical body defined and requests the state container to update the state of the Node. That makes it mandatory to update the state through actions only."),s.createElement(l.d,{lang:"javascript",isLight:a,codeString:v}),s.createElement(c.Z,{variant:"body1",gutterBottom:!0},"Rather than updating the state directly."),s.createElement(l.d,{lang:"javascript",isLight:a,codeString:x}),s.createElement(m.f,{id:"single-vs-nested-state-update",className:n.contentSubTitle},"Single vs Nested state update"),s.createElement(c.Z,{variant:"body1",gutterBottom:!0},"They can have multi-layered object structure based on the requirements. Although we recommend to define single layered state variables. But in some cases requirements often insisit upon complex layered objects as part of the state."),s.createElement(c.Z,{variant:"body1",gutterBottom:!0},"In case of updating single layered state objects you can use ",s.createElement("code",null,"useAction")," property of ",s.createElement(u.a,{name:"Node",route:"/node",id:"node-useaction"})," without a callback functionality."),s.createElement(m.f,{id:"updating-single-layered-state-properties",className:n.contentSubTitle},"Updating single layered state properties"),s.createElement(l.d,{lang:"javascript",isLight:a,codeString:f}),s.createElement(c.Z,{variant:"body1",gutterBottom:!0},s.createElement("code",null,"useAction")," with a callback or ",s.createElement("code",null,"useActionCallback")," is used when the state have nested propserties to be updated. These property methods provide state varaible as handy in first argument."),s.createElement(m.f,{id:"updating-nested-state-properties",className:n.contentSubTitle},"Updating nested state properties"),s.createElement(l.d,{lang:"javascript",isLight:a,codeString:E}),s.createElement(c.Z,{variant:"body1",gutterBottom:!0},"Considering the above example of updating the nested state properties the entire state object was returned with updates. There are other ways of updating nested objects. We strongly recommend to follow immutability along with any procedures."),s.createElement(p.W,{back:"NodeProps",next:"Actions"}))})),S=o()(C,2),k=S[0],T=S[1],L=(0,i.EN)(T(k))},9809:function(e,t,n){"use strict";n.d(t,{f:function(){return f}});var a=n(3038),o=n.n(a),r=n(7364),i=n(7154),s=n.n(i),c=n(6479),l=n.n(c),d=n(7294),u=(0,n(5209).Z)(d.createElement("path",{d:"M17 7h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c1.65 0 3 1.35 3 3s-1.35 3-3 3h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-9 5c0 .55.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1H9c-.55 0-1 .45-1 1zm2 3H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h3c.55 0 1-.45 1-1s-.45-1-1-1H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h3c.55 0 1-.45 1-1s-.45-1-1-1z"}),"LinkRounded"),m=n(7853),p=n(2656),g=(0,r.createNode)("HashLink",(function(e){var t=e.props,n=(0,p.z)(),a=t.children,o=l()(t,["children"]),r=window.location.pathname;return d.createElement("div",{className:n.hasLinkContainer},d.createElement(u,{className:n.hashLinkIcon}),d.createElement(m.fO,s()({smooth:!0,to:r+"#"+o.id},o),a))})),h=o()(g,2),b=h[0],f=(0,h[1])(b)},7107:function(e,t,n){"use strict";n.d(t,{W:function(){return h}});var a=n(3038),o=n.n(a),r=n(7364),i=n(5977),s=n(7294),c=n(2656),l=n(5291),d=n(9686),u=(0,r.createNode)("NavigationButton",(function(e){var t=e.props,n=e.actions,a=(0,c.z)();return s.createElement("div",{className:a.buttonContainer},s.createElement("div",{className:a.button,onClick:function(){return n.GOTO_PREVIOUS(t)},style:{alignItems:"flex-end",justifyContent:"flex-start",visibility:t.back?"visible":"hidden"}},s.createElement("div",{className:a.btnSubLabel,style:{}},"Jump To"),s.createElement("div",{className:a.btnContentWrapper},s.createElement(l.Z,null),t.back)),s.createElement("div",{className:a.button,onClick:function(){return n.GOTO_NEXT(t)},style:{alignItems:"flex-start",justifyContent:"flex-end",visibility:t.next?"visible":"hidden"}},s.createElement("div",{className:a.btnSubLabel},"Jump To"),s.createElement("div",{className:a.btnContentWrapper},t.next,s.createElement(d.Z,null))))})),m=o()(u,2),p=m[0],g=m[1];p.useContract("AppDrawer","GOTO_NEXT",(function(e,t){var n=o()(t,1)[0],a=n.next;return n.history.push("/"+a.toLowerCase().replace(/ /g,"-")),{activeSection:a}})),p.useContract("AppDrawer","GOTO_PREVIOUS",(function(e,t){var n=o()(t,1)[0],a=n.back;return n.history.push("/"+a.toLowerCase().replace(/ /g,"-")),{activeSection:a}}));var h=(0,i.EN)(g(p))},8876:function(e,t,n){"use strict";n.d(t,{a:function(){return p}});var a=n(3038),o=n.n(a),r=n(7364),i=n(7294),s=n(2656),c=n(7853),l=(0,r.createNode)("SelfLink",(function(e){var t=e.props,n=e.actions,a=(0,s.z)();return i.createElement(c.fO,{className:a.link,style:{cursor:"pointer"},to:t.route+"#"+t.id,onClick:function(){return n.NAVIGATE_TO(t)}},t.name)})),d=o()(l,2),u=d[0],m=d[1];u.useContract("AppDrawer","NAVIGATE_TO",(function(e,t){var n=o()(t,1)[0],a=n.name,r=(n.route,n.mask);return{activeSection:void 0!==r&&r||a}}));var p=m(u)}}]);