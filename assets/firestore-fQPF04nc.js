import{h as t,c as i,C as c,az as l,N as r,p as n,s as R,aA as C,aB as v,q as y,Q as f,V as p,U}from"./index-DWgc1497.js";async function q(e){const s=sessionStorage.getItem("pw-exp-very-secure-"+e);if(s){if(parseInt(s)<new Date().getTime())return S(e),!1}else return!1;const a=sessionStorage.getItem("pw-very-secure-"+e);if(!a)return S(e),!1;const u=await N(e,a);return u||S(e),u}function D(e,s){sessionStorage.setItem("pw-very-secure-"+e,s);const a=new Date().getTime()+1e3*60*60*23*1;sessionStorage.setItem("pw-exp-very-secure-"+e,a.toString())}function S(e){sessionStorage.removeItem("pw-exp-very-secure-"+e),sessionStorage.removeItem("pw-very-secure-"+e)}const o=R();async function x(e,s){const a=await C(i(t,"games"),e);return s.gameId=a.id,await C(i(t,"passwords"),s),o.emit(n(r.SUCCESS,"Game created successfully")),a.id}async function G(e,s=!0){return e.updatedAt=new Date().getTime(),await v(c(t,"games",e.id),e),s&&o.emit(n(r.SUCCESS,"Game updated successfully")),e}async function A(e,s,a){const u=y(i(t,"passwords"),f("gameId","==",e),f("value","==",s)),d=await p(u);if(d.docs.length===0)return!1;const w=d.docs[0].data();return w.value=a,await v(c(t,"passwords",d.docs[0].id),w),D(e,a),o.emit(n(r.SUCCESS,"Password updated successfully")),await E(e),!0}async function B(e){try{await l(c(t,"games",e));const s=y(i(t,"passwords"),f("gameId","==",e)),a=await p(s);for(const m of a.docs.map(g=>g.id))await l(c(t,"passwords",m));S(e);const u=y(i(t,"entries"),f("gameId","==",e)),d=await p(u);for(const m of d.docs.map(g=>g.id))await l(c(t,"entries",m));const w=y(i(t,"cards"),f("gameId","==",e)),h=await p(w);for(const m of h.docs.map(g=>g.id))await l(c(t,"cards",m))}catch(s){return console.error("Error deleting game:",s),o.emit(n(r.ERROR,"Error deleting game")),!1}return o.emit(n(r.SUCCESS,"Game deleted successfully")),!0}async function N(e,s){const a=y(i(t,"passwords"),f("gameId","==",e)),d=(await p(a)).docs.map(w=>w.data());return d.length===0?(console.log("OH GOD! No password found for game:",e),o.emit(n(r.ERROR,"Error validating password")),!1):d[0].value===s}async function T(e){const s=await C(i(t,"entries"),e);return o.emit(n(r.SUCCESS,"Entry was successfully added :)")),{...e,id:s.id}}async function k(e){try{e.updatedAt=new Date().getTime();const s=c(i(t,"entries"),e.id);return await v(s,e),await E(e.gameId),o.emit(n(r.SUCCESS,"Changed successfully :)",2e3)),e}catch(s){return console.error("Error saving entry:",s),o.emit(n(r.ERROR,"Error saving entry")),e}}async function P(e){try{const s=c(i(t,"entries"),e.id);return await l(s),await E(e.gameId),o.emit(n(r.SUCCESS,"Entry was successfully deleted :)")),!0}catch{return o.emit(n(r.ERROR,"Error deleting entry my man :/")),!1}}async function E(e){const s=c(i(t,"games"),e),a=await U(s);if(!a.exists()){o.emit(n(r.WARNING,"Something went wrong syncing to the server :("));return}await G({...a.data(),id:e},!1)}async function b(e){const s=await C(i(t,"cards"),e);return o.emit(n(r.SUCCESS,"🎉🎉 Bingo Card was successfully created 🎉🎉")),s.id}async function F(e){try{const s=c(i(t,"cards"),e);return await l(s),o.emit(n(r.SUCCESS,"Bingo card was deleted successfully")),!0}catch{return o.emit(n(r.ERROR,"Seems like something went wrong deleting the bingo card :/")),!1}}async function W(e){try{const s=c(i(t,"cards"),e.id);return await v(s,e),!0}catch{return o.emit(n(r.ERROR,"Woopsie, something went wrong. Try again pwease 🥺👉👈.")),!1}}export{G as a,k as b,P as c,B as d,T as e,F as f,D as g,q as h,b as i,W as j,x as k,A as s,N as v};