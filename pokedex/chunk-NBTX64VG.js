import{$c as R,Ha as r,Mb as x,Na as g,Ob as h,Pa as f,Qa as v,Qb as T,Ra as a,Sa as p,T as d,Ta as C,Uc as F,Wc as I,Xc as L,Yc as O,Zc as B,_a as y,_c as N,ad as D,bc as b,ec as E,ib as k,kb as S,na as s,oa as i,pb as _,qb as M,rb as m,tb as c,ub as P,vb as l}from"./chunk-6KOTIPNY.js";var j=e=>({"grid-template-columns":e}),w=e=>["/pokemon/",e],z=e=>({"grid-column":e}),H=()=>[];function $(e,U){if(e&1&&(a(0,"mat-card",1)(1,"mat-card-header")(2,"mat-card-subtitle"),k(3),c(4,"pokemonSpeciesName"),c(5,"titlecase"),p()(),a(6,"mat-card-content",2)(7,"div",3),C(8,"img",4),c(9,"pokemonImage"),p()()()),e&2){let o,t,n=U.$implicit,u=y();r("routerLink",m(12,w,n.identifier))("ngStyle",m(14,z,((o=n.step)!==null&&o!==void 0?o:0)+1)),i(3),S(" ",P(5,7,l(4,4,(t=n.names)!==null&&t!==void 0?t:M(16,H),u.actualLanguageId)),""),i(5),r("src",l(9,9,n.id,u.pokemonSpriteTypePath.FRONT),s)}}var Z=(()=>{class e{constructor(){this.pokemonSpriteTypePath=N}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=d({type:e,selectors:[["app-evolution-tab"]],inputs:{evolutionChain:"evolutionChain",maximalEvolutionStep:"maximalEvolutionStep",actualLanguageId:"actualLanguageId"},standalone:!0,features:[_],decls:3,vars:3,consts:[[1,"evolution-container","align-items-center","justify-content-center","mt-2",3,"ngStyle"],[1,"pokemon-card","cursor-pointer",3,"routerLink","ngStyle"],[1,"text-center"],[1,"image-container","center"],[1,"center","text-center","image-container",3,"src"]],template:function(t,n){t&1&&(a(0,"div",0),f(1,$,10,17,"mat-card",1,g),p()),t&2&&(r("ngStyle",m(1,j,"repeat("+(n.maximalEvolutionStep+1)+", 1fr)")),i(),v(n.evolutionChain))},dependencies:[T,x,h,E,b,B,F,I,O,L,D,R],styles:[".evolution-container[_ngcontent-%COMP%]{display:grid;gap:10px}.evolution-container[_ngcontent-%COMP%]   .pokemon-card[_ngcontent-%COMP%]{background-color:#212121}.evolution-container[_ngcontent-%COMP%]   .pokemon-card[_ngcontent-%COMP%]:hover{background-color:var(--bs-code-color, transparent)}"]})}}return e})();export{Z as EvolutionTabComponent};