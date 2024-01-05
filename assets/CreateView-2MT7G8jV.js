import{l as x,c as S,k,d as D,m as n,n as I,e as E,f as B,g as e,p as o,v as f,s as w,x as c,y as V,z as G,A as N,B as F,C as M,j as q,D as j,E as P,_ as W}from"./index-q_k36FGG.js";async function $(l,u){const i=await x(S(k,"games"),l);return u.gameId=i.id,await x(S(k,"passwords"),u),i.id}const a=l=>(j("data-v-364658de"),l=l(),P(),l),R={class:"input-container"},H=a(()=>e("label",{for:"bingo-name"},"Name your game",-1)),J={class:"input-description error"},K={class:"input-container"},L=a(()=>e("label",{for:"description"},"Description",-1)),O={class:"input-description error"},Q=a(()=>e("p",{class:"input-description"}," (required) A short (or long 🤷) description of the bingo game you are making. ",-1)),X={class:"input-container"},Y=a(()=>e("label",{for:"password"},"Password",-1)),Z={class:"input-description error"},ee=a(()=>e("p",{class:"input-description"}," (required) The password will be required* to make changes to the game. (see disclaimer at the bottom of the page) ",-1)),te={class:"input-container"},se={class:"checkbox-container"},ae=a(()=>e("label",{for:"free-space"},'Include a "free" space',-1)),oe=a(()=>e("p",{class:"input-description"},' Include a "free" space in the middle. If you are unsure about this setting, leave it turned off. ',-1)),ne={class:"input-container sub"},ie=a(()=>e("label",{for:"free-space-text"},"Free space text",-1)),le=a(()=>e("p",{class:"input-description"},' The text that will be displayed in the middle of the bingo card. If you just want it so day "free", leave this field empty. ',-1)),de={class:"input-container"},re={class:"checkbox-container"},ce=a(()=>e("label",{for:"size"},"Standard size",-1)),ue=a(()=>e("p",{class:"input-description"},"A standard game will always generate 5 by 5 bingo cards.",-1)),pe={class:"input-container sub"},ve={class:"checkbox-container"},_e=a(()=>e("label",{for:"grid-size"},"Grid size",-1)),he=a(()=>e("option",{value:"3"},"3 by 3 (9 fields)",-1)),me=a(()=>e("option",{value:"5"},"5 by 5 (25 fields)",-1)),fe=[he,me],be={class:"input-container"},ge=["disabled"],we=a(()=>e("span",null,"Proceed",-1)),ye=D({__name:"CreateView",setup(l){const u=q(),i=n(""),d=n(""),r=n(""),p=n(!1),b=n(""),v=n(!0),g=n(5),_=n(!1),h=n(!1),m=n(!1),z=()=>(_.value=i.value.length<3,h.value=d.value.length<3,m.value=r.value.length<3,!(_.value||h.value||m.value)),T=async()=>{if(z()){const t={name:i.value,description:d.value,hasFreeSpace:p.value,freeSpaceText:b.value,isStandardSize:v.value,gridWidth:g.value,createdAt:new Date().getTime(),updatedAt:new Date().getTime()},s={gameId:"-",value:r.value},A=await $(t,s);u.push(`/game/${A}`)}},y=I(()=>!!(i.value&&d.value&&r.value)),C=I(()=>y.value?"var(--color-foreground)":"#666666");return(U,t)=>(E(),B("form",{onSubmit:M(T,["prevent"])},[e("div",R,[H,o(e("input",{type:"text",id:"bingo-name","onUpdate:modelValue":t[0]||(t[0]=s=>i.value=s),placeholder:"Boring weekly meeting 😴",class:w({error:_.value})},null,2),[[f,i.value]]),o(e("p",J," The name must be at least 3 characters long. I dont care what you say. ",512),[[c,_.value]])]),e("div",K,[L,o(e("textarea",{id:"description","onUpdate:modelValue":t[1]||(t[1]=s=>d.value=s),class:w({error:h.value})},null,2),[[f,d.value]]),o(e("p",O," Not even a single letter? Come on, you can do better than that! Give me at least 3. ",512),[[c,h.value]]),Q]),e("div",X,[Y,o(e("input",{type:"password",id:"password","onUpdate:modelValue":t[2]||(t[2]=s=>r.value=s),placeholder:"***",class:w({error:m.value})},null,2),[[f,r.value]]),o(e("p",Z,' The password must be at least 3 characters long. And, yes, "123" is a valid password. ',512),[[c,m.value]]),ee]),e("div",te,[e("div",se,[ae,o(e("input",{type:"checkbox",id:"free-space","onUpdate:modelValue":t[3]||(t[3]=s=>p.value=s)},null,512),[[V,p.value]])]),oe]),o(e("div",ne,[ie,o(e("input",{"onUpdate:modelValue":t[4]||(t[4]=s=>b.value=s),type:"text",id:"free-space-text",placeholder:"Free"},null,512),[[f,b.value]]),le],512),[[c,p.value]]),e("div",de,[e("div",re,[ce,o(e("input",{type:"checkbox",id:"size","onUpdate:modelValue":t[5]||(t[5]=s=>v.value=s)},null,512),[[V,v.value]]),ue])]),o(e("div",pe,[e("div",ve,[_e,o(e("select",{id:"grid-size","onUpdate:modelValue":t[6]||(t[6]=s=>g.value=s)},fe,512),[[G,g.value]])])],512),[[c,!v.value]]),e("div",be,[e("button",{type:"submit",disabled:!y.value},[we,N(F,{class:"proceed-arrow",color:C.value},null,8,["color"])],8,ge)])],32))}}),Se=W(ye,[["__scopeId","data-v-364658de"]]);export{Se as default};
