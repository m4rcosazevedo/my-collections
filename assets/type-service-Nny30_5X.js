import{g as a,h as r,ae as n}from"./index-Du1HzC7E.js";class p{constructor(t,e){this.service=t,this.get=e}async getAll(){return(await this.get(this.service)).docs.map(e=>({id:e.id,...e.data()}))}async getAllMap(){const t=new Map;return(await this.get(this.service)).forEach(s=>{s.data().name&&t.set(s.id,s.data().name)}),t}}const i=()=>new p(a(r,"platforms"),n),g=()=>i().getAll(),v=()=>i().getAllMap();class h{constructor(t,e){this.service=t,this.get=e}async getAll(){return(await this.get(this.service)).docs.map(e=>({id:e.id,...e.data()}))}async getAllMap(){const t=new Map;return(await this.get(this.service)).forEach(s=>{t.set(s.id,s.data().name)}),t}}const l=()=>new h(a(r,"statuses"),n),A=()=>l().getAll(),S=()=>l().getAllMap();class m{constructor(t,e){this.service=t,this.get=e}async getAll(){return(await this.get(this.service)).docs.map(e=>({id:e.id,...e.data()}))}async getAllMap(){const t=new Map;return(await this.get(this.service)).forEach(s=>{t.set(s.id,s.data().name)}),t}}const o=()=>new m(a(r,"types"),n),M=()=>o().getAll(),d=()=>o().getAllMap();export{v as a,S as b,M as c,g as d,A as e,d as m};