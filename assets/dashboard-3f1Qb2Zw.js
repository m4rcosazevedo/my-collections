import{u as A,r as c,m as M,j as t,L as P,B as k,P as w,T as G}from"./index-DSiCDo4C.js";import{T as B}from"./title-CuTYzyJG.js";import{m as D,a as J,b as q}from"./type-service-BbVZSRKM.js";import{m as E}from"./product-service-fQmZVlrt.js";import{f as b}from"./price-wcI7WIqs.js";import{G as L}from"./Grid-BxbrYCOG.js";import{T as R,a as z,b as T,c as a,d as C}from"./TableRow-CEUknWjw.js";const N=()=>{const{uuid:m}=A(),[u,o]=c.useState(!0),[l,r]=c.useState([]),[s,e]=c.useState([]),[n,i]=c.useState([]),[d,j]=c.useState([]);return c.useEffect(()=>{o(!0),(async()=>{const y=await E(),h=await D(),p=await J(),x=await q(),g=await M();e(Array.from(p.values())),i(Array.from(h.values())),j(Array.from(x.values())),r(y.map(f=>({...f,platform:p.get(f.platform),status:x.get(f.status),type:h.get(f.type),collection:g.get(f.collection)}))),o(!1)})()},[m]),{products:l,loading:u,platforms:s,types:n,statuses:d}};function v(m,u){const o=Math.pow(10,15),l=Math.round(m*o),r=Math.round(u*o);return(l+r)/o}function U(){const{products:m,loading:u}=N();if(u)return t.jsx(P,{});let o=0,l=0;const r=m.reduce((s,e)=>{var j,S,y,h,p,x,g;const n=e.collection;if(n!=="Jogos")return s;const i=e.platform,d=e.type;return o=v(o,e.amount),l=l+1,{...s,[n]:{...s[n],[i]:{...(j=s[n])==null?void 0:j[i],[d]:{quantity:(((h=(y=(S=s[n])==null?void 0:S[i])==null?void 0:y[d])==null?void 0:h.quantity)||0)+1,amount:v(((g=(x=(p=s[n])==null?void 0:p[i])==null?void 0:x[d])==null?void 0:g.amount)||0,e.amount)}}}}},{});return t.jsxs(k,{children:[t.jsx(B,{children:"Dashboard"}),t.jsx(L,{item:!0,xs:12,marginBottom:4,children:t.jsxs(w,{sx:{p:2,display:"flex",flexDirection:"column"},children:[t.jsx(G,{variant:"h6",children:"Resumo dos jogos"}),t.jsxs(R,{size:"small",style:{marginBottom:32},children:[t.jsx(z,{children:t.jsxs(T,{children:[t.jsx(a,{children:"Plataforma"}),t.jsx(a,{children:"Tipo"}),t.jsx(a,{children:"Quantidade"}),t.jsx(a,{children:"Valor"})]})}),t.jsxs(C,{children:[r.Jogos&&Object.keys(r.Jogos).map(s=>Object.keys(r.Jogos[s]).map(e=>t.jsxs(T,{hover:!0,children:[t.jsx(a,{children:s}),t.jsx(a,{children:e}),t.jsx(a,{children:r.Jogos[s][e].quantity}),t.jsx(a,{children:b(r.Jogos[s][e].amount)})]},e))),t.jsxs(T,{hover:!0,children:[t.jsx(a,{colSpan:2,children:"Total"}),t.jsx(a,{children:l}),t.jsx(a,{children:b(o)})]})]})]})]})})]})}export{U as default};
