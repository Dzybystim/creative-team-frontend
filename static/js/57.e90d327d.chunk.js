"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[57],{4057:function(e,s,a){a.r(s),a.d(s,{default:function(){return ae}});var l=a(9439),t=a(2791),c=a(4164),i="Modal_container__vBmG0",n="Modal_overlay__4cVbv",o="Modal_icon__RWxm6",r="Modal_close__xTbKf",d=a(1213),m=a(184),h=document.querySelector("#modal-root");function x(e){var s=e.children,a=e.onClose;(0,t.useEffect)((function(){var e=function(e){"Escape"===e.code&&a()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[a]);var l=function(e){e.currentTarget===e.target&&a()};return(0,c.createPortal)((0,m.jsx)("div",{className:n,onClick:l,children:(0,m.jsxs)("div",{className:i,children:[(0,m.jsx)("button",{class:o,onClick:l,children:(0,m.jsx)("span",{class:r,children:(0,m.jsx)(d.ySC,{size:"16px",onClick:l})})}),s]})}),h)}var N="NoticeModal_container__X0HhL",_="NoticeModal_img__AQ23A",j="NoticeModal_title__18d06",u="NoticeModal_category__nI7v5",p="NoticeModal_list__bpla2",b="NoticeModal_item__vrusD",g="NoticeModal_text__7Ynoh",y="NoticeModal_main_text__OJWMG",f="NoticeModal_comments__Wze4C",v="NoticeModal_btn_item__C8PM9",C="NoticeModal_btn__fSMIm",M=function(e){var s=e.item;return(0,m.jsxs)("div",{className:N,children:[(0,m.jsx)("div",{className:_,children:(0,m.jsx)("p",{className:u,children:s.category})}),(0,m.jsx)("h3",{className:j,children:s.title}),(0,m.jsxs)("ul",{className:p,children:[(0,m.jsxs)("li",{className:b,children:[(0,m.jsx)("p",{className:y,children:"Name: "}),(0,m.jsxs)("p",{className:g,children:[" ",s.name]})]}),(0,m.jsxs)("li",{className:b,children:[(0,m.jsx)("p",{className:y,children:"Birthday: "}),(0,m.jsx)("p",{className:g,children:s.birthdate})," "]}),(0,m.jsxs)("li",{className:b,children:[(0,m.jsx)("p",{className:y,children:"Breed: "}),(0,m.jsx)("p",{className:g,children:s.breed})," "]}),(0,m.jsxs)("li",{className:b,children:[(0,m.jsx)("p",{className:y,children:"Location: "}),(0,m.jsx)("p",{className:g,children:s.location})," "]}),(0,m.jsxs)("li",{className:b,children:[(0,m.jsx)("p",{className:y,children:"The sex: "}),(0,m.jsx)("p",{className:g,children:s.sex})," "]}),(0,m.jsxs)("li",{className:b,children:[(0,m.jsx)("p",{className:y,children:"Email: "}),(0,m.jsx)("p",{className:g})," "]}),(0,m.jsxs)("li",{className:b,children:[(0,m.jsx)("p",{className:y,children:"Phone: "}),(0,m.jsx)("p",{className:g})," "]}),s.price?(0,m.jsxs)("li",{className:b,children:[(0,m.jsx)("p",{className:y,children:"Price:"})," ",(0,m.jsxs)("p",{className:g,children:[s.price,"$"]})]}):null]}),(0,m.jsxs)("p",{className:f,children:["Comments: ",s.comments]}),(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{className:v,children:(0,m.jsx)("button",{className:C,type:"button",children:"Contact"})}),(0,m.jsx)("li",{className:v,children:(0,m.jsx)("button",{className:C,type:"button",children:"Add to "})}),(0,m.jsx)("li",{className:v,children:(0,m.jsx)("button",{className:C,type:"button",children:"Remove from "})})]})]})},k="NoticeCategoryItem_item__gdd8F",A="NoticeCategoryItem_img__PA46g",F="NoticeCategoryItem_category__1jJaa",P="NoticeCategoryItem_icon__seFjM",w="NoticeCategoryItem_title__WTTHR",I="NoticeCategoryItem_info__dsGsP",S="NoticeCategoryItem_info_item__x1JqN",T="NoticeCategoryItem_text__sHz5o",L="NoticeCategoryItem_btn_cover__aYpo3",z="NoticeCategoryItem_btn__Pj6ku",B=a(8820),q=a(8617),D=function(e){var s=e.item,a=(0,t.useState)(!1),c=(0,l.Z)(a,2),i=c[0],n=c[1],o=function(){n(!i)};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("li",{className:k,children:[(0,m.jsxs)("div",{className:A,children:[(0,m.jsx)("p",{className:F,children:s.category}),(0,m.jsx)("button",{className:P,type:"button",children:(0,m.jsx)(B.lo,{size:28})})]}),(0,m.jsx)("h3",{className:w,children:s.title}),(0,m.jsxs)("ul",{className:I,children:[(0,m.jsxs)("li",{className:S,children:[(0,m.jsx)("p",{className:T,children:"Breed: "}),(0,m.jsxs)("p",{className:T,children:[" ",s.breed]})]}),(0,m.jsxs)("li",{className:S,children:[(0,m.jsx)("p",{className:T,children:"Place: "}),(0,m.jsx)("p",{className:T,children:s.location})]}),(0,m.jsxs)("li",{className:S,children:[(0,m.jsx)("p",{className:T,children:"Age: "}),(0,m.jsx)("p",{className:T,children:s.age})]}),s.price?(0,m.jsxs)("li",{className:S,children:[(0,m.jsx)("p",{className:T,children:"Price:"}),(0,m.jsxs)("p",{className:T,children:[s.price,"$"]})]}):null]}),(0,m.jsxs)("div",{className:L,children:[(0,m.jsx)("button",{className:z,type:"button",onClick:o,children:"LearnMore"}),(0,m.jsxs)("button",{className:z,type:"button",children:["Delete ",(0,m.jsx)(q._YF,{size:20})]})]})]}),i&&(0,m.jsx)(x,{onClose:o,children:(0,m.jsx)(M,{item:s})},s.id)]})},E=a(5705),J="ModalAddNotice_container__c5zL+",K="ModalAddNotice_title__M1wTz",W="ModalAddNotice_text__Kr6Dq",G="ModalAddNotice_radio_category__rME3z",H="ModalAddNotice_radio_label__BsFoc",R="ModalAddNotice_radio_btn__u2po5",Y="ModalAddNotice_label__hJwpz",Z="ModalAddNotice_field__DUmCr",V=function(e){var s=e.toggleModalPage,a=e.onClose;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("p",{className:W,children:"Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur "}),(0,m.jsxs)("div",{className:G,children:[(0,m.jsxs)("label",{className:H,children:[(0,m.jsx)(E.gN,{className:R,type:"radio",name:"category",value:"lost-found"}),"lost/found"]}),(0,m.jsxs)("label",{className:H,children:[(0,m.jsx)(E.gN,{className:R,type:"radio",name:"category",value:"for-free"}),"in good hands"]}),(0,m.jsxs)("label",{className:H,children:[(0,m.jsx)(E.gN,{className:R,type:"radio",name:"category",value:"sell"}),"sell"]})]}),(0,m.jsx)("label",{htmlFor:"tittle",className:Y,children:"Tittle of ad"}),(0,m.jsx)(E.gN,{className:Z,id:"tittle",type:"text",name:"tittle",placeholder:"Type name pet",required:!0}),(0,m.jsx)(E.Bc,{name:"tittle",component:"div"}),(0,m.jsx)("label",{htmlFor:"name",className:Y,children:"Name pet"}),(0,m.jsx)(E.gN,{className:Z,id:"name",type:"text",name:"name",placeholder:"Type name pet",required:!0}),(0,m.jsx)(E.Bc,{name:"name",component:"div"}),(0,m.jsx)("label",{className:Y,htmlFor:"birthday",children:"Date of birth"}),(0,m.jsx)(E.gN,{className:Z,id:"birthday",type:"date",name:"birthday",placeholder:"Type date of birth",required:!0}),(0,m.jsx)("label",{className:Y,htmlFor:"breed",children:"Breed"}),(0,m.jsx)(E.gN,{className:Z,id:"breed",type:"text",name:"breed",placeholder:"Type breed",required:!0}),(0,m.jsx)("button",{type:"submit",onClick:s,children:"Next"}),(0,m.jsx)("button",{type:"submit",onClick:a,children:"Cancel"})]})},$=function(e){var s=e.toggleModalPage,a=e.onSubmit;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("button",{type:"submit",onSubmit:a,children:"Done"}),(0,m.jsx)("button",{onClick:s,type:"submit",children:"Back"})]})},O={category:"",tittle:"",name:"",birthday:"",breed:"",sex:"",location:"",comments:"",price:""},Q=function(e){var s=e.onClose,a=(0,t.useState)(!0),c=(0,l.Z)(a,2),i=c[0],n=c[1],o=function(){n(!i)},r=function(e,a){var l=a.resetForm;console.log(e);var t={name:e.name,birthday:e.birthday,breed:e.breed,photo:e.photo,comments:e.comments};console.log("newPet ",t),l(),s()};return(0,m.jsxs)("div",{className:J,children:[(0,m.jsx)("h1",{className:K,children:"Add pet"}),(0,m.jsx)(E.J9,{onSubmit:r,initialValues:O,children:(0,m.jsx)(E.l0,{autoComplete:"off",children:i?(0,m.jsx)(V,{onClose:s,toggleModalPage:o}):(0,m.jsx)($,{toggleModalPage:o,onSubmit:r})})})]})},U="AddNoticeButton_add_btn__klenS",X=function(){var e=(0,t.useState)(!1),s=(0,l.Z)(e,2),a=s[0],c=s[1],i=function(){c(!a)};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("button",{className:U,type:"button",onClick:i,children:[(0,m.jsx)(B.Lfi,{size:32}),"Add pet"]}),a&&(0,m.jsx)(x,{onClose:i,children:(0,m.jsx)(Q,{})})]})},ee="NoticesCategoriesList_list__TSyA3",se=[{id:1,category:"sell",title:"dog",breed:"kolly",location:"Lviv",age:"5",price:75},{id:2,category:"lost-found",title:"dog",breed:"main-kun",location:"Kiev",age:"2"},{id:3,category:"sell",title:"dog",breed:"corgi",location:"Kharkiv",age:"1",price:50}],ae=function(e){e.item;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(X,{}),(0,m.jsx)("ul",{className:ee,children:se.map((function(e){return(0,m.jsx)(D,{item:e},e.id)}))})]})}}}]);
//# sourceMappingURL=57.e90d327d.chunk.js.map