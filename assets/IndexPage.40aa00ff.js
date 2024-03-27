import{_ as g,d as y,u as F,a as V,b as R,e,f as W,o as a,g as L,h as c,t as _,F as C,i as A,j as Y,n as D,k as K,p as m,l as w}from"./index.3beb38ed.js";const P="\u5F71\u97FF",J="\u53EF\u884C\u6027",q="\u8F15\u5FAE",x="\u9069\u4E2D",j="\u91CD\u5927",X="\u56B4\u91CD",z="\u9AD8",Z="\u4E2D",Q="\u4F4E",oo="\u6975\u4F4E";var eo={IMPACT:P,FEASIBILITY:J,NEGLIGIBLE:q,MODERATE:x,MAJOR:j,SEVERE:X,HIGH:z,MEDIUM:Z,LOW:Q,VERY_LOW:oo};const to="\u5F71\u97FF",so="\u5B9F\u73FE\u53EF\u80FD\u6027",co="\u7121\u8996\u3067\u304D\u308B",_o="\u9069\u5EA6",no="\u91CD\u5927",ao="\u6DF1\u523B",Lo="\u9AD8",Eo="\u4E2D",Oo="\u4F4E",lo="\u975E\u5E38\u306B\u4F4E\u3044";var Io={IMPACT:to,FEASIBILITY:so,NEGLIGIBLE:co,MODERATE:_o,MAJOR:no,SEVERE:ao,HIGH:Lo,MEDIUM:Eo,LOW:Oo,VERY_LOW:lo};const ro="\uC601\uD5A5",uo="\uC2E4\uD589 \uAC00\uB2A5\uC131",Ro="\uBB34\uC2DC\uD560 \uC218 \uC788\uB294",Co="\uC801\uB2F9\uD55C",Ao="\uC8FC\uC694",Bo="\uC2EC\uAC01\uD55C",io="\uB192\uC740",Mo="\uC911\uAC04",Do="\uB0AE\uC740",vo="\uB9E4\uC6B0 \uB0AE\uC740";var Uo={IMPACT:ro,FEASIBILITY:uo,NEGLIGIBLE:Ro,MODERATE:Co,MAJOR:Ao,SEVERE:Bo,HIGH:io,MEDIUM:Mo,LOW:Do,VERY_LOW:vo};const No="Impact",To="Feasibility",Go="Negligible",fo="Moderate",ho="Major",So="Severe",po="High",bo="Medium",ko="Low",Ho="Very Low";var $o={IMPACT:No,FEASIBILITY:To,NEGLIGIBLE:Go,MODERATE:fo,MAJOR:ho,SEVERE:So,HIGH:po,MEDIUM:bo,LOW:ko,VERY_LOW:Ho};const go="en",yo="#e3f2fd",Fo="#f3e5f5",Vo="#fce4ec",Wo="black",Yo="#66bb6a",Ko="#ffee58",mo="#ffa726",wo="#ef5350",Po="#d50000",Jo=!0;var t={BUILD_USE_LANGUAGE:go,BUILD_CANTON_COLOR:yo,BUILD_HEAD_COLOR:Fo,BUILD_FIRST_COLUMN_COLOR:Vo,BUILD_FONT_COLOR:Wo,BUILD_BLOCK_COLOR_GREEN:Yo,BUILD_BLOCK_COLOR_YELLOW:Ko,BUILD_BLOCK_COLOR_ORANGE:mo,BUILD_BLOCK_COLOR_RED:wo,BUILD_BLOCK_COLOR_MAROON:Po,RUNTIME_ENABLE_LINK_TO_EXTERNAL_HASHTAG:Jo};const qo=O=>(m("data-v-5f4b050a"),O=O(),w(),O),xo={key:0,class:"table-report"},jo={class:"head"},Xo={class:"canton_block"},zo=qo(()=>c("span",null,"\u2B63",-1)),Zo={class:"table_head_block"},Qo={class:"table_head_block"},oe={class:"table_head_block"},ee={class:"table_head_block"},te={class:"color-block flex table_first_column_block"},se=["onClick"],ce=y({__name:"IndexPage",setup(O){F(o=>({"178aa209":U.value,e2266dce:N.value,66493318:T.value,"5b5a5d88":G.value,"116dfb0b":f.value,c62c0078:h.value,"42c37b6c":S.value,"2e4018fd":p.value,"72ee5d48":b.value}));const E=V(),v=R(()=>E.query.lang||t.BUILD_USE_LANGUAGE),s=R(()=>{let o;switch(v.value){case"ja":o=Io;break;case"ko":o=Uo;break;case"zh":o=eo;break;default:o=$o}return o}),U=e(t.BUILD_FONT_COLOR),N=e(t.BUILD_CANTON_COLOR),T=e(t.BUILD_HEAD_COLOR),G=e(t.BUILD_FIRST_COLUMN_COLOR),f=e(t.BUILD_BLOCK_COLOR_GREEN),h=e(t.BUILD_BLOCK_COLOR_YELLOW),S=e(t.BUILD_BLOCK_COLOR_ORANGE),p=e(t.BUILD_BLOCK_COLOR_RED),b=e(t.BUILD_BLOCK_COLOR_MAROON),l=e(),I=e(!1),B=R(()=>E.query.url||""),d=e(),k=()=>{if(B.value&&fetch(B.value).then(o=>o.json()).then(o=>{l.value=o,I.value=!0}).catch(o=>{throw console.error("Error fetching data:",o),l.value="",I.value=!0,o}),E.query.data){const o=decodeURIComponent(E.query.data.toString());try{l.value=JSON.parse(o),I.value=!0}catch(i){console.error("\u89E3\u6790\u8CC7\u6599\u6642\u767C\u751F\u932F\u8AA4\uFF1A",i)}}},H=o=>{if(t.RUNTIME_ENABLE_LINK_TO_EXTERNAL_HASHTAG)window.parent.postMessage({item:o.title,query:E.query.url},"*");else return};return W(async()=>{await k(),window.parent.postMessage({height:d.value.clientHeight},"*")}),(o,i)=>(a(),L("div",{class:"page",ref_key:"page",ref:d},[I.value?(a(),L("div",xo,[c("div",jo,[c("div",Xo,[c("span",null,_(s.value.IMPACT)+" \u2B62",1),c("span",null,_(s.value.FEASIBILITY),1),zo]),c("div",Zo,_(s.value.NEGLIGIBLE),1),c("div",Qo,_(s.value.MODERATE),1),c("div",oe,_(s.value.MAJOR),1),c("div",ee,_(s.value.SEVERE),1)]),(a(!0),L(C,null,A(l.value.tableContent,(M,r)=>(a(),L("div",{class:"body",key:M},[c("div",te,_(r===0?s.value.HIGH:r===1?s.value.MEDIUM:r===2?s.value.LOW:r===3?s.value.VERY_LOW:""),1),(a(!0),L(C,null,A(M,n=>(a(),L("div",{key:n,class:D(["color-block",{green_block:n.color==="green",yellow_block:n.color==="yellow",orange_block:n.color==="orange",red_block:n.color==="red",maroon_block:n.color==="maroon"}])},[(a(!0),L(C,null,A(n.content,(u,$)=>(a(),L("div",{class:D(["inline-block",{clickable:K(t).RUNTIME_ENABLE_LINK_TO_EXTERNAL_HASHTAG}]),key:u,onClick:_e=>H(u)},_(u.title)+_($!==n.content.length-1?",":"")+" ",11,se))),128))],2))),128))]))),128))])):Y("",!0)],512))}});var ae=g(ce,[["__scopeId","data-v-5f4b050a"]]);export{ae as default};
