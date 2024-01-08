import{av as v,O as i,y as t,f as r,N as n,aw as C,x as c,K as g,M as f,V as S,ax as l,U as R,g as G}from"./index-bPghA7Lr.js";async function x(e){const s=sessionStorage.getItem("pw-exp-very-secure-"+e);if(s){if(parseInt(s)<new Date().getTime())return p(e),!1}else return!1;const a=sessionStorage.getItem("pw-very-secure-"+e);if(!a)return p(e),!1;const u=await N(e,a);return u||p(e),u}function U(e,s){sessionStorage.setItem("pw-very-secure-"+e,s);const a=new Date().getTime()+1e3*60*60*23*1;sessionStorage.setItem("pw-exp-very-secure-"+e,a.toString())}function p(e){sessionStorage.removeItem("pw-exp-very-secure-"+e),sessionStorage.removeItem("pw-very-secure-"+e)}const o=G();async function q(e,s){const a=await v(i(t,"games"),e);return s.gameId=a.id,await v(i(t,"passwords"),s),o.emit(r(n.SUCCESS,"Game created successfully")),a.id}async function D(e,s=!0){return e.updatedAt=new Date().getTime(),await C(c(t,"games",e.id),e),s&&o.emit(r(n.SUCCESS,"Game updated successfully")),e}async function A(e,s,a){const u=g(i(t,"passwords"),f("gameId","==",e),f("value","==",s)),d=await S(u);if(d.docs.length===0)return!1;const w=d.docs[0].data();return w.value=a,await C(c(t,"passwords",d.docs[0].id),w),U(e,a),o.emit(r(n.SUCCESS,"Password updated successfully")),await E(e),!0}async function P(e){try{await l(c(t,"games",e));const s=g(i(t,"passwords"),f("gameId","==",e)),a=await S(s);for(const m of a.docs.map(y=>y.id))await l(c(t,"passwords",m));p(e);const u=g(i(t,"entries"),f("gameId","==",e)),d=await S(u);for(const m of d.docs.map(y=>y.id))await l(c(t,"entries",m));const w=g(i(t,"cards"),f("gameId","==",e)),h=await S(w);for(const m of h.docs.map(y=>y.id))await l(c(t,"cards",m))}catch(s){return console.error("Error deleting game:",s),o.emit(r(n.ERROR,"Error deleting game")),!1}return o.emit(r(n.SUCCESS,"Game deleted successfully")),!0}async function N(e,s){const a=g(i(t,"passwords"),f("gameId","==",e)),d=(await S(a)).docs.map(w=>w.data());return d.length===0?(console.log("OH GOD! No password found for game:",e),o.emit(r(n.ERROR,"Error validating password")),!1):d[0].value===s}async function T(e){const s=await v(i(t,"entries"),e);return o.emit(r(n.SUCCESS,"Entry was successfully added :)")),{...e,id:s.id}}async function b(e){try{e.updatedAt=new Date().getTime();const s=c(i(t,"entries"),e.id);return await C(s,e),await E(e.gameId),o.emit(r(n.SUCCESS,"Changed successfully :)",2e3)),e}catch(s){return console.error("Error saving entry:",s),o.emit(r(n.ERROR,"Error saving entry")),e}}async function k(e){try{const s=c(i(t,"entries"),e.id);return await l(s),await E(e.gameId),o.emit(r(n.SUCCESS,"Entry was successfully deleted :)")),!0}catch{return o.emit(r(n.ERROR,"Error deleting entry my man :/")),!1}}async function E(e){const s=c(i(t,"games"),e),a=await R(s);if(!a.exists()){o.emit(r(n.WARNING,"Something went wrong syncing to the server :("));return}await D({...a.data(),id:e},!1)}async function B(e){const s=await v(i(t,"cards"),e);return o.emit(r(n.SUCCESS,"🎉🎉 Game was successfully created 🎉🎉")),s.id}async function F(e){try{const s=c(i(t,"cards"),e);return await l(s),o.emit(r(n.SUCCESS,"Bingo card was deleted successfully")),!0}catch{return o.emit(r(n.ERROR,"Seems like something went wrong deleting the bingo card :/")),!1}}export{A as a,D as b,x as c,P as d,b as e,k as f,T as g,B as h,F as i,q as j,U as s,N as v};