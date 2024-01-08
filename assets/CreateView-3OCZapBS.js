import{d as C,m as n,I as w,o as U,c as E,a as e,q as o,v as h,s as b,y as _,F,b as y,w as G,T as N,G as q,S as z,k as A,u as B,t as D,x as M,_ as P}from"./index-vMAS2FgS.js";import{h as W}from"./firestore-0tGwIh4n.js";const s=d=>(D("data-v-ea335be1"),d=d(),M(),d),$={class:"input-container"},j=s(()=>e("label",{for:"bingo-name"},"Name your game",-1)),R={class:"input-description error"},H={class:"input-container"},J=s(()=>e("label",{for:"description"},"Description",-1)),K={class:"input-description error"},L=s(()=>e("p",{class:"input-description"}," (required) A short (or long 🤷) description of the bingo game you are making. ",-1)),O={class:"input-container"},Q=s(()=>e("label",{for:"password"},"Password",-1)),X={class:"input-description error"},Y=s(()=>e("p",{class:"input-description"}," (required) The password will be required* to make changes to the game. (see disclaimer at the bottom of the page) ",-1)),Z={class:"input-container"},ee={class:"checkbox-container"},te=s(()=>e("label",{for:"free-space"},'Include a "free" space',-1)),se={class:"switch"},ae=s(()=>e("span",{class:"slider round"},null,-1)),oe=s(()=>e("p",{class:"input-description"},' Include a "free" space in the middle. If you are unsure about this setting, leave it turned off. ',-1)),ne={class:"input-container sub"},ie=s(()=>e("label",{for:"free-space-text"},"Free space text",-1)),le=s(()=>e("p",{class:"input-description"},' The text that will be displayed in the middle of the bingo card. If you just want it to say "free", leave this field empty. ',-1)),re={class:"input-container"},de={class:"checkbox-container"},ce=s(()=>e("label",{for:"grid-size"},"Grid size",-1)),ue=s(()=>e("option",{value:"3"},"3 by 3 (9 fields)",-1)),pe=s(()=>e("option",{value:"5"},"5 by 5 (25 fields)",-1)),ve=[ue,pe],he={class:"input-container"},_e=["disabled"],me=s(()=>e("span",null,"Proceed",-1)),fe=C({__name:"CreateView",setup(d){const x=B(),i=n(""),l=n(""),r=n(""),c=n(!1),m=n(""),f=n(5),u=n(!1),p=n(!1),v=n(!1),I=()=>(u.value=i.value.length<3,p.value=l.value.length<3,v.value=r.value.length<3,!(u.value||p.value||v.value)),S=async()=>{if(I()){const t={name:i.value,description:l.value,hasFreeSpace:c.value,freeSpaceText:m.value,gridWidth:f.value,createdAt:new Date().getTime(),updatedAt:new Date().getTime()},a={gameId:"-",value:r.value},k=await W(t,a);x.push(`/game/${k}`)}},g=w(()=>!!(i.value&&l.value&&r.value)),T=w(()=>g.value?"var(--color-foreground)":"#666666");return(V,t)=>(U(),E("form",{onSubmit:A(S,["prevent"])},[e("div",$,[j,o(e("input",{type:"text",id:"bingo-name","onUpdate:modelValue":t[0]||(t[0]=a=>i.value=a),placeholder:"Boring weekly meeting 😴",class:b({error:u.value})},null,2),[[h,i.value]]),o(e("p",R," The name must be at least 3 characters long. I dont care what you say. ",512),[[_,u.value]])]),e("div",H,[J,o(e("textarea",{id:"description","onUpdate:modelValue":t[1]||(t[1]=a=>l.value=a),class:b({error:p.value})},null,2),[[h,l.value]]),o(e("p",K," Not even a single letter? Come on, you can do better than that! Give me at least 3. ",512),[[_,p.value]]),L]),e("div",O,[Q,o(e("input",{type:"password",id:"password","onUpdate:modelValue":t[2]||(t[2]=a=>r.value=a),placeholder:"***",class:b({error:v.value})},null,2),[[h,r.value]]),o(e("p",X,' The password must be at least 3 characters long. And, yes, "123" is a valid password. ',512),[[_,v.value]]),Y]),e("div",Z,[e("div",ee,[te,e("label",se,[o(e("input",{type:"checkbox",id:"free-space","onUpdate:modelValue":t[3]||(t[3]=a=>c.value=a)},null,512),[[F,c.value]]),ae])]),oe]),y(N,{name:"fly",duration:{enter:300,leave:300}},{default:G(()=>[o(e("div",ne,[ie,o(e("input",{"onUpdate:modelValue":t[4]||(t[4]=a=>m.value=a),type:"text",id:"free-space-text",placeholder:"Free"},null,512),[[h,m.value]]),le],512),[[_,c.value]])]),_:1}),e("div",re,[e("div",de,[ce,o(e("select",{id:"grid-size","onUpdate:modelValue":t[5]||(t[5]=a=>f.value=a)},ve,512),[[q,f.value]])])]),e("div",he,[e("button",{type:"submit",disabled:!g.value,class:"primary"},[me,y(z,{class:"proceed-arrow",color:T.value},null,8,["color"])],8,_e)])],32))}}),we=P(fe,[["__scopeId","data-v-ea335be1"]]);export{we as default};
