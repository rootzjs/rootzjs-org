(this["webpackJsonprootzjs-org"]=this["webpackJsonprootzjs-org"]||[]).push([[6],{144:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n(7),a=Object(o.y)((function(e){return{link:{padding:"1px 4px",fontWeight:"bold",color:e.text[10],textDecoration:"none",backgroundColor:Object(o.x)(e.palette.secondary.main,.25),borderBottom:"solid 2px ".concat(e.palette.secondary.main)},button:{fontSize:20,display:"flex",cursor:"pointer",flexDirection:"column",color:e.text["00"],textTransform:"capitalize",padding:e.isMobile?"15px 25px":"15px 50px",margin:e.isMobile?"25px 0 120px":"25px 0 50px",backgroundColor:Object(o.x)(e.palette.secondary.main,.25),"&:hover":{backgroundColor:Object(o.x)(e.palette.secondary.main,.4)}},btnSubLabel:{fontSize:15,color:e.text[30]},buttonContainer:{display:"flex",justifyContent:"space-between"},btnContentWrapper:{display:"flex","& svg":{margin:3}},noteContainer:{fontSize:17,borderRadius:3,margin:"40px 0",padding:"10px 20px",borderLeft:"solid 7px #E4A800",backgroundColor:Object(o.x)("#E4A800",.25)},noteContainerAttention:{fontSize:17,borderRadius:3,margin:"40px 0",padding:"10px 20px",borderLeft:"solid 7px #E44100",backgroundColor:Object(o.x)("#E44100",.25)},noteContainerInfo:{fontSize:17,borderRadius:3,margin:"40px 0",padding:"10px 20px",borderLeft:"solid 7px #00BDE4",backgroundColor:Object(o.x)("#00BDE4",.25)},noteLabel:{marginRight:7,fontWeight:"bold",color:e.text[20]},noteContent:{color:e.text[20]},noteContentLink:{display:"block",margin:"25px 0 15px","& li":{margin:10}},embedCode:{margin:"10px 0 25px"},hasLinkContainer:{marginTop:40,display:"flex",alignItems:"center","& a":{flex:1,display:"flex"},"&:hover svg":{display:"inline-flex"}},hashLinkIcon:{display:"none",margin:"0 10px",fontSize:"3vmin",position:"relative",marginLeft:"calc(-3vmin - 10px)",color:e.palette.secondary.main}}}))},145:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n(7),a=Object(o.y)((function(e){return{root:{margin:e.isMobile?10:"25px 75px",width:"100%","& > p":{marginTop:25,lineHeight:1.75,color:e.text["00"]},"& li>p":{marginTop:20,color:e.text["00"]},"& ul > li":{color:e.text["00"]},"& code":{borderRadius:2,padding:"2px 7px",color:e.text["00"],backgroundColor:Object(o.x)("#E4A800",.25)}},divider:{flexShrink:0,backgroundColor:e.text[80]},pageTitle:{fontSize:60,fontWeight:"bold",margin:"25px 0 15px",color:e.text[20],textDecoration:"auto"},contentTitle:{fontSize:35,fontWeight:"bold",color:e.text[20],textDecoration:"auto",borderBottom:"solid 2px ".concat(e.text[50])},contentSubTitle:{fontSize:28,fontWeight:"bold",color:e.text[30],textDecoration:"auto"},codeHeadLabel:{fontSize:20,marginTop:40,fontWeight:"bold",color:e.text[40],textDecoration:"auto"},logo:{width:"90vmin"},logoContract:{height:"60vmin"},codeHeadIcon:{fontSize:22,marginRight:10,color:"#E4A800"},imgWrapper:{display:"flex",backgroundColor:e.background[10]}}}))},147:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var o=n(25),a=n(31),c=n(12),i=n(2),s=(n(0),n(144)),r=n(7),d=Object(a.createNode)("NavigationButton",(function(e){var t=e.props,n=e.actions,o=Object(s.a)();return Object(i.jsxs)("div",{className:o.buttonContainer,children:[Object(i.jsxs)("div",{className:o.button,onClick:function(){return n.GOTO_PREVIOUS(t)},style:{alignItems:"flex-end",justifyContent:"flex-start",visibility:t.back?"visible":"hidden"},children:[Object(i.jsx)("div",{className:o.btnSubLabel,style:{},children:"Jump To"}),Object(i.jsxs)("div",{className:o.btnContentWrapper,children:[Object(i.jsx)(r.p,{}),t.back]})]}),Object(i.jsxs)("div",{className:o.button,onClick:function(){return n.GOTO_NEXT(t)},style:{alignItems:"flex-start",justifyContent:"flex-end",visibility:t.next?"visible":"hidden"},children:[Object(i.jsx)("div",{className:o.btnSubLabel,children:"Jump To"}),Object(i.jsxs)("div",{className:o.btnContentWrapper,children:[t.next,Object(i.jsx)(r.q,{})]})]})]})})),l=Object(o.a)(d,2),h=l[0],p=l[1];h.useContract("AppDrawer","GOTO_NEXT",(function(e,t){var n=Object(o.a)(t,1)[0],a=n.next;return n.history.push("/"+a.toLowerCase().replace(/ /g,"-")),{activeSection:a}})),h.useContract("AppDrawer","GOTO_PREVIOUS",(function(e,t){var n=Object(o.a)(t,1)[0],a=n.back;return n.history.push("/"+a.toLowerCase().replace(/ /g,"-")),{activeSection:a}}));var b=Object(c.o)(p(h))},148:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(2),a=(n(0),n(7)),c=n(456),i=n(155),s=n(154),r=function(e){var t=e.isLight,n=e.codeString,r=e.lang,d=Object(a.z)();return Object(o.jsx)(c.a,{language:r,customStyle:{fontSize:17,borderRadius:3,padding:"12px 25px",margin:"10px 0 15px",backgroundColor:t?Object(a.x)(d.text[80],1):d.background[20]},style:t?s.a:i.a,children:n})}},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n(2),a=(n(0),n(144)),c=function(e){var t=e.content,n=e.type,c=void 0===n?"note":n,i=e.children,s=Object(a.a)();switch(c){case"note":return Object(o.jsxs)("div",{className:s.noteContainer,children:[Object(o.jsx)("span",{className:s.noteLabel,children:"Note:"}),Object(o.jsx)("span",{className:s.noteContent,children:t}),i&&Object(o.jsx)("span",{className:s.noteContentLink,children:i})]});case"attention":return Object(o.jsxs)("div",{className:s.noteContainerAttention,children:[Object(o.jsx)("span",{className:s.noteLabel,children:"Attention:"}),Object(o.jsx)("span",{className:s.noteContent,children:t}),i&&Object(o.jsx)("span",{className:s.noteContentLink,children:i})]});case"info":return Object(o.jsxs)("div",{className:s.noteContainerInfo,children:[Object(o.jsx)("span",{className:s.noteLabel,children:"Info:"}),Object(o.jsx)("span",{className:s.noteContent,children:t}),i&&Object(o.jsx)("span",{className:s.noteContentLink,children:i})]});default:return Object(o.jsxs)("div",{className:s.noteContainer,children:[Object(o.jsx)("span",{className:s.noteLabel,children:"Note:"}),Object(o.jsx)("span",{className:s.noteContent,children:t}),i&&Object(o.jsx)("span",{className:s.noteContentLink,children:i})]})}}},150:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var o=n(25),a=n(31),c=n(2),i=n(13);function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n(0);var r=n(7),d=n(146),l=n(144),h=Object(a.createNode)("HashLink",(function(e){var t=e.props,n=Object(l.a)(),o=t.children,a=s(t,["children"]),h=window.location.pathname;return Object(c.jsxs)("div",{className:n.hasLinkContainer,children:[Object(c.jsx)(r.j,{className:n.hashLinkIcon}),Object(c.jsx)(d.HashLink,Object(i.a)(Object(i.a)({smooth:!0,to:h+"#"+a.id},a),{},{children:o}))]})})),p=Object(o.a)(h,2),b=p[0],j=(0,p[1])(b)},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var o=n(25),a=n(31),c=n(2),i=(n(0),n(144)),s=n(146),r=Object(a.createNode)("SelfLink",(function(e){var t=e.props,n=e.actions,o=Object(i.a)();return Object(c.jsx)(s.HashLink,{className:o.link,style:{cursor:"pointer"},to:t.route+"#"+t.id,onClick:function(){return n.NAVIGATE_TO(t)},children:t.name})})),d=Object(o.a)(r,2),l=d[0],h=d[1];l.useContract("AppDrawer","NAVIGATE_TO",(function(e,t){var n=Object(o.a)(t,1)[0],a=n.name,c=(n.route,n.mask);return{activeSection:void 0!==c&&c||a}}));var p=h(l)},153:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n(2),a=(n(0),n(144));function c(e){var t=Object(a.a)();return Object(o.jsx)("div",{className:t.embedCode,dangerouslySetInnerHTML:{__html:e.iframe?e.iframe:""}})}var i=function(e){var t=e.iFrame;return Object(o.jsx)(c,{iframe:t,allow:"autoplay"})}},157:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n(2),a=(n(0),n(144)),c=function(e){var t=e.name,n=e.url,c=Object(a.a)();return Object(o.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",className:c.link,children:t})}},458:function(e,t,n){"use strict";n.r(t);var o=n(25),a=n(31),c=n(2),i=(n(0),n(7)),s=n(148),r=n(149),d=n(157),l=n(150),h=n(151),p=n(147),b=n.p+"static/media/react-todo.49c88600.svg",j=n.p+"static/media/rootz-todo.e35e1484.svg",m=n(145),u=n(153),x='\nnode.useContract("TodoList", "ADD_TODO", (state, [TodoName]) => {\n    return {\n        todos: [\n            ...state.todos,\n            { name: TodoName, completed: false }\n        ]\n    }\n});\n',g='\nlet inputRef = null;\n\nconst Component = ({ actions }) => {\n    return (\n        <div>\n            <input type="text" ref={ref => { inputRef = ref }} />\n            <button onClick={() => actions.ADD_TODO(inputRef.value)}>\n                Add Todo\n            </button>\n        </div>\n    )\n}\n',f=' \nnode.useContract("TodoList", "ADD_TODO", { \n    name: "Learn Rootz JS", completed: false \n}); \n',O=' \nimport { createNode } from "@rootzjs/core";\nimport { Component } from "../components/AddTodo";\n\nconst [node, dispatchNode] = createNode("AddTodo", Component);\n\n//** here the state param represents the current state of todoList\nnode.useContract("TodoList", "ADD_TODO", (state, [TodoName]) => {\n    return {\n        todos: [\n            ...state.todos,\n            { name: TodoName, completed: false }\n        ]\n    }\n});\n\nexport const AddTodo = dispatchNode(node);\n',y='\nimport { createNode } from "@rootzjs/core";\nimport { Component } from "../components/TodoList";\n\nconst [node, dispatchNode] = createNode("TodoList", Component);\n\nnode.state({\n    todos: []\n});\n\nexport const TodoList = dispatchNode(node);\n',v='\nimport { createNode } from "@rootzjs/core";\nimport { Component } from "../components/TodoList";\n\nconst [node, dispatchNode] = createNode("TodoList", Component);\n\nnode.state({\n    todos: []\n});\n\nexport const TodoList = dispatchNode(node);\n',w=' \nimport { createNode } from "@rootzjs/core";\nimport { Component } from "../components/AddTodo";\n\nconst [node, dispatchNode] = createNode("AddTodo", Component);\n\n//** here the state param represents the current state of todoList\nnode.useContract("TodoList", "FETCH_TODOS", async (state, args) => {\n    try {\n        const resp = await fetch("http://mockapi.com/todoapp/todos");\n        const data = await resp.json();\n        return { \n            todos: [\n                ...state.todos,\n                ...data.todos\n            ]\n        }\n    } catch {\n        return {\n            hasErrorFetchingTodos: true\n        }\n    }\n});\n\nexport const AddTodo = dispatchNode(node);\n',N="\nlet inputRef = null;\n\nconst Component = ({ actions }) => {\n    return (\n        <div>\n            <button onClick={actions.FETCH_TODOS}>\n                Fetch Todo\n            </button>\n        </div>\n    )\n}\n",T=Object(a.createNode)("ContractSection",(function(e){var t=e.props,n=Object(m.a)(),o="light"===t.theme,a='<iframe src="https://codesandbox.io/embed/bold-lamarr-jtj48?fontsize=14&hidenavigation=1&theme='.concat(t.theme,'"\n    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"\n    title="rootzjs-simple-todo-app"\n    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"\n    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"\n  ></iframe>'),T='<iframe src="https://codesandbox.io/embed/solitary-glitter-7y83n?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fnodes%2FFetchTodo.js&theme='.concat(t.theme,'"\n  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"\n  title="rootzjs-create-async-contract"\n  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"\n  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"\n></iframe>'),C='<iframe src="https://codesandbox.io/embed/rootzjs-cyclic-dependecy-solution-2dbjn?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents%2FNode1.jsx&theme='.concat(t.theme,'"\nstyle="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"\ntitle="rootzjs-cyclic-dependecy-solution"\nallow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"\nsandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"\n></iframe>');return Object(c.jsxs)("div",{className:n.root,children:[Object(c.jsx)("div",{id:"actions",className:n.pageTitle,children:"Contract"}),Object(c.jsxs)(i.w,{variant:"body1",gutterBottom:!0,children:["Contracts are actions with different intentions. ",Object(c.jsx)("code",{children:"Actions"})," are intended to update the state in which it is defined. While a contract can ",Object(c.jsx)(h.a,{name:"update the state",route:"/state",mask:"State",id:"updating-state"})," of any Node defined within an application. "]}),Object(c.jsx)(l.a,{id:"its-still-action-by-nature",className:n.contentSubTitle,children:"It's still an action by nature"}),Object(c.jsxs)(i.w,{variant:"body1",gutterBottom:!0,children:['If contracts and actions have such a small difference then why call it contract and not actions? This is because the term "contract" self explains its purpose of having an agreement. This agreement can be between two or more nodes. Conceptually the node which initiates the update is called as the ',Object(c.jsx)("b",{children:"contractee"})," while the one who receives the update is called the ",Object(c.jsx)("b",{children:"contractor"}),". These terms are basically to understand the connections and differentiate them from one another."]}),Object(c.jsx)(r.a,{content:"The terms contractee and contractor is just for understanding the relationship between nodes. They are not used as keywords within the app !"}),Object(c.jsxs)(l.a,{id:"why-use-contract",className:n.contentTitle,children:["Why use ",Object(c.jsx)("code",{children:"Contract"})," ?"]}),Object(c.jsxs)(i.w,{variant:"body1",gutterBottom:!0,children:["To update a component from another component you would need ",Object(c.jsx)(d.a,{name:"to lift the state up",url:"https://reactjs.org/docs/lifting-state-up.html"}),". At one point eventually you might end up declaring the state and most of the functions changing it, at the parent component. And passing them as props to the child components to update when required. With this approach we end up defining some parts of state and its update logic; of the child components in the parent one."]}),Object(c.jsx)(l.a,{id:"lifting-state-up",className:n.contentSubTitle,children:"Lifting state Up"}),Object(c.jsx)("div",{className:n.imgWrapper,children:Object(c.jsx)("img",{alt:"logo",src:b,className:n.logoContract})}),Object(c.jsxs)(i.w,{variant:"body1",gutterBottom:!0,children:["How about keeping the the state and most importantly its update logic at their respective component level. And finding an alternative to update the state of one component from another. Without letting you disturb the location of defining the state and its logic. With this approach the state can now be defined within its component's scope. This keeps the descriptive nature of the component while ",Object(c.jsx)("b",{children:"reducing the burden on a single component handling different states"})," and most importantly ",Object(c.jsx)("b",{children:"avoiding redundant renderings"}),"."]}),Object(c.jsx)(l.a,{id:"defining-a-contract",className:n.contentSubTitle,children:"Having a contract"}),Object(c.jsx)("div",{className:n.imgWrapper,children:Object(c.jsx)("img",{alt:"logo",src:j,className:n.logoContract})}),Object(c.jsx)(l.a,{id:"accessing-contract",className:n.contentTitle,children:"Accessing Contract"}),Object(c.jsxs)(i.w,{variant:"body1",gutterBottom:!0,children:["As we have tried creating a Contract, we must see how we could access them in a component. ",Object(c.jsxs)("b",{children:["You can access a contract within a component by the ",Object(c.jsx)(h.a,{name:"actions property of NodeProps",route:"/nodeprops",mask:"NodeProps",id:"accessing-nodeprops"})]}),". Contract is no different than an action. A Contract can be treated as an action if you mention the NODE_ID of the existing Node within which it is defined. An action gets it handled internally which lets the user not pass the NODE_ID, as it is defined within the scope of the same Node."]}),Object(c.jsx)(r.a,{content:'An "Action" and a "Contract" is the same when the later has the NODE_ID set to its own Node.',type:"info"}),Object(c.jsx)("div",{className:n.codeHeadLabel,children:"nodes/AddTodo.js"}),Object(c.jsx)(s.a,{lang:"javascript",isLight:o,codeString:x}),Object(c.jsxs)(i.w,{variant:"body1",gutterBottom:!0,children:[Object(c.jsx)("b",{children:"There is no difference in accessing and using a contract or an action within a component"}),". Both are accessed through NodeProps.actions property."]}),Object(c.jsx)("div",{className:n.codeHeadLabel,children:"components/AddTodo.js"}),Object(c.jsx)(s.a,{lang:"javascript",isLight:o,codeString:g}),Object(c.jsx)(r.a,{content:"Actions and Contract are defined separately, but both are accessible through NodeProps.actions only. Internally they are pretty much the same functionality, contract having an extra parameter to let the state container know whom to update when called."}),Object(c.jsx)(l.a,{id:"create-contract",className:n.contentTitle,children:"Create Contract"}),Object(c.jsxs)(i.w,{variant:"body1",gutterBottom:!0,children:["Creating a contract is pretty similar to ",Object(c.jsx)(h.a,{name:"creating an action",route:"/actions",mask:"Actions",id:"create-actions"}),". There are two approaches to create them, ",Object(c.jsx)("code",{children:"node.useContract"})," and ",Object(c.jsx)("code",{children:"node.useContractCallback"}),". The only syntactical difference in creating a Contract over action is, it accepts the ",Object(c.jsx)("code",{children:"id"})," of the target Node. The ",Object(c.jsx)(h.a,{name:"node.useContract",route:"/node",mask:"Node",id:"node-usecontract"})," accepts three parameters ",Object(c.jsx)("code",{children:"NODE_ID"}),", ",Object(c.jsx)("code",{children:"ACTION_ID"})," and ",Object(c.jsx)("code",{children:"new state object"}),", it's a ",Object(c.jsx)("b",{children:"Pure Contract"}),". It is used for updating a Node with a simple state object, not relying on any update logic. While the ",Object(c.jsx)(h.a,{name:"node.useContractCallback",route:"/node",mask:"Node",id:"node-usecontractcallback"})," comes into picture when you have an update logic or any dependency on conditional parameters to generate state."]}),Object(c.jsx)(i.w,{variant:"body1",gutterBottom:!0,children:"Let's take an example to understand more about them."}),Object(c.jsx)(l.a,{id:"pure-contract",className:n.contentSubTitle,children:"Pure Contract"}),Object(c.jsx)(s.a,{lang:"javascript",isLight:o,codeString:f}),Object(c.jsxs)(i.w,{variant:"body1",gutterBottom:!0,children:["The ",Object(c.jsx)("b",{children:"AddTodo"})," represents the ",Object(c.jsx)("code",{children:"NODE_ID"}),", while the ",Object(c.jsx)("b",{children:"ADD_TODO"})," is the ",Object(c.jsx)("code",{children:"ACTIONS_ID"})," followed by the new state object."]}),Object(c.jsx)(l.a,{id:"contract-with-update-logic",className:n.contentSubTitle,children:"Contract with Update Logic"}),Object(c.jsxs)(i.w,{variant:"body1",gutterBottom:!0,children:["To understand the one with the update logic, let's take an ",Object(c.jsx)(d.a,{name:"example of a Todo App",url:"https://rootzjs.github.io/examples-todo-with-ui/"}),". Consider a scenario mentioned in the ",Object(c.jsx)(h.a,{name:"above diagram",route:"/contract",mask:"Contract",id:"defining-a-contract"}),", where the TodoList is maintained at the TodoList Node. And the AddTodo Node is making a contract with it for updating the todos whenever a new todo is added. As a part of the contract the ",Object(c.jsx)("b",{children:"TodoList allows the AddTodo to access its current state by passing it as a paramter."})]}),Object(c.jsx)("div",{className:n.codeHeadLabel,children:"nodes/TodoList.js"}),Object(c.jsx)(s.a,{lang:"javascript",isLight:o,codeString:y}),Object(c.jsx)("div",{className:n.codeHeadLabel,children:"nodes/AddTodo.js"}),Object(c.jsx)(s.a,{lang:"javascript",isLight:o,codeString:O}),Object(c.jsx)("div",{className:n.codeHeadLabel,children:"Try it out..."}),Object(c.jsx)(u.a,{iFrame:a}),Object(c.jsx)(r.a,{content:'The "state" argument of contract ADD_TODO, represents the current state of "TodoList". A Contract lets you access the state of the Node you are updating.'}),Object(c.jsx)(l.a,{id:"create-async-contract",className:n.contentTitle,children:"Create Async Contract"}),Object(c.jsxs)(i.w,{variant:"body1",gutterBottom:!0,children:["As we have already discussed the advantages of taking the ",Object(c.jsx)(h.a,{name:"async await approach over fetch chaining",route:"/actions",mask:"Actions",id:"actions-with-async-dependencies"})," and would be following the same, for examples coming ahead."]}),Object(c.jsx)(i.w,{variant:"body1",gutterBottom:!0,children:"Let's consider the same example of adding a todo. But this time we would fetch the todos through an API."}),Object(c.jsx)("div",{className:n.codeHeadLabel,children:"nodes/TodoListAsync.js"}),Object(c.jsx)(s.a,{lang:"javascript",isLight:o,codeString:v}),Object(c.jsx)("div",{className:n.codeHeadLabel,children:"nodes/FetchTodo.js"}),Object(c.jsx)(s.a,{lang:"javascript",isLight:o,codeString:w}),Object(c.jsx)("div",{className:n.codeHeadLabel,children:"components/FetchTodo.jsx"}),Object(c.jsx)(s.a,{lang:"javascript",isLight:o,codeString:N}),Object(c.jsxs)(i.w,{variant:"body1",gutterBottom:!0,children:["The ",Object(c.jsx)("code",{children:"FETCH_TODOS"})," is a contract with an async callback which handles the state update based on the response. When compared to the traditional approach of updating the state of the parent, this provides a ",Object(c.jsx)("b",{children:"call and forget"})," approach for the contractor i.e the ",Object(c.jsx)("b",{children:"FetchTodo"})," Node as well the contractee, ",Object(c.jsx)("b",{children:"TodoList"}),". Let's take an working example of a Todo App fetching and displaying the list of Todos with async logic."]}),Object(c.jsx)("div",{className:n.codeHeadLabel,children:"Try it out..."}),Object(c.jsx)(u.a,{iFrame:T}),Object(c.jsx)(l.a,{id:"cyclic-dependency",className:n.contentSubTitle,children:"Cyclic Dependency"}),Object(c.jsxs)(i.w,{variant:"body1",gutterBottom:!0,children:[Object(c.jsx)("b",{children:"Cyclic Dependency"})," are scenarios where a contractor is also a contractee. That is one Node updating another, which intern updates the same Node creating a cyclic dependency calls. This is basically a common scenario which can occur in any application."]}),Object(c.jsxs)(i.w,{variant:"body1",gutterBottom:!0,children:["This can be easily solved by ",Object(c.jsx)("code",{children:"React.useRef"})," hook. Let's consider an example."]}),Object(c.jsx)("div",{className:n.codeHeadLabel,children:"Try it out..."}),Object(c.jsx)(u.a,{iFrame:C}),Object(c.jsx)(p.a,{back:"Actions",next:"Profile"})]})})),C=Object(o.a)(T,2),L=C[0],k=C[1];t.default=k(L)}}]);
//# sourceMappingURL=6.cecbf3e2.chunk.js.map