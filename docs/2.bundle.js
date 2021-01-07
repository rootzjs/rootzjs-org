(this.webpackChunkrootzjs_org=this.webpackChunkrootzjs_org||[]).push([[2],{6187:function(e,t,n){"use strict";n.d(t,{d:function(){return s}});var r=n(7294),o=n(8920),a=n(9693),i=n(9282),l=n(9739),c=n(2399),s=function(e){var t=e.isLight,n=e.codeString,s=e.lang,d=(0,o.Z)();return r.createElement(i.Z,{language:s,customStyle:{fontSize:17,borderRadius:3,padding:"12px 25px",margin:"10px 0 15px",backgroundColor:t?(0,a.U1)(d.text[80],1):d.background[20]},style:t?c.Z:l.Z},n)}},9173:function(e,t,n){"use strict";n.d(t,{E:function(){return i}});var r=n(7294),o=n(2656);function a(e){var t=(0,o.z)();return r.createElement("div",{className:t.embedCode,dangerouslySetInnerHTML:{__html:e.iframe?e.iframe:""}})}var i=function(e){var t=e.iFrame;return r.createElement(a,{iframe:t,allow:"autoplay"})}},4426:function(e,t,n){"use strict";n.d(t,{N:function(){return a}});var r=n(7294),o=n(2656),a=function(e){var t=e.content,n=e.type,a=void 0===n?"note":n,i=e.children,l=(0,o.z)();switch(a){case"note":return r.createElement("div",{className:l.noteContainer},r.createElement("span",{className:l.noteLabel},"Note:"),r.createElement("span",{className:l.noteContent},t),i&&r.createElement("span",{className:l.noteContentLink},i));case"attention":return r.createElement("div",{className:l.noteContainerAttention},r.createElement("span",{className:l.noteLabel},"Attention:"),r.createElement("span",{className:l.noteContent},t),i&&r.createElement("span",{className:l.noteContentLink},i));case"info":return r.createElement("div",{className:l.noteContainerInfo},r.createElement("span",{className:l.noteLabel},"Info:"),r.createElement("span",{className:l.noteContent},t),i&&r.createElement("span",{className:l.noteContentLink},i));default:return r.createElement("div",{className:l.noteContainer},r.createElement("span",{className:l.noteLabel},"Note:"),r.createElement("span",{className:l.noteContent},t),i&&r.createElement("span",{className:l.noteContentLink},i))}}},1269:function(e,t,n){"use strict";n.d(t,{z:function(){return a}});var r=n(1120),o=n(9693),a=(0,r.Z)((function(e){return{root:{margin:e.isMobile?10:"25px 75px",width:"100%","& > p":{marginTop:25,lineHeight:1.75,color:e.text["00"]},"& li>p":{marginTop:20,color:e.text["00"]},"& ul > li":{color:e.text["00"]},"& code":{borderRadius:2,padding:"2px 7px",color:e.text["00"],backgroundColor:(0,o.U1)("#E4A800",.25)}},divider:{flexShrink:0,backgroundColor:e.text[80]},pageTitle:{fontSize:60,fontWeight:"bold",margin:"25px 0 15px",color:e.text[20],textDecoration:"auto"},contentTitle:{fontSize:35,fontWeight:"bold",color:e.text[20],textDecoration:"auto",borderBottom:"solid 2px ".concat(e.text[50])},contentSubTitle:{fontSize:28,fontWeight:"bold",color:e.text[30],textDecoration:"auto"},codeHeadLabel:{fontSize:20,marginTop:40,fontWeight:"bold",color:e.text[40],textDecoration:"auto"},logo:{width:"90vmin"},logoContract:{height:"60vmin"},codeHeadIcon:{fontSize:22,marginRight:10,color:"#E4A800"},imgWrapper:{display:"flex",backgroundColor:e.background[10]}}}))},2656:function(e,t,n){"use strict";n.d(t,{z:function(){return a}});var r=n(1120),o=n(9693),a=(0,r.Z)((function(e){return{link:{padding:"1px 4px",fontWeight:"bold",color:e.text[10],textDecoration:"none",backgroundColor:(0,o.U1)(e.palette.secondary.main,.25),borderBottom:"solid 2px ".concat(e.palette.secondary.main)},button:{fontSize:20,display:"flex",cursor:"pointer",flexDirection:"column",color:e.text["00"],textTransform:"capitalize",padding:e.isMobile?"15px 25px":"15px 50px",margin:e.isMobile?"25px 0 120px":"25px 0 50px",backgroundColor:(0,o.U1)(e.palette.secondary.main,.25),"&:hover":{backgroundColor:(0,o.U1)(e.palette.secondary.main,.4)}},btnSubLabel:{fontSize:15,color:e.text[30]},buttonContainer:{display:"flex",justifyContent:"space-between"},btnContentWrapper:{display:"flex","& svg":{margin:3}},noteContainer:{fontSize:17,borderRadius:3,margin:"40px 0",padding:"10px 20px",borderLeft:"solid 7px #E4A800",backgroundColor:(0,o.U1)("#E4A800",.25)},noteContainerAttention:{fontSize:17,borderRadius:3,margin:"40px 0",padding:"10px 20px",borderLeft:"solid 7px #E44100",backgroundColor:(0,o.U1)("#E44100",.25)},noteContainerInfo:{fontSize:17,borderRadius:3,margin:"40px 0",padding:"10px 20px",borderLeft:"solid 7px #00BDE4",backgroundColor:(0,o.U1)("#00BDE4",.25)},noteLabel:{marginRight:7,fontWeight:"bold",color:e.text[20]},noteContent:{color:e.text[20]},noteContentLink:{display:"block",margin:"25px 0 15px","& li":{margin:10}},embedCode:{margin:"10px 0 25px"},hasLinkContainer:{marginTop:40,display:"flex",alignItems:"center","& a":{flex:1,display:"flex"},"&:hover svg":{display:"inline-flex"}},hashLinkIcon:{display:"none",margin:"0 10px",fontSize:"3vmin",position:"relative",marginLeft:"calc(-3vmin - 10px)",color:e.palette.secondary.main}}}))},3002:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r=n(7364),o=n(7294),a=n(2318),i=n(6187),l=n(4426),c=n(9809),s=n(8876),d=n(7107),m=n(1269),u=n(9173),p='\nnode.setProfile({\n\tsessionId: "9694dca333f01433ecb179d32251c946"\n});\n',f="\nimport { getProfile } from '@rootzjs/core';\n...\n\nconst { sessionId } = getProfile();\n",h="\nimport { setProfile } from '@rootzjs/core';\n...\n\nsetProfile({\n\tsessionId: \"9694dca333f01433ecb179d32251c946\"\n});\n";function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y,g,v=(0,r.createNode)("ProfileSection",(function(e){var t=e.props,n=(0,m.z)(),r="light"===t.theme,b='<iframe src="https://codesandbox.io/embed/rootzjs-set-profile-l48tr?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fnodes%2FNode2.js&theme='.concat(t.theme,'"\n    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"\n    title="rootzjs-set-profile"\n    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"\n    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"\n  ></iframe>'),y='<iframe src="https://codesandbox.io/embed/rootzjs-profile-from-library-within-node-u0bhy?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fnodes%2FNode2.js&theme='.concat(t.theme,'"\n    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"\n    title="rootzjs-profile-from-library-within-node"\n    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"\n    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"\n  ></iframe>'),g='<iframe src="https://codesandbox.io/embed/rootzjs-profile-from-library-x1s09?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents%2FNode2.jsx&theme='.concat(t.theme,'"\n    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"\n    title="rootzjs-profile-from-library"\n    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"\n    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"\n  ></iframe>');return o.createElement("div",{className:n.root},o.createElement("div",{id:"actions",className:n.pageTitle},"Profile"),o.createElement(a.Z,{variant:"body1",gutterBottom:!0},"Profile is similar to the concept of ",o.createElement("b",null,"Bus")," in Networks. It helps you to store application specific generic data which could be accessible at any point within the application execution."),o.createElement(a.Z,{variant:"body1",gutterBottom:!0},"Profile provides simple ",o.createElement("code",null,"getters")," and ",o.createElement("code",null,"setters")," to set and retrieve the data. You can compare it to the concept of ",o.createElement("code",null,"context")," in React, with a little more advantage of having it centrally stored and managed."),o.createElement(c.f,{id:"set-profile",className:n.contentTitle},"Set ",o.createElement("code",null,"Anywhere")," access ",o.createElement("code",null,"Everywhere")),o.createElement(a.Z,{variant:"body1",gutterBottom:!0},"There are two ways you could set a Profile. One, by simply calling the ",o.createElement(s.a,{name:"node.setProfile",route:"/node",mask:"Node",id:"node-setprofile"})," within a Node. Secondly by importing the ",o.createElement("code",null,"setProfile")," from library."),o.createElement(c.f,{id:"from-node",className:n.contentSubTitle},"From Node"),o.createElement(i.d,{lang:"javascript",isLight:r,codeString:p}),o.createElement(c.f,{id:"from-library",className:n.contentSubTitle},"From Library"),o.createElement(i.d,{lang:"javascript",isLight:r,codeString:h}),o.createElement(a.Z,{variant:"body1",gutterBottom:!0},"Profiles can be ",o.createElement(s.a,{name:"accessed through the NodeProps",route:"/nodeprops",mask:"NodeProps",id:"properties-profile"})," property of ",o.createElement("code",null,"profile")," as mentioned in the above examples. Another way of accessing them is through the library method ",o.createElement("code",null,"getProfile"),"."),o.createElement(i.d,{lang:"javascript",isLight:r,codeString:f}),o.createElement(a.Z,{variant:"body1",gutterBottom:!0},"The message ",o.createElement("code",null,"set anywhere access everywhere !!")," in the below working example is set as profile inside Node2 but is accessed in Node1. ",o.createElement("b",null,"This makes it a unique but a very important feature to have in an application"),". "),o.createElement(l.N,{content:"The profile if set through the node method (node.setProfile) can be accessed throughout the component irrespective to where it has been set. While in case of setProfile method imported from library, contents should be set before the other components tries to fetch it."}),o.createElement(c.f,{id:"set-within-a-node",className:n.contentSubTitle},"Set within a Node"),o.createElement(u.E,{iFrame:b}),o.createElement(c.f,{id:"set-through-the-library-method",className:n.contentSubTitle},"Set through the library method"),o.createElement(u.E,{iFrame:y}),o.createElement(l.N,{content:"Avoid setting profiles from within the component body. As nodes are accessed before the components, they would not be available in the NodeProps.",type:"attention"}),o.createElement(c.f,{id:"avoid-setting-in-component",className:n.contentSubTitle},"Avoid setting inside component"),o.createElement(u.E,{iFrame:g}),o.createElement(d.W,{back:"State",next:""}))})),x=(g=2,function(e){if(Array.isArray(e))return e}(y=v)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}}(y,g)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}(y,g)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),E=x[0],w=(0,x[1])(E)},9809:function(e,t,n){"use strict";n.d(t,{f:function(){return b}});var r=n(7364),o=n(7294),a=(0,n(5209).Z)(o.createElement("path",{d:"M17 7h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c1.65 0 3 1.35 3 3s-1.35 3-3 3h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-9 5c0 .55.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1H9c-.55 0-1 .45-1 1zm2 3H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h3c.55 0 1-.45 1-1s-.45-1-1-1H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h3c.55 0 1-.45 1-1s-.45-1-1-1z"}),"LinkRounded"),i=n(7853),l=n(2656);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m,u,p=(0,r.createNode)("HashLink",(function(e){var t=e.props,n=(0,l.z)(),r=t.children,d=s(t,["children"]),m=window.location.pathname;return o.createElement("div",{className:n.hasLinkContainer},o.createElement(a,{className:n.hashLinkIcon}),o.createElement(i.fO,c({smooth:!0,to:m+"#"+d.id},d),r))})),f=(u=2,function(e){if(Array.isArray(e))return e}(m=p)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}}(m,u)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(m,u)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),h=f[0],b=(0,f[1])(h)},7107:function(e,t,n){"use strict";n.d(t,{W:function(){return f}});var r=n(7364),o=n(5977),a=n(7294),i=n(2656),l=n(5291),c=n(9686);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m=s((0,r.createNode)("NavigationButton",(function(e){var t=e.props,n=e.actions,r=(0,i.z)();return a.createElement("div",{className:r.buttonContainer},a.createElement("div",{className:r.button,onClick:function(){return n.GOTO_PREVIOUS(t)},style:{alignItems:"flex-end",justifyContent:"flex-start",visibility:t.back?"visible":"hidden"}},a.createElement("div",{className:r.btnSubLabel,style:{}},"Jump To"),a.createElement("div",{className:r.btnContentWrapper},a.createElement(l.Z,null),t.back)),a.createElement("div",{className:r.button,onClick:function(){return n.GOTO_NEXT(t)},style:{alignItems:"flex-start",justifyContent:"flex-end",visibility:t.next?"visible":"hidden"}},a.createElement("div",{className:r.btnSubLabel},"Jump To"),a.createElement("div",{className:r.btnContentWrapper},t.next,a.createElement(c.Z,null))))})),2),u=m[0],p=m[1];u.useContract("AppDrawer","GOTO_NEXT",(function(e,t){var n=s(t,1)[0],r=n.next;return n.history.push("/"+r.toLowerCase().replace(/ /g,"-")),{activeSection:r}})),u.useContract("AppDrawer","GOTO_PREVIOUS",(function(e,t){var n=s(t,1)[0],r=n.back;return n.history.push("/"+r.toLowerCase().replace(/ /g,"-")),{activeSection:r}}));var f=(0,o.EN)(p(u))},8876:function(e,t,n){"use strict";n.d(t,{a:function(){return u}});var r=n(7364),o=n(7294),a=n(2656),i=n(7853);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s=l((0,r.createNode)("SelfLink",(function(e){var t=e.props,n=e.actions,r=(0,a.z)();return o.createElement(i.fO,{className:r.link,style:{cursor:"pointer"},to:t.route+"#"+t.id,onClick:function(){return n.NAVIGATE_TO(t)}},t.name)})),2),d=s[0],m=s[1];d.useContract("AppDrawer","NAVIGATE_TO",(function(e,t){var n=l(t,1)[0],r=n.name,o=(n.route,n.mask);return{activeSection:void 0!==o&&o||r}}));var u=m(d)}}]);