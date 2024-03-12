function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/slidev/DrawingControls-C2dAJAMe.js","assets/modules/unplugin-icons-B1zEtaLA.js","assets/modules/vue-DA7ZT_zT.js","assets/modules/shiki-CUMx7AeU.js","assets/modules/shiki-BSchMNmt.css","assets/slidev/DrawingPreview-BfahVk_y.js","assets/index-HiRLsQtH.js","assets/index-BPrmrxom.css","assets/slidev/bottom-wQqklZhM.js","assets/bottom-DbIWt59F.css","assets/DrawingControls-C5T1oZL5.css","assets/slidev/DrawingLayer-fuGSNOSS.js","assets/slidev/context-B11c8Qc1.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{t as D,a9 as Tt,aa as Pt,y as A,ab as L,ac as W,U as Ot,D as me,ad as Dt,d as Y,ae as Ft,C as st,_ as Vt,Y as jt,b as y,e as N,f as ae,h as le,i as F,o as f,a7 as Ve,x as X,F as z,Z as ke,A as d,l as w,$ as Ee,a6 as Bt,af as Ut,c as C,g as x,a8 as Wt,k as R,ag as nt,M as Ie,r as Gt,ah as Kt,ai as zt,a1 as ot,aj as rt,j as de,ak as Ht,N as Yt,m as Qt,al as Xt}from"../modules/vue-DA7ZT_zT.js";import{e as se,l as Jt,t as Re,f as we,a as be,s as Zt,c as ve,g as qt,b as H,m as Ke,_ as it,n as es,o as ze,d as ts,C as ss,p as He,k as xe,q as Ye}from"../index-HiRLsQtH.js";import{u as je,D as ns}from"./DrawingPreview-BfahVk_y.js";import{b as U,t as Ae,m as q,n as at,o as lt,q as os,r as rs,u as is,v as ct,k as Se,x as Le,s as he,p as as,y as ls,f as Qe,z as ie,w as Me,S as ut,g as dt,G as cs,a as us}from"./bottom-wQqklZhM.js";import{e as ds,f as hs,g as fs,h as ps,i as vs,j as _s,k as gs,l as ht,m as ms,n as ys,o as ks,p as ws,q as bs,r as xs,s as Ss,t as Ms,u as $s,v as Cs}from"../modules/unplugin-icons-B1zEtaLA.js";import{t as Es}from"../modules/shiki-CUMx7AeU.js";function Io(t){const{next:e,nextSlide:s,prev:n,prevSlide:o}=se(),{isDrawing:r}=je(),i=D(0),{direction:a,distanceX:l,distanceY:c}=Tt(t,{pointerTypes:["touch"],onSwipeStart(){r.value||(i.value=Pt())},onSwipeEnd(){if(!i.value||r.value)return;const u=Math.abs(l.value),h=Math.abs(c.value);u/window.innerWidth>.3||u>75?a.value==="left"?e():n():(h/window.innerHeight>.4||h>200)&&(a.value==="down"?o():s())}})}const _e=D(1),ge=A(()=>Jt.value.length),O=D(0),Be=D(0);function Is(){O.value>_e.value&&(O.value-=1)}function Rs(){O.value<ge.value&&(O.value+=1)}function As(){if(O.value>_e.value){let t=O.value-Be.value;t<_e.value&&(t=_e.value),O.value=t}}function Ls(){if(O.value<ge.value){let t=O.value+Be.value;t>ge.value&&(t=ge.value),O.value=t}}const Ns=[];function Ts(){const{go:t,goFirst:e,goLast:s,next:n,nextSlide:o,prev:r,prevSlide:i}=se(),{drawingEnabled:a}=je(),{escape:l,space:c,shift:u,left:h,right:p,up:v,down:b,enter:m,d:M,g:S,o:I,"`":k}=at,T={next:n,prev:r,nextSlide:o,prevSlide:i,go:t,goFirst:e,goLast:s,downloadPDF:lt,toggleDark:Re,toggleOverview:Ae,toggleDrawing:()=>a.value=!a.value,escapeOverview:()=>U.value=!1,showGotoDialog:()=>q.value=!q.value};let _=[{name:"next_space",key:L(c,W(u)),fn:n,autoRepeat:!0},{name:"prev_space",key:L(c,u),fn:r,autoRepeat:!0},{name:"next_right",key:L(p,W(u),W(U)),fn:n,autoRepeat:!0},{name:"prev_left",key:L(h,W(u),W(U)),fn:r,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:n,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:r,autoRepeat:!0},{name:"next_down",key:L(b,W(U)),fn:o,autoRepeat:!0},{name:"prev_up",key:L(v,W(U)),fn:()=>i(!1),autoRepeat:!0},{name:"next_shift",key:L(p,u),fn:o,autoRepeat:!0},{name:"prev_shift",key:L(h,u),fn:()=>i(!1),autoRepeat:!0},{name:"toggle_dark",key:L(M,W(a)),fn:Re},{name:"toggle_overview",key:L(Ot(I,k),W(a)),fn:Ae},{name:"hide_overview",key:L(l,W(a)),fn:()=>U.value=!1},{name:"goto",key:L(S,W(a)),fn:()=>q.value=!q.value},{name:"next_overview",key:L(p,U),fn:Rs},{name:"prev_overview",key:L(h,U),fn:Is},{name:"up_overview",key:L(v,U),fn:As},{name:"down_overview",key:L(b,U),fn:Ls},{name:"goto_from_overview",key:L(m,U),fn:()=>{t(O.value),U.value=!1}}];const P=new Set(_.map($=>$.name));for(const $ of Ns){const j=$(T,_);_=_.concat(j)}if(_.filter($=>$.name&&P.has($.name)).length===0){const $=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert($),console.warn($)}return _}const ft=L(W(is),W(rs),os);function Ps(t,e,s=!1){typeof t=="string"&&(t=at[t]);const n=L(t,ft);let o=0,r;const i=()=>{if(clearTimeout(r),!n.value){o=0;return}s&&(r=setTimeout(i,Math.max(1e3-o*250,150)),o++),e()};return me(n,i,{flush:"sync"})}function Os(t,e){return Dt(t,s=>{ft.value&&(s.repeat||e())})}function Ro(){const t=Ts();new Map(t.map(s=>[s.key,s])).forEach(s=>{s.fn&&Ps(s.key,s.fn,s.autoRepeat)}),Os("f",()=>ct.toggle())}const Ds=Y({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]},isMain:{type:Boolean,default:!1}},setup(t){const e=t,{clicksDirection:s,isPrintMode:n}=se(),o=D(),r=Ft(o),i=A(()=>e.width?e.width:r.width.value),a=A(()=>e.width?e.width/we.value:r.height.value);e.width&&st(()=>{o.value&&(o.value.style.width=`${i.value}px`,o.value.style.height=`${a.value}px`)});const l=A(()=>i.value/a.value),c=A(()=>e.scale&&!n.value?e.scale:l.value<we.value?i.value/be.value:a.value*we.value/be.value),u=A(()=>({height:`${Zt.value}px`,width:`${be.value}px`,transform:`translate(-50%, -50%) scale(${c.value})`,"--slidev-slide-scale":c.value})),h=A(()=>({"select-none":!ve.selectable,"slidev-nav-go-forward":s.value>0,"slidev-nav-go-backward":s.value<0}));return e.isMain&&Vt(A(()=>`
    :root {
      --slidev-slide-scale: ${c.value};
    }
  `)),jt(qt,c),(p,v)=>(f(),y("div",{id:"slide-container",ref_key:"root",ref:o,class:F(["slidev-slides-container",h.value])},[N("div",{id:"slide-content",class:"slidev-slide-content",style:le(u.value)},[ae(p.$slots,"default")],4),ae(p.$slots,"controls")],2))}}),Fs=H(Ds,[["__file","/Users/kode/p/labs/coaching/web-dev-101/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Vs={class:"select-list"},js={class:"title"},Bs={class:"items"},Us=["onClick"],Ws=Y({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(t,{emit:e}){const o=Ve(t,"modelValue",e,{passive:!0});return(r,i)=>{const a=ds;return f(),y("div",Vs,[N("div",js,X(t.title),1),N("div",Bs,[(f(!0),y(z,null,ke(t.items,l=>(f(),y("div",{key:l.value,class:F(["item",{active:d(o)===l.value}]),onClick:()=>{var c;o.value=l.value,(c=l.onClick)==null||c.call(l)}},[w(a,{class:F(["text-green-500",{"opacity-0":d(o)!==l.value}])},null,8,["class"]),Ee(" "+X(l.display||l.value),1)],10,Us))),128))])])}}}),Gs=H(Ws,[["__scopeId","data-v-3f89fa11"],["__file","/Users/kode/p/labs/coaching/web-dev-101/node_modules/@slidev/client/internals/SelectList.vue"]]),Ks={class:"text-sm"},zs=Y({__name:"Settings",setup(t){const e=[{display:"Fit",value:0},{display:"1:1",value:1}];return(s,n)=>(f(),y("div",Ks,[w(Gs,{modelValue:d(Se),"onUpdate:modelValue":n[0]||(n[0]=o=>Bt(Se)?Se.value=o:null),title:"Scale",items:e},null,8,["modelValue"])]))}}),Hs=H(zs,[["__file","/Users/kode/p/labs/coaching/web-dev-101/node_modules/@slidev/client/internals/Settings.vue"]]),Ys={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ main"},Qs=Y({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(t,{emit:e}){const o=Ve(t,"modelValue",e,{passive:!0}),r=D();return Ut(r,()=>{o.value=!1}),(i,a)=>(f(),y("div",{ref_key:"el",ref:r,class:"flex relative"},[N("button",{class:F({disabled:t.disabled}),onClick:a[0]||(a[0]=l=>o.value=!d(o))},[ae(i.$slots,"button",{class:F({disabled:t.disabled})})],2),(f(),C(Wt,null,[d(o)?(f(),y("div",Ys,[ae(i.$slots,"menu")])):x("v-if",!0)],1024))],512))}}),Xs=H(Qs,[["__file","/Users/kode/p/labs/coaching/web-dev-101/node_modules/@slidev/client/internals/MenuButton.vue"]]),Js={},Zs={class:"w-1px opacity-10 bg-current m-1 lg:m-2"};function qs(t,e){return f(),y("div",Zs)}const fe=H(Js,[["render",qs],["__file","/Users/kode/p/labs/coaching/web-dev-101/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),en={class:"sr-only"},tn=Y({__name:"IconButton",props:{title:{type:String,required:!0},icon:{type:String,required:!1},as:{type:String,required:!1}},setup(t){return(e,s)=>(f(),C(nt(e.as||"button"),{class:"slidev-icon-btn",title:e.title},{default:R(()=>[N("span",en,X(e.title),1),ae(e.$slots,"default",{},()=>[N("div",{class:F(e.icon)},null,2)])]),_:3},8,["title"]))}}),K=H(tn,[["__file","/Users/kode/p/labs/coaching/web-dev-101/node_modules/@slidev/client/internals/IconButton.vue"]]),sn={render(){return[]}},nn={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},on={class:"my-auto"},rn={class:"opacity-50"},an=Y({__name:"NavControls",props:{persist:{default:!1}},setup(t){const e=t,{currentRoute:s,currentSlideNo:n,hasNext:o,hasPrev:r,isEmbedded:i,isPresenter:a,isPresenterAvailable:l,next:c,prev:u,total:h}=se(),{brush:p,drawingEnabled:v}=je(),b=Le.smaller("md"),{isFullscreen:m,toggle:M}=ct,S=A(()=>s.value.query.password),I=A(()=>S.value?`?password=${S.value}`:""),k=A(()=>`${Ke(n.value,!0)}${I.value}`),T=A(()=>`${Ke(n.value,!1)}${I.value}`),_=D();function P(){_.value&&ie.value&&_.value.contains(ie.value)&&ie.value.blur()}const E=A(()=>e.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-main"),$=Ie(),j=Ie();return it(()=>import("./DrawingControls-C2dAJAMe.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])).then(re=>j.value=re.default),(re,V)=>{const Z=hs,We=fs,B=ps,ne=vs,ce=ws,xt=_s,St=gs,Mt=ht,$t=ms,Ct=ys,Et=bs,Ge=Gt("RouterLink"),It=xs,Rt=Ss,At=Ms,Lt=$s,Nt=ks;return f(),y("nav",{ref_key:"root",ref:_,class:"flex flex-col"},[N("div",{class:F(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",E.value]),onMouseleave:P},[d(i)?x("v-if",!0):(f(),C(K,{key:0,title:d(m)?"Close fullscreen":"Enter fullscreen",onClick:d(M)},{default:R(()=>[d(m)?(f(),C(Z,{key:0})):(f(),C(We,{key:1}))]),_:1},8,["title","onClick"])),w(K,{class:F({disabled:!d(r)}),title:"Go to previous slide",onClick:d(u)},{default:R(()=>[w(B)]),_:1},8,["class","onClick"]),w(K,{class:F({disabled:!d(o)}),title:"Go to next slide",onClick:d(c)},{default:R(()=>[w(ne)]),_:1},8,["class","onClick"]),d(i)?x("v-if",!0):(f(),C(K,{key:1,title:"Show slide overview",onClick:V[0]||(V[0]=ue=>d(Ae)())},{default:R(()=>[w(ce)]),_:1})),d(es)?x("v-if",!0):(f(),C(K,{key:2,title:d(ze)?"Switch to light mode theme":"Switch to dark mode theme",onClick:V[1]||(V[1]=ue=>d(Re)())},{default:R(()=>[d(ze)?(f(),C(xt,{key:0})):(f(),C(St,{key:1}))]),_:1},8,["title"])),w(fe),d(i)?x("v-if",!0):(f(),y(z,{key:3},[!d(a)&&!d(b)&&$.value?(f(),y(z,{key:0},[w(d($)),w(fe)],64)):x("v-if",!0),d(a)?(f(),C(K,{key:1,title:d(he)?"Hide presenter cursor":"Show presenter cursor",onClick:V[2]||(V[2]=ue=>he.value=!d(he))},{default:R(()=>[d(he)?(f(),C(Mt,{key:0})):(f(),C($t,{key:1}))]),_:1},8,["title"])):x("v-if",!0)],64)),(!d(ve).drawings.presenterOnly||d(a))&&!d(i)?(f(),y(z,{key:4},[w(K,{class:"relative",title:d(v)?"Hide drawing toolbar":"Show drawing toolbar",onClick:V[3]||(V[3]=ue=>v.value=!d(v))},{default:R(()=>[w(Ct),d(v)?(f(),y("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:le({background:d(p).color})},null,4)):x("v-if",!0)]),_:1},8,["title"]),w(fe)],64)):x("v-if",!0),d(i)?x("v-if",!0):(f(),y(z,{key:5},[d(a)?(f(),C(Ge,{key:0,to:T.value,class:"slidev-icon-btn",title:"Play Mode"},{default:R(()=>[w(Et)]),_:1},8,["to"])):x("v-if",!0),d(l)?(f(),C(Ge,{key:1,to:k.value,class:"slidev-icon-btn",title:"Presenter Mode"},{default:R(()=>[w(It)]),_:1},8,["to"])):x("v-if",!0),x("v-if",!0),d(a)?(f(),C(K,{key:3,title:"Toggle Presenter Layout",class:"aspect-ratio-initial",onClick:d(ls)},{default:R(()=>[w(Rt),Ee(" "+X(d(as)),1)]),_:1},8,["onClick"])):x("v-if",!0)],64)),(f(),y(z,{key:6},[d(ve).download?(f(),C(K,{key:0,title:"Download as PDF",onClick:d(lt)},{default:R(()=>[w(At)]),_:1},8,["onClick"])):x("v-if",!0)],64)),!d(a)&&d(ve).info&&!d(i)?(f(),C(K,{key:7,title:"Show info",onClick:V[5]||(V[5]=ue=>Qe.value=!d(Qe))},{default:R(()=>[w(Lt)]),_:1})):x("v-if",!0),!d(a)&&!d(i)?(f(),C(Xs,{key:8},{button:R(()=>[w(K,{title:"Adjust settings"},{default:R(()=>[w(Nt)]),_:1})]),menu:R(()=>[w(Hs)]),_:1})):x("v-if",!0),d(i)?x("v-if",!0):(f(),C(fe,{key:9})),N("div",nn,[N("div",on,[Ee(X(d(n))+" ",1),N("span",rn,"/ "+X(d(h)),1)])]),w(d(sn))],34)],512)}}}),Ao=H(an,[["__file","/Users/kode/p/labs/coaching/web-dev-101/node_modules/@slidev/client/internals/NavControls.vue"]]),ln=["onClick"],cn={class:"text-green font-bold"},un={class:"opacity-50"},dn={key:1,class:"opacity-50"},hn={key:0,class:"fixed top-4 right-4 text-gray-400 flex flex-col items-center gap-2"},$e=4*16*2,Xe=2*16,fn=Y({__name:"QuickOverview",props:{modelValue:{type:Boolean,required:!0}},emits:["update:modelValue"],setup(t,{emit:e}){const o=Ve(t,"modelValue",e),{currentSlideNo:r,go:i,slides:a}=se();function l(){o.value=!1}function c(M){i(M),l()}function u(M){return M===O.value}const h=Le.smaller("xs"),p=Le.smaller("sm"),v=A(()=>h.value?Me.width.value-$e:p.value?(Me.width.value-$e-Xe)/2:300),b=A(()=>Math.floor((Me.width.value-$e)/(v.value+Xe))),m=D("");return Kt("keypress",M=>{if(!U.value){m.value="";return}if(M.key==="Enter"){M.preventDefault(),m.value?(c(+m.value),m.value=""):c(O.value);return}const S=Number.parseInt(M.key.replace(/[^0-9]/g,""));if(Number.isNaN(S)){m.value="";return}if(!m.value&&S===0)return;if(m.value+=String(S),+m.value>=a.value.length){m.value="";return}const I=a.value.findIndex(k=>`/${k.no}`===m.value);I!==-1&&(O.value=I+1),+m.value*10>a.value.length&&(c(+m.value),m.value="")}),st(()=>{O.value=r.value,Be.value=b.value}),(M,S)=>{const I=Cs;return f(),y(z,null,[w(zt,{"enter-active-class":"duration-150 ease-out","enter-from-class":"opacity-0 scale-102 !backdrop-blur-0px","leave-active-class":"duration-200 ease-in","leave-to-class":"opacity-0 scale-102 !backdrop-blur-0px",persisted:""},{default:R(()=>[ot(N("div",{class:"bg-main !bg-opacity-75 p-16 py-20 overflow-y-auto backdrop-blur-5px fixed left-0 right-0 top-0 h-[calc(var(--vh,1vh)*100)]",onClick:S[0]||(S[0]=k=>l())},[N("div",{class:"grid gap-y-4 gap-x-8 w-full",style:le(`grid-template-columns: repeat(auto-fit,minmax(${v.value}px,1fr))`)},[(f(!0),y(z,null,ke(d(a),(k,T)=>(f(),y("div",{key:k.no,class:"relative"},[N("div",{class:F(["inline-block border rounded overflow-hidden bg-main hover:border-primary transition",u(T+1)||d(O)===T+1?"border-primary":"border-main"]),onClick:_=>c(k.no)},[(f(),C(Fs,{key:k.no,width:v.value,"clicks-disabled":!0,class:"pointer-events-none"},{default:R(()=>[k!=null&&k.component?(f(),C(ut,{key:0,is:k.component,"clicks-context":d(ts)(k,d(ss)),class:F(d(dt)(k)),route:k,"render-context":"overview"},null,8,["is","clicks-context","class","route"])):x("v-if",!0),w(ns,{page:k.no},null,8,["page"])]),_:2},1032,["width"]))],10,ln),N("div",{class:"absolute top-0",style:le(`left: ${v.value+5}px`)},[m.value&&String(T+1).startsWith(m.value)?(f(),y(z,{key:0},[N("span",cn,X(m.value),1),N("span",un,X(String(T+1).slice(m.value.length)),1)],64)):(f(),y("span",dn,X(T+1),1))],4)]))),128))],4)],512),[[rt,d(o)]])]),_:1}),d(o)?(f(),y("div",hn,[w(K,{title:"Close",class:"text-2xl",onClick:l},{default:R(()=>[w(I)]),_:1}),x("v-if",!0)])):x("v-if",!0)],64)}}}),Lo=H(fn,[["__file","/Users/kode/p/labs/coaching/web-dev-101/node_modules/@slidev/client/internals/QuickOverview.vue"]]);function J(t){return Array.isArray?Array.isArray(t):_t(t)==="[object Array]"}const pn=1/0;function vn(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-pn?"-0":e}function _n(t){return t==null?"":vn(t)}function Q(t){return typeof t=="string"}function pt(t){return typeof t=="number"}function gn(t){return t===!0||t===!1||mn(t)&&_t(t)=="[object Boolean]"}function vt(t){return typeof t=="object"}function mn(t){return vt(t)&&t!==null}function G(t){return t!=null}function Ce(t){return!t.trim().length}function _t(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const yn="Incorrect 'index' type",kn=t=>`Invalid value for key ${t}`,wn=t=>`Pattern length exceeds max of ${t}.`,bn=t=>`Missing ${t} property in key`,xn=t=>`Property 'weight' in key '${t}' must be a positive integer`,Je=Object.prototype.hasOwnProperty;class Sn{constructor(e){this._keys=[],this._keyMap={};let s=0;e.forEach(n=>{let o=gt(n);this._keys.push(o),this._keyMap[o.id]=o,s+=o.weight}),this._keys.forEach(n=>{n.weight/=s})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function gt(t){let e=null,s=null,n=null,o=1,r=null;if(Q(t)||J(t))n=t,e=Ze(t),s=Ne(t);else{if(!Je.call(t,"name"))throw new Error(bn("name"));const i=t.name;if(n=i,Je.call(t,"weight")&&(o=t.weight,o<=0))throw new Error(xn(i));e=Ze(i),s=Ne(i),r=t.getFn}return{path:e,id:s,weight:o,src:n,getFn:r}}function Ze(t){return J(t)?t:t.split(".")}function Ne(t){return J(t)?t.join("."):t}function Mn(t,e){let s=[],n=!1;const o=(r,i,a)=>{if(G(r))if(!i[a])s.push(r);else{let l=i[a];const c=r[l];if(!G(c))return;if(a===i.length-1&&(Q(c)||pt(c)||gn(c)))s.push(_n(c));else if(J(c)){n=!0;for(let u=0,h=c.length;u<h;u+=1)o(c[u],i,a+1)}else i.length&&o(c,i,a+1)}};return o(t,Q(e)?e.split("."):e,0),n?s:s[0]}const $n={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Cn={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},En={location:0,threshold:.6,distance:100},In={useExtendedSearch:!1,getFn:Mn,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var g={...Cn,...$n,...En,...In};const Rn=/[^ ]+/g;function An(t=1,e=3){const s=new Map,n=Math.pow(10,e);return{get(o){const r=o.match(Rn).length;if(s.has(r))return s.get(r);const i=1/Math.pow(r,.5*t),a=parseFloat(Math.round(i*n)/n);return s.set(r,a),a},clear(){s.clear()}}}class Ue{constructor({getFn:e=g.getFn,fieldNormWeight:s=g.fieldNormWeight}={}){this.norm=An(s,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((s,n)=>{this._keysMap[s.id]=n})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,Q(this.docs[0])?this.docs.forEach((e,s)=>{this._addString(e,s)}):this.docs.forEach((e,s)=>{this._addObject(e,s)}),this.norm.clear())}add(e){const s=this.size();Q(e)?this._addString(e,s):this._addObject(e,s)}removeAt(e){this.records.splice(e,1);for(let s=e,n=this.size();s<n;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(e,s){return e[this._keysMap[s]]}size(){return this.records.length}_addString(e,s){if(!G(e)||Ce(e))return;let n={v:e,i:s,n:this.norm.get(e)};this.records.push(n)}_addObject(e,s){let n={i:s,$:{}};this.keys.forEach((o,r)=>{let i=o.getFn?o.getFn(e):this.getFn(e,o.path);if(G(i)){if(J(i)){let a=[];const l=[{nestedArrIndex:-1,value:i}];for(;l.length;){const{nestedArrIndex:c,value:u}=l.pop();if(G(u))if(Q(u)&&!Ce(u)){let h={v:u,i:c,n:this.norm.get(u)};a.push(h)}else J(u)&&u.forEach((h,p)=>{l.push({nestedArrIndex:p,value:h})})}n.$[r]=a}else if(Q(i)&&!Ce(i)){let a={v:i,n:this.norm.get(i)};n.$[r]=a}}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function mt(t,e,{getFn:s=g.getFn,fieldNormWeight:n=g.fieldNormWeight}={}){const o=new Ue({getFn:s,fieldNormWeight:n});return o.setKeys(t.map(gt)),o.setSources(e),o.create(),o}function Ln(t,{getFn:e=g.getFn,fieldNormWeight:s=g.fieldNormWeight}={}){const{keys:n,records:o}=t,r=new Ue({getFn:e,fieldNormWeight:s});return r.setKeys(n),r.setIndexRecords(o),r}function pe(t,{errors:e=0,currentLocation:s=0,expectedLocation:n=0,distance:o=g.distance,ignoreLocation:r=g.ignoreLocation}={}){const i=e/t.length;if(r)return i;const a=Math.abs(n-s);return o?i+a/o:a?1:i}function Nn(t=[],e=g.minMatchCharLength){let s=[],n=-1,o=-1,r=0;for(let i=t.length;r<i;r+=1){let a=t[r];a&&n===-1?n=r:!a&&n!==-1&&(o=r-1,o-n+1>=e&&s.push([n,o]),n=-1)}return t[r-1]&&r-n>=e&&s.push([n,r-1]),s}const te=32;function Tn(t,e,s,{location:n=g.location,distance:o=g.distance,threshold:r=g.threshold,findAllMatches:i=g.findAllMatches,minMatchCharLength:a=g.minMatchCharLength,includeMatches:l=g.includeMatches,ignoreLocation:c=g.ignoreLocation}={}){if(e.length>te)throw new Error(wn(te));const u=e.length,h=t.length,p=Math.max(0,Math.min(n,h));let v=r,b=p;const m=a>1||l,M=m?Array(h):[];let S;for(;(S=t.indexOf(e,b))>-1;){let E=pe(e,{currentLocation:S,expectedLocation:p,distance:o,ignoreLocation:c});if(v=Math.min(E,v),b=S+u,m){let $=0;for(;$<u;)M[S+$]=1,$+=1}}b=-1;let I=[],k=1,T=u+h;const _=1<<u-1;for(let E=0;E<u;E+=1){let $=0,j=T;for(;$<j;)pe(e,{errors:E,currentLocation:p+j,expectedLocation:p,distance:o,ignoreLocation:c})<=v?$=j:T=j,j=Math.floor((T-$)/2+$);T=j;let re=Math.max(1,p-j+1),V=i?h:Math.min(p+j,h)+u,Z=Array(V+2);Z[V+1]=(1<<E)-1;for(let B=V;B>=re;B-=1){let ne=B-1,ce=s[t.charAt(ne)];if(m&&(M[ne]=+!!ce),Z[B]=(Z[B+1]<<1|1)&ce,E&&(Z[B]|=(I[B+1]|I[B])<<1|1|I[B+1]),Z[B]&_&&(k=pe(e,{errors:E,currentLocation:ne,expectedLocation:p,distance:o,ignoreLocation:c}),k<=v)){if(v=k,b=ne,b<=p)break;re=Math.max(1,2*p-b)}}if(pe(e,{errors:E+1,currentLocation:p,expectedLocation:p,distance:o,ignoreLocation:c})>v)break;I=Z}const P={isMatch:b>=0,score:Math.max(.001,k)};if(m){const E=Nn(M,a);E.length?l&&(P.indices=E):P.isMatch=!1}return P}function Pn(t){let e={};for(let s=0,n=t.length;s<n;s+=1){const o=t.charAt(s);e[o]=(e[o]||0)|1<<n-s-1}return e}class yt{constructor(e,{location:s=g.location,threshold:n=g.threshold,distance:o=g.distance,includeMatches:r=g.includeMatches,findAllMatches:i=g.findAllMatches,minMatchCharLength:a=g.minMatchCharLength,isCaseSensitive:l=g.isCaseSensitive,ignoreLocation:c=g.ignoreLocation}={}){if(this.options={location:s,threshold:n,distance:o,includeMatches:r,findAllMatches:i,minMatchCharLength:a,isCaseSensitive:l,ignoreLocation:c},this.pattern=l?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const u=(p,v)=>{this.chunks.push({pattern:p,alphabet:Pn(p),startIndex:v})},h=this.pattern.length;if(h>te){let p=0;const v=h%te,b=h-v;for(;p<b;)u(this.pattern.substr(p,te),p),p+=te;if(v){const m=h-te;u(this.pattern.substr(m),m)}}else u(this.pattern,0)}searchIn(e){const{isCaseSensitive:s,includeMatches:n}=this.options;if(s||(e=e.toLowerCase()),this.pattern===e){let b={isMatch:!0,score:0};return n&&(b.indices=[[0,e.length-1]]),b}const{location:o,distance:r,threshold:i,findAllMatches:a,minMatchCharLength:l,ignoreLocation:c}=this.options;let u=[],h=0,p=!1;this.chunks.forEach(({pattern:b,alphabet:m,startIndex:M})=>{const{isMatch:S,score:I,indices:k}=Tn(e,b,m,{location:o+M,distance:r,threshold:i,findAllMatches:a,minMatchCharLength:l,includeMatches:n,ignoreLocation:c});S&&(p=!0),h+=I,S&&k&&(u=[...u,...k])});let v={isMatch:p,score:p?h/this.chunks.length:1};return p&&n&&(v.indices=u),v}}class ee{constructor(e){this.pattern=e}static isMultiMatch(e){return qe(e,this.multiRegex)}static isSingleMatch(e){return qe(e,this.singleRegex)}search(){}}function qe(t,e){const s=t.match(e);return s?s[1]:null}class On extends ee{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const s=e===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class Dn extends ee{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const n=e.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Fn extends ee{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const s=e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class Vn extends ee{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const s=!e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class jn extends ee{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const s=e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class Bn extends ee{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const s=!e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class kt extends ee{constructor(e,{location:s=g.location,threshold:n=g.threshold,distance:o=g.distance,includeMatches:r=g.includeMatches,findAllMatches:i=g.findAllMatches,minMatchCharLength:a=g.minMatchCharLength,isCaseSensitive:l=g.isCaseSensitive,ignoreLocation:c=g.ignoreLocation}={}){super(e),this._bitapSearch=new yt(e,{location:s,threshold:n,distance:o,includeMatches:r,findAllMatches:i,minMatchCharLength:a,isCaseSensitive:l,ignoreLocation:c})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class wt extends ee{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let s=0,n;const o=[],r=this.pattern.length;for(;(n=e.indexOf(this.pattern,s))>-1;)s=n+r,o.push([n,s-1]);const i=!!o.length;return{isMatch:i,score:i?0:1,indices:o}}}const Te=[On,wt,Fn,Vn,Bn,jn,Dn,kt],et=Te.length,Un=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Wn="|";function Gn(t,e={}){return t.split(Wn).map(s=>{let n=s.trim().split(Un).filter(r=>r&&!!r.trim()),o=[];for(let r=0,i=n.length;r<i;r+=1){const a=n[r];let l=!1,c=-1;for(;!l&&++c<et;){const u=Te[c];let h=u.isMultiMatch(a);h&&(o.push(new u(h,e)),l=!0)}if(!l)for(c=-1;++c<et;){const u=Te[c];let h=u.isSingleMatch(a);if(h){o.push(new u(h,e));break}}}return o})}const Kn=new Set([kt.type,wt.type]);class zn{constructor(e,{isCaseSensitive:s=g.isCaseSensitive,includeMatches:n=g.includeMatches,minMatchCharLength:o=g.minMatchCharLength,ignoreLocation:r=g.ignoreLocation,findAllMatches:i=g.findAllMatches,location:a=g.location,threshold:l=g.threshold,distance:c=g.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:n,minMatchCharLength:o,findAllMatches:i,ignoreLocation:r,location:a,threshold:l,distance:c},this.pattern=s?e:e.toLowerCase(),this.query=Gn(this.pattern,this.options)}static condition(e,s){return s.useExtendedSearch}searchIn(e){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:o}=this.options;e=o?e:e.toLowerCase();let r=0,i=[],a=0;for(let l=0,c=s.length;l<c;l+=1){const u=s[l];i.length=0,r=0;for(let h=0,p=u.length;h<p;h+=1){const v=u[h],{isMatch:b,indices:m,score:M}=v.search(e);if(b){if(r+=1,a+=M,n){const S=v.constructor.type;Kn.has(S)?i=[...i,...m]:i.push(m)}}else{a=0,r=0,i.length=0;break}}if(r){let h={isMatch:!0,score:a/r};return n&&(h.indices=i),h}}return{isMatch:!1,score:1}}}const Pe=[];function Hn(...t){Pe.push(...t)}function Oe(t,e){for(let s=0,n=Pe.length;s<n;s+=1){let o=Pe[s];if(o.condition(t,e))return new o(t,e)}return new yt(t,e)}const ye={AND:"$and",OR:"$or"},De={PATH:"$path",PATTERN:"$val"},Fe=t=>!!(t[ye.AND]||t[ye.OR]),Yn=t=>!!t[De.PATH],Qn=t=>!J(t)&&vt(t)&&!Fe(t),tt=t=>({[ye.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function bt(t,e,{auto:s=!0}={}){const n=o=>{let r=Object.keys(o);const i=Yn(o);if(!i&&r.length>1&&!Fe(o))return n(tt(o));if(Qn(o)){const l=i?o[De.PATH]:r[0],c=i?o[De.PATTERN]:o[l];if(!Q(c))throw new Error(kn(l));const u={keyId:Ne(l),pattern:c};return s&&(u.searcher=Oe(c,e)),u}let a={children:[],operator:r[0]};return r.forEach(l=>{const c=o[l];J(c)&&c.forEach(u=>{a.children.push(n(u))})}),a};return Fe(t)||(t=tt(t)),n(t)}function Xn(t,{ignoreFieldNorm:e=g.ignoreFieldNorm}){t.forEach(s=>{let n=1;s.matches.forEach(({key:o,norm:r,score:i})=>{const a=o?o.weight:null;n*=Math.pow(i===0&&a?Number.EPSILON:i,(a||1)*(e?1:r))}),s.score=n})}function Jn(t,e){const s=t.matches;e.matches=[],G(s)&&s.forEach(n=>{if(!G(n.indices)||!n.indices.length)return;const{indices:o,value:r}=n;let i={indices:o,value:r};n.key&&(i.key=n.key.src),n.idx>-1&&(i.refIndex=n.idx),e.matches.push(i)})}function Zn(t,e){e.score=t.score}function qn(t,e,{includeMatches:s=g.includeMatches,includeScore:n=g.includeScore}={}){const o=[];return s&&o.push(Jn),n&&o.push(Zn),t.map(r=>{const{idx:i}=r,a={item:e[i],refIndex:i};return o.length&&o.forEach(l=>{l(r,a)}),a})}class oe{constructor(e,s={},n){this.options={...g,...s},this.options.useExtendedSearch,this._keyStore=new Sn(this.options.keys),this.setCollection(e,n)}setCollection(e,s){if(this._docs=e,s&&!(s instanceof Ue))throw new Error(yn);this._myIndex=s||mt(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){G(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const s=[];for(let n=0,o=this._docs.length;n<o;n+=1){const r=this._docs[n];e(r,n)&&(this.removeAt(n),n-=1,o-=1,s.push(r))}return s}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:s=-1}={}){const{includeMatches:n,includeScore:o,shouldSort:r,sortFn:i,ignoreFieldNorm:a}=this.options;let l=Q(e)?Q(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return Xn(l,{ignoreFieldNorm:a}),r&&l.sort(i),pt(s)&&s>-1&&(l=l.slice(0,s)),qn(l,this._docs,{includeMatches:n,includeScore:o})}_searchStringList(e){const s=Oe(e,this.options),{records:n}=this._myIndex,o=[];return n.forEach(({v:r,i,n:a})=>{if(!G(r))return;const{isMatch:l,score:c,indices:u}=s.searchIn(r);l&&o.push({item:r,idx:i,matches:[{score:c,value:r,norm:a,indices:u}]})}),o}_searchLogical(e){const s=bt(e,this.options),n=(a,l,c)=>{if(!a.children){const{keyId:h,searcher:p}=a,v=this._findMatches({key:this._keyStore.get(h),value:this._myIndex.getValueForItemAtKeyId(l,h),searcher:p});return v&&v.length?[{idx:c,item:l,matches:v}]:[]}const u=[];for(let h=0,p=a.children.length;h<p;h+=1){const v=a.children[h],b=n(v,l,c);if(b.length)u.push(...b);else if(a.operator===ye.AND)return[]}return u},o=this._myIndex.records,r={},i=[];return o.forEach(({$:a,i:l})=>{if(G(a)){let c=n(s,a,l);c.length&&(r[l]||(r[l]={idx:l,item:a,matches:[]},i.push(r[l])),c.forEach(({matches:u})=>{r[l].matches.push(...u)}))}}),i}_searchObjectList(e){const s=Oe(e,this.options),{keys:n,records:o}=this._myIndex,r=[];return o.forEach(({$:i,i:a})=>{if(!G(i))return;let l=[];n.forEach((c,u)=>{l.push(...this._findMatches({key:c,value:i[u],searcher:s}))}),l.length&&r.push({idx:a,item:i,matches:l})}),r}_findMatches({key:e,value:s,searcher:n}){if(!G(s))return[];let o=[];if(J(s))s.forEach(({v:r,i,n:a})=>{if(!G(r))return;const{isMatch:l,score:c,indices:u}=n.searchIn(r);l&&o.push({score:c,key:e,value:r,idx:i,norm:a,indices:u})});else{const{v:r,n:i}=s,{isMatch:a,score:l,indices:c}=n.searchIn(r);a&&o.push({score:l,key:e,value:r,norm:i,indices:c})}return o}}oe.version="7.0.0";oe.createIndex=mt;oe.parseIndex=Ln;oe.config=g;oe.parseQuery=bt;Hn(zn);const eo={key:0},to={key:1},so={key:2},no={key:3},oo={key:4},ro={key:5},io={key:6},ao={key:7},lo={key:8},co={key:9},uo=Y({__name:"title-renderer",props:{no:{type:[Number,String],required:!0}},setup(t){return(e,s)=>(f(),y("div",null,[+e.no==1?(f(),y("p",eo,"Web Dev 101")):+e.no==2?(f(),y("p",to,"About")):+e.no==3?(f(),y("p",so,"undefined")):+e.no==4?(f(),y("p",no,"Why Web Dev 101? 🤔")):+e.no==5?(f(),y("p",oo,"undefined")):+e.no==6?(f(),y("p",ro,"undefined")):+e.no==7?(f(),y("p",io,"Use Case: Card with Hover-State")):+e.no==8?(f(),y("p",ao,"CodePens: web-dev-101")):+e.no==9?(f(),y("p",lo,"Use Case: Dashboard With Cards")):+e.no==10?(f(),y("p",co,"Use Case: Responsive Layout")):x("v-if",!0)]))}}),ho=H(uo,[["__file","/@slidev/title-renderer.md"]]),fo={class:"bg-main transform",shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:main"},po=["value","disabled"],vo=["border","onClick"],_o={"w-4":"","text-right":"",op50:"","text-sm":""},go=Y({__name:"Goto",setup(t){const e=D(),s=D(),n=D(),o=D(),r=D(""),i=D(0),{go:a,slides:l}=se();function c(_){return _!=null}const u=A(()=>new oe(l.value.map(_=>{var P;return(P=_.meta)==null?void 0:P.slide}).filter(c),{keys:["no","title"],threshold:.3,shouldSort:!0,minMatchCharLength:1})),h=A(()=>r.value.startsWith("/")?r.value.substring(1):r.value),p=A(()=>u.value.search(h.value).map(_=>_.item)),v=A(()=>!!p.value.length);function b(){if(v.value){const _=p.value.at(i.value||0);_&&a(_.no)}m()}function m(){r.value="",q.value=!1}function M(_){_.preventDefault(),i.value++,i.value>=p.value.length&&(i.value=0),I()}function S(_){_.preventDefault(),i.value--,i.value<=-2&&(i.value=p.value.length-1),I()}function I(){var P;const _=(P=o.value)==null?void 0:P[i.value];_&&n.value&&(_.offsetTop+_.offsetHeight>n.value.offsetHeight+n.value.scrollTop?n.value.scrollTo({behavior:"smooth",top:_.offsetTop+_.offsetHeight-n.value.offsetHeight+1}):_.offsetTop<n.value.scrollTop&&n.value.scrollTo({behavior:"smooth",top:_.offsetTop}))}function k(_){i.value=0,r.value=_.target.value}function T(_){a(_),m()}return me(q,async _=>{var P;_?(r.value="",i.value=0,setTimeout(()=>{var E;return(E=s.value)==null?void 0:E.focus()},0)):(P=s.value)==null||P.blur()}),me(ie,()=>{var _;(_=e.value)!=null&&_.contains(ie.value)||m()}),(_,P)=>(f(),y("div",{id:"slidev-goto-dialog",ref_key:"container",ref:e,class:F(["fixed right-5 transition-all",d(q)?"top-5":"-top-20"]),"w-90":"","max-w-90":"","min-w-90":""},[N("div",fo,[N("input",{id:"slidev-goto-input",ref_key:"input",ref:s,value:r.value,type:"text",disabled:!d(q),class:F(["outline-none bg-transparent",{"text-red-400":!v.value&&r.value}]),placeholder:"Goto...",onKeydown:[de(b,["enter"]),de(m,["escape"]),de(M,["down"]),de(S,["up"])],onInput:k},null,42,po)]),p.value.length>0?(f(),y("ul",{key:0,ref_key:"list",ref:n,class:"autocomplete-list",shadow:"~",border:"~ transparent rounded dark:main"},[(f(!0),y(z,null,ke(p.value,(E,$)=>(f(),y("li",{ref_for:!0,ref_key:"items",ref:o,key:E.id,role:"button",tabindex:"0",p:"x-4 y-2","cursor-pointer":"",hover:"op100",flex:"~ gap-2","w-90":"","items-center":"",border:$===0?"":"t main",class:F(i.value===$?"bg-active op100":"op80"),onClick:Ht(j=>T(E.no),["stop","prevent"])},[N("div",_o,X(E.no),1),w(d(ho),{no:E.no},null,8,["no"])],10,vo))),128))],512)):x("v-if",!0)],2))}}),No=H(go,[["__scopeId","data-v-f5ee02a7"],["__file","/Users/kode/p/labs/coaching/web-dev-101/node_modules/@slidev/client/internals/Goto.vue"]]);function mo(){const t=Yt(),e=D(!1);let s,n;const o=typeof document<"u"&&"startViewTransition"in document;return t.beforeResolve((r,i)=>{var m,M,S,I;const a=(m=He(i.params.no))==null?void 0:m.meta,l=(M=He(r.params.no))==null?void 0:M.meta,c=(S=a==null?void 0:a.slide)==null?void 0:S.no,u=(I=l==null?void 0:l.slide)==null?void 0:I.no;if(!(c!==void 0&&u!==void 0&&((a==null?void 0:a.transition)==="view-transition"&&c<u||(l==null?void 0:l.transition)==="view-transition"&&u<c))){e.value=!1;return}if(!o){e.value=!1,console.warn("View transition is not supported in your browser, fallback to normal transition.");return}e.value=!0;const h=new Promise((k,T)=>{s=k,n=T});let p;const v=new Promise(k=>p=k);return document.startViewTransition(()=>(p(),h)).finished.then(()=>{n=void 0,s=void 0}),v}),o&&t.afterEach(()=>{s==null||s(),n==null||n()}),e}const yo={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},ko=Y({__name:"PresenterMouse",setup(t){return(e,s)=>{const n=ht;return d(xe).cursor?(f(),y("div",yo,[w(n,{class:"absolute",style:le({left:`${d(xe).cursor.x}%`,top:`${d(xe).cursor.y}%`})},null,8,["style"])])):x("v-if",!0)}}}),wo=H(ko,[["__file","/Users/kode/p/labs/coaching/web-dev-101/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),bo=Y({__name:"SlidesShow",props:{renderContext:{type:String,required:!0}},setup(t){const{currentSlideRoute:e,currentTransition:s,getPrimaryClicks:n,isPresenter:o,nextRoute:r,slides:i}=se();me(e,()=>{var h,p;(h=e.value)!=null&&h.meta&&e.value.meta.preload!==!1&&(e.value.meta.__preloaded=!0),(p=r.value)!=null&&p.meta&&r.value.meta.preload!==!1&&(r.value.meta.__preloaded=!0)},{immediate:!0});const a=mo(),l=Ie();it(()=>import("./DrawingLayer-fuGSNOSS.js"),__vite__mapDeps([11,2,12,6,3,4,7,5,8,9])).then(h=>l.value=h.default);const c=A(()=>i.value.filter(h=>{var p;return((p=h.meta)==null?void 0:p.__preloaded)||h===e.value}));function u(){Ye.value=!0,Es()}return(h,p)=>(f(),y(z,null,[x(" Global Bottom "),w(d(cs)),x(" Slides "),(f(),C(nt(d(a)?"div":Xt),Qt(d(Ye)?{}:d(s),{id:"slideshow",tag:"div",onAfterLeave:u}),{default:R(()=>[(f(!0),y(z,null,ke(c.value,v=>ot((f(),y("div",{key:v.no},[w(ut,{is:v.component,"clicks-context":d(n)(v),class:F([d(dt)(v),"overflow-hidden"]),route:v,"render-context":h.renderContext},null,8,["is","clicks-context","class","route","render-context"])])),[[rt,v===d(e)]])),128))]),_:1},16)),x(" Global Top "),w(d(us)),l.value?(f(),C(d(l),{key:0})):x("v-if",!0),d(o)?x("v-if",!0):(f(),C(wo,{key:1}))],64))}}),To=H(bo,[["__scopeId","data-v-afb4231e"],["__file","/Users/kode/p/labs/coaching/web-dev-101/node_modules/@slidev/client/internals/SlidesShow.vue"]]);export{No as G,K as I,Ao as N,Lo as Q,Fs as S,fe as V,To as a,Ro as r,Io as u};