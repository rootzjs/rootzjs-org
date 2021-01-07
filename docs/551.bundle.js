(this.webpackChunkrootzjs_org=this.webpackChunkrootzjs_org||[]).push([[551],{4426:function(e,t,n){"use strict";n.d(t,{N:function(){return a}});var o=n(7294),r=n(2656),a=function(e){var t=e.content,n=e.type,a=void 0===n?"note":n,i=e.children,l=(0,r.z)();switch(a){case"note":return o.createElement("div",{className:l.noteContainer},o.createElement("span",{className:l.noteLabel},"Note:"),o.createElement("span",{className:l.noteContent},t),i&&o.createElement("span",{className:l.noteContentLink},i));case"attention":return o.createElement("div",{className:l.noteContainerAttention},o.createElement("span",{className:l.noteLabel},"Attention:"),o.createElement("span",{className:l.noteContent},t),i&&o.createElement("span",{className:l.noteContentLink},i));case"info":return o.createElement("div",{className:l.noteContainerInfo},o.createElement("span",{className:l.noteLabel},"Info:"),o.createElement("span",{className:l.noteContent},t),i&&o.createElement("span",{className:l.noteContentLink},i));default:return o.createElement("div",{className:l.noteContainer},o.createElement("span",{className:l.noteLabel},"Note:"),o.createElement("span",{className:l.noteContent},t),i&&o.createElement("span",{className:l.noteContentLink},i))}}},1269:function(e,t,n){"use strict";n.d(t,{z:function(){return a}});var o=n(1120),r=n(9693),a=(0,o.Z)((function(e){return{root:{margin:e.isMobile?10:"25px 75px",width:"100%","& > p":{marginTop:25,lineHeight:1.75,color:e.text["00"]},"& li>p":{marginTop:20,color:e.text["00"]},"& ul > li":{color:e.text["00"]},"& code":{borderRadius:2,padding:"2px 7px",color:e.text["00"],backgroundColor:(0,r.U1)("#E4A800",.25)}},divider:{flexShrink:0,backgroundColor:e.text[80]},pageTitle:{fontSize:60,fontWeight:"bold",margin:"25px 0 15px",color:e.text[20],textDecoration:"auto"},contentTitle:{fontSize:35,fontWeight:"bold",color:e.text[20],textDecoration:"auto",borderBottom:"solid 2px ".concat(e.text[50])},contentSubTitle:{fontSize:28,fontWeight:"bold",color:e.text[30],textDecoration:"auto"},codeHeadLabel:{fontSize:20,marginTop:40,fontWeight:"bold",color:e.text[40],textDecoration:"auto"},logo:{width:"90vmin"},logoContract:{height:"60vmin"},codeHeadIcon:{fontSize:22,marginRight:10,color:"#E4A800"},imgWrapper:{display:"flex",backgroundColor:e.background[10]}}}))},2656:function(e,t,n){"use strict";n.d(t,{z:function(){return a}});var o=n(1120),r=n(9693),a=(0,o.Z)((function(e){return{link:{padding:"1px 4px",fontWeight:"bold",color:e.text[10],textDecoration:"none",backgroundColor:(0,r.U1)(e.palette.secondary.main,.25),borderBottom:"solid 2px ".concat(e.palette.secondary.main)},button:{fontSize:20,display:"flex",cursor:"pointer",flexDirection:"column",color:e.text["00"],textTransform:"capitalize",padding:e.isMobile?"15px 25px":"15px 50px",margin:e.isMobile?"25px 0 120px":"25px 0 50px",backgroundColor:(0,r.U1)(e.palette.secondary.main,.25),"&:hover":{backgroundColor:(0,r.U1)(e.palette.secondary.main,.4)}},btnSubLabel:{fontSize:15,color:e.text[30]},buttonContainer:{display:"flex",justifyContent:"space-between"},btnContentWrapper:{display:"flex","& svg":{margin:3}},noteContainer:{fontSize:17,borderRadius:3,margin:"40px 0",padding:"10px 20px",borderLeft:"solid 7px #E4A800",backgroundColor:(0,r.U1)("#E4A800",.25)},noteContainerAttention:{fontSize:17,borderRadius:3,margin:"40px 0",padding:"10px 20px",borderLeft:"solid 7px #E44100",backgroundColor:(0,r.U1)("#E44100",.25)},noteContainerInfo:{fontSize:17,borderRadius:3,margin:"40px 0",padding:"10px 20px",borderLeft:"solid 7px #00BDE4",backgroundColor:(0,r.U1)("#00BDE4",.25)},noteLabel:{marginRight:7,fontWeight:"bold",color:e.text[20]},noteContent:{color:e.text[20]},noteContentLink:{display:"block",margin:"25px 0 15px","& li":{margin:10}},embedCode:{margin:"10px 0 25px"},hasLinkContainer:{marginTop:40,display:"flex",alignItems:"center","& a":{flex:1,display:"flex"},"&:hover svg":{display:"inline-flex"}},hashLinkIcon:{display:"none",margin:"0 10px",fontSize:"3vmin",position:"relative",marginLeft:"calc(-3vmin - 10px)",color:e.palette.secondary.main}}}))},8551:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var o=n(7364),r=n(7294),a=n(1269),i=n(4426);function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var c,s,p=(0,o.createNode)("WorkbookSection",(function(e){e.props;var t=(0,a.z)();return r.createElement("div",{className:t.root},r.createElement("div",{id:"workbook-overview",className:t.pageTitle},"Overview"),r.createElement(i.N,{content:'Our Workbooks will shortly be released. It would guide you through solving complex problems and situations, which we usually face during app development. We are working on guidance documentation "How to create creating a complex React-Rootz app from ground-up". This would provide an exploratory view of approaching the lifecycle of developing an application with Rootz JS. Of course it is not going to be a Todo App ;)',type:"info"}))})),d=(s=2,function(e){if(Array.isArray(e))return e}(c=p)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(o=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);o=!0);}catch(e){r=!0,a=e}finally{try{o||null==l.return||l.return()}finally{if(r)throw a}}return n}}(c,s)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(c,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=d[0],m=(0,d[1])(u)}}]);