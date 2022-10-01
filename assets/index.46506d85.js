(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function l(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=l(i);fetch(i.href,r)}})();function We(){}const ol=e=>e;function sl(e){return e()}function Kt(){return Object.create(null)}function ie(e){e.forEach(sl)}function rl(e){return typeof e=="function"}function Dl(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let ft;function Nl(e,t){return ft||(ft=document.createElement("a")),ft.href=t,e===ft.href}function El(e){return Object.keys(e).length===0}const cl=typeof window<"u";let Ll=cl?()=>window.performance.now():()=>Date.now(),It=cl?e=>requestAnimationFrame(e):We;const Le=new Set;function dl(e){Le.forEach(t=>{t.c(e)||(Le.delete(t),t.f())}),Le.size!==0&&It(dl)}function Tl(e){let t;return Le.size===0&&It(dl),{promise:new Promise(l=>{Le.add(t={c:e,f:l})}),abort(){Le.delete(t)}}}function a(e,t){e.appendChild(t)}function ul(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function Il(e){const t=d("style");return Ql(ul(e),t),t.sheet}function Ql(e,t){return a(e.head||e,t),t.sheet}function U(e,t,l){e.insertBefore(t,l||null)}function G(e){e.parentNode.removeChild(e)}function d(e){return document.createElement(e)}function E(e){return document.createTextNode(e)}function b(){return E(" ")}function D(e,t,l,n){return e.addEventListener(t,l,n),()=>e.removeEventListener(t,l,n)}function s(e,t,l){l==null?e.removeAttribute(t):e.getAttribute(t)!==l&&e.setAttribute(t,l)}function gt(e){return e===""?null:+e}function zl(e){return Array.from(e.childNodes)}function V(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function ht(e,t){e.value=t==null?"":t}function Nt(e,t,l,n){l===null?e.style.removeProperty(t):e.style.setProperty(t,l,n?"important":"")}function Fl(e,t,{bubbles:l=!1,cancelable:n=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(e,l,n,t),i}const kt=new Map;let vt=0;function Ol(e){let t=5381,l=e.length;for(;l--;)t=(t<<5)-t^e.charCodeAt(l);return t>>>0}function jl(e,t){const l={stylesheet:Il(t),rules:{}};return kt.set(e,l),l}function Jt(e,t,l,n,i,r,c,h=0){const _=16.666/n;let f=`{
`;for(let y=0;y<=1;y+=_){const I=t+(l-t)*r(y);f+=y*100+`%{${c(I,1-I)}}
`}const k=f+`100% {${c(l,1-l)}}
}`,m=`__svelte_${Ol(k)}_${h}`,u=ul(e),{stylesheet:g,rules:o}=kt.get(u)||jl(u,e);o[m]||(o[m]=!0,g.insertRule(`@keyframes ${m} ${k}`,g.cssRules.length));const v=e.style.animation||"";return e.style.animation=`${v?`${v}, `:""}${m} ${n}ms linear ${i}ms 1 both`,vt+=1,m}function Pl(e,t){const l=(e.style.animation||"").split(", "),n=l.filter(t?r=>r.indexOf(t)<0:r=>r.indexOf("__svelte")===-1),i=l.length-n.length;i&&(e.style.animation=n.join(", "),vt-=i,vt||Al())}function Al(){It(()=>{vt||(kt.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&G(t)}),kt.clear())})}let Qt;function Ge(e){Qt=e}const He=[],Ut=[],mt=[],Xt=[],ql=Promise.resolve();let Tt=!1;function Zl(){Tt||(Tt=!0,ql.then(fl))}function ve(e){mt.push(e)}const Et=new Set;let pt=0;function fl(){const e=Qt;do{for(;pt<He.length;){const t=He[pt];pt++,Ge(t),Hl(t.$$)}for(Ge(null),He.length=0,pt=0;Ut.length;)Ut.pop()();for(let t=0;t<mt.length;t+=1){const l=mt[t];Et.has(l)||(Et.add(l),l())}mt.length=0}while(He.length);for(;Xt.length;)Xt.pop()();Tt=!1,Et.clear(),Ge(e)}function Hl(e){if(e.fragment!==null){e.update(),ie(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ve)}}let Ze;function Rl(){return Ze||(Ze=Promise.resolve(),Ze.then(()=>{Ze=null})),Ze}function Lt(e,t,l){e.dispatchEvent(Fl(`${t?"intro":"outro"}${l}`))}const _t=new Set;let me;function Re(){me={r:0,c:[],p:me}}function Ve(){me.r||ie(me.c),me=me.p}function Y(e,t){e&&e.i&&(_t.delete(e),e.i(t))}function ue(e,t,l,n){if(e&&e.o){if(_t.has(e))return;_t.add(e),me.c.push(()=>{_t.delete(e),n&&(l&&e.d(1),n())}),e.o(t)}else n&&n()}const Vl={duration:0};function be(e,t,l,n){let i=t(e,l),r=n?0:1,c=null,h=null,_=null;function f(){_&&Pl(e,_)}function k(u,g){const o=u.b-r;return g*=Math.abs(o),{a:r,b:u.b,d:o,duration:g,start:u.start,end:u.start+g,group:u.group}}function m(u){const{delay:g=0,duration:o=300,easing:v=ol,tick:y=We,css:I}=i||Vl,C={start:Ll()+g,b:u};u||(C.group=me,me.r+=1),c||h?h=C:(I&&(f(),_=Jt(e,r,u,o,g,v,I)),u&&y(0,1),c=k(C,o),ve(()=>Lt(e,u,"start")),Tl(A=>{if(h&&A>h.start&&(c=k(h,o),h=null,Lt(e,c.b,"start"),I&&(f(),_=Jt(e,r,c.b,c.duration,0,v,i.css))),c){if(A>=c.end)y(r=c.b,1-r),Lt(e,c.b,"end"),h||(c.b?f():--c.group.r||ie(c.group.c)),c=null;else if(A>=c.start){const $=A-c.start;r=c.a+c.d*v($/c.duration),y(r,1-r)}}return!!(c||h)}))}return{run(u){rl(i)?Rl().then(()=>{i=i(),m(u)}):m(u)},end(){f(),c=h=null}}}function Gl(e,t){ue(e,1,1,()=>{t.delete(e.key)})}function Wl(e,t,l,n,i,r,c,h,_,f,k,m){let u=e.length,g=r.length,o=u;const v={};for(;o--;)v[e[o].key]=o;const y=[],I=new Map,C=new Map;for(o=g;o--;){const S=m(i,r,o),H=l(S);let q=c.get(H);q?n&&q.p(S,t):(q=f(H,S),q.c()),I.set(H,y[o]=q),H in v&&C.set(H,Math.abs(o-v[H]))}const A=new Set,$=new Set;function w(S){Y(S,1),S.m(h,k),c.set(S.key,S),k=S.first,g--}for(;u&&g;){const S=y[g-1],H=e[u-1],q=S.key,W=H.key;S===H?(k=S.first,u--,g--):I.has(W)?!c.has(q)||A.has(q)?w(S):$.has(W)?u--:C.get(q)>C.get(W)?($.add(q),w(S)):(A.add(W),u--):(_(H,c),u--)}for(;u--;){const S=e[u];I.has(S.key)||_(S,c)}for(;g;)w(y[g-1]);return y}function Kl(e,t,l,n){const{fragment:i,on_mount:r,on_destroy:c,after_update:h}=e.$$;i&&i.m(t,l),n||ve(()=>{const _=r.map(sl).filter(rl);c?c.push(..._):ie(_),e.$$.on_mount=[]}),h.forEach(ve)}function Jl(e,t){const l=e.$$;l.fragment!==null&&(ie(l.on_destroy),l.fragment&&l.fragment.d(t),l.on_destroy=l.fragment=null,l.ctx=[])}function Ul(e,t){e.$$.dirty[0]===-1&&(He.push(e),Zl(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Xl(e,t,l,n,i,r,c,h=[-1]){const _=Qt;Ge(e);const f=e.$$={fragment:null,ctx:null,props:r,update:We,not_equal:i,bound:Kt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(_?_.$$.context:[])),callbacks:Kt(),dirty:h,skip_bound:!1,root:t.target||_.$$.root};c&&c(f.root);let k=!1;if(f.ctx=l?l(e,t.props||{},(m,u,...g)=>{const o=g.length?g[0]:u;return f.ctx&&i(f.ctx[m],f.ctx[m]=o)&&(!f.skip_bound&&f.bound[m]&&f.bound[m](o),k&&Ul(e,m)),u}):[],f.update(),k=!0,ie(f.before_update),f.fragment=n?n(f.ctx):!1,t.target){if(t.hydrate){const m=zl(t.target);f.fragment&&f.fragment.l(m),m.forEach(G)}else f.fragment&&f.fragment.c();t.intro&&Y(e.$$.fragment),Kl(e,t.target,t.anchor,t.customElement),fl()}Ge(_)}class Yl{$destroy(){Jl(this,1),this.$destroy=We}$on(t,l){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(l),()=>{const i=n.indexOf(l);i!==-1&&n.splice(i,1)}}$set(t){this.$$set&&!El(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function pl(e){const t=e-1;return t*t*t+1}function Te(e){return-.5*(Math.cos(Math.PI*e)-1)}function Yt(e,{delay:t=0,duration:l=400,easing:n=ol}={}){const i=+getComputedStyle(e).opacity;return{delay:t,duration:l,easing:n,css:r=>`opacity: ${r*i}`}}function $t(e,{delay:t=0,duration:l=400,easing:n=pl}={}){const i=getComputedStyle(e),r=+i.opacity,c=parseFloat(i.height),h=parseFloat(i.paddingTop),_=parseFloat(i.paddingBottom),f=parseFloat(i.marginTop),k=parseFloat(i.marginBottom),m=parseFloat(i.borderTopWidth),u=parseFloat(i.borderBottomWidth);return{delay:t,duration:l,easing:n,css:g=>`overflow: hidden;opacity: ${Math.min(g*20,1)*r};height: ${g*c}px;padding-top: ${g*h}px;padding-bottom: ${g*_}px;margin-top: ${g*f}px;margin-bottom: ${g*k}px;border-top-width: ${g*m}px;border-bottom-width: ${g*u}px;`}}function bt(e,{delay:t=0,duration:l=400,easing:n=pl,start:i=0,opacity:r=0}={}){const c=getComputedStyle(e),h=+c.opacity,_=c.transform==="none"?"":c.transform,f=1-i,k=h*(1-r);return{delay:t,duration:l,easing:n,css:(m,u)=>`
			transform: ${_} scale(${1-f*u});
			opacity: ${h-k*u}
		`}}function xt(e,t,l){const n=e.slice();return n[63]=t[l],n}function el(e){let t,l,n,i,r,c,h,_,f,k,m,u,g,o,v;return{c(){t=d("div"),l=d("div"),n=d("input"),i=b(),r=d("button"),r.textContent="D20",c=b(),h=d("button"),h.textContent="D12",_=b(),f=d("button"),f.textContent="D8",k=b(),m=d("button"),m.textContent="D6",s(n,"type","number"),s(r,"class","dices"),s(h,"class","dices"),s(f,"class","dices"),s(m,"class","dices"),s(l,"class","wraper"),s(t,"class","customDice")},m(y,I){U(y,t,I),a(t,l),a(l,n),ht(n,e[8]),a(l,i),a(l,r),a(l,c),a(l,h),a(l,_),a(l,f),a(l,k),a(l,m),g=!0,o||(v=[D(n,"input",e[24]),D(r,"click",e[25]),D(h,"click",e[26]),D(f,"click",e[27]),D(m,"click",e[28])],o=!0)},p(y,I){e=y,I[0]&256&&gt(n.value)!==e[8]&&ht(n,e[8])},i(y){g||(ve(()=>{u||(u=be(t,bt,{duration:150,delay:0,opacity:.5,start:.5,easing:Te},!0)),u.run(1)}),g=!0)},o(y){u||(u=be(t,bt,{duration:150,delay:0,opacity:.5,start:.5,easing:Te},!1)),u.run(0),g=!1},d(y){y&&G(t),y&&u&&u.end(),o=!1,ie(v)}}}function tl(e){let t,l,n,i,r,c,h,_,f,k,m,u,g,o,v,y,I;return{c(){t=d("div"),l=d("div"),n=d("div"),i=d("h1"),r=E(e[0]),c=b(),h=d("div"),_=d("h2"),f=E(e[1]),k=b(),m=d("sup"),u=E("+"),g=E(e[2]),s(n,"class","big"),s(_,"class","lista"),s(h,"class","smaller"),s(l,"class","whiteBox"),s(t,"class","screen"),s(t,"id","screen")},m(C,A){U(C,t,A),a(t,l),a(l,n),a(n,i),a(i,r),a(l,c),a(l,h),a(h,_),a(_,f),a(_,k),a(_,m),a(m,u),a(m,g),v=!0,y||(I=D(t,"click",e[13]),y=!0)},p(C,A){(!v||A[0]&1)&&V(r,C[0]),(!v||A[0]&2)&&V(f,C[1]),(!v||A[0]&4)&&V(g,C[2])},i(C){v||(ve(()=>{o||(o=be(t,Yt,{delay:0,duration:200},!0)),o.run(1)}),v=!0)},o(C){o||(o=be(t,Yt,{delay:0,duration:200},!1)),o.run(0),v=!1},d(C){C&&G(t),C&&o&&o.end(),y=!1,I()}}}function ll(e){let t,l,n,i,r,c=e[63].for\u00E7a+"",h,_,f,k,m,u=e[63].destreza+"",g,o,v,y,I,C=e[63].constitui\u00E7\u00E3o+"",A,$,w,S,H,q=e[63].carisma+"",W,X,x,oe,le,se=e[63].inteligencia+"",ne,z,L,ee,fe,Q=e[63].percep\u00E7\u00E3o+"",B,T,K,re,ye,Ke,pe,Se,Me,Je,_e,Be=e[63].life+"",Ie,Ue,Ce=e[63].totalLife+"",Qe,Xe,ce,we,Ye,de,$e,De,Ne,xe,ge,p=e[63].sanidade+"",N,P,M=e[63].sanidadeTotal+"",J,F,Z,ae,Ee,ze,zt,Fe,Ft,Oe,Ot,je,jt,et,R,tt,Pt,lt,at=e[63].passiva+"",yt,At,nt,qt,Pe,it=e[63].atkBasico+"",St,Zt,ot,st=e[63].skill1Name+"",Mt,Ht,Ae,rt=e[63].skill1+"",Bt,Rt,ct,dt=e[63].skill2Name+"",Ct,Vt,qe,ut=e[63].skill2+"",wt,Gt,he,O,Dt,Wt;function ml(){return e[36](e[63])}function _l(){return e[37](e[63])}function gl(){return e[38](e[63])}function hl(){return e[39](e[63])}function kl(){return e[40](e[63])}function vl(){return e[41](e[63])}function bl(){return e[43](e[63])}function yl(){return e[44](e[63])}function Sl(){return e[45](e[63])}function Ml(){return e[46](e[63])}function Bl(){return e[47](e[63])}function Cl(){return e[48](e[63])}function wl(){return e[49](e[63])}let te=e[63].name=="Eris"&&al(e);return{c(){t=d("div"),l=d("div"),n=d("h1"),i=E("For\xE7a: "),r=d("span"),h=E(c),_=b(),f=d("h1"),k=E("Destreza: "),m=d("span"),g=E(u),o=b(),v=d("h1"),y=E("Constitui\xE7\xE3o: "),I=d("span"),A=E(C),$=b(),w=d("h1"),S=E("Carisma: "),H=d("span"),W=E(q),X=b(),x=d("h1"),oe=E("Intelig\xEAncia: "),le=d("span"),ne=E(se),z=b(),L=d("h1"),ee=E("Percep\xE7\xE3o: "),fe=d("span"),B=E(Q),T=b(),K=d("div"),re=d("div"),ye=d("label"),ye.textContent="Vida:",Ke=b(),pe=d("progress"),Je=b(),_e=d("label"),Ie=E(Be),Ue=E("/"),Qe=E(Ce),Xe=b(),ce=d("div"),we=d("label"),we.textContent="Sanidade:",Ye=b(),de=d("progress"),$e=E("20"),xe=b(),ge=d("label"),N=E(p),P=E("/"),J=E(M),F=b(),Z=d("div"),ae=d("input"),Ee=b(),ze=d("button"),ze.innerHTML='<img class="image" alt="Dano" src="https://img.icons8.com/color/344/drop-of-blood.png"/>',zt=b(),Fe=d("button"),Fe.innerHTML='<img class="image" alt="Cura" src="https://img.icons8.com/fluency/344/pill.png"/>',Ft=b(),Oe=d("button"),Oe.innerHTML='<img class="image" alt="-Sanidade" src="https://img.icons8.com/ios/344/poison.png"/>',Ot=b(),je=d("button"),je.innerHTML='<img class="image" alt="+Sanidade" src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/344/external-happy-emoji-dreamstale-lineal-dreamstale-2.png"/>',jt=b(),et=d("div"),R=d("div"),tt=d("h1"),tt.textContent="Passiva:",Pt=b(),lt=d("p"),yt=E(at),At=b(),nt=d("h1"),nt.textContent="Ataque B\xE1sico:",qt=b(),Pe=d("p"),St=E(it),Zt=b(),ot=d("h1"),Mt=E(st),Ht=b(),Ae=d("p"),Bt=E(rt),Rt=b(),ct=d("h1"),Ct=E(dt),Vt=b(),qe=d("p"),wt=E(ut),Gt=b(),te&&te.c(),s(r,"class","number"),s(n,"class","stat"),s(m,"class","number"),s(f,"class","stat"),s(I,"class","number"),s(v,"class","stat"),s(H,"class","number"),s(w,"class","stat"),s(le,"class","number"),s(x,"class","stat"),s(fe,"class","number"),s(L,"class","stat"),s(l,"class","stats"),s(ye,"for","vida"),s(pe,"class","vida"),pe.value=Se=e[63].life,s(pe,"max",Me=e[63].totalLife),s(_e,"for","vida"),s(re,"class","life"),s(we,"for","sanidade"),s(de,"class","sanidade"),de.value=De=e[63].sanidade,s(de,"max",Ne=e[63].sanidadeTotal),s(ge,"for","sanidade"),s(ce,"class","sanity"),s(ae,"type","number"),s(ae,"class","text"),s(ze,"class","button"),s(Fe,"class","button"),s(Oe,"class","button"),s(je,"class","button"),s(Z,"class","buttons"),s(K,"class","health"),s(tt,"class","tittle"),s(lt,"class","conteudo"),s(nt,"class","tittle"),s(Pe,"class","conteudo"),s(ot,"class","tittle"),s(Ae,"class","conteudo"),s(ct,"class","tittle"),s(qe,"class","conteudo"),s(R,"class","skill"),s(et,"class","skills"),s(t,"class","colapsible")},m(ke,j){U(ke,t,j),a(t,l),a(l,n),a(n,i),a(n,r),a(r,h),a(l,_),a(l,f),a(f,k),a(f,m),a(m,g),a(l,o),a(l,v),a(v,y),a(v,I),a(I,A),a(l,$),a(l,w),a(w,S),a(w,H),a(H,W),a(l,X),a(l,x),a(x,oe),a(x,le),a(le,ne),a(l,z),a(l,L),a(L,ee),a(L,fe),a(fe,B),a(t,T),a(t,K),a(K,re),a(re,ye),a(re,Ke),a(re,pe),a(re,Je),a(re,_e),a(_e,Ie),a(_e,Ue),a(_e,Qe),a(K,Xe),a(K,ce),a(ce,we),a(ce,Ye),a(ce,de),a(de,$e),a(ce,xe),a(ce,ge),a(ge,N),a(ge,P),a(ge,J),a(K,F),a(K,Z),a(Z,ae),ht(ae,e[4]),a(Z,Ee),a(Z,ze),a(Z,zt),a(Z,Fe),a(Z,Ft),a(Z,Oe),a(Z,Ot),a(Z,je),a(t,jt),a(t,et),a(et,R),a(R,tt),a(R,Pt),a(R,lt),a(lt,yt),a(R,At),a(R,nt),a(R,qt),a(R,Pe),a(Pe,St),a(R,Zt),a(R,ot),a(ot,Mt),a(R,Ht),a(R,Ae),a(Ae,Bt),a(R,Rt),a(R,ct),a(ct,Ct),a(R,Vt),a(R,qe),a(qe,wt),a(R,Gt),te&&te.m(R,null),O=!0,Dt||(Wt=[D(n,"click",ml),D(f,"click",_l),D(v,"click",gl),D(w,"click",hl),D(x,"click",kl),D(L,"click",vl),D(ae,"input",e[42]),D(ze,"click",bl),D(Fe,"click",yl),D(Oe,"click",Sl),D(je,"click",Ml),D(Pe,"click",Bl),D(Ae,"click",Cl),D(qe,"click",wl)],Dt=!0)},p(ke,j){e=ke,(!O||j[0]&512)&&c!==(c=e[63].for\u00E7a+"")&&V(h,c),(!O||j[0]&512)&&u!==(u=e[63].destreza+"")&&V(g,u),(!O||j[0]&512)&&C!==(C=e[63].constitui\u00E7\u00E3o+"")&&V(A,C),(!O||j[0]&512)&&q!==(q=e[63].carisma+"")&&V(W,q),(!O||j[0]&512)&&se!==(se=e[63].inteligencia+"")&&V(ne,se),(!O||j[0]&512)&&Q!==(Q=e[63].percep\u00E7\u00E3o+"")&&V(B,Q),(!O||j[0]&512&&Se!==(Se=e[63].life))&&(pe.value=Se),(!O||j[0]&512&&Me!==(Me=e[63].totalLife))&&s(pe,"max",Me),(!O||j[0]&512)&&Be!==(Be=e[63].life+"")&&V(Ie,Be),(!O||j[0]&512)&&Ce!==(Ce=e[63].totalLife+"")&&V(Qe,Ce),(!O||j[0]&512&&De!==(De=e[63].sanidade))&&(de.value=De),(!O||j[0]&512&&Ne!==(Ne=e[63].sanidadeTotal))&&s(de,"max",Ne),(!O||j[0]&512)&&p!==(p=e[63].sanidade+"")&&V(N,p),(!O||j[0]&512)&&M!==(M=e[63].sanidadeTotal+"")&&V(J,M),j[0]&16&&gt(ae.value)!==e[4]&&ht(ae,e[4]),(!O||j[0]&512)&&at!==(at=e[63].passiva+"")&&V(yt,at),(!O||j[0]&512)&&it!==(it=e[63].atkBasico+"")&&V(St,it),(!O||j[0]&512)&&st!==(st=e[63].skill1Name+"")&&V(Mt,st),(!O||j[0]&512)&&rt!==(rt=e[63].skill1+"")&&V(Bt,rt),(!O||j[0]&512)&&dt!==(dt=e[63].skill2Name+"")&&V(Ct,dt),(!O||j[0]&512)&&ut!==(ut=e[63].skill2+"")&&V(wt,ut),e[63].name=="Eris"?te?te.p(e,j):(te=al(e),te.c(),te.m(R,null)):te&&(te.d(1),te=null)},i(ke){O||(ve(()=>{he||(he=be(t,$t,{delay:0,duration:400,easing:Te},!0)),he.run(1)}),O=!0)},o(ke){he||(he=be(t,$t,{delay:0,duration:400,easing:Te},!1)),he.run(0),O=!1},d(ke){ke&&G(t),te&&te.d(),ke&&he&&he.end(),Dt=!1,ie(Wt)}}}function al(e){let t,l,n,i,r,c,h,_,f,k,m,u,g;return{c(){t=d("h1"),t.textContent="Elementos:",l=b(),n=d("p"),n.textContent="Fogo: 1d4 de queimadura",i=b(),r=d("p"),r.textContent="Raio: +3 em rea\xE7\xE3o",c=b(),h=d("p"),h.textContent="Gelo: congela",_=b(),f=d("p"),f.textContent="\xC1cido: 1 D6",k=b(),m=d("p"),m.textContent="Vento: alcance 2m",s(t,"class","tittle"),s(n,"class","conteudo"),s(r,"class","conteudo"),s(h,"class","conteudo"),s(f,"class","conteudo"),s(m,"class","conteudo")},m(o,v){U(o,t,v),U(o,l,v),U(o,n,v),U(o,i,v),U(o,r,v),U(o,c,v),U(o,h,v),U(o,_,v),U(o,f,v),U(o,k,v),U(o,m,v),u||(g=[D(n,"click",e[50]),D(f,"click",e[51])],u=!0)},p:We,d(o){o&&G(t),o&&G(l),o&&G(n),o&&G(i),o&&G(r),o&&G(c),o&&G(h),o&&G(_),o&&G(f),o&&G(k),o&&G(m),u=!1,ie(g)}}}function nl(e,t){let l,n,i,r=t[63].name+"",c,h,_,f,k,m,u;function g(){return t[35](t[63])}let o=t[63].open&&ll(t);return{key:e,first:null,c(){l=d("div"),n=d("header"),i=d("h3"),c=E(r),h=b(),_=d("span"),_.textContent="+",f=b(),o&&o.c(),Nt(_,"color","#26092e"),Nt(_,"font-family","sans"),Nt(_,"font-size","2.5rem"),s(n,"class","summary"),s(l,"class","details"),this.first=l},m(v,y){U(v,l,y),a(l,n),a(n,i),a(i,c),a(n,h),a(n,_),a(l,f),o&&o.m(l,null),k=!0,m||(u=D(n,"click",g),m=!0)},p(v,y){t=v,(!k||y[0]&512)&&r!==(r=t[63].name+"")&&V(c,r),t[63].open?o?(o.p(t,y),y[0]&512&&Y(o,1)):(o=ll(t),o.c(),Y(o,1),o.m(l,null)):o&&(Re(),ue(o,1,1,()=>{o=null}),Ve())},i(v){k||(Y(o),k=!0)},o(v){ue(o),k=!1},d(v){v&&G(l),o&&o.d(),m=!1,u()}}}function il(e){let t,l,n,i,r,c,h,_;return{c(){t=d("div"),l=d("button"),l.textContent="\u21BA",n=b(),i=d("button"),i.textContent="\u{1F3B2}",s(l,"class","btns"),s(i,"class","btns"),s(t,"class","options")},m(f,k){U(f,t,k),a(t,l),a(t,n),a(t,i),c=!0,h||(_=[D(l,"click",e[21]),D(i,"click",e[22])],h=!0)},p(f,k){e=f},i(f){c||(ve(()=>{r||(r=be(t,bt,{duration:150,delay:0,opacity:.5,start:.5,easing:Te},!0)),r.run(1)}),c=!0)},o(f){r||(r=be(t,bt,{duration:150,delay:0,opacity:.5,start:.5,easing:Te},!1)),r.run(0),c=!1},d(f){f&&G(t),f&&r&&r.end(),h=!1,ie(_)}}}function $l(e){let t,l,n,i,r,c,h,_,f,k,m,u,g,o,v,y,I,C,A,$,w,S=[],H=new Map,q,W,X,x,oe,le,se,ne,z=e[7]&&el(e),L=e[3]&&tl(e),ee=e[9];const fe=B=>B[63].id;for(let B=0;B<ee.length;B+=1){let T=xt(e,ee,B),K=fe(T);H.set(K,S[B]=nl(K,T))}let Q=e[6]&&il(e);return{c(){t=d("main"),z&&z.c(),l=b(),n=d("div"),i=d("div"),r=d("img"),h=b(),_=d("button"),_.textContent="For\xE7a",f=b(),k=d("button"),k.textContent="Destreza",m=b(),u=d("button"),u.textContent="Constitui\xE7\xE3o",g=b(),o=d("button"),o.textContent="Carisma",v=b(),y=d("button"),y.textContent="Intelig\xEAncia",I=b(),C=d("button"),C.textContent="Percep\xE7\xE3o",A=b(),L&&L.c(),$=b(),w=d("div");for(let B=0;B<S.length;B+=1)S[B].c();q=b(),W=d("div"),X=d("button"),x=E(e[5]),oe=b(),Q&&Q.c(),s(r,"id","image"),s(r,"class","avatar"),Nl(r.src,c="")||s(r,"src",c),s(r,"alt",""),s(_,"class","choseButton"),s(_,"id","for\xE7a"),s(k,"class","choseButton"),s(k,"id","destreza"),s(u,"class","choseButton"),s(u,"id","constitui\xE7\xE3o"),s(o,"class","choseButton"),s(o,"id","carisma"),s(y,"class","choseButton"),s(y,"id","inteligencia"),s(C,"class","choseButton"),s(C,"id","percep\xE7\xE3o"),s(i,"class","choseButtons"),s(n,"class","chose"),s(n,"id","chose"),s(X,"class","optionsBtn"),s(w,"class","main")},m(B,T){U(B,t,T),z&&z.m(t,null),a(t,l),a(t,n),a(n,i),a(i,r),a(i,h),a(i,_),a(i,f),a(i,k),a(i,m),a(i,u),a(i,g),a(i,o),a(i,v),a(i,y),a(i,I),a(i,C),a(t,A),L&&L.m(t,null),a(t,$),a(t,w);for(let K=0;K<S.length;K+=1)S[K].m(w,null);a(w,q),a(w,W),a(W,X),a(X,x),a(W,oe),Q&&Q.m(W,null),le=!0,se||(ne=[D(_,"click",e[29]),D(k,"click",e[30]),D(u,"click",e[31]),D(o,"click",e[32]),D(y,"click",e[33]),D(C,"click",e[34]),D(n,"click",e[12]),D(X,"click",e[20])],se=!0)},p(B,T){B[7]?z?(z.p(B,T),T[0]&128&&Y(z,1)):(z=el(B),z.c(),Y(z,1),z.m(t,l)):z&&(Re(),ue(z,1,1,()=>{z=null}),Ve()),B[3]?L?(L.p(B,T),T[0]&8&&Y(L,1)):(L=tl(B),L.c(),Y(L,1),L.m(t,$)):L&&(Re(),ue(L,1,1,()=>{L=null}),Ve()),T[0]&1033744&&(ee=B[9],Re(),S=Wl(S,T,fe,1,B,ee,H,w,Gl,nl,q,xt),Ve()),(!le||T[0]&32)&&V(x,B[5]),B[6]?Q?(Q.p(B,T),T[0]&64&&Y(Q,1)):(Q=il(B),Q.c(),Y(Q,1),Q.m(W,null)):Q&&(Re(),ue(Q,1,1,()=>{Q=null}),Ve())},i(B){if(!le){Y(z),Y(L);for(let T=0;T<ee.length;T+=1)Y(S[T]);Y(Q),le=!0}},o(B){ue(z),ue(L);for(let T=0;T<S.length;T+=1)ue(S[T]);ue(Q),le=!1},d(B){B&&G(t),z&&z.d(),L&&L.d();for(let T=0;T<S.length;T+=1)S[T].d();Q&&Q.d(),se=!1,ie(ne)}}}function xl(e,t,l){let n;(()=>{localStorage.yes==null&&(localStorage.clear(),localStorage.yes="yes",localStorage.vidaB="50",localStorage.vidaC="33",localStorage.vidaE="46",localStorage.vidaF="33",localStorage.vidaL="50",localStorage.vidaM="46",localStorage.vidaN="50",localStorage.vidaZ="64",localStorage.sanidadeB="20",localStorage.sanidadeC="20",localStorage.sanidadeE="20",localStorage.sanidadeF="20",localStorage.sanidadeL="20",localStorage.sanidadeM="20",localStorage.sanidadeN="20",localStorage.sanidadeZ="20")})();const r=p=>{for(var N=[];N.length<p;){var P=Math.floor(Math.random()*20)+1;N.push(P)}let M=N.reduce((F,Z)=>F+Z,0),J=N.sort(function(F,Z){return Z-F});return[M,J]};let c,h,_,f,k=0,m=0,u=0;const g=(p,N,P)=>{v(),c=p+1,h=N,_=P,document.getElementById("image").src=n[N].img,document.getElementById("image").alt=n[N].name},o=p=>{f=p;let N=n[h][p];if(f==_)if(c!=-1&&c!=0){let M=r(c)[1];l(0,k=M[0]),l(1,m=M),l(2,u=0)}else{let M=r(2)[1];l(0,k=M[1]),l(1,m=M),l(2,u=0)}else if(c!=-1&&c!=0){let M=r(c)[1];l(0,k=parseInt(M[0])+N),l(1,m=M),l(2,u=N)}else{let M=r(2)[1];l(0,k=parseInt(M[1])+N),l(1,m=M),l(2,u=N)}C()},v=()=>document.getElementById("chose").style.display="flex",y=()=>document.getElementById("chose").style.display="none";var I=!1;const C=()=>l(3,I=!0),A=()=>l(3,I=!1),$=p=>{n[p].open==!0?l(9,n[p].open=!1,n):l(9,n[p].open=!0,n)};var w=void 0;const S=(p,N)=>{if(w==null)return 0;{let P=p[0],M="vida"+P,J=localStorage.getItem(M),F=parseInt(J)-w;localStorage.setItem(M,F),l(9,n[N].life=F,n),l(4,w=void 0)}},H=(p,N)=>{if(w==null)return 0;{let P=p[0],M="vida"+P,J=localStorage.getItem(M),F=parseInt(J)+w;localStorage.setItem(M,F),l(9,n[N].life=F,n),l(4,w=void 0)}},q=(p,N)=>{if(w==null)return 0;{let P=p[0],M="sanidade"+P,J=localStorage.getItem(M),F=parseInt(J)+w;localStorage.setItem(M,F),l(9,n[N].sanidade=F,n),l(4,w=void 0)}},W=(p,N)=>{if(w==null)return 0;{let P=p[0],M="sanidade"+P,J=localStorage.getItem(M),F=parseInt(J)-w;localStorage.setItem(M,F),l(9,n[N].sanidade=F,n),l(4,w=void 0)}},X=(p,N,P)=>{for(var M=[];M.length<N;){var J=Math.floor(Math.random()*p)+1;M.push(J)}let F=M.reduce((ae,Ee)=>ae+Ee,0),Z=M.sort(function(ae,Ee){return Ee-ae});l(0,k=F+P),l(1,m=Z),l(2,u=P),C()};let x="\u2630",oe=!1;const le=()=>{oe==!0?(l(6,oe=!1),l(5,x="\u2630")):(l(6,oe=!0),l(5,x="\u2715"))},se=()=>{localStorage.clear(),localStorage.yes="yes",localStorage.vidaB="50",localStorage.vidaC="33",localStorage.vidaE="46",localStorage.vidaF="33",localStorage.vidaL="50",localStorage.vidaM="46",localStorage.vidaN="50",localStorage.vidaZ="64",localStorage.sanidadeB="20",localStorage.sanidadeC="20",localStorage.sanidadeE="20",localStorage.sanidadeF="20",localStorage.sanidadeL="20",localStorage.sanidadeM="20",localStorage.sanidadeN="20",localStorage.sanidadeZ="20",location.reload()};let ne=!1;const z=()=>{ne==!0?l(7,ne=!1):(l(7,ne=!0),le())};let L;const ee=p=>{for(var N=[];N.length<L;){var P=Math.floor(Math.random()*p)+1;N.push(P)}let M=N.reduce((F,Z)=>F+Z,0),J=N.sort(function(F,Z){return Z-F});l(0,k=M),l(1,m=J),l(2,u=0),C(),z(),l(8,L=void 0)};function fe(){L=gt(this.value),l(8,L)}const Q=()=>ee(20),B=()=>ee(12),T=()=>ee(8),K=()=>ee(6),re=()=>o("for\xE7a"),ye=()=>o("destreza"),Ke=()=>o("constitui\xE7\xE3o"),pe=()=>o("carisma"),Se=()=>o("inteligencia"),Me=()=>o("percep\xE7\xE3o"),Je=p=>$(p.id),_e=p=>g(p.for\u00E7a,p.id,"for\xE7a"),Be=p=>g(p.destreza,p.id,"destreza"),Ie=p=>g(p.constitui\u00E7\u00E3o,p.id,"constitui\xE7\xE3o"),Ue=p=>g(p.carisma,p.id,"carisma"),Ce=p=>g(p.inteligencia,p.id,"inteligencia"),Qe=p=>g(p.percep\u00E7\u00E3o,p.id,"percep\xE7\xE3o");function Xe(){w=gt(this.value),l(4,w)}const ce=p=>S(p.name,p.id),we=p=>H(p.name,p.id),Ye=p=>W(p.name,p.id),de=p=>q(p.name,p.id),$e=p=>X(p.dado,p.atkBasicoQuantidade,p.atkBasicoModificador),De=p=>X(p.dado,p.skill1Quantidade,p.skill1Modificador),Ne=p=>X(p.dado,p.skill2Quantidade,p.skill2Modificador),xe=()=>X(4,1,0),ge=()=>X(6,1,0);return l(9,n=[{name:"Bartolomeu",for\u00E7a:4,destreza:4,constitui\u00E7\u00E3o:2,carisma:1,inteligencia:-1,percep\u00E7\u00E3o:4,life:localStorage.vidaB,totalLife:50,sanidade:localStorage.sanidadeB,sanidadeTotal:20,img:"https://cdn.discordapp.com/attachments/831176302279000174/1017121614258778206/Bartolomeu.jpeg",open:!1,atkBasico:"5 D6 +1",atkBasicoQuantidade:5,atkBasicoModificador:1,dado:6,passiva:"Rastrear o alvo pelo cheiro \u{1F37A}",skill1Name:"Garra:",skill2Name:"Mordida:",skill1:" Garrada alvo \xFAnico |5 D6 +1|",skill1Quantidade:5,skill1Modificador:1,skill2:" Moidida |5 D6|",skill2Quantidade:5,skill2Modificador:0,id:0},{name:"Ciara",for\u00E7a:1,destreza:2,constitui\u00E7\u00E3o:2,carisma:3,inteligencia:4,percep\u00E7\u00E3o:3,life:localStorage.vidaC,totalLife:33,sanidade:localStorage.sanidadeC,sanidadeTotal:20,img:"https://cdn.discordapp.com/attachments/831176302279000174/1017121616146219030/Ciara.jpeg",open:!1,atkBasico:"1 D6",atkBasicoQuantidade:1,atkBasicoModificador:0,dado:6,passiva:"Tatuagem armazena poder ap\xF3s abates 4 ----- Cargas = +1 dado",skill1Name:"Cura:",skill2Name:"Purifica\xE7\xE3o:",skill1:"Curinha alvo \xFAnico\u{1FA84} |5 D6 (Intelig\xEAncia)|",skill1Quantidade:5,skill1Modificador:0,skill2:"Tira debuff e da dano em mortos vivos |5 D6 (Intelig\xEAncia)|",skill2Quantidade:5,skill2Modificador:0,id:1},{name:"Eris",for\u00E7a:4,destreza:4,constitui\u00E7\u00E3o:2,carisma:1,inteligencia:1,percep\u00E7\u00E3o:3,life:localStorage.vidaE,totalLife:46,sanidade:localStorage.sanidadeE,sanidadeTotal:20,img:"https://cdn.discordapp.com/attachments/831176302279000174/1017121613994524713/Eris.jpeg",open:!1,atkBasico:"5 D6+2",atkBasicoQuantidade:5,atkBasicoModificador:2,dado:6,passiva:"Olhar do desespero: Dt 15",skill1Name:"Tp nas sombras:",skill2Name:"Elementarista:",skill1:"Teletransporta n\xE9",skill1Quantidade:0,skill1Modificador:0,skill2:"Buffa a arma \u{1F5E1}\uFE0F",skill2Quantidade:0,skill2Modificador:0,id:2},{name:"Feather",for\u00E7a:1,destreza:2,constitui\u00E7\u00E3o:3,carisma:4,inteligencia:3,percep\u00E7\u00E3o:2,life:localStorage.vidaF,totalLife:33,sanidade:localStorage.sanidadeF,sanidadeTotal:20,img:"https://cdn.discordapp.com/attachments/831176302279000174/1017121614493651014/Feather.jpeg",open:!1,atkBasico:"5 D6 +2",atkBasicoQuantidade:5,atkBasicoModificador:2,dado:6,passiva:"Ao tomar ataque letal vira um ovo e volta com constitui\xE7\xE3o  DT:20,18,16,14",skill1Name:"Manipula\xE7\xE3o:",skill2Name:"Cura penada:",skill1:"Manipula as penas\u{1FAB6} |5 D6 +2|",skill1Quantidade:5,skill1Modificador:2,skill2:"Curinha |5 D6 +1|",skill2Quantidade:5,skill2Modificador:1,id:3},{name:"Lilith",for\u00E7a:1,destreza:2,constitui\u00E7\u00E3o:3,carisma:4,inteligencia:3,percep\u00E7\u00E3o:2,life:localStorage.vidaL,totalLife:50,sanidade:localStorage.sanidadeL,sanidadeTotal:20,img:"https://cdn.discordapp.com/attachments/831176302279000174/1017121615911329863/Lilith.jpeg",open:!1,atkBasico:"2 D8 +2",atkBasicoQuantidade:2,atkBasicoModificador:2,dado:8,passiva:"Sedu\xE7\xE3o por 2 rounds |carisma|",skill1Name:"Foguinho:",skill2Name:"Sugadinha:",skill1:"Fogo\u{1F525} |3 D8|",skill1Quantidade:3,skill1Modificador:0,skill2:"Da uma mamada |4 D8| fraqueza: |1 D4 +2|",skill2Quantidade:4,skill2Modificador:0,id:4},{name:"Mina",for\u00E7a:3,destreza:3,constitui\u00E7\u00E3o:3,carisma:1,inteligencia:2,percep\u00E7\u00E3o:3,life:localStorage.vidaM,totalLife:46,sanidade:localStorage.sanidadeM,sanidadeTotal:20,img:"https://cdn.discordapp.com/attachments/831176302279000174/1017121615529660476/Mina.jpeg",open:!1,atkBasico:"",atkBasicoQuantidade:0,atkBasicoModificador:0,dado:6,passiva:"Transforma em morcego\u{1F987}  |+5m| ",skill1Name:"Mordida:",skill2Name:"Brilho:",skill1:"Moide |4 D6 (100% de cura)|",skill1Quantidade:4,skill1Modificador:0,skill2:"Emite forte luz |retira aggro por 1 round|",skill2Quantidade:0,skill2Modificador:0,id:5},{name:"N\xEDxis",for\u00E7a:3,destreza:3,constitui\u00E7\u00E3o:3,carisma:3,inteligencia:4,percep\u00E7\u00E3o:3,life:localStorage.vidaN,totalLife:50,sanidade:localStorage.sanidadeN,sanidadeTotal:20,img:"https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2022/02/tilapia-e1645622421681.jpg",open:!1,dado:6,atkBasico:"1 D6",atkBasicoQuantidade:1,atkBasicoModificador:0,passiva:"Troca entre cauda e perna",skill1Name:"Olha a onda:",skill2Name:"Hipnose:",skill1:"Onda de \xE1gua\u{1F30A} |5 D6|",skill1Quantidade:5,skill1Modificador:0,skill2:"Hipnotiza por 2 turnos |DT:13|",skill2Quantidade:0,skill2Modificador:0,id:6},{name:"Zumb\xE3o",for\u00E7a:4,destreza:4,constitui\u00E7\u00E3o:3,carisma:3,inteligencia:-1,percep\u00E7\u00E3o:1,life:localStorage.vidaZ,totalLife:64,sanidade:localStorage.sanidadeZ,sanidadeTotal:20,img:"https://cdn.discordapp.com/attachments/831176302279000174/1017121616452391013/Zumbao.jpeg",open:!1,atkBasico:"5 D6 +2",atkBasicoQuantidade:5,atkBasicoModificador:2,dado:6,passiva:"Cura de machucado externo",skill1Name:"Mordida:",skill2Name:"Cura:",skill1:"Moide |5 D6 +2|",skill1Quantidade:5,skill1Modificador:2,skill2:"Curinha |5 D6|",skill2Quantidade:5,skill2Modificador:0,id:7}]),[k,m,u,I,w,x,oe,ne,L,n,g,o,y,A,$,S,H,q,W,X,le,se,z,ee,fe,Q,B,T,K,re,ye,Ke,pe,Se,Me,Je,_e,Be,Ie,Ue,Ce,Qe,Xe,ce,we,Ye,de,$e,De,Ne,xe,ge]}class ea extends Yl{constructor(t){super(),Xl(this,t,xl,$l,Dl,{},null,[-1,-1,-1])}}new ea({target:document.getElementById("app")});
