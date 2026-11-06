import{$ as St,$a as xt,$b as io,A as ti,Aa as es,Ac as nn,B as na,Ba as M,Bc as Nc,C as Xl,Ca as U,Cb as ae,Cc as Ec,D as Qr,Da as x,Db as gn,Dc as pi,E as Zl,Ea as Mt,Eb as eo,Ec as ft,F as Xr,Fa as ic,Fc as Dc,G as ni,Ga as Z,Gb as k,Gc as lo,H as nt,Ha as _e,Hb as H,Hc as co,I as qt,Ia as Za,Ib as ke,Ic as hi,J as te,Ja as ri,Jb as si,K as Jl,Ka as ac,Kb as Ke,L as ii,La as oc,Lb as Ye,M as ne,Ma as rc,Mb as en,N as Rt,Na as V,Nb as cc,O as Le,Oa as B,Ob as dc,P as G,Pa as z,Pb as tn,Q as w,Qa as hn,Qb as Tn,R as Jt,Ra as lt,Rb as mc,S as c,Sa as ct,Sb as to,T as ai,Ta as C,Tb as xe,U as mn,Ua as f,Ub as S,V as ut,Va as g,Vb as je,W as pt,Wa as O,Wb as ts,X as oi,Xa as We,Xb as no,Y as ec,Ya as Ze,Yb as ns,Z as pe,Za as dt,Zb as uc,_ as ce,_a as yt,_b as li,a as Y,aa as Q,ab as De,ac as pc,b as ot,ba as W,bb as Ot,bc as $t,c as ql,ca as Qa,cb as fn,cc as hc,d as Ee,da as oe,db as X,dc as ao,e as Ut,ea as Xa,eb as sc,ec as fc,f as $l,fa as tc,fb as L,fc as gc,g as R,ga as Mn,gb as ve,gc as bc,h as Ji,ha as Zr,hb as q,hc as _c,i as $r,ia as kt,ib as qe,ic as Rn,j as Kr,ja as At,jb as Ie,jc as vc,k as $a,ka as Te,kb as N,kc as oo,l as Kl,la as ue,lb as E,lc as yc,m as Se,ma as ie,mb as lc,mc as xc,n as ea,na as D,nb as Ja,nc as wc,o as Yr,oa as Nn,ob as ia,oc as ro,p as ye,pa as nc,pb as ht,pc as Cc,q as Jn,qa as He,qb as $e,qc as Sc,r as Yl,ra as h,rb as P,rc as ci,s as Ka,sa as rt,sb as Ve,sc as Be,t as ei,ta as st,tb as F,tc as re,u as Ql,ua as we,ub as Ae,uc as di,v as vt,va as un,vb as he,vc as kc,w as Xe,wa as pn,wb as En,wc as mi,x as ta,xa as Re,xb as Dn,xc as Mc,y as Ya,ya as it,yb as In,yc as so,z as Wt,za as Jr,zc as ui}from"./chunk-FAX5FY5U.js";var se=(function(i){return i[i.State=0]="State",i[i.Transition=1]="Transition",i[i.Sequence=2]="Sequence",i[i.Group=3]="Group",i[i.Animate=4]="Animate",i[i.Keyframes=5]="Keyframes",i[i.Style=6]="Style",i[i.Trigger=7]="Trigger",i[i.Reference=8]="Reference",i[i.AnimateChild=9]="AnimateChild",i[i.AnimateRef=10]="AnimateRef",i[i.Query=11]="Query",i[i.Stagger=12]="Stagger",i})(se||{}),Ft="*";function Ic(i,n=null){return{type:se.Sequence,steps:i,options:n}}function is(i){return{type:se.Style,styles:i,offset:null}}var an=class{_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_originalOnDoneFns=[];_originalOnStartFns=[];_started=!1;_destroyed=!1;_finished=!1;_position=0;parentPlayer=null;totalTime;constructor(n=0,e=0){this.totalTime=n+e}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(n=>n()),this._onDoneFns=[])}onStart(n){this._originalOnStartFns.push(n),this._onStartFns.push(n)}onDone(n){this._originalOnDoneFns.push(n),this._onDoneFns.push(n)}onDestroy(n){this._onDestroyFns.push(n)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(n=>n()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(n=>n()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(n){this._position=this.totalTime?n*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(n){let e=n=="start"?this._onStartFns:this._onDoneFns;e.forEach(t=>t()),e.length=0}},fi=class{_onDoneFns=[];_onStartFns=[];_finished=!1;_started=!1;_destroyed=!1;_onDestroyFns=[];parentPlayer=null;totalTime=0;players;constructor(n){this.players=n;let e=0,t=0,a=0,o=this.players.length;o==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(r=>{r.onDone(()=>{++e==o&&this._onFinish()}),r.onDestroy(()=>{++t==o&&this._onDestroy()}),r.onStart(()=>{++a==o&&this._onStart()})}),this.totalTime=this.players.reduce((r,s)=>Math.max(r,s.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(n=>n()),this._onDoneFns=[])}init(){this.players.forEach(n=>n.init())}onStart(n){this._onStartFns.push(n)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(n=>n()),this._onStartFns=[])}onDone(n){this._onDoneFns.push(n)}onDestroy(n){this._onDestroyFns.push(n)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(n=>n.play())}pause(){this.players.forEach(n=>n.pause())}restart(){this.players.forEach(n=>n.restart())}finish(){this._onFinish(),this.players.forEach(n=>n.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(n=>n.destroy()),this._onDestroyFns.forEach(n=>n()),this._onDestroyFns=[])}reset(){this.players.forEach(n=>n.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(n){let e=n*this.totalTime;this.players.forEach(t=>{let a=t.totalTime?Math.min(1,e/t.totalTime):1;t.setPosition(a)})}getPosition(){let n=this.players.reduce((e,t)=>e===null||t.totalTime>e.totalTime?t:e,null);return n!=null?n.getPosition():0}beforeDestroy(){this.players.forEach(n=>{n.beforeDestroy&&n.beforeDestroy()})}triggerCallback(n){let e=n=="start"?this._onStartFns:this._onDoneFns;e.forEach(t=>t()),e.length=0}},aa="!";function Tc(i){return new ne(3e3,!1)}function Gp(){return new ne(3100,!1)}function Up(){return new ne(3101,!1)}function Wp(i){return new ne(3001,!1)}function qp(i){return new ne(3003,!1)}function $p(i){return new ne(3004,!1)}function Ac(i,n){return new ne(3005,!1)}function Oc(){return new ne(3006,!1)}function Fc(){return new ne(3007,!1)}function Pc(i,n){return new ne(3008,!1)}function Lc(i){return new ne(3002,!1)}function Vc(i,n,e,t,a){return new ne(3010,!1)}function Bc(){return new ne(3011,!1)}function zc(){return new ne(3012,!1)}function Hc(){return new ne(3200,!1)}function jc(){return new ne(3202,!1)}function Gc(){return new ne(3013,!1)}function Uc(i){return new ne(3014,!1)}function Wc(i){return new ne(3015,!1)}function qc(i){return new ne(3016,!1)}function $c(i,n){return new ne(3404,!1)}function Kp(i){return new ne(3502,!1)}function Kc(i){return new ne(3503,!1)}function Yc(){return new ne(3300,!1)}function Qc(i){return new ne(3504,!1)}function Xc(i){return new ne(3301,!1)}function Zc(i,n){return new ne(3302,!1)}function Jc(i){return new ne(3303,!1)}function ed(i,n){return new ne(3400,!1)}function td(i){return new ne(3401,!1)}function nd(i){return new ne(3402,!1)}function id(i,n){return new ne(3505,!1)}function on(i){switch(i.length){case 0:return new an;case 1:return i[0];default:return new fi(i)}}function ss(i,n,e=new Map,t=new Map){let a=[],o=[],r=-1,s=null;if(n.forEach(l=>{let d=l.get("offset"),m=d==r,u=m&&s||new Map;l.forEach((_,p)=>{let b=p,v=_;if(p!=="offset")switch(b=i.normalizePropertyName(b,a),v){case aa:v=e.get(p);break;case Ft:v=t.get(p);break;default:v=i.normalizeStyleValue(p,b,v,a);break}u.set(b,v)}),m||o.push(u),s=u,r=d}),a.length)throw Kp(a);return o}function mo(i,n,e,t){switch(n){case"start":i.onStart(()=>t(e&&as(e,"start",i)));break;case"done":i.onDone(()=>t(e&&as(e,"done",i)));break;case"destroy":i.onDestroy(()=>t(e&&as(e,"destroy",i)));break}}function as(i,n,e){let t=e.totalTime,a=!!e.disabled,o=uo(i.element,i.triggerName,i.fromState,i.toState,n||i.phaseName,t??i.totalTime,a),r=i._data;return r!=null&&(o._data=r),o}function uo(i,n,e,t,a="",o=0,r){return{element:i,triggerName:n,fromState:e,toState:t,phaseName:a,totalTime:o,disabled:!!r}}function gt(i,n,e){let t=i.get(n);return t||i.set(n,t=e),t}function ls(i){let n=i.indexOf(":"),e=i.substring(1,n),t=i.slice(n+1);return[e,t]}var Yp=typeof document>"u"?null:document.documentElement;function po(i){let n=i.parentNode||i.host||null;return n===Yp?null:n}function Qp(i){return i.substring(1,6)=="ebkit"}var An=null,Rc=!1;function ad(i){An||(An=Xp()||{},Rc=An.style?"WebkitAppearance"in An.style:!1);let n=!0;return An.style&&!Qp(i)&&(n=i in An.style,!n&&Rc&&(n="Webkit"+i.charAt(0).toUpperCase()+i.slice(1)in An.style)),n}function Xp(){return typeof document<"u"?document.body:null}function cs(i,n){for(;n;){if(n===i)return!0;n=po(n)}return!1}function ds(i,n,e){if(e)return Array.from(i.querySelectorAll(n));let t=i.querySelector(n);return t?[t]:[]}var Zp=1e3,ms="{{",Jp="}}",us="ng-enter",ho="ng-leave",oa="ng-trigger",ra=".ng-trigger",ps="ng-animating",fo=".ng-animating";function Kt(i){if(typeof i=="number")return i;let n=i.match(/^(-?[\.\d]+)(m?s)/);return!n||n.length<2?0:os(parseFloat(n[1]),n[2])}function os(i,n){return n==="s"?i*Zp:i}function sa(i,n,e){return typeof i=="object"&&i!==null&&Object.hasOwn(i,"duration")?i:th(i,n,e)}var eh=/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;function th(i,n,e){let t,a=0,o="";if(typeof i=="string"){let r=i.match(eh);if(r===null)return n.push(Tc(i)),{duration:0,delay:0,easing:""};t=os(parseFloat(r[1]),r[2]);let s=r[3];s!=null&&(a=os(parseFloat(s),r[4]));let l=r[5];l&&(o=l)}else t=i;if(!e){let r=!1,s=n.length;t<0&&(n.push(Gp()),r=!0),a<0&&(n.push(Up()),r=!0),r&&n.splice(s,0,Tc(i))}return{duration:t,delay:a,easing:o}}function od(i){return i.length?i[0]instanceof Map?i:i.map(n=>new Map(Object.entries(n))):[]}function Pt(i,n,e){n.forEach((t,a)=>{let o=go(a);e&&!e.has(a)&&e.set(a,i.style[o]),i.style[o]=t})}function bn(i,n){n.forEach((e,t)=>{let a=go(t);i.style[a]=""})}function gi(i){return Array.isArray(i)?i.length==1?i[0]:Ic(i):i}function rd(i,n,e){let t=n.params||{},a=hs(i);a.length&&a.forEach(o=>{Object.hasOwn(t,o)||e.push(Wp(o))})}var rs=new RegExp(`${ms}\\s*(.+?)\\s*${Jp}`,"g");function hs(i){let n=[];if(typeof i=="string"){let e;for(;e=rs.exec(i);)n.push(e[1]);rs.lastIndex=0}return n}function bi(i,n,e){let t=`${i}`,a=t.replace(rs,(o,r)=>{let s=n[r];return s==null&&(e.push(qp(r)),s=""),s.toString()});return a==t?i:a}var nh=/-+([a-z0-9])/g;function go(i){return i.replace(nh,(...n)=>n[1].toUpperCase())}function sd(i,n){return i===0||n===0}function ld(i,n,e){if(e.size&&n.length){let t=n[0],a=[];if(e.forEach((o,r)=>{t.has(r)||a.push(r),t.set(r,o)}),a.length)for(let o=1;o<n.length;o++){let r=n[o];a.forEach(s=>r.set(s,bo(i,s)))}}return n}function bt(i,n,e){switch(n.type){case se.Trigger:return i.visitTrigger(n,e);case se.State:return i.visitState(n,e);case se.Transition:return i.visitTransition(n,e);case se.Sequence:return i.visitSequence(n,e);case se.Group:return i.visitGroup(n,e);case se.Animate:return i.visitAnimate(n,e);case se.Keyframes:return i.visitKeyframes(n,e);case se.Style:return i.visitStyle(n,e);case se.Reference:return i.visitReference(n,e);case se.AnimateChild:return i.visitAnimateChild(n,e);case se.AnimateRef:return i.visitAnimateRef(n,e);case se.Query:return i.visitQuery(n,e);case se.Stagger:return i.visitStagger(n,e);default:throw $p(n.type)}}function bo(i,n){return window.getComputedStyle(i)[n]}var Ts=(()=>{class i{validateStyleProperty(e){return ad(e)}containsElement(e,t){return cs(e,t)}getParentElement(e){return po(e)}query(e,t,a){return ds(e,t,a)}computeStyle(e,t,a){return a||""}animate(e,t,a,o,r,s=[],l){return new an(a,o)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Le({token:i,factory:i.\u0275fac})}return i})(),Fn=class{static NOOP=new Ts},Pn=class{};var ih=new Set(["width","height","minWidth","minHeight","maxWidth","maxHeight","left","top","bottom","right","fontSize","outlineWidth","outlineOffset","paddingTop","paddingLeft","paddingBottom","paddingRight","marginTop","marginLeft","marginBottom","marginRight","borderRadius","borderWidth","borderTopWidth","borderLeftWidth","borderRightWidth","borderBottomWidth","textIndent","perspective"]),wo=class extends Pn{normalizePropertyName(n,e){return go(n)}normalizeStyleValue(n,e,t,a){let o="",r=t.toString().trim();if(ih.has(e)&&t!==0&&t!=="0")if(typeof t=="number")o="px";else{let s=t.match(/^[+-]?[\d\.]+([a-z]*)$/);s&&s[1].length==0&&a.push(Ac(n,t))}return r+o}};var Co="*";function ah(i,n){let e=[];return typeof i=="string"?i.split(/\s*,\s*/).forEach(t=>oh(t,e,n)):e.push(i),e}function oh(i,n,e){if(i[0]==":"){let l=rh(i,e);if(typeof l=="function"){n.push(l);return}i=l}let t=i.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(t==null||t.length<4)return e.push(Wc(i)),n;let a=t[1],o=t[2],r=t[3];n.push(cd(a,r));let s=a==Co&&r==Co;o[0]=="<"&&!s&&n.push(cd(r,a))}function rh(i,n){switch(i){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(e,t)=>parseFloat(t)>parseFloat(e);case":decrement":return(e,t)=>parseFloat(t)<parseFloat(e);default:return n.push(qc(i)),"* => *"}}var _o=new Set(["true","1"]),vo=new Set(["false","0"]);function cd(i,n){let e=_o.has(i)||vo.has(i),t=_o.has(n)||vo.has(n);return(a,o)=>{let r=i==Co||i==a,s=n==Co||n==o;return!r&&e&&typeof a=="boolean"&&(r=a?_o.has(i):vo.has(i)),!s&&t&&typeof o=="boolean"&&(s=o?_o.has(n):vo.has(n)),r&&s}}var vd=":self",sh=new RegExp(`s*${vd}s*,?`,"g");function yd(i,n,e,t){return new ys(i).build(n,e,t)}var dd="",ys=class{_driver;constructor(n){this._driver=n}build(n,e,t){let a=new xs(e);return this._resetContextStyleTimingState(a),bt(this,gi(n),a)}_resetContextStyleTimingState(n){n.currentQuerySelector=dd,n.collectedStyles=new Map,n.collectedStyles.set(dd,new Map),n.currentTime=0}visitTrigger(n,e){let t=e.queryCount=0,a=e.depCount=0,o=[],r=[];return n.name.charAt(0)=="@"&&e.errors.push(Oc()),n.definitions.forEach(s=>{if(this._resetContextStyleTimingState(e),s.type==se.State){let l=s,d=l.name;d.toString().split(/\s*,\s*/).forEach(m=>{l.name=m,o.push(this.visitState(l,e))}),l.name=d}else if(s.type==se.Transition){let l=this.visitTransition(s,e);t+=l.queryCount,a+=l.depCount,r.push(l)}else e.errors.push(Fc())}),{type:se.Trigger,name:n.name,states:o,transitions:r,queryCount:t,depCount:a,options:null}}visitState(n,e){let t=this.visitStyle(n.styles,e),a=n.options&&n.options.params||null;if(t.containsDynamicStyles){let o=new Set,r=a||{};t.styles.forEach(s=>{s instanceof Map&&s.forEach(l=>{hs(l).forEach(d=>{Object.hasOwn(r,d)||o.add(d)})})}),o.size&&e.errors.push(Pc(n.name,[...o.values()]))}return{type:se.State,name:n.name,style:t,options:a?{params:a}:null}}visitTransition(n,e){e.queryCount=0,e.depCount=0;let t=bt(this,gi(n.animation),e),a=ah(n.expr,e.errors);return{type:se.Transition,matchers:a,animation:t,queryCount:e.queryCount,depCount:e.depCount,options:On(n.options)}}visitSequence(n,e){return{type:se.Sequence,steps:n.steps.map(t=>bt(this,t,e)),options:On(n.options)}}visitGroup(n,e){let t=e.currentTime,a=0,o=n.steps.map(r=>{e.currentTime=t;let s=bt(this,r,e);return a=Math.max(a,e.currentTime),s});return e.currentTime=a,{type:se.Group,steps:o,options:On(n.options)}}visitAnimate(n,e){let t=mh(n.timings,e.errors);e.currentAnimateTimings=t;let a,o=n.styles?n.styles:is({});if(o.type==se.Keyframes)a=this.visitKeyframes(o,e);else{let r=n.styles,s=!1;if(!r){s=!0;let d={};t.easing&&(d.easing=t.easing),r=is(d)}e.currentTime+=t.duration+t.delay;let l=this.visitStyle(r,e);l.isEmptyStep=s,a=l}return e.currentAnimateTimings=null,{type:se.Animate,timings:t,style:a,options:null}}visitStyle(n,e){let t=this._makeStyleAst(n,e);return this._validateStyleAst(t,e),t}_makeStyleAst(n,e){let t=[],a=Array.isArray(n.styles)?n.styles:[n.styles];for(let s of a)typeof s=="string"?s===Ft?t.push(s):e.errors.push(Lc(s)):t.push(new Map(Object.entries(s)));let o=!1,r=null;return t.forEach(s=>{if(s instanceof Map&&(s.has("easing")&&(r=s.get("easing"),s.delete("easing")),!o)){for(let l of s.values())if(l.toString().indexOf(ms)>=0){o=!0;break}}}),{type:se.Style,styles:t,easing:r,offset:n.offset,containsDynamicStyles:o,options:null}}_validateStyleAst(n,e){let t=e.currentAnimateTimings,a=e.currentTime,o=e.currentTime;t&&o>0&&(o-=t.duration+t.delay),n.styles.forEach(r=>{typeof r!="string"&&r.forEach((s,l)=>{let d=e.collectedStyles.get(e.currentQuerySelector),m=d.get(l),u=!0;m&&(o!=a&&o>=m.startTime&&a<=m.endTime&&(e.errors.push(Vc(l,m.startTime,m.endTime,o,a)),u=!1),o=m.startTime),u&&d.set(l,{startTime:o,endTime:a}),e.options&&rd(s,e.options,e.errors)})})}visitKeyframes(n,e){let t={type:se.Keyframes,styles:[],options:null};if(!e.currentAnimateTimings)return e.errors.push(Bc()),t;let a=1,o=0,r=[],s=!1,l=!1,d=0,m=n.steps.map(ee=>{let be=this._makeStyleAst(ee,e),Ne=be.offset!=null?be.offset:dh(be.styles),ze=0;return Ne!=null&&(o++,ze=be.offset=Ne),l=l||ze<0||ze>1,s=s||ze<d,d=ze,r.push(ze),be});l&&e.errors.push(zc()),s&&e.errors.push(Hc());let u=n.steps.length,_=0;o>0&&o<u?e.errors.push(jc()):o==0&&(_=a/(u-1));let p=u-1,b=e.currentTime,v=e.currentAnimateTimings,I=v.duration;return m.forEach((ee,be)=>{let Ne=_>0?be==p?1:_*be:r[be],ze=Ne*I;e.currentTime=b+v.delay+ze,v.duration=ze,this._validateStyleAst(ee,e),ee.offset=Ne,t.styles.push(ee)}),t}visitReference(n,e){return{type:se.Reference,animation:bt(this,gi(n.animation),e),options:On(n.options)}}visitAnimateChild(n,e){return e.depCount++,{type:se.AnimateChild,options:On(n.options)}}visitAnimateRef(n,e){return{type:se.AnimateRef,animation:this.visitReference(n.animation,e),options:On(n.options)}}visitQuery(n,e){let t=e.currentQuerySelector,a=n.options||{};e.queryCount++,e.currentQuery=n;let[o,r]=lh(n.selector);e.currentQuerySelector=t.length?t+" "+o:o,gt(e.collectedStyles,e.currentQuerySelector,new Map);let s=bt(this,gi(n.animation),e);return e.currentQuery=null,e.currentQuerySelector=t,{type:se.Query,selector:o,limit:a.limit||0,optional:!!a.optional,includeSelf:r,animation:s,originalSelector:n.selector,options:On(n.options)}}visitStagger(n,e){e.currentQuery||e.errors.push(Gc());let t=n.timings==="full"?{duration:0,delay:0,easing:"full"}:sa(n.timings,e.errors,!0);return{type:se.Stagger,animation:bt(this,gi(n.animation),e),timings:t,options:null}}};function lh(i){let n=!!i.split(/\s*,\s*/).find(e=>e==vd);return n&&(i=i.replace(sh,"")),i=i.replace(/@\*/g,ra).replace(/@\w+/g,e=>ra+"-"+e.slice(1)).replace(/:animating/g,fo),[i,n]}function ch(i){return i?Y({},i):null}var xs=class{errors;queryCount=0;depCount=0;currentTransition=null;currentQuery=null;currentQuerySelector=null;currentAnimateTimings=null;currentTime=0;collectedStyles=new Map;options=null;unsupportedCSSPropertiesFound=new Set;constructor(n){this.errors=n}};function dh(i){if(typeof i=="string")return null;let n=null;if(Array.isArray(i))i.forEach(e=>{if(e instanceof Map&&e.has("offset")){let t=e;n=parseFloat(t.get("offset")),t.delete("offset")}});else if(i instanceof Map&&i.has("offset")){let e=i;n=parseFloat(e.get("offset")),e.delete("offset")}return n}function mh(i,n){if(typeof i=="object"&&i!==null&&Object.hasOwn(i,"duration"))return i;if(typeof i=="number"){let o=sa(i,n).duration;return fs(o,0,"")}let e=i;if(e.split(/\s+/).some(o=>o.charAt(0)=="{"&&o.charAt(1)=="{")){let o=fs(0,0,"");return o.dynamic=!0,o.strValue=e,o}let a=sa(e,n);return fs(a.duration,a.delay,a.easing)}function On(i){return i?(i=Y({},i),i.params&&(i.params=ch(i.params))):i={},i}function fs(i,n,e){return{duration:i,delay:n,easing:e}}function Rs(i,n,e,t,a,o,r=null,s=!1){return{type:1,element:i,keyframes:n,preStyleProps:e,postStyleProps:t,duration:a,delay:o,totalTime:a+o,easing:r,subTimeline:s}}var ca=class{_map=new Map;get(n){return this._map.get(n)||[]}append(n,e){let t=this._map.get(n);t||this._map.set(n,t=[]),t.push(...e)}has(n){return this._map.has(n)}clear(){this._map.clear()}},uh=1,ph=":enter",hh=new RegExp(ph,"g"),fh=":leave",gh=new RegExp(fh,"g");function xd(i,n,e,t,a,o=new Map,r=new Map,s,l,d=[]){return new ws().buildKeyframes(i,n,e,t,a,o,r,s,l,d)}var ws=class{buildKeyframes(n,e,t,a,o,r,s,l,d,m=[]){d=d||new ca;let u=new Cs(n,e,d,a,o,m,[]);u.options=l;let _=l.delay?Kt(l.delay):0;u.currentTimeline.delayNextStep(_),u.currentTimeline.setStyles([r],null,u.errors,l),bt(this,t,u);let p=u.timelines.filter(b=>b.containsAnimation());if(p.length&&s.size){let b;for(let v=p.length-1;v>=0;v--){let I=p[v];if(I.element===e){b=I;break}}b&&!b.allowOnlyTimelineStyles()&&b.setStyles([s],null,u.errors,l)}return p.length?p.map(b=>b.buildKeyframes()):[Rs(e,[],[],[],0,_,"",!1)]}visitTrigger(n,e){}visitState(n,e){}visitTransition(n,e){}visitAnimateChild(n,e){let t=e.subInstructions.get(e.element);if(t){let a=e.createSubContext(n.options),o=e.currentTimeline.currentTime,r=this._visitSubInstructions(t,a,a.options);o!=r&&e.transformIntoNewTimeline(r)}e.previousNode=n}visitAnimateRef(n,e){let t=e.createSubContext(n.options);t.transformIntoNewTimeline(),this._applyAnimationRefDelays([n.options,n.animation.options],e,t),this.visitReference(n.animation,t),e.transformIntoNewTimeline(t.currentTimeline.currentTime),e.previousNode=n}_applyAnimationRefDelays(n,e,t){for(let a of n){let o=a?.delay;if(o){let r=typeof o=="number"?o:Kt(bi(o,a?.params??{},e.errors));t.delayNextStep(r)}}}_visitSubInstructions(n,e,t){let o=e.currentTimeline.currentTime,r=t.duration!=null?Kt(t.duration):null,s=t.delay!=null?Kt(t.delay):null;return r!==0&&n.forEach(l=>{let d=e.appendInstructionToTimeline(l,r,s);o=Math.max(o,d.duration+d.delay)}),o}visitReference(n,e){e.updateOptions(n.options,!0),bt(this,n.animation,e),e.previousNode=n}visitSequence(n,e){let t=e.subContextCount,a=e,o=n.options;if(o&&(o.params||o.delay)&&(a=e.createSubContext(o),a.transformIntoNewTimeline(),o.delay!=null)){a.previousNode.type==se.Style&&(a.currentTimeline.snapshotCurrentStyles(),a.previousNode=So);let r=Kt(o.delay);a.delayNextStep(r)}n.steps.length&&(n.steps.forEach(r=>bt(this,r,a)),a.currentTimeline.applyStylesToKeyframe(),a.subContextCount>t&&a.transformIntoNewTimeline()),e.previousNode=n}visitGroup(n,e){let t=[],a=e.currentTimeline.currentTime,o=n.options&&n.options.delay?Kt(n.options.delay):0;n.steps.forEach(r=>{let s=e.createSubContext(n.options);o&&s.delayNextStep(o),bt(this,r,s),a=Math.max(a,s.currentTimeline.currentTime),t.push(s.currentTimeline)}),t.forEach(r=>e.currentTimeline.mergeTimelineCollectedStyles(r)),e.transformIntoNewTimeline(a),e.previousNode=n}_visitTiming(n,e){if(n.dynamic){let t=n.strValue,a=e.params?bi(t,e.params,e.errors):t;return sa(a,e.errors)}else return{duration:n.duration,delay:n.delay,easing:n.easing}}visitAnimate(n,e){let t=e.currentAnimateTimings=this._visitTiming(n.timings,e),a=e.currentTimeline;t.delay&&(e.incrementTime(t.delay),a.snapshotCurrentStyles());let o=n.style;o.type==se.Keyframes?this.visitKeyframes(o,e):(e.incrementTime(t.duration),this.visitStyle(o,e),a.applyStylesToKeyframe()),e.currentAnimateTimings=null,e.previousNode=n}visitStyle(n,e){let t=e.currentTimeline,a=e.currentAnimateTimings;!a&&t.hasCurrentStyleProperties()&&t.forwardFrame();let o=a&&a.easing||n.easing;n.isEmptyStep?t.applyEmptyStep(o):t.setStyles(n.styles,o,e.errors,e.options),e.previousNode=n}visitKeyframes(n,e){let t=e.currentAnimateTimings,a=e.currentTimeline.duration,o=t.duration,s=e.createSubContext().currentTimeline;s.easing=t.easing,n.styles.forEach(l=>{let d=l.offset||0;s.forwardTime(d*o),s.setStyles(l.styles,l.easing,e.errors,e.options),s.applyStylesToKeyframe()}),e.currentTimeline.mergeTimelineCollectedStyles(s),e.transformIntoNewTimeline(a+o),e.previousNode=n}visitQuery(n,e){let t=e.currentTimeline.currentTime,a=n.options||{},o=a.delay?Kt(a.delay):0;o&&(e.previousNode.type===se.Style||t==0&&e.currentTimeline.hasCurrentStyleProperties())&&(e.currentTimeline.snapshotCurrentStyles(),e.previousNode=So);let r=t,s=e.invokeQuery(n.selector,n.originalSelector,n.limit,n.includeSelf,!!a.optional,e.errors);e.currentQueryTotal=s.length;let l=null;s.forEach((d,m)=>{e.currentQueryIndex=m;let u=e.createSubContext(n.options,d);o&&u.delayNextStep(o),d===e.element&&(l=u.currentTimeline),bt(this,n.animation,u),u.currentTimeline.applyStylesToKeyframe();let _=u.currentTimeline.currentTime;r=Math.max(r,_)}),e.currentQueryIndex=0,e.currentQueryTotal=0,e.transformIntoNewTimeline(r),l&&(e.currentTimeline.mergeTimelineCollectedStyles(l),e.currentTimeline.snapshotCurrentStyles()),e.previousNode=n}visitStagger(n,e){let t=e.parentContext,a=e.currentTimeline,o=n.timings,r=Math.abs(o.duration),s=r*(e.currentQueryTotal-1),l=r*e.currentQueryIndex;switch(o.duration<0?"reverse":o.easing){case"reverse":l=s-l;break;case"full":l=t.currentStaggerTime;break}let m=e.currentTimeline;l&&m.delayNextStep(l);let u=m.currentTime;bt(this,n.animation,e),e.previousNode=n,t.currentStaggerTime=a.currentTime-u+(a.startTime-t.currentTimeline.startTime)}},So={},Cs=class i{_driver;element;subInstructions;_enterClassName;_leaveClassName;errors;timelines;parentContext=null;currentTimeline;currentAnimateTimings=null;previousNode=So;subContextCount=0;options={};currentQueryIndex=0;currentQueryTotal=0;currentStaggerTime=0;constructor(n,e,t,a,o,r,s,l){this._driver=n,this.element=e,this.subInstructions=t,this._enterClassName=a,this._leaveClassName=o,this.errors=r,this.timelines=s,this.currentTimeline=l||new ko(this._driver,e,0),s.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(n,e){if(!n)return;let t=n,a=this.options;t.duration!=null&&(a.duration=Kt(t.duration)),t.delay!=null&&(a.delay=Kt(t.delay));let o=t.params;if(o){let r=a.params;r||(r=this.options.params={}),Object.keys(o).forEach(s=>{(!e||!Object.hasOwn(r,s))&&(r[s]=bi(o[s],r,this.errors))})}}_copyOptions(){let n={};if(this.options){let e=this.options.params;if(e){let t=n.params={};Object.keys(e).forEach(a=>{t[a]=e[a]})}}return n}createSubContext(n=null,e,t){let a=e||this.element,o=new i(this._driver,a,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(a,t||0));return o.previousNode=this.previousNode,o.currentAnimateTimings=this.currentAnimateTimings,o.options=this._copyOptions(),o.updateOptions(n),o.currentQueryIndex=this.currentQueryIndex,o.currentQueryTotal=this.currentQueryTotal,o.parentContext=this,this.subContextCount++,o}transformIntoNewTimeline(n){return this.previousNode=So,this.currentTimeline=this.currentTimeline.fork(this.element,n),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(n,e,t){let a={duration:e??n.duration,delay:this.currentTimeline.currentTime+(t??0)+n.delay,easing:""},o=new Ss(this._driver,n.element,n.keyframes,n.preStyleProps,n.postStyleProps,a,n.stretchStartingKeyframe);return this.timelines.push(o),a}incrementTime(n){this.currentTimeline.forwardTime(this.currentTimeline.duration+n)}delayNextStep(n){n>0&&this.currentTimeline.delayNextStep(n)}invokeQuery(n,e,t,a,o,r){let s=[];if(a&&s.push(this.element),n.length>0){n=n.replace(hh,"."+this._enterClassName),n=n.replace(gh,"."+this._leaveClassName);let l=t!=1,d=this._driver.query(this.element,n,l);t!==0&&(d=t<0?d.slice(d.length+t,d.length):d.slice(0,t)),s.push(...d)}return!o&&s.length==0&&r.push(Uc(e)),s}},ko=class i{_driver;element;startTime;_elementTimelineStylesLookup;duration=0;easing=null;_previousKeyframe=new Map;_currentKeyframe=new Map;_keyframes=new Map;_styleSummary=new Map;_localTimelineStyles=new Map;_globalTimelineStyles;_pendingStyles=new Map;_backFill=new Map;_currentEmptyStepKeyframe=null;constructor(n,e,t,a){this._driver=n,this.element=e,this.startTime=t,this._elementTimelineStylesLookup=a,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(e),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(e,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.hasCurrentStyleProperties();default:return!0}}hasCurrentStyleProperties(){return this._currentKeyframe.size>0}get currentTime(){return this.startTime+this.duration}delayNextStep(n){let e=this._keyframes.size===1&&this._pendingStyles.size;this.duration||e?(this.forwardTime(this.currentTime+n),e&&this.snapshotCurrentStyles()):this.startTime+=n}fork(n,e){return this.applyStylesToKeyframe(),new i(this._driver,n,e||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=new Map,this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=uh,this._loadKeyframe()}forwardTime(n){this.applyStylesToKeyframe(),this.duration=n,this._loadKeyframe()}_updateStyle(n,e){this._localTimelineStyles.set(n,e),this._globalTimelineStyles.set(n,e),this._styleSummary.set(n,{time:this.currentTime,value:e})}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(n){n&&this._previousKeyframe.set("easing",n);for(let[e,t]of this._globalTimelineStyles)this._backFill.set(e,t||Ft),this._currentKeyframe.set(e,Ft);this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(n,e,t,a){e&&this._previousKeyframe.set("easing",e);let o=a&&a.params||{},r=bh(n,this._globalTimelineStyles);for(let[s,l]of r){let d=bi(l,o,t);this._pendingStyles.set(s,d),this._localTimelineStyles.has(s)||this._backFill.set(s,this._globalTimelineStyles.get(s)??Ft),this._updateStyle(s,d)}}applyStylesToKeyframe(){this._pendingStyles.size!=0&&(this._pendingStyles.forEach((n,e)=>{this._currentKeyframe.set(e,n)}),this._pendingStyles.clear(),this._localTimelineStyles.forEach((n,e)=>{this._currentKeyframe.has(e)||this._currentKeyframe.set(e,n)}))}snapshotCurrentStyles(){for(let[n,e]of this._localTimelineStyles)this._pendingStyles.set(n,e),this._updateStyle(n,e)}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){let n=[];for(let e in this._currentKeyframe)n.push(e);return n}mergeTimelineCollectedStyles(n){n._styleSummary.forEach((e,t)=>{let a=this._styleSummary.get(t);(!a||e.time>a.time)&&this._updateStyle(t,e.value)})}buildKeyframes(){this.applyStylesToKeyframe();let n=new Set,e=new Set,t=this._keyframes.size===1&&this.duration===0,a=[];this._keyframes.forEach((s,l)=>{let d=new Map([...this._backFill,...s]);d.forEach((m,u)=>{m===aa?n.add(u):m===Ft&&e.add(u)}),t||d.set("offset",l/this.duration),a.push(d)});let o=[...n.values()],r=[...e.values()];if(t){let s=a[0],l=new Map(s);s.set("offset",0),l.set("offset",1),a=[s,l]}return Rs(this.element,a,o,r,this.duration,this.startTime,this.easing,!1)}},Ss=class extends ko{keyframes;preStyleProps;postStyleProps;_stretchStartingKeyframe;timings;constructor(n,e,t,a,o,r,s=!1){super(n,e,r.delay),this.keyframes=t,this.preStyleProps=a,this.postStyleProps=o,this._stretchStartingKeyframe=s,this.timings={duration:r.duration,delay:r.delay,easing:r.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let n=this.keyframes,{delay:e,duration:t,easing:a}=this.timings;if(this._stretchStartingKeyframe&&e){let o=[],r=t+e,s=e/r,l=new Map(n[0]);l.set("offset",0),o.push(l);let d=new Map(n[0]);d.set("offset",md(s)),o.push(d);let m=n.length-1;for(let u=1;u<=m;u++){let _=new Map(n[u]),p=_.get("offset"),b=e+p*t;_.set("offset",md(b/r)),o.push(_)}t=r,e=0,a="",n=o}return Rs(this.element,n,this.preStyleProps,this.postStyleProps,t,e,a,!0)}};function md(i,n=3){let e=Math.pow(10,n-1);return Math.round(i*e)/e}function bh(i,n){let e=new Map,t;return i.forEach(a=>{if(a==="*"){t??=n.keys();for(let o of t)e.set(o,Ft)}else for(let[o,r]of a)e.set(o,r)}),e}function ud(i,n,e,t,a,o,r,s,l,d,m,u,_){return{type:0,element:i,triggerName:n,isRemovalTransition:a,fromState:e,fromStyles:o,toState:t,toStyles:r,timelines:s,queriedElements:l,preStyleProps:d,postStyleProps:m,totalTime:u,errors:_}}var gs={},Mo=class{_triggerName;ast;_stateStyles;constructor(n,e,t){this._triggerName=n,this.ast=e,this._stateStyles=t}match(n,e,t,a){return _h(this.ast.matchers,n,e,t,a)}buildStyles(n,e,t){let a=this._stateStyles.get("*");return n!==void 0&&(a=this._stateStyles.get(n?.toString())||a),a?a.buildStyles(e,t):new Map}build(n,e,t,a,o,r,s,l,d,m){let u=[],_=this.ast.options&&this.ast.options.params||gs,p=s&&s.params||gs,b=this.buildStyles(t,p,u),v=l&&l.params||gs,I=this.buildStyles(a,v,u),ee=new Set,be=new Map,Ne=new Map,ze=a==="void",cn={params:wd(v,_),delay:this.ast.options?.delay},wt=m?[]:xd(n,e,this.ast.animation,o,r,b,I,cn,d,u),Qe=0;return wt.forEach(et=>{Qe=Math.max(et.duration+et.delay,Qe)}),u.length?ud(e,this._triggerName,t,a,ze,b,I,[],[],be,Ne,Qe,u):(wt.forEach(et=>{let Zt=et.element,$=gt(be,Zt,new Set);et.preStyleProps.forEach(y=>$.add(y));let ge=gt(Ne,Zt,new Set);et.postStyleProps.forEach(y=>ge.add(y)),Zt!==e&&ee.add(Zt)}),ud(e,this._triggerName,t,a,ze,b,I,wt,[...ee.values()],be,Ne,Qe))}};function _h(i,n,e,t,a){return i.some(o=>o(n,e,t,a))}function wd(i,n){let e=Y({},n);return Object.entries(i).forEach(([t,a])=>{a!=null&&(e[t]=a)}),e}var ks=class{styles;defaultParams;normalizer;constructor(n,e,t){this.styles=n,this.defaultParams=e,this.normalizer=t}buildStyles(n,e){let t=new Map,a=wd(n,this.defaultParams);return this.styles.styles.forEach(o=>{typeof o!="string"&&o.forEach((r,s)=>{r&&(r=bi(r,a,e));let l=this.normalizer.normalizePropertyName(s,e);r=this.normalizer.normalizeStyleValue(s,l,r,e),t.set(s,r)})}),t}};function vh(i,n,e){return new Ms(i,n,e)}var Ms=class{name;ast;_normalizer;transitionFactories=[];fallbackTransition;states=new Map;constructor(n,e,t){this.name=n,this.ast=e,this._normalizer=t,e.states.forEach(a=>{let o=a.options&&a.options.params||{};this.states.set(a.name,new ks(a.style,o,t))}),pd(this.states,"true","1"),pd(this.states,"false","0"),e.transitions.forEach(a=>{this.transitionFactories.push(new Mo(n,a,this.states))}),this.fallbackTransition=yh(n,this.states)}get containsQueries(){return this.ast.queryCount>0}matchTransition(n,e,t,a){return this.transitionFactories.find(r=>r.match(n,e,t,a))||null}matchStyles(n,e,t){return this.fallbackTransition.buildStyles(n,e,t)}};function yh(i,n,e){let t=[(r,s)=>!0],a={type:se.Sequence,steps:[],options:null},o={type:se.Transition,animation:a,matchers:t,options:null,queryCount:0,depCount:0};return new Mo(i,o,n)}function pd(i,n,e){i.has(n)?i.has(e)||i.set(e,i.get(n)):i.has(e)&&i.set(n,i.get(e))}var xh=new ca,Ns=class{bodyNode;_driver;_normalizer;_animations=new Map;_playersById=new Map;players=[];constructor(n,e,t){this.bodyNode=n,this._driver=e,this._normalizer=t}register(n,e){let t=[],a=[],o=yd(this._driver,e,t,a);if(t.length)throw Kc(t);this._animations.set(n,o)}_buildPlayer(n,e,t){let a=n.element,o=ss(this._normalizer,n.keyframes,e,t);return this._driver.animate(a,o,n.duration,n.delay,n.easing,[],!0)}create(n,e,t={}){let a=[],o=this._animations.get(n),r,s=new Map;if(o?(r=xd(this._driver,e,o,us,ho,new Map,new Map,t,xh,a),r.forEach(m=>{let u=gt(s,m.element,new Map);m.postStyleProps.forEach(_=>u.set(_,null))})):(a.push(Yc()),r=[]),a.length)throw Qc(a);s.forEach((m,u)=>{m.forEach((_,p)=>{m.set(p,this._driver.computeStyle(u,p,Ft))})});let l=r.map(m=>{let u=s.get(m.element);return this._buildPlayer(m,new Map,u)}),d=on(l);return this._playersById.set(n,d),d.onDestroy(()=>this.destroy(n)),this.players.push(d),d}destroy(n){let e=this._getPlayer(n);e.destroy(),this._playersById.delete(n);let t=this.players.indexOf(e);t>=0&&this.players.splice(t,1)}_getPlayer(n){let e=this._playersById.get(n);if(!e)throw Xc(n);return e}listen(n,e,t,a){let o=uo(e,"","","");return mo(this._getPlayer(n),t,o,a),()=>{}}command(n,e,t,a){if(t=="register"){this.register(n,a[0]);return}if(t=="create"){let r=a[0]||{};this.create(n,e,r);return}let o=this._getPlayer(n);switch(t){case"play":o.play();break;case"pause":o.pause();break;case"reset":o.reset();break;case"restart":o.restart();break;case"finish":o.finish();break;case"init":o.init();break;case"setPosition":o.setPosition(parseFloat(a[0]));break;case"destroy":this.destroy(n);break}}},hd="ng-animate-queued",wh=".ng-animate-queued",bs="ng-animate-disabled",Ch=".ng-animate-disabled",Sh="ng-star-inserted",kh=".ng-star-inserted",Mh=[],Cd={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},Nh={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0},Lt="__ng_removed",da=class{namespaceId;value;options;get params(){return this.options.params}constructor(n,e=""){this.namespaceId=e;let t=n&&Object.hasOwn(n,"value"),a=t?n.value:n;if(this.value=Dh(a),t){let o=n,{value:r}=o,s=ql(o,["value"]);this.options=s}else this.options={};this.options.params||(this.options.params={})}absorbOptions(n){let e=n.params;if(e){let t=this.options.params;Object.keys(e).forEach(a=>{t[a]==null&&(t[a]=e[a])})}}},la="void",_s=new da(la),Es=class{id;hostElement;_engine;players=[];_triggers=new Map;_queue=[];_elementListeners=new Map;_hostClassName;constructor(n,e,t){this.id=n,this.hostElement=e,this._engine=t,this._hostClassName="ng-tns-"+n,Nt(e,this._hostClassName)}listen(n,e,t,a){if(!this._triggers.has(e))throw Zc(t,e);if(t==null||t.length==0)throw Jc(e);if(!Ih(t))throw ed(t,e);let o=gt(this._elementListeners,n,[]),r={name:e,phase:t,callback:a};o.push(r);let s=gt(this._engine.statesByElement,n,new Map);return s.has(e)||(Nt(n,oa),Nt(n,oa+"-"+e),s.set(e,_s)),()=>{this._engine.afterFlush(()=>{let l=o.indexOf(r);l>=0&&o.splice(l,1),this._triggers.has(e)||s.delete(e)})}}register(n,e){return this._triggers.has(n)?!1:(this._triggers.set(n,e),!0)}_getTrigger(n){let e=this._triggers.get(n);if(!e)throw td(n);return e}trigger(n,e,t,a=!0){let o=this._getTrigger(e),r=new ma(this.id,e,n),s=this._engine.statesByElement.get(n);s||(Nt(n,oa),Nt(n,oa+"-"+e),this._engine.statesByElement.set(n,s=new Map));let l=s.get(e),d=new da(t,this.id);if(!(t&&Object.hasOwn(t,"value"))&&l&&d.absorbOptions(l.options),s.set(e,d),l||(l=_s),!(d.value===la)&&l.value===d.value){if(!Ah(l.params,d.params)){let v=[],I=o.matchStyles(l.value,l.params,v),ee=o.matchStyles(d.value,d.params,v);v.length?this._engine.reportError(v):this._engine.afterFlush(()=>{bn(n,I),Pt(n,ee)})}return}let _=gt(this._engine.playersByElement,n,[]);_.forEach(v=>{v.namespaceId==this.id&&v.triggerName==e&&v.queued&&v.destroy()});let p=o.matchTransition(l.value,d.value,n,d.params),b=!1;if(!p){if(!a)return;p=o.fallbackTransition,b=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:n,triggerName:e,transition:p,fromState:l,toState:d,player:r,isFallbackTransition:b}),b||(Nt(n,hd),r.onStart(()=>{_i(n,hd)})),r.onDone(()=>{let v=this.players.indexOf(r);v>=0&&this.players.splice(v,1);let I=this._engine.playersByElement.get(n);if(I){let ee=I.indexOf(r);ee>=0&&I.splice(ee,1)}}),this.players.push(r),_.push(r),r}deregister(n){this._triggers.delete(n),this._engine.statesByElement.forEach(e=>e.delete(n)),this._elementListeners.forEach((e,t)=>{this._elementListeners.set(t,e.filter(a=>a.name!=n))})}clearElementCache(n){this._engine.statesByElement.delete(n),this._elementListeners.delete(n);let e=this._engine.playersByElement.get(n);e&&(e.forEach(t=>t.destroy()),this._engine.playersByElement.delete(n))}_signalRemovalForInnerTriggers(n,e){let t=this._engine.driver.query(n,ra,!0);t.forEach(a=>{if(a[Lt])return;let o=this._engine.fetchNamespacesByElement(a);o.size?o.forEach(r=>r.triggerLeaveAnimation(a,e,!1,!0)):this.clearElementCache(a)}),this._engine.afterFlushAnimationsDone(()=>t.forEach(a=>this.clearElementCache(a)))}triggerLeaveAnimation(n,e,t,a){let o=this._engine.statesByElement.get(n),r=new Map;if(o){let s=[];if(o.forEach((l,d)=>{if(r.set(d,l.value),this._triggers.has(d)){let m=this.trigger(n,d,la,a);m&&s.push(m)}}),s.length)return this._engine.markElementAsRemoved(this.id,n,!0,e,r),t&&on(s).onDone(()=>this._engine.processLeaveNode(n)),!0}return!1}prepareLeaveAnimationListeners(n){let e=this._elementListeners.get(n),t=this._engine.statesByElement.get(n);if(e&&t){let a=new Set;e.forEach(o=>{let r=o.name;if(a.has(r))return;a.add(r);let l=this._triggers.get(r).fallbackTransition,d=t.get(r)||_s,m=new da(la),u=new ma(this.id,r,n);this._engine.totalQueuedPlayers++,this._queue.push({element:n,triggerName:r,transition:l,fromState:d,toState:m,player:u,isFallbackTransition:!0})})}}removeNode(n,e){let t=this._engine;if(n.childElementCount&&this._signalRemovalForInnerTriggers(n,e),this.triggerLeaveAnimation(n,e,!0))return;let a=!1;if(t.totalAnimations){let o=t.players.length?t.playersByQueriedElement.get(n):[];if(o&&o.length)a=!0;else{let r=n;for(;r=r.parentNode;)if(t.statesByElement.get(r)){a=!0;break}}}if(this.prepareLeaveAnimationListeners(n),a)t.markElementAsRemoved(this.id,n,!1,e);else{let o=n[Lt];(!o||o===Cd)&&(t.afterFlush(()=>this.clearElementCache(n)),t.destroyInnerAnimations(n),t._onRemovalComplete(n,e))}}insertNode(n,e){Nt(n,this._hostClassName)}drainQueuedTransitions(n){let e=[];return this._queue.forEach(t=>{let a=t.player;if(a.destroyed)return;let o=t.element,r=this._elementListeners.get(o);r&&r.forEach(s=>{if(s.name==t.triggerName){let l=uo(o,t.triggerName,t.fromState.value,t.toState.value);l._data=n,mo(t.player,s.phase,l,s.callback)}}),a.markedForDestroy?this._engine.afterFlush(()=>{a.destroy()}):e.push(t)}),this._queue=[],e.sort((t,a)=>{let o=t.transition.ast.depCount,r=a.transition.ast.depCount;return o==0||r==0?o-r:this._engine.driver.containsElement(t.element,a.element)?1:-1})}destroy(n){this.players.forEach(e=>e.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,n)}},Ds=class{bodyNode;driver;_normalizer;players=[];newHostElements=new Map;playersByElement=new Map;playersByQueriedElement=new Map;statesByElement=new Map;disabledNodes=new Set;totalAnimations=0;totalQueuedPlayers=0;_namespaceLookup={};_namespaceList=[];_flushFns=[];_whenQuietFns=[];namespacesByHostElement=new Map;collectedEnterElements=[];collectedLeaveElements=[];onRemovalComplete=(n,e)=>{};_onRemovalComplete(n,e){this.onRemovalComplete(n,e)}constructor(n,e,t){this.bodyNode=n,this.driver=e,this._normalizer=t}get queuedPlayers(){let n=[];return this._namespaceList.forEach(e=>{e.players.forEach(t=>{t.queued&&n.push(t)})}),n}createNamespace(n,e){let t=new Es(n,e,this);return this.bodyNode&&this.driver.containsElement(this.bodyNode,e)?this._balanceNamespaceList(t,e):(this.newHostElements.set(e,t),this.collectEnterElement(e)),this._namespaceLookup[n]=t}_balanceNamespaceList(n,e){let t=this._namespaceList,a=this.namespacesByHostElement;if(t.length-1>=0){let r=!1,s=this.driver.getParentElement(e);for(;s;){let l=a.get(s);if(l){let d=t.indexOf(l);t.splice(d+1,0,n),r=!0;break}s=this.driver.getParentElement(s)}r||t.unshift(n)}else t.push(n);return a.set(e,n),n}register(n,e){let t=this._namespaceLookup[n];return t||(t=this.createNamespace(n,e)),t}registerTrigger(n,e,t){let a=this._namespaceLookup[n];a&&a.register(e,t)&&this.totalAnimations++}destroy(n,e){n&&(this.afterFlush(()=>{}),this.afterFlushAnimationsDone(()=>{let t=this._fetchNamespace(n);this.namespacesByHostElement.delete(t.hostElement);let a=this._namespaceList.indexOf(t);a>=0&&this._namespaceList.splice(a,1),t.destroy(e),delete this._namespaceLookup[n]}))}_fetchNamespace(n){return this._namespaceLookup[n]}fetchNamespacesByElement(n){let e=new Set,t=this.statesByElement.get(n);if(t){for(let a of t.values())if(a.namespaceId){let o=this._fetchNamespace(a.namespaceId);o&&e.add(o)}}return e}trigger(n,e,t,a){if(yo(e)){let o=this._fetchNamespace(n);if(o)return o.trigger(e,t,a),!0}return!1}insertNode(n,e,t,a){if(!yo(e))return;let o=e[Lt];if(o&&o.setForRemoval){o.setForRemoval=!1,o.setForMove=!0;let r=this.collectedLeaveElements.indexOf(e);r>=0&&this.collectedLeaveElements.splice(r,1)}if(n){let r=this._fetchNamespace(n);r&&r.insertNode(e,t)}a&&this.collectEnterElement(e)}collectEnterElement(n){this.collectedEnterElements.push(n)}markElementAsDisabled(n,e){e?this.disabledNodes.has(n)||(this.disabledNodes.add(n),Nt(n,bs)):this.disabledNodes.has(n)&&(this.disabledNodes.delete(n),_i(n,bs))}removeNode(n,e,t){if(yo(e)){let a=n?this._fetchNamespace(n):null;a?a.removeNode(e,t):this.markElementAsRemoved(n,e,!1,t);let o=this.namespacesByHostElement.get(e);o&&o.id!==n&&o.removeNode(e,t)}else this._onRemovalComplete(e,t)}markElementAsRemoved(n,e,t,a,o){this.collectedLeaveElements.push(e),e[Lt]={namespaceId:n,setForRemoval:a,hasAnimation:t,removedBeforeQueried:!1,previousTriggersValues:o}}listen(n,e,t,a,o){return yo(e)?this._fetchNamespace(n).listen(e,t,a,o):()=>{}}_buildInstruction(n,e,t,a,o){return n.transition.build(this.driver,n.element,n.fromState.value,n.toState.value,t,a,n.fromState.options,n.toState.options,e,o)}destroyInnerAnimations(n){let e=this.driver.query(n,ra,!0);e.forEach(t=>this.destroyActiveAnimationsForElement(t)),this.playersByQueriedElement.size!=0&&(e=this.driver.query(n,fo,!0),e.forEach(t=>this.finishActiveQueriedAnimationOnElement(t)))}destroyActiveAnimationsForElement(n){let e=this.playersByElement.get(n);e&&e.forEach(t=>{t.queued?t.markedForDestroy=!0:t.destroy()})}finishActiveQueriedAnimationOnElement(n){let e=this.playersByQueriedElement.get(n);e&&e.forEach(t=>t.finish())}whenRenderingDone(){return new Promise(n=>{if(this.players.length)return on(this.players).onDone(()=>n());n()})}processLeaveNode(n){let e=n[Lt];if(e&&e.setForRemoval){if(n[Lt]=Cd,e.namespaceId){this.destroyInnerAnimations(n);let t=this._fetchNamespace(e.namespaceId);t&&t.clearElementCache(n)}this._onRemovalComplete(n,e.setForRemoval)}n.classList?.contains(bs)&&this.markElementAsDisabled(n,!1),this.driver.query(n,Ch,!0).forEach(t=>{this.markElementAsDisabled(t,!1)})}flush(n=-1){let e=[];if(this.newHostElements.size&&(this.newHostElements.forEach((t,a)=>this._balanceNamespaceList(t,a)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let t=0;t<this.collectedEnterElements.length;t++){let a=this.collectedEnterElements[t];Nt(a,Sh)}if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){let t=[];try{e=this._flushAnimations(t,n)}finally{for(let a=0;a<t.length;a++)t[a]()}}else for(let t=0;t<this.collectedLeaveElements.length;t++){let a=this.collectedLeaveElements[t];this.processLeaveNode(a)}if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(t=>t()),this._flushFns=[],this._whenQuietFns.length){let t=this._whenQuietFns;this._whenQuietFns=[],e.length?on(e).onDone(()=>{t.forEach(a=>a())}):t.forEach(a=>a())}}reportError(n){throw nd(n)}_flushAnimations(n,e){let t=new ca,a=[],o=new Map,r=[],s=new Map,l=new Map,d=new Map,m=new Set;this.disabledNodes.forEach(A=>{m.add(A);let j=this.driver.query(A,wh,!0);for(let K=0;K<j.length;K++)m.add(j[K])});let u=this.bodyNode,_=Array.from(this.statesByElement.keys()),p=bd(_,this.collectedEnterElements),b=new Map,v=0;p.forEach((A,j)=>{let K=us+v++;b.set(j,K),A.forEach(me=>Nt(me,K))});let I=[],ee=new Set,be=new Set;for(let A=0;A<this.collectedLeaveElements.length;A++){let j=this.collectedLeaveElements[A],K=j[Lt];K&&K.setForRemoval&&(I.push(j),ee.add(j),K.hasAnimation?this.driver.query(j,kh,!0).forEach(me=>ee.add(me)):be.add(j))}let Ne=new Map,ze=bd(_,Array.from(ee));ze.forEach((A,j)=>{let K=ho+v++;Ne.set(j,K),A.forEach(me=>Nt(me,K))}),n.push(()=>{p.forEach((A,j)=>{let K=b.get(j);A.forEach(me=>_i(me,K))}),ze.forEach((A,j)=>{let K=Ne.get(j);A.forEach(me=>_i(me,K))}),I.forEach(A=>{this.processLeaveNode(A)})});let cn=[],wt=[];for(let A=this._namespaceList.length-1;A>=0;A--)this._namespaceList[A].drainQueuedTransitions(e).forEach(K=>{let me=K.player,Ue=K.element;if(cn.push(me),this.collectedEnterElements.length){let tt=Ue[Lt];if(tt&&tt.setForMove){if(tt.previousTriggersValues&&tt.previousTriggersValues.has(K.triggerName)){let kn=tt.previousTriggersValues.get(K.triggerName),Ct=this.statesByElement.get(K.element);if(Ct&&Ct.has(K.triggerName)){let qa=Ct.get(K.triggerName);qa.value=kn,Ct.set(K.triggerName,qa)}}me.destroy();return}}let Gt=!u||!this.driver.containsElement(u,Ue),_t=Ne.get(Ue),dn=b.get(Ue),Ce=this._buildInstruction(K,t,dn,_t,Gt);if(Ce.errors&&Ce.errors.length){wt.push(Ce);return}if(Gt){me.onStart(()=>bn(Ue,Ce.fromStyles)),me.onDestroy(()=>Pt(Ue,Ce.toStyles)),a.push(me);return}if(K.isFallbackTransition){me.onStart(()=>bn(Ue,Ce.fromStyles)),me.onDestroy(()=>Pt(Ue,Ce.toStyles)),a.push(me);return}let Wl=[];Ce.timelines.forEach(tt=>{tt.stretchStartingKeyframe=!0,this.disabledNodes.has(tt.element)||Wl.push(tt)}),Ce.timelines=Wl,t.append(Ue,Ce.timelines);let jp={instruction:Ce,player:me,element:Ue};r.push(jp),Ce.queriedElements.forEach(tt=>gt(s,tt,[]).push(me)),Ce.preStyleProps.forEach((tt,kn)=>{if(tt.size){let Ct=l.get(kn);Ct||l.set(kn,Ct=new Set),tt.forEach((qa,qr)=>Ct.add(qr))}}),Ce.postStyleProps.forEach((tt,kn)=>{let Ct=d.get(kn);Ct||d.set(kn,Ct=new Set),tt.forEach((qa,qr)=>Ct.add(qr))})});if(wt.length){let A=[];wt.forEach(j=>{A.push(id(j.triggerName,j.errors))}),cn.forEach(j=>j.destroy()),this.reportError(A)}let Qe=new Map,et=new Map;r.forEach(A=>{let j=A.element;t.has(j)&&(et.set(j,j),this._beforeAnimationBuild(A.player.namespaceId,A.instruction,Qe))}),a.forEach(A=>{let j=A.element;this._getPreviousPlayers(j,!1,A.namespaceId,A.triggerName,null).forEach(me=>{gt(Qe,j,[]).push(me),me.destroy()})});let Zt=I.filter(A=>_d(A,l,d)),$=new Map;gd($,this.driver,be,d,Ft).forEach(A=>{_d(A,l,d)&&Zt.push(A)});let y=new Map;p.forEach((A,j)=>{gd(y,this.driver,new Set(A),l,aa)}),Zt.forEach(A=>{let j=$.get(A),K=y.get(A);$.set(A,new Map([...j?.entries()??[],...K?.entries()??[]]))});let fe=[],Ge=[],Wa={};r.forEach(A=>{let{element:j,player:K,instruction:me}=A;if(t.has(j)){if(m.has(j)){K.onDestroy(()=>Pt(j,me.toStyles)),K.disabled=!0,K.overrideTotalTime(me.totalTime),a.push(K);return}let Ue=Wa;if(et.size>1){let _t=j,dn=[];for(;_t=_t.parentNode;){let Ce=et.get(_t);if(Ce){Ue=Ce;break}dn.push(_t)}dn.forEach(Ce=>et.set(Ce,Ue))}let Gt=this._buildAnimation(K.namespaceId,me,Qe,o,y,$);if(K.setRealPlayer(Gt),Ue===Wa)fe.push(K);else{let _t=this.playersByElement.get(Ue);_t&&_t.length&&(K.parentPlayer=on(_t)),a.push(K)}}else bn(j,me.fromStyles),K.onDestroy(()=>Pt(j,me.toStyles)),Ge.push(K),m.has(j)&&a.push(K)}),Ge.forEach(A=>{let j=o.get(A.element);if(j&&j.length){let K=on(j);A.setRealPlayer(K)}}),a.forEach(A=>{A.parentPlayer?A.syncPlayerEvents(A.parentPlayer):A.destroy()});for(let A=0;A<I.length;A++){let j=I[A],K=j[Lt];if(_i(j,ho),K&&K.hasAnimation)continue;let me=[];if(s.size){let Gt=s.get(j);Gt&&Gt.length&&me.push(...Gt);let _t=this.driver.query(j,fo,!0);for(let dn=0;dn<_t.length;dn++){let Ce=s.get(_t[dn]);Ce&&Ce.length&&me.push(...Ce)}}let Ue=me.filter(Gt=>!Gt.destroyed);Ue.length?Th(this,j,Ue):this.processLeaveNode(j)}return I.length=0,fe.forEach(A=>{this.players.push(A),A.onDone(()=>{A.destroy();let j=this.players.indexOf(A);this.players.splice(j,1)}),A.play()}),fe}afterFlush(n){this._flushFns.push(n)}afterFlushAnimationsDone(n){this._whenQuietFns.push(n)}_getPreviousPlayers(n,e,t,a,o){let r=[];if(e){let s=this.playersByQueriedElement.get(n);s&&(r=s)}else{let s=this.playersByElement.get(n);if(s){let l=!o||o==la;s.forEach(d=>{d.queued||!l&&d.triggerName!=a||r.push(d)})}}return(t||a)&&(r=r.filter(s=>!(t&&t!=s.namespaceId||a&&a!=s.triggerName))),r}_beforeAnimationBuild(n,e,t){let a=e.triggerName,o=e.element,r=e.isRemovalTransition?void 0:n,s=e.isRemovalTransition?void 0:a;for(let l of e.timelines){let d=l.element,m=d!==o,u=gt(t,d,[]);this._getPreviousPlayers(d,m,r,s,e.toState).forEach(p=>{let b=p.getRealPlayer();b.beforeDestroy&&b.beforeDestroy(),p.destroy(),u.push(p)})}bn(o,e.fromStyles)}_buildAnimation(n,e,t,a,o,r){let s=e.triggerName,l=e.element,d=[],m=new Set,u=new Set,_=e.timelines.map(b=>{let v=b.element;m.add(v);let I=v[Lt];if(I&&I.removedBeforeQueried)return new an(b.duration,b.delay);let ee=v!==l,be=Rh((t.get(v)||Mh).map(Qe=>Qe.getRealPlayer())).filter(Qe=>{let et=Qe;return et.element?et.element===v:!1}),Ne=o.get(v),ze=r.get(v),cn=ss(this._normalizer,b.keyframes,Ne,ze),wt=this._buildPlayer(b,cn,be);if(b.subTimeline&&a&&u.add(v),ee){let Qe=new ma(n,s,v);Qe.setRealPlayer(wt),d.push(Qe)}return wt});d.forEach(b=>{gt(this.playersByQueriedElement,b.element,[]).push(b),b.onDone(()=>Eh(this.playersByQueriedElement,b.element,b))}),m.forEach(b=>Nt(b,ps));let p=on(_);return p.onDestroy(()=>{m.forEach(b=>_i(b,ps)),Pt(l,e.toStyles)}),u.forEach(b=>{gt(a,b,[]).push(p)}),p}_buildPlayer(n,e,t){return e.length>0?this.driver.animate(n.element,e,n.duration,n.delay,n.easing,t):new an(n.duration,n.delay)}},ma=class{namespaceId;triggerName;element;_player=new an;_containsRealPlayer=!1;_queuedCallbacks=new Map;destroyed=!1;parentPlayer=null;markedForDestroy=!1;disabled=!1;queued=!0;totalTime=0;constructor(n,e,t){this.namespaceId=n,this.triggerName=e,this.element=t}setRealPlayer(n){this._containsRealPlayer||(this._player=n,this._queuedCallbacks.forEach((e,t)=>{e.forEach(a=>mo(n,t,void 0,a))}),this._queuedCallbacks.clear(),this._containsRealPlayer=!0,this.overrideTotalTime(n.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(n){this.totalTime=n}syncPlayerEvents(n){let e=this._player;e.triggerCallback&&n.onStart(()=>e.triggerCallback("start")),n.onDone(()=>this.finish()),n.onDestroy(()=>this.destroy())}_queueEvent(n,e){gt(this._queuedCallbacks,n,[]).push(e)}onDone(n){this.queued&&this._queueEvent("done",n),this._player.onDone(n)}onStart(n){this.queued&&this._queueEvent("start",n),this._player.onStart(n)}onDestroy(n){this.queued&&this._queueEvent("destroy",n),this._player.onDestroy(n)}init(){this._player.init()}hasStarted(){return this.queued?!1:this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(n){this.queued||this._player.setPosition(n)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(n){let e=this._player;e.triggerCallback&&e.triggerCallback(n)}};function Eh(i,n,e){let t=i.get(n);if(t){if(t.length){let a=t.indexOf(e);t.splice(a,1)}t.length==0&&i.delete(n)}return t}function Dh(i){return i??null}function yo(i){return i&&i.nodeType===1}function Ih(i){return i=="start"||i=="done"}function fd(i,n){let e=i.style.display;return i.style.display=n??"none",e}function gd(i,n,e,t,a){let o=[];e.forEach(l=>o.push(fd(l)));let r=[];t.forEach((l,d)=>{let m=new Map;l.forEach(u=>{let _=n.computeStyle(d,u,a);m.set(u,_),(!_||_.length==0)&&(d[Lt]=Nh,r.push(d))}),i.set(d,m)});let s=0;return e.forEach(l=>fd(l,o[s++])),r}function bd(i,n){let e=new Map;if(i.forEach(s=>e.set(s,[])),n.length==0)return e;let t=1,a=new Set(n),o=new Map;function r(s){if(!s)return t;let l=o.get(s);if(l)return l;let d=s.parentNode;return e.has(d)?l=d:a.has(d)?l=t:l=r(d),o.set(s,l),l}return n.forEach(s=>{let l=r(s);l!==t&&e.get(l).push(s)}),e}function Nt(i,n){i.classList?.add(n)}function _i(i,n){i.classList?.remove(n)}function Th(i,n,e){on(e).onDone(()=>i.processLeaveNode(n))}function Rh(i){let n=[];return Sd(i,n),n}function Sd(i,n){for(let e=0;e<i.length;e++){let t=i[e];t instanceof fi?Sd(t.players,n):n.push(t)}}function Ah(i,n){let e=Object.keys(i),t=Object.keys(n);if(e.length!=t.length)return!1;for(let a=0;a<e.length;a++){let o=e[a];if(!Object.hasOwn(n,o)||i[o]!==n[o])return!1}return!0}function _d(i,n,e){let t=e.get(i);if(!t)return!1;let a=n.get(i);return a?t.forEach(o=>a.add(o)):n.set(i,t),e.delete(i),!0}var vi=class{_driver;_normalizer;_transitionEngine;_timelineEngine;_triggerCache={};onRemovalComplete=(n,e)=>{};constructor(n,e,t){this._driver=e,this._normalizer=t,this._transitionEngine=new Ds(n.body,e,t),this._timelineEngine=new Ns(n.body,e,t),this._transitionEngine.onRemovalComplete=(a,o)=>this.onRemovalComplete(a,o)}registerTrigger(n,e,t,a,o){let r=n+"-"+a,s=this._triggerCache[r];if(!s){let l=[],d=[],m=yd(this._driver,o,l,d);if(l.length)throw $c(a,l);s=vh(a,m,this._normalizer),this._triggerCache[r]=s}this._transitionEngine.registerTrigger(e,a,s)}register(n,e){this._transitionEngine.register(n,e)}destroy(n,e){this._transitionEngine.destroy(n,e)}onInsert(n,e,t,a){this._transitionEngine.insertNode(n,e,t,a)}onRemove(n,e,t){this._transitionEngine.removeNode(n,e,t)}disableAnimations(n,e){this._transitionEngine.markElementAsDisabled(n,e)}process(n,e,t,a){if(t.charAt(0)=="@"){let[o,r]=ls(t),s=a;this._timelineEngine.command(o,e,r,s)}else this._transitionEngine.trigger(n,e,t,a)}listen(n,e,t,a,o){if(t.charAt(0)=="@"){let[r,s]=ls(t);return this._timelineEngine.listen(r,e,s,o)}return this._transitionEngine.listen(n,e,t,a,o)}flush(n=-1){this._transitionEngine.flush(n)}get players(){return[...this._transitionEngine.players,...this._timelineEngine.players]}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}afterFlushAnimationsDone(n){this._transitionEngine.afterFlushAnimationsDone(n)}};function Oh(i,n){let e=null,t=null;return Array.isArray(n)&&n.length?(e=vs(n[0]),n.length>1&&(t=vs(n[n.length-1]))):n instanceof Map&&(e=vs(n)),e||t?new Fh(i,e,t):null}var Fh=(()=>{class i{_element;_startStyles;_endStyles;static initialStylesByElement=new WeakMap;_state=0;_initialStyles;constructor(e,t,a){this._element=e,this._startStyles=t,this._endStyles=a;let o=i.initialStylesByElement.get(e);o||i.initialStylesByElement.set(e,o=new Map),this._initialStyles=o}start(){this._state<1&&(this._startStyles&&Pt(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(Pt(this._element,this._initialStyles),this._endStyles&&(Pt(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(i.initialStylesByElement.delete(this._element),this._startStyles&&(bn(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(bn(this._element,this._endStyles),this._endStyles=null),Pt(this._element,this._initialStyles),this._state=3)}}return i})();function vs(i){let n=null;return i.forEach((e,t)=>{Ph(t)&&(n=n||new Map,n.set(t,e))}),n}function Ph(i){return i==="display"||i==="position"}var No=class{element;keyframes;options;_specialStyles;_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_duration;_delay;_initialized=!1;_finished=!1;_started=!1;_destroyed=!1;_finalKeyframe;_originalOnDoneFns=[];_originalOnStartFns=[];domPlayer=null;time=0;parentPlayer=null;currentSnapshot=new Map;constructor(n,e,t,a){this.element=n,this.keyframes=e,this.options=t,this._specialStyles=a,this._duration=t.duration,this._delay=t.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(n=>n()),this._onDoneFns=[])}init(){this._buildPlayer()&&this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return this.domPlayer;this._initialized=!0;let n=this.keyframes,e=this._triggerWebAnimation(this.element,n,this.options);if(!e)return this._onFinish(),null;this.domPlayer=e,this._finalKeyframe=n.length?n[n.length-1]:new Map;let t=()=>this._onFinish();return e.addEventListener("finish",t),this.onDestroy(()=>{e.removeEventListener("finish",t)}),e}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer?.pause()}_convertKeyframesToObject(n){let e=[];return n.forEach(t=>{e.push(Object.fromEntries(t))}),e}_triggerWebAnimation(n,e,t){let a=this._convertKeyframesToObject(e);try{return n.animate(a,t)}catch(o){return null}}onStart(n){this._originalOnStartFns.push(n),this._onStartFns.push(n)}onDone(n){this._originalOnDoneFns.push(n),this._onDoneFns.push(n)}onDestroy(n){this._onDestroyFns.push(n)}play(){let n=this._buildPlayer();n&&(this.hasStarted()||(this._onStartFns.forEach(e=>e()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),n.play())}pause(){this.init(),this.domPlayer?.pause()}finish(){this.init(),this.domPlayer&&(this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish())}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}_resetDomPlayerState(){this.domPlayer?.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(n=>n()),this._onDestroyFns=[])}setPosition(n){this.domPlayer||this.init(),this.domPlayer&&(this.domPlayer.currentTime=n*this.time)}getPosition(){return this.domPlayer?+(this.domPlayer.currentTime??0)/this.time:this._initialized?1:0}get totalTime(){return this._delay+this._duration}beforeDestroy(){let n=new Map;this.hasStarted()&&this._finalKeyframe.forEach((t,a)=>{a!=="offset"&&n.set(a,this._finished?t:bo(this.element,a))}),this.currentSnapshot=n}triggerCallback(n){let e=n==="start"?this._onStartFns:this._onDoneFns;e.forEach(t=>t()),e.length=0}},Eo=class{validateStyleProperty(n){return!0}validateAnimatableStyleProperty(n){return!0}containsElement(n,e){return cs(n,e)}getParentElement(n){return po(n)}query(n,e,t){return ds(n,e,t)}computeStyle(n,e,t){return bo(n,e)}animate(n,e,t,a,o,r=[]){let s=a==0?"both":"forwards",l={duration:t,delay:a,fill:s};o&&(l.easing=o);let d=new Map,m=r.filter(p=>p instanceof No);sd(t,a)&&m.forEach(p=>{p.currentSnapshot.forEach((b,v)=>d.set(v,b))});let u=od(e).map(p=>new Map(p));u=ld(n,u,d);let _=Oh(n,u);return new No(n,u,l,_)}};var xo="@",kd="@.disabled",Do=class{namespaceId;delegate;engine;_onDestroy;\u0275type=0;constructor(n,e,t,a){this.namespaceId=n,this.delegate=e,this.engine=t,this._onDestroy=a}get data(){return this.delegate.data}destroyNode(n){this.delegate.destroyNode?.(n)}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.engine.afterFlushAnimationsDone(()=>{queueMicrotask(()=>{this.delegate.destroy()})}),this._onDestroy?.()}createElement(n,e){return this.delegate.createElement(n,e)}createComment(n){return this.delegate.createComment(n)}createText(n){return this.delegate.createText(n)}appendChild(n,e){this.delegate.appendChild(n,e),this.engine.onInsert(this.namespaceId,e,n,!1)}insertBefore(n,e,t,a=!0){this.delegate.insertBefore(n,e,t),this.engine.onInsert(this.namespaceId,e,n,a)}removeChild(n,e,t,a){if(a){this.delegate.removeChild(n,e,t,a);return}this.parentNode(e)&&this.engine.onRemove(this.namespaceId,e,this.delegate)}selectRootElement(n,e){return this.delegate.selectRootElement(n,e)}parentNode(n){return this.delegate.parentNode(n)}nextSibling(n){return this.delegate.nextSibling(n)}setAttribute(n,e,t,a){this.delegate.setAttribute(n,e,t,a)}removeAttribute(n,e,t){this.delegate.removeAttribute(n,e,t)}addClass(n,e){this.delegate.addClass(n,e)}removeClass(n,e){this.delegate.removeClass(n,e)}setStyle(n,e,t,a){this.delegate.setStyle(n,e,t,a)}removeStyle(n,e,t){this.delegate.removeStyle(n,e,t)}setProperty(n,e,t){e.charAt(0)==xo&&e==kd?this.disableAnimations(n,!!t):this.delegate.setProperty(n,e,t)}setValue(n,e){this.delegate.setValue(n,e)}listen(n,e,t,a){return this.delegate.listen(n,e,t,a)}disableAnimations(n,e){this.engine.disableAnimations(n,e)}},Is=class extends Do{factory;constructor(n,e,t,a,o){super(e,t,a,o),this.factory=n,this.namespaceId=e}setProperty(n,e,t){e.charAt(0)==xo?e.charAt(1)=="."&&e==kd?(t=t===void 0?!0:!!t,this.disableAnimations(n,t)):this.engine.process(this.namespaceId,n,e.slice(1),t):this.delegate.setProperty(n,e,t)}listen(n,e,t,a){if(e.charAt(0)==xo){let o=Lh(n),r=e.slice(1),s="";return r.charAt(0)!=xo&&([r,s]=Vh(r)),this.engine.listen(this.namespaceId,o,r,s,l=>{let d=l._data||-1;this.factory.scheduleListenerCallback(d,t,l)})}return this.delegate.listen(n,e,t,a)}};function Lh(i){switch(i){case"body":return document.body;case"document":return document;case"window":return window;default:return i}}function Vh(i){let n=i.indexOf("."),e=i.substring(0,n),t=i.slice(n+1);return[e,t]}var Io=class{delegate;engine;_zone;_currentId=0;_microtaskId=1;_animationCallbacksBuffer=[];_rendererCache=new Map;_cdRecurDepth=0;constructor(n,e,t){this.delegate=n,this.engine=e,this._zone=t,e.onRemovalComplete=(a,o)=>{o?.removeChild(null,a)}}createRenderer(n,e){let a=this.delegate.createRenderer(n,e);if(!n||!e?.data?.animation){let d=this._rendererCache,m=d.get(a);if(!m){let u=()=>d.delete(a);m=new Do("",a,this.engine,u),d.set(a,m)}return m}let o=e.id,r=e.id+"-"+this._currentId;this._currentId++,this.engine.register(r,n);let s=d=>{Array.isArray(d)?d.forEach(s):this.engine.registerTrigger(o,r,n,d.name,d)};return e.data.animation.forEach(s),new Is(this,r,a,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){queueMicrotask(()=>{this._microtaskId++})}scheduleListenerCallback(n,e,t){if(n>=0&&n<this._microtaskId){this._zone.run(()=>e(t));return}let a=this._animationCallbacksBuffer;a.length==0&&queueMicrotask(()=>{this._zone.run(()=>{a.forEach(o=>{let[r,s]=o;r(s)}),this._animationCallbacksBuffer=[]})}),a.push([e,t])}end(){this._cdRecurDepth--,this._cdRecurDepth==0&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}componentReplaced(n){this.engine.flush(),this.delegate.componentReplaced?.(n)}};var zh=(()=>{class i extends vi{constructor(e,t,a){super(e,t,a)}ngOnDestroy(){this.flush()}static \u0275fac=function(t){return new(t||i)(Jt(ce),Jt(Fn),Jt(Pn))};static \u0275prov=Le({token:i,factory:i.\u0275fac})}return i})();function Hh(){return new wo}function jh(){return new Io(c(fc),c(vi),c(W))}var Md=[{provide:Pn,useFactory:Hh},{provide:vi,useClass:zh},{provide:st,useFactory:jh}],x_=[{provide:Fn,useClass:Ts},{provide:Mn,useValue:"NoopAnimations"},...Md],Gh=[{provide:Fn,useFactory:()=>new Eo},{provide:Mn,useFactory:()=>"BrowserAnimations"},...Md];function Nd(){return nc("NgEagerAnimations"),[...Gh]}var Ed=(()=>{class i{constructor(){this.cachedData={}}setData(e,t){this.cachedData[e]=t}getData(e){return this.cachedData[e]}hasKey(e){return this.cachedData[e]!==void 0&&this.cachedData[e]!==null}clearCache(e){delete this.cachedData[e]}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=Le({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var To=(()=>{class i{constructor(){this.router=c(wc),this.nodes=oe([]),this.maxNodes=10}removeNode(e){this.nodes.set(this.nodes().filter(t=>t.name!==e)),this.router.navigate([""])}addNode(e,t){let a=this.nodes();if(a.some(r=>JSON.stringify(r.name)===JSON.stringify(e)))return;let o=[...a,{name:e,url:t}];this.nodes.set(o.length>this.maxNodes?o.slice(-this.maxNodes):o)}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=Le({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var Ro=(()=>{class i{constructor(){this.baseUrl="https://kerrders.ovh/api",this.httpClient=c(Rn),this.cachingService=c(Ed),this.sidenavService=c(To)}cachedGetRequest(e){return this.cachingService.hasKey(e)?Se(this.cachingService.getData(e)):this.httpClient.get(e).pipe(ye(t=>(this.cachingService.setData(e,t),t)))}getPokemons(e){return this.cachedGetRequest(`${this.baseUrl}/pokemon?${e.toString()}`)}getPokemon(e){return this.cachedGetRequest(`${this.baseUrl}/pokemon/${e}`).pipe(qt(t=>{let a;return t.species.evolution_chain_id?a=this.cachedGetRequest(`${this.baseUrl}/evolution/${t.species.evolution_chain_id}`):a=Se([]),a.pipe(ye(o=>(t.evolution=o,this.sidenavService.addNode(t.species_names,`pokemon/${e}`),t)))}))}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=Le({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var Dd=(()=>{class i{constructor(){this.pokeApiService=c(Ro)}resolve(e){let t=e.paramMap.get("name");return t?this.pokeApiService.getPokemon(t):Se()}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=Le({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var yi;(function(i){i[i.ENGLISH=9]="ENGLISH",i[i.GERMAN=6]="GERMAN"})(yi||(yi={}));var Yt=(()=>{class i{constructor(){this.lang=oe(this.getLanguage()),this.langId=Ke(()=>this.languageIds[this.lang()]??yi.ENGLISH),this.fallbackLanguage="en",this.allowedLanguages=["de","en"],this.languageIds={de:yi.GERMAN,en:yi.ENGLISH},this.destroyRef=c(St),this.translate=c(pi),this.lang.set(this.getLanguage()),this.translate.onLangChange.pipe(nn(this.destroyRef)).subscribe(()=>{this.lang.set(this.getLanguage())})}getAvailableLanguages(){return this.languageIds}saveLanguage(e){localStorage.setItem("lang",e)}getLanguage(){let e=localStorage.getItem("lang")??navigator.language;return this.allowedLanguages?.includes(e)?e:this.fallbackLanguage}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=Le({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var ua=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},pa=class extends ua{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(n,e,t,a,o,r){super(),this.component=n,this.viewContainerRef=e,this.injector=t,this.projectableNodes=a,this.bindings=o||null,this.directives=r||null}},_n=class extends ua{templateRef;viewContainerRef;context;injector;constructor(n,e,t,a){super(),this.templateRef=n,this.viewContainerRef=e,this.context=t,this.injector=a}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},As=class extends ua{element;constructor(n){super(),this.element=n instanceof D?n.nativeElement:n}},Ao=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof pa)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof _n)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof As)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Oo=class extends Ao{outletElement;_appRef;_defaultInjector;constructor(n,e,t){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=t}attachComponentPortal(n){let e;if(n.viewContainerRef){let t=n.injector||n.viewContainerRef.injector,a=t.get(es,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:t,ngModuleRef:a,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,a=n.injector||this._defaultInjector||pe.NULL,o=a.get(ai,t.injector);e=no(n.component,{elementInjector:a,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,t=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return t.rootNodes.forEach(a=>this.outletElement.appendChild(a)),t.detectChanges(),this.setDisposeFn(()=>{let a=e.indexOf(t);a!==-1&&e.remove(a)}),this._attachedPortal=n,t}attachDomPortal=n=>{let e=n.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}},Id=(()=>{class i extends _n{constructor(){let e=c(rt),t=c(it);super(e,t)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=x({type:i,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[Z]})}return i})(),Os=(()=>{class i extends Ao{_moduleRef=c(es,{optional:!0});_document=c(ce);_viewContainerRef=c(it);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new Q;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,a=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0});return t!==this._viewContainerRef&&this._insertContent(a.hostView.rootNodes[0]),super.setDisposeFn(()=>a.destroy()),this._attachedPortal=e,this._attachedRef=a,this.attached.emit(a),a}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let a=this._document.createComment("dom-portal");e.setAttachedHost(this),t.parentNode.insertBefore(a,t),this._insertContent(t),this._attachedPortal=e,super.setDisposeFn(()=>a.parentNode?.replaceChild(t,a))};_insertContent(e){let t=this._viewContainerRef.element.nativeElement;t.nodeType===t.ELEMENT_NODE?t.appendChild(e):t.parentNode?.insertBefore(e,t)}static \u0275fac=(()=>{let e;return function(a){return(e||(e=ue(i)))(a||i)}})();static \u0275dir=x({type:i,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[Z]})}return i})(),Td=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=G({})}return i})();var Fo=new WeakMap,Oe=(()=>{class i{_appRef;_injector=c(pe);_environmentInjector=c(ai);load(e){let t=this._appRef=this._appRef||this._injector.get(ri),a=Fo.get(t);a||(a={loaders:new Set,refs:[]},Fo.set(t,a),t.onDestroy(()=>{Fo.get(t)?.refs.forEach(o=>o.destroy()),Fo.delete(t)})),a.loaders.has(e)||(a.loaders.add(e),a.refs.push(no(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ie({token:i,factory:i.\u0275fac})}return i})();var Ln=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,a){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return i})(),Po;function Uh(){if(Po===void 0&&(Po=null,typeof window<"u")){let i=window;if(i.trustedTypes!==void 0)try{Po=i.trustedTypes.createPolicy("angular#components",{createHTML:n=>n})}catch(n){console.error(n)}}return Po}function Vn(i){return Uh()?.createHTML(i)||i}function Rd(i,n,e){let t=e.sanitize(mn.HTML,n);i.innerHTML=Vn(t||"")}var Vt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,a){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return i})();function ha(i){return i.buttons===0||i.detail===0}function fa(i){let n=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var Fs;function Ad(){if(Fs==null){let i=typeof document<"u"?document.head:null;Fs=!!(i&&(i.createShadowRoot||i.attachShadow))}return Fs}function Ps(i){if(Ad()){let n=i.getRootNode?i.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function Je(i){if(i.composedPath)try{return i.composedPath()[0]}catch(n){}return i.target}var Ls;try{Ls=typeof Intl<"u"&&Intl.v8BreakIterator}catch(i){Ls=!1}var de=(()=>{class i{_platformId=c(tc);isBrowser=this._platformId?hc(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Ls)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static \u0275fac=function(t){return new(t||i)};static \u0275prov=ie({token:i,factory:i.\u0275fac})}return i})();var ga;function Od(){if(ga==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>ga=!0}))}finally{ga=ga||!1}return ga}function xi(i){return Od()?i:!!i.capture}function vn(i,n=0){return Fd(i)?Number(i):arguments.length===2?n:0}function Fd(i){return!isNaN(parseFloat(i))&&!isNaN(Number(i))}function mt(i){return i instanceof D?i.nativeElement:i}var Pd=new w("cdk-input-modality-detector-options"),Ld={ignoreKeys:[18,17,224,91,16]},Vd=650,Vs={passive:!0,capture:!0},Bd=(()=>{class i{_platform=c(de);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Ji(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Je(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Vd||(this._modality.next(ha(e)?"keyboard":"mouse"),this._mostRecentTarget=Je(e))};_onTouchstart=e=>{if(fa(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Je(e)};constructor(){let e=c(W),t=c(ce),a=c(Pd,{optional:!0});if(this._options=Y(Y({},Ld),a),this.modalityDetected=this._modality.pipe(ni(1)),this.modalityChanged=this.modalityDetected.pipe(na()),this._platform.isBrowser){let o=c(st).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(t,"keydown",this._onKeydown,Vs),o.listen(t,"mousedown",this._onMousedown,Vs),o.listen(t,"touchstart",this._onTouchstart,Vs)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ie({token:i,factory:i.\u0275fac})}return i})(),ba=(function(i){return i[i.IMMEDIATE=0]="IMMEDIATE",i[i.EVENTUAL=1]="EVENTUAL",i})(ba||{}),zd=new w("cdk-focus-monitor-default-options"),Lo=xi({passive:!0,capture:!0}),Bt=(()=>{class i{_ngZone=c(W);_platform=c(de);_inputModalityDetector=c(Bd);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=c(ce);_stopInputModalityDetector=new R;constructor(){let e=c(zd,{optional:!0});this._detectionMode=e?.detectionMode||ba.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=Je(e);for(let a=t;a;a=a.parentElement)e.type==="focus"?this._onFocus(e,a):this._onBlur(e,a)};monitor(e,t=!1){let a=mt(e);if(!this._platform.isBrowser||a.nodeType!==1)return Se();let o=Ps(a)||this._document,r=this._elementInfo.get(a);if(r)return t&&(r.checkChildren=!0),r.subject;let s={checkChildren:t,subject:new R,rootNode:o};return this._elementInfo.set(a,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let t=mt(e),a=this._elementInfo.get(t);a&&(a.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(a))}focusVia(e,t,a){let o=mt(e),r=this._document.activeElement;o===r?this._getClosestElementsInfo(o).forEach(([s,l])=>this._originChanged(s,t,l)):(this._setOrigin(t),typeof o.focus=="function"&&o.focus(a))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===ba.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===ba.IMMEDIATE){clearTimeout(this._originTimeoutId);let a=this._originFromTouchInteraction?Vd:1;this._originTimeoutId=setTimeout(()=>this._origin=null,a)}})}_onFocus(e,t){let a=this._elementInfo.get(t),o=Je(e);!a||!a.checkChildren&&t!==o||this._originChanged(t,this._getFocusOrigin(o),a)}_onBlur(e,t){let a=this._elementInfo.get(t);!a||a.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(a,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,a=this._rootNodeFocusListenerCount.get(t)||0;a||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,Lo),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,Lo)}),this._rootNodeFocusListenerCount.set(t,a+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(te(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let a=this._rootNodeFocusListenerCount.get(t);a>1?this._rootNodeFocusListenerCount.set(t,a-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Lo),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Lo),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,a){this._setClasses(e,t),this._emitOrigin(a,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((a,o)=>{(o===e||a.checkChildren&&o.contains(e))&&t.push([o,a])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:a}=this._inputModalityDetector;if(a!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let r=0;r<o.length;r++)if(o[r].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ie({token:i,factory:i.\u0275fac})}return i})(),Bs=(()=>{class i{_elementRef=c(D);_focusMonitor=c(Bt);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new Q;get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(t=>{this._focusOrigin=t,this.cdkFocusChange.emit(t)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=x({type:i,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return i})();function wi(i){return Array.isArray(i)?i:[i]}var Hd=new Set,Bn,Ci=(()=>{class i{_platform=c(de);_nonce=c(Zr,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):qh}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&Wh(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ie({token:i,factory:i.\u0275fac})}return i})();function Wh(i,n){if(!Hd.has(i))try{Bn||(Bn=document.createElement("style"),n&&Bn.setAttribute("nonce",n),Bn.setAttribute("type","text/css"),document.head.appendChild(Bn)),Bn.sheet&&(Bn.sheet.insertRule(`@media ${i.replace(/[{}]/g,"")} {body{ }}`,0),Hd.add(i))}catch(e){console.error(e)}}function qh(i){return{matches:i==="all"||i==="",media:i,addListener:()=>{},removeListener:()=>{}}}var zs=(()=>{class i{_mediaMatcher=c(Ci);_zone=c(W);_queries=new Map;_destroySubject=new R;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return jd(wi(e)).some(a=>this._registerQuery(a).mql.matches)}observe(e){let a=jd(wi(e)).map(r=>this._registerQuery(r).observable),o=Jn(a);return o=Yl(o.pipe(ti(1)),o.pipe(ni(1),Wt(0))),o.pipe(ye(r=>{let s={matches:!1,breakpoints:{}};return r.forEach(({matches:l,query:d})=>{s.matches=s.matches||l,s.breakpoints[d]=l}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),o={observable:new Ut(r=>{let s=l=>this._zone.run(()=>r.next(l));return t.addListener(s),()=>{t.removeListener(s)}}).pipe(nt(t),ye(({matches:r})=>({query:e,matches:r})),te(this._destroySubject)),mql:t};return this._queries.set(e,o),o}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ie({token:i,factory:i.\u0275fac})}return i})();function jd(i){return i.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}function $h(i){if(i.type==="characterData"&&i.target instanceof Comment)return!0;if(i.type==="childList"){for(let n=0;n<i.addedNodes.length;n++)if(!(i.addedNodes[n]instanceof Comment))return!1;for(let n=0;n<i.removedNodes.length;n++)if(!(i.removedNodes[n]instanceof Comment))return!1;return!0}return!1}var Gd=(()=>{class i{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ie({token:i,factory:i.\u0275fac})}return i})(),Ud=(()=>{class i{_mutationObserverFactory=c(Gd);_observedElements=new Map;_ngZone=c(W);ngOnDestroy(){this._observedElements.forEach((e,t)=>this._cleanupObserver(t))}observe(e){let t=mt(e);return new Ut(a=>{let r=this._observeElement(t).pipe(ye(s=>s.filter(l=>!$h(l))),Xe(s=>!!s.length)).subscribe(s=>{this._ngZone.run(()=>{a.next(s)})});return()=>{r.unsubscribe(),this._unobserveElement(t)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let t=new R,a=this._mutationObserverFactory.create(o=>t.next(o));a&&a.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:a,stream:t,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:t,stream:a}=this._observedElements.get(e);t&&t.disconnect(),a.complete(),this._observedElements.delete(e)}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ie({token:i,factory:i.\u0275fac})}return i})(),Wd=(()=>{class i{_contentObserver=c(Ud);_elementRef=c(D);event=new Q;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=vn(e),this._subscribe()}_debounce;_currentSubscription=null;ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(Wt(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=x({type:i,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",S],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return i})(),Vo=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=G({providers:[Gd]})}return i})();var Kd=new w("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),Yd=new w("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),Kh=0,js=(()=>{class i{_ngZone=c(W);_defaultOptions=c(Yd,{optional:!0});_liveElement;_document=c(ce);_sanitizer=c(oo);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=c(Kd,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...t){let a=this._defaultOptions,o,r;return t.length===1&&typeof t[0]=="number"?r=t[0]:[o,r]=t,this.clear(),clearTimeout(this._previousTimeout),o||(o=a&&a.politeness?a.politeness:"polite"),r==null&&a&&(r=a.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(s=>this._currentResolve=s)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:Rd(this._liveElement,e,this._sanitizer),typeof r=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),r)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",t=this._document.getElementsByClassName(e),a=this._document.createElement("div");for(let o=0;o<t.length;o++)t[o].remove();return a.classList.add(e),a.classList.add("cdk-visually-hidden"),a.setAttribute("aria-atomic","true"),a.setAttribute("aria-live","polite"),a.id=`cdk-live-announcer-${Kh++}`,this._document.body.appendChild(a),a}_exposeAnnouncerToModals(e){let t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let a=0;a<t.length;a++){let o=t[a],r=o.getAttribute("aria-owns");r?r.indexOf(e)===-1&&o.setAttribute("aria-owns",r+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ie({token:i,factory:i.\u0275fac})}return i})();var yn=(function(i){return i[i.NONE=0]="NONE",i[i.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",i[i.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",i})(yn||{}),qd="cdk-high-contrast-black-on-white",$d="cdk-high-contrast-white-on-black",Hs="cdk-high-contrast-active",Qd=(()=>{class i{_platform=c(de);_hasCheckedHighContrastMode=!1;_document=c(ce);_breakpointSubscription;constructor(){this._breakpointSubscription=c(zs).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return yn.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let t=this._document.defaultView||window,a=t&&t.getComputedStyle?t.getComputedStyle(e):null,o=(a&&a.backgroundColor||"").replace(/ /g,"");switch(e.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return yn.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return yn.BLACK_ON_WHITE}return yn.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(Hs,qd,$d),this._hasCheckedHighContrastMode=!0;let t=this.getHighContrastMode();t===yn.BLACK_ON_WHITE?e.add(Hs,qd):t===yn.WHITE_ON_BLACK&&e.add(Hs,$d)}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ie({token:i,factory:i.\u0275fac})}return i})(),Gs=(()=>{class i{constructor(){c(Qd)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=G({imports:[Vo]})}return i})();var Yh=200,Bo=class{_letterKeyStream=new R;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new R;selectedItem=this._selectedItem;constructor(n,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:Yh;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(ii(e=>this._pressedLetters.push(e)),Wt(n),Xe(()=>this._pressedLetters.length>0),ye(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let a=(this._selectedItemIndex+t)%this._items.length,o=this._items[a];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function at(i,...n){return n.length?n.some(e=>i[e]):i.altKey||i.shiftKey||i.ctrlKey||i.metaKey}var Si=class{_items;_activeItemIndex=oe(-1);_activeItem=oe(null);_wrap=!1;_typeaheadSubscription=Ee.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof Nn?this._itemChangesSubscription=n.changes.subscribe(t=>this._itemsChanged(t.toArray())):At(n)&&(this._effectRef=kt(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new R;change=new R;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Bo(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,a=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&a){this.setNextItemActive();break}else return;case 38:if(this._vertical&&a){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&a){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&a){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&a){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&a){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&a){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&a){let o=this._activeItemIndex()+this._pageUpAndDown.delta,r=this._getItemsArray().length;this._setActiveItemByIndex(o<r?o:r-1,-1);break}else return;default:(a||at(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),t=typeof n=="number"?n:e.indexOf(n),a=e[t];this._activeItem.set(a??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let a=(this._activeItemIndex()+n*t+e.length)%e.length,o=e[a];if(!this._skipPredicateFn(o)){this.setActiveItem(a);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let t=this._getItemsArray();if(t[n]){for(;this._skipPredicateFn(t[n]);)if(n+=e,!t[n])return;this.setActiveItem(n)}}_getItemsArray(){return At(this._items)?this._items():this._items instanceof Nn?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let t=n.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var ya=class extends Si{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles()}};var zn=class extends Si{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var Zd=new Map,Fe=class i{_appId=c(Xa);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){this._appId!=="ng"&&(n+=this._appId);let t=Zd.get(n);return t===void 0?t=0:t++,Zd.set(n,t),`${n}${e?i._infix+"-":""}${t}`}static \u0275fac=function(e){return new(e||i)};static \u0275prov=ie({token:i,factory:i.\u0275fac})};var em=" ";function Qh(i,n,e){let t=Go(i,n);e=e.trim(),!t.some(a=>a.trim()===e)&&(t.push(e),i.setAttribute(n,t.join(em)))}function Xh(i,n,e){let t=Go(i,n);e=e.trim();let a=t.filter(o=>o!==e);a.length?i.setAttribute(n,a.join(em)):i.removeAttribute(n)}function Go(i,n){return i.getAttribute(n)?.match(/\S+/g)??[]}var tm="cdk-describedby-message",jo="cdk-describedby-host",Ws=0,nm=(()=>{class i{_platform=c(de);_document=c(ce);_messageRegistry=new Map;_messagesContainer=null;_id=`${Ws++}`;constructor(){c(Oe).load(Ln),this._id=c(Xa)+"-"+Ws++}describe(e,t,a){if(!this._canBeDescribed(e,t))return;let o=Us(t,a);typeof t!="string"?(Jd(t,this._id),this._messageRegistry.set(o,{messageElement:t,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(t,a),this._isElementDescribedByMessage(e,o)||this._addMessageReference(e,o)}removeDescription(e,t,a){if(!t||!this._isElementNode(e))return;let o=Us(t,a);if(this._isElementDescribedByMessage(e,o)&&this._removeMessageReference(e,o),typeof t=="string"){let r=this._messageRegistry.get(o);r&&r.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${jo}="${this._id}"]`);for(let t=0;t<e.length;t++)this._removeCdkDescribedByReferenceIds(e[t]),e[t].removeAttribute(jo);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,t){let a=this._document.createElement("div");Jd(a,this._id),a.textContent=e,t&&a.setAttribute("role",t),this._createMessagesContainer(),this._messagesContainer.appendChild(a),this._messageRegistry.set(Us(e,t),{messageElement:a,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",t=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let o=0;o<t.length;o++)t[o].remove();let a=this._document.createElement("div");a.style.visibility="hidden",a.classList.add(e),a.classList.add("cdk-visually-hidden"),this._platform.isBrowser||a.setAttribute("platform","server"),this._document.body.appendChild(a),this._messagesContainer=a}_removeCdkDescribedByReferenceIds(e){let t=Go(e,"aria-describedby").filter(a=>a.indexOf(tm)!=0);e.setAttribute("aria-describedby",t.join(" "))}_addMessageReference(e,t){let a=this._messageRegistry.get(t);Qh(e,"aria-describedby",a.messageElement.id),e.setAttribute(jo,this._id),a.referenceCount++}_removeMessageReference(e,t){let a=this._messageRegistry.get(t);a.referenceCount--,Xh(e,"aria-describedby",a.messageElement.id),e.removeAttribute(jo)}_isElementDescribedByMessage(e,t){let a=Go(e,"aria-describedby"),o=this._messageRegistry.get(t),r=o&&o.messageElement.id;return!!r&&a.indexOf(r)!=-1}_canBeDescribed(e,t){if(!this._isElementNode(e))return!1;if(t&&typeof t=="object")return!0;let a=t==null?"":`${t}`.trim(),o=e.getAttribute("aria-label");return a?!o||o.trim()!==a:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ie({token:i,factory:i.\u0275fac})}return i})();function Us(i,n){return typeof i=="string"?`${n||""}/${i}`:i}function Jd(i,n){i.id||(i.id=`${tm}-${n}-${Ws++}`)}var qs=class{_box;_destroyed=new R;_resizeSubject=new R;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new Ut(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),t.unsubscribe(),this._elementObservables.delete(n)}}).pipe(ye(e=>e.filter(t=>t.target===n)),Xe(e=>e.length>0),Xr({bufferSize:1,refCount:!0}),te(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Uo=(()=>{class i{_cleanupErrorListener;_observers=new Map;_ngZone=c(W);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let a=t?.box||"content-box";return this._observers.has(a)||this._observers.set(a,new qs(a)),this._observers.get(a).observe(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ie({token:i,factory:i.\u0275fac})}return i})();var zt=(function(i){return i[i.NORMAL=0]="NORMAL",i[i.NEGATED=1]="NEGATED",i[i.INVERTED=2]="INVERTED",i})(zt||{}),Wo,Hn;function qo(){if(Hn==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Hn=!1,Hn;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Hn=!0;else{let i=Element.prototype.scrollTo;i?Hn=!/\{\s*\[native code\]\s*\}/.test(i.toString()):Hn=!1}}return Hn}function ki(){if(typeof document!="object"||!document)return zt.NORMAL;if(Wo==null){let i=document.createElement("div"),n=i.style;i.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let e=document.createElement("div"),t=e.style;t.width="2px",t.height="1px",i.appendChild(e),document.body.appendChild(i),Wo=zt.NORMAL,i.scrollLeft===0&&(i.scrollLeft=1,Wo=i.scrollLeft===0?zt.NEGATED:zt.INVERTED),i.remove()}return Wo}function $s(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var Mi,im=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Ks(){if(Mi)return Mi;if(typeof document!="object"||!document)return Mi=new Set(im),Mi;let i=document.createElement("input");return Mi=new Set(im.filter(n=>(i.setAttribute("type",n),i.type===n))),Mi}function $o(i){return i&&typeof i.connect=="function"&&!(i instanceof $l)}var Ht=(function(i){return i[i.REPLACED=0]="REPLACED",i[i.INSERTED=1]="INSERTED",i[i.MOVED=2]="MOVED",i[i.REMOVED=3]="REMOVED",i})(Ht||{}),Ko=class{viewCacheSize=20;_viewCache=[];applyChanges(n,e,t,a,o){n.forEachOperation((r,s,l)=>{let d,m;if(r.previousIndex==null){let u=()=>t(r,s,l);d=this._insertView(u,l,e,a(r)),m=d?Ht.INSERTED:Ht.REPLACED}else l==null?(this._detachAndCacheView(s,e),m=Ht.REMOVED):(d=this._moveView(s,l,e,a(r)),m=Ht.MOVED);o&&o({context:d?.context,operation:m,record:r})})}detach(){for(let n of this._viewCache)n.destroy();this._viewCache=[]}_insertView(n,e,t,a){let o=this._insertViewFromCache(e,t);if(o){o.context.$implicit=a;return}let r=n();return t.createEmbeddedView(r.templateRef,r.context,r.index)}_detachAndCacheView(n,e){let t=e.detach(n);this._maybeCacheView(t,e)}_moveView(n,e,t,a){let o=t.get(n);return t.move(o,e),o.context.$implicit=a,o}_maybeCacheView(n,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(n);else{let t=e.indexOf(n);t===-1?n.destroy():e.remove(t)}}_insertViewFromCache(n,e){let t=this._viewCache.pop();return t&&e.insert(t,n),t||null}};var Zh=20,Gn=(()=>{class i{_ngZone=c(W);_platform=c(de);_renderer=c(st).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new R;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=Zh){return this._platform.isBrowser?new Ut(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let a=e>0?this._scrolled.pipe(ta(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{a.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Se()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let a=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(Xe(o=>!o||a.indexOf(o)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((a,o)=>{this._targetContainsElement(o,e)&&t.push(o)}),t}_targetContainsElement(e,t){let a=mt(t),o=e.getElementRef().nativeElement;do if(a==o)return!0;while(a=a.parentElement);return!1}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ie({token:i,factory:i.\u0275fac})}return i})(),Ys=(()=>{class i{elementRef=c(D);scrollDispatcher=c(Gn);ngZone=c(W);dir=c(Be,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new R;_renderer=c(we);_cleanupScroll;_elementScrolled=new R;ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let t=this.elementRef.nativeElement,a=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=a?e.end:e.start),e.right==null&&(e.right=a?e.start:e.end),e.bottom!=null&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),a&&ki()!=zt.NORMAL?(e.left!=null&&(e.right=t.scrollWidth-t.clientWidth-e.left),ki()==zt.INVERTED?e.left=e.right:ki()==zt.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let t=this.elementRef.nativeElement;qo()?t.scrollTo(e):(e.top!=null&&(t.scrollTop=e.top),e.left!=null&&(t.scrollLeft=e.left))}measureScrollOffset(e){let t="left",a="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let r=this.dir&&this.dir.value=="rtl";return e=="start"?e=r?a:t:e=="end"&&(e=r?t:a),r&&ki()==zt.INVERTED?e==t?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:r&&ki()==zt.NEGATED?e==t?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==t?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(t){return new(t||i)};static \u0275dir=x({type:i,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return i})(),Jh=20,Et=(()=>{class i{_platform=c(de);_listeners;_viewportSize=null;_change=new R;_document=c(ce);constructor(){let e=c(W),t=c(st).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let a=o=>this._change.next(o);this._listeners=[t.listen("window","resize",a),t.listen("window","orientationchange",a)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:a}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+a,right:e.left+t,height:a,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),a=e.documentElement,o=a.getBoundingClientRect(),r=-o.top||e.body?.scrollTop||t.scrollY||a.scrollTop||0,s=-o.left||e.body?.scrollLeft||t.scrollX||a.scrollLeft||0;return{top:r,left:s}}change(e=Jh){return e>0?this._change.pipe(ta(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ie({token:i,factory:i.\u0275fac})}return i})();var am=new w("CDK_VIRTUAL_SCROLL_VIEWPORT");var jn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=G({})}return i})(),xa=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=G({imports:[re,jn,re,jn]})}return i})();var ef=new w("MATERIAL_ANIMATIONS"),om=null;function wa(){return c(ef,{optional:!0})?.animationsDisabled||c(Mn,{optional:!0})==="NoopAnimations"?"di-disabled":(om??=c(Ci).matchMedia("(prefers-reduced-motion)").matches,om?"reduced-motion":"enabled")}function Me(){return wa()!=="enabled"}function Pe(i){return i==null?"":typeof i=="string"?i:`${i}px`}function Dt(i){return i!=null&&`${i}`!="false"}var It=(function(i){return i[i.FADING_IN=0]="FADING_IN",i[i.VISIBLE=1]="VISIBLE",i[i.FADING_OUT=2]="FADING_OUT",i[i.HIDDEN=3]="HIDDEN",i})(It||{}),Qs=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=It.HIDDEN;constructor(n,e,t,a=!1){this._renderer=n,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=a}fadeOut(){this._renderer.fadeOutRipple(this)}},rm=xi({passive:!0,capture:!0}),Xs=class{_events=new Map;addHandler(n,e,t,a){let o=this._events.get(e);if(o){let r=o.get(t);r?r.add(a):o.set(t,new Set([a]))}else this._events.set(e,new Map([[t,new Set([a])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,rm)})}removeHandler(n,e,t){let a=this._events.get(n);if(!a)return;let o=a.get(e);o&&(o.delete(t),o.size===0&&a.delete(e),a.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,rm)))}_delegateEventHandler=n=>{let e=Je(n);e&&this._events.get(n.type)?.forEach((t,a)=>{(a===e||a.contains(e))&&t.forEach(o=>o.handleEvent(n))})}},Ca={enterDuration:225,exitDuration:150},tf=800,sm=xi({passive:!0,capture:!0}),lm=["mousedown","touchstart"],cm=["mouseup","mouseleave","touchend","touchcancel"],nf=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,a){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return i})(),Sa=class i{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Xs;constructor(n,e,t,a,o){this._target=n,this._ngZone=e,this._platform=a,a.isBrowser&&(this._containerElement=mt(t)),o&&o.get(Oe).load(nf)}fadeInRipple(n,e,t={}){let a=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=Y(Y({},Ca),t.animation);t.centered&&(n=a.left+a.width/2,e=a.top+a.height/2);let r=t.radius||af(n,e,a),s=n-a.left,l=e-a.top,d=o.enterDuration,m=document.createElement("div");m.classList.add("mat-ripple-element"),m.style.left=`${s-r}px`,m.style.top=`${l-r}px`,m.style.height=`${r*2}px`,m.style.width=`${r*2}px`,t.color!=null&&(m.style.backgroundColor=t.color),m.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(m);let u=window.getComputedStyle(m),_=u.transitionProperty,p=u.transitionDuration,b=_==="none"||p==="0s"||p==="0s, 0s"||a.width===0&&a.height===0,v=new Qs(this,m,t,b);m.style.transform="scale3d(1, 1, 1)",v.state=It.FADING_IN,t.persistent||(this._mostRecentTransientRipple=v);let I=null;return!b&&(d||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let ee=()=>{I&&(I.fallbackTimer=null),clearTimeout(Ne),this._finishRippleTransition(v)},be=()=>this._destroyRipple(v),Ne=setTimeout(be,d+100);m.addEventListener("transitionend",ee),m.addEventListener("transitioncancel",be),I={onTransitionEnd:ee,onTransitionCancel:be,fallbackTimer:Ne}}),this._activeRipples.set(v,I),(b||!d)&&this._finishRippleTransition(v),v}fadeOutRipple(n){if(n.state===It.FADING_OUT||n.state===It.HIDDEN)return;let e=n.element,t=Y(Y({},Ca),n.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",n.state=It.FADING_OUT,(n._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=mt(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,lm.forEach(t=>{i._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{cm.forEach(e=>{this._triggerElement.addEventListener(e,this,sm)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===It.FADING_IN?this._startFadeOutTransition(n):n.state===It.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:t}=n.config;n.state=It.VISIBLE,!t&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=It.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=ha(n),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+tf;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!fa(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===It.VISIBLE||n.config.terminateOnPointerUp&&n.state===It.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(lm.forEach(e=>i._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(cm.forEach(e=>n.removeEventListener(e,this,sm)),this._pointerUpEventsRegistered=!1))}};function af(i,n,e){let t=Math.max(Math.abs(i-e.left),Math.abs(i-e.right)),a=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(t*t+a*a)}var Ni=new w("mat-ripple-global-options"),Un=(()=>{class i{_elementRef=c(D);_animationsDisabled=Me();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=c(W),t=c(de),a=c(Ni,{optional:!0}),o=c(pe);this._globalOptions=a||{},this._rippleRenderer=new Sa(this,e,this._elementRef,t,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:Y(Y(Y({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,a){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,Y(Y({},this.rippleConfig),a)):this._rippleRenderer.fadeInRipple(0,0,Y(Y({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=x({type:i,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,a){t&2&&P("mat-ripple-unbounded",a.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return i})();var of=new w("MatTabContent"),rf=(()=>{class i{template=c(rt);static \u0275fac=function(t){return new(t||i)};static \u0275dir=x({type:i,selectors:[["","matTabContent",""]],features:[ae([{provide:of,useExisting:i}])]})}return i})(),sf=new w("MatTabLabel"),pm=new w("MAT_TAB"),lf=(()=>{class i extends Id{_closestTab=c(pm,{optional:!0});static \u0275fac=(()=>{let e;return function(a){return(e||(e=ue(i)))(a||i)}})();static \u0275dir=x({type:i,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[ae([{provide:sf,useExisting:i}]),Z]})}return i})(),hm=new w("MAT_TAB_GROUP"),il=(()=>{class i{_viewContainerRef=c(it);_closestTabGroup=c(hm,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new R;position=null;origin=null;isActive=!1;constructor(){c(Oe).load(Vt)}ngOnChanges(e){(Object.hasOwn(e,"textLabel")||Object.hasOwn(e,"disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new _n(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=["*"];function t(a,o){a&1&&q(0)}return M({type:i,selectors:[["mat-tab"]],contentQueries:function(o,r,s){if(o&1&&qe(s,lf,5)(s,rf,7,rt),o&2){let l;N(l=E())&&(r.templateLabel=l.first),N(l=E())&&(r._explicitContent=l.first)}},viewQuery:function(o,r){if(o&1&&Ie(rt,7),o&2){let s;N(s=E())&&(r._implicitContent=s.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(o,r){o&2&&V("id",null)},inputs:{disabled:[2,"disabled","disabled",S],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[ae([{provide:pm,useExisting:i}]),Te],ngContentSelectors:e,decls:1,vars:0,template:function(o,r){o&1&&(ve(),Za(0,t,1,0,"ng-template"))},encapsulation:2,changeDetection:1})})()}return i})(),Zs="mdc-tab-indicator--active",dm="mdc-tab-indicator--no-transition",el=class{_items;_currentItem;constructor(n){this._items=n}hide(){this._items.forEach(n=>n.deactivateInkBar()),this._currentItem=void 0}alignToElement(n){let e=this._items.find(a=>a.elementRef.nativeElement===n),t=this._currentItem;if(e!==t&&(t?.deactivateInkBar(),e)){let a=t?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(a),this._currentItem=e}}},cf=(()=>{class i{_elementRef=c(D);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let t=this._elementRef.nativeElement;if(!e||!t.getBoundingClientRect||!this._inkBarContentElement){t.classList.add(Zs);return}let a=t.getBoundingClientRect(),o=e.width/a.width,r=e.left-a.left;t.classList.add(dm),this._inkBarContentElement.style.setProperty("transform",`translateX(${r}px) scaleX(${o})`),t.getBoundingClientRect(),t.classList.remove(dm),t.classList.add(Zs),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(Zs)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,t=this._inkBarElement=e.createElement("span"),a=this._inkBarContentElement=e.createElement("span");t.className="mdc-tab-indicator",a.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",t.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=x({type:i,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",S]}})}return i})();var fm=(()=>{class i extends cf{elementRef=c(D);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(a){return(e||(e=ue(i)))(a||i)}})();static \u0275dir=x({type:i,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(t,a){t&2&&(V("aria-disabled",!!a.disabled),P("mat-mdc-tab-disabled",a.disabled))},inputs:{disabled:[2,"disabled","disabled",S]},features:[Z]})}return i})(),mm={passive:!0},df=650,mf=100;function Js(i){let n=i+"";return/^[0-9]+(?:\.[0-9]+)?$/.test(n)?`${i}ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(n)?n:""}var uf=(()=>{class i{_elementRef=c(D);_changeDetectorRef=c(xe);_viewportRuler=c(Et);_dir=c(Be,{optional:!0});_ngZone=c(W);_platform=c(de);_sharedResizeObserver=c(Uo);_injector=c(pe);_renderer=c(we);_animationsDisabled=Me();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new R;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new R;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let t=isNaN(e)?0:e;this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}_selectedIndex=0;selectFocusedIndex=new Q;indexFocused=new Q;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),mm),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),mm))}ngAfterContentInit(){let e=this._dir?this._dir.change:Se("ltr"),t=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Wt(32),te(this._destroyed)),a=this._viewportRuler.change(150).pipe(te(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new zn(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),He(o,{injector:this._injector}),vt(e,a,t,this._items.changes,this._itemsResized()).pipe(te(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(r=>{this.indexFocused.emit(r),this._setTabFocus(r)})}_itemsResized(){return typeof ResizeObserver!="function"?$a:this._items.changes.pipe(nt(this._items),qt(e=>new Ut(t=>this._ngZone.runOutsideAngular(()=>{let a=new ResizeObserver(o=>t.next(o));return e.forEach(o=>a.observe(o.elementRef.nativeElement)),()=>{a.disconnect()}}))),ni(1),Xe(e=>e.some(t=>t.contentRect.width>0&&t.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!at(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let t=this._items.get(this.focusIndex);t&&!t.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let t=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?t.scrollLeft=0:t.scrollLeft=t.scrollWidth-t.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,t=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(t)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let t=this._tabListContainer.nativeElement.offsetWidth,a=(e=="before"?-1:1)*t/3;return this._scrollTo(this._scrollDistance+a)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let t=this._items?this._items.toArray()[e]:null;if(!t)return;let a=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:r}=t.elementRef.nativeElement,s,l;this._getLayoutDirection()=="ltr"?(s=o,l=s+r):(l=this._tabListInner.nativeElement.offsetWidth-o,s=l-r);let d=this.scrollDistance,m=this.scrollDistance+a;s<d?this.scrollDistance-=d-s:l>m&&(this.scrollDistance+=Math.min(l-m,s-d))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,t=this._elementRef.nativeElement.offsetWidth,a=e-t>=5;a||(this.scrollDistance=0),a!==this._showPaginationControls&&(this._showPaginationControls=a,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,t=this._tabListContainer.nativeElement.offsetWidth;return e-t||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,t=e?e.elementRef.nativeElement:null;t?this._inkBar.alignToElement(t):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,t){t&&t.button!=null&&t.button!==0||(this._stopInterval(),Ql(df,mf).pipe(te(vt(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:a,distance:o}=this._scrollHeader(e);(o===0||o>=a)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let t=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(t,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:t,distance:this._scrollDistance}}static \u0275fac=function(t){return new(t||i)};static \u0275dir=x({type:i,inputs:{disablePagination:[2,"disablePagination","disablePagination",S],selectedIndex:[2,"selectedIndex","selectedIndex",je]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return i})(),pf=(()=>{class i extends uf{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new el(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(a){return(e||(e=ue(i)))(a||i)}})();static \u0275cmp=(function(){let e=["tabListContainer"],t=["tabList"],a=["tabListInner"],o=["nextPaginator"],r=["previousPaginator"];return M({type:i,selectors:[["mat-tab-header"]],contentQueries:function(d,m,u){if(d&1&&qe(u,fm,4),d&2){let _;N(_=E())&&(m._items=_)}},viewQuery:function(d,m){if(d&1&&Ie(e,7)(t,7)(a,7)(o,5)(r,5),d&2){let u;N(u=E())&&(m._tabListContainer=u.first),N(u=E())&&(m._tabList=u.first),N(u=E())&&(m._tabListInner=u.first),N(u=E())&&(m._nextPaginator=u.first),N(u=E())&&(m._previousPaginator=u.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(d,m){d&2&&P("mat-mdc-tab-header-pagination-controls-enabled",m._showPaginationControls)("mat-mdc-tab-header-rtl",m._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",S]},features:[Z],ngContentSelectors:["*"],decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(d,m){d&1&&(ve(),f(0,"div",5,0),X("click",function(){return m._handlePaginatorClick("before")})("mousedown",function(_){return m._handlePaginatorPress("before",_)})("touchend",function(){return m._stopInterval()}),O(2,"div",6),g(),f(3,"div",7,1),X("keydown",function(_){return m._handleKeydown(_)}),f(5,"div",8,2),X("cdkObserveContent",function(){return m._onContentChanges()}),f(7,"div",9,3),q(9),g()()(),f(10,"div",10,4),X("mousedown",function(_){return m._handlePaginatorPress("after",_)})("click",function(){return m._handlePaginatorClick("after")})("touchend",function(){return m._stopInterval()}),O(12,"div",6),g()),d&2&&(P("mat-mdc-tab-header-pagination-disabled",m._disableScrollBefore),C("matRippleDisabled",m._disableScrollBefore||m.disableRipple),h(3),P("_mat-animation-noopable",m._animationsDisabled),h(2),V("aria-label",m.ariaLabel||null)("aria-labelledby",m.ariaLabelledby||null),h(5),P("mat-mdc-tab-header-pagination-disabled",m._disableScrollAfter),C("matRippleDisabled",m._disableScrollAfter||m.disableRipple))},dependencies:[Un,Wd],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--%NS%mat-tab-header-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--%NS%mat-tab-pagination-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--%NS%mat-tab-divider-height, 1px);
  border-bottom-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--%NS%mat-tab-divider-height, 1px);
  border-top-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--%NS%mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2,changeDetection:1})})()}return i})(),hf=new w("MAT_TABS_CONFIG"),um=(()=>{class i extends Os{_host=c(tl);_ngZone=c(W);_centeringSub=Ee.EMPTY;_leavingSub=Ee.EMPTY;ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(nt(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=(()=>{let e;return function(a){return(e||(e=ue(i)))(a||i)}})();static \u0275dir=x({type:i,selectors:[["","matTabBodyHost",""]],features:[Z]})}return i})(),tl=(()=>{class i{_elementRef=c(D);_dir=c(Be,{optional:!0});_ngZone=c(W);_injector=c(pe);_renderer=c(we);_diAnimationsDisabled=Me();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=Ee.EMPTY;_position;_previousPosition;_onCentering=new Q;_beforeCentering=new Q;_afterLeavingCenter=new Q;_onCentered=new Q(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=c(xe);this._dirChangeSubscription=this._dir.change.subscribe(t=>{this._computePositionAnimationState(t),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),He(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,t=a=>{a.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),a.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",a=>{a.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",t),this._renderer.listen(e,"transitioncancel",t)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),He(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=["content"];function t(a,o){}return M({type:i,selectors:[["mat-tab-body"]],viewQuery:function(o,r){if(o&1&&Ie(um,5)(e,5),o&2){let s;N(s=E())&&(r._portalHost=s.first),N(s=E())&&(r._contentElement=s.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(o,r){o&2&&V("inert",r._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(o,r){o&1&&(f(0,"div",1,0),_e(2,t,0,0,"ng-template",2),g()),o&2&&P("mat-tab-body-content-left",r._position==="left")("mat-tab-body-content-right",r._position==="right")("mat-tab-body-content-can-animate",r._position==="center"||r._previousPosition==="center")},dependencies:[um,Ys],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--%NS%mat-tab-body-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2,changeDetection:1})})()}return i})(),gm=(()=>{class i{_elementRef=c(D);_changeDetectorRef=c(xe);_ngZone=c(W);_tabsSubscription=Ee.EMPTY;_tabLabelSubscription=Ee.EMPTY;_tabBodySubscription=Ee.EMPTY;_diAnimationsDisabled=Me();_bodyAnimationDuration;_headerAnimationDuration;_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Nn;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){this._animationDuration=e,e&&typeof e=="object"?(this._bodyAnimationDuration=Js(e.body),this._headerAnimationDuration=Js(e.header)):this._headerAnimationDuration=this._bodyAnimationDuration=Js(e)}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let t=this._elementRef.nativeElement.classList;t.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&t.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new Q;focusChange=new Q;animationDone=new Q;selectedTabChange=new Q(!0);_groupId;_isServer=!c(de).isBrowser;constructor(){let e=c(hf,{optional:!0});this._groupId=c(Fe).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let t=this._selectedIndex==null;if(!t){this.selectedTabChange.emit(this._createChangeEvent(e));let a=this._tabBodyWrapper.nativeElement;a.style.minHeight=a.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((a,o)=>a.isActive=o===e),t||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((t,a)=>{t.position=a-e,this._selectedIndex!=null&&t.position==0&&!t.origin&&(t.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let t=this._tabs.toArray(),a;for(let o=0;o<t.length;o++)if(t[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,a=t[o];break}!a&&t[e]&&Promise.resolve().then(()=>{t[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(nt(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(t=>t._closestTabGroup===this||!t._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let t=this._tabHeader;t&&(t.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let t=new nl;return t.index=e,this._tabs&&this._tabs.length&&(t.tab=this._tabs.toArray()[e]),t}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=vt(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,t){return e.id||`${this._groupId}-label-${t}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let t=this._tabBodyWrapper.nativeElement;t.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(t.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,t,a){t.focusIndex=a,e.disabled||(this.selectedIndex=a)}_getTabIndex(e){let t=this._lastFocusedTabIndex??this.selectedIndex;return e===t?0:-1}_tabFocusChanged(e,t){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=t)}_bodyCentered(e){e&&this._tabBodies?.forEach((t,a)=>t._setActiveClass(a===this._selectedIndex))}_bodyAnimationsDisabled(){return this._diAnimationsDisabled||this._bodyAnimationDuration==="0"||this._bodyAnimationDuration==="0ms"}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=["tabBodyWrapper"],t=["tabHeader"],a=["*"];function o(u,_){}function r(u,_){if(u&1&&_e(0,o,0,0,"ng-template",12),u&2){let p=L().$implicit;C("cdkPortalOutlet",p.templateLabel)}}function s(u,_){if(u&1&&F(0),u&2){let p=L().$implicit;Ae(p.textLabel)}}function l(u,_){if(u&1){let p=Ot();f(0,"div",7,2),X("click",function(){let v=ut(p),I=v.$implicit,ee=v.$index,be=L(),Ne=ht(1);return pt(be._handleClick(I,Ne,ee))})("cdkFocusChange",function(v){let I=ut(p).$index,ee=L();return pt(ee._tabFocusChanged(v,I))}),O(2,"span",8)(3,"div",9),f(4,"span",10)(5,"span",11),B(6,r,1,1,null,12)(7,s,1,1),g()()()}if(u&2){let p=_.$implicit,b=_.$index,v=ht(1),I=L();Ve(p.labelClass),P("mdc-tab--active",I.selectedIndex===b),C("id",I._getTabLabelId(p,b))("disabled",p.disabled)("fitInkBarToContent",I.fitInkBarToContent),V("tabIndex",I._getTabIndex(b))("aria-posinset",b+1)("aria-setsize",I._tabs.length)("aria-controls",I._getTabContentId(b))("aria-selected",I.selectedIndex===b)("aria-label",p.ariaLabel||null)("aria-labelledby",!p.ariaLabel&&p.ariaLabelledby?p.ariaLabelledby:null),h(3),C("matRippleTrigger",v)("matRippleDisabled",p.disabled||I.disableRipple),h(3),z(p.templateLabel?6:7)}}function d(u,_){u&1&&q(0)}function m(u,_){if(u&1){let p=Ot();f(0,"mat-tab-body",13),X("_onCentered",function(){ut(p);let v=L();return pt(v._removeTabBodyWrapperHeight())})("_onCentering",function(v){ut(p);let I=L();return pt(I._setTabBodyWrapperHeight(v))})("_beforeCentering",function(v){ut(p);let I=L();return pt(I._bodyCentered(v))}),g()}if(u&2){let p=_.$implicit,b=_.$index,v=L();Ve(p.bodyClass),C("id",v._getTabContentId(b))("content",p.content)("position",p.position)("animationDuration",v._bodyAnimationDuration)("preserveContent",v.preserveContent),V("tabindex",v.contentTabIndex!=null&&v.selectedIndex===b?v.contentTabIndex:null)("aria-labelledby",v._getTabLabelId(p,b))("aria-hidden",v.selectedIndex!==b)}}return M({type:i,selectors:[["mat-tab-group"]],contentQueries:function(_,p,b){if(_&1&&qe(b,il,5),_&2){let v;N(v=E())&&(p._allTabs=v)}},viewQuery:function(_,p){if(_&1&&Ie(e,5)(t,5)(tl,5),_&2){let b;N(b=E())&&(p._tabBodyWrapper=b.first),N(b=E())&&(p._tabHeader=b.first),N(b=E())&&(p._tabBodies=b)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:13,hostBindings:function(_,p){_&2&&(V("mat-align-tabs",p.alignTabs),Ve("mat-"+(p.color||"primary")),$e("--%NS%mat-tab-body-animation-duration",p._bodyAnimationDuration)("--%NS%mat-tab-header-animation-duration",p._headerAnimationDuration),P("mat-mdc-tab-group-dynamic-height",p.dynamicHeight)("mat-mdc-tab-group-inverted-header",p.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",p.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",S],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",S],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",S],selectedIndex:[2,"selectedIndex","selectedIndex",je],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",je],disablePagination:[2,"disablePagination","disablePagination",S],disableRipple:[2,"disableRipple","disableRipple",S],preserveContent:[2,"preserveContent","preserveContent",S],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[ae([{provide:hm,useExisting:i}])],ngContentSelectors:a,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(_,p){_&1&&(ve(),f(0,"mat-tab-header",3,0),X("indexFocused",function(v){return p._focusChanged(v)})("selectFocusedIndex",function(v){return p.selectedIndex=v}),lt(2,l,8,17,"div",4,hn),g(),B(4,d,1,0),f(5,"div",5,1),lt(7,m,1,10,"mat-tab-body",6,hn),g()),_&2&&(C("selectedIndex",p.selectedIndex||0)("disableRipple",p.disableRipple)("disablePagination",p.disablePagination),rc("aria-label",p.ariaLabel)("aria-labelledby",p.ariaLabelledby),h(2),ct(p._tabs),h(2),z(p._isServer?4:-1),h(),P("_mat-animation-noopable",p._bodyAnimationsDisabled()),h(2),ct(p._tabs))},dependencies:[pf,fm,Bs,Un,Os,tl],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--%NS%mat-tab-header-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--%NS%mat-tab-container-height, 48px);
  font-family: var(--%NS%mat-tab-label-text-font, var(--%NS%mat-sys-title-small-font));
  font-size: var(--%NS%mat-tab-label-text-size, var(--%NS%mat-sys-title-small-size));
  letter-spacing: var(--%NS%mat-tab-label-text-tracking, var(--%NS%mat-sys-title-small-tracking));
  line-height: var(--%NS%mat-tab-label-text-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-weight: var(--%NS%mat-tab-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-tab-active-indicator-height, 2px);
  border-radius: var(--%NS%mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--%NS%mat-tab-active-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-hover-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--%NS%active:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-focus-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--%NS%mat-tab-disabled-ripple-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-label-text-color, var(--%NS%mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--%NS%mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2,changeDetection:1})})()}return i})(),nl=class{index;tab};var bm=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=G({imports:[re]})}return i})();var _m=(()=>{class i{get vertical(){return this._vertical}set vertical(e){this._vertical=Dt(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=Dt(e)}_inset=!1;static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(t,a){t&2&&(V("aria-orientation",a.vertical?"vertical":"horizontal"),P("mat-divider-vertical",a.vertical)("mat-divider-horizontal",!a.vertical)("mat-divider-inset",a.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(t,a){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--%NS%mat-divider-color, var(--%NS%mat-sys-outline-variant));
  border-top-width: var(--%NS%mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--%NS%mat-divider-color, var(--%NS%mat-sys-outline-variant));
  border-right-width: var(--%NS%mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2})}return i})(),vm=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=G({imports:[re]})}return i})();var Em=(()=>{class i{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,t){this._renderer=e,this._elementRef=t}setProperty(e,t){this._renderer.setProperty(this._elementRef.nativeElement,e,t)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(t){return new(t||i)(Re(we),Re(D))};static \u0275dir=x({type:i})}return i})(),bf=(()=>{class i extends Em{static \u0275fac=(()=>{let e;return function(a){return(e||(e=ue(i)))(a||i)}})();static \u0275dir=x({type:i,features:[Z]})}return i})(),or=new w("");var _f={provide:or,useExisting:Rt(()=>rr),multi:!0};function vf(){let i=ns()?ns().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var yf=new w(""),rr=(()=>{class i extends Em{_compositionMode;_composing=!1;constructor(e,t,a){super(e,t),this._compositionMode=a,this._compositionMode==null&&(this._compositionMode=!vf())}writeValue(e){let t=e??"";this.setProperty("value",t)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(t){return new(t||i)(Re(we),Re(D),Re(yf,8))};static \u0275dir=x({type:i,selectors:[["input","formControlName","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControlName","",3,"ngNoCva",""],["input","formControl","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControl","",3,"ngNoCva",""],["input","ngModel","",3,"type","checkbox",3,"ngNoCva",""],["textarea","ngModel","",3,"ngNoCva",""],["","ngDefaultControl",""]],hostBindings:function(t,a){t&1&&X("input",function(r){return a._handleInput(r.target.value)})("blur",function(){return a.onTouched()})("compositionstart",function(){return a._compositionStart()})("compositionend",function(r){return a._compositionEnd(r.target.value)})},standalone:!1,features:[ae([_f]),Z]})}return i})();function sl(i){return i==null||ll(i)===0}function ll(i){return i==null?null:Array.isArray(i)||typeof i=="string"?i.length:i instanceof Set?i.size:null}var sr=new w(""),cl=new w(""),xf=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Wn=class{static min(n){return wf(n)}static max(n){return Cf(n)}static required(n){return Dm(n)}static requiredTrue(n){return Sf(n)}static email(n){return kf(n)}static minLength(n){return Mf(n)}static maxLength(n){return Nf(n)}static pattern(n){return Ef(n)}static nullValidator(n){return Qo()}static compose(n){return Fm(n)}static composeAsync(n){return Pm(n)}};function wf(i){return n=>{if(n.value==null||i==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<i?{min:{min:i,actual:n.value}}:null}}function Cf(i){return n=>{if(n.value==null||i==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>i?{max:{max:i,actual:n.value}}:null}}function Dm(i){return sl(i.value)?{required:!0}:null}function Sf(i){return i.value===!0?null:{required:!0}}function kf(i){return sl(i.value)||xf.test(i.value)?null:{email:!0}}function Mf(i){return n=>{let e=n.value?.length??ll(n.value);return e===null||e===0?null:e<i?{minlength:{requiredLength:i,actualLength:e}}:null}}function Nf(i){return n=>{let e=n.value?.length??ll(n.value);return e!==null&&e>i?{maxlength:{requiredLength:i,actualLength:e}}:null}}function Ef(i){if(!i)return Qo;let n,e;return typeof i=="string"?(e="",i.charAt(0)!=="^"&&(e+="^"),e+=i,i.charAt(i.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=i.toString(),n=i),t=>{if(sl(t.value))return null;let a=t.value;return n.test(a)?null:{pattern:{requiredPattern:e,actualValue:a}}}}function Qo(i){return null}function Im(i){return i!=null}function Tm(i){return Jr(i)?Kl(i):i}function Rm(i){let n={};return i.forEach(e=>{n=e!=null?Y(Y({},n),e):n}),Object.keys(n).length===0?null:n}function Am(i,n){return n.map(e=>e(i))}function Df(i){return!i.validate}function Om(i){return i.map(n=>Df(n)?n:e=>n.validate(e))}function Fm(i){if(!i)return null;let n=i.filter(Im);return n.length==0?null:function(e){return Rm(Am(e,n))}}function dl(i){return i!=null?Fm(Om(i)):null}function Pm(i){if(!i)return null;let n=i.filter(Im);return n.length==0?null:function(e){let t=Am(e,n).map(Tm);return ei(t).pipe(ye(Rm))}}function ml(i){return i!=null?Pm(Om(i)):null}function ym(i,n){return i===null?[n]:Array.isArray(i)?[...i,n]:[i,n]}function Lm(i){return i._rawValidators}function Vm(i){return i._rawAsyncValidators}function al(i){return i?Array.isArray(i)?i:[i]:[]}function Xo(i,n){return Array.isArray(i)?i.includes(n):i===n}function xm(i,n){let e=al(n);return al(i).forEach(a=>{Xo(e,a)||e.push(a)}),e}function wm(i,n){return al(n).filter(e=>!Xo(i,e))}var Zo=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=dl(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=ml(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},qn=class extends Zo{name;get formDirective(){return null}get path(){return null}};var ka="VALID",Yo="INVALID",Ei="PENDING",Ma="DISABLED",xn=class{},Jo=class extends xn{value;source;constructor(n,e){super(),this.value=n,this.source=e}},Ea=class extends xn{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},Da=class extends xn{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},Di=class extends xn{status;source;constructor(n,e){super(),this.status=n,this.source=e}},er=class extends xn{source;constructor(n){super(),this.source=n}},Ii=class extends xn{source;constructor(n){super(),this.source=n}};function Bm(i){return(lr(i)?i.validators:i)||null}function If(i){return Array.isArray(i)?dl(i):i||null}function zm(i,n){return(lr(n)?n.asyncValidators:i)||null}function Tf(i){return Array.isArray(i)?ml(i):i||null}function lr(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function Rf(i,n,e){let t=i.controls;if(!(n?Object.keys(t):t).length)throw new ne(1e3,"");if(!Hm(t,e))throw new ne(1001,"")}function Af(i,n,e){i._forEachChild((t,a)=>{if(e[a]===void 0)throw new ne(-1002,"")})}var tr=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=oe(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return Ye(this.statusReactive)}set status(n){Ye(()=>this.statusReactive.set(n))}_status=Ke(()=>this.statusReactive());statusReactive=oe(void 0);get valid(){return this.status===ka}get invalid(){return this.status===Yo}get pending(){return this.status===Ei}get disabled(){return this.status===Ma}get enabled(){return this.status!==Ma}errors;get pristine(){return Ye(this.pristineReactive)}set pristine(n){Ye(()=>this.pristineReactive.set(n))}_pristine=Ke(()=>this.pristineReactive());pristineReactive=oe(!0);get dirty(){return!this.pristine}get touched(){return Ye(this.touchedReactive)}set touched(n){Ye(()=>this.touchedReactive.set(n))}_touched=Ke(()=>this.touchedReactive());touchedReactive=oe(!1);get untouched(){return!this.touched}_events=new R;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(xm(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(xm(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(wm(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(wm(n,this._rawAsyncValidators))}hasValidator(n){return Xo(this._rawValidators,n)}hasAsyncValidator(n){return Xo(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let t=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(ot(Y({},n),{sourceControl:t})),e&&n.emitEvent!==!1&&this._events.next(new Da(!0,t))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=n.sourceControl??this;this._forEachChild(a=>{a.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:t})}),n.onlySelf||this._parent?._updateTouched(n,t),e&&n.emitEvent!==!1&&this._events.next(new Da(!1,t))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let t=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(ot(Y({},n),{sourceControl:t})),e&&n.emitEvent!==!1&&this._events.next(new Ea(!1,t))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=n.sourceControl??this;this._forEachChild(a=>{a.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,t),e&&n.emitEvent!==!1&&this._events.next(new Ea(!0,t))}markAsPending(n={}){this.status=Ei;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Di(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(ot(Y({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Ma,this.errors=null,this._forEachChild(a=>{a.disable(ot(Y({},n),{onlySelf:!0}))}),this._updateValue();let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Jo(this.value,t)),this._events.next(new Di(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(ot(Y({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(a=>a(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=ka,this._forEachChild(t=>{t.enable(ot(Y({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(ot(Y({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===ka||this.status===Ei)&&this._runAsyncValidator(t,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Jo(this.value,e)),this._events.next(new Di(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(ot(Y({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Ma:ka}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=Ei,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let t=Tm(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(a=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(a,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((t,a)=>t&&t._find(a),this)}getError(n,e){let t=e?this.get(e):this;return t?.errors?t.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,t){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||t)&&this._events.next(new Di(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,t)}_initObservables(){this.valueChanges=new Q,this.statusChanges=new Q}_calculateStatus(){return this._allControlsDisabled()?Ma:this.errors?Yo:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Ei)?Ei:this._anyControlsHaveStatus(Yo)?Yo:ka}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let t=!this._anyControlsDirty(),a=this.pristine!==t;this.pristine=t,n.onlySelf||this._parent?._updatePristine(n,e),a&&this._events.next(new Ea(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new Da(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){lr(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=If(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=Tf(this._rawAsyncValidators)}_updateHasRequiredValidator(){Ye(()=>this._hasRequired.set(this.hasValidator(Wn.required)))}};function Hm(i,n){return Object.hasOwn(i,n)}function Of(i){return i.tagName==="INPUT"||i.tagName==="SELECT"||i.tagName==="TEXTAREA"}function Ff(i,n,e,t){switch(e){case"name":i.setAttribute(n,e,t);break;case"disabled":case"readonly":case"required":t?i.setAttribute(n,e,""):i.removeAttribute(n,e);break;case"max":case"min":case"minLength":case"maxLength":t!==void 0?i.setAttribute(n,e,t.toString()):i.removeAttribute(n,e);break}}var ol=class{kind;context;control;message;constructor({kind:n,context:e,control:t}){this.kind=n,this.context=e,this.control=t}};var Pf=(()=>{class i{_validator=Qo;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let t=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(t),this._validator=this._enabled?this.createValidator(t):Qo,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(t){return new(t||i)};static \u0275dir=x({type:i,features:[Te]})}return i})();var Lf={provide:sr,useExisting:Rt(()=>jm),multi:!0};var jm=(()=>{class i extends Pf{required;inputName="required";normalizeInput=S;createValidator=e=>Dm;enabled(e){return e}static \u0275fac=(()=>{let e;return function(a){return(e||(e=ue(i)))(a||i)}})();static \u0275dir=x({type:i,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(t,a){t&2&&V("required",a._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[ae([Lf]),Z]})}return i})();var Vf=new w(""),cr=new w("",{factory:()=>ul}),ul="always";function Bf(i,n){return[...n.path,i]}function Cm(i,n,e=ul){pl(i,n),n.valueAccessor.writeValue(i.value),(i.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(i.disabled),Hf(i,n),Gf(i,n),jf(i,n),zf(i,n)}function Sm(i,n,e=!0){let t=()=>{};n?.valueAccessor?.registerOnChange(t),n?.valueAccessor?.registerOnTouched(t),ir(i,n),i&&(n._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function nr(i,n){i.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function zf(i,n){if(n.valueAccessor.setDisabledState){let e=t=>{n.valueAccessor.setDisabledState(t)};i.registerOnDisabledChange(e),n._registerOnDestroy(()=>{i._unregisterOnDisabledChange(e)})}}function pl(i,n){let e=Lm(i);n.validator!==null?i.setValidators(ym(e,n.validator)):typeof e=="function"&&i.setValidators([e]);let t=Vm(i);n.asyncValidator!==null?i.setAsyncValidators(ym(t,n.asyncValidator)):typeof t=="function"&&i.setAsyncValidators([t]);let a=()=>i.updateValueAndValidity();nr(n._rawValidators,a),nr(n._rawAsyncValidators,a)}function ir(i,n){let e=!1;if(i!==null){if(n.validator!==null){let a=Lm(i);if(Array.isArray(a)&&a.length>0){let o=a.filter(r=>r!==n.validator);o.length!==a.length&&(e=!0,i.setValidators(o))}}if(n.asyncValidator!==null){let a=Vm(i);if(Array.isArray(a)&&a.length>0){let o=a.filter(r=>r!==n.asyncValidator);o.length!==a.length&&(e=!0,i.setAsyncValidators(o))}}}let t=()=>{};return nr(n._rawValidators,t),nr(n._rawAsyncValidators,t),e}function Hf(i,n){n.valueAccessor.registerOnChange(e=>{i._pendingValue=e,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&Gm(i,n)})}function jf(i,n){n.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&Gm(i,n),i.updateOn!=="submit"&&i.markAsTouched()})}function Gm(i,n){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function Gf(i,n){let e=(t,a)=>{n.valueAccessor.writeValue(t),a&&n.viewToModelUpdate(t)};i.registerOnChange(e),n._registerOnDestroy(()=>{i._unregisterOnChange(e)})}function Um(i,n){i==null,pl(i,n)}function Uf(i,n){return ir(i,n)}function Wf(i,n){if(!Object.hasOwn(i,"model"))return!1;let e=i.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function qf(i){return Object.getPrototypeOf(i.constructor)===bf}function Wm(i,n){i._syncPendingControls(),n.forEach(e=>{let t=e.control;t.updateOn==="submit"&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function $f(i,n){if(!n)return null;Array.isArray(n);let e,t,a;return n.forEach(o=>{o.constructor===rr?e=o:qf(o)?t=o:a=o}),a||t||e||null}function Kf(i,n){let e=i.indexOf(n);e>-1&&i.splice(e,1)}var Yf={provide:Vf,useFactory:()=>{let i=c(Xt,{self:!0});return{setParseErrors:n=>{i.setParseErrorSource(n)},set onReset(n){i.onReset=n}}}},Xt=class extends Zo{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(n){this.userOnReset=n,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof Ii&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=$f(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(n,e,t){super(),this.injector=n,this.renderer=e,this.rawValueAccessors=t,this.injector?.get(St)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let n=this.injector?.get(xe);if(!this.control||!n)return;let e=n.markForCheck.bind(n);this.subscription=new Ee,this.subscription.add(this.control.valueChanges.subscribe(e)),this.subscription.add(this.control.statusChanges.subscribe(e)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(t=>{t instanceof Ii&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(n){!n.nativeElement.hasAttribute?.("ngNoCva")&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!n.customControl||(this.isCustomControlBased=!0,n.listenToCustomControlModel(a=>{this.control?.markAsDirty(),this.control?.setValue(a,{emitModelToViewChange:!1}),this.viewToModelUpdate(a)}),n.listenToCustomControlOutput("touch",()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=Of(n.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(a=>a instanceof jm))}ngControlUpdate(n,e){if(!this.isCustomControlBased)return;let t=this.control,a=this.customControlBindings;Object.is(a.value,t.value)||(a.value=t.value,n.setCustomControlModelInput(t.value)),this.bindControlProperty(n,a,"touched",t.touched),this.bindControlProperty(n,a,"dirty",t.dirty),this.bindControlProperty(n,a,"valid",t.valid),this.bindControlProperty(n,a,"invalid",t.invalid),this.bindControlProperty(n,a,"pending",t.pending),this.bindControlProperty(n,a,"disabled",t.disabled),this.shouldBindRequired&&this.bindControlProperty(n,a,"required",this.isRequired);let o=t.errors;if(a.errors!==o){a.errors=o;let r=this._convertErrors(o);n.setInputOnDirectives("errors",r)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(n,e,t,a){if(e[t]===a)return;e[t]=a;let o=n.setInputOnDirectives(t,a);this.isNativeFormElement&&!o&&(t==="disabled"||t==="required")&&this.renderer&&Ff(this.renderer,n.nativeElement,t,a)}_convertErrors(n){if(n===null)return[];let e=this.control;return Object.entries(n).map(([t,a])=>new ol({context:a,kind:t,control:e}))}setParseErrorSource(n){if(n===void 0)return;let e=null,t=Ke(()=>{let a=n();return a.length===0?null:a.reduce((o,r)=>(o[r.kind]=r,o),{})});this.parseErrorsValidator=(()=>e).bind(this),kt(()=>{e=t(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(n){this.parseErrorsValidator&&(n?.removeValidators(this.parseErrorsValidator),n?.updateValueAndValidity({emitEvent:!1}))}},rl=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Ti=(()=>{class i extends rl{constructor(e){super(e)}static \u0275fac=function(t){return new(t||i)(Re(Xt,2))};static \u0275dir=x({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,a){t&2&&P("ng-untouched",a.isUntouched)("ng-touched",a.isTouched)("ng-pristine",a.isPristine)("ng-dirty",a.isDirty)("ng-valid",a.isValid)("ng-invalid",a.isInvalid)("ng-pending",a.isPending)},standalone:!1,features:[Z]})}return i})();var ar=class extends tr{constructor(n,e,t){super(Bm(e),zm(t,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){let t=this._find(n);return t||(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,t={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){let t=this._find(n);t&&t._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,t={}){let a=this._find(n);a&&a._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(n){return this._find(n)?.enabled===!0}setValue(n,e={}){Ye(()=>{Af(this,!0,n),Object.keys(n).forEach(t=>{Rf(this,!0,t),this.controls[t].setValue(n[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(t=>{let a=this._find(t);a&&a.patchValue(n[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((t,a)=>{t.reset(n?n[a]:null,ot(Y({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Ii(this))}getRawValue(){return this._reduceChildren({},(n,e,t)=>(n[t]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let t=this.controls[e];t&&n(t,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,t]of Object.entries(this.controls))if(this.contains(e)&&n(t))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,t,a)=>((t.enabled||this.disabled)&&(e[a]=t.value),e))}_reduceChildren(n,e){let t=n;return this._forEachChild((a,o)=>{t=e(t,a,o)}),t}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return Hm(this.controls,n)?this.controls[n]:null}};var Qf={provide:qn,useExisting:Rt(()=>Ia)},Na=Promise.resolve(),Ia=(()=>{class i extends qn{callSetDisabledState;get submitted(){return Ye(this.submittedReactive)}_submitted=Ke(()=>this.submittedReactive());submittedReactive=oe(!1);_directives=new Set;form;ngSubmit=new Q;options;constructor(e,t,a){super(),this.callSetDisabledState=a,this.form=new ar({},dl(e),ml(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Na.then(()=>{let t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),e._setupWithForm(this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Na.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Na.then(()=>{let t=this._findContainer(e.path),a=new ar({});Um(a,e),t.registerControl(e.name,a),a.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Na.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){Na.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),Wm(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new er(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(t){return new(t||i)(Re(sr,10),Re(cl,10),Re(cr,8))};static \u0275dir=x({type:i,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,a){t&1&&X("submit",function(r){return a.onSubmit(r)})("reset",function(){return a.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[ae([Qf]),Z]})}return i})();function km(i,n){let e=i.indexOf(n);e>-1&&i.splice(e,1)}function Mm(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var qm=class extends tr{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,t){super(Bm(e),zm(t,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),lr(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Mm(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){Ye(()=>{this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)})}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Ii(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){km(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){km(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){Mm(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var Xf=i=>i instanceof qm;var Zf=(()=>{class i extends qn{callSetDisabledState;get submitted(){return Ye(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=Ke(()=>this._submittedReactive());_submittedReactive=oe(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,t,a){super(),this.callSetDisabledState=a,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){if(!this.form)throw new ne(1052,!1);Object.hasOwn(e,"form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(ir(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let t=this.form.get(e.path);if(!t)throw new ne(-1055,!1);return e._setupWithForm(t,this.callSetDisabledState),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t}getControl(e){return this.form.get(e.path)}removeControl(e){Sm(e.control||null,e,!1),Kf(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,t){this.form.get(e.path).setValue(t)}onReset(){this.resetForm()}resetForm(e=void 0,t={}){this.form.reset(e,t),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,Wm(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new er(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let t=e.control,a=this.form.get(e.path);t!==a&&(Sm(t||null,e),Xf(a)&&e._setupWithForm(a,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let t=this.form.get(e.path);Um(t,e),t.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let t=this.form?.get(e.path);t&&Uf(t,e)&&t.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){pl(this.form,this),this._oldForm&&ir(this._oldForm,this)}static \u0275fac=function(t){return new(t||i)(Re(sr,10),Re(cl,10),Re(cr,8))};static \u0275dir=x({type:i,features:[Z,Te]})}return i})(),Jf={provide:qn,useExisting:Rt(()=>Ta)},Ta=(()=>{class i extends Zf{form=null;ngSubmit=new Q;get control(){return this.form}static \u0275fac=(()=>{let e;return function(a){return(e||(e=ue(i)))(a||i)}})();static \u0275dir=x({type:i,selectors:[["","formGroup",""]],hostBindings:function(t,a){t&1&&X("submit",function(r){return a.onSubmit(r)})("reset",function(){return a.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[ae([Jf]),Z]})}return i})(),eg={provide:Xt,useExisting:Rt(()=>$n)},Nm=Promise.resolve(),$n=(()=>{class i extends Xt{_changeDetectorRef;callSetDisabledState;control=new qm;static ngAcceptInputType_isDisabled;_registered=!1;_ngModelInjector;viewModel;name="";isDisabled;model;options;update=new Q;constructor(e,t,a,o,r,s,l,d){super(l,d,o),this._changeDetectorRef=r,this.callSetDisabledState=s,this._parent=e,this._setValidators(t),this._setAsyncValidators(a)}ngOnChanges(e){if(this._registered,this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let t=e.name.previousValue;this.formDirective.removeControl({name:t,path:this._getPath(t)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),Wf(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}\u0275ngControlCreate(e){super.ngControlCreate(e)}\u0275ngControlUpdate(e){super.ngControlUpdate(e,!1)}get shouldBindRequired(){return!1}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Cm(this.control,this,this.callSetDisabledState)),this.control.updateValueAndValidity({emitEvent:!1})}_setupWithForm(e){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Cm(this.control,this,e))}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){Nm.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let t=e.isDisabled.currentValue,a=t!==0&&S(t);Nm.then(()=>{a&&!this.control.disabled?this.control.disable():!a&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?Bf(e,this._parent):[e]}static \u0275fac=function(t){return new(t||i)(Re(qn,9),Re(sr,10),Re(cl,10),Re(or,10),Re(xe,8),Re(cr,8),Re(pe,8),Re(we,8))};static \u0275dir=x({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[ae([eg,Yf]),Z,Te,ic(null)]})}return i})();var tg=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=G({})}return i})();var Ri=(()=>{class i{static withConfig(e){return{ngModule:i,providers:[{provide:cr,useValue:e.callSetDisabledState??ul}]}}static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=G({imports:[tg]})}return i})();var ng={capture:!0},ig=["focus","mousedown","mouseenter","touchstart"],fl="mat-ripple-loader-uninitialized",gl="mat-ripple-loader-class-name",$m="mat-ripple-loader-centered",dr="mat-ripple-loader-disabled",mr=(()=>{class i{_document=c(ce);_animationsDisabled=Me();_globalRippleOptions=c(Ni,{optional:!0});_platform=c(de);_ngZone=c(W);_injector=c(pe);_eventCleanups;_hosts=new Map;constructor(){let e=c(st).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>ig.map(t=>e.listen(this._document,t,this._onInteraction,ng)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(fl,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(gl))&&e.setAttribute(gl,t.className||""),t.centered&&e.setAttribute($m,""),t.disabled&&e.setAttribute(dr,"")}setDisabled(e,t){let a=this._hosts.get(e);a?(a.target.rippleDisabled=t,!t&&!a.hasSetUpEvents&&(a.hasSetUpEvents=!0,a.renderer.setupTriggerEvents(e))):t?e.setAttribute(dr,""):e.removeAttribute(dr)}_onInteraction=e=>{let t=Je(e);if(t instanceof HTMLElement){let a=t.closest(`[${fl}="${this._globalRippleOptions?.namespace??""}"]`);a&&this._createRipple(a)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(gl)),e.append(t);let a=this._globalRippleOptions,o=this._animationsDisabled?0:a?.animation?.enterDuration??Ca.enterDuration,r=this._animationsDisabled?0:a?.animation?.exitDuration??Ca.exitDuration,s={rippleDisabled:this._animationsDisabled||a?.disabled||e.hasAttribute(dr),rippleConfig:{centered:e.hasAttribute($m),terminateOnPointerUp:a?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:r}}},l=new Sa(s,this._ngZone,t,this._platform,this._injector),d=!s.rippleDisabled;d&&l.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:l,hasSetUpEvents:d}),e.removeAttribute(fl)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ie({token:i,factory:i.\u0275fac})}return i})();var Ym=Symbol("FIELD_TREE");var Qm=Symbol("IS_ASYNC_VALIDATION_RESOURCE"),Km=class{reducer;create;brand;[Qm];constructor(n,e){this.reducer=n,this.create=e}};function Ra(i){return typeof i=="function"&&i[Ym]===!0}var ur=new w("");var Ai=(()=>{class i{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}isSignalErrorState(e){if(!e)return!1;let t=e().invalid(),a=e().touched();return t&&a}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ie({token:i,factory:i.\u0275fac})}return i})();var Oi=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(n,e,t,a,o){this._defaultMatcher=n,this._parentFormGroup=t,this._parentForm=a,this._stateChanges=o,e?At(e.field)&&!e.updateValueAndValidity?(this.formField=e,this.ngControl=null):(this.formField=null,this.ngControl=e):this.ngControl=this.formField=null}updateErrorState(){let n=this.errorState,e=this._getCurrentErrorState(this.matcher||this._defaultMatcher);e!==n&&(this.errorState=e,this._stateChanges.next())}_getCurrentErrorState(n){if(this.formField&&n?.isSignalErrorState)return n.isSignalErrorState(this.formField.field())??!1;let e=this._parentFormGroup||this._parentForm,t=this.ngControl?this.ngControl.control:null;return n?.isErrorState(t,e)??!1}};var Kn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=x({type:i,selectors:[["mat-label"]]})}return i})(),og=new w("MatError");var bl=(()=>{class i{align="start";id=c(Fe).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||i)};static \u0275dir=x({type:i,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,a){t&2&&(fn("id",a.id),V("align",null),P("mat-mdc-form-field-hint-end",a.align==="end"))},inputs:{align:"align",id:"id"}})}return i})(),iu=new w("MatPrefix"),_l=(()=>{class i{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(t){return new(t||i)};static \u0275dir=x({type:i,selectors:[["","matPrefix",""],["","matIconPrefix",""],["","matTextPrefix",""]],inputs:{_isTextSelector:[0,"matTextPrefix","_isTextSelector"]},features:[ae([{provide:iu,useExisting:i}])]})}return i})(),rg=new w("MatSuffix");var au=new w("FloatingLabelParent"),Xm=(()=>{class i{_elementRef=c(D);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=c(Uo);_ngZone=c(W);_parent=c(au);_resizeSubscription=new Ee;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return sg(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=x({type:i,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,a){t&2&&P("mdc-floating-label--float-above",a.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return i})();function sg(i){let n=i;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var Zm="mdc-line-ripple--active",pr="mdc-line-ripple--deactivating",Jm=(()=>{class i{_elementRef=c(D);_cleanupTransitionEnd;constructor(){let e=c(W),t=c(we);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(pr),e.add(Zm)}deactivate(){this._elementRef.nativeElement.classList.add(pr)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,a=t.contains(pr);e.propertyName==="opacity"&&a&&t.remove(Zm,pr)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=x({type:i,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return i})(),eu=(()=>{class i{_elementRef=c(D);_ngZone=c(W);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=["notch"];return M({type:i,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(o,r){if(o&1&&Ie(e,5),o&2){let s;N(s=E())&&(r._notch=s.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(o,r){o&2&&P("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},ngContentSelectors:["*"],decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(o,r){o&1&&(ve(),dt(0,"div",1),We(1,"div",2,0),q(3),Ze(),dt(4,"div",3))},encapsulation:2})})()}return i})(),Aa=(()=>{class i{id;ngField=null;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;stateChanges=null;value;static \u0275fac=function(t){return new(t||i)};static \u0275dir=x({type:i})}return i})();var Oa=new w("MatFormField"),lg=new w("MAT_FORM_FIELD_DEFAULT_OPTIONS"),tu="fill",cg="auto",nu="fixed",dg="translateY(-50%)",Fi=(()=>{class i{_elementRef=c(D);_changeDetectorRef=c(xe);_platform=c(de);_idGenerator=c(Fe);_ngZone=c(W);_defaults=c(lg,{optional:!0});_currentDirection;_unwrapMaybeSignal(e){return At(e)?e():e}_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Tn("iconPrefixContainer");_textPrefixContainerSignal=Tn("textPrefixContainer");_iconSuffixContainerSignal=Tn("iconSuffixContainer");_textSuffixContainerSignal=Tn("textSuffixContainer");_prefixSuffixContainers=Ke(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=mc(Kn);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Dt(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||cg}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||tu;this._appearanceSignal.set(t)}_appearanceSignal=oe(tu);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||nu}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||nu}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new R;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Me();constructor(){let e=this._defaults,t=c(Be);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),kt(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=Ra(this._control.ngField)?null:this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&!Ra(this._control.ngField)&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Ke(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,a="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(a+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(a+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges?.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges?.pipe(nt([void 0,void 0]),ye(()=>[this._unwrapMaybeSignal(t.errorState),t.userAriaDescribedBy]),Qr(),Xe(([[o,r],[s,l]])=>o!==s||r!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&!Ra(t.ngField)&&(this._valueChanges=t.ngControl.valueChanges.pipe(te(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),vt(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._unwrapMaybeSignal(this._control.focused);e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){ts({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Ke(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._shouldAlwaysFloat()||this._unwrapMaybeSignal(this._control.shouldLabelFloat):!1}_shouldForward(e){let t=this._control?.ngField||this._control?.ngControl;if(!t)return!1;if(Ra(t)){let a=t();return e==="valid"?a.valid():e==="dirty"?a.dirty():e==="touched"?a.touched():e==="pending"?a.pending():e==="untouched"?!a.touched():e==="pristine"?!a.dirty():e==="invalid"?!a.valid():!1}else{let a=t;return e==="valid"?a.valid:e==="dirty"?a.dirty:e==="touched"?a.touched:e==="pending"?a.pending:e==="untouched"?a.untouched:e==="pristine"?a.pristine:e==="invalid"?a.invalid:!1}}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._unwrapMaybeSignal(this._control.errorState)?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,r=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),r&&e.push(r.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let t=this._control.describedByIds,a;if(t){let o=this._describedByIds||e;a=e.concat(t.filter(r=>r&&!o.includes(r)))}else a=e;this._control.setDescribedByIds(a),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,a=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,r=e?.getBoundingClientRect().width??0,s=t?.getBoundingClientRect().width??0,l=a?.getBoundingClientRect().width??0,d=o?.getBoundingClientRect().width??0,m=this._currentDirection==="rtl"?"-1":"1",u=`${r+s}px`,p=`calc(${m} * (${u} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,b=`var(--mat-mdc-form-field-label-transform, ${dg} translateX(${p}))`,v=r+s+l+d;return[b,v]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,a]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),a!==null&&this._notchedOutline?._setMaxWidth(a)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=["iconPrefixContainer"],t=["textPrefixContainer"],a=["iconSuffixContainer"],o=["textSuffixContainer"],r=["textField"],s=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],l=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function d($,ge){$&1&&O(0,"span",21)}function m($,ge){if($&1&&(f(0,"label",20),q(1,1),B(2,d,1,0,"span",21),g()),$&2){let y=L(2);C("floating",y._shouldLabelFloat())("monitorResize",y._hasOutline())("id",y._labelId),V("for",y._control.disableAutomaticLabeling?null:y._control.id),h(2),z(!y.hideRequiredMarker&&y._unwrapMaybeSignal(y._control.required)?2:-1)}}function u($,ge){if($&1&&B(0,m,3,5,"label",20),$&2){let y=L();z(y._hasFloatingLabel()?0:-1)}}function _($,ge){$&1&&O(0,"div",7)}function p($,ge){}function b($,ge){if($&1&&_e(0,p,0,0,"ng-template",13),$&2){L(2);let y=ht(1);C("ngTemplateOutlet",y)}}function v($,ge){if($&1&&(f(0,"div",9),B(1,b,1,1,null,13),g()),$&2){let y=L();C("matFormFieldNotchedOutlineOpen",y._shouldLabelFloat()),h(),z(y._forceDisplayInfixLabel()?-1:1)}}function I($,ge){$&1&&(f(0,"div",10,2),q(2,2),g())}function ee($,ge){$&1&&(f(0,"div",11,3),q(2,3),g())}function be($,ge){}function Ne($,ge){if($&1&&_e(0,be,0,0,"ng-template",13),$&2){L();let y=ht(1);C("ngTemplateOutlet",y)}}function ze($,ge){$&1&&(f(0,"div",14,4),q(2,4),g())}function cn($,ge){$&1&&(f(0,"div",15,5),q(2,5),g())}function wt($,ge){$&1&&O(0,"div",16)}function Qe($,ge){$&1&&(f(0,"div",18),q(1,6),g())}function et($,ge){if($&1&&(f(0,"mat-hint",22),F(1),g()),$&2){let y=L(2);C("id",y._hintLabelId),h(),Ae(y.hintLabel)}}function Zt($,ge){if($&1&&(f(0,"div",19),B(1,et,2,2,"mat-hint",22),q(2,7),O(3,"div",23),q(4,8),g()),$&2){let y=L();h(),z(y.hintLabel?1:-1)}}return M({type:i,selectors:[["mat-form-field"]],contentQueries:function(ge,y,fe){if(ge&1&&(lc(fe,y._labelChild,Kn,5),qe(fe,Aa,5)(fe,iu,5)(fe,rg,5)(fe,og,5)(fe,bl,5)),ge&2){ia();let Ge;N(Ge=E())&&(y._formFieldControl=Ge.first),N(Ge=E())&&(y._prefixChildren=Ge),N(Ge=E())&&(y._suffixChildren=Ge),N(Ge=E())&&(y._errorChildren=Ge),N(Ge=E())&&(y._hintChildren=Ge)}},viewQuery:function(ge,y){if(ge&1&&(Ja(y._iconPrefixContainerSignal,e,5)(y._textPrefixContainerSignal,t,5)(y._iconSuffixContainerSignal,a,5)(y._textSuffixContainerSignal,o,5),Ie(r,5)(e,5)(t,5)(a,5)(o,5)(Xm,5)(eu,5)(Jm,5)),ge&2){ia(4);let fe;N(fe=E())&&(y._textField=fe.first),N(fe=E())&&(y._iconPrefixContainer=fe.first),N(fe=E())&&(y._textPrefixContainer=fe.first),N(fe=E())&&(y._iconSuffixContainer=fe.first),N(fe=E())&&(y._textSuffixContainer=fe.first),N(fe=E())&&(y._floatingLabel=fe.first),N(fe=E())&&(y._notchedOutline=fe.first),N(fe=E())&&(y._lineRipple=fe.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(ge,y){ge&2&&P("mat-mdc-form-field-label-always-float",y._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",y._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",y._hasIconSuffix)("mat-form-field-invalid",y._unwrapMaybeSignal(y._control.errorState))("mat-form-field-disabled",y._unwrapMaybeSignal(y._control.disabled))("mat-form-field-autofilled",y._unwrapMaybeSignal(y._control.autofilled))("mat-form-field-appearance-fill",y.appearance=="fill")("mat-form-field-appearance-outline",y.appearance=="outline")("mat-form-field-hide-placeholder",y._hasFloatingLabel()&&!y._shouldLabelFloat())("mat-primary",y.color!=="accent"&&y.color!=="warn")("mat-accent",y.color==="accent")("mat-warn",y.color==="warn")("ng-untouched",y._shouldForward("untouched"))("ng-touched",y._shouldForward("touched"))("ng-pristine",y._shouldForward("pristine"))("ng-dirty",y._shouldForward("dirty"))("ng-valid",y._shouldForward("valid"))("ng-invalid",y._shouldForward("invalid"))("ng-pending",y._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[ae([{provide:Oa,useExisting:i},{provide:au,useExisting:i}])],ngContentSelectors:l,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(ge,y){if(ge&1&&(ve(s),_e(0,u,1,1,"ng-template",null,0,si),f(2,"div",6,1),X("click",function(Ge){return y._control.onContainerClick(Ge)}),B(4,_,1,0,"div",7),f(5,"div",8),B(6,v,2,2,"div",9),B(7,I,3,0,"div",10),B(8,ee,3,0,"div",11),f(9,"div",12),B(10,Ne,1,1,null,13),q(11),g(),B(12,ze,3,0,"div",14),B(13,cn,3,0,"div",15),g(),B(14,wt,1,0,"div",16),g(),f(15,"div",17),B(16,Qe,2,0,"div",18)(17,Zt,5,1,"div",19),g()),ge&2){let fe,Ge=y._unwrapMaybeSignal(y._control.disabled);h(2),P("mdc-text-field--filled",!y._hasOutline())("mdc-text-field--outlined",y._hasOutline())("mdc-text-field--no-label",!y._hasFloatingLabel())("mdc-text-field--disabled",Ge)("mdc-text-field--invalid",y._unwrapMaybeSignal(y._control.errorState)),h(2),z(!y._hasOutline()&&!Ge?4:-1),h(2),z(y._hasOutline()?6:-1),h(),z(y._hasIconPrefix?7:-1),h(),z(y._hasTextPrefix?8:-1),h(2),z(!y._hasOutline()||y._forceDisplayInfixLabel()?10:-1),h(2),z(y._hasTextSuffix?12:-1),h(),z(y._hasIconSuffix?13:-1),h(),z(y._hasOutline()?-1:14),h(),P("mat-mdc-form-field-subscript-dynamic-size",y.subscriptSizing==="dynamic");let Wa=y._getSubscriptMessageType();h(),z((fe=Wa)==="error"?16:fe==="hint"?17:-1)}},dependencies:[Xm,eu,li,Jm,bl],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-filled-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-outlined-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-filled-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-outlined-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-top-right-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) {
  background-color: var(--%NS%mat-form-field-filled-container-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--%NS%mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-hover-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-filled-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-filled-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-filled-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-filled-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-outlined-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-outlined-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-outlined-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-outlined-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-outline-color, var(--%NS%mat-sys-outline));
  border-width: var(--%NS%mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-hover-outline-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-focus-outline-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-hover-outline-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-focus-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--%NS%mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--%NS%mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--%NS%mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-active-indicator-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-hover-active-indicator-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-active-indicator-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-hover-active-indicator-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--%NS%mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-focus-active-indicator-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-focus-active-indicator-color, var(--%NS%mat-sys-error));
}

.mdc-line-ripple--%NS%active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--%NS%deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--%NS%no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --%NS%mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--%NS%mat-form-field-container-height, 56px);
  padding-top: var(--%NS%mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--%NS%mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--%NS%mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--%NS%mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--%NS%mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--%NS%mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --%NS%mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--%NS%mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--%NS%mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--%NS%mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--%NS%mat-form-field-error-text-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-subscript-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-form-field-subscript-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-form-field-subscript-text-size, var(--%NS%mat-sys-body-small-size));
  letter-spacing: var(--%NS%mat-form-field-subscript-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  font-weight: var(--%NS%mat-form-field-subscript-text-weight, var(--%NS%mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-form-field-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--%NS%mat-form-field-select-option-text-color, var(--%NS%mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--%NS%mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--%NS%mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--%NS%mat-form-field-enabled-select-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-focus-select-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --%NS%mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-container-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-form-field-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-form-field-container-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-form-field-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
  font-weight: var(--%NS%mat-form-field-container-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--%NS%mat-form-field-outlined-label-text-populated-size) * var(--%NS%mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--%NS%mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-trailing-icon-color, var(--%NS%mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-hover-trailing-icon-color, var(--%NS%mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-focus-trailing-icon-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--%NS%filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2})})()}return i})();var wn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=G({imports:[re]})}return i})();var mg=new w("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})}),vl=new w("MatChipAvatar"),ou=new w("MatChipTrailingIcon"),ru=new w("MatChipEdit"),yl=new w("MatChipRemove"),su=new w("MatChip"),lu=(()=>{class i{_elementRef=c(D);_parentChip=c(su);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){c(Oe).load(Vt),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button")}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=x({type:i,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(t,a){t&2&&(V("disabled",a._getDisabledAttribute())("aria-disabled",a.disabled),P("mdc-evolution-chip__action--primary",a._isPrimary)("mdc-evolution-chip__action--secondary",!a._isPrimary)("mdc-evolution-chip__action--trailing",!a._isPrimary&&!a._isLeading))},inputs:{disabled:[2,"disabled","disabled",S],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?-1:je(e)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return i})(),cu=(()=>{class i extends lu{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static \u0275fac=(()=>{let e;return function(a){return(e||(e=ue(i)))(a||i)}})();static \u0275dir=x({type:i,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(t,a){t&1&&X("click",function(r){return a._handleClick(r)})("keydown",function(r){return a._handleKeydown(r)}),t&2&&(V("tabindex",a._getTabindex()),P("mdc-evolution-chip__action--presentational",!1))},features:[Z]})}return i})(),hr=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=x({type:i,selectors:[["mat-chip-avatar"],["","matChipAvatar",""]],hostAttrs:["role","img",1,"mat-mdc-chip-avatar","mdc-evolution-chip__icon","mdc-evolution-chip__icon--primary"],features:[ae([{provide:vl,useExisting:i}])]})}return i})();var du=(()=>{class i extends cu{_isPrimary=!1;_handleClick(e){this.disabled||(e.stopPropagation(),e.preventDefault(),this._parentChip.remove())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&(e.stopPropagation(),e.preventDefault(),this._parentChip.remove())}static \u0275fac=(()=>{let e;return function(a){return(e||(e=ue(i)))(a||i)}})();static \u0275dir=x({type:i,selectors:[["","matChipRemove",""]],hostAttrs:["role","button",1,"mat-mdc-chip-remove","mat-mdc-chip-trailing-icon","mat-focus-indicator","mdc-evolution-chip__icon","mdc-evolution-chip__icon--trailing"],hostVars:1,hostBindings:function(t,a){t&2&&V("aria-hidden",null)},features:[ae([{provide:yl,useExisting:i}]),Z]})}return i})(),Yn=(()=>{class i{_changeDetectorRef=c(xe);_elementRef=c(D);_tagName=c(cc);_ngZone=c(W);_focusMonitor=c(Bt);_globalRippleOptions=c(Ni,{optional:!0});_document=c(ce);_onFocus=new R;_onBlur=new R;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=Me();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=c(Fe).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new Q;destroyed=new Q;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=c(mr);_injector=c(pe);constructor(){let e=c(Oe);e.load(Vt),e.load(Ln),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=vt(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this.destroyed.emit({chip:this}),this.destroyed.complete(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(t=>{let a=t._elementRef.nativeElement;return a===e||a.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let t=e!==null;t!==this._hasFocusInternal&&(this._hasFocusInternal=t,t?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],t=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function a(r,s){r&1&&(f(0,"span",3),q(1,1),g())}function o(r,s){r&1&&(f(0,"span",7),q(1,2),g())}return M({type:i,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(s,l,d){if(s&1&&qe(d,vl,5)(d,ru,5)(d,ou,5)(d,yl,5)(d,vl,5)(d,ou,5)(d,ru,5)(d,yl,5),s&2){let m;N(m=E())&&(l.leadingIcon=m.first),N(m=E())&&(l.editIcon=m.first),N(m=E())&&(l.trailingIcon=m.first),N(m=E())&&(l.removeIcon=m.first),N(m=E())&&(l._allLeadingIcons=m),N(m=E())&&(l._allTrailingIcons=m),N(m=E())&&(l._allEditIcons=m),N(m=E())&&(l._allRemoveIcons=m)}},viewQuery:function(s,l){if(s&1&&Ie(cu,5),s&2){let d;N(d=E())&&(l.primaryAction=d.first)}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(s,l){s&1&&X("keydown",function(m){return l._handleKeydown(m)}),s&2&&(fn("id",l.id),V("role",l.role)("aria-label",l.ariaLabel),Ve("mat-"+(l.color||"primary")),P("mdc-evolution-chip",!l._isBasicChip)("mdc-evolution-chip--disabled",l.disabled)("mdc-evolution-chip--with-trailing-action",l._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",l.leadingIcon)("mdc-evolution-chip--with-primary-icon",l.leadingIcon)("mdc-evolution-chip--with-avatar",l.leadingIcon)("mat-mdc-chip-with-avatar",l.leadingIcon)("mat-mdc-chip-highlighted",l.highlighted)("mat-mdc-chip-disabled",l.disabled)("mat-mdc-basic-chip",l._isBasicChip)("mat-mdc-standard-chip",!l._isBasicChip)("mat-mdc-chip-with-trailing-icon",l._hasTrailingIcon())("_mat-animation-noopable",l._animationsDisabled))},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",S],highlighted:[2,"highlighted","highlighted",S],disableRipple:[2,"disableRipple","disableRipple",S],disabled:[2,"disabled","disabled",S]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[ae([{provide:su,useExisting:i}])],ngContentSelectors:t,decls:9,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mat-mdc-chip-touch-target"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(s,l){s&1&&(ve(e),O(0,"span",0),f(1,"span",1)(2,"span",2),B(3,a,2,0,"span",3),f(4,"span",4),q(5),O(6,"span",5),g(),O(7,"span",6),g()(),B(8,o,2,0,"span",7)),s&2&&(h(3),z(l.leadingIcon?3:-1),h(5),z(l._hasTrailingIcon()?8:-1))},dependencies:[lu],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mat-mdc-chip-touch-target {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 48px;
  transform: translateY(-50%);
  display: var(--%NS%mat-chip-touch-target-display, block);
  pointer-events: auto;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-outline-width, 1px);
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-evolution-chip__action--%NS%primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--%NS%mat-chip-focus-outline-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, [dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--%NS%mat-chip-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-chip-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-chip-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-chip-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-chip-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  height: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--%NS%selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--%NS%mat-chip-trailing-action-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--%NS%mat-chip-trailing-action-focus-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  height: var(--%NS%mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--%NS%mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  height: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  font-size: var(--%NS%mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --%NS%mat-chip-with-icon-icon-color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-elevated-container-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
  --%NS%mat-chip-label-text-color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-outline-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-hover-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-hover-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--%NS%disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--%NS%mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--%NS%mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--%NS%mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-trailing-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--%NS%mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--%NS%mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-trailing-action-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-selected-trailing-action-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--%NS%mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--%NS%mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2})})()}return i})();var fr=(()=>{class i{_elementRef=c(D);_changeDetectorRef=c(xe);_dir=c(Be,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new R;_defaultRole="presentation";get chipFocusChanges(){return this._getChipStream(e=>e._onFocus)}get chipDestroyedChanges(){return this._getChipStream(e=>e.destroyed)}get chipRemovedChanges(){return this._getChipStream(e=>e.removed)}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(e){this._explicitRole=e}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new Nn;ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(e=>e._hasFocus())}_syncChipsState(){this._chips?.forEach(e=>{e._chipListDisabled=this._disabled,e._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(e){this._originatesFromChip(e)&&this._keyManager.onKeydown(e)}_isValidIndex(e){return e>=0&&e<this._chips.length}_allowFocusEscape(){let e=this._elementRef.nativeElement.tabIndex;e!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=e))}_getChipStream(e){return this._chips.changes.pipe(nt(null),qt(()=>vt(...this._chips.map(e))))}_originatesFromChip(e){let t=e.target;for(;t&&t!==this._elementRef.nativeElement;){if(t.classList.contains("mat-mdc-chip"))return!0;t=t.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(nt(this._chips)).subscribe(e=>{let t=[];e.forEach(a=>a._getActions().forEach(o=>t.push(o))),this._chipActions.reset(t),this._chipActions.notifyOnChanges()}),this._keyManager=new zn(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:"ltr").withHomeAndEnd().skipPredicate(e=>this._skipPredicate(e)),this.chipFocusChanges.pipe(te(this._destroyed)).subscribe(({chip:e})=>{let t=e._getSourceAction(document.activeElement);t&&this._keyManager.updateActiveItem(t)}),this._dir?.change.pipe(te(this._destroyed)).subscribe(e=>this._keyManager.withHorizontalOrientation(e))}_skipPredicate(e){return e.disabled}_trackChipSetChanges(){this._chips.changes.pipe(nt(null),te(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(te(this._destroyed)).subscribe(e=>{let a=this._chips.toArray().indexOf(e.chip),o=e.chip._hasFocus(),r=e.chip._hadFocusOnRemove&&this._keyManager.activeItem&&e.chip._getActions().includes(this._keyManager.activeItem),s=o||r;this._isValidIndex(a)&&s&&(this._lastDestroyedFocusedChipIndex=a)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let e=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),t=this._chips.toArray()[e];t.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():t.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){return M({type:i,selectors:[["mat-chip-set"]],contentQueries:function(a,o,r){if(a&1&&qe(r,Yn,5),a&2){let s;N(s=E())&&(o._chips=s)}},hostAttrs:[1,"mat-mdc-chip-set","mdc-evolution-chip-set"],hostVars:1,hostBindings:function(a,o){a&1&&X("keydown",function(s){return o._handleKeydown(s)}),a&2&&V("role",o.role)},inputs:{disabled:[2,"disabled","disabled",S],role:"role",tabIndex:[2,"tabIndex","tabIndex",t=>t==null?0:je(t)]},ngContentSelectors:["*"],decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(a,o){a&1&&(ve(),We(0,"div",0),q(1),Ze())},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 8px 0 8px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2})})()}return i})();var Pi=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=G({providers:[Ai,{provide:mg,useValue:{separatorKeyCodes:[13]}}],imports:[wn,re]})}return i})();var gr=class{applyChanges(n,e,t,a,o){n.forEachOperation((r,s,l)=>{let d,m;if(r.previousIndex==null){let u=t(r,s,l);d=e.createEmbeddedView(u.templateRef,u.context,u.index),m=Ht.INSERTED}else l==null?(e.remove(s),m=Ht.REMOVED):(d=e.get(s),e.move(d,l),m=Ht.MOVED);o&&o({context:d?.context,operation:m,record:r})})}detach(){}};var jt=new w("CDK_TABLE");var vr=(()=>{class i{template=c(rt);static \u0275fac=function(t){return new(t||i)};static \u0275dir=x({type:i,selectors:[["","cdkCellDef",""]]})}return i})(),yr=(()=>{class i{template=c(rt);static \u0275fac=function(t){return new(t||i)};static \u0275dir=x({type:i,selectors:[["","cdkHeaderCellDef",""]]})}return i})(),xr=(()=>{class i{template=c(rt);static \u0275fac=function(t){return new(t||i)};static \u0275dir=x({type:i,selectors:[["","cdkFooterCellDef",""]]})}return i})(),Li=(()=>{class i{_table=c(jt,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}static \u0275fac=function(t){return new(t||i)};static \u0275dir=x({type:i,selectors:[["","cdkColumnDef",""]],contentQueries:function(t,a,o){if(t&1&&qe(o,vr,5)(o,yr,5)(o,xr,5),t&2){let r;N(r=E())&&(a.cell=r.first),N(r=E())&&(a.headerCell=r.first),N(r=E())&&(a.footerCell=r.first)}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",S],stickyEnd:[2,"stickyEnd","stickyEnd",S]}})}return i})(),_r=class{constructor(n,e){e.nativeElement.classList.add(...n._columnCssClassName)}},hu=(()=>{class i extends _r{constructor(){super(c(Li),c(D))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=x({type:i,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[Z]})}return i})();var fu=(()=>{class i extends _r{constructor(){let e=c(Li),t=c(D);super(e,t);let a=e._table?._getCellRole();a&&t.nativeElement.setAttribute("role",a)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=x({type:i,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[Z]})}return i})();var Cl=(()=>{class i{template=c(rt);_differs=c(to);columns;_columnsDiffer;ngOnChanges(e){if(!this._columnsDiffer){let t=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(t).create(),this._columnsDiffer.diff(t)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof Pa?e.headerCell.template:this instanceof La?e.footerCell.template:e.cell.template}static \u0275fac=function(t){return new(t||i)};static \u0275dir=x({type:i,features:[Te]})}return i})(),Pa=(()=>{class i extends Cl{_table=c(jt,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=(()=>{let e;return function(a){return(e||(e=ue(i)))(a||i)}})();static \u0275dir=x({type:i,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",S]},features:[Z,Te]})}return i})(),La=(()=>{class i extends Cl{_table=c(jt,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=(()=>{let e;return function(a){return(e||(e=ue(i)))(a||i)}})();static \u0275dir=x({type:i,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",S]},features:[Z,Te]})}return i})(),wr=(()=>{class i extends Cl{_table=c(jt,{optional:!0});when;static \u0275fac=(()=>{let e;return function(a){return(e||(e=ue(i)))(a||i)}})();static \u0275dir=x({type:i,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},features:[Z]})}return i})(),rn=(()=>{class i{_viewContainer=c(it);cells;context;static mostRecentCellOutlet=null;constructor(){i.mostRecentCellOutlet=this}ngOnDestroy(){i.mostRecentCellOutlet===this&&(i.mostRecentCellOutlet=null)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=x({type:i,selectors:[["","cdkCellOutlet",""]]})}return i})(),Sl=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,a){t&1&&De(0,0)},dependencies:[rn],encapsulation:2,changeDetection:1})}return i})(),kl=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["cdk-footer-row"],["tr","cdk-footer-row",""]],hostAttrs:["role","row",1,"cdk-footer-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,a){t&1&&De(0,0)},dependencies:[rn],encapsulation:2,changeDetection:1})}return i})(),Ml=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,a){t&1&&De(0,0)},dependencies:[rn],encapsulation:2,changeDetection:1})}return i})(),gu=(()=>{class i{templateRef=c(rt);_contentClassNames=["cdk-no-data-row","cdk-row"];_cellClassNames=["cdk-cell","cdk-no-data-cell"];_cellSelector="td, cdk-cell, [cdk-cell], .cdk-cell";static \u0275fac=function(t){return new(t||i)};static \u0275dir=x({type:i,selectors:[["ng-template","cdkNoDataRow",""]]})}return i})(),mu=["top","bottom","left","right"],wl=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(n=>this._updateCachedSizes(n)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(n,e,t=!0,a=!0,o,r,s){this._isNativeHtmlTable=n,this._stickCellCss=e,this._isBrowser=t,this._needsPositionStickyOnElement=a,this.direction=o,this._positionListener=r,this._tableInjector=s,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(n,e){(e.includes("left")||e.includes("right"))&&this._removeFromStickyColumnReplayQueue(n);let t=[];for(let a of n)a.nodeType===a.ELEMENT_NODE&&t.push(a,...Array.from(a.children));He({write:()=>{for(let a of t)this._removeStickyStyle(a,e)}},{injector:this._tableInjector})}updateStickyColumns(n,e,t,a=!0,o=!0){if(!n.length||!this._isBrowser||!(e.some(I=>I)||t.some(I=>I))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let r=n[0],s=r.children.length,l=this.direction==="rtl",d=l?"right":"left",m=l?"left":"right",u=e.lastIndexOf(!0),_=t.indexOf(!0),p,b,v;o&&this._updateStickyColumnReplayQueue({rows:[...n],stickyStartStates:[...e],stickyEndStates:[...t]}),He({earlyRead:()=>{p=this._getCellWidths(r,a),b=this._getStickyStartColumnPositions(p,e),v=this._getStickyEndColumnPositions(p,t)},write:()=>{for(let I of n)for(let ee=0;ee<s;ee++){let be=I.children[ee];e[ee]&&this._addStickyStyle(be,d,b[ee],ee===u),t[ee]&&this._addStickyStyle(be,m,v[ee],ee===_)}this._positionListener&&p.some(I=>!!I)&&(this._positionListener.stickyColumnsUpdated({sizes:u===-1?[]:p.slice(0,u+1).map((I,ee)=>e[ee]?I:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:_===-1?[]:p.slice(_).map((I,ee)=>t[ee+_]?I:null).reverse()}))}},{injector:this._tableInjector})}stickRows(n,e,t){if(!this._isBrowser)return;let a=t==="bottom"?n.slice().reverse():n,o=t==="bottom"?e.slice().reverse():e,r=[],s=[],l=[];He({earlyRead:()=>{for(let d=0,m=0;d<a.length;d++){if(!o[d])continue;r[d]=m;let u=a[d];l[d]=this._isNativeHtmlTable?Array.from(u.children):[u];let _=this._retrieveElementSize(u).height;m+=_,s[d]=_}},write:()=>{let d=o.lastIndexOf(!0);for(let m=0;m<a.length;m++){if(!o[m])continue;let u=r[m],_=m===d;for(let p of l[m])this._addStickyStyle(p,t,u,_)}t==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:s,offsets:r,elements:l}):this._positionListener?.stickyFooterRowsUpdated({sizes:s,offsets:r,elements:l})}},{injector:this._tableInjector})}updateStickyFooterContainer(n,e){this._isNativeHtmlTable&&He({write:()=>{let t=n.querySelector("tfoot");t&&(e.some(a=>!a)?this._removeStickyStyle(t,["bottom"]):this._addStickyStyle(t,"bottom",0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(n,e){if(!n.classList.contains(this._stickCellCss))return;for(let a of e)n.style[a]="",n.classList.remove(this._borderCellCss[a]);mu.some(a=>e.indexOf(a)===-1&&n.style[a])?n.style.zIndex=this._getCalculatedZIndex(n):(n.style.zIndex="",this._needsPositionStickyOnElement&&(n.style.position=""),n.classList.remove(this._stickCellCss))}_addStickyStyle(n,e,t,a){n.classList.add(this._stickCellCss),a&&n.classList.add(this._borderCellCss[e]),n.style[e]=`${t}px`,n.style.zIndex=this._getCalculatedZIndex(n),this._needsPositionStickyOnElement&&(n.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(n){let e={top:100,bottom:10,left:1,right:1},t=0;for(let a of mu)n.style[a]&&(t+=e[a]);return t?`${t}`:""}_getCellWidths(n,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let t=[],a=n.children;for(let o=0;o<a.length;o++){let r=a[o];t.push(this._retrieveElementSize(r).width)}return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(n,e){let t=[],a=0;for(let o=0;o<n.length;o++)e[o]&&(t[o]=a,a+=n[o]);return t}_getStickyEndColumnPositions(n,e){let t=[],a=0;for(let o=n.length;o>0;o--)e[o]&&(t[o]=a,a+=n[o]);return t}_retrieveElementSize(n){let e=this._elemSizeCache.get(n);if(e)return e;let t=n.getBoundingClientRect(),a={width:t.width,height:t.height};return this._resizeObserver&&(this._elemSizeCache.set(n,a),this._resizeObserver.observe(n,{box:"border-box"})),a}_updateStickyColumnReplayQueue(n){this._removeFromStickyColumnReplayQueue(n.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(n)}_removeFromStickyColumnReplayQueue(n){let e=new Set(n);for(let t of this._updatedStickyColumnsParamsToReplay)t.rows=t.rows.filter(a=>!e.has(a));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(t=>!!t.rows.length)}_updateCachedSizes(n){let e=!1;for(let t of n){let a=t.borderBoxSize?.length?{width:t.borderBoxSize[0].inlineSize,height:t.borderBoxSize[0].blockSize}:{width:t.contentRect.width,height:t.contentRect.height};a.width!==this._elemSizeCache.get(t.target)?.width&&ug(t.target)&&(e=!0),this._elemSizeCache.set(t.target,a)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let t of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(t.rows,t.stickyStartStates,t.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function ug(i){return["cdk-cell","cdk-header-cell","cdk-footer-cell"].some(n=>i.classList.contains(n))}function uu(i){return Error(`Could not find column with id "${i}".`)}var Fa=new w("STICKY_POSITIONING_LISTENER");var Nl=(()=>{class i{viewContainer=c(it);elementRef=c(D);constructor(){let e=c(jt);e._rowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=x({type:i,selectors:[["","rowOutlet",""]]})}return i})(),El=(()=>{class i{viewContainer=c(it);elementRef=c(D);constructor(){let e=c(jt);e._headerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=x({type:i,selectors:[["","headerRowOutlet",""]]})}return i})(),Dl=(()=>{class i{viewContainer=c(it);elementRef=c(D);constructor(){let e=c(jt);e._footerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=x({type:i,selectors:[["","footerRowOutlet",""]]})}return i})(),Il=(()=>{class i{viewContainer=c(it);elementRef=c(D);constructor(){let e=c(jt);e._noDataRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=x({type:i,selectors:[["","noDataRowOutlet",""]]})}return i})(),Tl=(()=>{class i{_differs=c(to);_changeDetectorRef=c(xe);_elementRef=c(D);_dir=c(Be,{optional:!0});_platform=c(de);_viewRepeater;_viewportRuler=c(Et);_injector=c(pe);_virtualScrollViewport=c(am,{optional:!0,host:!0});_positionListener=c(Fa,{optional:!0})||c(Fa,{optional:!0,skipSelf:!0});_document=c(ce);_data;_renderedRange;_onDestroy=new R;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_rowDefsByView=new WeakMap;_isNativeHtmlTable;_stickyStyler;stickyCssClass="cdk-table-sticky";needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new R;_footerRowStickyUpdates=new R;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute("role");return e==="grid"||e==="treegrid"?"gridcell":"cell"}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new R;_dataStream=new R;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new Q;viewChange=new Ji({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;get renderedRows(){return this._renderRows}constructor(){c(new en("role"),{optional:!0})||this._elementRef.nativeElement.setAttribute("role","table"),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName==="TABLE",this._dataDiffer=this._differs.find([]).create((t,a)=>this.trackBy?this.trackBy(a.dataIndex,a.data):a)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(te(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new Ko:new gr,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),$o(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let t=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,t,(a,o,r)=>this._getEmbeddedViewArgs(a.item,r),a=>a.item.data,a=>{if(a.operation===Ht.INSERTED&&a.context){this._renderCellTemplateForItem(a.record.item.rowDef,a.context);let o=t.get(a.record.currentIndex);this._rowDefsByView.set(o,a.record.item.rowDef)}}),e.forEachIdentityChange(a=>{let o=a.currentIndex,r=t.get(o);if(this._rowDefsByView.get(r)!==a.item.rowDef){t.remove(o);let s=this._renderRow(this._rowOutlet,a.item.rowDef,o,{$implicit:a.item.data});this._rowDefsByView.set(s,a.item.rowDef)}else r.context.$implicit=a.item.data}),this._updateRowIndexContext(),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let a=pu(this._headerRowOutlet,"thead");a&&(a.style.display=e.length?"":"none")}let t=this._headerRowDefs.map(a=>a.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,t,"top"),this._headerRowDefs.forEach(a=>a.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let a=pu(this._footerRowOutlet,"tfoot");a&&(a.style.display=e.length?"":"none")}let t=this._footerRowDefs.map(a=>a.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,t,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,t),this._footerRowDefs.forEach(a=>a.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),t=this._getRenderedRows(this._rowOutlet),a=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...t,...a],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((o,r)=>{this._addStickyColumnStyles([o],this._headerRowDefs[r])}),this._rowDefs.forEach(o=>{let r=[];for(let s=0;s<t.length;s++)this._renderRows[s].rowDef===o&&r.push(t[s]);this._addStickyColumnStyles(r,o)}),a.forEach((o,r)=>{this._addStickyColumnStyles([o],this._footerRowDefs[r])}),Array.from(this._columnDefsByName.values()).forEach(o=>o.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||t,this._forceRecalculateCellWidths=t,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],t=Math.min(this._data.length,this._renderedRange.end),a=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let o=this._renderedRange.start;o<t;o++){let r=this._data[o],s=this._getRenderRowsForData(r,o,a.get(r));this._cachedRenderRowsMap.has(r)||this._cachedRenderRowsMap.set(r,new WeakMap);for(let l=0;l<s.length;l++){let d=s[l],m=this._cachedRenderRowsMap.get(d.data);m.has(d.rowDef)?m.get(d.rowDef).push(d):m.set(d.rowDef,[d]),e.push(d)}}return e}_getRenderRowsForData(e,t,a){return this._getRowDefs(e,t).map(r=>{let s=a&&a.has(r)?a.get(r):[];if(s.length){let l=s.shift();return l.dataIndex=t,l}else return{data:e,rowDef:r,dataIndex:t}})}_cacheColumnDefs(){this._columnDefsByName.clear(),br(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{this._columnDefsByName.has(t.name),this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=br(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=br(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=br(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(t=>!t.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(r,s)=>{let l=!!s.getColumnsDiff();return r||l},t=this._rowDefs.reduce(e,!1);t&&this._forceRenderDataRows();let a=this._headerRowDefs.reduce(e,!1);a&&this._forceRenderHeaderRows();let o=this._footerRowDefs.reduce(e,!1);return o&&this._forceRenderFooterRows(),t||a||o}_switchDataSource(e){this._data=[],$o(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;$o(this.dataSource)?e=this.dataSource.connect(this):Yr(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=Se(this.dataSource)),this._renderChangeSubscription=Jn([e,this.viewChange]).pipe(te(this._onDestroy)).subscribe(([t,a])=>{this._data=t||[],this._renderedRange=a,this._dataStream.next(t),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,t)=>this._renderRow(this._headerRowOutlet,e,t)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,t)=>this._renderRow(this._footerRowOutlet,e,t)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,t){let a=Array.from(t?.columns||[]).map(s=>{let l=this._columnDefsByName.get(s);if(!l)throw uu(s);return l}),o=a.map(s=>s.sticky),r=a.map(s=>s.stickyEnd);this._stickyStyler.updateStickyColumns(e,o,r,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let t=[];for(let a=0;a<e.viewContainer.length;a++){let o=e.viewContainer.get(a);t.push(o.rootNodes[0])}return t}_getRowDefs(e,t){if(this._rowDefs.length===1)return[this._rowDefs[0]];let a=[];if(this.multiTemplateDataRows)a=this._rowDefs.filter(o=>!o.when||o.when(t,e));else{let o=this._rowDefs.find(r=>r.when&&r.when(t,e))||this._defaultRowDef;o&&a.push(o)}return a.length,a}_getEmbeddedViewArgs(e,t){let a=e.rowDef,o={$implicit:e.data};return{templateRef:a.template,context:o,index:t}}_renderRow(e,t,a,o={}){let r=e.viewContainer.createEmbeddedView(t.template,o,a);return this._renderCellTemplateForItem(t,o),r}_renderCellTemplateForItem(e,t){for(let a of this._getCellTemplates(e))rn.mostRecentCellOutlet&&rn.mostRecentCellOutlet._viewContainer.createEmbeddedView(a,t);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let t=0,a=e.length;t<a;t++){let r=e.get(t).context;r.count=a,r.first=t===0,r.last=t===a-1,r.even=t%2===0,r.odd=!r.even,this.multiTemplateDataRows?(r.dataIndex=this._renderRows[t].dataIndex,r.renderIndex=t):r.index=this._renderRows[t].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,t=>{let a=this._columnDefsByName.get(t);if(!a)throw uu(t);return e.extractCellTemplate(a)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(t,a)=>t||a.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:"ltr",t=this._injector;this._stickyStyler=new wl(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,t),(this._dir?this._dir.change:Se()).pipe(te(this._onDestroy)).subscribe(a=>{this._stickyStyler.direction=a,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let t=typeof requestAnimationFrame<"u"?Kr:$r;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(ta(0,t),te(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(a,o)=>this._measureRangeSize(a,o)}),Jn([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(te(this._onDestroy)).subscribe(([a,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let r=0;r<o.elements.length;r++){let s=o.elements[r];if(s){let l=o.offsets[r],d=a!==0?Math.max(a-l,l):-l;for(let m of s)m.style.top=`${-d}px`}}}),Jn([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(te(this._onDestroy)).subscribe(([a,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let r=0;r<o.elements.length;r++){let s=o.elements[r];if(s)for(let l of s)l.style.bottom=`${a+o.offsets[r]}px`}})}_getOwnDefs(e){return e.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let t=this._rowOutlet.viewContainer.length===0;if(t===this._isShowingNoDataRow)return;let a=this._noDataRowOutlet.viewContainer;if(t){let o=a.createEmbeddedView(e.templateRef),r=o.rootNodes[0];if(o.rootNodes.length===1&&r?.nodeType===this._document.ELEMENT_NODE){r.setAttribute("role","row"),r.classList.add(...e._contentClassNames);let s=r.querySelectorAll(e._cellSelector);for(let l=0;l<s.length;l++)s[l].classList.add(...e._cellClassNames)}}else a.clear();this._isShowingNoDataRow=t,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,t){if(e.start>=e.end||t!=="vertical")return 0;let a=this.viewChange.value,o=this._rowOutlet.viewContainer;e.start<a.start||e.end>a.end;let r=e.start-a.start,s=e.end-e.start,l,d;for(let _=0;_<s;_++){let p=o.get(_+r);if(p&&p.rootNodes.length){l=d=p.rootNodes[0];break}}for(let _=s-1;_>-1;_--){let p=o.get(_+r);if(p&&p.rootNodes.length){d=p.rootNodes[p.rootNodes.length-1];break}}let m=l?.getBoundingClientRect?.(),u=d?.getBoundingClientRect?.();return m&&u?u.bottom-m.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=[[["caption"]],[["colgroup"],["col"]],"*"],t=["caption","colgroup, col","*"];function a(s,l){s&1&&q(0,2)}function o(s,l){s&1&&(f(0,"thead",0),De(1,1),g(),f(2,"tbody",0),De(3,2)(4,3),g(),f(5,"tfoot",0),De(6,4),g())}function r(s,l){s&1&&De(0,1)(1,2)(2,3)(3,4)}return M({type:i,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(l,d,m){if(l&1&&qe(m,gu,5)(m,Li,5)(m,wr,5)(m,Pa,5)(m,La,5),l&2){let u;N(u=E())&&(d._noDataRow=u.first),N(u=E())&&(d._contentColumnDefs=u),N(u=E())&&(d._contentRowDefs=u),N(u=E())&&(d._contentHeaderRowDefs=u),N(u=E())&&(d._contentFooterRowDefs=u)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(l,d){l&2&&P("cdk-table-fixed-layout",d.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",S],fixedLayout:[2,"fixedLayout","fixedLayout",S],recycleRows:[2,"recycleRows","recycleRows",S]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[ae([{provide:jt,useExisting:i},{provide:Fa,useValue:null}])],ngContentSelectors:t,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(l,d){l&1&&(ve(e),q(0),q(1,1),B(2,a,1,0),B(3,o,7,0)(4,r,4,0)),l&2&&(h(2),z(d._isServer?2:-1),h(),z(d._isNativeHtmlTable?3:4))},dependencies:[El,Nl,Il,Dl],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2,changeDetection:1})})()}return i})();function br(i,n){return i.concat(Array.from(n))}function pu(i,n){let e=n.toUpperCase(),t=i.viewContainer.element.nativeElement;for(;t;){let a=t.nodeType===1?t.nodeName:null;if(a===e)return t;if(a==="TABLE")break;t=t.parentNode}return null}var bu=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=G({imports:[xa]})}return i})();var Qn=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new R;bulk={select:n=>this._select(n),deselect:n=>this._deselect(n),setSelection:n=>this._setSelection(n)};constructor(n=!1,e,t=!0,a){this._multiple=n,this._emitChanges=t,this.compareWith=a,e&&e.length&&(n?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...n){return this._select(n)}deselect(...n){return this._deselect(n)}setSelection(...n){return this._setSelection(n)}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_select(n){this._verifyValueAssignment(n),n.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(n){this._verifyValueAssignment(n),n.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(n){this._verifyValueAssignment(n);let e=this.selected,t=new Set(n.map(o=>this._getConcreteValue(o)));n.forEach(o=>this._markSelected(o)),e.filter(o=>!t.has(this._getConcreteValue(o,t))).forEach(o=>this._unmarkSelected(o));let a=this._hasQueuedChanges();return this._emitChangeEvent(),a}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(n,t))return t;return n}else return n}};var Vi=(()=>{class i extends Tl{stickyCssClass="mat-mdc-table-sticky";needsPositionStickyOnElement=!1;static \u0275fac=(()=>{let e;return function(a){return(e||(e=ue(i)))(a||i)}})();static \u0275cmp=(function(){let e=[[["caption"]],[["colgroup"],["col"]],"*"],t=["caption","colgroup, col","*"];function a(s,l){s&1&&q(0,2)}function o(s,l){s&1&&(f(0,"thead",0),De(1,1),g(),f(2,"tbody",2),De(3,3)(4,4),g(),f(5,"tfoot",0),De(6,5),g())}function r(s,l){s&1&&De(0,1)(1,3)(2,4)(3,5)}return M({type:i,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(l,d){l&2&&P("mat-table-fixed-layout",d.fixedLayout)},exportAs:["matTable"],features:[ae([{provide:Tl,useExisting:i},{provide:jt,useExisting:i},{provide:Fa,useValue:null}]),Z],ngContentSelectors:t,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(l,d){l&1&&(ve(e),q(0),q(1,1),B(2,a,1,0),B(3,o,7,0)(4,r,4,0)),l&2&&(h(2),z(d._isServer?2:-1),h(),z(d._isNativeHtmlTable?3:4))},dependencies:[El,Nl,Il,Dl],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--%NS%mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--%NS%mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--%NS%mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--%NS%mat-table-background-color, var(--%NS%mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-header-container-height, 56px);
  color: var(--%NS%mat-table-header-headline-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-header-headline-font, var(--%NS%mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-header-headline-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-size: var(--%NS%mat-table-header-headline-size, var(--%NS%mat-sys-title-small-size, 14px));
  font-weight: var(--%NS%mat-table-header-headline-weight, var(--%NS%mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--%NS%mat-table-row-item-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-table-row-item-label-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-row-item-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-row-item-label-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-row-item-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-footer-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-footer-supporting-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-footer-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-footer-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-footer-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  letter-spacing: var(--%NS%mat-table-footer-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-header-headline-tracking, var(--%NS%mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2,changeDetection:1})})()}return i})(),Bi=(()=>{class i extends vr{static \u0275fac=(()=>{let e;return function(a){return(e||(e=ue(i)))(a||i)}})();static \u0275dir=x({type:i,selectors:[["","matCellDef",""]],features:[ae([{provide:vr,useExisting:i}]),Z]})}return i})(),zi=(()=>{class i extends yr{static \u0275fac=(()=>{let e;return function(a){return(e||(e=ue(i)))(a||i)}})();static \u0275dir=x({type:i,selectors:[["","matHeaderCellDef",""]],features:[ae([{provide:yr,useExisting:i}]),Z]})}return i})(),_u=(()=>{class i extends xr{static \u0275fac=(()=>{let e;return function(a){return(e||(e=ue(i)))(a||i)}})();static \u0275dir=x({type:i,selectors:[["","matFooterCellDef",""]],features:[ae([{provide:xr,useExisting:i}]),Z]})}return i})(),Hi=(()=>{class i extends Li{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static \u0275fac=(()=>{let e;return function(a){return(e||(e=ue(i)))(a||i)}})();static \u0275dir=x({type:i,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},features:[ae([{provide:Li,useExisting:i}]),Z]})}return i})(),ji=(()=>{class i extends hu{static \u0275fac=(()=>{let e;return function(a){return(e||(e=ue(i)))(a||i)}})();static \u0275dir=x({type:i,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[Z]})}return i})();var Gi=(()=>{class i extends fu{static \u0275fac=(()=>{let e;return function(a){return(e||(e=ue(i)))(a||i)}})();static \u0275dir=x({type:i,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[Z]})}return i})();var Ui=(()=>{class i extends Pa{static \u0275fac=(()=>{let e;return function(a){return(e||(e=ue(i)))(a||i)}})();static \u0275dir=x({type:i,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",S]},features:[ae([{provide:Pa,useExisting:i}]),Z]})}return i})(),vu=(()=>{class i extends La{static \u0275fac=(()=>{let e;return function(a){return(e||(e=ue(i)))(a||i)}})();static \u0275dir=x({type:i,selectors:[["","matFooterRowDef",""]],inputs:{columns:[0,"matFooterRowDef","columns"],sticky:[2,"matFooterRowDefSticky","sticky",S]},features:[ae([{provide:La,useExisting:i}]),Z]})}return i})(),Wi=(()=>{class i extends wr{static \u0275fac=(()=>{let e;return function(a){return(e||(e=ue(i)))(a||i)}})();static \u0275dir=x({type:i,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},features:[ae([{provide:wr,useExisting:i}]),Z]})}return i})(),qi=(()=>{class i extends Sl{static \u0275fac=(()=>{let e;return function(a){return(e||(e=ue(i)))(a||i)}})();static \u0275cmp=M({type:i,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[ae([{provide:Sl,useExisting:i}]),Z],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,a){t&1&&De(0,0)},dependencies:[rn],encapsulation:2,changeDetection:1})}return i})(),yu=(()=>{class i extends kl{static \u0275fac=(()=>{let e;return function(a){return(e||(e=ue(i)))(a||i)}})();static \u0275cmp=M({type:i,selectors:[["mat-footer-row"],["tr","mat-footer-row",""]],hostAttrs:["role","row",1,"mat-mdc-footer-row","mdc-data-table__row"],exportAs:["matFooterRow"],features:[ae([{provide:kl,useExisting:i}]),Z],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,a){t&1&&De(0,0)},dependencies:[rn],encapsulation:2,changeDetection:1})}return i})(),$i=(()=>{class i extends Ml{static \u0275fac=(()=>{let e;return function(a){return(e||(e=ue(i)))(a||i)}})();static \u0275cmp=M({type:i,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[ae([{provide:Ml,useExisting:i}]),Z],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,a){t&1&&De(0,0)},dependencies:[rn],encapsulation:2,changeDetection:1})}return i})();var Ki=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=G({imports:[bu,re]})}return i})();var xu=(()=>{class i{transform(e){return e>=100?"green":e>=65?"orange":"red"}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275pipe=Mt({name:"colorForStatusValue",type:i,pure:!0})}}return i})();function pg(i,n){i&1&&(f(0,"th",11),F(1,"Name"),g())}function hg(i,n){if(i&1&&(f(0,"td",12),F(1),k(2,"translate"),g()),i&2){let e=n.$implicit;h(),he(" ",H(2,1,"stats."+e.stat_id)," ")}}function fg(i,n){i&1&&(f(0,"th",13),F(1),k(2,"translate"),g()),i&2&&(h(),he(" ",H(2,1,"value")," "))}function gg(i,n){if(i&1&&(f(0,"td",14),F(1),g()),i&2){let e=n.$implicit;h(),he(" ",e.base_stat," ")}}function bg(i,n){i&1&&(f(0,"th",13),F(1),k(2,"translate"),g()),i&2&&(h(),he(" ",H(2,1,"graphicValue")," "))}function _g(i,n){if(i&1&&(f(0,"td",15),O(1,"div",16),k(2,"colorForStatusValue"),g()),i&2){let e=n.$implicit;h(),$e("width",e.base_stat/200*100,"%")("background-color",H(2,5,e.base_stat)),V("aria-label",e.base_stat+" / 200")}}function vg(i,n){i&1&&O(0,"tr",17)}function yg(i,n){i&1&&O(0,"tr",18)}var wu=(()=>{class i{constructor(){this.pokemonStats=tn([]),this.displayedColumns=["name","value","valueVisual"]}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=M({type:i,selectors:[["app-pokemon-status-table"]],inputs:{pokemonStats:[1,"pokemonStats"]},decls:12,vars:3,consts:[["mat-table","",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","value"],["mat-header-cell","","class","numeric-cell",4,"matHeaderCellDef"],["mat-cell","","class","numeric-cell",4,"matCellDef"],["matColumnDef","valueVisual"],["mat-cell","","class","stat-value-cell",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-cell","",1,"numeric-cell"],["mat-cell","",1,"numeric-cell"],["mat-cell","",1,"stat-value-cell"],["role","img",1,"statusBar"],["mat-header-row",""],["mat-row",""]],template:function(t,a){t&1&&(f(0,"table",0),yt(1,1),_e(2,pg,2,0,"th",2)(3,hg,3,3,"td",3),xt(),yt(4,4),_e(5,fg,3,3,"th",5)(6,gg,2,1,"td",6),xt(),yt(7,7),_e(8,bg,3,3,"th",5)(9,_g,3,7,"td",8),xt(),_e(10,vg,1,0,"tr",9)(11,yg,1,0,"tr",10),g()),t&2&&(C("dataSource",a.pokemonStats()),h(10),C("matHeaderRowDef",a.displayedColumns),h(),C("matRowDefColumns",a.displayedColumns))},dependencies:[Ki,Vi,zi,Ui,Hi,Bi,Wi,ji,Gi,qi,$i,ft,xu],styles:[".statusBar[_ngcontent-%COMP%]{display:block;min-width:2px;height:10px;margin-left:auto;border-radius:999px}.stat-value-cell[_ngcontent-%COMP%]{width:45%}td[mat-cell][_ngcontent-%COMP%]{padding-block:10px}"]})}}return i})();var le;(function(i){i[i.NORMAL=1]="NORMAL",i[i.FIGHTING=2]="FIGHTING",i[i.FLYING=3]="FLYING",i[i.POISON=4]="POISON",i[i.GROUND=5]="GROUND",i[i.ROCK=6]="ROCK",i[i.BUG=7]="BUG",i[i.GHOST=8]="GHOST",i[i.STEEL=9]="STEEL",i[i.FIRE=10]="FIRE",i[i.WATER=11]="WATER",i[i.GRASS=12]="GRASS",i[i.ELECTRIC=13]="ELECTRIC",i[i.PSYCHIC=14]="PSYCHIC",i[i.ICE=15]="ICE",i[i.DRAGON=16]="DRAGON",i[i.DARK=17]="DARK",i[i.FAIRY=18]="FAIRY"})(le||(le={}));var Yi=class{static{this.identifierMap=[{id:le.NORMAL,identifier:"normal"},{id:le.FIGHTING,identifier:"fighting"},{id:le.FLYING,identifier:"flying"},{id:le.POISON,identifier:"poison"},{id:le.GROUND,identifier:"ground"},{id:le.ROCK,identifier:"rock"},{id:le.BUG,identifier:"bug"},{id:le.GHOST,identifier:"ghost"},{id:le.STEEL,identifier:"steel"},{id:le.FIRE,identifier:"fire"},{id:le.WATER,identifier:"water"},{id:le.GRASS,identifier:"grass"},{id:le.ELECTRIC,identifier:"electric"},{id:le.PSYCHIC,identifier:"psychic"},{id:le.ICE,identifier:"ice"},{id:le.DRAGON,identifier:"dragon"},{id:le.DARK,identifier:"dark"},{id:le.FAIRY,identifier:"fairy"}]}static{this.availableTypes=[le.NORMAL,le.FIGHTING,le.FLYING,le.POISON,le.GROUND,le.ROCK,le.BUG,le.GHOST,le.STEEL,le.FIRE,le.WATER,le.GRASS,le.ELECTRIC,le.PSYCHIC,le.ICE,le.DRAGON,le.DARK,le.FAIRY]}};var Qi=(()=>{class i{transform(e){return Yi.identifierMap.find(t=>t.id===e)?.identifier??""}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275pipe=Mt({name:"typeToName",type:i,pure:!0})}}return i})();var xg={bug:"#92BC2C",dark:"#595761",dragon:"#0C69C8",electric:"#F2D94E",fire:"#FBA54C",fairy:"#EE90E6",fighting:"#D3425F",flying:"#A1BBEC",ghost:"#5F6DBC",grass:"#5FBD58",ground:"#DA7C4D",ice:"#75D0C1",normal:"#A0A29F",poison:"#B763CF",psychic:"#FA8581",rock:"#C9BB8A",steel:"#5695A3",water:"#539DDF"},Cr=(()=>{class i{transform(e){return xg[e]??"primary"}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275pipe=Mt({name:"colorForType",type:i,pure:!0})}}return i})();function wg(i,n){i&1&&(f(0,"th",9),F(1),k(2,"translate"),g()),i&2&&(h(),Ae(H(2,1,"filter.types")))}function Cg(i,n){if(i&1&&(f(0,"td",10)(1,"mat-chip",11),k(2,"typeToName"),k(3,"colorForType"),O(4,"img",12),k(5,"typeToName"),F(6),k(7,"typeToName"),k(8,"translate"),g()()),i&2){let e=n.$implicit;h(),$e("--%NS%type-color",H(3,6,H(2,4,e.typeId))),h(3),C("src","./assets/images/types/"+H(5,8,e.typeId)+".svg"),h(2),he(" ",H(8,12,"types."+H(7,10,e.typeId))," ")}}function Sg(i,n){i&1&&(f(0,"th",13),F(1),k(2,"translate"),g()),i&2&&(h(),he(" ",H(2,1,"value")," "))}function kg(i,n){if(i&1&&(f(0,"td",14),F(1),k(2,"translate"),g()),i&2){let e=n.$implicit;h(),he(" ",e.damage===0?H(2,1,"immune"):e.damage+"x"," ")}}function Mg(i,n){i&1&&O(0,"tr",15)}function Ng(i,n){i&1&&O(0,"tr",16)}var Cu=(()=>{class i{constructor(){this.typeEffectiveness=tn([]),this.displayedColumns=["type","damage"]}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=M({type:i,selectors:[["app-pokemon-type-effectiveness-table"]],inputs:{typeEffectiveness:[1,"typeEffectiveness"]},decls:9,vars:3,consts:[["mat-table","",3,"dataSource"],["matColumnDef","type"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","damage"],["mat-header-cell","","class","numeric-cell",4,"matHeaderCellDef"],["mat-cell","","class","numeric-cell",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],[1,"type-chip"],["matChipAvatar","","alt","",3,"src"],["mat-header-cell","",1,"numeric-cell"],["mat-cell","",1,"numeric-cell"],["mat-header-row",""],["mat-row",""]],template:function(t,a){if(t&1&&(f(0,"table",0),yt(1,1),_e(2,wg,3,3,"th",2)(3,Cg,9,14,"td",3),xt(),yt(4,4),_e(5,Sg,3,3,"th",5)(6,kg,3,3,"td",6),xt(),_e(7,Mg,1,0,"tr",7)(8,Ng,1,0,"tr",8),g()),t&2){let o=a.typeEffectiveness();C("dataSource",o),h(7),C("matHeaderRowDef",a.displayedColumns),h(),C("matRowDefColumns",a.displayedColumns)}},dependencies:[$t,Ki,Vi,zi,Ui,Hi,Bi,Wi,ji,Gi,qi,$i,Pi,Yn,hr,ft,Qi,Cr],encapsulation:2})}}return i})();var Sr=[{id:"1",identifier:"red-blue",generation_id:"1",order:"3"},{id:"2",identifier:"yellow",generation_id:"1",order:"4"},{id:"3",identifier:"gold-silver",generation_id:"2",order:"5"},{id:"4",identifier:"crystal",generation_id:"2",order:"6"},{id:"5",identifier:"ruby-sapphire",generation_id:"3",order:"7"},{id:"6",identifier:"emerald",generation_id:"3",order:"8"},{id:"7",identifier:"firered-leafgreen",generation_id:"3",order:"11"},{id:"8",identifier:"diamond-pearl",generation_id:"4",order:"12"},{id:"9",identifier:"platinum",generation_id:"4",order:"13"},{id:"10",identifier:"heartgold-soulsilver",generation_id:"4",order:"14"},{id:"11",identifier:"black-white",generation_id:"5",order:"15"},{id:"12",identifier:"colosseum",generation_id:"3",order:"9"},{id:"13",identifier:"xd",generation_id:"3",order:"10"},{id:"14",identifier:"black-2-white-2",generation_id:"5",order:"16"},{id:"15",identifier:"x-y",generation_id:"6",order:"17"},{id:"16",identifier:"omega-ruby-alpha-sapphire",generation_id:"6",order:"18"},{id:"17",identifier:"sun-moon",generation_id:"7",order:"19"},{id:"18",identifier:"ultra-sun-ultra-moon",generation_id:"7",order:"20"},{id:"19",identifier:"lets-go-pikachu-lets-go-eevee",generation_id:"7",order:"21"},{id:"20",identifier:"sword-shield",generation_id:"8",order:"22"},{id:"21",identifier:"the-isle-of-armor",generation_id:"8",order:"23"},{id:"22",identifier:"the-crown-tundra",generation_id:"8",order:"24"},{id:"23",identifier:"brilliant-diamond-shining-pearl",generation_id:"8",order:"25"},{id:"24",identifier:"legends-arceus",generation_id:"8",order:"26"},{id:"25",identifier:"scarlet-violet",generation_id:"9",order:"27"},{id:"26",identifier:"the-teal-mask",generation_id:"9",order:"28"},{id:"27",identifier:"the-indigo-disk",generation_id:"9",order:"29"},{id:"28",identifier:"red-green-japan",generation_id:"1",order:"1"},{id:"29",identifier:"blue-japan",generation_id:"1",order:"2"},{id:"30",identifier:"legends-za",generation_id:"9",order:"30"},{id:"31",identifier:"mega-dimension",generation_id:"9",order:"31"},{id:"32",identifier:"champions",generation_id:"9",order:"32"},{id:""}];var Su=(()=>{class i{transform(e,t){return e.find(a=>a.local_language_id===t)?.name??"UNKNOWN"}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275pipe=Mt({name:"moveName",type:i,pure:!0})}}return i})();var ku=[{version_id:"1",local_language_id:"1",name:"\u8D64"},{version_id:"1",local_language_id:"3",name:"\uB808\uB4DC"},{version_id:"1",local_language_id:"4",name:"\u7D05"},{version_id:"1",local_language_id:"5",name:"Rouge"},{version_id:"1",local_language_id:"6",name:"Rot"},{version_id:"1",local_language_id:"7",name:"Rojo"},{version_id:"1",local_language_id:"8",name:"Rossa"},{version_id:"1",local_language_id:"9",name:"Red"},{version_id:"1",local_language_id:"12",name:"\u7D05"},{version_id:"1",local_language_id:"14",name:"Rojo"},{version_id:"2",local_language_id:"1",name:"\u9752"},{version_id:"2",local_language_id:"3",name:"\uBE14\uB8E8"},{version_id:"2",local_language_id:"4",name:"\u85CD"},{version_id:"2",local_language_id:"5",name:"Bleu"},{version_id:"2",local_language_id:"6",name:"Blau"},{version_id:"2",local_language_id:"7",name:"Azul"},{version_id:"2",local_language_id:"8",name:"Blu"},{version_id:"2",local_language_id:"9",name:"Blue"},{version_id:"2",local_language_id:"12",name:"\u85CD"},{version_id:"2",local_language_id:"14",name:"Azul"},{version_id:"3",local_language_id:"1",name:"\u30D4\u30AB\u30C1\u30E5\u30A6"},{version_id:"3",local_language_id:"3",name:"\uD53C\uCE74\uCE04"},{version_id:"3",local_language_id:"4",name:"\u76AE\u5361\u4E18"},{version_id:"3",local_language_id:"5",name:"Jaune"},{version_id:"3",local_language_id:"6",name:"Gelb"},{version_id:"3",local_language_id:"7",name:"Amarillo"},{version_id:"3",local_language_id:"8",name:"Gialla"},{version_id:"3",local_language_id:"9",name:"Yellow"},{version_id:"3",local_language_id:"12",name:"\u76AE\u5361\u4E18"},{version_id:"3",local_language_id:"14",name:"Amarillo"},{version_id:"4",local_language_id:"1",name:"\u91D1"},{version_id:"4",local_language_id:"3",name:"\uACE8\uB4DC"},{version_id:"4",local_language_id:"4",name:"\u91D1"},{version_id:"4",local_language_id:"5",name:"Or"},{version_id:"4",local_language_id:"6",name:"Gold"},{version_id:"4",local_language_id:"7",name:"Oro"},{version_id:"4",local_language_id:"8",name:"Oro"},{version_id:"4",local_language_id:"9",name:"Gold"},{version_id:"4",local_language_id:"12",name:"\u91D1"},{version_id:"4",local_language_id:"14",name:"Oro"},{version_id:"5",local_language_id:"1",name:"\u9280"},{version_id:"5",local_language_id:"3",name:"\uC2E4\uBC84"},{version_id:"5",local_language_id:"4",name:"\u9280"},{version_id:"5",local_language_id:"5",name:"Argent"},{version_id:"5",local_language_id:"6",name:"Silber"},{version_id:"5",local_language_id:"7",name:"Plata"},{version_id:"5",local_language_id:"8",name:"Argento"},{version_id:"5",local_language_id:"9",name:"Silver"},{version_id:"5",local_language_id:"12",name:"\u9280"},{version_id:"5",local_language_id:"14",name:"Plata"},{version_id:"6",local_language_id:"1",name:"\u30AF\u30EA\u30B9\u30BF\u30EB"},{version_id:"6",local_language_id:"3",name:"\uD06C\uB9AC\uC2A4\uD0C8"},{version_id:"6",local_language_id:"4",name:"\u6C34\u6676"},{version_id:"6",local_language_id:"5",name:"Cristal"},{version_id:"6",local_language_id:"6",name:"Kristall"},{version_id:"6",local_language_id:"7",name:"Cristal"},{version_id:"6",local_language_id:"8",name:"Cristallo"},{version_id:"6",local_language_id:"9",name:"Crystal"},{version_id:"6",local_language_id:"12",name:"\u6C34\u6676"},{version_id:"6",local_language_id:"14",name:"Cristal"},{version_id:"7",local_language_id:"1",name:"\u30EB\u30D3\u30FC"},{version_id:"7",local_language_id:"3",name:"\uB8E8\uBE44"},{version_id:"7",local_language_id:"4",name:"\u7D05\u5BF6\u77F3"},{version_id:"7",local_language_id:"5",name:"Rubis"},{version_id:"7",local_language_id:"6",name:"Rubin"},{version_id:"7",local_language_id:"7",name:"Rub\xED"},{version_id:"7",local_language_id:"8",name:"Rubino"},{version_id:"7",local_language_id:"9",name:"Ruby"},{version_id:"7",local_language_id:"12",name:"\u7D05\u5BF6\u77F3"},{version_id:"7",local_language_id:"14",name:"Rub\xED"},{version_id:"8",local_language_id:"1",name:"\u30B5\u30D5\u30A1\u30A4\u30A2"},{version_id:"8",local_language_id:"3",name:"\uC0AC\uD30C\uC774\uC5B4"},{version_id:"8",local_language_id:"4",name:"\u85CD\u5BF6\u77F3"},{version_id:"8",local_language_id:"5",name:"Saphir"},{version_id:"8",local_language_id:"6",name:"Saphir"},{version_id:"8",local_language_id:"7",name:"Zafiro"},{version_id:"8",local_language_id:"8",name:"Zaffiro"},{version_id:"8",local_language_id:"9",name:"Sapphire"},{version_id:"8",local_language_id:"12",name:"\u85CD\u5BF6\u77F3"},{version_id:"8",local_language_id:"14",name:"Zafiro"},{version_id:"9",local_language_id:"1",name:"\u30A8\u30E1\u30E9\u30EB\u30C9"},{version_id:"9",local_language_id:"3",name:"\uC5D0\uBA54\uB784\uB4DC"},{version_id:"9",local_language_id:"4",name:"\u7DA0\u5BF6\u77F3"},{version_id:"9",local_language_id:"5",name:"\xC9meraude"},{version_id:"9",local_language_id:"6",name:"Smaragd"},{version_id:"9",local_language_id:"7",name:"Esmeralda"},{version_id:"9",local_language_id:"8",name:"Smeraldo"},{version_id:"9",local_language_id:"9",name:"Emerald"},{version_id:"9",local_language_id:"12",name:"\u7DA0\u5BF6\u77F3"},{version_id:"9",local_language_id:"14",name:"Esmeralda"},{version_id:"10",local_language_id:"1",name:"\u30D5\u30A1\u30A4\u30A2\u30EC\u30C3\u30C9"},{version_id:"10",local_language_id:"3",name:"\uD30C\uC774\uC5B4\uB808\uB4DC"},{version_id:"10",local_language_id:"4",name:"\u706B\u7D05"},{version_id:"10",local_language_id:"5",name:"Rouge Feu"},{version_id:"10",local_language_id:"6",name:"Feuerrot"},{version_id:"10",local_language_id:"7",name:"Rojo Fuego"},{version_id:"10",local_language_id:"8",name:"Rosso Fuoco"},{version_id:"10",local_language_id:"9",name:"FireRed"},{version_id:"10",local_language_id:"12",name:"\u706B\u7D05"},{version_id:"10",local_language_id:"14",name:"Rojo Fuego"},{version_id:"11",local_language_id:"1",name:"\u30EA\u30FC\u30D5\u30B0\u30EA\u30FC\u30F3"},{version_id:"11",local_language_id:"3",name:"\uB9AC\uD504\uADF8\uB9B0"},{version_id:"11",local_language_id:"4",name:"\u8449\u7DA0"},{version_id:"11",local_language_id:"5",name:"Vert Feuille"},{version_id:"11",local_language_id:"6",name:"Blattgr\xFCn"},{version_id:"11",local_language_id:"7",name:"Verde Hoja"},{version_id:"11",local_language_id:"8",name:"Verde Foglia"},{version_id:"11",local_language_id:"9",name:"LeafGreen"},{version_id:"11",local_language_id:"12",name:"\u8449\u7DA0"},{version_id:"11",local_language_id:"14",name:"Verde Hoja"},{version_id:"12",local_language_id:"1",name:"\u30C0\u30A4\u30E4\u30E2\u30F3\u30C9"},{version_id:"12",local_language_id:"3",name:"\uB514\uC544\uB8E8\uAC00"},{version_id:"12",local_language_id:"4",name:"\u947D\u77F3"},{version_id:"12",local_language_id:"5",name:"Diamant"},{version_id:"12",local_language_id:"6",name:"Diamant"},{version_id:"12",local_language_id:"7",name:"Diamante"},{version_id:"12",local_language_id:"8",name:"Diamante"},{version_id:"12",local_language_id:"9",name:"Diamond"},{version_id:"12",local_language_id:"12",name:"\u94BB\u77F3"},{version_id:"12",local_language_id:"14",name:"Diamante"},{version_id:"13",local_language_id:"1",name:"\u30D1\u30FC\u30EB"},{version_id:"13",local_language_id:"3",name:"\uD384\uAE30\uC544"},{version_id:"13",local_language_id:"4",name:"\u73CD\u73E0"},{version_id:"13",local_language_id:"5",name:"Perle"},{version_id:"13",local_language_id:"6",name:"Perl"},{version_id:"13",local_language_id:"7",name:"Perla"},{version_id:"13",local_language_id:"8",name:"Perla"},{version_id:"13",local_language_id:"9",name:"Pearl"},{version_id:"13",local_language_id:"12",name:"\u73CD\u73E0"},{version_id:"13",local_language_id:"14",name:"Perla"},{version_id:"14",local_language_id:"1",name:"\u30D7\u30E9\u30C1\u30CA"},{version_id:"14",local_language_id:"3",name:"\uAE30\uB77C\uD2F0\uB098"},{version_id:"14",local_language_id:"4",name:"\u767D\u91D1"},{version_id:"14",local_language_id:"5",name:"Platine"},{version_id:"14",local_language_id:"6",name:"Platin"},{version_id:"14",local_language_id:"7",name:"Platino"},{version_id:"14",local_language_id:"8",name:"Platino"},{version_id:"14",local_language_id:"9",name:"Platinum"},{version_id:"14",local_language_id:"12",name:"\u767D\u91D1"},{version_id:"14",local_language_id:"14",name:"Platino"},{version_id:"15",local_language_id:"1",name:"\u30CF\u30FC\u30C8\u30B4\u30FC\u30EB\u30C9"},{version_id:"15",local_language_id:"3",name:"\uD558\uD2B8\uACE8\uB4DC"},{version_id:"15",local_language_id:"4",name:"\u5FC3\u91D1"},{version_id:"15",local_language_id:"5",name:"Or HeartGold"},{version_id:"15",local_language_id:"6",name:"HeartGold"},{version_id:"15",local_language_id:"7",name:"Oro HeartGold"},{version_id:"15",local_language_id:"8",name:"Oro HeartGold"},{version_id:"15",local_language_id:"9",name:"HeartGold"},{version_id:"15",local_language_id:"12",name:"\u5FC3\u91D1"},{version_id:"15",local_language_id:"14",name:"Oro HeartGold"},{version_id:"16",local_language_id:"1",name:"\u30BD\u30A6\u30EB\u30B7\u30EB\u30D0\u30FC"},{version_id:"16",local_language_id:"3",name:"\uC18C\uC6B8\uC2E4\uBC84"},{version_id:"16",local_language_id:"4",name:"\u9B42\u9280"},{version_id:"16",local_language_id:"5",name:"Argent SoulSilver"},{version_id:"16",local_language_id:"6",name:"SoulSilver"},{version_id:"16",local_language_id:"7",name:"Plata SoulSilver"},{version_id:"16",local_language_id:"8",name:"Argento SoulSilver"},{version_id:"16",local_language_id:"9",name:"SoulSilver"},{version_id:"16",local_language_id:"12",name:"\u9B42\u9280"},{version_id:"16",local_language_id:"14",name:"Plata SoulSilver"},{version_id:"17",local_language_id:"1",name:"\u30D6\u30E9\u30C3\u30AF"},{version_id:"17",local_language_id:"3",name:"\uBE14\uB799"},{version_id:"17",local_language_id:"4",name:"\u9ED1"},{version_id:"17",local_language_id:"5",name:"Noir"},{version_id:"17",local_language_id:"6",name:"Schwarz"},{version_id:"17",local_language_id:"7",name:"Negro"},{version_id:"17",local_language_id:"8",name:"Nera"},{version_id:"17",local_language_id:"9",name:"Black"},{version_id:"17",local_language_id:"12",name:"\u9ED1"},{version_id:"17",local_language_id:"14",name:"Negro"},{version_id:"18",local_language_id:"1",name:"\u30DB\u30EF\u30A4\u30C8"},{version_id:"18",local_language_id:"3",name:"\uD654\uC774\uD2B8"},{version_id:"18",local_language_id:"4",name:"\u767D"},{version_id:"18",local_language_id:"5",name:"Blanc"},{version_id:"18",local_language_id:"6",name:"Wei\xDF"},{version_id:"18",local_language_id:"7",name:"Blanco"},{version_id:"18",local_language_id:"8",name:"Bianca"},{version_id:"18",local_language_id:"9",name:"White"},{version_id:"18",local_language_id:"12",name:"\u767D"},{version_id:"18",local_language_id:"14",name:"Blanco"},{version_id:"19",local_language_id:"1",name:"\u30B3\u30ED\u30B7\u30A2\u30E0"},{version_id:"19",local_language_id:"3",name:"\uCF5C\uB85C\uC138\uC6C0"},{version_id:"19",local_language_id:"5",name:"Colosseum"},{version_id:"19",local_language_id:"6",name:"Colosseum"},{version_id:"19",local_language_id:"7",name:"Colosseum"},{version_id:"19",local_language_id:"8",name:"Colosseum"},{version_id:"19",local_language_id:"9",name:"Colosseum"},{version_id:"19",local_language_id:"14",name:"Colosseum"},{version_id:"20",local_language_id:"1",name:"XD"},{version_id:"20",local_language_id:"3",name:"XD"},{version_id:"20",local_language_id:"5",name:"XD"},{version_id:"20",local_language_id:"6",name:"XD"},{version_id:"20",local_language_id:"7",name:"XD"},{version_id:"20",local_language_id:"8",name:"XD"},{version_id:"20",local_language_id:"9",name:"XD"},{version_id:"20",local_language_id:"14",name:"XD"},{version_id:"21",local_language_id:"1",name:"\u30D6\u30E9\u30C3\u30AF2"},{version_id:"21",local_language_id:"3",name:"\uBE14\uB799 2"},{version_id:"21",local_language_id:"4",name:"\u9ED12"},{version_id:"21",local_language_id:"5",name:"Noir 2"},{version_id:"21",local_language_id:"6",name:"Schwarz 2"},{version_id:"21",local_language_id:"7",name:"Negro 2"},{version_id:"21",local_language_id:"8",name:"Nera 2"},{version_id:"21",local_language_id:"9",name:"Black 2"},{version_id:"21",local_language_id:"12",name:"\u9ED12"},{version_id:"21",local_language_id:"14",name:"Negro 2"},{version_id:"22",local_language_id:"1",name:"\u30DB\u30EF\u30A4\u30C82"},{version_id:"22",local_language_id:"3",name:"\uD654\uC774\uD2B8 2"},{version_id:"22",local_language_id:"4",name:"\u767D2"},{version_id:"22",local_language_id:"5",name:"Blanc 2"},{version_id:"22",local_language_id:"6",name:"Wei\xDF 2"},{version_id:"22",local_language_id:"7",name:"Blanco 2"},{version_id:"22",local_language_id:"8",name:"Bianca 2"},{version_id:"22",local_language_id:"9",name:"White 2"},{version_id:"22",local_language_id:"12",name:"\u767D2"},{version_id:"22",local_language_id:"14",name:"Blanco 2"},{version_id:"23",local_language_id:"1",name:"X"},{version_id:"23",local_language_id:"3",name:"X"},{version_id:"23",local_language_id:"4",name:"X"},{version_id:"23",local_language_id:"5",name:"X"},{version_id:"23",local_language_id:"6",name:"X"},{version_id:"23",local_language_id:"7",name:"X"},{version_id:"23",local_language_id:"8",name:"X"},{version_id:"23",local_language_id:"9",name:"X"},{version_id:"23",local_language_id:"12",name:"X"},{version_id:"23",local_language_id:"14",name:"X"},{version_id:"24",local_language_id:"1",name:"Y"},{version_id:"24",local_language_id:"3",name:"Y"},{version_id:"24",local_language_id:"4",name:"Y"},{version_id:"24",local_language_id:"5",name:"Y"},{version_id:"24",local_language_id:"6",name:"Y"},{version_id:"24",local_language_id:"7",name:"Y"},{version_id:"24",local_language_id:"8",name:"Y"},{version_id:"24",local_language_id:"9",name:"Y"},{version_id:"24",local_language_id:"12",name:"Y"},{version_id:"24",local_language_id:"14",name:"Y"},{version_id:"25",local_language_id:"1",name:"\u30AA\u30E1\u30AC\u30EB\u30D3\u30FC"},{version_id:"25",local_language_id:"3",name:"\uC624\uBA54\uAC00\uB8E8\uBE44"},{version_id:"25",local_language_id:"4",name:"\u6B50\u7C73\u52A0\u7D05\u5BF6\u77F3"},{version_id:"25",local_language_id:"5",name:"Rubis Om\xE9ga"},{version_id:"25",local_language_id:"6",name:"Omega Rubin"},{version_id:"25",local_language_id:"7",name:"Rub\xED Omega"},{version_id:"25",local_language_id:"8",name:"Rubino Omega"},{version_id:"25",local_language_id:"9",name:"Omega Ruby"},{version_id:"25",local_language_id:"12",name:"\u6B27\u7C73\u4F3D\u7EA2\u5B9D\u77F3"},{version_id:"25",local_language_id:"14",name:"Rub\xED Omega"},{version_id:"26",local_language_id:"1",name:"\u30A2\u30EB\u30D5\u30A1\u30B5\u30D5\u30A1\u30A4\u30A2"},{version_id:"26",local_language_id:"3",name:"\uC54C\uD30C\uC0AC\uD30C\uC774\uC5B4"},{version_id:"26",local_language_id:"4",name:"\u963F\u723E\u6CD5\u85CD\u5BF6\u77F3"},{version_id:"26",local_language_id:"5",name:"Saphir Alpha"},{version_id:"26",local_language_id:"6",name:"Alpha Saphir"},{version_id:"26",local_language_id:"7",name:"Zafiro Alfa"},{version_id:"26",local_language_id:"8",name:"Zaffiro Alpha"},{version_id:"26",local_language_id:"9",name:"Alpha Sapphire"},{version_id:"26",local_language_id:"12",name:"\u963F\u5C14\u6CD5\u84DD\u5B9D\u77F3"},{version_id:"26",local_language_id:"14",name:"Zafiro Alfa"},{version_id:"27",local_language_id:"1",name:"\u30B5\u30F3"},{version_id:"27",local_language_id:"3",name:"\uC36C"},{version_id:"27",local_language_id:"4",name:"\u592A\u967D"},{version_id:"27",local_language_id:"5",name:"Soleil"},{version_id:"27",local_language_id:"6",name:"Sonne"},{version_id:"27",local_language_id:"7",name:"Sol"},{version_id:"27",local_language_id:"8",name:"Sole"},{version_id:"27",local_language_id:"9",name:"Sun"},{version_id:"27",local_language_id:"12",name:"\u592A\u9633"},{version_id:"27",local_language_id:"14",name:"Sol"},{version_id:"28",local_language_id:"1",name:"\u30E0\u30FC\u30F3"},{version_id:"28",local_language_id:"3",name:"\uBB38"},{version_id:"28",local_language_id:"4",name:"\u6708\u4EAE"},{version_id:"28",local_language_id:"5",name:"Lune"},{version_id:"28",local_language_id:"6",name:"Mond"},{version_id:"28",local_language_id:"7",name:"Luna"},{version_id:"28",local_language_id:"8",name:"Luna"},{version_id:"28",local_language_id:"9",name:"Moon"},{version_id:"28",local_language_id:"12",name:"\u6708\u4EAE"},{version_id:"28",local_language_id:"14",name:"Luna"},{version_id:"29",local_language_id:"1",name:"\u30A6\u30EB\u30C8\u30E9\u30B5\u30F3"},{version_id:"29",local_language_id:"3",name:"\uC6B8\uD2B8\uB77C\uC36C"},{version_id:"29",local_language_id:"4",name:"\u7A76\u6975\u4E4B\u65E5"},{version_id:"29",local_language_id:"5",name:"Ultra-Soleil"},{version_id:"29",local_language_id:"6",name:"Ultrasonne"},{version_id:"29",local_language_id:"7",name:"Ultrasol"},{version_id:"29",local_language_id:"8",name:"Ultrasole"},{version_id:"29",local_language_id:"9",name:"Ultra Sun"},{version_id:"29",local_language_id:"12",name:"\u7A76\u6781\u4E4B\u65E5"},{version_id:"29",local_language_id:"14",name:"Ultrasol"},{version_id:"30",local_language_id:"1",name:"\u30A6\u30EB\u30C8\u30E9\u30E0\u30FC\u30F3"},{version_id:"30",local_language_id:"3",name:"\uC6B8\uD2B8\uB77C\uBB38"},{version_id:"30",local_language_id:"4",name:"\u7A76\u6975\u4E4B\u6708"},{version_id:"30",local_language_id:"5",name:"Ultra-Lune"},{version_id:"30",local_language_id:"6",name:"Ultramond"},{version_id:"30",local_language_id:"7",name:"Ultraluna"},{version_id:"30",local_language_id:"8",name:"Ultraluna"},{version_id:"30",local_language_id:"9",name:"Ultra Moon"},{version_id:"30",local_language_id:"12",name:"\u7A76\u6781\u4E4B\u6708"},{version_id:"30",local_language_id:"14",name:"Ultraluna"},{version_id:"31",local_language_id:"1",name:"Let\u2019s Go! \u30D4\u30AB\u30C1\u30E5\u30A6"},{version_id:"31",local_language_id:"3",name:"\uB808\uCE20\uACE0! \uD53C\uCE74\uCE04"},{version_id:"31",local_language_id:"4",name:"Let\u2019s Go\uFF01\u76AE\u5361\u4E18"},{version_id:"31",local_language_id:"5",name:'"Let\u2019s Go'},{version_id:"31",local_language_id:"6",name:'"Let\u2019s Go'},{version_id:"31",local_language_id:"7",name:'"Let\u2019s Go'},{version_id:"31",local_language_id:"8",name:'"Let\u2019s Go'},{version_id:"31",local_language_id:"9",name:'"Let\u2019s Go'},{version_id:"31",local_language_id:"12",name:"Let\u2019s Go\uFF01\u76AE\u5361\u4E18"},{version_id:"31",local_language_id:"14",name:'"Let\u2019s Go'},{version_id:"32",local_language_id:"1",name:"Let\u2019s Go! \u30A4\u30FC\u30D6\u30A4"},{version_id:"32",local_language_id:"3",name:"\uB808\uCE20\uACE0! \uC774\uBE0C\uC774"},{version_id:"32",local_language_id:"4",name:"Let\u2019s Go\uFF01\u4F0A\u5E03"},{version_id:"32",local_language_id:"5",name:'"Let\u2019s Go'},{version_id:"32",local_language_id:"6",name:'"Let\u2019s Go'},{version_id:"32",local_language_id:"8",name:'"Let\u2019s Go'},{version_id:"32",local_language_id:"7",name:'"Let\u2019s Go'},{version_id:"32",local_language_id:"9",name:'"Let\u2019s Go'},{version_id:"32",local_language_id:"12",name:"Let\u2019s Go\uFF01\u4F0A\u5E03"},{version_id:"32",local_language_id:"14",name:'"Let\u2019s Go'},{version_id:"33",local_language_id:"1",name:"\u30BD\u30FC\u30C9"},{version_id:"33",local_language_id:"3",name:"\uC18C\uB4DC"},{version_id:"33",local_language_id:"4",name:"\u528D"},{version_id:"33",local_language_id:"5",name:"\xC9p\xE9e"},{version_id:"33",local_language_id:"6",name:"Schwert"},{version_id:"33",local_language_id:"7",name:"Espada"},{version_id:"33",local_language_id:"8",name:"Spada"},{version_id:"33",local_language_id:"9",name:"Sword"},{version_id:"33",local_language_id:"12",name:"\u5251"},{version_id:"33",local_language_id:"14",name:"Espada"},{version_id:"34",local_language_id:"1",name:"\u30B7\u30FC\u30EB\u30C9"},{version_id:"34",local_language_id:"3",name:"\uC2E4\uB4DC"},{version_id:"34",local_language_id:"4",name:"\u76FE"},{version_id:"34",local_language_id:"5",name:"Bouclier"},{version_id:"34",local_language_id:"6",name:"Schild"},{version_id:"34",local_language_id:"7",name:"Escudo"},{version_id:"34",local_language_id:"8",name:"Scudo"},{version_id:"34",local_language_id:"9",name:"Shield"},{version_id:"34",local_language_id:"12",name:"\u76FE"},{version_id:"34",local_language_id:"14",name:"Escudo"},{version_id:"35",local_language_id:"1",name:"\u30BD\u30FC\u30C9: \u93A7\u306E\u5B64\u5CF6"},{version_id:"35",local_language_id:"3",name:"\uC18C\uB4DC: \uAC11\uC637\uC758 \uC678\uB534\uC12C"},{version_id:"35",local_language_id:"4",name:"\u528D: \u93A7\u4E4B\u5B64\u5CF6"},{version_id:"35",local_language_id:"5",name:"\xC9p\xE9e: L\u2019\xEEle solitaire de l\u2019Armure"},{version_id:"35",local_language_id:"6",name:"Schwert: Die Insel der R\xFCstung"},{version_id:"35",local_language_id:"7",name:"Espada: La isla de la armadura"},{version_id:"35",local_language_id:"8",name:"Spada: L\u2019isola solitaria dell\u2019armatura"},{version_id:"35",local_language_id:"9",name:"Sword: The Isle of Armor"},{version_id:"35",local_language_id:"12",name:"\u5251: \u94E0\u4E4B\u5B64\u5C9B"},{version_id:"35",local_language_id:"14",name:"Espada: La isla de la armadura"},{version_id:"36",local_language_id:"1",name:"\u30BD\u30FC\u30C9: \u51A0\u306E\u96EA\u539F"},{version_id:"36",local_language_id:"3",name:"\uC18C\uB4DC: \uC655\uAD00\uC758 \uC124\uC6D0"},{version_id:"36",local_language_id:"4",name:"\u528D: \u51A0\u4E4B\u96EA\u539F"},{version_id:"36",local_language_id:"5",name:"\xC9p\xE9e: Les terres enneig\xE9es de la Couronne"},{version_id:"36",local_language_id:"6",name:"Schwert: Die Schneelande der Krone"},{version_id:"36",local_language_id:"7",name:"Espada: Las nieves de la corona"},{version_id:"36",local_language_id:"8",name:"Spada: Le terre innevate della corona"},{version_id:"36",local_language_id:"9",name:"Sword: The Crown Tundra"},{version_id:"36",local_language_id:"12",name:"\u5251: \u51A0\u4E4B\u96EA\u539F"},{version_id:"36",local_language_id:"14",name:"Espada: Las nieves de la corona"},{version_id:"37",local_language_id:"1",name:"\u30D6\u30EA\u30EA\u30A2\u30F3\u30C8\u30C0\u30A4\u30E4\u30E2\u30F3\u30C9"},{version_id:"37",local_language_id:"3",name:"\uBE0C\uB9B4\uB9AC\uC5B8\uD2B8 \uB2E4\uC774\uC544\uBAAC\uB4DC"},{version_id:"37",local_language_id:"4",name:"\u6676\u71E6\u947D\u77F3"},{version_id:"37",local_language_id:"5",name:"Diamant \xC9tincelant"},{version_id:"37",local_language_id:"6",name:"Strahlender Diamant"},{version_id:"37",local_language_id:"7",name:"Diamante Brillante"},{version_id:"37",local_language_id:"8",name:"Diamante Lucente"},{version_id:"37",local_language_id:"9",name:"Brilliant Diamond"},{version_id:"37",local_language_id:"12",name:"\u6676\u707F\u94BB\u77F3"},{version_id:"37",local_language_id:"14",name:"Diamante Brillante"},{version_id:"38",local_language_id:"1",name:"\u30B7\u30E3\u30A4\u30CB\u30F3\u30B0\u30D1\u30FC\u30EB"},{version_id:"38",local_language_id:"3",name:"\uC0E4\uC774\uB2DD \uD384"},{version_id:"38",local_language_id:"4",name:"\u660E\u4EAE\u73CD\u73E0"},{version_id:"38",local_language_id:"5",name:"Perle Scintillante"},{version_id:"38",local_language_id:"6",name:"Leuchtende Perle"},{version_id:"38",local_language_id:"7",name:"Perla Reluciente"},{version_id:"38",local_language_id:"8",name:"Perla Splendente"},{version_id:"38",local_language_id:"9",name:"Shining Pearl"},{version_id:"38",local_language_id:"12",name:"\u660E\u4EAE\u73CD\u73E0"},{version_id:"38",local_language_id:"14",name:"Perla Reluciente"},{version_id:"39",local_language_id:"1",name:"LEGENDS \u30A2\u30EB\u30BB\u30A6\u30B9"},{version_id:"39",local_language_id:"3",name:"LEGENDS \uC544\uB974\uC138\uC6B0\uC2A4"},{version_id:"39",local_language_id:"4",name:"\u50B3\u8AAA \u963F\u723E\u5B99\u65AF"},{version_id:"39",local_language_id:"5",name:"L\xE9gendes : Arceus"},{version_id:"39",local_language_id:"6",name:"Legenden: Arceus"},{version_id:"39",local_language_id:"7",name:"Leyendas: Arceus"},{version_id:"39",local_language_id:"8",name:"Leggende: Arceus"},{version_id:"39",local_language_id:"9",name:"Legends: Arceus"},{version_id:"39",local_language_id:"12",name:"\u4F20\u8BF4 \u963F\u5C14\u5B99\u65AF"},{version_id:"39",local_language_id:"14",name:"Leyendas: Arceus"},{version_id:"40",local_language_id:"1",name:"\u30B9\u30AB\u30FC\u30EC\u30C3\u30C8"},{version_id:"40",local_language_id:"3",name:"\uC2A4\uCE7C\uB81B"},{version_id:"40",local_language_id:"4",name:"\u6731"},{version_id:"40",local_language_id:"5",name:"\xC9carlate"},{version_id:"40",local_language_id:"6",name:"Karmesin"},{version_id:"40",local_language_id:"7",name:"Escarlata"},{version_id:"40",local_language_id:"8",name:"Scarlatto"},{version_id:"40",local_language_id:"9",name:"Scarlet"},{version_id:"40",local_language_id:"12",name:"\u6731"},{version_id:"40",local_language_id:"14",name:"Escarlata"},{version_id:"41",local_language_id:"1",name:"\u30D0\u30A4\u30AA\u30EC\u30C3\u30C8"},{version_id:"41",local_language_id:"3",name:"\uBC14\uC774\uC62C\uB81B"},{version_id:"41",local_language_id:"4",name:"\u7D2B"},{version_id:"41",local_language_id:"5",name:"Violet"},{version_id:"41",local_language_id:"6",name:"Purpur"},{version_id:"41",local_language_id:"7",name:"P\xFArpura"},{version_id:"41",local_language_id:"8",name:"Violetto"},{version_id:"41",local_language_id:"9",name:"Violet"},{version_id:"41",local_language_id:"12",name:"\u7D2B"},{version_id:"41",local_language_id:"14",name:"P\xFArpura"},{version_id:"42",local_language_id:"1",name:"\u30B9\u30AB\u30FC\u30EC\u30C3\u30C8: \u78A7\u306E\u4EEE\u9762"},{version_id:"42",local_language_id:"5",name:"\xC9carlate: Le Masque Turquoise"},{version_id:"42",local_language_id:"6",name:"Karmesin: Die T\xFCrkisgr\xFCne Maske"},{version_id:"42",local_language_id:"7",name:"Escarlata: La m\xE1scara turquesa"},{version_id:"42",local_language_id:"8",name:"Scarlatto: La maschera turchese"},{version_id:"42",local_language_id:"9",name:"Scarlet: The Teal Mask"},{version_id:"42",local_language_id:"12",name:"\u6731: \u78A7\u4E4B\u5047\u9762"},{version_id:"42",local_language_id:"14",name:"Escarlata: La m\xE1scara turquesa"},{version_id:"43",local_language_id:"1",name:"\u30B9\u30AB\u30FC\u30EC\u30C3\u30C8: \u85CD\u306E\u5186\u76E4"},{version_id:"43",local_language_id:"5",name:"\xC9carlate: Le Disque Indigo"},{version_id:"43",local_language_id:"6",name:"Karmesin: Die Indigoblaue Scheibe"},{version_id:"43",local_language_id:"7",name:"Escarlata: El disco \xEDndigo"},{version_id:"43",local_language_id:"8",name:"Scarlatto: Il disco indaco"},{version_id:"43",local_language_id:"9",name:"Scarlet: The Indigo Disk"},{version_id:"43",local_language_id:"12",name:"\u6731: \u85CD\u4E4B\u5713\u76E4"},{version_id:"43",local_language_id:"14",name:"Escarlata: El disco \xEDndigo"},{version_id:"44",local_language_id:"1",name:"\u8D64"},{version_id:"44",local_language_id:"3",name:"\uB808\uB4DC"},{version_id:"44",local_language_id:"5",name:"Rouge"},{version_id:"44",local_language_id:"6",name:"Rot"},{version_id:"44",local_language_id:"7",name:"Rojo"},{version_id:"44",local_language_id:"8",name:"Rossa"},{version_id:"44",local_language_id:"9",name:"Red"},{version_id:"44",local_language_id:"14",name:"Rojo"},{version_id:"45",local_language_id:"1",name:"\u7DD1"},{version_id:"45",local_language_id:"3",name:"\uADF8\uB9B0"},{version_id:"45",local_language_id:"5",name:"Vert"},{version_id:"45",local_language_id:"6",name:"Gr\xFCne"},{version_id:"45",local_language_id:"7",name:"Verde"},{version_id:"45",local_language_id:"8",name:"Verde"},{version_id:"45",local_language_id:"9",name:"Green"},{version_id:"45",local_language_id:"14",name:"Verde"},{version_id:"46",local_language_id:"1",name:"\u9752"},{version_id:"46",local_language_id:"3",name:"\uBE14\uB8E8"},{version_id:"46",local_language_id:"5",name:"Bleu"},{version_id:"46",local_language_id:"6",name:"Blau"},{version_id:"46",local_language_id:"7",name:"Azul"},{version_id:"46",local_language_id:"8",name:"Blu"},{version_id:"46",local_language_id:"9",name:"Blue"},{version_id:"46",local_language_id:"14",name:"Azul"},{version_id:"47",local_language_id:"1",name:"\u30EC\u30B8\u30A7\u30F3\u30BA Z-A"},{version_id:"47",local_language_id:"2",name:"Legends Z-A"},{version_id:"47",local_language_id:"3",name:"LEGENDS Z-A"},{version_id:"47",local_language_id:"4",name:"\u50B3\u8AAA Z-A"},{version_id:"47",local_language_id:"5",name:"L\xE9gendes : Z-A"},{version_id:"47",local_language_id:"6",name:"Legenden: Z-A"},{version_id:"47",local_language_id:"7",name:"Leyendas: Z-A"},{version_id:"47",local_language_id:"8",name:"Leggende: Z-A"},{version_id:"47",local_language_id:"9",name:"Legends: Z-A"},{version_id:"47",local_language_id:"11",name:"\u30EC\u30B8\u30A7\u30F3\u30BA Z-A"},{version_id:"47",local_language_id:"12",name:"\u4F20\u8BF4 Z-A"},{version_id:"47",local_language_id:"14",name:"Leyendas: Z-A"},{version_id:"48",local_language_id:"3",name:"\uBA54\uAC00 \uCC28\uC6D0 \uB7EC\uC2DC"},{version_id:"48",local_language_id:"4",name:"\u8D85\u6B21\u5143\u7206\u6E67"},{version_id:"48",local_language_id:"5",name:"M\xE9ga-Dimension"},{version_id:"48",local_language_id:"6",name:"Mega-Dimension"},{version_id:"48",local_language_id:"7",name:"Megadimensi\xF3n"},{version_id:"48",local_language_id:"8",name:"Megadimensione"},{version_id:"48",local_language_id:"9",name:"Mega Dimension"},{version_id:"48",local_language_id:"12",name:"\u8D85\u6B21\u5143\u7206\u6D8C"},{version_id:"48",local_language_id:"14",name:"Megadimensi\xF3n"},{version_id:"49",local_language_id:"9",name:"Champions"},{version_id:"50",local_language_id:"1",name:"\u30B7\u30FC\u30EB\u30C9: \u93A7\u306E\u5B64\u5CF6"},{version_id:"50",local_language_id:"3",name:"\uC2E4\uB4DC: \uAC11\uC637\uC758 \uC678\uB534\uC12C"},{version_id:"50",local_language_id:"4",name:"\u76FE: \u93A7\u4E4B\u5B64\u5CF6"},{version_id:"50",local_language_id:"5",name:"Bouclier: L\u2019\xEEle solitaire de l\u2019Armure"},{version_id:"50",local_language_id:"6",name:"Schild: Die Insel der R\xFCstung"},{version_id:"50",local_language_id:"7",name:"Escudo: La isla de la armadura"},{version_id:"50",local_language_id:"8",name:"Scudo: L\u2019isola solitaria dell\u2019armatura"},{version_id:"50",local_language_id:"9",name:"Shield: The Isle of Armor"},{version_id:"50",local_language_id:"12",name:"\u76FE: \u94E0\u4E4B\u5B64\u5C9B"},{version_id:"50",local_language_id:"14",name:"Escudo: La isla de la armadura"},{version_id:"51",local_language_id:"1",name:"\u30B7\u30FC\u30EB\u30C9: \u51A0\u306E\u96EA\u539F"},{version_id:"51",local_language_id:"3",name:"\uC2E4\uB4DC: \uC655\uAD00\uC758 \uC124\uC6D0"},{version_id:"51",local_language_id:"4",name:"\u76FE: \u51A0\u4E4B\u96EA\u539F"},{version_id:"51",local_language_id:"5",name:"Bouclier: Les terres enneig\xE9es de la Couronne"},{version_id:"51",local_language_id:"6",name:"Schild: Die Schneelande der Krone"},{version_id:"51",local_language_id:"7",name:"Escudo: Las nieves de la corona"},{version_id:"51",local_language_id:"8",name:"Scudo: Le terre innevate della corona"},{version_id:"51",local_language_id:"9",name:"Shield: The Crown Tundra"},{version_id:"51",local_language_id:"12",name:"\u76FE: \u51A0\u4E4B\u96EA\u539F"},{version_id:"51",local_language_id:"14",name:"Escudo: Las nieves de la corona"},{version_id:"52",local_language_id:"1",name:"\u30D0\u30A4\u30AA\u30EC\u30C3\u30C8: \u78A7\u306E\u4EEE\u9762"},{version_id:"52",local_language_id:"5",name:"Violet: Le Masque Turquoise"},{version_id:"52",local_language_id:"6",name:"Purpur: Die T\xFCrkisgr\xFCne Maske"},{version_id:"52",local_language_id:"7",name:"P\xFArpura: La m\xE1scara turquesa"},{version_id:"52",local_language_id:"8",name:"Violetto: La maschera turchese"},{version_id:"52",local_language_id:"9",name:"Violet: The Teal Mask"},{version_id:"52",local_language_id:"12",name:"\u7D2B: \u78A7\u4E4B\u5047\u9762"},{version_id:"52",local_language_id:"14",name:"P\xFArpura: La m\xE1scara turquesa"},{version_id:"53",local_language_id:"1",name:"\u30D0\u30A4\u30AA\u30EC\u30C3\u30C8: \u85CD\u306E\u5186\u76E4"},{version_id:"53",local_language_id:"5",name:"Violet: Le Disque Indigo"},{version_id:"53",local_language_id:"6",name:"Purpur: Die Indigoblaue Scheibe"},{version_id:"53",local_language_id:"7",name:"P\xFArpura: El disco \xEDndigo"},{version_id:"53",local_language_id:"8",name:"Violetto: Il disco indaco"},{version_id:"53",local_language_id:"9",name:"Violet: The Indigo Disk"},{version_id:"53",local_language_id:"12",name:"\u7D2B: \u85CD\u4E4B\u5713\u76E4"},{version_id:"53",local_language_id:"14",name:"P\xFArpura: El disco \xEDndigo"},{version_id:""}];var Mu=[{id:"1",version_group_id:"1",identifier:"red"},{id:"2",version_group_id:"1",identifier:"blue"},{id:"3",version_group_id:"2",identifier:"yellow"},{id:"4",version_group_id:"3",identifier:"gold"},{id:"5",version_group_id:"3",identifier:"silver"},{id:"6",version_group_id:"4",identifier:"crystal"},{id:"7",version_group_id:"5",identifier:"ruby"},{id:"8",version_group_id:"5",identifier:"sapphire"},{id:"9",version_group_id:"6",identifier:"emerald"},{id:"10",version_group_id:"7",identifier:"firered"},{id:"11",version_group_id:"7",identifier:"leafgreen"},{id:"12",version_group_id:"8",identifier:"diamond"},{id:"13",version_group_id:"8",identifier:"pearl"},{id:"14",version_group_id:"9",identifier:"platinum"},{id:"15",version_group_id:"10",identifier:"heartgold"},{id:"16",version_group_id:"10",identifier:"soulsilver"},{id:"17",version_group_id:"11",identifier:"black"},{id:"18",version_group_id:"11",identifier:"white"},{id:"19",version_group_id:"12",identifier:"colosseum"},{id:"20",version_group_id:"13",identifier:"xd"},{id:"21",version_group_id:"14",identifier:"black-2"},{id:"22",version_group_id:"14",identifier:"white-2"},{id:"23",version_group_id:"15",identifier:"x"},{id:"24",version_group_id:"15",identifier:"y"},{id:"25",version_group_id:"16",identifier:"omega-ruby"},{id:"26",version_group_id:"16",identifier:"alpha-sapphire"},{id:"27",version_group_id:"17",identifier:"sun"},{id:"28",version_group_id:"17",identifier:"moon"},{id:"29",version_group_id:"18",identifier:"ultra-sun"},{id:"30",version_group_id:"18",identifier:"ultra-moon"},{id:"31",version_group_id:"19",identifier:"lets-go-pikachu"},{id:"32",version_group_id:"19",identifier:"lets-go-eevee"},{id:"33",version_group_id:"20",identifier:"sword"},{id:"34",version_group_id:"20",identifier:"shield"},{id:"35",version_group_id:"21",identifier:"the-isle-of-armor-sword"},{id:"36",version_group_id:"22",identifier:"the-crown-tundra-sword"},{id:"37",version_group_id:"23",identifier:"brilliant-diamond"},{id:"38",version_group_id:"23",identifier:"shining-pearl"},{id:"39",version_group_id:"24",identifier:"legends-arceus"},{id:"40",version_group_id:"25",identifier:"scarlet"},{id:"41",version_group_id:"25",identifier:"violet"},{id:"42",version_group_id:"26",identifier:"the-teal-mask-scarlet"},{id:"43",version_group_id:"27",identifier:"the-indigo-disk-scarlet"},{id:"44",version_group_id:"28",identifier:"red-japan"},{id:"45",version_group_id:"28",identifier:"green-japan"},{id:"46",version_group_id:"29",identifier:"blue-japan"},{id:"47",version_group_id:"30",identifier:"legends-za"},{id:"48",version_group_id:"31",identifier:"mega-dimension"},{id:"49",version_group_id:"32",identifier:"champions"},{id:"50",version_group_id:"21",identifier:"the-isle-of-armor-shield"},{id:"51",version_group_id:"22",identifier:"the-crown-tundra-shield"},{id:"52",version_group_id:"26",identifier:"the-teal-mask-violet"},{id:"53",version_group_id:"27",identifier:"the-indigo-disk-violet"},{id:""}];var Nu=(()=>{class i{transform(e,t){if(!e?.length)return"UNKNOWN_VERSION";let a=Sr.find(r=>r.id===e)?.id;return a?Mu.filter(r=>r.version_group_id===a).map(r=>this.getVersionName(r.id,t)).join("/"):"UNKNOWN_VERSION"}getVersionName(e,t){return ku.find(a=>a.version_id===e&&a.local_language_id&&parseInt(a.local_language_id)===t)?.name??"UNKNOWN"}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275pipe=Mt({name:"versionName",type:i,pure:!0})}}return i})();var kr=(()=>{class i{_animationsDisabled=Me();state="unchecked";disabled=!1;appearance="full";static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,a){t&2&&P("mat-pseudo-checkbox-indeterminate",a.state==="indeterminate")("mat-pseudo-checkbox-checked",a.state==="checked")("mat-pseudo-checkbox-disabled",a.disabled)("mat-pseudo-checkbox-minimal",a.appearance==="minimal")("mat-pseudo-checkbox-full",a.appearance==="full")("_mat-animation-noopable",a._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,a){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--%NS%mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--%NS%mat-pseudo-checkbox-full-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--%NS%mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--%NS%mat-pseudo-checkbox-full-selected-icon-color, var(--%NS%mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-full-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2})}return i})();var Eu=new w("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})}),Du=new w("MatButtonToggleGroup"),Tg={provide:or,useExisting:Rt(()=>Va),multi:!0},Mr=class{source;value;constructor(n,e){this.source=n,this.value=e}},Va=(()=>{class i{_changeDetector=c(xe);_dir=c(Be,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(e){this._name=e,this._markButtonsForCheck()}_name=c(Fe).getId("mat-button-toggle-group-");vertical=!1;get value(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e.map(t=>t.value):e[0]?e[0].value:void 0}set value(e){this._setSelectionByValue(e),this.valueChange.emit(this.value)}valueChange=new Q;get selected(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e:e[0]||null}get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new Q;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(e){this._hideMultipleSelectionIndicator=e,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let e=c(Eu,{optional:!0});this.appearance=e&&e.appearance?e.appearance:"standard",this._hideSingleSelectionIndicator=e?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=e?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new Qn(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(e=>e.checked)),this.multiple||this._initializeTabIndex()}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_keydown(e){if(this.multiple||this.disabled||at(e))return;let a=e.target.id,o=this._buttonToggles.toArray().findIndex(s=>s.buttonId===a),r=null;switch(e.keyCode){case 32:case 13:r=this._buttonToggles.get(o)||null;break;case 38:r=this._getNextButton(o,-1);break;case 37:r=this._getNextButton(o,this.dir==="ltr"?-1:1);break;case 40:r=this._getNextButton(o,1);break;case 39:r=this._getNextButton(o,this.dir==="ltr"?1:-1);break;default:return}r&&(e.preventDefault(),r._onButtonClick(),r.focus())}_emitChangeEvent(e){let t=new Mr(e,this.value);this._rawValue=t.value,this._controlValueAccessorChangeFn(t.value),this.change.emit(t)}_syncButtonToggle(e,t,a=!1,o=!1){!this.multiple&&this.selected&&!e.checked&&(this.selected.checked=!1),this._selectionModel?t?this._selectionModel.select(e):this._selectionModel.deselect(e):o=!0,o?Promise.resolve().then(()=>this._updateModelValue(e,a)):this._updateModelValue(e,a)}_isSelected(e){return this._selectionModel&&this._selectionModel.isSelected(e)}_isPrechecked(e){return typeof this._rawValue>"u"?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(t=>e.value!=null&&t===e.value):e.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(e=>{e.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let e=0;e<this._buttonToggles.length;e++){let t=this._buttonToggles.get(e);if(!t.disabled){t.tabIndex=0;break}}}_getNextButton(e,t){let a=this._buttonToggles;for(let o=1;o<=a.length;o++){let r=(e+t*o+a.length)%a.length,s=a.get(r);if(s&&!s.disabled)return s}return null}_setSelectionByValue(e){if(this._rawValue=e,!this._buttonToggles)return;let t=this._buttonToggles.toArray();if(this.multiple&&e?(Array.isArray(e),this._clearSelection(),e.forEach(a=>this._selectValue(a,t))):(this._clearSelection(),this._selectValue(e,t)),!this.multiple&&t.every(a=>a.tabIndex===-1)){for(let a of t)if(!a.disabled){a.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(e=>{e.checked=!1,this.multiple||(e.tabIndex=-1)})}_selectValue(e,t){for(let a of t)if(a.value===e){a.checked=!0,this._selectionModel.select(a),this.multiple||(a.tabIndex=0);break}}_updateModelValue(e,t){t&&this._emitChangeEvent(e),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(e=>e._markForCheck())}static \u0275fac=function(t){return new(t||i)};static \u0275dir=x({type:i,selectors:[["mat-button-toggle-group"]],contentQueries:function(t,a,o){if(t&1&&qe(o,Xi,5),t&2){let r;N(r=E())&&(a._buttonToggles=r)}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(t,a){t&1&&X("keydown",function(r){return a._keydown(r)}),t&2&&(V("role",a.multiple?"group":"radiogroup")("aria-disabled",a.disabled),P("mat-button-toggle-vertical",a.vertical)("mat-button-toggle-group-appearance-standard",a.appearance==="standard"))},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",S],value:"value",multiple:[2,"multiple","multiple",S],disabled:[2,"disabled","disabled",S],disabledInteractive:[2,"disabledInteractive","disabledInteractive",S],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",S],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",S]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[ae([Tg,{provide:Du,useExisting:i}])]})}return i})(),Xi=(()=>{class i{_changeDetectorRef=c(xe);_elementRef=c(D);_focusMonitor=c(Bt);_idGenerator=c(Fe);_animationDisabled=Me();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(e){this._tabIndex.set(e)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new Q;constructor(){c(Oe).load(Vt);let e=c(Du,{optional:!0}),t=c(new en("tabindex"),{optional:!0})||"",a=c(Eu,{optional:!0});this._tabIndex=oe(parseInt(t)||0),this.buttonToggleGroup=e,this._appearance=a&&a.appearance?a.appearance:"standard",this._disabledInteractive=a?.disabledInteractive??!1}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){if(this.disabled)return;let e=this.isSingleSelector()?!0:!this._checked;if(e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let t=this.buttonToggleGroup._buttonToggles.find(a=>a.tabIndex===0);t&&(t.tabIndex=-1),this.tabIndex=0}this.change.emit(new Mr(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=["button"],t=["*"];function a(o,r){if(o&1&&(f(0,"div",2),O(1,"mat-pseudo-checkbox",6),g()),o&2){let s=L();h(),C("disabled",s.disabled)}}return M({type:i,selectors:[["mat-button-toggle"]],viewQuery:function(r,s){if(r&1&&Ie(e,5),r&2){let l;N(l=E())&&(s._buttonElement=l.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(r,s){r&1&&X("focus",function(){return s.focus()}),r&2&&(V("aria-label",null)("aria-labelledby",null)("id",s.id)("name",null),P("mat-button-toggle-standalone",!s.buttonToggleGroup)("mat-button-toggle-checked",s.checked)("mat-button-toggle-disabled",s.disabled)("mat-button-toggle-disabled-interactive",s.disabledInteractive)("mat-button-toggle-appearance-standard",s.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",S],appearance:"appearance",checked:[2,"checked","checked",S],disabled:[2,"disabled","disabled",S],disabledInteractive:[2,"disabledInteractive","disabledInteractive",S]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:t,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(r,s){if(r&1&&(ve(),f(0,"button",1,0),X("click",function(){return s._onButtonClick()}),B(2,a,2,1,"div",2),f(3,"span",3),q(4),g()(),O(5,"span",4)(6,"span",5)),r&2){let l=ht(1);C("id",s.buttonId)("disabled",s.disabled&&!s.disabledInteractive||null),V("role",s.isSingleSelector()?"radio":"button")("tabindex",s.disabled&&!s.disabledInteractive?-1:s.tabIndex)("aria-pressed",s.isSingleSelector()?null:s.checked)("aria-checked",s.isSingleSelector()?s.checked:null)("name",s._getButtonName())("aria-label",s.ariaLabel)("aria-labelledby",s.ariaLabelledby)("aria-disabled",s.disabled&&s.disabledInteractive?"true":null),h(2),z(s.buttonToggleGroup&&(!s.buttonToggleGroup.multiple&&!s.buttonToggleGroup.hideSingleSelectionIndicator||s.buttonToggleGroup.multiple&&!s.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),h(4),C("matRippleTrigger",l)("matRippleDisabled",s.disableRipple||s.disabled)}},dependencies:[Un,kr],styles:[`.mat-button-toggle-standalone,
.mat-button-toggle-group {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--%NS%mat-button-toggle-legacy-shape);
  transform: translateZ(0);
}
.mat-button-toggle-standalone:not([class*=mat-elevation-z]),
.mat-button-toggle-group:not([class*=mat-elevation-z]) {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone,
  .mat-button-toggle-group {
    outline: solid 1px;
  }
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.mat-button-toggle-group-appearance-standard {
  border-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,
.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-button-toggle-selected-state-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),
.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]) {
  box-shadow: none;
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
  .mat-button-toggle-group-appearance-standard {
    outline: 0;
  }
}

.mat-button-toggle-vertical {
  flex-direction: column;
}
.mat-button-toggle-vertical .mat-button-toggle-label-content {
  display: block;
}

.mat-button-toggle {
  white-space: nowrap;
  position: relative;
  color: var(--%NS%mat-button-toggle-legacy-text-color);
  font-family: var(--%NS%mat-button-toggle-legacy-label-text-font);
  font-size: var(--%NS%mat-button-toggle-legacy-label-text-size);
  line-height: var(--%NS%mat-button-toggle-legacy-label-text-line-height);
  font-weight: var(--%NS%mat-button-toggle-legacy-label-text-weight);
  letter-spacing: var(--%NS%mat-button-toggle-legacy-label-text-tracking);
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-button-toggle-legacy-selected-state-text-color);
}
.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--%NS%mat-button-toggle-legacy-focus-state-layer-opacity);
}
.mat-button-toggle .mat-icon svg {
  vertical-align: top;
}

.mat-button-toggle-checkbox-wrapper {
  display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 0;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate3d(0, -50%, 0);
}
[dir=rtl] .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 16px;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: 12px;
}
[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 12px;
}
.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper {
  width: 18px;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper {
  transition: width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper {
  transition: none;
}

.mat-button-toggle-checked {
  color: var(--%NS%mat-button-toggle-legacy-selected-state-text-color);
  background-color: var(--%NS%mat-button-toggle-legacy-selected-state-background-color);
}

.mat-button-toggle-disabled {
  pointer-events: none;
  color: var(--%NS%mat-button-toggle-legacy-disabled-state-text-color);
  background-color: var(--%NS%mat-button-toggle-legacy-disabled-state-background-color);
  --%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--%NS%mat-button-toggle-legacy-disabled-state-text-color);
}
.mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: var(--%NS%mat-button-toggle-legacy-disabled-selected-state-background-color);
}

.mat-button-toggle-disabled-interactive {
  pointer-events: auto;
}

.mat-button-toggle-appearance-standard {
  color: var(--%NS%mat-button-toggle-text-color, var(--%NS%mat-sys-on-surface));
  background-color: var(--%NS%mat-button-toggle-background-color, transparent);
  font-family: var(--%NS%mat-button-toggle-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-toggle-label-text-size, var(--%NS%mat-sys-label-large-size));
  line-height: var(--%NS%mat-button-toggle-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-weight: var(--%NS%mat-button-toggle-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-button-toggle-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: none;
  border-top: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-checked {
  color: var(--%NS%mat-button-toggle-selected-state-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-toggle-selected-state-background-color, var(--%NS%mat-sys-secondary-container));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {
  color: var(--%NS%mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-toggle-disabled-state-background-color, transparent);
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--%NS%mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {
  color: var(--%NS%mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: var(--%NS%mat-button-toggle-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
  opacity: var(--%NS%mat-button-toggle-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--%NS%mat-button-toggle-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
@media (hover: none) {
  .mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
    display: none;
  }
}

.mat-button-toggle-label-content {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  padding: 0 16px;
  line-height: var(--%NS%mat-button-toggle-legacy-height);
  position: relative;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {
  padding: 0 12px;
  line-height: var(--%NS%mat-button-toggle-height, 40px);
}

.mat-button-toggle-label-content > * {
  vertical-align: middle;
}

.mat-button-toggle-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background-color: var(--%NS%mat-button-toggle-legacy-state-layer-color);
}

@media (forced-colors: active) {
  .mat-button-toggle-checked .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
    opacity: 0.5;
    height: 0;
  }
  .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay {
    opacity: 0.6;
  }
  .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
  }
}
.mat-button-toggle .mat-button-toggle-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-button-toggle-button {
  border: 0;
  background: none;
  color: inherit;
  padding: 0;
  margin: 0;
  font: inherit;
  outline: none;
  width: 100%;
  cursor: pointer;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-button {
  transition: padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-button {
  transition: none;
}
.mat-button-toggle-disabled .mat-button-toggle-button {
  cursor: default;
}
.mat-button-toggle-button::-moz-focus-inner {
  border: 0;
}
.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 30px;
}
[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 0;
  padding-right: 30px;
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard {
  --%NS%mat-focus-indicator-border-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-bottom-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-bottom-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-top-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}
`],encapsulation:2})})()}return i})(),Nr=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=G({imports:[wn,Xi,re]})}return i})();var sn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=G({imports:[Vo,Fi,re]})}return i})();var Ol=new w("MAT_OPTION_PARENT_COMPONENT"),Fl=new w("MatOptgroup");var Al=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}},Cn=(()=>{class i{_element=c(D);_changeDetectorRef=c(xe);_parent=c(Ol,{optional:!0});group=c(Fl,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=c(Fe).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=oe(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new Q;_text;_stateChanges=new R;constructor(){let e=c(Oe);e.load(Vt),e.load(Ln),this._signalDisableRipple=!!this._parent&&At(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let a=this._getHostElement();typeof a.focus=="function"&&a.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!at(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Al(this,e))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=["text"],t=[[["mat-icon"]],"*"],a=["mat-icon","*"];function o(l,d){if(l&1&&O(0,"mat-pseudo-checkbox",1),l&2){let m=L();C("disabled",m.disabled)("state",m.selected?"checked":"unchecked")}}function r(l,d){if(l&1&&O(0,"mat-pseudo-checkbox",3),l&2){let m=L();C("disabled",m.disabled)}}function s(l,d){if(l&1&&(f(0,"span",4),F(1),g()),l&2){let m=L();h(),he("(",m.group.label,")")}}return M({type:i,selectors:[["mat-option"]],viewQuery:function(d,m){if(d&1&&Ie(e,7),d&2){let u;N(u=E())&&(m._text=u.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(d,m){d&1&&X("click",function(){return m._selectViaInteraction()})("keydown",function(_){return m._handleKeydown(_)}),d&2&&(fn("id",m.id),V("aria-selected",m.selected)("aria-disabled",m.disabled.toString()),P("mdc-list-item--selected",m.selected)("mat-mdc-option-multiple",m.multiple)("mat-mdc-option-active",m.active)("mdc-list-item--disabled",m.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",S]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:a,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(d,m){d&1&&(ve(t),B(0,o,1,2,"mat-pseudo-checkbox",1),q(1),f(2,"span",2,0),q(4,1),g(),B(5,r,1,1,"mat-pseudo-checkbox",3),B(6,s,2,1,"span",4),O(7,"div",5)),d&2&&(z(m.multiple?0:-1),h(5),z(!m.multiple&&m.selected&&!m.hideSingleSelectionIndicator?5:-1),h(),z(m.group&&m.group._inert?6:-1),h(),C("matRippleTrigger",m._getHostElement())("matRippleDisabled",m.disabled||m.disableRipple))},dependencies:[kr,Un],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--%NS%mat-option-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-option-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-option-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-option-label-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-option-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-option-label-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--%NS%mat-option-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--%NS%mat-option-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--%NS%mat-option-selected-state-layer-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --%NS%mat-list-list-item-selected-container-color: var(--%NS%mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})})()}return i})();function Ru(i,n,e){if(e.length){let t=n.toArray(),a=e.toArray(),o=0;for(let r=0;r<i+1;r++)t[r].group&&t[r].group===a[o]&&o++;return o}return 0}function Au(i,n,e,t){return i<e?i:i+n>e+t?Math.max(0,i-t+n):e}var Ou=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=G({imports:[re]})}return i})();var Sn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=G({imports:[wn,Ou,Cn,re]})}return i})();var Fu=qo();function ju(i){return new Er(i.get(Et),i.get(ce))}var Er=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=Pe(-this._previousScrollPosition.left),n.style.top=Pe(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,t=n.style,a=e.style,o=t.scrollBehavior||"",r=a.scrollBehavior||"";this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),Fu&&(t.scrollBehavior=a.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Fu&&(t.scrollBehavior=o,a.scrollBehavior=r)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function Gu(i,n){return new Dr(i.get(Gn),i.get(W),i.get(Et),n)}var Dr=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,t,a){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=t,this._config=a}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(Xe(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Ba=class{enable(){}disable(){}attach(){}};function Ll(i,n){return n.some(e=>{let t=i.bottom<e.top,a=i.top>e.bottom,o=i.right<e.left,r=i.left>e.right;return t||a||o||r})}function Pu(i,n){return n.some(e=>{let t=i.top<e.top,a=i.bottom>e.bottom,o=i.left<e.left,r=i.right>e.right;return t||a||o||r})}function Zn(i,n){return new Ir(i.get(Gn),i.get(Et),i.get(W),n)}var Ir=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,t,a){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=t,this._config=a}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:a}=this._viewportRuler.getViewportSize();Ll(e,[{width:t,height:a,bottom:a,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},Uu=(()=>{class i{_injector=c(pe);noop=()=>new Ba;close=e=>Gu(this._injector,e);block=()=>ju(this._injector);reposition=e=>Zn(this._injector,e);static \u0275fac=function(t){return new(t||i)};static \u0275prov=ie({token:i,factory:i.\u0275fac})}return i})(),za=class{positionStrategy;scrollStrategy=new Ba;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let t of e)n[t]!==void 0&&(this[t]=n[t])}}};var Tr=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var Wu=(()=>{class i{_attachedOverlays=[];_document=c(ce);_isAttached=!1;ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,a){return a.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ie({token:i,factory:i.\u0275fac})}return i})(),qu=(()=>{class i extends Wu{_ngZone=c(W);_renderer=c(st).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let a=t.length-1;a>-1;a--){let o=t[a];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=function(t){return new(t||i)};static \u0275prov=ie({token:i,factory:i.\u0275fac})}return i})(),$u=(()=>{class i extends Wu{_platform=c(de);_ngZone=c(W);_renderer=c(st).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,a={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(t,"pointerdown",this._pointerDownListener,a),o.listen(t,"click",this._clickListener,a),o.listen(t,"auxclick",this._clickListener,a),o.listen(t,"contextmenu",this._clickListener,a)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Je(e)};_clickListener=e=>{let t=Je(e),a=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let r=o.length-1;r>-1;r--){let s=o[r],l=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,l))){if(Lu(s.overlayElement,t)||Lu(s.overlayElement,a))break;this._ngZone?this._ngZone.run(()=>l.next(e)):l.next(e)}}};static \u0275fac=function(t){return new(t||i)};static \u0275prov=ie({token:i,factory:i.\u0275fac})}return i})();function Lu(i,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=n;for(;t;){if(t===i)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var Ku=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,a){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return i})(),Yu=(()=>{class i{_platform=c(de);_containerElement;_document=c(ce);_styleLoader=c(Oe);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||$s()){let a=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<a.length;o++)a[o].remove()}let t=this._document.createElement("div");t.classList.add(e),$s()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(Ku)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ie({token:i,factory:i.\u0275fac})}return i})(),Vl=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,t,a){this._renderer=e,this._ngZone=t,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",a)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Bl(i){return i&&i.nodeType===1}var Pl=oe([]),Rr=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new R;_attachments=new R;_detachments=new R;_positionStrategy;_scrollStrategy;_locationChanges;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new R;_outsidePointerEvents=new R;_afterNextRenderRef;constructor(n,e,t,a,o,r,s,l,d,m=!1,u,_){this._portalOutlet=n,this._host=e,this._pane=t,this._config=a,this._ngZone=o,this._keyboardDispatcher=r,this._document=s,this._location=l,this._outsideClickDispatcher=d,this._animationsDisabled=m,this._injector=u,this._renderer=_,a.scrollStrategy&&(this._scrollStrategy=a.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=a.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);if(this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),Ye(()=>{Pl.update(t=>t.includes(this)?t:[...t,this])}),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=He(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation===!0||this._config.disposeOnNavigation==="pop-state"){let t=this._location.subscribe(()=>this.dispose());this._locationChanges=()=>t.unsubscribe()}else this._config.disposeOnNavigation==="url-change"&&(this._locationChanges=this._location.onUrlChange(()=>this.dispose()));return this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges?.(),this._outsideClickDispatcher.remove(this),Ye(()=>{Pl.update(e=>e.filter(t=>t!==this))}),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges?.(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0,Ye(()=>{Pl.update(e=>e.filter(t=>t!==this))})}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=Y(Y({},this._config),n),this._updateElementSize()}setDirection(n){this._config=ot(Y({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=Pe(this._config.width),n.height=Pe(this._config.height),n.minWidth=Pe(this._config.minWidth),n.minHeight=Pe(this._config.minHeight),n.maxWidth=Pe(this._config.maxWidth),n.maxHeight=Pe(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Bl(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch(n){}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Vl(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,t){let a=wi(e||[]).filter(o=>!!o);a.length&&(t?n.classList.add(...a):n.classList.remove(...a))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=He(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},Vu="cdk-overlay-connected-position-bounding-box",Rg=/([A-Za-z%]+)$/;function Ha(i,n){return new Ar(n,i.get(Et),i.get(ce),i.get(de),i.get(Yu))}var Ar=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new R;_resizeSubscription=Ee.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,t,a,o){this._viewportRuler=e,this._document=t,this._platform=a,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(Vu),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,t=this._viewportRect,a=this._containerRect,o=[],r;for(let s of this._preferredPositions){let l=this._getOriginPoint(n,a,s),d=this._getOverlayPoint(l,e,s),m=this._getOverlayFit(d,e,t,s);if(m.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,l);return}if(this._canFitWithFlexibleDimensions(m,d,t)){o.push({position:s,origin:l,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(l,s)});continue}(!r||r.overlayFit.visibleArea<m.visibleArea)&&(r={overlayFit:m,overlayPoint:d,originPoint:l,position:s,overlayRect:e})}if(o.length){let s=null,l=-1;for(let d of o){let m=d.boundingBoxRect.width*d.boundingBoxRect.height*(d.position.weight||1);m>l&&(l=m,s=d)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(r.position,r.originPoint);return}this._applyPosition(r.position,r.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Xn(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Vu),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof D?this._origin.nativeElement:Bl(this._origin)?this._origin:null}_getOriginPoint(n,e,t){let a;if(t.originX=="center")a=n.left+n.width/2;else{let r=this._isRtl()?n.right:n.left,s=this._isRtl()?n.left:n.right;a=t.originX=="start"?r:s}e.left<0&&(a-=e.left);let o;return t.originY=="center"?o=n.top+n.height/2:o=t.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:a,y:o}}_getOverlayPoint(n,e,t){let a;t.overlayX=="center"?a=-e.width/2:t.overlayX==="start"?a=this._isRtl()?-e.width:0:a=this._isRtl()?0:-e.width;let o;return t.overlayY=="center"?o=-e.height/2:o=t.overlayY=="top"?0:-e.height,{x:n.x+a,y:n.y+o}}_getOverlayFit(n,e,t,a){let o=zu(e),{x:r,y:s}=n,l=this._getOffset(a,"x"),d=this._getOffset(a,"y");l&&(r+=l),d&&(s+=d);let m=0-r,u=r+o.width-t.width,_=0-s,p=s+o.height-t.height,b=this._subtractOverflows(o.width,m,u),v=this._subtractOverflows(o.height,_,p),I=b*v;return{visibleArea:I,isCompletelyWithinViewport:o.width*o.height===I,fitsInViewportVertically:v===o.height,fitsInViewportHorizontally:b==o.width}}_canFitWithFlexibleDimensions(n,e,t){if(this._hasFlexibleDimensions){let a=t.bottom-e.y,o=t.right-e.x,r=Bu(this._overlayRef.getConfig().minHeight),s=Bu(this._overlayRef.getConfig().minWidth),l=n.fitsInViewportVertically||r!=null&&r<=a,d=n.fitsInViewportHorizontally||s!=null&&s<=o;return l&&d}return!1}_pushOverlayOnScreen(n,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let a=zu(e),o=this._viewportRect,r=Math.max(n.x+a.width-o.width,0),s=Math.max(n.y+a.height-o.height,0),l=Math.max(o.top-t.top-n.y,0),d=Math.max(o.left-t.left-n.x,0),m=0,u=0;return a.width<=o.width?m=d||-r:m=n.x<this._getViewportMarginStart()?o.left-t.left-n.x:0,a.height<=o.height?u=l||-s:u=n.y<this._getViewportMarginTop()?o.top-t.top-n.y:0,this._previousPushAmount={x:m,y:u},{x:n.x+m,y:n.y+u}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!Ag(this._lastScrollVisibility,t)){let a=new Tr(n,t);this._positionChanges.next(a)}this._lastScrollVisibility=t}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,a=n.overlayY;n.overlayX==="center"?t="center":this._isRtl()?t=n.overlayX==="start"?"right":"left":t=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${t} ${a}`}_calculateBoundingBoxRect(n,e){let t=this._viewportRect,a=this._isRtl(),o,r,s;if(e.overlayY==="top")r=n.y,o=t.height-r+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=t.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=t.height-s+this._getViewportMarginTop();else{let p=Math.min(t.bottom-n.y+t.top,n.y),b=this._lastBoundingBoxSize.height;o=p*2,r=n.y-p,o>b&&!this._isInitialRender&&!this._growAfterOpen&&(r=n.y-b/2)}let l=e.overlayX==="start"&&!a||e.overlayX==="end"&&a,d=e.overlayX==="end"&&!a||e.overlayX==="start"&&a,m,u,_;if(d)_=t.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),m=n.x-this._getViewportMarginStart();else if(l)u=n.x,m=t.right-n.x-this._getViewportMarginEnd();else{let p=Math.min(t.right-n.x+t.left,n.x),b=this._lastBoundingBoxSize.width;m=p*2,u=n.x-p,m>b&&!this._isInitialRender&&!this._growAfterOpen&&(u=n.x-b/2)}return{top:r,left:u,bottom:s,right:_,width:m,height:o}}_setBoundingBoxStyles(n,e){let t=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let a={};if(this._hasExactPosition())a.top=a.left="0",a.bottom=a.right="auto",a.maxHeight=a.maxWidth="",a.width=a.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,r=this._overlayRef.getConfig().maxWidth;a.width=Pe(t.width),a.height=Pe(t.height),a.top=Pe(t.top)||"auto",a.bottom=Pe(t.bottom)||"auto",a.left=Pe(t.left)||"auto",a.right=Pe(t.right)||"auto",e.overlayX==="center"?a.alignItems="center":a.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?a.justifyContent="center":a.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(a.maxHeight=Pe(o)),r&&(a.maxWidth=Pe(r))}this._lastBoundingBoxSize=t,Xn(this._boundingBox.style,a)}_resetBoundingBoxStyles(){Xn(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Xn(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let t={},a=this._hasExactPosition(),o=this._hasFlexibleDimensions,r=this._overlayRef.getConfig();if(a){let m=this._viewportRuler.getViewportScrollPosition();Xn(t,this._getExactOverlayY(e,n,m)),Xn(t,this._getExactOverlayX(e,n,m))}else t.position="static";let s="",l=this._getOffset(e,"x"),d=this._getOffset(e,"y");l&&(s+=`translateX(${l}px) `),d&&(s+=`translateY(${d}px)`),t.transform=s.trim(),r.maxHeight&&(a?t.maxHeight=Pe(r.maxHeight):o&&(t.maxHeight="")),r.maxWidth&&(a?t.maxWidth=Pe(r.maxWidth):o&&(t.maxWidth="")),Xn(this._pane.style,t)}_getExactOverlayY(n,e,t){let a={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t)),n.overlayY==="bottom"){let r=this._document.documentElement.clientHeight;a.bottom=`${r-(o.y+this._overlayRect.height)}px`}else a.top=Pe(o.y);return a}_getExactOverlayX(n,e,t){let a={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t));let r;if(this._isRtl()?r=n.overlayX==="end"?"left":"right":r=n.overlayX==="end"?"right":"left",r==="right"){let s=this._document.documentElement.clientWidth;a.right=`${s-(o.x+this._overlayRect.width)}px`}else a.left=Pe(o.x);return a}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(a=>a.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Pu(n,t),isOriginOutsideView:Ll(n,t),isOverlayClipped:Pu(e,t),isOverlayOutsideView:Ll(e,t)}}_subtractOverflows(n,...e){return e.reduce((t,a)=>t-Math.max(a,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+n-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&wi(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof D)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,t=n.height||0;return{top:n.y,bottom:n.y+t,left:n.x,right:n.x+e,height:t,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let t=e.getBoundingClientRect();return n&&(e.style.display=""),t}};function Xn(i,n){for(let e in n)Object.hasOwn(n,e)&&(i[e]=n[e]);return i}function Bu(i){if(typeof i!="number"&&i!=null){let[n,e]=i.split(Rg);return!e||e==="px"?parseFloat(n):null}return i||null}function zu(i){return{top:Math.floor(i.top),right:Math.floor(i.right),bottom:Math.floor(i.bottom),left:Math.floor(i.left),width:Math.floor(i.width),height:Math.floor(i.height)}}function Ag(i,n){return i===n?!0:i.isOriginClipped===n.isOriginClipped&&i.isOriginOutsideView===n.isOriginOutsideView&&i.isOverlayClipped===n.isOverlayClipped&&i.isOverlayOutsideView===n.isOverlayOutsideView}var Hu="cdk-global-overlay-wrapper";function Qu(i){return new Or}var Or=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(Hu),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:a,height:o,maxWidth:r,maxHeight:s}=t,l=(a==="100%"||a==="100vw")&&(!r||r==="100%"||r==="100vw"),d=(o==="100%"||o==="100vh")&&(!s||s==="100%"||s==="100vh"),m=this._xPosition,u=this._xOffset,_=this._overlayRef.getConfig().direction==="rtl",p="",b="",v="";l?v="flex-start":m==="center"?(v="center",_?b=u:p=u):_?m==="left"||m==="end"?(v="flex-end",p=u):(m==="right"||m==="start")&&(v="flex-start",b=u):m==="left"||m==="start"?(v="flex-start",p=u):(m==="right"||m==="end")&&(v="flex-end",b=u),n.position=this._cssPosition,n.marginLeft=l?"0":p,n.marginTop=d?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=l?"0":b,e.justifyContent=v,e.alignItems=d?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(Hu),t.justifyContent=t.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},Xu=(()=>{class i{_injector=c(pe);global(){return Qu()}flexibleConnectedTo(e){return Ha(this._injector,e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ie({token:i,factory:i.\u0275fac})}return i})(),ja=new w("OVERLAY_DEFAULT_CONFIG");function Ga(i,n){i.get(Oe).load(Ku);let e=i.get(Yu),t=i.get(ce),a=i.get(Fe),o=i.get(ri),r=i.get(Be),s=i.get(we,null,{optional:!0})||i.get(st).createRenderer(null,null),l=new za(n),d=i.get(ja,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||r.value,!t.body||!("showPopover"in t.body)?l.usePopover=!1:l.usePopover=n?.usePopover??d;let m=t.createElement("div"),u=t.createElement("div");m.id=a.getId("cdk-overlay-"),m.classList.add("cdk-overlay-pane"),u.appendChild(m),l.usePopover&&(u.setAttribute("popover","manual"),u.classList.add("cdk-overlay-popover"));let _=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return Bl(_)?_.after(u):_?.type==="parent"?_.element.appendChild(u):e.getContainerElement().appendChild(u),new Rr(new Oo(m,o,i),u,m,l,i.get(W),i.get(qu),t,i.get(uc),i.get($u),n?.disableAnimations??i.get(Mn,null,{optional:!0})==="NoopAnimations",i.get(ai),s)}var Zu=(()=>{class i{scrollStrategies=c(Uu);_positionBuilder=c(Xu);_injector=c(pe);create(e){return Ga(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ie({token:i,factory:i.\u0275fac})}return i})(),Og=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],Fg=new w("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let i=c(pe);return()=>Zn(i)}}),Zi=(()=>{class i{elementRef=c(D);static \u0275fac=function(t){return new(t||i)};static \u0275dir=x({type:i,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return i})(),Ju=new w("cdk-connected-overlay-default-config"),Pr=(()=>{class i{_dir=c(Be,{optional:!0});_injector=c(pe);_overlayRef;_templatePortal;_backdropSubscription=Ee.EMPTY;_attachSubscription=Ee.EMPTY;_detachSubscription=Ee.EMPTY;_positionSubscription=Ee.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=c(Fg);_ngZone=c(W);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new Q;positionChange=new Q;attach=new Q;detach=new Q;overlayKeydown=new Q;overlayOutsideClick=new Q;constructor(){let e=c(rt),t=c(it),a=c(Ju,{optional:!0}),o=c(ja,{optional:!0});this.usePopover=o?.usePopover===!1?null:"global",this._templatePortal=new _n(e,t),this.scrollStrategy=this._scrollStrategyFactory(),a&&this._assignConfig(a)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=Og);let e=this._overlayRef=Ga(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(t=>{this.overlayKeydown.next(t),t.keyCode===27&&!this.disableClose&&!at(t)&&(t.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(t=>{let a=this._getOriginElement(),o=Je(t);(!a||a!==o&&!a.contains(o))&&this.overlayOutsideClick.next(t)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),t=new za({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(t.height=this.height),(this.minWidth||this.minWidth===0)&&(t.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(t.minHeight=this.minHeight),this.backdropClass&&(t.backdropClass=this.backdropClass),this.panelClass&&(t.panelClass=this.panelClass),t}_updatePositionStrategy(e){let t=this.positions.map(a=>({originX:a.originX,originY:a.originY,overlayX:a.overlayX,overlayY:a.overlayY,offsetX:a.offsetX||this.offsetX,offsetY:a.offsetY||this.offsetY,panelClass:a.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(t).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=Ha(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof Zi?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof Zi?this.origin.elementRef.nativeElement:this.origin instanceof D?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(t=>this.backdropClick.emit(t)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(Jl(()=>this.positionChange.observers.length>0)).subscribe(t=>{this._ngZone.run(()=>this.positionChange.emit(t)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(t){return new(t||i)};static \u0275dir=x({type:i,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",S],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",S],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",S],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",S],push:[2,"cdkConnectedOverlayPush","push",S],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",e=>e==="url-change"||e==="pop-state"?e:S(e)],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",S],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[Te]})}return i})(),Ua=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=G({providers:[Zu],imports:[re,Td,xa,xa]})}return i})();var Pg=new w("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let i=c(pe);return()=>Zn(i)}}),Lg=new w("MAT_SELECT_CONFIG"),Vg=new w("MatSelectTrigger"),zl=class{source;value;constructor(n,e){this.source=n,this.value=e}},Lr=(()=>{class i{_viewportRuler=c(Et);_changeDetectorRef=c(xe);_elementRef=c(D);_dir=c(Be,{optional:!0});_idGenerator=c(Fe);_renderer=c(we);_parentFormField=c(Oa,{optional:!0});ngControl=c(Xt,{self:!0,optional:!0});_liveAnnouncer=c(js);_defaultOptions=c(Lg,{optional:!0});_animationsDisabled=Me();_popoverLocation;_initialized=new R;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let a=this.panel.nativeElement,o=Ru(e,this.options,this.optionGroups),r=t._getHostElement();e===0&&o===1?a.scrollTop=0:a.scrollTop=Au(r.offsetTop,r.offsetHeight,a.scrollTop,a.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new zl(this,e)}_scrollStrategyFactory=c(Pg);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new R;_errorStateTracker;stateChanges=new R;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=oe(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Wn.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Ka(()=>{let e=this.options;return e?e.changes.pipe(nt(e),qt(()=>vt(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(qt(()=>this.optionSelectionChanges))});openedChange=new Q;_openedStream=this.openedChange.pipe(Xe(e=>e),ye(()=>{}));_closedStream=this.openedChange.pipe(Xe(e=>!e),ye(()=>{}));selectionChange=new Q;valueChange=new Q;constructor(){let e=c(Ai),t=c(Ia,{optional:!0}),a=c(Ta,{optional:!0}),o=c(new en("tabindex"),{optional:!0}),r=c(ja,{optional:!0}),s=c(ur,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Oi(e,s||this.ngControl,a,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=r?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new Qn(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(te(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(te(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(nt(null),te(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let a=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?a.setAttribute("aria-labelledby",e):a.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(ti(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(a),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),a=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,a=t===40||t===38||t===37||t===39,o=t===13||t===32,r=this._keyManager;if(!r.isTyping()&&o&&!at(e)||(this.multiple||e.altKey)&&a)e.preventDefault(),this.open();else if(!this.multiple){let s=this.selected;r.onKeydown(e);let l=this.selected;l&&s!==l&&this._liveAnnouncer.announce(l.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,a=e.keyCode,o=a===40||a===38,r=t.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!r&&(a===13||a===32)&&t.activeItem&&!at(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!r&&this._multiple&&a===65&&e.ctrlKey){e.preventDefault();let s=this.options.some(l=>!l.disabled&&!l.selected);this.options.forEach(l=>{l.disabled||(s?l.select():l.deselect())})}else{let s=t.activeItemIndex;t.onKeydown(e),this._multiple&&o&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==s&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!at(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(a=>{if(this._selectionModel.isSelected(a))return!1;try{return(a.value!=null||this.canSelectNullableOptions)&&this._compareWith(a.value,e)}catch(o){return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Zi?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new ya(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=vt(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(te(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),vt(...this.options.map(t=>t._stateChanges)).pipe(te(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let a=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(a!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),a!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,a)=>this.sortComparator?this.sortComparator(t,a,e):e.indexOf(t)-e.indexOf(a)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(a=>a.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=Je(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=["trigger"],t=["panel"],a=[[["mat-select-trigger"]],"*"],o=["mat-select-trigger","*"];function r(u,_){if(u&1&&(f(0,"span",4),F(1),g()),u&2){let p=L();h(),Ae(p.placeholder)}}function s(u,_){u&1&&q(0)}function l(u,_){if(u&1&&(f(0,"span",11),F(1),g()),u&2){let p=L(2);h(),Ae(p.triggerValue)}}function d(u,_){if(u&1&&(f(0,"span",5),B(1,s,1,0)(2,l,2,1,"span",11),g()),u&2){let p=L();h(),z(p.customTrigger?1:2)}}function m(u,_){if(u&1){let p=Ot();f(0,"div",12,1),X("keydown",function(v){ut(p);let I=L();return pt(I._handleKeydown(v))}),q(2,1),g()}if(u&2){let p=L();Ve(p.panelClass),P("mat-select-panel-animations-enabled",!p._animationsDisabled)("mat-primary",p._parentFormField?.color==="primary")("mat-accent",p._parentFormField?.color==="accent")("mat-warn",p._parentFormField?.color==="warn")("mat-undefined",!p._parentFormField?.color),V("id",p.id+"-panel")("aria-multiselectable",p.multiple)("aria-label",p.ariaLabel||null)("aria-labelledby",p._getPanelAriaLabelledby())}}return M({type:i,selectors:[["mat-select"]],contentQueries:function(_,p,b){if(_&1&&qe(b,Vg,5)(b,Cn,5)(b,Fl,5),_&2){let v;N(v=E())&&(p.customTrigger=v.first),N(v=E())&&(p.options=v),N(v=E())&&(p.optionGroups=v)}},viewQuery:function(_,p){if(_&1&&Ie(e,5)(t,5)(Pr,5),_&2){let b;N(b=E())&&(p.trigger=b.first),N(b=E())&&(p.panel=b.first),N(b=E())&&(p._overlayDir=b.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(_,p){_&1&&X("keydown",function(v){return p._handleKeydown(v)})("focus",function(){return p._onFocus()})("blur",function(){return p._onBlur()}),_&2&&(V("id",p.id)("tabindex",p.disabled?-1:p.tabIndex)("aria-controls",p.panelOpen?p.id+"-panel":null)("aria-expanded",p.panelOpen)("aria-label",p.ariaLabel||null)("aria-required",p.required.toString())("aria-disabled",p.disabled.toString())("aria-invalid",p.errorState)("aria-activedescendant",p._getAriaActiveDescendant()),P("mat-mdc-select-disabled",p.disabled)("mat-mdc-select-invalid",p.errorState)("mat-mdc-select-required",p.required)("mat-mdc-select-empty",p.empty)("mat-mdc-select-multiple",p.multiple)("mat-select-open",p.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",S],disableRipple:[2,"disableRipple","disableRipple",S],tabIndex:[2,"tabIndex","tabIndex",u=>u==null?0:je(u)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",S],placeholder:"placeholder",required:[2,"required","required",S],multiple:[2,"multiple","multiple",S],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",S],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",je],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",S]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[ae([{provide:Aa,useExisting:i},{provide:Ol,useExisting:i}]),Te],ngContentSelectors:o,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(_,p){if(_&1&&(ve(a),f(0,"div",2,0),X("click",function(){return p.open()}),f(3,"div",3),B(4,r,2,1,"span",4)(5,d,3,1,"span",5),g(),f(6,"div",6)(7,"div",7),oi(),f(8,"svg",8),O(9,"path",9),g()()()(),_e(10,m,3,16,"ng-template",10),X("detach",function(){return p.close()})("backdropClick",function(){return p.close()})("overlayKeydown",function(v){return p._handleOverlayKeydown(v)})),_&2){let b=ht(1);h(3),V("id",p._valueId),h(),z(p.empty?4:5),h(6),C("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",p._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",p._scrollStrategy)("cdkConnectedOverlayOrigin",p._preferredOverlayOrigin||b)("cdkConnectedOverlayPositions",p._positions)("cdkConnectedOverlayWidth",p._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",p._popoverLocation)}},dependencies:[Zi,Pr],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-select-enabled-trigger-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-select-trigger-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-select-trigger-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-select-trigger-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-select-trigger-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-select-trigger-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--%NS%mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-select-invalid-arrow-color, var(--%NS%mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--%NS%mat-select-enabled-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-focused-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-disabled-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--%NS%mat-select-panel-background-color, var(--%NS%mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear forwards;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--%NS%mat-select-placeholder-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--%NS%mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})})()}return i})();var Vr=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=G({imports:[Ua,Sn,re,jn,sn,Sn]})}return i})();var Bg=()=>["nodata"];function zg(i,n){if(i&1&&(f(0,"mat-option",4),F(1),k(2,"versionName"),g()),i&2){let e=n.$implicit,t=L();C("value",e),h(),he(" ",ke(2,2,e,t.languageService.langId())," ")}}function Hg(i,n){i&1&&(f(0,"th",21),F(1,"Name"),g())}function jg(i,n){if(i&1&&(f(0,"td",22),F(1),k(2,"moveName"),g()),i&2){let e=n.$implicit,t=L();h(),he(" ",ke(2,1,e.names,t.languageService.langId())," ")}}function Gg(i,n){i&1&&(f(0,"th",23),F(1,"Level"),g())}function Ug(i,n){if(i&1&&(f(0,"td",24),F(1),g()),i&2){let e=n.$implicit;h(),he(" ",e.level>0?e.level:"-"," ")}}function Wg(i,n){if(i&1&&(f(0,"td",25),F(1),k(2,"translate"),g()),i&2){let e=L();C("colSpan",e.displayedColumns.length),h(),he(" ",H(2,2,"table.noResult")," ")}}function qg(i,n){if(i&1&&O(0,"tr",26),i&2){let e=L();C("hidden",e.filteredMoves.length>0)}}function $g(i,n){i&1&&O(0,"tr",27)}function Kg(i,n){i&1&&O(0,"tr",28)}var np=(()=>{class i{constructor(){this.languageService=c(Yt),this.pokemonMoves=tn(),this.allVersions=Sr.map(e=>e.id).filter(e=>e),this.currentVersion="1",this.currentLearnType=1,this.displayedColumns=["name","level"]}ngOnInit(){this.getData()}ngOnChanges(){this.getData()}getData(){this.filteredMoves=[],this.pokemonMoves()?.forEach(e=>{e.version_group_id===parseInt(this.currentVersion)&&e.pokemon_move_method_id===this.currentLearnType&&this.filteredMoves.push({id:e.move_id,level:e.level,method:e.pokemon_move_method_id,names:e.names})}),this.filteredMoves=this.filteredMoves.sort(function(e,t){return e.level-t.level}),this.allVersions=this.allVersions.filter(e=>this.pokemonMoves()?.some(t=>t.version_group_id===parseInt(e))),this.allVersions.some(e=>e===this.currentVersion)||(this.currentVersion=this.allVersions[0]??"1")}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=M({type:i,selectors:[["app-move-table"]],inputs:{pokemonMoves:[1,"pokemonMoves"]},features:[Te],decls:38,vars:24,consts:[["appearance","outlined",1,"app-surface"],[1,"move-filter-layout"],[1,"move-controls"],["appearance","standard","aria-label","Move learning method",3,"ngModelChange","hideSingleSelectionIndicator","ngModel"],[3,"value"],[1,"version-control"],["appearance","outline"],["aria-label","Pok\xE9mon version",3,"ngModelChange","ngModel"],[1,"table-container"],["mat-table","",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","level"],["mat-header-cell","","class","numeric-cell",4,"matHeaderCellDef"],["mat-cell","","class","numeric-cell",4,"matCellDef"],["matColumnDef","nodata"],["mat-footer-row","","class","no-results",3,"colSpan",4,"matFooterCellDef"],["mat-footer-row","",3,"hidden",4,"matFooterRowDef"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-cell","",1,"numeric-cell"],["mat-cell","",1,"numeric-cell"],["mat-footer-row","",1,"no-results",3,"colSpan"],["mat-footer-row","",3,"hidden"],["mat-header-row",""],["mat-row",""]],template:function(t,a){t&1&&(f(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title"),F(3),k(4,"translate"),g()(),f(5,"mat-card-content")(6,"div",1)(7,"div",2)(8,"mat-button-toggle-group",3),un(),In("ngModelChange",function(r){return Dn(a.currentLearnType,r)||(a.currentLearnType=r),r}),X("ngModelChange",function(){return a.getData()}),f(9,"mat-button-toggle",4),F(10),k(11,"translate"),g(),f(12,"mat-button-toggle",4),F(13),k(14,"translate"),g(),f(15,"mat-button-toggle",4),F(16),k(17,"translate"),g()()(),f(18,"div",5)(19,"mat-form-field",6)(20,"mat-label"),F(21,"Pokemon Version"),g(),f(22,"mat-select",7),un(),In("ngModelChange",function(r){return Dn(a.currentVersion,r)||(a.currentVersion=r),r}),X("ngModelChange",function(){return a.getData()}),lt(23,zg,3,5,"mat-option",4,hn),g()()()(),f(25,"div",8)(26,"table",9),yt(27,10),_e(28,Hg,2,0,"th",11)(29,jg,3,4,"td",12),xt(),yt(30,13),_e(31,Gg,2,0,"th",14)(32,Ug,2,1,"td",15),xt(),yt(33,16),_e(34,Wg,3,4,"td",17),xt(),_e(35,qg,1,1,"tr",18)(36,$g,1,0,"tr",19)(37,Kg,1,0,"tr",20),g()()()()),t&2&&(h(3),Ae(H(4,15,"moveTable.title")),h(5),C("hideSingleSelectionIndicator",!0),En("ngModel",a.currentLearnType),pn(),h(),C("value",1),h(),Ae(H(11,17,"moveTable.learnTypes.levelUp")),h(2),C("value",3),h(),Ae(H(14,19,"moveTable.learnTypes.tutor")),h(2),C("value",4),h(),Ae(H(17,21,"moveTable.learnTypes.machine")),h(6),En("ngModel",a.currentVersion),pn(),h(),ct(a.allVersions),h(3),C("dataSource",a.filteredMoves),h(9),C("matFooterRowDef",gn(23,Bg)),h(),C("matHeaderRowDef",a.displayedColumns)("matHeaderRowDefSticky",!0),h(),C("matRowDefColumns",a.displayedColumns))},dependencies:[ui,di,mi,so,kc,Nr,Va,Xi,sn,Fi,Kn,Vr,Lr,Cn,Sn,Ki,Vi,zi,Ui,Hi,Bi,Wi,_u,vu,ji,Gi,qi,$i,yu,Ri,Ti,$n,ft,Su,Nu],styles:[".table-container[_ngcontent-%COMP%]{position:relative;min-height:120px;max-height:420px;overflow:auto;margin-top:12px;border:1px solid var(--%NS%mat-sys-outline-variant);border-radius:16px}.move-controls[_ngcontent-%COMP%]{min-width:0;align-self:center}.move-filter-layout[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,1fr) minmax(180px,260px);align-items:start;gap:16px}.version-control[_ngcontent-%COMP%]{width:min(100%,260px)}.version-control[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}.no-results[_ngcontent-%COMP%]{padding:24px;color:var(--%NS%mat-sys-on-surface-variant);text-align:center}@media(max-width:700px){.move-controls[_ngcontent-%COMP%]{overflow-x:auto}.move-controls[_ngcontent-%COMP%]   mat-button-toggle-group[_ngcontent-%COMP%]{min-width:max-content}.version-control[_ngcontent-%COMP%]{width:100%;margin-top:12px}.move-filter-layout[_ngcontent-%COMP%]{grid-template-columns:minmax(0,1fr);gap:0}}"]})}}return i})();var ip=(()=>{class i{transform(e){return e?.filter(t=>t.damage!==1).sort(function(t,a){return a.damage-t.damage})}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275pipe=Mt({name:"sortByTypeDamage",type:i,pure:!0})}}return i})();var Yg=new w("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:ap})}),ap=100,Qg=10,Br=(()=>{class i{_elementRef=c(D);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=c(Yg),t=wa(),a=this._elementRef.nativeElement;this._noopAnimations=t==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=a.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&t==="reduced-motion"&&a.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=ap;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-Qg)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=["determinateSpinner"];function t(a,o){if(a&1&&(oi(),f(0,"svg",11),O(1,"circle",12),g()),a&2){let r=L();V("viewBox",r._viewBox()),h(),$e("stroke-dasharray",r._strokeCircumference(),"px")("stroke-dashoffset",r._strokeCircumference()/2,"px")("stroke-width",r._circleStrokeWidth(),"%"),V("r",r._circleRadius())}}return M({type:i,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(o,r){if(o&1&&Ie(e,5),o&2){let s;N(s=E())&&(r._determinateCircle=s.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(o,r){o&2&&(V("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",r.mode==="determinate"?r.value:null)("mode",r.mode),Ve("mat-"+r.color),$e("width",r.diameter,"px")("height",r.diameter,"px")("--%NS%mat-progress-spinner-size",r.diameter+"px")("--%NS%mat-progress-spinner-active-indicator-width",r.diameter+"px"),P("_mat-animation-noopable",r._noopAnimations)("mdc-circular-progress--indeterminate",r.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",je],diameter:[2,"diameter","diameter",je],strokeWidth:[2,"strokeWidth","strokeWidth",je]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(o,r){if(o&1&&(_e(0,t,2,8,"ng-template",null,0,si),f(2,"div",2,1),oi(),f(4,"svg",3),O(5,"circle",4),g()(),ec(),f(6,"div",5)(7,"div",6)(8,"div",7),De(9,8),g(),f(10,"div",9),De(11,8),g(),f(12,"div",10),De(13,8),g()()()),o&2){let s=ht(1);h(4),V("viewBox",r._viewBox()),h(),$e("stroke-dasharray",r._strokeCircumference(),"px")("stroke-dashoffset",r._strokeDashOffset(),"px")("stroke-width",r._circleStrokeWidth(),"%"),V("r",r._circleRadius()),h(4),C("ngTemplateOutlet",s),h(2),C("ngTemplateOutlet",s),h(2),C("ngTemplateOutlet",s)}},dependencies:[li],styles:[`.mat-mdc-progress-spinner {
  --%NS%mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--%NS%mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --%NS%mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--%NS%mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--%NS%mat-progress-spinner-active-indicator-color, var(--%NS%mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2})})()}return i})();var zr=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=G({imports:[re]})}return i})();var Zg=()=>[import("./chunk-SL5MMDWP.js").then(i=>i.EvolutionTabComponent)],Jg=i=>({pokemonData:i}),Hl=()=>[],eb=(i,n)=>n.type_id;function tb(i,n){if(i&1&&(f(0,"mat-chip",17),k(1,"typeToName"),k(2,"colorForType"),O(3,"img",18),k(4,"typeToName"),F(5),k(6,"typeToName"),k(7,"translate"),g()),i&2){let e=n.$implicit;$e("--%NS%type-color",H(2,6,H(1,4,e.type_id))),h(3),C("src","./assets/images/types/"+H(4,8,e.type_id)+".svg"),h(2),he(" ",H(7,12,"types."+H(6,10,e.type_id))," ")}}function nb(i,n){if(i&1&&(f(0,"mat-tab",15),k(1,"translate"),O(2,"app-pokemon-status-table",19),g()),i&2){let e=L(2).pokemonData;C("label",H(1,2,"status")),h(2),C("pokemonStats",e.stats??gn(4,Hl))}}function ib(i,n){if(i&1&&O(0,"app-evolution-tab",20),i&2){let e=L(4);C("evolutionChain",e.evolutionChain())("actualLanguageId",e.languageService.langId())}}function ab(i,n){i&1&&O(0,"mat-spinner",21)}function ob(i,n){i&1&&(f(0,"mat-tab",15),k(1,"translate"),Za(2,ib,1,2)(3,ab,1,0),ac(4,2,Zg,null,3),oc(0,-1),g()),i&2&&C("label",H(1,1,"evolutions"))}function rb(i,n){if(i&1&&(f(0,"mat-tab",15),k(1,"translate"),O(2,"app-pokemon-type-effectiveness-table",22),k(3,"sortByTypeDamage"),g()),i&2){let e=L(2).pokemonData;C("label",H(1,2,"typeEffectiveness.title")),h(2),C("typeEffectiveness",H(3,4,e.typeEffectiveness)??gn(6,Hl))}}function sb(i,n){if(i&1&&(f(0,"section",16),O(1,"app-move-table",23),g()),i&2){let e=L(2).pokemonData;h(),C("pokemonMoves",e.moves??gn(1,Hl))}}function lb(i,n){if(i&1&&(f(0,"div",3)(1,"mat-card",4)(2,"mat-card-content")(3,"section",5)(4,"mat-tab-group")(5,"mat-tab",6)(6,"div",7),O(7,"img",8),k(8,"pokemonImage"),k(9,"pokemonSpeciesName"),g()(),f(10,"mat-tab",9)(11,"div",10)(12,"div",11),O(13,"img",12),k(14,"pokemonImage"),k(15,"pokemonSpeciesName"),O(16,"img",12),k(17,"pokemonImage"),k(18,"pokemonSpeciesName"),g(),O(19,"mat-divider"),f(20,"div",11),O(21,"img",12),k(22,"pokemonImage"),k(23,"pokemonSpeciesName"),O(24,"img",12),k(25,"pokemonImage"),k(26,"pokemonSpeciesName"),g()()()(),f(27,"h1"),F(28),k(29,"pokemonSpeciesName"),k(30,"titlecase"),g(),f(31,"mat-chip-set"),lt(32,tb,8,14,"mat-chip",13,eb),g()(),f(34,"section",14)(35,"mat-tab-group"),B(36,nb,3,5,"mat-tab",15),B(37,ob,6,3,"mat-tab",15),B(38,rb,4,7,"mat-tab",15),g()()()(),B(39,sb,2,2,"section",16),g()),i&2){let e=L().pokemonData,t=L();h(7),C("ngSrc",ke(8,15,e.id,t.pokemonSpriteTypePath.ARTWORK))("alt",ke(9,18,e.species_names,t.languageService.langId())+" artwork"),h(6),C("ngSrc",ke(14,21,e.id,t.pokemonSpriteTypePath.BACK))("alt",ke(15,24,e.species_names,t.languageService.langId())+" back sprite"),h(3),C("ngSrc",ke(17,27,e.id,t.pokemonSpriteTypePath.FRONT))("alt",ke(18,30,e.species_names,t.languageService.langId())+" front sprite"),h(5),C("ngSrc",ke(22,33,e.id,t.pokemonSpriteTypePath.SHINY_BACK))("alt",ke(23,36,e.species_names,t.languageService.langId())+" shiny back sprite"),h(3),C("ngSrc",ke(25,39,e.id,t.pokemonSpriteTypePath.SHINY_FRONT))("alt",ke(26,42,e.species_names,t.languageService.langId())+" shiny front sprite"),h(4),he(" ",H(30,48,ke(29,45,e.species_names,t.languageService.langId()))," "),h(4),ct(e.types),h(4),z(e.stats?36:-1),h(),z(t.evolutionChain().length>1?37:-1),h(),z(e.types?38:-1),h(),z(e.moves?39:-1)}}function cb(i,n){if(i&1&&B(0,lb,40,50,"div",3),i&2){let e=n.pokemonData;z(e?0:-1)}}var rp=(()=>{class i{constructor(){this.pokemonData=oe(void 0),this.evolutionChain=oe([]),this.pokemonSpriteTypePath=lo,this.languageService=c(Yt),this.destroyRef=c(St),this.activatedRoute=c(yc)}ngOnInit(){this.activatedRoute.data.pipe(nn(this.destroyRef)).subscribe(({pokemonData:e})=>{this.pokemonData.set(e),this.evolutionChain.set([]),e.evolution&&this.parseEvolutionChain(e.evolution)})}parseEvolutionChain(e){let t={};for(let a of e)if(a.evolves_from_species_id===null)t[a.id]=0;else{let o=parseInt(a.evolves_from_species_id),r=t[o]||0;t[a.id]=r+1}for(let a of e)a.step=t[a.id];this.evolutionChain.set(e.sort((a,o)=>a.step===0?-1:o.step===0?1:(a.step??0)-(o.step??0)))}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=M({type:i,selectors:[["app-details"]],decls:4,vars:4,consts:[["detailView",""],[1,"page-content"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"detail-layout"],["appearance","outlined",1,"app-surface","detail-hero"],[1,"detail-artwork"],["label","Artwork"],[1,"imgContainer"],["width","340","height","340","priority","",3,"ngSrc","alt"],["label","Sprites"],[1,"imgContainer","sprite-container"],[1,"sprite-row"],["width","96","height","96",3,"ngSrc","alt"],[1,"type-chip",3,"--%NS%type-color"],[1,"detail-info"],[3,"label"],[1,"detail-moves"],[1,"type-chip"],["matChipAvatar","","alt","",3,"src"],[3,"pokemonStats"],[3,"evolutionChain","actualLanguageId"],[1,"deferred-spinner"],[3,"typeEffectiveness"],[3,"pokemonMoves"]],template:function(t,a){if(t&1&&(f(0,"main",1),_e(1,cb,1,1,"ng-template",null,0,si),De(3,2),g()),t&2){let o=ht(2);h(3),C("ngTemplateOutlet",o)("ngTemplateOutletContext",eo(2,Jg,a.pokemonData()))}},dependencies:[$t,li,ui,di,mi,bm,il,gm,vm,_m,Pi,Yn,hr,fr,wu,Cu,np,ao,zr,Br,io,ft,co,hi,Qi,Cr,ip],styles:[".detail-layout[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px}.detail-hero[_ngcontent-%COMP%]{overflow:hidden}.detail-hero[_ngcontent-%COMP%] > mat-card-content[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);align-items:start;gap:clamp(20px,4vw,56px);padding:clamp(16px,3vw,32px)}.detail-artwork[_ngcontent-%COMP%], .detail-info[_ngcontent-%COMP%], .detail-moves[_ngcontent-%COMP%]{min-width:0}.detail-artwork[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.detail-artwork[_ngcontent-%COMP%]   mat-tab-group[_ngcontent-%COMP%]{width:100%}.detail-artwork[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0 0 12px;font-size:clamp(1.75rem,3vw,2.25rem);font-weight:700;text-align:center}.detail-artwork[_ngcontent-%COMP%]   mat-chip-set[_ngcontent-%COMP%]{justify-content:center}.imgContainer[_ngcontent-%COMP%]{display:flex;justify-content:center;min-height:300px;flex-flow:row wrap;overflow:hidden}.imgContainer[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:min(100%,340px);height:auto;object-fit:contain}.sprite-row[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:8px}.sprite-row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:96px;height:96px;object-fit:contain}.sprite-container[_ngcontent-%COMP%]{flex-flow:column nowrap;align-items:center;justify-content:center;gap:16px}.sprite-container[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%]{width:min(100%,240px)}.deferred-spinner[_ngcontent-%COMP%]{display:block;margin:24px auto}@media(max-width:760px){.detail-hero[_ngcontent-%COMP%] > mat-card-content[_ngcontent-%COMP%]{grid-template-columns:minmax(0,1fr);gap:24px}.imgContainer[_ngcontent-%COMP%]{min-height:260px}}@media(max-width:480px){.detail-hero[_ngcontent-%COMP%] > mat-card-content[_ngcontent-%COMP%]{padding:12px}.imgContainer[_ngcontent-%COMP%]{min-height:220px}}"]})}}return i})();var Hr=(()=>{class i{constructor(){this.name=oe(""),this.types=oe([]),this.languageService=c(Yt)}getHttpParams(e,t){let a=new bc().set("page",e).set("perPage",t).set("langId",this.languageService.langId()),o=this.name();o?.length>=3&&(a=a.set("name",o));let r=this.types();if(r?.length)for(let s of r)a=a.append("typeIds[]",s);return a}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=Le({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var db=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,a){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2})}return i})(),mb={passive:!0},sp=(()=>{class i{_platform=c(de);_ngZone=c(W);_renderer=c(st).createRenderer(null,null);_styleLoader=c(Oe);_monitoredElements=new Map;monitor(e){if(!this._platform.isBrowser)return $a;this._styleLoader.load(db);let t=mt(e),a=this._monitoredElements.get(t);if(a)return a.subject;let o=new R,r="cdk-text-field-autofilled",s=d=>{d.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(r)?(t.classList.add(r),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!0}))):d.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(r)&&(t.classList.remove(r),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",s,mb)));return this._monitoredElements.set(t,{subject:o,unlisten:l}),o}stopMonitoring(e){let t=mt(e),a=this._monitoredElements.get(t);a&&(a.unlisten(),a.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ie({token:i,factory:i.\u0275fac})}return i})();var lp=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=G({})}return i})();var cp=new w("MAT_INPUT_VALUE_ACCESSOR");var ub=["button","checkbox","file","hidden","image","radio","range","reset","submit"],pb=new w("MAT_INPUT_CONFIG"),dp=(()=>{class i{_elementRef=c(D);_platform=c(de);ngControl=c(Xt,{optional:!0,self:!0});_autofillMonitor=c(sp);_ngZone=c(W);_formField=c(Oa,{optional:!0});_renderer=c(we);_uid=c(Fe).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=c(pb,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new R;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Dt(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Wn.required)??!1}set required(e){this._required=Dt(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Ks().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Dt(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Ks().has(e));constructor(){let e=c(Ia,{optional:!0}),t=c(Ta,{optional:!0}),a=c(Ai),o=c(cp,{optional:!0,self:!0}),r=c(ur,{optional:!0,self:!0}),s=this._elementRef.nativeElement,l=s.nodeName.toLowerCase();o?At(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=s,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(s,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Oi(a,r||this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=l==="select",this._isTextarea=l==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=s.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&kt(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){ub.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||i)};static \u0275dir=x({type:i,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,a){t&1&&X("focus",function(){return a._focusChanged(!0)})("blur",function(){return a._focusChanged(!1)})("input",function(){return a._onInput()}),t&2&&(fn("id",a.id)("disabled",a.disabled&&!a.disabledInteractive)("required",a.required),V("name",a.name||null)("readonly",a._getReadonlyAttribute())("aria-disabled",a.disabled&&a.disabledInteractive?"true":null)("aria-invalid",a.empty&&a.required?null:a.errorState)("aria-required",a.required)("id",a.id),P("mat-input-server",a._isServer)("mat-mdc-form-field-textarea-control",a._isInFormField&&a._isTextarea)("mat-mdc-form-field-input-control",a._isInFormField)("mat-mdc-input-disabled-interactive",a.disabledInteractive)("mdc-text-field__input",a._isInFormField)("mat-mdc-native-select-inline",a._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",S]},exportAs:["matInput"],features:[ae([{provide:Aa,useExisting:i}]),Te]})}return i})(),mp=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=G({imports:[sn,sn,lp,re]})}return i})();function up(i){return Error(`Unable to find icon with the name "${i}"`)}function fb(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function pp(i){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${i}".`)}function hp(i){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${i}".`)}var ln=class{url;svgText;options;svgElement=null;constructor(n,e,t){this.url=n,this.svgText=e,this.options=t}},gp=(()=>{class i{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass;constructor(e,t,a,o){this._httpClient=e,this._sanitizer=t,this._errorHandler=o,this._document=a}addSvgIcon(e,t,a){return this.addSvgIconInNamespace("",e,t,a)}addSvgIconLiteral(e,t,a){return this.addSvgIconLiteralInNamespace("",e,t,a)}addSvgIconInNamespace(e,t,a,o){return this._addSvgIconConfig(e,t,new ln(a,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,a,o){let r=this._sanitizer.sanitize(mn.HTML,a);if(!r)throw hp(a);let s=Vn(r);return this._addSvgIconConfig(e,t,new ln("",s,o))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,a){return this._addSvgIconSetConfig(e,new ln(t,null,a))}addSvgIconSetLiteralInNamespace(e,t,a){let o=this._sanitizer.sanitize(mn.HTML,t);if(!o)throw hp(t);let r=Vn(o);return this._addSvgIconSetConfig(e,new ln("",r,a))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass??=bb(this._document),this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(mn.RESOURCE_URL,e);if(!t)throw pp(e);let a=this._cachedIconsByUrl.get(t);return a?Se(jr(a)):this._loadSvgIconFromConfig(new ln(e,null)).pipe(ii(o=>this._cachedIconsByUrl.set(t,o)),ye(o=>jr(o)))}getNamedSvgIcon(e,t=""){let a=fp(t,e),o=this._svgIconConfigs.get(a);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(t,e),o)return this._svgIconConfigs.set(a,o),this._getSvgFromConfig(o);let r=this._iconSetConfigs.get(t);return r?this._getSvgFromIconSetConfigs(e,r):ea(up(a))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?Se(jr(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(ye(t=>jr(t)))}_getSvgFromIconSetConfigs(e,t){let a=this._extractIconWithNameFromAnySet(e,t);if(a)return Se(a);let o=t.filter(r=>!r.svgText).map(r=>this._loadSvgIconSetFromConfig(r).pipe(Ya(s=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(mn.RESOURCE_URL,r.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(d)),Se(null)})));return ei(o).pipe(ye(()=>{let r=this._extractIconWithNameFromAnySet(e,t);if(!r)throw up(e);return r}))}_extractIconWithNameFromAnySet(e,t){for(let a=t.length-1;a>=0;a--){let o=t[a];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let r=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(r,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(ii(t=>e.svgText=t),ye(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?Se(null):this._fetchIcon(e).pipe(ii(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,a){let o=e.querySelector(`[id="${t}"]`);if(!o)return null;let r=o.cloneNode(!0);if(r.removeAttribute("id"),r.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(r,a);if(r.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(r),a);let s=this._svgElementFromString(Vn("<svg></svg>"));return s.appendChild(r),this._setSvgAttributes(s,a)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let a=t.querySelector("svg");if(!a)throw Error("<svg> tag not found");return a}_toSvgElement(e){let t=this._svgElementFromString(Vn("<svg></svg>")),a=e.attributes;for(let o=0;o<a.length;o++){let{name:r,value:s}=a[o],l=r.toLowerCase();l!=="id"&&!l.startsWith("on")&&t.setAttribute(r,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[o].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:a}=e,o=a?.withCredentials??!1;if(!this._httpClient)throw fb();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let r=this._sanitizer.sanitize(mn.RESOURCE_URL,t);if(!r)throw pp(t);let s=this._inProgressUrlFetches.get(r);if(s)return s;let l=this._httpClient.get(r,{responseType:"text",withCredentials:o}).pipe(ye(d=>Vn(d)),Xl(()=>this._inProgressUrlFetches.delete(r)),Zl());return this._inProgressUrlFetches.set(r,l),l}_addSvgIconConfig(e,t,a){return this._svgIconConfigs.set(fp(e,t),a),this}_addSvgIconSetConfig(e,t){let a=this._iconSetConfigs.get(e);return a?a.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let a=0;a<this._resolvers.length;a++){let o=this._resolvers[a](t,e);if(o)return gb(o)?new ln(o.url,null,o.options):new ln(o,null)}}static \u0275fac=function(t){return new(t||i)(Jt(Rn,8),Jt(oo),Jt(ce,8),Jt(Qa))};static \u0275prov=Le({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function jr(i){return i.cloneNode(!0)}function fp(i,n){return i+":"+n}function gb(i){return!!(i.url&&i.options)}function bb(i){let n=null,e=!1;return i.fonts&&typeof i.fonts.forEach=="function"&&i.fonts.forEach(t=>{let a=t.family.replace(/['"]/g,"").trim().toLowerCase();(a==="material icons"||a.startsWith("material icons "))&&(e=!0),a.startsWith("material symbols rounded")?n="rounded":a.startsWith("material symbols sharp")?n="sharp":a.startsWith("material symbols")&&(n="outlined")}),[n&&!e?`material-symbols-${n}`:"material-icons","mat-ligature-font"]}var _b=new w("MAT_ICON_DEFAULT_OPTIONS"),vb=new w("mat-icon-location",{providedIn:"root",factory:()=>{let i=c(ce),n=i?i.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),bp=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],yb=bp.map(i=>`[${i}]`).join(", "),xb=/^url\(['"]?#(.*?)['"]?\)$/,Gr=(()=>{class i{_elementRef=c(D);_iconRegistry=c(gp);_location=c(vb);_errorHandler=c(Qa);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=Ee.EMPTY;constructor(){let e=c(new en("aria-hidden"),{optional:!0}),t=c(_b,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let a=e.childNodes[t];(a.nodeType!==1||a.nodeName.toLowerCase()==="svg")&&a.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(a=>a.length>0);this._previousFontSetClass.forEach(a=>e.classList.remove(a)),t.forEach(a=>e.classList.add(a)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences,a=e.startsWith("//")?`/.${e}`:e;t&&t.forEach((o,r)=>{o.forEach(s=>{r.setAttribute(s.name,`url('${a}#${s.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(yb),a=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<t.length;o++)bp.forEach(r=>{let s=t[o],l=s.getAttribute(r),d=l?l.match(xb):null;if(d){let m=a.get(s);m||(m=[],a.set(s,m)),m.push({name:r,value:d[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,a]=this._splitIconName(e);t&&(this._svgNamespace=t),a&&(this._svgName=a),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(a,t).pipe(ti(1)).subscribe(o=>this._setSvgElement(o),o=>{let r=`Error retrieving icon ${t}:${a}! ${o.message}`;this._errorHandler.handleError(new Error(r))})}}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){return M({type:i,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(a,o){a&2&&(V("data-mat-icon-type",o._usingFontIcon()?"font":"svg")("data-mat-icon-name",o._svgName||o.fontIcon)("data-mat-icon-namespace",o._svgNamespace||o.fontSet)("fontIcon",o._usingFontIcon()?o.fontIcon:null),Ve(o.color?"mat-"+o.color:""),P("mat-icon-inline",o.inline)("mat-icon-no-color",o.color!=="primary"&&o.color!=="accent"&&o.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",S],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:["*"],decls:1,vars:0,template:function(a,o){a&1&&(ve(),q(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--%NS%mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2})})()}return i})(),Ur=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=G({imports:[re]})}return i})();function wb(i,n){if(i&1&&(f(0,"mat-option",9),F(1),k(2,"typeToName"),k(3,"translate"),g()),i&2){let e=n.$implicit;C("value",e),h(),he(" ",H(3,4,"types."+H(2,2,e))," ")}}function Cb(i,n){if(i&1){let e=Ot();f(0,"mat-chip",14),X("removed",function(){ut(e);let a=L(2);return pt(a.removeName())}),F(1),f(2,"button",15),k(3,"translate"),f(4,"mat-icon"),F(5,"close"),g()()()}if(i&2){let e=L(2);h(),he(" ",e.filtersService.name()," "),h(),V("aria-label",H(3,2,"filter.removeName"))}}function Sb(i,n){if(i&1){let e=Ot();f(0,"mat-chip",14),X("removed",function(){let a=ut(e).$implicit,o=L(2);return pt(o.removeType(a))}),F(1),k(2,"typeToName"),k(3,"translate"),f(4,"button",15),k(5,"translate"),k(6,"typeToName"),k(7,"translate"),f(8,"mat-icon"),F(9,"close"),g()()()}if(i&2){let e=n.$implicit;h(),he(" ",H(3,4,"types."+H(2,2,e))," "),h(3),V("aria-label",H(5,6,"filter.removeType")+" "+H(7,10,"types."+H(6,8,e)))}}function kb(i,n){if(i&1){let e=Ot();f(0,"div",10)(1,"span",11),F(2),k(3,"translate"),g(),f(4,"mat-chip-set",12),k(5,"translate"),B(6,Cb,6,4,"mat-chip"),lt(7,Sb,10,12,"mat-chip",null,hn),g(),f(9,"button",13),X("click",function(){ut(e);let a=L();return pt(a.resetFilters())}),F(10),k(11,"translate"),g()()}if(i&2){let e=L();h(2),Ae(H(3,4,"filter.selected")),h(2),V("aria-label",H(5,6,"filter.activeFilters")),h(2),z(e.filtersService.name().length>=3?6:-1),h(),ct(e.filtersService.types()),h(3),he(" ",H(11,8,"filter.reset")," ")}}var vp=(()=>{class i{constructor(){this.filtersService=c(Hr),this.nameChanged=new R,this.nameInput=this.filtersService.name(),this.availableTypes=Yi.availableTypes,this.destroyRef=c(St),this.triggerSearch=dc(),kt(()=>{this.triggerSearch.emit()})}ngOnInit(){this.nameChanged.pipe(Wt(400),na(),nn(this.destroyRef)).subscribe(e=>{this.filtersService.name()!==e&&(this.filtersService.name.set(e),this.triggerSearch.emit())})}onNameChange(e){this.nameInput=e,this.nameChanged.next(e)}onTypesChange(e){this.filtersService.types.set(e),this.triggerSearch.emit()}removeType(e){this.onTypesChange(this.filtersService.types().filter(t=>t!==e))}removeName(){this.nameInput="",this.nameChanged.next(""),this.filtersService.name.set(""),this.triggerSearch.emit()}resetFilters(){this.nameInput="",this.nameChanged.next(""),this.filtersService.name.set(""),this.filtersService.types.set([]),this.triggerSearch.emit()}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=M({type:i,selectors:[["app-filters"]],outputs:{triggerSearch:"triggerSearch"},decls:25,vars:18,consts:[["aria-labelledby","filter-title",1,"filter-panel"],[1,"filter-heading"],["id","filter-title"],[1,"filters"],["appearance","outline",1,"search-field"],["matPrefix","","aria-hidden","true"],["matInput","","type","search","autocomplete","off",3,"ngModelChange","placeholder","ngModel"],["appearance","outline",1,"type-field"],["multiple","",3,"ngModelChange","ngModel"],[3,"value"],[1,"active-filters"],[1,"selected-label"],[1,"filter-chips"],["type","button",1,"reset-filters",3,"click"],[3,"removed"],["matChipRemove",""]],template:function(t,a){t&1&&(f(0,"section",0)(1,"header",1)(2,"h1",2),F(3),k(4,"translate"),g(),f(5,"p"),F(6),k(7,"translate"),g()(),f(8,"div",3)(9,"mat-form-field",4)(10,"mat-icon",5),F(11,"search"),g(),f(12,"input",6),k(13,"translate"),k(14,"translate"),un(),In("ngModelChange",function(r){return Dn(a.nameInput,r)||(a.nameInput=r),r}),X("ngModelChange",function(r){return a.onNameChange(r)}),g()(),f(15,"mat-form-field",7)(16,"mat-icon",5),F(17,"tune"),g(),f(18,"mat-label"),F(19),k(20,"translate"),g(),f(21,"mat-select",8),un(),X("ngModelChange",function(r){return a.onTypesChange(r)}),lt(22,wb,4,6,"mat-option",9,hn),g()()(),B(24,kb,12,10,"div",10),g()),t&2&&(h(3),Ae(H(4,8,"filter.title")),h(3),Ae(H(7,10,"filter.description")),h(6),C("placeholder",H(13,12,"filter.searchPlaceholder")),En("ngModel",a.nameInput),V("aria-label",H(14,14,"filter.searchPlaceholder")),pn(),h(7),Ae(H(20,16,"filter.types")),h(2),C("ngModel",a.filtersService.types()),pn(),h(),ct(a.availableTypes),h(2),z(a.filtersService.name()||a.filtersService.types().length?24:-1))},dependencies:[$t,Ri,rr,Ti,$n,sn,Fi,Kn,_l,Vr,Lr,Cn,Sn,mp,dp,Ur,Gr,Pi,Yn,du,fr,ft,Qi],styles:[".filter-panel[_ngcontent-%COMP%]{margin-bottom:28px}.filter-heading[_ngcontent-%COMP%]{margin-bottom:18px}.filter-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0 0 6px;font-size:clamp(1.25rem,2vw,1.5rem);font-weight:650;letter-spacing:-.025em}.filter-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:var(--%NS%mat-sys-on-surface-variant);font-size:.95rem}.filters[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,2fr) minmax(220px,1fr);gap:10px}mat-form-field[_ngcontent-%COMP%]{width:100%}.search-field[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .type-field[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-on-surface-variant)}.active-filters[_ngcontent-%COMP%]{display:flex;min-height:42px;flex-wrap:wrap;align-items:center;gap:8px 12px;margin-top:2px}.selected-label[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-on-surface-variant);font-size:.72rem;font-weight:600;letter-spacing:.06em;text-transform:uppercase}.filter-chips[_ngcontent-%COMP%]{flex:1 1 auto;min-width:0}.reset-filters[_ngcontent-%COMP%]{padding:8px 0;border:0;background:transparent;color:var(--%NS%mat-sys-on-surface-variant);cursor:pointer;font:inherit;font-size:.875rem;text-decoration:underline;text-underline-offset:3px}.reset-filters[_ngcontent-%COMP%]:hover{color:var(--%NS%mat-sys-on-surface)}@media(max-width:600px){.filters[_ngcontent-%COMP%]{grid-template-columns:minmax(0,1fr);gap:0}.filter-panel[_ngcontent-%COMP%]{margin-bottom:22px}.active-filters[_ngcontent-%COMP%]{align-items:flex-start}.selected-label[_ngcontent-%COMP%]{flex-basis:100%}.reset-filters[_ngcontent-%COMP%]{margin-left:auto}}"]})}}return i})();var Mb=new w("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var xp=(()=>{class i{_elementRef=c(D);_ngZone=c(W);_changeDetectorRef=c(xe);_renderer=c(we);_cleanupTransitionEnd;constructor(){let e=wa(),t=c(Mb,{optional:!0});this._isNoopAnimation=e==="di-disabled",e==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),t&&(t.color&&(this.color=this._defaultColor=t.color),this.mode=t.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";get value(){return this._value}set value(e){this._value=yp(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=yp(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new Q;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){function e(t,a){t&1&&dt(0,"div",2)}return M({type:i,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(a,o){a&2&&(V("aria-valuenow",o._isIndeterminate()?null:o.value)("mode",o.mode),Ve("mat-"+o.color),P("_mat-animation-noopable",o._isNoopAnimation)("mdc-linear-progress--animation-ready",!o._isNoopAnimation)("mdc-linear-progress--indeterminate",o._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",je],bufferValue:[2,"bufferValue","bufferValue",je],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(a,o){a&1&&(We(0,"div",0),dt(1,"div",1),B(2,e,1,0,"div",2),Ze(),We(3,"div",3),dt(4,"span",4),Ze(),We(5,"div",5),dt(6,"span",4),Ze()),a&2&&(h(),$e("flex-basis",o._getBufferBarFlexBasis()),h(),z(o.mode==="buffer"?2:-1),h(),$e("transform",o._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --%NS%mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --%NS%mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--%NS%mat-progress-bar-track-height, 4px), var(--%NS%mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--%NS%mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--%NS%mat-progress-bar-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--%NS%mat-progress-bar-track-height, 4px);
  border-radius: var(--%NS%mat-progress-bar-track-shape, var(--%NS%mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--%NS%mat-progress-bar-track-color, var(--%NS%mat-sys-surface-variant)) calc(var(--%NS%mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--%NS%mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--%NS%mat-progress-bar-track-color, var(--%NS%mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--%NS%mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2})})()}return i})();function yp(i,n=0,e=100){return Math.max(n,Math.min(e,i))}var wp=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=G({imports:[re]})}return i})();var Eb=["loadMoreAnchor"],Db=i=>["/pokemon/",i],Ib=(i,n)=>n.id;function Tb(i,n){i&1&&(f(0,"div",3),O(1,"mat-spinner"),g())}function Rb(i,n){if(i&1&&(f(0,"a",5),k(1,"pokemonSpeciesName"),f(2,"mat-card",9)(3,"mat-card-header")(4,"mat-card-subtitle"),F(5),k(6,"pokemonSpeciesName"),g()(),f(7,"mat-card-content")(8,"div",10),O(9,"img",11),k(10,"pokemonImage"),k(11,"pokemonSpeciesName"),g()()()()),i&2){let e=n.$implicit,t=L();C("routerLink",eo(17,Db,e.identifier)),V("aria-label",ke(1,5,e.species_names,t.languageService.langId())+" details"),h(5),he(" ",ke(6,8,e.species_names,t.languageService.langId())," "),h(4),C("ngSrc",ke(10,11,e.id,t.pokemonSpriteTypePath.FRONT))("alt",ke(11,14,e.species_names,t.languageService.langId()))}}function Ab(i,n){i&1&&(f(0,"p",7),F(1),k(2,"translate"),g()),i&2&&(h(),he(" ",H(2,1,"table.noResult")," "))}function Ob(i,n){i&1&&O(0,"mat-progress-bar",8)}var Sp=(()=>{class i{constructor(){this.isLoading=oe(!1),this.data=oe([]),this.pokemonCount=oe(0),this.pageSize=oe(50),this.page=oe(1),this.isFirstPage=Ke(()=>this.page()===1),this.pokemonSpriteTypePath=lo,this.languageService=c(Yt),this.destroyRef=c(St),this.pokeApiService=c(Ro),this.translate=c(pi),this.filtersService=c(Hr),this.hasMore=Ke(()=>this.data().length<this.pokemonCount()),this.loadMoreAnchor=Tn("loadMoreAnchor")}ngOnInit(){this.translate.onLangChange.pipe(nn(this.destroyRef)).subscribe(()=>{this.resetAndLoad()}),this.resetAndLoad()}ngAfterViewInit(){this.observer=new IntersectionObserver(([t])=>{t.isIntersecting&&this.hasMore()&&!this.isLoading()&&this.onScroll()},{root:null,rootMargin:"200px",threshold:0});let e=this.loadMoreAnchor();e&&this.observer.observe(e.nativeElement)}onScroll(){this.isLoading()||!this.hasMore()||(this.page.update(e=>e+1),this.loadPokemons())}changePage(e){this.pageSize.set(e.pageSize),this.page.set(e.pageIndex+1),this.resetAndLoad()}onFilterSearch(){this.resetAndLoad()}resetAndLoad(){this.page.set(1),this.data.set([]),this.loadPokemons(!0)}loadPokemons(e=!1){this.isLoading()||(this.isLoading.set(!0),this.pokeApiService.getPokemons(this.filtersService.getHttpParams(this.page(),this.pageSize())).pipe(nn(this.destroyRef)).subscribe(t=>{this.isLoading.set(!1),this.data.update(a=>e?t.data:[...a,...t.data]),this.pokemonCount.set(t.total)}))}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=M({type:i,selectors:[["app-overview"]],viewQuery:function(t,a){t&1&&Ja(a.loadMoreAnchor,Eb,5),t&2&&ia()},decls:10,vars:3,consts:[["loadMoreAnchor",""],[1,"page-content"],[3,"triggerSearch"],["role","status","aria-label","Loading Pok\xE9mon",1,"loading-state"],["aria-label","Pok\xE9mon",1,"pokemon-grid"],[1,"pokemon-link",3,"routerLink"],["aria-hidden","true",1,"load-more-anchor"],["role","status",1,"empty-state","muted-text"],["mode","query",1,"loading-progress"],["appearance","outlined",1,"pokemon-card"],[1,"image-container"],["width","96","height","96",3,"ngSrc","alt"]],template:function(t,a){t&1&&(f(0,"main",1)(1,"app-filters",2),X("triggerSearch",function(){return a.onFilterSearch()}),g(),B(2,Tb,2,0,"div",3),f(3,"section",4),lt(4,Rb,12,19,"a",5,Ib),O(6,"div",6,0),g(),B(8,Ab,3,3,"p",7),B(9,Ob,1,0,"mat-progress-bar",8),g()),t&2&&(h(2),z(a.isLoading()&&a.isFirstPage()?2:-1),h(2),ct(a.data()),h(4),z(!a.isLoading()&&a.data().length===0?8:-1),h(),z(a.isLoading()&&!a.isFirstPage()?9:-1))},dependencies:[$t,ci,ro,vp,zr,Br,ui,di,mi,so,Mc,wp,xp,ao,hi,co,ft],styles:[".pokemon-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:16px}.pokemon-card[_ngcontent-%COMP%]{min-height:176px}.pokemon-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{justify-content:center;text-align:center}.image-container[_ngcontent-%COMP%]{display:grid;width:96px;height:96px;margin-inline:auto;place-items:center}.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;height:auto}.load-more-anchor[_ngcontent-%COMP%]{grid-column:1/-1;height:1px}.loading-state[_ngcontent-%COMP%], .empty-state[_ngcontent-%COMP%]{display:grid;min-height:160px;place-items:center}.empty-state[_ngcontent-%COMP%]{text-align:center}.loading-progress[_ngcontent-%COMP%]{margin-top:20px;border-radius:4px}@media(max-width:600px){.pokemon-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}}"]})}}return i})();var kp=[{path:"",component:Sp},{path:"pokemon/:name",component:rp,resolve:{pokemonData:Dd}}];var Fb=/^\.{1,2}$/,Np=new w("TRANSLATE_HTTP_LOADER_CONFIG"),Pb=class Wr{http;config;constructor(){this.config=Y({resources:[],enforceLoading:!1,useHttpBackend:!1},c(Np)),this.http=this.config.useHttpBackend?new Rn(c(_c)):c(Rn)}getTranslation(e){let t=this.config.enforceLoading?`?enforceLoading=${Date.now()}`:"",a=this.config.resources.map(o=>{let r;return Ka(()=>{let s=encodeURIComponent(e);return r=`${typeof o=="string"?`${o}${s}.json`:`${o.prefix}${s}${o.suffix??".json"}`}${t}`,Fb.test(e)?ea(()=>new Error(`"${e}" is a path segment, not a language`)):this.http.get(r)}).pipe(Ya(s=>(this.reportError({lang:e,resource:o,url:r,error:s}),this.config.failOnError?ea(()=>s):Se({}))))});return a.length===0?Se({}):ei(a).pipe(ye(o=>o.reduce((r,s)=>this.config.flatten?Y(Y({},r),Ep(s??{})):Ec(r,s),{})))}reportError(e){if(this.config.onLoadError)try{this.config.onLoadError(e)}catch(t){console.warn("@ngx-translate/http-loader: onLoadError callback failed:",t)}else this.config.failOnError||console.warn(`@ngx-translate/http-loader: error loading translation for ${e.lang}:`,e.error)}static \u0275fac=function(t){return new(t||Wr)};static \u0275prov=Le({token:Wr,factory:Wr.\u0275fac})};function Ep(i){return Object.fromEntries(Object.entries(i).flatMap(([n,e])=>e!==null&&typeof e=="object"&&!Array.isArray(e)&&Object.keys(e).length?Object.entries(Ep(e)).map(([t,a])=>[`${n}.${t}`,a]):[[n,e]]))}function Dp(i={}){if("resources"in i&&i.resources)return Mp(i);let n=i;return Mp({enforceLoading:n.enforceLoading??!1,useHttpBackend:n.useHttpBackend??!1,failOnError:n.failOnError??!1,flatten:n.flatten??!1,onLoadError:n.onLoadError,resources:[{prefix:n.prefix??"/assets/i18n/",suffix:n.suffix??".json"}]})}function Mp(i={}){return[{provide:Np,useValue:Y({resources:["/assets/i18n/"]},i)},{provide:Nc,useClass:Pb}]}var Ip={providers:[Cc(kp,Sc()),Nd(),vc(),Dc({loader:Dp({prefix:"./assets/i18n/",suffix:".json"}),fallbackLang:"en",lang:"en"})]};var Lb=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=x({type:i,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return i})(),Tp=(()=>{class i{_elementRef=c(D);_platform=c(de);_document=c(ce);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=["*",[["mat-toolbar-row"]]];return M({type:i,selectors:[["mat-toolbar"]],contentQueries:function(o,r,s){if(o&1&&qe(s,Lb,5),o&2){let l;N(l=E())&&(r._toolbarRows=l)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(o,r){o&2&&(Ve(r.color?"mat-"+r.color:""),P("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:["*","mat-toolbar-row"],decls:2,vars:0,template:function(o,r){o&1&&(ve(e),q(0),q(1,1))},styles:[`.mat-toolbar {
  background: var(--%NS%mat-toolbar-container-background-color, var(--%NS%mat-sys-surface));
  color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--%NS%mat-toolbar-title-text-font, var(--%NS%mat-sys-title-large-font));
  font-size: var(--%NS%mat-toolbar-title-text-size, var(--%NS%mat-sys-title-large-size));
  line-height: var(--%NS%mat-toolbar-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-weight: var(--%NS%mat-toolbar-title-text-weight, var(--%NS%mat-sys-title-large-weight));
  letter-spacing: var(--%NS%mat-toolbar-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --%NS%mat-button-text-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
  --%NS%mat-button-outlined-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2})})()}return i})();var Rp=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=G({imports:[re]})}return i})();var Bb=20;var zb=new w("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let i=c(pe);return()=>Zn(i,{scrollThrottle:Bb})}}),Hb=new w("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var Ap="tooltip-panel",jb={passive:!0},Gb=8,Ub=8,Wb=24,qb=200,jl=(()=>{class i{_elementRef=c(D);_ngZone=c(W);_platform=c(de);_ariaDescriber=c(nm);_focusMonitor=c(Bt);_dir=c(Be);_injector=c(pe);_viewContainerRef=c(it);_mediaMatcher=c(Ci);_document=c(ce);_renderer=c(we);_animationsDisabled=Me();_defaultOptions=c(Hb,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=Op;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=Dt(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=Dt(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=vn(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=vn(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new R;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=Gb}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(te(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let a=this._createOverlay(t);this._detach(),this._portal=this._portal||new pa(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=a.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(te(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let r=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&r._origin instanceof D)return this._overlayRef;this._detach()}let t=this._injector.get(Gn).getAncestorScrollContainers(this._elementRef),a=`${this._cssClassPrefix}-${Ap}`,o=Ha(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation("global");return o.positionChanges.pipe(te(this._destroyed)).subscribe(r=>{this._updateCurrentPositionClass(r.connectionPair),this._tooltipInstance&&r.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=Ga(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,a]:a,scrollStrategy:this._injector.get(zb)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(te(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(te(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(te(this._destroyed)).subscribe(r=>{r.preventDefault(),r.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(te(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,a=this._getOrigin(),o=this._getOverlayPosition();t.withPositions([this._addOffset(Y(Y({},a.main),o.main)),this._addOffset(Y(Y({},a.fallback),o.fallback))])}_addOffset(e){let t=Ub,a=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-t:e.originY==="bottom"?e.offsetY=t:e.originX==="start"?e.offsetX=a?-t:t:e.originX==="end"&&(e.offsetX=a?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",t=this.position,a;t=="above"||t=="below"?a={originX:"center",originY:t=="above"?"top":"bottom"}:t=="before"||t=="left"&&e||t=="right"&&!e?a={originX:"start",originY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(a={originX:"end",originY:"center"});let{x:o,y:r}=this._invertPosition(a.originX,a.originY);return{main:a,fallback:{originX:o,originY:r}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",t=this.position,a;t=="above"?a={overlayX:"center",overlayY:"bottom"}:t=="below"?a={overlayX:"center",overlayY:"top"}:t=="before"||t=="left"&&e||t=="right"&&!e?a={overlayX:"end",overlayY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(a={overlayX:"start",overlayY:"center"});let{x:o,y:r}=this._invertPosition(a.overlayX,a.overlayY);return{main:a,fallback:{overlayX:o,overlayY:r}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),He(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position==="above"||this.position==="below"?t==="top"?t="bottom":t==="bottom"&&(t="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:a,originY:o}=e,r;if(t==="center"?this._dir&&this._dir.value==="rtl"?r=a==="end"?"left":"right":r=a==="start"?"left":"right":r=t==="bottom"&&o==="top"?"above":"below",r!==this._currentPosition){let s=this._overlayRef;if(s){let l=`${this._cssClassPrefix}-${Ap}-`;s.removePanelClass(l+this._currentPosition),s.addPanelClass(l+r)}this._currentPosition=r}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let t=e.targetTouches?.[0],a=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,a)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),a=this._elementRef.nativeElement;t!==a&&!a.contains(t)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,jb))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let t=this._elementRef.nativeElement,a=t.style;(e==="on"||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA")&&(a.userSelect=a.msUserSelect=a.webkitUserSelect=a.MozUserSelect="none"),(e==="on"||!t.draggable)&&(a.webkitUserDrag="none"),a.touchAction="none",a.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||He({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!at(e):!0;static \u0275fac=function(t){return new(t||i)};static \u0275dir=x({type:i,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(t,a){t&2&&P("mat-mdc-tooltip-disabled",a.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return i})(),Op=(()=>{class i{_changeDetectorRef=c(xe);_elementRef=c(D);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=Me();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new R;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>Wb&&e.width>=qb}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,a=this._showAnimation,o=this._hideAnimation;if(t.classList.remove(e?o:a),t.classList.add(e?a:o),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let r=getComputedStyle(t);(r.getPropertyValue("animation-duration")==="0s"||r.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=["tooltip"];return M({type:i,selectors:[["mat-tooltip-component"]],viewQuery:function(a,o){if(a&1&&Ie(e,7),a&2){let r;N(r=E())&&(o._tooltip=r.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(a,o){a&1&&X("mouseleave",function(s){return o._handleMouseLeave(s)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(a,o){a&1&&(We(0,"div",1,0),sc("animationend",function(s){return o._handleAnimationEnd(s)}),We(2,"div",2),F(3),Ze()()),a&2&&(Ve(o.tooltipClass),P("mdc-tooltip--multiline",o._isMultiline),h(3),Ae(o.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--%NS%mat-tooltip-container-color, var(--%NS%mat-sys-inverse-surface));
  color: var(--%NS%mat-tooltip-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-tooltip-container-shape, var(--%NS%mat-sys-corner-extra-small));
  font-family: var(--%NS%mat-tooltip-supporting-text-font, var(--%NS%mat-sys-body-small-font));
  font-size: var(--%NS%mat-tooltip-supporting-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-tooltip-supporting-text-weight, var(--%NS%mat-sys-body-small-weight));
  line-height: var(--%NS%mat-tooltip-supporting-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  letter-spacing: var(--%NS%mat-tooltip-supporting-text-tracking, var(--%NS%mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2})})()}return i})();var Fp=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=G({imports:[Gs,Ua,re,jn]})}return i})();var Kb=new w("MAT_BUTTON_CONFIG");function Pp(i){return i==null?void 0:je(i)}var Gl=(()=>{class i{_elementRef=c(D);_ngZone=c(W);_animationsDisabled=Me();_config=c(Kb,{optional:!0});_focusMonitor=c(Bt);_cleanupClick;_renderer=c(we);_rippleLoader=c(mr);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}showProgress=tn(!1,{transform:S});constructor(){c(Oe).load(Vt);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=x({type:i,hostAttrs:[1,"mat-mdc-button-base"],hostVars:15,hostBindings:function(t,a){t&2&&(V("disabled",a._getDisabledAttribute())("aria-disabled",a._getAriaDisabled())("tabindex",a._getTabIndex()),Ve(a.color?"mat-"+a.color:""),P("mat-mdc-button-progress-indicator-shown",a.showProgress())("mat-mdc-button-disabled",a.disabled)("mat-mdc-button-disabled-interactive",a.disabledInteractive)("mat-unthemed",!a.color)("_mat-animation-noopable",a._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",S],disabled:[2,"disabled","disabled",S],ariaDisabled:[2,"aria-disabled","ariaDisabled",S],disabledInteractive:[2,"disabledInteractive","disabledInteractive",S],tabIndex:[2,"tabIndex","tabIndex",Pp],_tabindex:[2,"tabindex","_tabindex",Pp],showProgress:[1,"showProgress"]}})}return i})(),Ul=(()=>{class i extends Gl{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=["*",[["","progressIndicator",""]]],t=["*","[progressIndicator]"];function a(o,r){o&1&&(We(0,"div",1),q(1,1),Ze())}return M({type:i,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[Z],ngContentSelectors:t,decls:5,vars:1,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(r,s){r&1&&(ve(e),dt(0,"span",0),q(1),B(2,a,2,0,"div",1),dt(3,"span",2)(4,"span",3)),r&2&&(h(2),z(s.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--%NS%mat-icon-button-state-layer-size, 40px);
  height: var(--%NS%mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--%NS%mat-icon-button-state-layer-size, 40px) - var(--%NS%mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--%NS%mat-icon-button-icon-size, 24px);
  color: var(--%NS%mat-icon-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--%NS%mat-icon-button-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface-variant) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-icon-button-touch-target-size, 48px);
  display: var(--%NS%mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--%NS%mat-icon-button-icon-size, 24px);
  height: var(--%NS%mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})})()}return i})();var Lp=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Vp=(()=>{class i extends Gl{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=Yb(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,a=this._appearance?Lp.get(this._appearance):null,o=Lp.get(e);a&&t.remove(...a),t.add(...o),this._appearance=e}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""],["",8,"material-symbols-outlined",3,"iconPositionEnd",""],["",8,"material-symbols-rounded",3,"iconPositionEnd",""],["",8,"material-symbols-sharp",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""],["","iconPositionEnd","",8,"material-symbols-outlined"],["","iconPositionEnd","",8,"material-symbols-rounded"],["","iconPositionEnd","",8,"material-symbols-sharp"]],[["","progressIndicator",""]]],t=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd]), .material-symbols-outlined:not([iconPositionEnd]), .material-symbols-rounded:not([iconPositionEnd]), .material-symbols-sharp:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd], .material-symbols-outlined[iconPositionEnd], .material-symbols-rounded[iconPositionEnd], .material-symbols-sharp[iconPositionEnd]","[progressIndicator]"];function a(o,r){o&1&&(We(0,"div",2),q(1,3),Ze())}return M({type:i,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Z],ngContentSelectors:t,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(r,s){r&1&&(ve(e),dt(0,"span",0),q(1),We(2,"span",1),q(3,1),Ze(),q(4,2),B(5,a,2,0,"div",2),dt(6,"span",3)(7,"span",4)),r&2&&(P("mdc-button__ripple",!s._isFab)("mdc-fab__ripple",s._isFab),h(5),z(s.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded,
.material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})})()}return i})();function Yb(i){return i.hasAttribute("mat-raised-button")?"elevated":i.hasAttribute("mat-stroked-button")?"outlined":i.hasAttribute("mat-flat-button")?"filled":i.hasAttribute("mat-button")?"text":null}var Bp=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=G({imports:[wn,re]})}return i})();var Xb=()=>[""],Zb=(i,n)=>n.url,Jb=(i,n)=>n.key;function e_(i,n){if(i&1){let e=Ot();f(0,"span",3)(1,"a",9),F(2),k(3,"pokemonSpeciesName"),k(4,"titlecase"),g(),f(5,"button",10),k(6,"pokemonSpeciesName"),X("click",function(){let a=ut(e).$implicit,o=L();return pt(o.sidenavService.removeNode(a.name))}),f(7,"mat-icon"),F(8,"close"),g()()()}if(i&2){let e=n.$implicit,t=L();h(),C("routerLink",e.url),h(),he(" ",H(4,6,ke(3,3,e.name,t.languageService.langId()))," "),h(3),V("aria-label","Remove "+ke(6,8,e.name,t.languageService.langId()))}}function t_(i,n){if(i&1&&(f(0,"mat-button-toggle",8),F(1),k(2,"translate"),g()),i&2){let e=n.$implicit;C("value",e.key),h(),he(" ",H(2,2,"langs."+e.key)," ")}}var zp=(()=>{class i{constructor(){this.sidenavService=c(To),this.languageService=c(Yt),this.translate=c(pi),this.actualLanguage=this.languageService.getLanguage(),this.setLanguage()}onChangeLanguage(){this.languageService.saveLanguage(this.actualLanguage),this.setLanguage()}setLanguage(){this.translate.use(this.actualLanguage)}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=M({type:i,selectors:[["app-navbar"]],decls:14,vars:6,consts:[[1,"app-toolbar"],["matButton","text","aria-label","Pokedex home",1,"brand-link",3,"routerLink"],["aria-label","Recently viewed Pok\xE9mon",1,"saved-pokemon"],[1,"saved-pokemon-item"],[1,"toolbar-spacer"],["matIconButton","","target","_blank","rel","noopener noreferrer","href","https://github.com/Kerrders/Pokedex","matTooltip","Repository","aria-label","Pokedex source repository"],["src","./assets/images/github-mark.svg","alt",""],["appearance","standard","aria-label","Language",1,"language-select-button-group",3,"ngModelChange","hideSingleSelectionIndicator","ngModel"],[3,"value"],["matButton","text",3,"routerLink"],["matIconButton","","type","button",3,"click"]],template:function(t,a){t&1&&(f(0,"mat-toolbar",0)(1,"a",1)(2,"span"),F(3,"Pokedex"),g()(),f(4,"nav",2),lt(5,e_,9,11,"span",3,Zb),g(),O(7,"span",4),f(8,"a",5),O(9,"img",6),g(),f(10,"mat-button-toggle-group",7),un(),In("ngModelChange",function(r){return Dn(a.actualLanguage,r)||(a.actualLanguage=r),r}),X("ngModelChange",function(){return a.onChangeLanguage()}),lt(11,t_,3,4,"mat-button-toggle",8,Jb),k(13,"keyvalue"),g()()),t&2&&(h(),C("routerLink",gn(5,Xb)),h(4),ct(a.sidenavService.nodes()),h(5),C("hideSingleSelectionIndicator",!0),En("ngModel",a.actualLanguage),pn(),h(),ct(H(13,3,a.languageService.getAvailableLanguages())))},dependencies:[$t,ci,ro,Ri,Ti,$n,Rp,Tp,Fp,jl,Ur,Gr,Bp,Vp,Ul,Nr,Va,Xi,io,pc,ft,hi],styles:[".app-toolbar[_ngcontent-%COMP%]{position:relative;z-index:1;min-height:72px;height:auto;gap:8px;border-bottom:1px solid var(--%NS%mat-sys-outline-variant);background:var(--%NS%mat-sys-surface-container)}.brand-link[_ngcontent-%COMP%]{flex:0 0 auto;font-size:1.25rem;font-weight:700}.saved-pokemon[_ngcontent-%COMP%]{display:flex;min-width:0;align-items:center;gap:4px;overflow-x:auto;scrollbar-width:none}.saved-pokemon[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.saved-pokemon-item[_ngcontent-%COMP%]{display:inline-flex;flex:0 0 auto;align-items:center;overflow:hidden;border:1px solid var(--%NS%mat-sys-outline-variant);border-radius:999px;background:var(--%NS%mat-sys-surface-container-high);transition:border-color .18s ease,background-color .18s ease}.saved-pokemon-item[_ngcontent-%COMP%]:hover{border-color:var(--%NS%mat-sys-primary);background:var(--%NS%mat-sys-surface-container-highest)}.saved-pokemon-item[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{min-height:40px;padding-inline:12px 4px}.saved-pokemon-item[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{flex:0 0 40px;width:40px;height:40px}.toolbar-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.app-toolbar[_ngcontent-%COMP%] > a[matIconButton][_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;width:24px;height:24px}@media(max-width:700px){.app-toolbar[_ngcontent-%COMP%]{flex-wrap:wrap;padding-block:8px;padding-inline:12px}.brand-link[_ngcontent-%COMP%]{order:0}.toolbar-spacer[_ngcontent-%COMP%]{order:1}.app-toolbar[_ngcontent-%COMP%] > a[matIconButton][_ngcontent-%COMP%], .language-select-button-group[_ngcontent-%COMP%]{order:2}.saved-pokemon[_ngcontent-%COMP%]{order:3;flex-basis:100%}}"]})}}return i})();var Hp=(()=>{class i{static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=M({type:i,selectors:[["app-root"]],decls:2,vars:0,template:function(t,a){t&1&&O(0,"app-navbar")(1,"router-outlet")},dependencies:[ci,xc,zp],encapsulation:2})}}return i})();gc(Hp,Ip).catch(i=>console.error(i));
