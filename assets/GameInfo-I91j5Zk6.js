import{d as p,G as s,o as l,c as u,a,z as n,b as d,e as g,u as _,av as f,_ as h}from"./index-Ht2DMbNU.js";const v={class:"game-info-container"},x=p({__name:"GameInfo",props:{gameId:{},game:{},maxDescriptionLength:{}},setup(t){const e=t,c=_(),r=()=>{c.push(`/game/${e.gameId}`)},o=s(()=>e.maxDescriptionLength??100),i=s(()=>e.game.description.length>o.value?e.game.description.substring(0,o.value)+"...":e.game.description);return(m,G)=>(l(),u("div",v,[a("h2",null,n(m.game.name),1),a("p",null,n(i.value),1),a("button",{onClick:r,class:"secondary"},[d(f,{class:"icon",color:"var(--color-primary)"}),g(" More info ")])]))}}),b=h(x,[["__scopeId","data-v-b385c457"]]);export{b as G};