"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[754],{5754:function(e,r,t){t.r(r),t.d(r,{default:function(){return g}});var n="NewsPage_container__+1CKk",a="NewsPage_title__RqzNj",s=t(9439),c=t(2791),u="News_newsList__FZFHv",o="News_newsItem__BMGfi",i="News_newsTitleList__v1TqL",l="News_newsDateAndLink__IPXpS",p="News_newsDescription__vpMWX",f="News_newsDate__VOtrj",d="News_newsLink__FjoxT",h="News_notNewsFound__W-qPR",v="News_notNewsFoundText__wyh8O",w=t(184),_=function(e){var r=e.url,t=e.title,n=e.description,a=e.date;return(0,w.jsxs)("li",{className:o,children:[(0,w.jsx)("h3",{className:i,children:t}),(0,w.jsx)("p",{className:p,children:n}),(0,w.jsxs)("div",{className:l,children:[(0,w.jsx)("p",{className:f,children:a}),(0,w.jsx)("a",{href:r,className:d,target:"_blank",rel:"noreferrer noopener",children:"Read more"})]})]})},m=t(4724),x=t(8593),N=function(){var e=(0,c.useState)(!1),r=(0,s.Z)(e,2),t=r[0],n=r[1],a=(0,c.useState)([]),o=(0,s.Z)(a,2),i=o[0],l=o[1];(0,c.useEffect)((function(){n(!0),(0,m.aL)().then(l).catch((function(e){return console.error(e.message)})).finally((function(){return n(!1)}))}),[]);var p=function(){return i.filter((function(e){return e.title.toLocaleLowerCase()}))};return(0,w.jsx)(w.Fragment,{children:t?(0,w.jsx)("div",{className:h,children:(0,w.jsx)(x.fe,{visible:!0,height:"80",width:"80",ariaLabel:"dna-loading",wrapperStyle:{},wrapperClass:"dna-wrapper"})}):(0,w.jsx)("ul",{className:u,children:0===p().length?(0,w.jsx)("div",{className:h,children:(0,w.jsx)("h3",{className:v,children:"Sorry, your search did not match any results."})}):p().map((function(e){var r=e._id,t=e.url,n=e.title,a=e.description,s=e.date;return(0,w.jsx)(_,{url:t,title:n,description:a,date:s},r)}))})})};var g=function(){return(0,w.jsxs)("div",{className:n,children:[(0,w.jsx)("h2",{className:a,children:"News"}),(0,w.jsx)(N,{})]})}},4724:function(e,r,t){t.d(r,{Bn:function(){return u},J$:function(){return l},WW:function(){return p},aJ:function(){return h},aL:function(){return i},dz:function(){return o},f7:function(){return d},ok:function(){return f},up:function(){return v}});var n=t(5861),a=t(4687),s=t.n(a),c=t(1243);c.Z.defaults.baseURL="https://backend.petly.club";var u=function(){var e=(0,n.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/servicesSidebar").then((function(e){return e.data})).catch((function(e){return console.log(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/notices/category?category=".concat(r));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/news").then((function(e){return e.data})).catch((function(e){return console.error(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/userAndPets",{headers:{Authorization:"Bearer ".concat(r)}});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.post("/uploadAvatar",r);case 3:return t=e.sent,console.log("response",t),console.log("response.data",t.data),e.abrupt("return",t.data);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=localStorage.getItem("persist:users");if(null!==e){var r=JSON.parse(e).token;!function(e){c.Z.defaults.headers.common.Authorization="Bearer ".concat(e)}(r.slice(1,r.length-1))}else c.Z.defaults.headers.common.Authorization=""},d=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.patch("/users/edit",r);case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/notices/selected/");case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/notices/".concat(r));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=754.4a2dad0f.chunk.js.map