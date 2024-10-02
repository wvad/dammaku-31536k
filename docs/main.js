/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var e,t,r,n,o={618:(e,t,r)=>{r.a(e,(async(e,n)=>{try{r.d(t,{KL:()=>c,_O:()=>a,hp:()=>f,iV:()=>i});var o=document.getElementById("canvas"),a=o.getContext("2d"),i=function(){a.fillStyle="#352a2a",a.fillRect(0,0,o.width,o.height)},c=o.height=1918,f=o.width=1644;o.addEventListener("contextmenu",(function(e){return e.preventDefault()})),await new Promise((function(e){return window.addEventListener("load",e,{once:!0})}));var u=document.documentElement,l=u.clientWidth,s=u.clientHeight,h=u.style;7*l<6*s?o.style.width=l-4+"px":o.style.height=s-3+"px",h.width=l+"px",await new Promise((function(e){return setTimeout(e,1)}));var p=o.getBoundingClientRect();p.top,p.left,p.height,p.width,n()}catch(e){n(e)}}),1)},737:(e,t,r)=>{r.a(e,(async(e,t)=>{try{var n=r(999),o=r(963),a=r(257),i=r(486),c=r(618),f=e([n,o,a,i,c]);[n,o,a,i,c]=f.then?(await f)():f;var u=Math.atan,l=Math.PI,s=Math.random,h=Math.sin,p=Math.cos;function D(e,t,r,n){var o=u((n-t)/(r-e));return r<e&&(o+=l),180*o/l}for(var v=performance.now()+200,y=2e4,d=25e3,m=45e3,g=function(){var e=1600*w+7e3;if(y<e)return 1;setTimeout((function(){for(var t=500+644*s(),r=100+220*s(),n=(0,a.G2)(),c=n.x,f=n.y,u=-2;u<3;u++)i.G9.createBuffer({x:t,y:r,size:9,angle:(D(t,r,c,f)+30*u)*l/180,speed:2,color:"#2fed05",startTime:v+e}).forEach((function(e){return(0,o.lu)(e)}))}),e)},w=0;!g();w++);for(var b=function(){var e=200*_+15e3;if(y<e)return 1;setTimeout((function(){i.q$.createBuffer({x:822,y:150+20*s(),size:9,angle:360*s()*l/180,speed:2.5,color:"#0229e8",startTime:v+e}).forEach((function(e){return(0,o.lu)(e)}))}),e)},_=0;!b();_++);for(var O=function(){var e=1900*x+3e4;if(y<e)return 1;setTimeout((function(){var t=(0,a.G2)(),r=t.x,n=t.y,f=c.hp-25,u=s()*(.6*c.KL)+15;i.G9.createBuffer({x:f,y:u,size:8,angle:D(f,u,r,n)*l/180,speed:1.3,color:"#ffff00",startTime:v+e}).forEach((function(e){return(0,o.lu)(e)}));var h=s()*(.6*c.KL)+15;i.G9.createBuffer({x:25,y:h,size:8,angle:D(25,h,r,n)*l/180,speed:1.3,color:"#ffff00",startTime:v+e}).forEach((function(e){return(0,o.lu)(e)}))}),e)},x=0;!O();x++);for(var S=function(e){var t=500*e;if(y<t)return 1;setTimeout((function(){for(var r=2*e%360,n=0;n<20;n++)i.G9.createBuffer({x:411,y:350,size:9,angle:(18*n+r)*l/180,speed:2.7,color:"#f00c41",startTime:v+t}).forEach((function(e){return(0,o.lu)(e)})),i.G9.createBuffer({x:1233,y:350,size:9,angle:(18*n-r)/180*l,speed:2.7,color:"#f00c41",startTime:v+t}).forEach((function(e){return(0,o.lu)(e)}))}),t)},W=0;!S(W);W++);for(var k=function(e){var t=d+850*e;if(m<t)return 1;setTimeout((function(){for(var r=e+13*h(e/5),n=0;n<24;n++)for(var a=0,c=[3.4,3.8,4.2];a<c.length;a++){var f=c[a];i.G9.createBuffer({x:411,y:350,size:9,angle:(15*n+r)*l/180,speed:f,color:"#f00c41",startTime:v+t}).forEach((function(e){return(0,o.lu)(e)})),i.G9.createBuffer({x:1233,y:350,size:9,angle:(15*n-r)/180*l,speed:f,color:"#f00c41",startTime:v+t}).forEach((function(e){return(0,o.lu)(e)}))}}),t)},P=0;!k(P);P++);for(var E=function(){var e=d+1e3*L;if(m<e)return 1;setTimeout((function(){i.q$.createBuffer({x:411,y:350+10*s(),size:9,angle:360*s()*l/180,speed:3.4,color:"#0229e8",startTime:v+e}).forEach((function(e){return(0,o.lu)(e)})),i.q$.createBuffer({x:1233,y:350+10*s(),size:9,angle:360*s()*l/180,speed:3.4,color:"#0229e8",startTime:v+e}).forEach((function(e){return(0,o.lu)(e)}))}),e)},L=0;!E();L++);for(var T=function(){var e=d+183*G;if(m<e)return 1;var t=822+530*h(G*l/14),r=560+530*-p(G*l/14);setTimeout((function(){var n=(0,a.G2)(),c=n.x,f=n.y;i.G9.createBuffer({x:t,y:r,size:25,angle:D(t,r,c,f)*l/180,speed:3,color:"#ffff009f",startTime:v+e}).forEach((function(e){return(0,o.lu)(e)}))}),e)},G=0;!T();G++);for(var j=function(){var e=5e4+598*C;if(6e4<e)return 1;setTimeout((function(){for(var t=500+644*s(),r=50+220*s(),n=(0,a.G2)(),c=n.x,f=n.y,u=-4;u<5;u++)i.G9.createBuffer({x:t,y:r,size:9,angle:(D(t,r,c,f)+20*u)*l/180,speed:3.485,color:"#2fed05",startTime:v+e}).forEach((function(e){return(0,o.lu)(e)})),i.G9.createBuffer({x:t,y:r,size:9,angle:(D(t,r,c,f)+20*u)*l/180,speed:3.992,color:"#2fed05",startTime:v+e}).forEach((function(e){return(0,o.lu)(e)}))}),e)},C=0;!j();C++);for(var z=function(){var e=5e4+138*I,t=5*I%360;if(6e4<e)return 1;setTimeout((function(){for(var r=0;r<360;r+=90)for(var n=-2;n<3;n++)i.G9.createBuffer({x:657,y:122,size:9,angle:(t+r+13*n)*l/180,speed:6.1,color:"#0229e8",startTime:v+e}).forEach((function(e){return(0,o.lu)(e)}))}),e)},I=0;!z();I++);for(var R=function(){var e=6e4+598*A;if(7e4<e)return 1;setTimeout((function(){for(var t=500+644*s(),r=50+220*s(),n=(0,a.G2)(),c=n.x,f=n.y,u=-4;u<5;u++)i.G9.createBuffer({x:t,y:r,size:9,angle:(D(t,r,c,f)+20*u)*l/180,speed:3.485,color:"#8aff24",startTime:v+e}).forEach((function(e){return(0,o.lu)(e)})),i.G9.createBuffer({x:t,y:r,size:9,angle:(D(t,r,c,f)+20*u)*l/180,speed:3.992,color:"#8aff24",startTime:v+e}).forEach((function(e){return(0,o.lu)(e)}))}),e)},A=0;!R();A++);for(var M=function(){var e=0+113*B;if(y<e)return 1;var t=100,r=25.7*B%360,n=987+t*h(B*l/7),c=131+t*-p(B*l/7),f=987+t*-h(B*l/7),u=131+t*-p(B*l/7);setTimeout((function(){for(var t=(0,a.G2)(),s=(t.x,t.y,0);s<360;s+=90)i.G9.createBuffer({x:n,y:c,size:8,angle:(r+s)*l/180,speed:5,color:"#ffff009f",startTime:v+e}).forEach((function(e){return(0,o.lu)(e)})),i.G9.createBuffer({x:f,y:u,size:8,angle:(360-r+s)*l/180,speed:5,color:"#ffff009f",startTime:v+e}).forEach((function(e){return(0,o.lu)(e)}))}),e)},B=0;!M();B++);(0,n.y)();var K=document.createElement("audio");document.body.appendChild(K),K.src="bgm_.mp3",K.loop=!0,K.volume=.125,window.addEventListener("keydown",(function(){K.play()}),{once:!0}),function(){var e=n,t=n;function r(){var e=["WPNcO8o3W5FcS8kqhSkrzSk1Aa3dV8kw","WPFcL8o/dWzxW5ddQmklW40U","W4ZdNSkjWPa","jLxcG8om","W4LQDSo4prxcS0XilwRcSmor","pfxcRCkqW4ylqSogWP8","Emo0C8oG","WQKRcSoj","ECk4fcW","u0ddVaC","wIqaW4q","wq9tzW","tmk1WONdQG","WOZcPCoSWRO","uCoVWP/dVW","w8oYCmoX","WRZcLb7dId/cMN91bG","W7ldILpdHG","WP7cK8o8cWSSWPVdR8kRW5qDi0i","uK5jl2qMcSkkW7a","t8o2rvBdKbngumovWQyI","WQlcLh4","WPxcSmoNWQa","EmkdWRJdVSoWjmolWPFcG8kQfSoBuG","W4xdR8oCnq","v8o7du3dOmoWWOyMWP5L","mmkjW4yNBfBdQYa7ffhcSLi","Bv/cJCoIWPPbWPqdW51ue1/cLW","WOhcSmkACSosWO5XsSoQxG","WOTMASoM","W5xcH8kdAq","Bv3cJSoUWPHiWPPjW7rlox3cPYe","W7PrvCkwWOurASkRrISxWQSV","vmo8WONdQa","WP3cKmo3Ex9oW6ldSmkP","W7pdTLxcIW","cmkyueaCjIVcO2nkW5xdSCog","WOD0DfC","tCojW7OZWOi9WO7cUrJdISkgaSkk"];return(r=function(){return e})()}function n(e,t){var o=r();return(n=function(t,r){var a=o[t-=473];void 0===n.geDduC&&(n.IyeOUh=function(e,t){var r,n,o=[],a=0,i="";for(e=function(e){for(var t,r,n="",o="",a=0,i=0;r=e.charAt(i++);~r&&(t=a%4?64*t+r:r,a++%4)&&(n+=String.fromCharCode(255&t>>(-2*a&6))))r="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(r);for(var c=0,f=n.length;c<f;c++)o+="%"+("00"+n.charCodeAt(c).toString(16)).slice(-2);return decodeURIComponent(o)}(e),n=0;n<256;n++)o[n]=n;for(n=0;n<256;n++)a=(a+o[n]+t.charCodeAt(n%t.length))%256,r=o[n],o[n]=o[a],o[a]=r;n=0,a=0;for(var c=0;c<e.length;c++)a=(a+o[n=(n+1)%256])%256,r=o[n],o[n]=o[a],o[a]=r,i+=String.fromCharCode(e.charCodeAt(c)^o[(o[n]+o[a])%256]);return i},e=arguments,n.geDduC=!0);var i=t+o[0],c=e[i];return c?a=c:(void 0===n.IXrsep&&(n.IXrsep=!0),a=n.IyeOUh(a,r),e[i]=a),a})(e,t)}(function(){for(var e=n,t=n,o=r();;)try{if(914809==parseInt(e(508,"k]dR"))/1+parseInt(e(509,"ofM5"))/2*(parseInt(t(476,")ioe"))/3)+parseInt(t(478,"&xt3"))/4+parseInt(t(510,"U^0d"))/5*(-parseInt(e(485,"k]dR"))/6)+-parseInt(e(483,"C3jG"))/7+parseInt(e(490,"wegU"))/8+-parseInt(t(489,"n%&G"))/9)break;o.push(o.shift())}catch(e){o.push(o.shift())}})(),window.open,canvas[e(500,"(WrD")+e(473,"(t*p")+e(505,"LdYK")+t(492,"KJMw")](e(481,"4fl7")+t(493,"1Cz3")+t(511,"9)B3"),(function(){return window[t(503,"(t*p")](t(502,"f60M")+t(480,"^RaR")+e(507,"8uO]")+e(504,"f60M")+e(498,"8r&C")+t(486,"8uO]")+t(497,"C3jG"),"",t(475,"D%Ap")+e(484,"f60M")+t(488,"8&ZD")+e(496,"LdYK")+t(501,"7[K(")+t(499,"H*AR"))}))}(),t()}catch(q){t(q)}}))},999:(e,t,r)=>{r.a(e,(async(e,n)=>{try{r.d(t,{y:()=>y});var o=r(257),a=r(963),i=r(618),c=e([o,a,i]);[o,a,i]=c.then?(await c)():c;var f=performance.now.bind(performance),u=globalThis.requestAnimationFrame,l=!1;Reflect.defineProperty(globalThis,"DAMMAKU_DEBUG",{__proto__:null,get:function(){return l},set:function(e){return l=!!e}});var s=Object.freeze({__proto__:null,hit:function(){if(!l)return console.error("Hit!"),(0,o.xo)(),!0},grazed:function(){console.info("Graze!")}}),h=-1,p=NaN;Reflect.defineProperty(globalThis,"FPS",{__proto__:null,get:function(){return 1e3/p>>>0}});var v=null;Reflect.defineProperty(globalThis,"APP",{__proto__:null,get:function(){return v>>>0}});var y=function(){!function e(){var t=f();p=t-h,h=t,(0,i.iV)(),(0,o.T1)(),(0,o.ut)(),f(),(0,a.Aj)(s),v=f()-t,(0,o.Zc)(),u(e)}()};n()}catch(e){n(e)}}))},257:(e,t,r)=>{r.a(e,(async(e,n)=>{try{r.d(t,{G2:()=>O,T1:()=>W,Zc:()=>k,ut:()=>S,xo:()=>x});var o=r(618),a=e([o]);function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function E(){E=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",f=a.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof m?t:m,i=Object.create(a.prototype),c=new j(n||[]);return o(i,"_invoke",{value:k(e,r,c)}),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=l;var h="suspendedStart",p="suspendedYield",v="executing",y="completed",d={};function m(){}function g(){}function w(){}var b={};u(b,i,(function(){return this}));var _=Object.getPrototypeOf,O=_&&_(_(C([])));O&&O!==r&&n.call(O,i)&&(b=O);var x=w.prototype=m.prototype=Object.create(b);function S(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function W(e,t){function r(o,a,i,c){var f=s(e[o],e,a);if("throw"!==f.type){var u=f.arg,l=u.value;return l&&"object"==P(l)&&n.call(l,"__await")?t.resolve(l.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(l).then((function(e){u.value=e,i(u)}),(function(e){return r("throw",e,i,c)}))}c(f.arg)}var a;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return a=a?a.then(o,o):o()}})}function k(t,r,n){var o=h;return function(a,i){if(o===v)throw Error("Generator is already running");if(o===y){if("throw"===a)throw i;return{value:e,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var f=L(c,n);if(f){if(f===d)continue;return f}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var u=s(t,r,n);if("normal"===u.type){if(o=n.done?y:p,u.arg===d)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=y,n.method="throw",n.arg=u.arg)}}}function L(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var a=s(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,d;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function G(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function C(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}throw new TypeError(P(t)+" is not iterable")}return g.prototype=w,o(x,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:g,configurable:!0}),g.displayName=u(w,f,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,u(e,f,"GeneratorFunction")),e.prototype=Object.create(x),e},t.awrap=function(e){return{__await:e}},S(W.prototype),u(W.prototype,c,(function(){return this})),t.AsyncIterator=W,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new W(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},S(x),u(x,f,"Generator"),u(x,i,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=C,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(G),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var f=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(f&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(f){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),G(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;G(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}function L(e,t,r,n,o,a,i){try{var c=e[a](i),f=c.value}catch(e){return void r(e)}c.done?t(f):Promise.resolve(f).then(n,o)}o=(a.then?(await a)():a)[0];var i=new Image;i.src=await fetch("./player.png").then(function(){var e,t=(e=E().mark((function e(t){return E().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=URL,e.next=3,t.blob();case 3:return e.t1=e.sent,e.abrupt("return",e.t0.createObjectURL.call(e.t0,e.t1));case 5:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){L(a,n,o,i,c,"next",e)}function c(e){L(a,n,o,i,c,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}());var c=performance.now(),f=performance.now.bind(performance),u=Math.floor,l=Math.PI,s=Math.sin,h=Math.cos,p=o.hp/2,v=o.KL/7*6,y=0,d=0,m=0,g=0,w=0,b=0,_=0,O=function(){return{__proto__:null,x:p,y:v}},x=function(){return p=o.hp/2,v=o.KL/7*6},S=function(){var e=f()-c,t=u(6*(e/600-u(e/600))),r=3;y<0?r+=49:0<y&&(r+=97),o._O.drawImage(i,32*t+4,r,26,40,p-37,v-70,78,120)},W=function(){var e=m?6:9;v+=d*e,(p+=y*e)<0?p=0:o.hp<p&&(p=o.hp),v<0?v=0:o.KL<v&&(v=o.KL)},k=function(){o._O.fillStyle="#cc0000",o._O.beginPath(),o._O.arc(p,v,12,0,2*l),o._O.fill(),o._O.fillStyle="#ffffff",o._O.beginPath(),o._O.arc(p,v,7.5,0,2*l),o._O.fill(),o._O.lineWidth=6;var e=m?.12*(f()-c)%360:-.36*(f()-c)%360;o._O.strokeStyle="#ffffff33",o._O.beginPath(),o._O.arc(p,v,51,0,2*l),o._O.stroke(),o._O.strokeStyle="#ffffff55";for(var t=0;t<8;t++){var r=s((45*t-e)*l/180),n=h((45*t-e)*l/180);o._O.beginPath(),o._O.moveTo(p-65*r,v-65*n),o._O.lineTo(p-37*r,v-37*n),o._O.stroke()}};document.addEventListener("keydown",(function(e){switch(e.key){case"a":case"A":case"4":case"ArrowLeft":g=1;break;case"d":case"D":case"6":case"ArrowRight":w=1;break;case"w":case"W":case"8":case"ArrowUp":b=1;break;case"s":case"S":case"2":case"ArrowDown":_=1;break;case"Shift":m=1}y=w-g,d=_-b})),document.addEventListener("keyup",(function(e){switch(e.key){case"a":case"A":case"4":case"ArrowLeft":g=0;break;case"d":case"D":case"6":case"ArrowRight":w=0;break;case"w":case"W":case"8":case"ArrowUp":b=0;break;case"s":case"S":case"2":case"ArrowDown":_=0;break;case"Shift":m=0}y=w-g,d=_-b})),n()}catch(T){n(T)}}),1)},486:(e,t,r)=>{r.a(e,(async(e,n)=>{try{r.d(t,{DC:()=>p,G9:()=>m,Yl:()=>v,ZH:()=>y,p6:()=>d,q$:()=>g});var o=r(618),a=e([o]);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,x(n.key),n)}}function O(e,t,r){return t&&_(e.prototype,t),r&&_(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function x(e){var t=S(e,"string");return"symbol"==w(t)?t:t+""}function S(e,t){if("object"!=w(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=w(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}o=(a.then?(await a)():a)[0];var i=Math.PI,c=Math.sin,f=Math.cos,u=(Math.abs,2*i),l=performance.now.bind(performance),s=12,h=13,p=32,v={__proto__:null},y=function(e){switch(v[e]){case 0:var t=l()-v[e+5];if(t<0)return!0;v[e+2];var r=v[e+7],n=v[e+8]=v[e+3]+v[e+s]*r*(t/10),a=v[e+1];if(n<-a||o.hp+a<n)return!1;var p=v[e+9]=v[e+4]+v[e+h]*r*(t/10);return!(p<-a||o.KL+a<p||(o._O.beginPath(),o._O.arc(n,p,v[e+14],0,u,!1),o._O.fillStyle=v[e+6],o._O.fill(),o._O.beginPath(),o._O.arc(n,p,a,0,u,!1),o._O.fillStyle="#ffffff",o._O.fill(),0));case 1:var y=l()-v[e+5];if(y<0)return!0;var d=v[e+2],m=v[e+7],g=v[e+8]=v[e+3]+v[e+s]*m*(y/10),w=v[e+9]=v[e+4]+v[e+h]*m*(y/10),b=v[e+1];if(v[e+11]){if(g<-b||o.hp+b<g)return!1;if(w<-b||o.KL+b<w)return!1}else if(g<b){var _=d;_=_<i?i-_:i-_+u,v[e+2]=_,v[e+s]=f(_),v[e+h]=c(_),v[e+3]=b,v[e+4]=w,v[e+5]=l(),v[e+11]=!0}else if(o.hp-b<g){var O=d;O=O<i?i-O:i-O+u,v[e+2]=O,v[e+s]=f(O),v[e+h]=c(O),v[e+3]=o.hp-b,v[e+4]=w,v[e+5]=l(),v[e+11]=!0}else if(w<b){var x=u-d;v[e+2]=x,v[e+s]=f(x),v[e+h]=c(x),v[e+3]=g,v[e+4]=b,v[e+5]=l(),v[e+11]=!0}else if(o.KL-b<w){var S=u-d;v[e+2]=S,v[e+s]=f(S),v[e+h]=c(S),v[e+3]=g,v[e+4]=o.KL-b,v[e+5]=l(),v[e+11]=!0}return o._O.beginPath(),o._O.arc(g,w,v[e+14],0,u,!1),o._O.fillStyle=v[e+6],o._O.fill(),o._O.beginPath(),o._O.arc(g,w,b,0,u,!1),o._O.fillStyle="#ffffff",o._O.fill(),!0}},d=function(e,t,r){if(!(l()<v[e+5])){var n=Math.pow(v[e+8]-t,2)+Math.pow(v[e+9]-r,2);return n<v[e+15]?-1:!v[e+10]&&n<v[e+16]?(v[e+10]=!0,1):0}},m=function(){return O((function e(){b(this,e)}),null,[{key:"createBuffer",value:function(e){var t=e.x,r=e.y,n=e.size,o=e.angle,a=e.speed,u=e.color,l=e.startTime,s=e.grazed,h=void 0!==s&&s,v=new Array(p).fill(null);for(v[0]=0,v[8]=v[3]=t,v[9]=v[4]=r,v[1]=n,v[14]=1.34*n,v[15]=Math.pow(1.5*n,2),v[16]=Math.pow(.85*n,2);o<0;)o+=2*i;for(;2*i<o;)o-=2*i;return v[2]=o,v[12]=f(o),v[13]=c(o),v[7]=a,v[6]=u,v[5]=l,v[10]=h,v}}])}(),g=function(){return O((function e(){b(this,e)}),null,[{key:"createBuffer",value:function(e){var t=e.x,r=e.y,n=e.size,o=e.angle,a=e.speed,u=e.color,l=e.startTime,s=e.grazed,h=void 0!==s&&s,v=new Array(p).fill(null);for(v[0]=1,v[8]=v[3]=t,v[9]=v[4]=r,v[1]=n,v[14]=1.34*n,v[15]=Math.pow(1.5*n,2),v[16]=Math.pow(.85*n,2);o<0;)o+=2*i;for(;2*i<o;)o-=2*i;return v[2]=o,v[12]=f(o),v[13]=c(o),v[7]=a,v[6]=u,v[5]=l,v[10]=h,v[11]=!1,v}}])}();Reflect.setPrototypeOf(m,null),Object.freeze(m),Reflect.setPrototypeOf(m.prototype,null),Object.freeze(m.prototype),Reflect.setPrototypeOf(g,null),Object.freeze(g),Reflect.setPrototypeOf(g.prototype,null),Object.freeze(g.prototype),n()}catch(W){n(W)}}))},963:(e,t,r)=>{r.a(e,(async(e,n)=>{try{r.d(t,{Aj:()=>y,lu:()=>p});var o=r(257),a=r(486),i=e([o,a]);[o,a]=i.then?(await i)():i;var c=[];Reflect.setPrototypeOf(c,null);var f=Reflect.ownKeys;Reflect.defineProperty(globalThis,"shotsCount",{__proto__:null,get:function(){return f(a.Yl).length/a.DC}});var u=function(e){return delete a.Yl[e]},l=!1,s=0,h=0,p=function(e){l?c[c.length++]=e:a.Yl[h++]=e},v=function(){l=!1;for(var e=0;e<c.length;e++)a.Yl[h++]=c[e];c.length=0},y=function(e){var t=e.hit,r=e.grazed,n=!0,i=s,c=h,p=(0,o.G2)(),y=p.x,d=p.y;l=!0;for(var m=h-a.DC;m>=s;m-=a.DC)if(m in a.Yl)if((0,a.ZH)(m)){n=!1,i=m;var g=(0,a.p6)(m,y,d);if("number"==typeof g)if(g<0){if(t())return v(),void(l||(s=h=0,f(a.Yl).forEach(u)))}else 0<g&&r()}else{for(var w=0;w<a.DC;w++)delete a.Yl[m+w];n&&(c=m)}i>=c&&(i=c=0),s=i,h=c,v()};n()}catch(e){n(e)}}))}},a={};function i(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={exports:{}};return o[e](r,r.exports,i),r.exports}e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",n=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},i.a=(o,a,i)=>{var c;i&&((c=[]).d=-1);var f,u,l,s=new Set,h=o.exports,p=new Promise(((e,t)=>{l=t,u=e}));p[t]=h,p[e]=e=>(c&&e(c),s.forEach(e),p.catch((e=>{}))),o.exports=p,a((o=>{var a;f=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[e])return o;if(o.then){var a=[];a.d=0,o.then((e=>{i[t]=e,n(a)}),(e=>{i[r]=e,n(a)}));var i={};return i[e]=e=>e(a),i}}var c={};return c[e]=e=>{},c[t]=o,c})))(o);var i=()=>f.map((e=>{if(e[r])throw e[r];return e[t]})),u=new Promise((t=>{(a=()=>t(i)).r=0;var r=e=>e!==c&&!s.has(e)&&(s.add(e),e&&!e.d&&(a.r++,e.push(a)));f.map((t=>t[e](r)))}));return a.r?u:i()}),(e=>(e?l(p[r]=e):u(h),n(c)))),c&&c.d<0&&(c.d=0)},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i(737)})();