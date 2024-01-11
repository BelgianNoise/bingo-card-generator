import{d as B,r as u,R as D,t as q,S as E,J as F,L as M,M as G,U as z,f as b,N as S,o as g,h as R,i as y,Q as A,u as P,g as $,x as T,y as v,m as V,a as o,j as K,v as L,l as O,k as U,c as j,e as J,b as Q,V as H,p as X,q as Y,_ as Z}from"./index-Ht2DMbNU.js";import{D as ee}from"./DialogComponent-qE_4OB25.js";import{h as ae}from"./firestore-krNLcv9L.js";import{G as te}from"./GameInfo-I91j5Zk6.js";const _=n=>(X("data-v-6d0088a1"),n=n(),Y(),n),oe=_(()=>o("h2",null,"Start playing!",-1)),se={class:"input-container"},re=_(()=>o("label",{for:"card-name"},"Name your bingo card",-1)),ne={key:0,class:"input-description error"},ie=_(()=>o("p",{class:"input-description"}," This is used to identify your bingo card in the future. If you decide to take a break you can always come back and find your card again 👍 ",-1)),ce=B({__name:"PlayNewView",setup(n){const m=A(),p=P(),I=$(),h=m.params.gameId;let a;typeof h=="string"?a=h:a=h[0];const W=u("700px"),N=u(!0),s=u(""),i=u(!1);let e,c,f;D(async()=>{m.query.title&&(s.value=m.query.title);const r=q(T,"games",a);if(e=(await E(r)).data(),e&&e.gridWidth){const t=F(G(T,"entries"),M("gameId","==",a));if(c=await z(t),f=e.gridWidth**2-(e.hasFreeSpace?1:0),f<c.size)N.value=!1;else return x()}else return w()});const w=()=>{p.push("/"),I.emit(b(S.ERROR,`The bingo game you are trying to play does not exist (anymore) 😭.
      Make sure you have the correct link or contact the creator of the game!`,1e4))},x=()=>{p.push("/game/"+a),I.emit(b(S.WARNING,`This bingo game is not ready yet 😭.
      If you are the creator or administrator of this game, please add more possible field values!`,1e4))},k=async()=>{if(i.value=s.value.length<3,i.value)return;if(!e)return w();if(!c)return x();const r={gameId:a,title:s.value,gridWidth:e.gridWidth,hasFreeSpace:e.hasFreeSpace,freeSpaceText:e.freeSpaceText,createdAt:new Date().getTime(),entryIds:[],chckedEntryIds:[]},t=c.docs.map(l=>l.id);for(let l=0;l<f;l++){const C=Math.floor(Math.random()*t.length);r.entryIds.push(t[C]),t.splice(C,1)}const d=await ae(r);p.push(`/game/${a}/play/${d}`)};return(r,t)=>(g(),R(ee,{open:!N.value,preventClose:!0,maxWidth:W.value},{header:y(()=>[oe]),content:y(()=>[v(e)?(g(),R(te,{key:0,game:v(e),gameId:v(a)},null,8,["game","gameId"])):V("",!0),o("div",se,[re,K(o("input",{id:"card-name",type:"text",onKeyup:O(k,["enter"]),"onUpdate:modelValue":t[0]||(t[0]=d=>s.value=d),placeholder:"Colton's Bingo Card",class:U({error:i.value})},null,34),[[L,s.value]]),i.value?(g(),j("p",ne," Damn you lazy like that? 3 characters minimum! ")):V("",!0),ie])]),footer:y(()=>[o("button",{class:"primary",onClick:k},[J(" Start "),Q(H,{class:"icon",color:"var(--color-foreground)"})])]),_:1},8,["open","maxWidth"]))}}),pe=Z(ce,[["__scopeId","data-v-6d0088a1"]]);export{pe as default};