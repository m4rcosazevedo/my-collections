import{t as Oe,v as Ie,u as Te,r as le,j as c,B as je,T as Ee,C as Ae,h as ve,e as De,f as Le,g as Fe}from"./index-eWoTkkmh.js";import{S as Ue,s as ze,u as Me}from"./select-image-Cw_AHde4.js";import{s as Be}from"./price-wcI7WIqs.js";import{B as ke}from"./Button-D66A-ifl.js";import{T as Pe,a as Ne,b as we,c as z,d as qe}from"./TableRow-D_WoJDi8.js";import"./Grid-BzInBlU6.js";const We={Digital:"ysBMBpptPPRtdKK47uZC",Física:"QG6de4lwB7ViyNGYXfvY"},He={"Playstation 5":"1oeW31SqUJQNdSEVWKeL",Switch:"uQp8MY9NttLIHveChWzf","3DS":"BD4CTGYgHzuJCRlyFU25",PS4:"Dbt8a6rOOw9M8St6mh8h","Game Boy Color":"myUAvPjohwppFd9eLZWs","Super Nintendo":"zHZlibFOiAKKA00ByDHd",Amiibo:"oVhjLSzkXd2S4BeaEEnX"},Se={Finalizado:"UzwXRv5JzalWelwlSkN4","Em Andamento":"3eB6uouNmZx1DgtwY5Jh",Abandonado:"jVLBsUwrUGnlcoSFOzqm","":"NUgTEwhwtd3HFlozHJSL"};class Ke{constructor(ce){this.product=ce}get name(){return this.product.name??""}get imageUrl(){return this.product.imageUrl??""}get type(){return We[this.product.type]}get platform(){return He[this.product.platform]}get amount(){return Be(this.product.amount)}get status(){return Se[this.product.status]??Se[""]}get classification(){return this.product.classification??0}get description(){return this.product.description??""}}var Re={exports:{}};/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/(function(me,ce){(function(de,p){me.exports=p()})(Oe,function de(){var p=typeof self<"u"?self:typeof window<"u"?window:p!==void 0?p:{},$=!p.document&&!!p.postMessage,fe=p.IS_PAPA_WORKER||!1,ae={},xe=0,l={parse:function(t,e){var r=(e=e||{}).dynamicTyping||!1;if(m(r)&&(e.dynamicTypingFunction=r,r={}),e.dynamicTyping=r,e.transform=!!m(e.transform)&&e.transform,e.worker&&l.WORKERS_SUPPORTED){var n=function(){if(!l.WORKERS_SUPPORTED)return!1;var h=(A=p.URL||p.webkitURL||null,E=de.toString(),l.BLOB_URL||(l.BLOB_URL=A.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",E,")();"],{type:"text/javascript"})))),d=new p.Worker(h),A,E;return d.onmessage=C,d.id=xe++,ae[d.id]=d}();return n.userStep=e.step,n.userChunk=e.chunk,n.userComplete=e.complete,n.userError=e.error,e.step=m(e.step),e.chunk=m(e.chunk),e.complete=m(e.complete),e.error=m(e.error),delete e.worker,void n.postMessage({input:t,config:e,workerId:n.id})}var s=null;return l.NODE_STREAM_INPUT,typeof t=="string"?(t=function(h){return h.charCodeAt(0)===65279?h.slice(1):h}(t),s=e.download?new Y(e):new Z(e)):t.readable===!0&&m(t.read)&&m(t.on)?s=new ue(e):(p.File&&t instanceof File||t instanceof Object)&&(s=new oe(e)),s.stream(t)},unparse:function(t,e){var r=!1,n=!0,s=",",h=`\r
`,d='"',A=d+d,E=!1,a=null,S=!1;(function(){if(typeof e=="object"){if(typeof e.delimiter!="string"||l.BAD_DELIMITERS.filter(function(i){return e.delimiter.indexOf(i)!==-1}).length||(s=e.delimiter),(typeof e.quotes=="boolean"||typeof e.quotes=="function"||Array.isArray(e.quotes))&&(r=e.quotes),typeof e.skipEmptyLines!="boolean"&&typeof e.skipEmptyLines!="string"||(E=e.skipEmptyLines),typeof e.newline=="string"&&(h=e.newline),typeof e.quoteChar=="string"&&(d=e.quoteChar),typeof e.header=="boolean"&&(n=e.header),Array.isArray(e.columns)){if(e.columns.length===0)throw new Error("Option columns is empty");a=e.columns}e.escapeChar!==void 0&&(A=e.escapeChar+d),(typeof e.escapeFormulae=="boolean"||e.escapeFormulae instanceof RegExp)&&(S=e.escapeFormulae instanceof RegExp?e.escapeFormulae:/^[=+\-@\t\r].*$/)}})();var u=new RegExp(X(d),"g");if(typeof t=="string"&&(t=JSON.parse(t)),Array.isArray(t)){if(!t.length||Array.isArray(t[0]))return H(null,t,E);if(typeof t[0]=="object")return H(a||Object.keys(t[0]),t,E)}else if(typeof t=="object")return typeof t.data=="string"&&(t.data=JSON.parse(t.data)),Array.isArray(t.data)&&(t.fields||(t.fields=t.meta&&t.meta.fields||a),t.fields||(t.fields=Array.isArray(t.data[0])?t.fields:typeof t.data[0]=="object"?Object.keys(t.data[0]):[]),Array.isArray(t.data[0])||typeof t.data[0]=="object"||(t.data=[t.data])),H(t.fields||[],t.data||[],E);throw new Error("Unable to serialize unrecognized input");function H(i,v,F){var w="";typeof i=="string"&&(i=JSON.parse(i)),typeof v=="string"&&(v=JSON.parse(v));var D=Array.isArray(i)&&0<i.length,T=!Array.isArray(v[0]);if(D&&n){for(var j=0;j<i.length;j++)0<j&&(w+=s),w+=L(i[j],j);0<v.length&&(w+=h)}for(var o=0;o<v.length;o++){var f=D?i.length:v[o].length,x=!1,I=D?Object.keys(v[o]).length===0:v[o].length===0;if(F&&!D&&(x=F==="greedy"?v[o].join("").trim()==="":v[o].length===1&&v[o][0].length===0),F==="greedy"&&D){for(var _=[],U=0;U<f;U++){var R=T?i[U]:U;_.push(v[o][R])}x=_.join("").trim()===""}if(!x){for(var y=0;y<f;y++){0<y&&!I&&(w+=s);var K=D&&T?i[y]:y;w+=L(v[o][K],y)}o<v.length-1&&(!F||0<f&&!I)&&(w+=h)}}return w}function L(i,v){if(i==null)return"";if(i.constructor===Date)return JSON.stringify(i).slice(1,25);var F=!1;S&&typeof i=="string"&&S.test(i)&&(i="'"+i,F=!0);var w=i.toString().replace(u,A);return(F=F||r===!0||typeof r=="function"&&r(i,v)||Array.isArray(r)&&r[v]||function(D,T){for(var j=0;j<T.length;j++)if(-1<D.indexOf(T[j]))return!0;return!1}(w,l.BAD_DELIMITERS)||-1<w.indexOf(s)||w.charAt(0)===" "||w.charAt(w.length-1)===" ")?d+w+d:w}}};if(l.RECORD_SEP="",l.UNIT_SEP="",l.BYTE_ORDER_MARK="\uFEFF",l.BAD_DELIMITERS=["\r",`
`,'"',l.BYTE_ORDER_MARK],l.WORKERS_SUPPORTED=!$&&!!p.Worker,l.NODE_STREAM_INPUT=1,l.LocalChunkSize=10485760,l.RemoteChunkSize=5242880,l.DefaultDelimiter=",",l.Parser=pe,l.ParserHandle=_e,l.NetworkStreamer=Y,l.FileStreamer=oe,l.StringStreamer=Z,l.ReadableStreamStreamer=ue,p.jQuery){var ne=p.jQuery;ne.fn.parse=function(t){var e=t.config||{},r=[];return this.each(function(h){if(!(ne(this).prop("tagName").toUpperCase()==="INPUT"&&ne(this).attr("type").toLowerCase()==="file"&&p.FileReader)||!this.files||this.files.length===0)return!0;for(var d=0;d<this.files.length;d++)r.push({file:this.files[d],inputElem:this,instanceConfig:ne.extend({},e)})}),n(),this;function n(){if(r.length!==0){var h,d,A,E,a=r[0];if(m(t.before)){var S=t.before(a.file,a.inputElem);if(typeof S=="object"){if(S.action==="abort")return h="AbortError",d=a.file,A=a.inputElem,E=S.reason,void(m(t.error)&&t.error({name:h},d,A,E));if(S.action==="skip")return void s();typeof S.config=="object"&&(a.instanceConfig=ne.extend(a.instanceConfig,S.config))}else if(S==="skip")return void s()}var u=a.instanceConfig.complete;a.instanceConfig.complete=function(H){m(u)&&u(H,a.file,a.inputElem),s()},l.parse(a.file,a.instanceConfig)}else m(t.complete)&&t.complete()}function s(){r.splice(0,1),n()}}}function B(t){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(e){var r=ge(e);r.chunkSize=parseInt(r.chunkSize),e.step||e.chunk||(r.chunkSize=null),this._handle=new _e(r),(this._handle.streamer=this)._config=r}).call(this,t),this.parseChunk=function(e,r){if(this.isFirstChunk&&m(this._config.beforeFirstChunk)){var n=this._config.beforeFirstChunk(e);n!==void 0&&(e=n)}this.isFirstChunk=!1,this._halted=!1;var s=this._partialLine+e;this._partialLine="";var h=this._handle.parse(s,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var d=h.meta.cursor;this._finished||(this._partialLine=s.substring(d-this._baseIndex),this._baseIndex=d),h&&h.data&&(this._rowCount+=h.data.length);var A=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(fe)p.postMessage({results:h,workerId:l.WORKER_ID,finished:A});else if(m(this._config.chunk)&&!r){if(this._config.chunk(h,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);h=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(h.data),this._completeResults.errors=this._completeResults.errors.concat(h.errors),this._completeResults.meta=h.meta),this._completed||!A||!m(this._config.complete)||h&&h.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),A||h&&h.meta.paused||this._nextChunk(),h}this._halted=!0},this._sendError=function(e){m(this._config.error)?this._config.error(e):fe&&this._config.error&&p.postMessage({workerId:l.WORKER_ID,error:e,finished:!1})}}function Y(t){var e;(t=t||{}).chunkSize||(t.chunkSize=l.RemoteChunkSize),B.call(this,t),this._nextChunk=$?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(r){this._input=r,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(e=new XMLHttpRequest,this._config.withCredentials&&(e.withCredentials=this._config.withCredentials),$||(e.onload=J(this._chunkLoaded,this),e.onerror=J(this._chunkError,this)),e.open(this._config.downloadRequestBody?"POST":"GET",this._input,!$),this._config.downloadRequestHeaders){var r=this._config.downloadRequestHeaders;for(var n in r)e.setRequestHeader(n,r[n])}if(this._config.chunkSize){var s=this._start+this._config.chunkSize-1;e.setRequestHeader("Range","bytes="+this._start+"-"+s)}try{e.send(this._config.downloadRequestBody)}catch(h){this._chunkError(h.message)}$&&e.status===0&&this._chunkError()}},this._chunkLoaded=function(){e.readyState===4&&(e.status<200||400<=e.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:e.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(r){var n=r.getResponseHeader("Content-Range");return n===null?-1:parseInt(n.substring(n.lastIndexOf("/")+1))}(e),this.parseChunk(e.responseText)))},this._chunkError=function(r){var n=e.statusText||r;this._sendError(new Error(n))}}function oe(t){var e,r;(t=t||{}).chunkSize||(t.chunkSize=l.LocalChunkSize),B.call(this,t);var n=typeof FileReader<"u";this.stream=function(s){this._input=s,r=s.slice||s.webkitSlice||s.mozSlice,n?((e=new FileReader).onload=J(this._chunkLoaded,this),e.onerror=J(this._chunkError,this)):e=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var s=this._input;if(this._config.chunkSize){var h=Math.min(this._start+this._config.chunkSize,this._input.size);s=r.call(s,this._start,h)}var d=e.readAsText(s,this._config.encoding);n||this._chunkLoaded({target:{result:d}})},this._chunkLoaded=function(s){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(s.target.result)},this._chunkError=function(){this._sendError(e.error)}}function Z(t){var e;B.call(this,t=t||{}),this.stream=function(r){return e=r,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var r,n=this._config.chunkSize;return n?(r=e.substring(0,n),e=e.substring(n)):(r=e,e=""),this._finished=!e,this.parseChunk(r)}}}function ue(t){B.call(this,t=t||{});var e=[],r=!0,n=!1;this.pause=function(){B.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){B.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(s){this._input=s,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){n&&e.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),e.length?this.parseChunk(e.shift()):r=!0},this._streamData=J(function(s){try{e.push(typeof s=="string"?s:s.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(e.shift()))}catch(h){this._streamError(h)}},this),this._streamError=J(function(s){this._streamCleanUp(),this._sendError(s)},this),this._streamEnd=J(function(){this._streamCleanUp(),n=!0,this._streamData("")},this),this._streamCleanUp=J(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function _e(t){var e,r,n,s=Math.pow(2,53),h=-s,d=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,A=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,E=this,a=0,S=0,u=!1,H=!1,L=[],i={data:[],errors:[],meta:{}};if(m(t.step)){var v=t.step;t.step=function(o){if(i=o,D())w();else{if(w(),i.data.length===0)return;a+=o.data.length,t.preview&&a>t.preview?r.abort():(i.data=i.data[0],v(i,E))}}}function F(o){return t.skipEmptyLines==="greedy"?o.join("").trim()==="":o.length===1&&o[0].length===0}function w(){return i&&n&&(j("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+l.DefaultDelimiter+"'"),n=!1),t.skipEmptyLines&&(i.data=i.data.filter(function(o){return!F(o)})),D()&&function(){if(!i)return;function o(x,I){m(t.transformHeader)&&(x=t.transformHeader(x,I)),L.push(x)}if(Array.isArray(i.data[0])){for(var f=0;D()&&f<i.data.length;f++)i.data[f].forEach(o);i.data.splice(0,1)}else i.data.forEach(o)}(),function(){if(!i||!t.header&&!t.dynamicTyping&&!t.transform)return i;function o(x,I){var _,U=t.header?{}:[];for(_=0;_<x.length;_++){var R=_,y=x[_];t.header&&(R=_>=L.length?"__parsed_extra":L[_]),t.transform&&(y=t.transform(y,R)),y=T(R,y),R==="__parsed_extra"?(U[R]=U[R]||[],U[R].push(y)):U[R]=y}return t.header&&(_>L.length?j("FieldMismatch","TooManyFields","Too many fields: expected "+L.length+" fields but parsed "+_,S+I):_<L.length&&j("FieldMismatch","TooFewFields","Too few fields: expected "+L.length+" fields but parsed "+_,S+I)),U}var f=1;return!i.data.length||Array.isArray(i.data[0])?(i.data=i.data.map(o),f=i.data.length):i.data=o(i.data,0),t.header&&i.meta&&(i.meta.fields=L),S+=f,i}()}function D(){return t.header&&L.length===0}function T(o,f){return x=o,t.dynamicTypingFunction&&t.dynamicTyping[x]===void 0&&(t.dynamicTyping[x]=t.dynamicTypingFunction(x)),(t.dynamicTyping[x]||t.dynamicTyping)===!0?f==="true"||f==="TRUE"||f!=="false"&&f!=="FALSE"&&(function(I){if(d.test(I)){var _=parseFloat(I);if(h<_&&_<s)return!0}return!1}(f)?parseFloat(f):A.test(f)?new Date(f):f===""?null:f):f;var x}function j(o,f,x,I){var _={type:o,code:f,message:x};I!==void 0&&(_.row=I),i.errors.push(_)}this.parse=function(o,f,x){var I=t.quoteChar||'"';if(t.newline||(t.newline=function(R,y){R=R.substring(0,1048576);var K=new RegExp(X(y)+"([^]*?)"+X(y),"gm"),P=(R=R.replace(K,"")).split("\r"),Q=R.split(`
`),G=1<Q.length&&Q[0].length<P[0].length;if(P.length===1||G)return`
`;for(var N=0,b=0;b<P.length;b++)P[b][0]===`
`&&N++;return N>=P.length/2?`\r
`:"\r"}(o,I)),n=!1,t.delimiter)m(t.delimiter)&&(t.delimiter=t.delimiter(o),i.meta.delimiter=t.delimiter);else{var _=function(R,y,K,P,Q){var G,N,b,O;Q=Q||[",","	","|",";",l.RECORD_SEP,l.UNIT_SEP];for(var ie=0;ie<Q.length;ie++){var g=Q[ie],he=0,V=0,se=0;b=void 0;for(var ee=new pe({comments:P,delimiter:g,newline:y,preview:10}).parse(R),te=0;te<ee.data.length;te++)if(K&&F(ee.data[te]))se++;else{var re=ee.data[te].length;V+=re,b!==void 0?0<re&&(he+=Math.abs(re-b),b=re):b=re}0<ee.data.length&&(V/=ee.data.length-se),(N===void 0||he<=N)&&(O===void 0||O<V)&&1.99<V&&(N=he,G=g,O=V)}return{successful:!!(t.delimiter=G),bestDelimiter:G}}(o,t.newline,t.skipEmptyLines,t.comments,t.delimitersToGuess);_.successful?t.delimiter=_.bestDelimiter:(n=!0,t.delimiter=l.DefaultDelimiter),i.meta.delimiter=t.delimiter}var U=ge(t);return t.preview&&t.header&&U.preview++,e=o,r=new pe(U),i=r.parse(e,f,x),w(),u?{meta:{paused:!0}}:i||{meta:{paused:!1}}},this.paused=function(){return u},this.pause=function(){u=!0,r.abort(),e=m(t.chunk)?"":e.substring(r.getCharIndex())},this.resume=function(){E.streamer._halted?(u=!1,E.streamer.parseChunk(e,!0)):setTimeout(E.resume,3)},this.aborted=function(){return H},this.abort=function(){H=!0,r.abort(),i.meta.aborted=!0,m(t.complete)&&t.complete(i),e=""}}function X(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function pe(t){var e,r=(t=t||{}).delimiter,n=t.newline,s=t.comments,h=t.step,d=t.preview,A=t.fastMode,E=e=t.quoteChar===void 0||t.quoteChar===null?'"':t.quoteChar;if(t.escapeChar!==void 0&&(E=t.escapeChar),(typeof r!="string"||-1<l.BAD_DELIMITERS.indexOf(r))&&(r=","),s===r)throw new Error("Comment character same as delimiter");s===!0?s="#":(typeof s!="string"||-1<l.BAD_DELIMITERS.indexOf(s))&&(s=!1),n!==`
`&&n!=="\r"&&n!==`\r
`&&(n=`
`);var a=0,S=!1;this.parse=function(u,H,L){if(typeof u!="string")throw new Error("Input must be a string");var i=u.length,v=r.length,F=n.length,w=s.length,D=m(h),T=[],j=[],o=[],f=a=0;if(!u)return q();if(t.header&&!H){var x=u.split(n)[0].split(r),I=[],_={},U=!1;for(var R in x){var y=x[R];m(t.transformHeader)&&(y=t.transformHeader(y,R));var K=y,P=_[y]||0;for(0<P&&(U=!0,K=y+"_"+P),_[y]=P+1;I.includes(K);)K=K+"_"+P;I.push(K)}if(U){var Q=u.split(n);Q[0]=I.join(r),u=Q.join(n)}}if(A||A!==!1&&u.indexOf(e)===-1){for(var G=u.split(n),N=0;N<G.length;N++){if(o=G[N],a+=o.length,N!==G.length-1)a+=n.length;else if(L)return q();if(!s||o.substring(0,w)!==s){if(D){if(T=[],se(o.split(r)),ye(),S)return q()}else se(o.split(r));if(d&&d<=N)return T=T.slice(0,d),q(!0)}}return q()}for(var b=u.indexOf(r,a),O=u.indexOf(n,a),ie=new RegExp(X(E)+X(e),"g"),g=u.indexOf(e,a);;)if(u[a]!==e)if(s&&o.length===0&&u.substring(a,a+w)===s){if(O===-1)return q();a=O+F,O=u.indexOf(n,a),b=u.indexOf(r,a)}else if(b!==-1&&(b<O||O===-1))o.push(u.substring(a,b)),a=b+v,b=u.indexOf(r,a);else{if(O===-1)break;if(o.push(u.substring(a,O)),re(O+F),D&&(ye(),S))return q();if(d&&T.length>=d)return q(!0)}else for(g=a,a++;;){if((g=u.indexOf(e,g+1))===-1)return L||j.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:T.length,index:a}),te();if(g===i-1)return te(u.substring(a,g).replace(ie,e));if(e!==E||u[g+1]!==E){if(e===E||g===0||u[g-1]!==E){b!==-1&&b<g+1&&(b=u.indexOf(r,g+1)),O!==-1&&O<g+1&&(O=u.indexOf(n,g+1));var he=ee(O===-1?b:Math.min(b,O));if(u.substr(g+1+he,v)===r){o.push(u.substring(a,g).replace(ie,e)),u[a=g+1+he+v]!==e&&(g=u.indexOf(e,a)),b=u.indexOf(r,a),O=u.indexOf(n,a);break}var V=ee(O);if(u.substring(g+1+V,g+1+V+F)===n){if(o.push(u.substring(a,g).replace(ie,e)),re(g+1+V+F),b=u.indexOf(r,a),g=u.indexOf(e,a),D&&(ye(),S))return q();if(d&&T.length>=d)return q(!0);break}j.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:T.length,index:a}),g++}}else g++}return te();function se(W){T.push(W),f=a}function ee(W){var Ce=0;if(W!==-1){var be=u.substring(g+1,W);be&&be.trim()===""&&(Ce=be.length)}return Ce}function te(W){return L||(W===void 0&&(W=u.substring(a)),o.push(W),a=i,se(o),D&&ye()),q()}function re(W){a=W,se(o),o=[],O=u.indexOf(n,a)}function q(W){return{data:T,errors:j,meta:{delimiter:r,linebreak:n,aborted:S,truncated:!!W,cursor:f+(H||0)}}}function ye(){h(q()),T=[],j=[]}},this.abort=function(){S=!0},this.getCharIndex=function(){return a}}function C(t){var e=t.data,r=ae[e.workerId],n=!1;if(e.error)r.userError(e.error,e.file);else if(e.results&&e.results.data){var s={abort:function(){n=!0,k(e.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:M,resume:M};if(m(r.userStep)){for(var h=0;h<e.results.data.length&&(r.userStep({data:e.results.data[h],errors:e.results.errors,meta:e.results.meta},s),!n);h++);delete e.results}else m(r.userChunk)&&(r.userChunk(e.results,s,e.file),delete e.results)}e.finished&&!n&&k(e.workerId,e.results)}function k(t,e){var r=ae[t];m(r.userComplete)&&r.userComplete(e),r.terminate(),delete ae[t]}function M(){throw new Error("Not implemented.")}function ge(t){if(typeof t!="object"||t===null)return t;var e=Array.isArray(t)?[]:{};for(var r in t)e[r]=ge(t[r]);return e}function J(t,e){return function(){t.apply(e,arguments)}}function m(t){return typeof t=="function"}return fe&&(p.onmessage=function(t){var e=t.data;if(l.WORKER_ID===void 0&&e&&(l.WORKER_ID=e.workerId),typeof e.input=="string")p.postMessage({workerId:l.WORKER_ID,results:l.parse(e.input,e.config),finished:!0});else if(p.File&&e.input instanceof File||e.input instanceof Object){var r=l.parse(e.input,e.config);r&&p.postMessage({workerId:l.WORKER_ID,results:r,finished:!0})}}),(Y.prototype=Object.create(B.prototype)).constructor=Y,(oe.prototype=Object.create(B.prototype)).constructor=oe,(Z.prototype=Object.create(Z.prototype)).constructor=Z,(ue.prototype=Object.create(B.prototype)).constructor=ue,l})})(Re);var Je=Re.exports;const Qe=Ie(Je),et=()=>{const me=Te(),[ce,de]=le.useState(!1),[p,$]=le.useState([]),[fe,ae]=le.useState(!1),xe=C=>{var M;const k=(M=C.target.files)==null?void 0:M[0];k&&Qe.parse(k,{header:!0,dynamicTyping:!0,skipEmptyLines:!0,complete:ge=>{const J=ge.data;$(J)},error:()=>{ve.error("Erro ao processar o arquivo CSV")}})},l=async()=>{de(!0);try{for(const C of p){const k=new Ke(C);await De(Le(Fe,"products"),{name:k.name,image:k.imageUrl,type:k.type,platform:k.platform,amount:k.amount,status:k.status,classification:k.classification,description:k.description})}ve.success("Itens cadastrados com sucesso!"),me("/collection")}catch{ve.error("Erro ao cadastrar itens no Firestore")}finally{de(!1)}},[ne,B]=le.useState(!1),[Y,oe]=le.useState(0),[Z,ue]=le.useState([]),_e=async C=>{B(!0);const k=p[C];try{const M=await ze(`${k.name} ${k.platform}`);ue(M),oe(C)}catch(M){console.error("Erro ao buscar imagens:",M)}},X=()=>B(!1),pe=async C=>{try{const k=await Me({imageUrl:C})??"";$(M=>[...M.slice(0,Y),{...M[Y],imageUrl:k},...M.slice(Y+1)]),X()}catch{ve.error("Erro ao adicionar imagem ao conteúdo")}};return c.jsxs(je,{sx:{flexGrow:1,p:3},children:[c.jsx(Ee,{variant:"h4",gutterBottom:!0,children:"Cadastro em Massa de Produtos"}),c.jsxs("section",{className:"flex gap-2",children:[c.jsxs(ke,{variant:"contained",component:"label",children:["Selecionar Arquivo CSV",c.jsx("input",{type:"file",accept:".csv",hidden:!0,onChange:xe})]}),c.jsx(ke,{variant:"contained",component:"label",onClick:()=>ae(!0),children:"Mostrar Exemplo"})]}),fe&&c.jsx("section",{children:c.jsx("pre",{className:"border-solid border p-4",children:`imageUrl,name,status,type,platform,amount,classification
,Super Mario World,,Física,Super Nintendo,"R$ 149,89"`})}),c.jsx("section",{className:"mb-4",children:c.jsxs(Pe,{children:[c.jsx(Ne,{children:c.jsxs(we,{children:[c.jsx(z,{children:"Imagem"}),c.jsx(z,{children:"Nome"}),c.jsx(z,{children:"Tipo"}),c.jsx(z,{children:"Plataforma"}),c.jsx(z,{children:"Valor"}),c.jsx(z,{children:"Status"}),c.jsx(z,{children:"Classificação"}),c.jsx(z,{children:"Descrição"})]})}),c.jsx(qe,{children:p.map((C,k)=>c.jsxs(we,{hover:!0,children:[c.jsx(z,{children:c.jsxs("div",{className:"flex gap-2 items-center",children:[C.imageUrl&&c.jsx("img",{src:C.imageUrl,alt:C.name,style:{width:50,height:50}}),c.jsx(ke,{variant:"contained",onClick:()=>_e(k),size:"small",children:"Selecionar"})]})}),c.jsx(z,{children:C.name}),c.jsx(z,{children:C.type}),c.jsx(z,{children:C.platform}),c.jsx(z,{children:C.amount}),c.jsx(z,{children:C.status}),c.jsx(z,{children:C.classification}),c.jsx(z,{children:C.description})]},k))})]})}),c.jsx(ke,{variant:"contained",color:"primary",onClick:l,disabled:ce||p.length===0,children:ce?c.jsx(Ae,{size:24}):"Cadastrar Itens"}),p.length>0&&c.jsxs(Ee,{variant:"body1",gutterBottom:!0,children:[p.length," itens prontos para cadastro."]}),c.jsx(Ue,{open:ne,onClose:X,images:Z,onSelectImage:pe,loading:Z.length===0})]})};export{et as default};
