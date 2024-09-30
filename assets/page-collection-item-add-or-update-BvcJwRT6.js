import{r as n,n as J,u as K,j as e,B as D,b as C,I as u,F as x,o as U,S as F,p as Q,q as X,i as Y,g as Z,h as w}from"./index-C7QOjOa7.js";import{a as ee,m as ae,b as se}from"./type-service-eiMPoMJW.js";import{u as te,o as re,C as m}from"./yup-D3ZQ-I3N.js";import{L as ie,a as le,M as E,R as ne}from"./lazy-image-DY3fp8C7.js";import{T as me}from"./title-ubsvdhR2.js";import{S as ce,s as oe,u as de}from"./select-image-BHbUBSNm.js";import{B as p}from"./Button-DJ3cU4rx.js";import{G as i}from"./Grid-BkV9HHOy.js";const G={name:"",image:null,imageUrl:"",type:"",platform:"",amount:"",status:"",classification:0,description:""},ye=()=>{const{control:f,handleSubmit:g,formState:{errors:S},watch:y,reset:l,setValue:b}=te({defaultValues:G,resolver:re(J)}),[s,I]=n.useState([]),[h,T]=n.useState([]),[o,v]=n.useState([]),[j,d]=n.useState(!1);return n.useEffect(()=>{d(!0),(async()=>(I(await ee()),T(await ae()),v(await se()),d(!1)))()},[]),{control:f,watch:y,setValue:b,handleSubmit:g,errors:S,types:s,platforms:h,statuses:o,reset:l,DEFAULT_VALUES:G,loading:j}},be=({onSubmit:f,title:g,buttonStatus:S,buttonText:y,collectionItemHook:{control:l,handleSubmit:b,errors:s,types:I,platforms:h,statuses:T,watch:o,setValue:v},previewImage:j,uuid:d})=>{const N=K(),[O,V]=n.useState(!1),[R,k]=n.useState(!0),[z,M]=n.useState([]),[L,A]=n.useState();n.useEffect(()=>{A(j)},[j]);const W=async()=>{if(d&&window.confirm("Deseja realmente excluir este item?"))try{await X(Y(Z,"products",d)),w.success("Item excluído com sucesso!"),N("/collection")}catch{w.error("Erro ao excluir o item!")}},H=async()=>{var B;V(!0),k(!0);const t=o("name"),a=o("platform"),r=((B=h.find(({id:_})=>_===a))==null?void 0:B.name)??"",c=`${t} ${r}`,q=await oe(c);M(q),k(!1)},P=()=>V(!1),$=async t=>{try{const a=await de({imageUrl:t})??"";v("imageUrl",a),A(a),P()}catch{w.error("Erro ao selecionar imagem")}};return e.jsxs(D,{children:[e.jsx(me,{children:g}),e.jsx(ie,{href:"/collection",underline:"hover",children:e.jsx(p,{variant:"contained",color:"primary",size:"small",children:"Voltar"})}),e.jsx(D,{component:"form",noValidate:!0,onSubmit:b(f),sx:{mt:3,width:"100%"},children:e.jsxs(i,{container:!0,spacing:2,children:[e.jsx(i,{item:!0,xs:12,children:e.jsx(m,{name:"name",control:l,render:({field:t})=>{var a;return e.jsx(C,{id:"name",label:"Nome",...t,helperText:(a=s.name)==null?void 0:a.message,error:!!s.name})}})}),e.jsxs(i,{item:!0,xs:12,md:2,children:[L&&e.jsxs(e.Fragment,{children:[e.jsx(u,{children:"Imagem"}),e.jsx(le,{src:L,alt:"Imagem",width:150,height:150})]}),o("name")&&o("platform")&&e.jsx(p,{variant:"contained",onClick:H,size:"small",children:"Buscar Imagem"})]}),e.jsxs(i,{item:!0,xs:12,md:10,children:[e.jsx(u,{children:"Upload de imagem"}),e.jsx("br",{}),e.jsxs(i,{children:[e.jsx(i,{item:!0,children:e.jsx(m,{name:"imageUrl",control:l,render:({field:t})=>{var a;return e.jsx(C,{id:"imageUrl",label:"Url da imagem",...t,helperText:(a=s.imageUrl)==null?void 0:a.message,error:!!s.imageUrl})}})}),e.jsx("br",{}),e.jsx(i,{item:!0,children:e.jsx(m,{name:"image",control:l,defaultValue:null,render:({field:t})=>{var a;return e.jsxs(e.Fragment,{children:[e.jsx("input",{type:"file",onChange:r=>{r.target.files&&r.target.files.length>0&&t.onChange(r.target.files)}}),!!s.image&&e.jsx(x,{error:!0,children:(a=s.image)==null?void 0:a.message})]})}})})]})]}),e.jsx(i,{item:!0,xs:12,children:e.jsx(m,{name:"type",control:l,render:({field:t})=>{var a;return e.jsxs(U,{fullWidth:!0,children:[e.jsx(u,{id:"select-type",children:"Selecionar Tipo"}),e.jsx(F,{...t,labelId:"select-type",label:"Selecionar Tipo",error:!!s.type,children:I.map(({id:r,name:c})=>e.jsx(E,{value:r,children:c},r))}),!!s.type&&e.jsx(x,{error:!0,children:(a=s.type)==null?void 0:a.message})]})}})}),e.jsx(i,{item:!0,xs:12,children:e.jsx(m,{name:"platform",control:l,render:({field:t})=>{var a;return e.jsxs(U,{fullWidth:!0,children:[e.jsx(u,{id:"select-platform",children:"Selecionar Plataforma"}),e.jsx(F,{...t,labelId:"select-platform",label:"Selecionar Plataforma",error:!!s.platform,children:h.map(({id:r,name:c})=>e.jsx(E,{value:r,children:c},r))}),!!s.platform&&e.jsx(x,{error:!0,children:(a=s.platform)==null?void 0:a.message})]})}})}),e.jsx(i,{item:!0,xs:12,children:e.jsx(m,{name:"status",control:l,render:({field:t})=>{var a;return e.jsxs(U,{fullWidth:!0,children:[e.jsx(u,{id:"select-status",children:"Selecionar Status"}),e.jsx(F,{...t,labelId:"select-status",label:"Selecionar Status",error:!!s.status,children:T.map(({id:r,name:c})=>e.jsx(E,{value:r,children:c},r))}),!!s.status&&e.jsx(x,{error:!0,children:(a=s.status)==null?void 0:a.message})]})}})}),e.jsx(i,{item:!0,xs:12,children:e.jsx(m,{name:"amount",control:l,defaultValue:"",render:({field:t})=>{var a;return e.jsx(Q,{...t,inputRef:t.ref,id:"amount",label:"Preço",helperText:(a=s.amount)==null?void 0:a.message,error:!!s.amount})}})}),e.jsx(i,{item:!0,xs:12,children:e.jsx(m,{name:"description",control:l,render:({field:t})=>{var a;return e.jsx(C,{id:"description",label:"Descrição",...t,helperText:(a=s.description)==null?void 0:a.message,error:!!s.description})}})}),e.jsx(i,{item:!0,xs:12,children:e.jsx(m,{name:"classification",control:l,render:({field:t})=>{var a;return e.jsxs(e.Fragment,{children:[e.jsx(u,{id:"classification",children:"Classificação"}),e.jsx(ne,{...t}),!!s.classification&&e.jsx(x,{error:!0,children:(a=s.classification)==null?void 0:a.message})]})}})}),e.jsx(i,{item:!0,xs:12,children:e.jsxs("div",{className:"flex gap-4",children:[e.jsx(p,{variant:"contained",color:"primary",type:"submit",disabled:S,children:y}),d&&e.jsx(p,{variant:"contained",color:"error",onClick:W,children:"Excluir"})]})})]})}),e.jsx(ce,{loading:R,open:O,images:z,onClose:P,onSelectImage:$})]})};export{be as P,ye as u};