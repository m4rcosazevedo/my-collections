import{u as n,r as l,j as e,C as u,e as p,f as d,g as f,h as i}from"./index-MZ929h9y.js";import{u as g,P as C}from"./page-collection-item-add-or-update-C-zMNzVn.js";import{u as x}from"./select-image-cu3FwVTk.js";import{s as U}from"./price-wcI7WIqs.js";import"./type-service-BmtdAx3N.js";import"./yup-BzXHsZPH.js";import"./lazy-image-C0kYf_Jw.js";import"./title-BiLvjyzV.js";import"./Button-DwUszXdm.js";import"./Grid-CTaUTEnf.js";const F=()=>{const m=n(),[o,a]=l.useState(!1),s=g(),c=async t=>{a(!0);try{const r=await x({imageUrl:t.imageUrl,imageFile:t.image});await p(d(f,"products"),{name:t.name,image:r,type:t.type,platform:t.platform,amount:U(t.amount),status:t.status,classification:t.classification,description:t.description}),i.success("Produto cadastrado com sucesso!"),m("/collection")}catch{i.error("Erro ao cadastrar produto")}finally{a(!1)}};return o?e.jsx(u,{}):e.jsx(C,{defaultValues:s.DEFAULT_VALUES,onSubmit:c,title:"Cadastrar novo item",buttonStatus:o,buttonText:o?"Cadastrando...":"Cadastrar",collectionItemHook:s})};export{F as default};