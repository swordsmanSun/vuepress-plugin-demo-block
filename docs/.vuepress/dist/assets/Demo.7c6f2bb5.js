import{_ as k,f as D,j as p,I as l,o as v,c as w,d as t,h as o,q as H,a5 as A,b as _,w as C,H as h,F as I,e as x,a4 as B}from"./app.8363f869.js";import{_ as y,a as E,m as L}from"./ui-esm.57ef800b.js";import{_ as M,a as S}from"./icon-es.a72ca713.js";function V(a){let n;return function(){return n||(n=a())}}function $(a,n,u){let i=!0,s;return function(){u&&u(),i&&(a(),i=!1),s&&clearTimeout(s),s=setTimeout(()=>{i=!0},n)}}const F=["innerHTML"],N={class:"demo-example"},z={class:"demo-code"},R=x("\u590D\u5236"),U=x("\u663E\u793A\u4EE3\u7801"),j=["innerHTML"],q={class:"demo-code-container-footer"},G=t("footer",{class:"demo-footer"},null,-1),P=D({__name:"Demo",props:{component:null,code:null,info:null},setup(a){const n=a;B(e=>({b5b29910:r.value+"px"}));const u=p(()=>decodeURIComponent(n.info)),i=p(()=>decodeURIComponent(n.code)),s=l(),f=V(()=>{var e;return(e=s.value)==null?void 0:e.children[0]}),b=$(()=>{var c;const e=f();e==null||e.setAttribute("contenteditable","true"),e.focus(),document.execCommand("selectAll"),document.execCommand("copy"),e.removeAttribute("contenteditable"),(c=window.getSelection())==null||c.empty()},500,()=>{L({text:"\u590D\u5236\u6210\u529F !",type:"success",style:{container:{zIndex:"22"}}})}),r=l(0),d=l(),m=l(["closed"]),g=l(),T=function(){let e=!1,c;return function(){c&&clearTimeout(c),e?(c=setTimeout(()=>{m.value=["closed"]},190),r.value=0,d.value=[""]):(d.value=["myActive","hover"],m.value=[""],r.value=f().clientHeight),e=!e}}();return(e,c)=>(v(),w(I,null,[t("p",{class:"demo-info",innerHTML:o(u)},null,8,F),t("div",{class:h(["demo",m.value])},[t("div",N,[(v(),H(A(a.component)))]),t("div",z,[t("header",null,[_(o(y),{class:"button-copy",onClick:o(b),icon:o(M),animation:"first"},{default:C(()=>[R]),_:1},8,["onClick","icon"]),_(o(y),{class:h([d.value,"button-show"]),onClick:o(T),icon:{value:o(S),color:"primary"},plain:"",animation:"second"},{default:C(()=>[U]),_:1},8,["class","onClick","icon"])]),t("div",{class:"demo-code-container-code",ref_key:"demoCodeContainerCode",ref:g},[t("article",{innerHTML:o(i),ref_key:"article",ref:s,language:"vue"},null,8,j),t("div",q,[_(o(E),{bind:s.value},null,8,["bind"])])],512)]),G],2)],64))}});var Q=k(P,[["__file","Demo.vue"]]);export{Q as default};
