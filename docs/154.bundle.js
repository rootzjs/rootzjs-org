(this.webpackChunkrootzjs_org=this.webpackChunkrootzjs_org||[]).push([[154],{48926:function(e){function t(e,t,n,r,o,a,u){try{var c=e[a](u),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}e.exports=function(e){return function(){var n=this,r=arguments;return new Promise((function(o,a){var u=e.apply(n,r);function c(e){t(u,o,a,c,s,"next",e)}function s(e){t(u,o,a,c,s,"throw",e)}c(void 0)}))}}},87757:function(e,t,n){e.exports=n(35666)},84154:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(63038),o=n.n(r),a=n(27364),u=n(87757),c=n.n(u),s=n(48926),i=n.n(s),l=n(67294),f=n(17812),d=n(95169),h=(0,a.createNode)("DesktopToolbar",(function(e){var t=e.props,r=e.state,o=e.actions,a=(0,d.z)(),u=t.isLight,s=l.useRef(null),h=l.useRef(null),p=l.useRef(null),v=l.useRef(null);return l.useEffect((function(){(function(){var e=i()(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!u){e.next=10;break}return e.next=4,n.e(418).then(n.t.bind(n,8418,23));case 4:return s.current=e.sent.default,e.next=7,n.e(874).then(n.t.bind(n,31874,23));case 7:p.current=e.sent.default,e.next=16;break;case 10:return e.next=12,n.e(593).then(n.t.bind(n,13593,23));case 12:return h.current=e.sent.default,e.next=15,n.e(747).then(n.t.bind(n,60747,23));case 15:v.current=e.sent.default;case 16:e.next=21;break;case 18:throw e.prev=18,e.t0=e.catch(0),new Error("error in loading content");case 21:return e.prev=21,o.CONTENT_LOAD_COMPLETE(),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[0,18,21,24]])})));return function(){return e.apply(this,arguments)}})()()}),[o,u]),l.createElement(l.Fragment,null,l.createElement("div",{className:a.logoContainer},l.createElement(f.Z,{className:a.iconContainer,onClick:function(){return t.history.push("/")}},r.allContentLoaded&&(s.current||h.current)&&l.createElement("img",{alt:"logo",width:"37",height:"30",className:a.logo,src:u?s.current:h.current}),r.allContentLoaded&&(p.current||v.current)&&l.createElement("img",{alt:"logo",width:"110",height:"22",className:a.logoTitle,src:u?p.current:v.current}))))})),p=o()(h,2),v=p[0],m=p[1];v.state({allContentLoaded:!1}),v.useAction("CONTENT_LOAD_COMPLETE",{allContentLoaded:!0});var g=m(v)}}]);