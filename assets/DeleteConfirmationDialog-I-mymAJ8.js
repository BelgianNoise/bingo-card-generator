import{D as C}from"./DialogComponent-i1oJayoH.js";import{d as c,o as l,c as f,a as o,n,h as _,i as r,au as m,b as h,e as u,p as k,q as v,_ as w}from"./index-SKEBjwXa.js";const y={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},g=c({__name:"IconTrash",props:{color:{}},setup(e){return(t,s)=>(l(),f("svg",y,[o("path",{style:n({stroke:t.color??"#fff"}),d:"M20.5001 6H3.5","stroke-width":"1.5","stroke-linecap":"round"},null,4),o("path",{style:n({stroke:t.color??"#fff"}),d:"M18.8332 8.5L18.3732 15.3991C18.1962 18.054 18.1077 19.3815 17.2427 20.1907C16.3777 21 15.0473 21 12.3865 21H11.6132C8.95235 21 7.62195 21 6.75694 20.1907C5.89194 19.3815 5.80344 18.054 5.62644 15.3991L5.1665 8.5","stroke-width":"1.5","stroke-linecap":"round"},null,4),o("path",{style:n({stroke:t.color??"#fff"}),d:"M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6","stroke-width":"1.5"},null,4)]))}}),B=e=>(k("data-v-80cffe02"),e=e(),v(),e),D=B(()=>o("h2",null,"Confirm deletion",-1)),S="600px",x=c({__name:"DeleteConfirmationDialog",props:{open:{type:Boolean}},emits:["close","denied","approved"],setup(e,{emit:t}){const s=t,p=()=>s("denied"),i=()=>s("approved"),d=()=>s("close");return(a,I)=>(l(),_(C,{open:a.open,onClose:d,maxWidth:S},{header:r(()=>[D]),content:r(()=>[m(a.$slots,"content",{},void 0,!0)]),footer:r(()=>[o("button",{class:"secondary",onClick:p}," NO, GO BACK "),o("button",{class:"primary remove",onClick:i},[h(g,{class:"icon",color:"var(--color-foreground)"}),u(" YES ")])]),_:3},8,["open"]))}}),b=w(x,[["__scopeId","data-v-80cffe02"]]);export{b as D,g as _};
