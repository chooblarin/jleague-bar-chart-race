function R(){}const de=n=>n;function Sn(n,e){for(const t in e)n[t]=e[t];return n}function jn(n){return n()}function Rn(){return Object.create(null)}function L(n){n.forEach(jn)}function he(n){return typeof n=="function"}function ge(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function me(n){return Object.keys(n).length===0}function xe(n,...e){if(n==null)return R;const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Et(n,e,t){n.$$.on_destroy.push(xe(e,t))}const Pn=typeof window!="undefined";let pe=Pn?()=>window.performance.now():()=>Date.now(),zn=Pn?n=>requestAnimationFrame(n):R;const C=new Set;function qn(n){C.forEach(e=>{e.c(n)||(C.delete(e),e.f())}),C.size!==0&&zn(qn)}function be(n){let e;return C.size===0&&zn(qn),{promise:new Promise(t=>{C.add(e={c:n,f:t})}),abort(){C.delete(e)}}}function ye(n,e){n.appendChild(e)}function St(n,e,t){n.insertBefore(e,t||null)}function Cn(n){n.parentNode.removeChild(n)}function we(n){return document.createElement(n)}function Hn(n){return document.createTextNode(n)}function jt(){return Hn(" ")}function Rt(){return Hn("")}function In(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function Pt(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function zt(n){return n===""?null:+n}function Me(n){return Array.from(n.childNodes)}function qt(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}function Ct(n,e){n.value=e==null?"":e}function Ht(n,e,t,r){n.style.setProperty(e,t,r?"important":"")}let Z;function _e(){if(Z===void 0){Z=!1;try{typeof window!="undefined"&&window.parent&&window.parent.document}catch{Z=!0}}return Z}function It(n,e){getComputedStyle(n).position==="static"&&(n.style.position="relative");const r=we("iframe");r.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),r.setAttribute("aria-hidden","true"),r.tabIndex=-1;const i=_e();let f;return i?(r.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",f=In(window,"message",o=>{o.source===r.contentWindow&&e()})):(r.src="about:blank",r.onload=()=>{f=In(r.contentWindow,"resize",e)}),ye(n,r),()=>{(i||f&&r.contentWindow)&&f(),Cn(r)}}let J;function K(n){J=n}function Fn(){if(!J)throw new Error("Function called outside component initialization");return J}function Ft(n,e){Fn().$$.context.set(n,e)}function Ot(n){return Fn().$$.context.get(n)}const T=[],On=[],Q=[],Dn=[],ke=Promise.resolve();let un=!1;function Ne(){un||(un=!0,ke.then(Ln))}function sn(n){Q.push(n)}let cn=!1;const ln=new Set;function Ln(){if(!cn){cn=!0;do{for(let n=0;n<T.length;n+=1){const e=T[n];K(e),ve(e.$$)}for(K(null),T.length=0;On.length;)On.pop()();for(let n=0;n<Q.length;n+=1){const e=Q[n];ln.has(e)||(ln.add(e),e())}Q.length=0}while(T.length);for(;Dn.length;)Dn.pop()();un=!1,cn=!1,ln.clear()}}function ve(n){if(n.fragment!==null){n.update(),L(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(sn)}}const nn=new Set;let P;function Dt(){P={r:0,c:[],p:P}}function Lt(){P.r||L(P.c),P=P.p}function Tn(n,e){n&&n.i&&(nn.delete(n),n.i(e))}function $e(n,e,t,r){if(n&&n.o){if(nn.has(n))return;nn.add(n),P.c.push(()=>{nn.delete(n),r&&(t&&n.d(1),r())}),n.o(e)}}function Tt(n,e){$e(n,1,1,()=>{e.delete(n.key)})}function Bt(n,e,t,r,i,f,o,a,s,u,d,c){let l=n.length,m=f.length,g=l;const M={};for(;g--;)M[n[g].key]=g;const b=[],_=new Map,S=new Map;for(g=m;g--;){const x=c(i,f,g),k=t(x);let y=o.get(k);y?r&&y.p(x,e):(y=u(k,x),y.c()),_.set(k,b[g]=y),k in M&&S.set(k,Math.abs(g-M[k]))}const v=new Set,D=new Set;function p(x){Tn(x,1),x.m(a,d),o.set(x.key,x),d=x.first,m--}for(;l&&m;){const x=b[m-1],k=n[l-1],y=x.key,z=k.key;x===k?(d=x.first,l--,m--):_.has(z)?!o.has(y)||v.has(y)?p(x):D.has(z)?l--:S.get(y)>S.get(z)?(D.add(y),p(x)):(v.add(z),l--):(s(k,o),l--)}for(;l--;){const x=n[l];_.has(x.key)||s(x,o)}for(;m;)p(b[m-1]);return b}function Gt(n){n&&n.c()}function Ae(n,e,t,r){const{fragment:i,on_mount:f,on_destroy:o,after_update:a}=n.$$;i&&i.m(e,t),r||sn(()=>{const s=f.map(jn).filter(he);o?o.push(...s):L(s),n.$$.on_mount=[]}),a.forEach(sn)}function Ee(n,e){const t=n.$$;t.fragment!==null&&(L(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Se(n,e){n.$$.dirty[0]===-1&&(T.push(n),Ne(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function Wt(n,e,t,r,i,f,o,a=[-1]){const s=J;K(n);const u=n.$$={fragment:null,ctx:null,props:f,update:R,not_equal:i,bound:Rn(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:Rn(),dirty:a,skip_bound:!1,root:e.target||s.$$.root};o&&o(u.root);let d=!1;if(u.ctx=t?t(n,e.props||{},(c,l,...m)=>{const g=m.length?m[0]:l;return u.ctx&&i(u.ctx[c],u.ctx[c]=g)&&(!u.skip_bound&&u.bound[c]&&u.bound[c](g),d&&Se(n,c)),l}):[],u.update(),d=!0,L(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){const c=Me(e.target);u.fragment&&u.fragment.l(c),c.forEach(Cn)}else u.fragment&&u.fragment.c();e.intro&&Tn(n.$$.fragment),Ae(n,e.target,e.anchor,e.customElement),Ln()}K(s)}class Vt{$destroy(){Ee(this,1),this.$destroy=R}$on(e,t){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const i=r.indexOf(t);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!me(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const H=[];function je(n,e=R){let t;const r=new Set;function i(a){if(ge(n,a)&&(n=a,t)){const s=!H.length;for(const u of r)u[1](),H.push(u,n);if(s){for(let u=0;u<H.length;u+=2)H[u][0](H[u+1]);H.length=0}}}function f(a){i(a(n))}function o(a,s=R){const u=[a,s];return r.add(u),r.size===1&&(t=e(i)||R),a(n),()=>{r.delete(u),r.size===0&&(t(),t=null)}}return{set:i,update:f,subscribe:o}}function Bn(n){return Object.prototype.toString.call(n)==="[object Date]"}function dn(n,e){if(n===e||n!==n)return()=>n;const t=typeof n;if(t!==typeof e||Array.isArray(n)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(n)){const r=e.map((i,f)=>dn(n[f],i));return i=>r.map(f=>f(i))}if(t==="object"){if(!n||!e)throw new Error("Object cannot be null");if(Bn(n)&&Bn(e)){n=n.getTime(),e=e.getTime();const f=e-n;return o=>new Date(n+o*f)}const r=Object.keys(e),i={};return r.forEach(f=>{i[f]=dn(n[f],e[f])}),f=>{const o={};return r.forEach(a=>{o[a]=i[a](f)}),o}}if(t==="number"){const r=e-n;return i=>n+i*r}throw new Error(`Cannot interpolate ${t} values`)}function Xt(n,e={}){const t=je(n);let r,i=n;function f(o,a){if(n==null)return t.set(n=o),Promise.resolve();i=o;let s=r,u=!1,{delay:d=0,duration:c=400,easing:l=de,interpolate:m=dn}=Sn(Sn({},e),a);if(c===0)return s&&(s.abort(),s=null),t.set(n=i),Promise.resolve();const g=pe()+d;let M;return r=be(b=>{if(b<g)return!0;u||(M=m(n,o),typeof c=="function"&&(c=c(n,o)),u=!0),s&&(s.abort(),s=null);const _=b-g;return _>c?(t.set(n=o),!1):(t.set(n=M(l(_/c))),!0)}),r.promise}return{set:f,update:(o,a)=>f(o(i,n),a),subscribe:t.subscribe}}function hn(n,e){return n==null||e==null?NaN:n<e?-1:n>e?1:n>=e?0:NaN}function Gn(n){let e=n,t=n,r=n;n.length!==2&&(e=(a,s)=>n(a)-s,t=hn,r=(a,s)=>hn(n(a),s));function i(a,s,u=0,d=a.length){if(u<d){if(t(s,s)!==0)return d;do{const c=u+d>>>1;r(a[c],s)<0?u=c+1:d=c}while(u<d)}return u}function f(a,s,u=0,d=a.length){if(u<d){if(t(s,s)!==0)return d;do{const c=u+d>>>1;r(a[c],s)<=0?u=c+1:d=c}while(u<d)}return u}function o(a,s,u=0,d=a.length){const c=i(a,s,u,d-1);return c>u&&e(a[c-1],s)>-e(a[c],s)?c-1:c}return{left:i,center:o,right:f}}function Re(n){return n===null?NaN:+n}const Pe=Gn(hn),ze=Pe.right;Gn(Re).center;var qe=ze,gn=Math.sqrt(50),mn=Math.sqrt(10),xn=Math.sqrt(2);function Ce(n,e,t){var r,i=-1,f,o,a;if(e=+e,n=+n,t=+t,n===e&&t>0)return[n];if((r=e<n)&&(f=n,n=e,e=f),(a=Wn(n,e,t))===0||!isFinite(a))return[];if(a>0){let s=Math.round(n/a),u=Math.round(e/a);for(s*a<n&&++s,u*a>e&&--u,o=new Array(f=u-s+1);++i<f;)o[i]=(s+i)*a}else{a=-a;let s=Math.round(n*a),u=Math.round(e*a);for(s/a<n&&++s,u/a>e&&--u,o=new Array(f=u-s+1);++i<f;)o[i]=(s+i)/a}return r&&o.reverse(),o}function Wn(n,e,t){var r=(e-n)/Math.max(0,t),i=Math.floor(Math.log(r)/Math.LN10),f=r/Math.pow(10,i);return i>=0?(f>=gn?10:f>=mn?5:f>=xn?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(f>=gn?10:f>=mn?5:f>=xn?2:1)}function He(n,e,t){var r=Math.abs(e-n)/Math.max(0,t),i=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),f=r/i;return f>=gn?i*=10:f>=mn?i*=5:f>=xn&&(i*=2),e<n?-i:i}function pn(n,e,t){n.prototype=e.prototype=t,t.constructor=n}function Vn(n,e){var t=Object.create(n.prototype);for(var r in e)t[r]=e[r];return t}function B(){}var G=.7,en=1/G,I="\\s*([+-]?\\d+)\\s*",W="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",$="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Ie=/^#([0-9a-f]{3,8})$/,Fe=new RegExp("^rgb\\("+[I,I,I]+"\\)$"),Oe=new RegExp("^rgb\\("+[$,$,$]+"\\)$"),De=new RegExp("^rgba\\("+[I,I,I,W]+"\\)$"),Le=new RegExp("^rgba\\("+[$,$,$,W]+"\\)$"),Te=new RegExp("^hsl\\("+[W,$,$]+"\\)$"),Be=new RegExp("^hsla\\("+[W,$,$,W]+"\\)$"),Xn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};pn(B,V,{copy:function(n){return Object.assign(new this.constructor,this,n)},displayable:function(){return this.rgb().displayable()},hex:Un,formatHex:Un,formatHsl:Ge,formatRgb:Yn,toString:Yn});function Un(){return this.rgb().formatHex()}function Ge(){return ne(this).formatHsl()}function Yn(){return this.rgb().formatRgb()}function V(n){var e,t;return n=(n+"").trim().toLowerCase(),(e=Ie.exec(n))?(t=e[1].length,e=parseInt(e[1],16),t===6?Zn(e):t===3?new w(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):t===8?tn(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):t===4?tn(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=Fe.exec(n))?new w(e[1],e[2],e[3],1):(e=Oe.exec(n))?new w(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=De.exec(n))?tn(e[1],e[2],e[3],e[4]):(e=Le.exec(n))?tn(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=Te.exec(n))?Qn(e[1],e[2]/100,e[3]/100,1):(e=Be.exec(n))?Qn(e[1],e[2]/100,e[3]/100,e[4]):Xn.hasOwnProperty(n)?Zn(Xn[n]):n==="transparent"?new w(NaN,NaN,NaN,0):null}function Zn(n){return new w(n>>16&255,n>>8&255,n&255,1)}function tn(n,e,t,r){return r<=0&&(n=e=t=NaN),new w(n,e,t,r)}function We(n){return n instanceof B||(n=V(n)),n?(n=n.rgb(),new w(n.r,n.g,n.b,n.opacity)):new w}function bn(n,e,t,r){return arguments.length===1?We(n):new w(n,e,t,r==null?1:r)}function w(n,e,t,r){this.r=+n,this.g=+e,this.b=+t,this.opacity=+r}pn(w,bn,Vn(B,{brighter:function(n){return n=n==null?en:Math.pow(en,n),new w(this.r*n,this.g*n,this.b*n,this.opacity)},darker:function(n){return n=n==null?G:Math.pow(G,n),new w(this.r*n,this.g*n,this.b*n,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Jn,formatHex:Jn,formatRgb:Kn,toString:Kn}));function Jn(){return"#"+yn(this.r)+yn(this.g)+yn(this.b)}function Kn(){var n=this.opacity;return n=isNaN(n)?1:Math.max(0,Math.min(1,n)),(n===1?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(n===1?")":", "+n+")")}function yn(n){return n=Math.max(0,Math.min(255,Math.round(n)||0)),(n<16?"0":"")+n.toString(16)}function Qn(n,e,t,r){return r<=0?n=e=t=NaN:t<=0||t>=1?n=e=NaN:e<=0&&(n=NaN),new A(n,e,t,r)}function ne(n){if(n instanceof A)return new A(n.h,n.s,n.l,n.opacity);if(n instanceof B||(n=V(n)),!n)return new A;if(n instanceof A)return n;n=n.rgb();var e=n.r/255,t=n.g/255,r=n.b/255,i=Math.min(e,t,r),f=Math.max(e,t,r),o=NaN,a=f-i,s=(f+i)/2;return a?(e===f?o=(t-r)/a+(t<r)*6:t===f?o=(r-e)/a+2:o=(e-t)/a+4,a/=s<.5?f+i:2-f-i,o*=60):a=s>0&&s<1?0:o,new A(o,a,s,n.opacity)}function Ve(n,e,t,r){return arguments.length===1?ne(n):new A(n,e,t,r==null?1:r)}function A(n,e,t,r){this.h=+n,this.s=+e,this.l=+t,this.opacity=+r}pn(A,Ve,Vn(B,{brighter:function(n){return n=n==null?en:Math.pow(en,n),new A(this.h,this.s,this.l*n,this.opacity)},darker:function(n){return n=n==null?G:Math.pow(G,n),new A(this.h,this.s,this.l*n,this.opacity)},rgb:function(){var n=this.h%360+(this.h<0)*360,e=isNaN(n)||isNaN(this.s)?0:this.s,t=this.l,r=t+(t<.5?t:1-t)*e,i=2*t-r;return new w(wn(n>=240?n-240:n+120,i,r),wn(n,i,r),wn(n<120?n+240:n-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var n=this.opacity;return n=isNaN(n)?1:Math.max(0,Math.min(1,n)),(n===1?"hsl(":"hsla(")+(this.h||0)+", "+(this.s||0)*100+"%, "+(this.l||0)*100+"%"+(n===1?")":", "+n+")")}}));function wn(n,e,t){return(n<60?e+(t-e)*n/60:n<180?t:n<240?e+(t-e)*(240-n)/60:e)*255}var Mn=n=>()=>n;function Xe(n,e){return function(t){return n+t*e}}function Ue(n,e,t){return n=Math.pow(n,t),e=Math.pow(e,t)-n,t=1/t,function(r){return Math.pow(n+r*e,t)}}function Ye(n){return(n=+n)==1?ee:function(e,t){return t-e?Ue(e,t,n):Mn(isNaN(e)?t:e)}}function ee(n,e){var t=e-n;return t?Xe(n,t):Mn(isNaN(n)?e:n)}var te=function n(e){var t=Ye(e);function r(i,f){var o=t((i=bn(i)).r,(f=bn(f)).r),a=t(i.g,f.g),s=t(i.b,f.b),u=ee(i.opacity,f.opacity);return function(d){return i.r=o(d),i.g=a(d),i.b=s(d),i.opacity=u(d),i+""}}return r.gamma=n,r}(1);function Ze(n,e){e||(e=[]);var t=n?Math.min(e.length,n.length):0,r=e.slice(),i;return function(f){for(i=0;i<t;++i)r[i]=n[i]*(1-f)+e[i]*f;return r}}function Je(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ke(n,e){var t=e?e.length:0,r=n?Math.min(t,n.length):0,i=new Array(r),f=new Array(t),o;for(o=0;o<r;++o)i[o]=Nn(n[o],e[o]);for(;o<t;++o)f[o]=e[o];return function(a){for(o=0;o<r;++o)f[o]=i[o](a);return f}}function Qe(n,e){var t=new Date;return n=+n,e=+e,function(r){return t.setTime(n*(1-r)+e*r),t}}function rn(n,e){return n=+n,e=+e,function(t){return n*(1-t)+e*t}}function nt(n,e){var t={},r={},i;(n===null||typeof n!="object")&&(n={}),(e===null||typeof e!="object")&&(e={});for(i in e)i in n?t[i]=Nn(n[i],e[i]):r[i]=e[i];return function(f){for(i in t)r[i]=t[i](f);return r}}var _n=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,kn=new RegExp(_n.source,"g");function et(n){return function(){return n}}function tt(n){return function(e){return n(e)+""}}function rt(n,e){var t=_n.lastIndex=kn.lastIndex=0,r,i,f,o=-1,a=[],s=[];for(n=n+"",e=e+"";(r=_n.exec(n))&&(i=kn.exec(e));)(f=i.index)>t&&(f=e.slice(t,f),a[o]?a[o]+=f:a[++o]=f),(r=r[0])===(i=i[0])?a[o]?a[o]+=i:a[++o]=i:(a[++o]=null,s.push({i:o,x:rn(r,i)})),t=kn.lastIndex;return t<e.length&&(f=e.slice(t),a[o]?a[o]+=f:a[++o]=f),a.length<2?s[0]?tt(s[0].x):et(e):(e=s.length,function(u){for(var d=0,c;d<e;++d)a[(c=s[d]).i]=c.x(u);return a.join("")})}function Nn(n,e){var t=typeof e,r;return e==null||t==="boolean"?Mn(e):(t==="number"?rn:t==="string"?(r=V(e))?(e=r,te):rt:e instanceof V?te:e instanceof Date?Qe:Je(e)?Ze:Array.isArray(e)?Ke:typeof e.valueOf!="function"&&typeof e.toString!="function"||isNaN(e)?nt:rn)(n,e)}function it(n,e){return n=+n,e=+e,function(t){return Math.round(n*(1-t)+e*t)}}function ft(n){return Math.abs(n=Math.round(n))>=1e21?n.toLocaleString("en").replace(/,/g,""):n.toString(10)}function fn(n,e){if((t=(n=e?n.toExponential(e-1):n.toExponential()).indexOf("e"))<0)return null;var t,r=n.slice(0,t);return[r.length>1?r[0]+r.slice(2):r,+n.slice(t+1)]}function F(n){return n=fn(Math.abs(n)),n?n[1]:NaN}function ot(n,e){return function(t,r){for(var i=t.length,f=[],o=0,a=n[0],s=0;i>0&&a>0&&(s+a+1>r&&(a=Math.max(1,r-s)),f.push(t.substring(i-=a,i+a)),!((s+=a+1)>r));)a=n[o=(o+1)%n.length];return f.reverse().join(e)}}function at(n){return function(e){return e.replace(/[0-9]/g,function(t){return n[+t]})}}var ut=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function on(n){if(!(e=ut.exec(n)))throw new Error("invalid format: "+n);var e;return new vn({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}on.prototype=vn.prototype;function vn(n){this.fill=n.fill===void 0?" ":n.fill+"",this.align=n.align===void 0?">":n.align+"",this.sign=n.sign===void 0?"-":n.sign+"",this.symbol=n.symbol===void 0?"":n.symbol+"",this.zero=!!n.zero,this.width=n.width===void 0?void 0:+n.width,this.comma=!!n.comma,this.precision=n.precision===void 0?void 0:+n.precision,this.trim=!!n.trim,this.type=n.type===void 0?"":n.type+""}vn.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function st(n){n:for(var e=n.length,t=1,r=-1,i;t<e;++t)switch(n[t]){case".":r=i=t;break;case"0":r===0&&(r=t),i=t;break;default:if(!+n[t])break n;r>0&&(r=0);break}return r>0?n.slice(0,r)+n.slice(i+1):n}var re;function ct(n,e){var t=fn(n,e);if(!t)return n+"";var r=t[0],i=t[1],f=i-(re=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,o=r.length;return f===o?r:f>o?r+new Array(f-o+1).join("0"):f>0?r.slice(0,f)+"."+r.slice(f):"0."+new Array(1-f).join("0")+fn(n,Math.max(0,e+f-1))[0]}function ie(n,e){var t=fn(n,e);if(!t)return n+"";var r=t[0],i=t[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}var fe={"%":(n,e)=>(n*100).toFixed(e),b:n=>Math.round(n).toString(2),c:n=>n+"",d:ft,e:(n,e)=>n.toExponential(e),f:(n,e)=>n.toFixed(e),g:(n,e)=>n.toPrecision(e),o:n=>Math.round(n).toString(8),p:(n,e)=>ie(n*100,e),r:ie,s:ct,X:n=>Math.round(n).toString(16).toUpperCase(),x:n=>Math.round(n).toString(16)};function oe(n){return n}var ae=Array.prototype.map,ue=["y","z","a","f","p","n","\xB5","m","","k","M","G","T","P","E","Z","Y"];function lt(n){var e=n.grouping===void 0||n.thousands===void 0?oe:ot(ae.call(n.grouping,Number),n.thousands+""),t=n.currency===void 0?"":n.currency[0]+"",r=n.currency===void 0?"":n.currency[1]+"",i=n.decimal===void 0?".":n.decimal+"",f=n.numerals===void 0?oe:at(ae.call(n.numerals,String)),o=n.percent===void 0?"%":n.percent+"",a=n.minus===void 0?"\u2212":n.minus+"",s=n.nan===void 0?"NaN":n.nan+"";function u(c){c=on(c);var l=c.fill,m=c.align,g=c.sign,M=c.symbol,b=c.zero,_=c.width,S=c.comma,v=c.precision,D=c.trim,p=c.type;p==="n"?(S=!0,p="g"):fe[p]||(v===void 0&&(v=12),D=!0,p="g"),(b||l==="0"&&m==="=")&&(b=!0,l="0",m="=");var x=M==="$"?t:M==="#"&&/[boxX]/.test(p)?"0"+p.toLowerCase():"",k=M==="$"?r:/[%p]/.test(p)?o:"",y=fe[p],z=/[defgprs%]/.test(p);v=v===void 0?6:/[gprs]/.test(p)?Math.max(1,Math.min(21,v)):Math.max(0,Math.min(20,v));function An(h){var j=x,N=k,q,En,X;if(p==="c")N=y(h)+N,h="";else{h=+h;var U=h<0||1/h<0;if(h=isNaN(h)?s:y(Math.abs(h),v),D&&(h=st(h)),U&&+h==0&&g!=="+"&&(U=!1),j=(U?g==="("?g:a:g==="-"||g==="("?"":g)+j,N=(p==="s"?ue[8+re/3]:"")+N+(U&&g==="("?")":""),z){for(q=-1,En=h.length;++q<En;)if(X=h.charCodeAt(q),48>X||X>57){N=(X===46?i+h.slice(q+1):h.slice(q))+N,h=h.slice(0,q);break}}}S&&!b&&(h=e(h,1/0));var Y=j.length+h.length+N.length,E=Y<_?new Array(_-Y+1).join(l):"";switch(S&&b&&(h=e(E+h,E.length?_-N.length:1/0),E=""),m){case"<":h=j+h+N+E;break;case"=":h=j+E+h+N;break;case"^":h=E.slice(0,Y=E.length>>1)+j+h+N+E.slice(Y);break;default:h=E+j+h+N;break}return f(h)}return An.toString=function(){return c+""},An}function d(c,l){var m=u((c=on(c),c.type="f",c)),g=Math.max(-8,Math.min(8,Math.floor(F(l)/3)))*3,M=Math.pow(10,-g),b=ue[8+g/3];return function(_){return m(M*_)+b}}return{format:u,formatPrefix:d}}var an,se,ce;dt({thousands:",",grouping:[3],currency:["$",""]});function dt(n){return an=lt(n),se=an.format,ce=an.formatPrefix,an}function ht(n){return Math.max(0,-F(Math.abs(n)))}function gt(n,e){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(F(e)/3)))*3-F(Math.abs(n)))}function mt(n,e){return n=Math.abs(n),e=Math.abs(e)-n,Math.max(0,F(e)-F(n))+1}function xt(n,e){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(e).domain(n);break}return this}function pt(n){return function(){return n}}function bt(n){return+n}var le=[0,1];function O(n){return n}function $n(n,e){return(e-=n=+n)?function(t){return(t-n)/e}:pt(isNaN(e)?NaN:.5)}function yt(n,e){var t;return n>e&&(t=n,n=e,e=t),function(r){return Math.max(n,Math.min(e,r))}}function wt(n,e,t){var r=n[0],i=n[1],f=e[0],o=e[1];return i<r?(r=$n(i,r),f=t(o,f)):(r=$n(r,i),f=t(f,o)),function(a){return f(r(a))}}function Mt(n,e,t){var r=Math.min(n.length,e.length)-1,i=new Array(r),f=new Array(r),o=-1;for(n[r]<n[0]&&(n=n.slice().reverse(),e=e.slice().reverse());++o<r;)i[o]=$n(n[o],n[o+1]),f[o]=t(e[o],e[o+1]);return function(a){var s=qe(n,a,1,r)-1;return f[s](i[s](a))}}function _t(n,e){return e.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function kt(){var n=le,e=le,t=Nn,r,i,f,o=O,a,s,u;function d(){var l=Math.min(n.length,e.length);return o!==O&&(o=yt(n[0],n[l-1])),a=l>2?Mt:wt,s=u=null,c}function c(l){return l==null||isNaN(l=+l)?f:(s||(s=a(n.map(r),e,t)))(r(o(l)))}return c.invert=function(l){return o(i((u||(u=a(e,n.map(r),rn)))(l)))},c.domain=function(l){return arguments.length?(n=Array.from(l,bt),d()):n.slice()},c.range=function(l){return arguments.length?(e=Array.from(l),d()):e.slice()},c.rangeRound=function(l){return e=Array.from(l),t=it,d()},c.clamp=function(l){return arguments.length?(o=l?!0:O,d()):o!==O},c.interpolate=function(l){return arguments.length?(t=l,d()):t},c.unknown=function(l){return arguments.length?(f=l,c):f},function(l,m){return r=l,i=m,d()}}function Nt(){return kt()(O,O)}function vt(n,e,t,r){var i=He(n,e,t),f;switch(r=on(r==null?",f":r),r.type){case"s":{var o=Math.max(Math.abs(n),Math.abs(e));return r.precision==null&&!isNaN(f=gt(i,o))&&(r.precision=f),ce(r,o)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(f=mt(i,Math.max(Math.abs(n),Math.abs(e))))&&(r.precision=f-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(f=ht(i))&&(r.precision=f-(r.type==="%")*2);break}}return se(r)}function $t(n){var e=n.domain;return n.ticks=function(t){var r=e();return Ce(r[0],r[r.length-1],t==null?10:t)},n.tickFormat=function(t,r){var i=e();return vt(i[0],i[i.length-1],t==null?10:t,r)},n.nice=function(t){t==null&&(t=10);var r=e(),i=0,f=r.length-1,o=r[i],a=r[f],s,u,d=10;for(a<o&&(u=o,o=a,a=u,u=i,i=f,f=u);d-- >0;){if(u=Wn(o,a,t),u===s)return r[i]=o,r[f]=a,e(r);if(u>0)o=Math.floor(o/u)*u,a=Math.ceil(a/u)*u;else if(u<0)o=Math.ceil(o*u)/u,a=Math.floor(a*u)/u;else break;s=u}return n},n}function At(){var n=Nt();return n.copy=function(){return _t(n,At())},xt.apply(n,arguments),$t(n)}export{jt as A,sn as B,It as C,Xt as D,Ct as E,In as F,L as G,zt as H,Vt as S,ge as a,Pt as b,Ht as c,St as d,we as e,ye as f,Ot as g,qt as h,Wt as i,Cn as j,Rt as k,At as l,Gt as m,R as n,Ae as o,Tn as p,$e as q,Ee as r,Ft as s,Hn as t,Dt as u,Bt as v,je as w,Lt as x,Et as y,Tt as z};