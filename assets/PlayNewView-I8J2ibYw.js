import{d as B,r as u,S as D,C as q,U as E,q as F,Q as M,c as z,V as A,p as b,N as S,b as g,k as R,w as y,R as G,l as P,s as $,i as W,u as v,h as T,f as o,x as K,y as O,A as U,z as L,e as Q,m as j,g as H,W as J,t as X,v as Y,_ as Z}from"./index-LN3JrHY7.js";import{D as ee}from"./DialogComponent-TrP1wqcK.js";import{i as ae}from"./firestore-BLu_xwUI.js";import{G as te}from"./GameInfo-ljoKPfmW.js";const _=n=>(X("data-v-ec1f2e33"),n=n(),Y(),n),oe=_(()=>o("h2",null,"Start playing!",-1)),se={class:"input-container"},re=_(()=>o("label",{for:"card-name"},"Name your bingo card",-1)),ne={key:0,class:"input-description error"},ie=_(()=>o("p",{class:"input-description"}," This is used to identify your bingo card in the future. If you decide to take a break you can always come back and find your card again 👍 ",-1)),ce=B({__name:"PlayNewView",setup(n){const m=G(),p=P(),I=$(),f=m.params.gameId;let a;typeof f=="string"?a=f:a=f[0];const V=u("700px"),N=u(!0),s=u(""),i=u(!1);let e,c,h;D(async()=>{m.query.title&&(s.value=m.query.title);const r=q(W,"games",a);if(e=(await E(r)).data(),e&&e.gridWidth){const t=F(z(W,"entries"),M("gameId","==",a));if(c=await A(t),h=e.gridWidth**2-(e.hasFreeSpace?1:0),h<=c.size)N.value=!1;else return x()}else return w()});const w=()=>{p.push("/"),I.emit(b(S.ERROR,`The bingo game you are trying to play does not exist (anymore) 😭.
      Make sure you have the correct link or contact the creator of the game!`,1e4))},x=()=>{p.push("/game/"+a),I.emit(b(S.WARNING,`This bingo game is not ready yet 😭.
      If you are the creator or administrator of this game, please add more possible field values!`,1e4))},k=async()=>{if(i.value=s.value.length<3,i.value)return;if(!e)return w();if(!c)return x();const r={gameId:a,title:s.value,gridWidth:e.gridWidth,hasFreeSpace:e.hasFreeSpace,freeSpaceText:e.freeSpaceText,createdAt:new Date().getTime(),entryIds:[],chckedEntryIds:[]},t=c.docs.map(l=>l.id);for(let l=0;l<h;l++){const C=Math.floor(Math.random()*t.length);r.entryIds.push(t[C]),t.splice(C,1)}const d=await ae(r);p.push(`/game/${a}/play/${d}`)};return(r,t)=>(g(),R(ee,{open:!N.value,preventClose:!0,maxWidth:V.value},{header:y(()=>[oe]),content:y(()=>[v(e)?(g(),R(te,{key:0,game:v(e),gameId:v(a)},null,8,["game","gameId"])):T("",!0),o("div",se,[re,K(o("input",{id:"card-name",type:"text",onKeyup:U(k,["enter"]),"onUpdate:modelValue":t[0]||(t[0]=d=>s.value=d),placeholder:"Colton's Bingo Card",class:L({error:i.value})},null,34),[[O,s.value]]),i.value?(g(),Q("p",ne," Damn you lazy like that? 3 characters minimum! ")):T("",!0),ie])]),footer:y(()=>[o("button",{class:"primary",onClick:k},[j(" Start "),H(J,{class:"icon",color:"var(--color-foreground)"})])]),_:1},8,["open","maxWidth"]))}}),pe=Z(ce,[["__scopeId","data-v-ec1f2e33"]]);export{pe as default};
