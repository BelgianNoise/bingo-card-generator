import{W as d,X as mi,Y as gi,Z as on,$ as A,a0 as Dt,a1 as Y,a2 as yi,a3 as vi,a4 as Ci,a5 as me,a6 as Ve,a7 as Le,a8 as Ei,a9 as Si,aa as Ti,ab as Yn,ac as jn,ad as Ii,ae as wi,af as ln,ag as $n,ah as Ri,ai as Ni,aj as et,ak as bi,al as ki,am as Ai,an as Di,ao as xi,G as Qn,r as $,w as xt,ap as an,aq as Oi,ar as cn,as as Mi,d as tt,o as q,c as V,a as R,n as Ke,t as ue,x as de,h as Pi,i as fe,y as L,z as pt,T as Xn,_ as Ot,b as j,I as Li,P as Fi,e as Wi,m as hn,f as ke,N as Ae,at as Ui,p as Jn,q as Zn,g as es,R as Hi,S as lt,Q as Gi,u as qi}from"./index-gbh4giN6.js";import{D as Bi}from"./DialogComponent-7KDNDFjt.js";import{i as ts,j as Vi}from"./firestore-riC6FrtT.js";import{G as Ki}from"./GameInfo-ccb7cZ_0.js";import{D as zi,_ as Yi}from"./DeleteConfirmationDialog-Sd6gz03S.js";const ji="/field-marker.png";var un={};const dn="@firebase/database",fn="1.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ns="";function $i(n){ns=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),A(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Dt(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Y(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Qi(e)}}catch{}return new Xi},ee=ss("localStorage"),mt=ss("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e=new Si("@firebase/database"),Ji=function(){let n=1;return function(){return n++}}(),is=function(n){const e=yi(n),t=new vi;t.update(e);const s=t.digest();return Ci.encodeByteArray(s)},Fe=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Fe.apply(null,s):typeof s=="object"?e+=A(s):e+=s,e+=" "}return e};let te=null,_n=!0;const Zi=function(n,e){d(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(_e.logLevel=Ti.VERBOSE,te=_e.log.bind(_e),e&&mt.set("logging_enabled",!0)):typeof n=="function"?te=n:(te=null,mt.remove("logging_enabled"))},D=function(...n){if(_n===!0&&(_n=!1,te===null&&mt.get("logging_enabled")===!0&&Zi(!0)),te){const e=Fe.apply(null,n);te(e)}},We=function(n){return function(...e){D(n,...e)}},gt=function(...n){const e="FIREBASE INTERNAL ERROR: "+Fe(...n);_e.error(e)},ne=function(...n){const e=`FIREBASE FATAL ERROR: ${Fe(...n)}`;throw _e.error(e),new Error(e)},P=function(...n){const e="FIREBASE WARNING: "+Fe(...n);_e.warn(e)},er=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&P("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},rs=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},tr=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},ge="[MIN_NAME]",se="[MAX_NAME]",ve=function(n,e){if(n===e)return 0;if(n===ge||e===se)return-1;if(e===ge||n===se)return 1;{const t=pn(n),s=pn(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},nr=function(n,e){return n===e?0:n<e?-1:1},we=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+A(e))},Mt=function(n){if(typeof n!="object"||n===null)return A(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=A(e[s]),t+=":",t+=Mt(n[e[s]]);return t+="}",t},os=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function W(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const ls=function(n){d(!rs(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,l,a;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=l+s,o=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(a=t;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let f=parseInt(u.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},sr=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ir=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},rr=new RegExp("^-?(0*)\\d{1,10}$"),or=-2147483648,lr=2147483647,pn=function(n){if(rr.test(n)){const e=Number(n);if(e>=or&&e<=lr)return e}return null},Ue=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw P("Exception was thrown by user callback.",t),e},Math.floor(0))}},ar=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},De=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){P(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(D("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',P(e)}}class yt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}yt.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt="5",as="v",cs="s",hs="r",us="f",ds=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,fs="ls",_s="p",vt="ac",ps="websocket",ms="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,t,s,i,r=!1,o="",l=!1,a=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ee.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ee.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function dr(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function gs(n,e,t){d(typeof e=="string","typeof type must == string"),d(typeof t=="object","typeof params must == object");let s;if(e===ps)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===ms)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);dr(n)&&(t.ns=n.namespace);const i=[];return W(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(){this.counters_={}}incrementCounter(e,t=1){Y(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return ki(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at={},ct={};function Lt(n){const e=n.toString();return at[e]||(at[e]=new fr),at[e]}function _r(n,e){const t=n.toString();return ct[t]||(ct[t]=e()),ct[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Ue(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn="start",mr="close",gr="pLPCommand",yr="pRTLPCB",ys="id",vs="pw",Cs="ser",vr="cb",Cr="seg",Er="ts",Sr="d",Tr="dframe",Es=1870,Ss=30,Ir=Es-Ss,wr=25e3,Rr=3e4;class ce{constructor(e,t,s,i,r,o,l){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=We(e),this.stats_=Lt(t),this.urlFn=a=>(this.appCheckToken&&(a[vt]=this.appCheckToken),gs(t,ms,a))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new pr(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Rr)),tr(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ft((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===mn)this.id=l,this.password=a;else if(o===mr)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[mn]="t",s[Cs]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[vr]=this.scriptTagHolder.uniqueCallbackIdentifier),s[as]=Pt,this.transportSessionId&&(s[cs]=this.transportSessionId),this.lastSessionId&&(s[fs]=this.lastSessionId),this.applicationId&&(s[_s]=this.applicationId),this.appCheckToken&&(s[vt]=this.appCheckToken),typeof location<"u"&&location.hostname&&ds.test(location.hostname)&&(s[hs]=us);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ce.forceAllow_=!0}static forceDisallow(){ce.forceDisallow_=!0}static isAvailable(){return ce.forceAllow_?!0:!ce.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!sr()&&!ir()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=A(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Di(t),i=os(s,Ir);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Tr]="t",s[ys]=e,s[vs]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=A(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Ft{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Ji(),window[gr+this.uniqueCallbackIdentifier]=e,window[yr+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ft.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){D("frame writing exception"),l.stack&&D(l.stack),D(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||D("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ys]=this.myID,e[vs]=this.myPW,e[Cs]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ss+s.length<=Es;){const o=this.pendingSegs.shift();s=s+"&"+Cr+i+"="+o.seg+"&"+Er+i+"="+o.ts+"&"+Sr+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(wr)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{D("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=16384,br=45e3;let ze=null;typeof MozWebSocket<"u"?ze=MozWebSocket:typeof WebSocket<"u"&&(ze=WebSocket);class U{constructor(e,t,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=We(this.connId),this.stats_=Lt(t),this.connURL=U.connectionURL_(t,o,l,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[as]=Pt,typeof location<"u"&&location.hostname&&ds.test(location.hostname)&&(o[hs]=us),t&&(o[cs]=t),s&&(o[fs]=s),i&&(o[vt]=i),r&&(o[_s]=r),gs(e,ps,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ee.set("previous_websocket_failure",!0);try{let s;Yn(),this.mySock=new ze(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){U.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ze!==null&&!U.forceDisallow_}static previouslyFailed(){return ee.isInMemoryStorage||ee.get("previous_websocket_failure")===!0}markConnectionHealthy(){ee.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Dt(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(d(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=A(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=os(t,Nr);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(br))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}U.responsesRequiredToBeHealthy=2;U.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ce,U]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=U&&U.isAvailable();let s=t&&!U.previouslyFailed();if(e.webSocketOnly&&(t||P("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[U];else{const i=this.transports_=[];for(const r of Me.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Me.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Me.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=6e4,Ar=5e3,Dr=10*1024,xr=100*1024,ht="t",gn="d",Or="s",yn="r",Mr="e",vn="o",Cn="a",En="n",Sn="p",Pr="h";class Lr{constructor(e,t,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=We("c:"+this.id+":"),this.transportManager_=new Me(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=De(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>xr?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Dr?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ht in e){const t=e[ht];t===Cn?this.upgradeIfSecondaryHealthy_():t===yn?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===vn&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=we("t",e),s=we("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Sn,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Cn,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:En,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=we("t",e),s=we("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=we(ht,e);if(gn in e){const s=e[gn];if(t===Pr){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===En){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Or?this.onConnectionShutdown_(s):t===yn?this.onReset_(s):t===Mr?gt("Server Error: "+s):t===vn?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):gt("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Pt!==s&&P("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),De(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(kr))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):De(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Ar))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Sn,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ee.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e){this.allowedEvents_=e,this.listeners_={},d(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){d(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye extends Is{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!$n()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ye}getInitialEvent(e){return d(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=32,In=768;class w{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function E(){return new w("")}function g(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function X(n){return n.pieces_.length-n.pieceNum_}function I(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new w(n.pieces_,e)}function ws(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Fr(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Rs(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Ns(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new w(e,0)}function k(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof w)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new w(t,0)}function m(n){return n.pieceNum_>=n.pieces_.length}function F(n,e){const t=g(n),s=g(e);if(t===null)return e;if(t===s)return F(I(n),I(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function bs(n,e){if(X(n)!==X(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function H(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(X(n)>X(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class Wr{constructor(e,t){this.errorPrefix_=t,this.parts_=Rs(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=et(this.parts_[s]);ks(this)}}function Ur(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=et(e),ks(n)}function Hr(n){const e=n.parts_.pop();n.byteLength_-=et(e),n.parts_.length>0&&(n.byteLength_-=1)}function ks(n){if(n.byteLength_>In)throw new Error(n.errorPrefix_+"has a key path longer than "+In+" bytes ("+n.byteLength_+").");if(n.parts_.length>Tn)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Tn+") or object contains a cycle "+Z(n))}function Z(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends Is{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Wt}getInitialEvent(e){return d(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re=1e3,Gr=60*5*1e3,wn=30*1e3,qr=1.3,Br=3e4,Vr="server_kill",Rn=3;class z extends Ts{constructor(e,t,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=z.nextPersistentConnectionId_++,this.log_=We("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Re,this.maxReconnectDelay_=Gr,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Yn())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Wt.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ye.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(A(r)),d(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new jn,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),d(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),d(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;z.warnOnListenWarnings_(a,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Y(e,"w")){const s=me(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();P(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ii(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=wn)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=wi(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),d(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+A(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):gt("Unrecognized action received from server: "+A(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){d(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Re,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Re,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Br&&(this.reconnectDelay_=Re),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*qr)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+z.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){d(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?D("getToken() completed but was canceled"):(D("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,l=new Lr(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,p=>{P(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(Vr)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&P(h),a())}}}interrupt(e){D("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){D("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ln(this.interruptReasons_)&&(this.reconnectDelay_=Re,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>Mt(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new w(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){D("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Rn&&(this.reconnectDelay_=wn,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){D("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Rn&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+ns.replace(/\./g,"-")]=1,$n()?e["framework.cordova"]=1:Ri()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ye.getInstance().currentlyOnline();return ln(this.interruptReasons_)&&e}}z.nextPersistentConnectionId_=0;z.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new y(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new y(ge,e),i=new y(ge,t);return this.compare(s,i)!==0}minPost(){return y.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qe;class As extends nt{static get __EMPTY_NODE(){return qe}static set __EMPTY_NODE(e){qe=e}compare(e,t){return ve(e.name,t.name)}isDefinedOn(e){throw Le("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return y.MIN}maxPost(){return new y(se,qe)}makePost(e,t){return d(typeof e=="string","KeyIndex indexValue must always be a string."),new y(e,qe)}toString(){return".key"}}const pe=new As;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class b{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??b.RED,this.left=i??M.EMPTY_NODE,this.right=r??M.EMPTY_NODE}copy(e,t,s,i,r){return new b(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return M.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return M.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,b.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,b.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}b.RED=!0;b.BLACK=!1;class Kr{copy(e,t,s,i,r){return this}insert(e,t,s){return new b(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class M{constructor(e,t=M.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new M(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,b.BLACK,null,null))}remove(e){return new M(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,b.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Be(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Be(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Be(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Be(this.root_,null,this.comparator_,!0,e)}}M.EMPTY_NODE=new Kr;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(n,e){return ve(n.name,e.name)}function Ut(n,e){return ve(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ct;function Yr(n){Ct=n}const Ds=function(n){return typeof n=="number"?"number:"+ls(n):"string:"+n},xs=function(n){if(n.isLeafNode()){const e=n.val();d(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Y(e,".sv"),"Priority must be a string or number.")}else d(n===Ct||n.isEmpty(),"priority of unexpected type.");d(n===Ct||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nn;class N{constructor(e,t=N.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,d(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),xs(this.priorityNode_)}static set __childrenNodeConstructor(e){Nn=e}static get __childrenNodeConstructor(){return Nn}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new N(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:N.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return m(e)?this:g(e)===".priority"?this.priorityNode_:N.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:N.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=g(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(d(s!==".priority"||X(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,N.__childrenNodeConstructor.EMPTY_NODE.updateChild(I(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ds(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=ls(this.value_):e+=this.value_,this.lazyHash_=is(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===N.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof N.__childrenNodeConstructor?-1:(d(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=N.VALUE_TYPE_ORDER.indexOf(t),r=N.VALUE_TYPE_ORDER.indexOf(s);return d(i>=0,"Unknown leaf type: "+t),d(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}N.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Os,Ms;function jr(n){Os=n}function $r(n){Ms=n}class Qr extends nt{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?ve(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return y.MIN}maxPost(){return new y(se,new N("[PRIORITY-POST]",Ms))}makePost(e,t){const s=Os(e);return new y(t,new N("[PRIORITY-POST]",s))}toString(){return".priority"}}const O=new Qr;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=Math.log(2);class Jr{constructor(e){const t=r=>parseInt(Math.log(r)/Xr,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const je=function(n,e,t,s){n.sort(e);const i=function(a,c){const u=c-a;let h,f;if(u===0)return null;if(u===1)return h=n[a],f=t?t(h):h,new b(f,h.node,b.BLACK,null,null);{const p=parseInt(u/2,10)+a,_=i(a,p),C=i(p+1,c);return h=n[p],f=t?t(h):h,new b(f,h.node,b.BLACK,_,C)}},r=function(a){let c=null,u=null,h=n.length;const f=function(_,C){const S=h-_,Se=h;h-=_;const J=i(S+1,Se),Te=n[S],nn=t?t(Te):Te;p(new b(nn,Te.node,C,null,J))},p=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<a.count;++_){const C=a.nextBitIsOne(),S=Math.pow(2,a.count-(_+1));C?f(S,b.BLACK):(f(S,b.BLACK),f(S,b.RED))}return u},o=new Jr(n.length),l=r(o);return new M(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ut;const ae={};class K{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return d(ae&&O,"ChildrenNode.ts has not been loaded"),ut=ut||new K({".priority":ae},{".priority":O}),ut}get(e){const t=me(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof M?t:null}hasIndex(e){return Y(this.indexSet_,e.toString())}addIndex(e,t){d(e!==pe,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(y.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=je(s,e.getCompare()):l=ae;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new K(u,c)}addToIndexes(e,t){const s=Ve(this.indexes_,(i,r)=>{const o=me(this.indexSet_,r);if(d(o,"Missing index implementation for "+r),i===ae)if(o.isDefinedOn(e.node)){const l=[],a=t.getIterator(y.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),je(l,o.getCompare())}else return ae;else{const l=t.get(e.name);let a=i;return l&&(a=a.remove(new y(e.name,l))),a.insert(e,e.node)}});return new K(s,this.indexSet_)}removeFromIndexes(e,t){const s=Ve(this.indexes_,i=>{if(i===ae)return i;{const r=t.get(e.name);return r?i.remove(new y(e.name,r)):i}});return new K(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ne;class v{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&xs(this.priorityNode_),this.children_.isEmpty()&&d(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ne||(Ne=new v(new M(Ut),null,K.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ne}updatePriority(e){return this.children_.isEmpty()?this:new v(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Ne:t}}getChild(e){const t=g(e);return t===null?this:this.getImmediateChild(t).getChild(I(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(d(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new y(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Ne:this.priorityNode_;return new v(i,o,r)}}updateChild(e,t){const s=g(e);if(s===null)return t;{d(g(e)!==".priority"||X(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(I(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(O,(o,l)=>{t[o]=l.val(e),s++,r&&v.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in t)o[l]=t[l];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ds(this.getPriority().val())+":"),this.forEachChild(O,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":is(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new y(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new y(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new y(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,y.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,y.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===He?-1:0}withIndex(e){if(e===pe||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new v(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===pe||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(O),i=t.getIterator(O);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===pe?null:this.indexMap_.get(e.toString())}}v.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Zr extends v{constructor(){super(new M(Ut),v.EMPTY_NODE,K.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return v.EMPTY_NODE}isEmpty(){return!1}}const He=new Zr;Object.defineProperties(y,{MIN:{value:new y(ge,v.EMPTY_NODE)},MAX:{value:new y(se,He)}});As.__EMPTY_NODE=v.EMPTY_NODE;N.__childrenNodeConstructor=v;Yr(He);$r(He);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo=!0;function x(n,e=null){if(n===null)return v.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),d(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new N(t,x(e))}if(!(n instanceof Array)&&eo){const t=[];let s=!1;if(W(n,(o,l)=>{if(o.substring(0,1)!=="."){const a=x(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),t.push(new y(o,a)))}}),t.length===0)return v.EMPTY_NODE;const r=je(t,zr,o=>o.name,Ut);if(s){const o=je(t,O.getCompare());return new v(r,x(e),new K({".priority":o},{".priority":O}))}else return new v(r,x(e),K.Default)}else{let t=v.EMPTY_NODE;return W(n,(s,i)=>{if(Y(n,s)&&s.substring(0,1)!=="."){const r=x(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(x(e))}}jr(x);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to extends nt{constructor(e){super(),this.indexPath_=e,d(!m(e)&&g(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?ve(e.name,t.name):r}makePost(e,t){const s=x(e),i=v.EMPTY_NODE.updateChild(this.indexPath_,s);return new y(t,i)}maxPost(){const e=v.EMPTY_NODE.updateChild(this.indexPath_,He);return new y(se,e)}toString(){return Rs(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no extends nt{compare(e,t){const s=e.node.compareTo(t.node);return s===0?ve(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return y.MIN}maxPost(){return y.MAX}makePost(e,t){const s=x(e);return new y(t,s)}toString(){return".value"}}const so=new no;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(n){return{type:"value",snapshotNode:n}}function ro(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function oo(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function bn(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function lo(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=O}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return d(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return d(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ge}hasEnd(){return this.endSet_}getIndexEndValue(){return d(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return d(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:se}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return d(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===O}copy(){const e=new Ht;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function kn(n){const e={};if(n.isDefault())return e;let t;if(n.index_===O?t="$priority":n.index_===so?t="$value":n.index_===pe?t="$key":(d(n.index_ instanceof to,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=A(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=A(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+A(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=A(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+A(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function An(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==O&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e extends Ts{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=We("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(d(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=$e.getListenId_(e,s),l={};this.listens_[o]=l;const a=kn(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),me(this.listens_,o)===l){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,t){const s=$e.getListenId_(e,t);delete this.listens_[s]}get(e){const t=kn(e._queryParams),s=e._path.toString(),i=new jn;return this.restRequest_(s+".json",t,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ni(t);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Dt(l.responseText)}catch{P("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&P("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(){this.rootNode_=v.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(){return{value:null,children:new Map}}function Ps(n,e,t){if(m(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=g(e);n.children.has(s)||n.children.set(s,Qe());const i=n.children.get(s);e=I(e),Ps(i,e,t)}}function Et(n,e,t){n.value!==null?t(e,n.value):co(n,(s,i)=>{const r=new w(e.toString()+"/"+s);Et(i,r,t)})}function co(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&W(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=10*1e3,uo=30*1e3,fo=5*60*1e3;class _o{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new ho(e);const s=Dn+(uo-Dn)*Math.random();De(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;W(e,(i,r)=>{r>0&&Y(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),De(this.reportStats_.bind(this),Math.floor(Math.random()*2*fo))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var B;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(B||(B={}));function Ls(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Fs(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ws(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=B.ACK_USER_WRITE,this.source=Ls()}operationForChild(e){if(m(this.path)){if(this.affectedTree.value!=null)return d(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new w(e));return new Xe(E(),t,this.revert)}}else return d(g(this.path)===e,"operationForChild called for unrelated child."),new Xe(I(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=B.OVERWRITE}operationForChild(e){return m(this.path)?new ie(this.source,E(),this.snap.getImmediateChild(e)):new ie(this.source,I(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=B.MERGE}operationForChild(e){if(m(this.path)){const t=this.children.subtree(new w(e));return t.isEmpty()?null:t.value?new ie(this.source,E(),t.value):new Pe(this.source,E(),t)}else return d(g(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Pe(this.source,I(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(m(e))return this.isFullyInitialized()&&!this.filtered_;const t=g(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function po(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(lo(o.childName,o.snapshotNode))}),be(n,i,"child_removed",e,s,t),be(n,i,"child_added",e,s,t),be(n,i,"child_moved",r,s,t),be(n,i,"child_changed",e,s,t),be(n,i,"value",e,s,t),i}function be(n,e,t,s,i,r){const o=s.filter(l=>l.type===t);o.sort((l,a)=>go(n,l,a)),o.forEach(l=>{const a=mo(n,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,n.query_))})})}function mo(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function go(n,e,t){if(e.childName==null||t.childName==null)throw Le("Should only compare child_ events.");const s=new y(e.childName,e.snapshotNode),i=new y(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(n,e){return{eventCache:n,serverCache:e}}function xe(n,e,t,s){return Us(new Gt(e,t,s),n.serverCache)}function Hs(n,e,t,s){return Us(n.eventCache,new Gt(e,t,s))}function St(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function re(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dt;const yo=()=>(dt||(dt=new M(nr)),dt);class T{constructor(e,t=yo()){this.value=e,this.children=t}static fromObject(e){let t=new T(null);return W(e,(s,i)=>{t=t.set(new w(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:E(),value:this.value};if(m(e))return null;{const s=g(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(I(e),t);return r!=null?{path:k(new w(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(m(e))return this;{const t=g(e),s=this.children.get(t);return s!==null?s.subtree(I(e)):new T(null)}}set(e,t){if(m(e))return new T(t,this.children);{const s=g(e),r=(this.children.get(s)||new T(null)).set(I(e),t),o=this.children.insert(s,r);return new T(this.value,o)}}remove(e){if(m(e))return this.children.isEmpty()?new T(null):new T(null,this.children);{const t=g(e),s=this.children.get(t);if(s){const i=s.remove(I(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new T(null):new T(this.value,r)}else return this}}get(e){if(m(e))return this.value;{const t=g(e),s=this.children.get(t);return s?s.get(I(e)):null}}setTree(e,t){if(m(e))return t;{const s=g(e),r=(this.children.get(s)||new T(null)).setTree(I(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new T(this.value,o)}}fold(e){return this.fold_(E(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(k(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,E(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(m(e))return null;{const r=g(e),o=this.children.get(r);return o?o.findOnPath_(I(e),k(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,E(),t)}foreachOnPath_(e,t,s){if(m(e))return this;{this.value&&s(t,this.value);const i=g(e),r=this.children.get(i);return r?r.foreachOnPath_(I(e),k(t,i),s):new T(null)}}foreach(e){this.foreach_(E(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(k(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.writeTree_=e}static empty(){return new G(new T(null))}}function Oe(n,e,t){if(m(e))return new G(new T(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=F(i,e);return r=r.updateChild(o,t),new G(n.writeTree_.set(i,r))}else{const i=new T(t),r=n.writeTree_.setTree(e,i);return new G(r)}}}function xn(n,e,t){let s=n;return W(t,(i,r)=>{s=Oe(s,k(e,i),r)}),s}function On(n,e){if(m(e))return G.empty();{const t=n.writeTree_.setTree(e,new T(null));return new G(t)}}function Tt(n,e){return oe(n,e)!=null}function oe(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(F(t.path,e)):null}function Mn(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(O,(s,i)=>{e.push(new y(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new y(s,i.value))}),e}function Q(n,e){if(m(e))return n;{const t=oe(n,e);return t!=null?new G(new T(t)):new G(n.writeTree_.subtree(e))}}function It(n){return n.writeTree_.isEmpty()}function ye(n,e){return Gs(E(),n.writeTree_,e)}function Gs(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(d(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=Gs(k(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(k(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(n,e){return Ys(e,n)}function vo(n,e,t,s,i){d(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Oe(n.visibleWrites,e,t)),n.lastWriteId=s}function Co(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function Eo(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);d(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const l=n.allWrites[o];l.visible&&(o>=t&&So(l,s.path)?i=!1:H(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return To(n),!0;if(s.snap)n.visibleWrites=On(n.visibleWrites,s.path);else{const l=s.children;W(l,a=>{n.visibleWrites=On(n.visibleWrites,k(s.path,a))})}return!0}else return!1}function So(n,e){if(n.snap)return H(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&H(k(n.path,t),e))return!0;return!1}function To(n){n.visibleWrites=Bs(n.allWrites,Io,E()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Io(n){return n.visible}function Bs(n,e,t){let s=G.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let l;if(r.snap)H(t,o)?(l=F(t,o),s=Oe(s,l,r.snap)):H(o,t)&&(l=F(o,t),s=Oe(s,E(),r.snap.getChild(l)));else if(r.children){if(H(t,o))l=F(t,o),s=xn(s,l,r.children);else if(H(o,t))if(l=F(o,t),m(l))s=xn(s,E(),r.children);else{const a=me(r.children,g(l));if(a){const c=a.getChild(I(l));s=Oe(s,E(),c)}}}else throw Le("WriteRecord should have .snap or .children")}}return s}function Vs(n,e,t,s,i){if(!s&&!i){const r=oe(n.visibleWrites,e);if(r!=null)return r;{const o=Q(n.visibleWrites,e);if(It(o))return t;if(t==null&&!Tt(o,E()))return null;{const l=t||v.EMPTY_NODE;return ye(o,l)}}}else{const r=Q(n.visibleWrites,e);if(!i&&It(r))return t;if(!i&&t==null&&!Tt(r,E()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(H(c.path,e)||H(e,c.path))},l=Bs(n.allWrites,o,e),a=t||v.EMPTY_NODE;return ye(l,a)}}}function wo(n,e,t){let s=v.EMPTY_NODE;const i=oe(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(O,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=Q(n.visibleWrites,e);return t.forEachChild(O,(o,l)=>{const a=ye(Q(r,new w(o)),l);s=s.updateImmediateChild(o,a)}),Mn(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Q(n.visibleWrites,e);return Mn(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Ro(n,e,t,s,i){d(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=k(e,t);if(Tt(n.visibleWrites,r))return null;{const o=Q(n.visibleWrites,r);return It(o)?i.getChild(t):ye(o,i.getChild(t))}}function No(n,e,t,s){const i=k(e,t),r=oe(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=Q(n.visibleWrites,i);return ye(o,s.getNode().getImmediateChild(t))}else return null}function bo(n,e){return oe(n.visibleWrites,e)}function ko(n,e,t,s,i,r,o){let l;const a=Q(n.visibleWrites,e),c=oe(a,E());if(c!=null)l=c;else if(t!=null)l=ye(a,t);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),f=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let p=f.getNext();for(;p&&u.length<i;)h(p,s)!==0&&u.push(p),p=f.getNext();return u}else return[]}function Ao(){return{visibleWrites:G.empty(),allWrites:[],lastWriteId:-1}}function wt(n,e,t,s){return Vs(n.writeTree,n.treePath,e,t,s)}function Ks(n,e){return wo(n.writeTree,n.treePath,e)}function Pn(n,e,t,s){return Ro(n.writeTree,n.treePath,e,t,s)}function Je(n,e){return bo(n.writeTree,k(n.treePath,e))}function Do(n,e,t,s,i,r){return ko(n.writeTree,n.treePath,e,t,s,i,r)}function qt(n,e,t){return No(n.writeTree,n.treePath,e,t)}function zs(n,e){return Ys(k(n.treePath,e),n.writeTree)}function Ys(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;d(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),d(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,bn(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,oo(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,ro(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,bn(s,e.snapshotNode,i.oldSnap));else throw Le("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const js=new Oo;class Bt{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Gt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return qt(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:re(this.viewCache_),r=Do(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}function Mo(n,e){d(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),d(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Po(n,e,t,s,i){const r=new xo;let o,l;if(t.type===B.OVERWRITE){const c=t;c.source.fromUser?o=Rt(n,e,c.path,c.snap,s,i,r):(d(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!m(c.path),o=Ze(n,e,c.path,c.snap,s,i,l,r))}else if(t.type===B.MERGE){const c=t;c.source.fromUser?o=Fo(n,e,c.path,c.children,s,i,r):(d(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Nt(n,e,c.path,c.children,s,i,l,r))}else if(t.type===B.ACK_USER_WRITE){const c=t;c.revert?o=Ho(n,e,c.path,s,i,r):o=Wo(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===B.LISTEN_COMPLETE)o=Uo(n,e,t.path,s,r);else throw Le("Unknown operation type: "+t.type);const a=r.getChanges();return Lo(e,o,a),{viewCache:o,changes:a}}function Lo(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=St(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(io(St(e)))}}function $s(n,e,t,s,i,r){const o=e.eventCache;if(Je(s,t)!=null)return e;{let l,a;if(m(t))if(d(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=re(e),u=c instanceof v?c:v.EMPTY_NODE,h=Ks(s,u);l=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=wt(s,re(e));l=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=g(t);if(c===".priority"){d(X(t)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=Pn(s,t,u,a);h!=null?l=n.filter.updatePriority(u,h):l=o.getNode()}else{const u=I(t);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const f=Pn(s,t,o.getNode(),a);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=qt(s,c,e.serverCache);h!=null?l=n.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return xe(e,l,o.isFullyInitialized()||m(t),n.filter.filtersNodes())}}function Ze(n,e,t,s,i,r,o,l){const a=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(m(t))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const p=a.getNode().updateChild(t,s);c=u.updateFullNode(a.getNode(),p,null)}else{const p=g(t);if(!a.isCompleteForPath(t)&&X(t)>1)return e;const _=I(t),S=a.getNode().getImmediateChild(p).updateChild(_,s);p===".priority"?c=u.updatePriority(a.getNode(),S):c=u.updateChild(a.getNode(),p,S,_,js,null)}const h=Hs(e,c,a.isFullyInitialized()||m(t),u.filtersNodes()),f=new Bt(i,h,r);return $s(n,h,t,i,f,l)}function Rt(n,e,t,s,i,r,o){const l=e.eventCache;let a,c;const u=new Bt(i,e,r);if(m(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),a=xe(e,c,!0,n.filter.filtersNodes());else{const h=g(t);if(h===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),a=xe(e,c,l.isFullyInitialized(),l.isFiltered());else{const f=I(t),p=l.getNode().getImmediateChild(h);let _;if(m(f))_=s;else{const C=u.getCompleteChild(h);C!=null?ws(f)===".priority"&&C.getChild(Ns(f)).isEmpty()?_=C:_=C.updateChild(f,s):_=v.EMPTY_NODE}if(p.equals(_))a=e;else{const C=n.filter.updateChild(l.getNode(),h,_,f,u,o);a=xe(e,C,l.isFullyInitialized(),n.filter.filtersNodes())}}}return a}function Ln(n,e){return n.eventCache.isCompleteForChild(e)}function Fo(n,e,t,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=k(t,a);Ln(e,g(u))&&(l=Rt(n,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=k(t,a);Ln(e,g(u))||(l=Rt(n,l,u,c,i,r,o))}),l}function Fn(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Nt(n,e,t,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;m(t)?c=s:c=new T(null).setTree(t,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),_=Fn(n,p,f);a=Ze(n,a,new w(h),_,i,r,o,l)}}),c.children.inorderTraversal((h,f)=>{const p=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!p){const _=e.serverCache.getNode().getImmediateChild(h),C=Fn(n,_,f);a=Ze(n,a,new w(h),C,i,r,o,l)}}),a}function Wo(n,e,t,s,i,r,o){if(Je(i,t)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(m(t)&&a.isFullyInitialized()||a.isCompleteForPath(t))return Ze(n,e,t,a.getNode().getChild(t),i,r,l,o);if(m(t)){let c=new T(null);return a.getNode().forEachChild(pe,(u,h)=>{c=c.set(new w(u),h)}),Nt(n,e,t,c,i,r,l,o)}else return e}else{let c=new T(null);return s.foreach((u,h)=>{const f=k(t,u);a.isCompleteForPath(f)&&(c=c.set(u,a.getNode().getChild(f)))}),Nt(n,e,t,c,i,r,l,o)}}function Uo(n,e,t,s,i){const r=e.serverCache,o=Hs(e,r.getNode(),r.isFullyInitialized()||m(t),r.isFiltered());return $s(n,o,t,s,js,i)}function Ho(n,e,t,s,i,r){let o;if(Je(s,t)!=null)return e;{const l=new Bt(s,e,i),a=e.eventCache.getNode();let c;if(m(t)||g(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=wt(s,re(e));else{const h=e.serverCache.getNode();d(h instanceof v,"serverChildren would be complete if leaf node"),u=Ks(s,h)}u=u,c=n.filter.updateFullNode(a,u,r)}else{const u=g(t);let h=qt(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=n.filter.updateChild(a,u,h,I(t),l,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(a,u,v.EMPTY_NODE,I(t),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=wt(s,re(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Je(s,E())!=null,xe(e,c,o,n.filter.filtersNodes())}}function Go(n,e){const t=re(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!m(e)&&!t.getImmediateChild(g(e)).isEmpty())?t.getChild(e):null}function Wn(n,e,t,s){e.type===B.MERGE&&e.source.queryId!==null&&(d(re(n.viewCache_),"We should always have a full cache before handling merges"),d(St(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=Po(n.processor_,i,e,t,s);return Mo(n.processor_,r.viewCache),d(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,qo(n,r.changes,r.viewCache.eventCache.getNode(),null)}function qo(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return po(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Un;function Bo(n){d(!Un,"__referenceConstructor has already been defined"),Un=n}function Vt(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return d(r!=null,"SyncTree gave us an op for an invalid query."),Wn(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Wn(o,e,t,s));return r}}function Kt(n,e){let t=null;for(const s of n.views.values())t=t||Go(s,e);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hn;function Vo(n){d(!Hn,"__referenceConstructor has already been defined"),Hn=n}class Gn{constructor(e){this.listenProvider_=e,this.syncPointTree_=new T(null),this.pendingWriteTree_=Ao(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ko(n,e,t,s,i){return vo(n.pendingWriteTree_,e,t,s,i),i?it(n,new ie(Ls(),e,t)):[]}function he(n,e,t=!1){const s=Co(n.pendingWriteTree_,e);if(Eo(n.pendingWriteTree_,e)){let r=new T(null);return s.snap!=null?r=r.set(E(),!0):W(s.children,o=>{r=r.set(new w(o),!0)}),it(n,new Xe(s.path,r,t))}else return[]}function st(n,e,t){return it(n,new ie(Fs(),e,t))}function zo(n,e,t){const s=T.fromObject(t);return it(n,new Pe(Fs(),e,s))}function Yo(n,e,t,s){const i=Zs(n,s);if(i!=null){const r=ei(i),o=r.path,l=r.queryId,a=F(o,e),c=new ie(Ws(l),a,t);return ti(n,o,c)}else return[]}function jo(n,e,t,s){const i=Zs(n,s);if(i){const r=ei(i),o=r.path,l=r.queryId,a=F(o,e),c=T.fromObject(t),u=new Pe(Ws(l),a,c);return ti(n,o,u)}else return[]}function Qs(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,l)=>{const a=F(o,e),c=Kt(l,a);if(c)return c});return Vs(i,e,r,t,!0)}function it(n,e){return Xs(e,n.syncPointTree_,null,qs(n.pendingWriteTree_,E()))}function Xs(n,e,t,s){if(m(n.path))return Js(n,e,t,s);{const i=e.get(E());t==null&&i!=null&&(t=Kt(i,E()));let r=[];const o=g(n.path),l=n.operationForChild(o),a=e.children.get(o);if(a&&l){const c=t?t.getImmediateChild(o):null,u=zs(s,o);r=r.concat(Xs(l,a,c,u))}return i&&(r=r.concat(Vt(i,n,s,t))),r}}function Js(n,e,t,s){const i=e.get(E());t==null&&i!=null&&(t=Kt(i,E()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=t?t.getImmediateChild(o):null,c=zs(s,o),u=n.operationForChild(o);u&&(r=r.concat(Js(u,l,a,c)))}),i&&(r=r.concat(Vt(i,n,s,t))),r}function Zs(n,e){return n.tagToQueryMap.get(e)}function ei(n){const e=n.indexOf("$");return d(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new w(n.substr(0,e))}}function ti(n,e,t){const s=n.syncPointTree_.get(e);d(s,"Missing sync point for query tag that we're tracking");const i=qs(n.pendingWriteTree_,e);return Vt(s,t,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new zt(t)}node(){return this.node_}}class Yt{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=k(this.path_,e);return new Yt(this.syncTree_,t)}node(){return Qs(this.syncTree_,this.path_)}}const $o=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},qn=function(n,e,t){if(!n||typeof n!="object")return n;if(d(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Qo(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Xo(n[".sv"],e);d(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Qo=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:d(!1,"Unexpected server value: "+n)}},Xo=function(n,e,t){n.hasOwnProperty("increment")||d(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&d(!1,"Unexpected increment value: "+s);const i=e.node();if(d(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Jo=function(n,e,t,s){return jt(e,new Yt(t,n),s)},Zo=function(n,e,t){return jt(n,new zt(e),t)};function jt(n,e,t){const s=n.getPriority().val(),i=qn(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,l=qn(o.getValue(),e,t);return l!==o.getValue()||i!==o.getPriority().val()?new N(l,x(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new N(i))),o.forEachChild(O,(l,a)=>{const c=jt(a,e.getImmediateChild(l),t);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Qt(n,e){let t=e instanceof w?e:new w(e),s=n,i=g(t);for(;i!==null;){const r=me(s.node.children,i)||{children:{},childCount:0};s=new $t(i,s,r),t=I(t),i=g(t)}return s}function Ce(n){return n.node.value}function ni(n,e){n.node.value=e,bt(n)}function si(n){return n.node.childCount>0}function el(n){return Ce(n)===void 0&&!si(n)}function rt(n,e){W(n.node.children,(t,s)=>{e(new $t(t,n,s))})}function ii(n,e,t,s){t&&!s&&e(n),rt(n,i=>{ii(i,e,!0,s)}),t&&s&&e(n)}function tl(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ge(n){return new w(n.parent===null?n.name:Ge(n.parent)+"/"+n.name)}function bt(n){n.parent!==null&&nl(n.parent,n.name,n)}function nl(n,e,t){const s=el(t),i=Y(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,bt(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,bt(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl=/[\[\].#$\/\u0000-\u001F\u007F]/,il=/[\[\].#$\u0000-\u001F\u007F]/,ft=10*1024*1024,ri=function(n){return typeof n=="string"&&n.length!==0&&!sl.test(n)},rl=function(n){return typeof n=="string"&&n.length!==0&&!il.test(n)},ol=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),rl(n)},oi=function(n,e,t){const s=t instanceof w?new Wr(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Z(s));if(typeof e=="function")throw new Error(n+"contains a function "+Z(s)+" with contents = "+e.toString());if(rs(e))throw new Error(n+"contains "+e.toString()+" "+Z(s));if(typeof e=="string"&&e.length>ft/3&&et(e)>ft)throw new Error(n+"contains a string greater than "+ft+" utf8 bytes "+Z(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(W(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!ri(o)))throw new Error(n+" contains an invalid key ("+o+") "+Z(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Ur(s,o),oi(n,l,s),Hr(s)}),i&&r)throw new Error(n+' contains ".value" child '+Z(s)+" in addition to actual children.")}},ll=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ri(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!ol(t))throw new Error(Ei(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function cl(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!bs(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function le(n,e,t){cl(n,t),hl(n,s=>H(s,e)||H(e,s))}function hl(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(ul(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function ul(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();te&&D("event: "+t.toString()),Ue(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl="repo_interrupt",fl=25;class _l{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new al,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Qe(),this.transactionQueueTree_=new $t,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function pl(n,e,t){if(n.stats_=Lt(n.repoInfo_),n.forceRestClient_||ar())n.server_=new $e(n.repoInfo_,(s,i,r,o)=>{Bn(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Vn(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{A(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new z(n.repoInfo_,e,(s,i,r,o)=>{Bn(n,s,i,r,o)},s=>{Vn(n,s)},s=>{gl(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=_r(n.repoInfo_,()=>new _o(n.stats_,n.server_)),n.infoData_=new ao,n.infoSyncTree_=new Gn({startListening:(s,i,r,o)=>{let l=[];const a=n.infoData_.getNode(s._path);return a.isEmpty()||(l=st(n.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Xt(n,"connected",!1),n.serverSyncTree_=new Gn({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);le(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function ml(n){const t=n.infoData_.getNode(new w(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function li(n){return $o({timestamp:ml(n)})}function Bn(n,e,t,s,i){n.dataUpdateCount++;const r=new w(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const a=Ve(t,c=>x(c));o=jo(n.serverSyncTree_,r,a,i)}else{const a=x(t);o=Yo(n.serverSyncTree_,r,a,i)}else if(s){const a=Ve(t,c=>x(c));o=zo(n.serverSyncTree_,r,a)}else{const a=x(t);o=st(n.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=Zt(n,r)),le(n.eventQueue_,l,o)}function Vn(n,e){Xt(n,"connected",e),e===!1&&vl(n)}function gl(n,e){W(e,(t,s)=>{Xt(n,t,s)})}function Xt(n,e,t){const s=new w("/.info/"+e),i=x(t);n.infoData_.updateSnapshot(s,i);const r=st(n.infoSyncTree_,s,i);le(n.eventQueue_,s,r)}function yl(n){return n.nextWriteId_++}function vl(n){ai(n,"onDisconnectEvents");const e=li(n),t=Qe();Et(n.onDisconnect_,E(),(i,r)=>{const o=Jo(i,r,n.serverSyncTree_,e);Ps(t,i,o)});let s=[];Et(t,E(),(i,r)=>{s=s.concat(st(n.serverSyncTree_,i,r));const o=Tl(n,i);Zt(n,o)}),n.onDisconnect_=Qe(),le(n.eventQueue_,E(),s)}function Cl(n){n.persistentConnection_&&n.persistentConnection_.interrupt(dl)}function ai(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),D(t,...e)}function ci(n,e,t){return Qs(n.serverSyncTree_,e,t)||v.EMPTY_NODE}function Jt(n,e=n.transactionQueueTree_){if(e||ot(n,e),Ce(e)){const t=ui(n,e);d(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&El(n,Ge(e),t)}else si(e)&&rt(e,t=>{Jt(n,t)})}function El(n,e,t){const s=t.map(c=>c.currentWriteId),i=ci(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const u=t[c];d(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=F(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;n.server_.put(a.toString(),l,c=>{ai(n,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<t.length;f++)t[f].status=2,u=u.concat(he(n.serverSyncTree_,t[f].currentWriteId)),t[f].onComplete&&h.push(()=>t[f].onComplete(null,!0,t[f].currentOutputSnapshotResolved)),t[f].unwatcher();ot(n,Qt(n.transactionQueueTree_,e)),Jt(n,n.transactionQueueTree_),le(n.eventQueue_,e,u);for(let f=0;f<h.length;f++)Ue(h[f])}else{if(c==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{P("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=c}Zt(n,e)}},o)}function Zt(n,e){const t=hi(n,e),s=Ge(t),i=ui(n,t);return Sl(n,i,s),s}function Sl(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=F(t,a.path);let u=!1,h;if(d(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(he(n.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=fl)u=!0,h="maxretry",i=i.concat(he(n.serverSyncTree_,a.currentWriteId,!0));else{const f=ci(n,a.path,o);a.currentInputSnapshot=f;const p=e[l].update(f.val());if(p!==void 0){oi("transaction failed: Data returned ",p,a.path);let _=x(p);typeof p=="object"&&p!=null&&Y(p,".priority")||(_=_.updatePriority(f.getPriority()));const S=a.currentWriteId,Se=li(n),J=Zo(_,f,Se);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=J,a.currentWriteId=yl(n),o.splice(o.indexOf(S),1),i=i.concat(Ko(n.serverSyncTree_,a.path,J,a.currentWriteId,a.applyLocally)),i=i.concat(he(n.serverSyncTree_,S,!0))}else u=!0,h="nodata",i=i.concat(he(n.serverSyncTree_,a.currentWriteId,!0))}le(n.eventQueue_,t,i),i=[],u&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}ot(n,n.transactionQueueTree_);for(let l=0;l<s.length;l++)Ue(s[l]);Jt(n,n.transactionQueueTree_)}function hi(n,e){let t,s=n.transactionQueueTree_;for(t=g(e);t!==null&&Ce(s)===void 0;)s=Qt(s,t),e=I(e),t=g(e);return s}function ui(n,e){const t=[];return di(n,e,t),t.sort((s,i)=>s.order-i.order),t}function di(n,e,t){const s=Ce(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);rt(e,i=>{di(n,i,t)})}function ot(n,e){const t=Ce(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,ni(e,t.length>0?t:void 0)}rt(e,s=>{ot(n,s)})}function Tl(n,e){const t=Ge(hi(n,e)),s=Qt(n.transactionQueueTree_,e);return tl(s,i=>{_t(n,i)}),_t(n,s),ii(s,i=>{_t(n,i)}),t}function _t(n,e){const t=Ce(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(d(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(d(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(he(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?ni(e,void 0):t.length=r+1,le(n.eventQueue_,Ge(e),i);for(let o=0;o<s.length;o++)Ue(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function wl(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):P(`Invalid query segment '${t}' in query '${n}'`)}return e}const Kn=function(n,e){const t=Rl(n),s=t.namespace;t.domain==="firebase.com"&&ne(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&ne("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||er();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new ur(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new w(t.pathString)}},Rl=function(n){let e="",t="",s="",i="",r="",o=!0,l="https",a=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(l=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(i=Il(n.substring(u,h)));const f=wl(n.substring(Math.min(n.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),t=e.substring(_+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:a,domain:t,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return m(this._path)?null:ws(this._path)}get ref(){return new Ee(this._repo,this._path)}get _queryIdentifier(){const e=An(this._queryParams),t=Mt(e);return t==="{}"?"default":t}get _queryObject(){return An(this._queryParams)}isEqual(e){if(e=bi(e),!(e instanceof en))return!1;const t=this._repo===e._repo,s=bs(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Fr(this._path)}}class Ee extends en{constructor(e,t){super(e,t,new Ht,!1)}get parent(){const e=Ns(this._path);return e===null?null:new Ee(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}Bo(Ee);Vo(Ee);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl="FIREBASE_DATABASE_EMULATOR_HOST",kt={};let bl=!1;function kl(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||ne("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),D("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Kn(r,i),l=o.repoInfo,a,c;typeof process<"u"&&un&&(c=un[Nl]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=Kn(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const u=i&&a?new yt(yt.OWNER):new hr(n.name,n.options,e);ll("Invalid Firebase Database URL",o),m(o.path)||ne("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Dl(l,n,u,new cr(n.name,t));return new xl(h,n)}function Al(n,e){const t=kt[e];(!t||t[n.key]!==n)&&ne(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Cl(n),delete t[n.key]}function Dl(n,e,t,s){let i=kt[e.name];i||(i={},kt[e.name]=i);let r=i[n.toURLString()];return r&&ne("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new _l(n,bl,t,s),i[n.toURLString()]=r,r}class xl{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(pl(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ee(this._repo,E())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Al(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ne("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(n){$i(Ai),mi(new gi("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return kl(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),on(dn,fn,n),on(dn,fn,"esm2017")}z.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};z.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Ol();function zn(n){const e=n.data();return e&&Object.defineProperty(e,"id",{value:n.id.toString(),writable:!1}),e}function Ml(n){var e;return(((e=n.path)==null?void 0:e.match(/\//g))||[]).length%2!==0}function At(n,e=void 0,t={}){const{errorHandler:s=a=>console.error(a),autoDispose:i=!0}=t,r=xi(n)?n:Qn(()=>n);let o=()=>{};const l=$(e);return xt(r,a=>{o(),r.value?Ml(r.value)?o=an(a,c=>{l.value=zn(c)||null},s):o=an(a,c=>{l.value=c.docs.map(zn).filter(Oi)},s):l.value=e},{immediate:!0}),i===!0?cn(()=>{o()}):typeof i=="number"&&cn(()=>{Mi(()=>{o()},i)}),l}const Pl={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ll=tt({__name:"IconShare",props:{color:{type:String,default:"#fff"}},setup(n){return(e,t)=>(q(),V("svg",Pl,[R("path",{style:Ke({stroke:n.color}),id:"Vector",d:"M9 6L12 3M12 3L15 6M12 3V13M7.00023 10C6.06835 10 5.60241 10 5.23486 10.1522C4.74481 10.3552 4.35523 10.7448 4.15224 11.2349C4 11.6024 4 12.0681 4 13V17.8C4 18.9201 4 19.4798 4.21799 19.9076C4.40973 20.2839 4.71547 20.5905 5.0918 20.7822C5.5192 21 6.07899 21 7.19691 21H16.8036C17.9215 21 18.4805 21 18.9079 20.7822C19.2842 20.5905 19.5905 20.2839 19.7822 19.9076C20 19.4802 20 18.921 20 17.8031V13C20 12.0681 19.9999 11.6024 19.8477 11.2349C19.6447 10.7448 19.2554 10.3552 18.7654 10.1522C18.3978 10 17.9319 10 17 10","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,4)]))}}),Fl={key:2},Wl=tt({__name:"SquareText",props:{entryId:{},isFree:{type:Boolean}},setup(n){const t=ue(de,"entries",n.entryId),s=At(t,void 0,{autoDispose:!1}),i=$(null),r=$(null),o=$(2),l=c=>{const u=c.parentElement;return c.offsetWidth>u.offsetWidth||c.offsetHeight>u.offsetHeight},a=()=>{(i.value||r.value)&&l(i.value??r.value)&&(o.value-=.1,setTimeout(a,30))};return xt([s,i,r],()=>{a()}),(c,u)=>(q(),Pi(Xn,{name:"fade"},{default:fe(()=>[L(s)&&!c.isFree?(q(),V("p",{key:0,ref_key:"pRef",ref:i,style:Ke({fontSize:`${o.value}rem`,"word-break":L(s).value.split(" ").map(h=>h.length>7).some(h=>h)?"break-word":"normal"})},pt(L(s).value),5)):c.isFree?(q(),V("p",{key:1,ref_key:"pFreeRef",ref:r,style:Ke({fontSize:`${o.value}rem`})},pt(c.entryId),5)):(q(),V("p",Fl,"..."))]),_:1}))}}),Ul=Ot(Wl,[["__scopeId","data-v-9251b935"]]),tn=n=>(Jn("data-v-31655f33"),n=n(),Zn(),n),Hl={key:0,class:"container"},Gl={class:"header"},ql={class:"card-title"},Bl={class:"flexy-boi"},Vl=["onClick"],Kl={key:0,class:"field-marker",src:ji,alt:"field marker"},zl={class:"sidebar"},Yl={class:"info-container"},jl=tn(()=>R("p",{class:"section-heading"},"You are currently playing:",-1)),$l={class:"info-container"},Ql=tn(()=>R("p",{class:"section-heading"},"Danger zone:",-1)),Xl=tn(()=>R("p",null," Are you sure you want to delete this bingo card? It will be gone forever and you will not be able to recover it. ",-1)),Jl=tt({__name:"TheActualGame",props:{cardId:{},gameId:{}},setup(n){const e=n,t=es(),s=ue(de,"cards",e.cardId),i=At(s,void 0,{autoDispose:!1}),r=ue(de,"games",e.gameId),o=At(r,void 0,{autoDispose:!1}),l=Qn(()=>{if(i.value)if(i.value.hasFreeSpace){const _=Math.floor(i.value.entryIds.length/2),C=[...i.value.entryIds];return C.splice(_,0,i.value.freeSpaceText??"FREE"),C}else return i.value.entryIds;else return[]}),a=$(!1),c=()=>a.value=!0,u=()=>a.value=!1,h=()=>{navigator.clipboard.writeText(window.location.href),t.emit(ke(Ae.INFO,"The link to this bingo card has been copied to your clipboard."))},f=_=>{if(i.value){const C=[...i.value.chckedEntryIds],S=C.indexOf(_);S>-1?C.splice(S,1):C.push(_),Vi({...i.value,id:e.cardId,chckedEntryIds:C})}},p=async()=>{await ts(e.cardId)&&Ui.push(`/game/${e.gameId}`)};return xt([l,i],([_,C])=>{}),(_,C)=>L(i)&&L(o)?(q(),V("div",Hl,[R("div",Gl,[R("h1",ql,pt(L(i).title),1),R("button",{class:"share secondary",onClick:h},[j(Ll,{class:"icon",color:"var(--color-foreground)"})])]),R("div",Bl,[R("div",{class:"grid",style:Ke({gridTemplateColumns:`repeat(${L(o).gridWidth}, 1fr)`})},[(q(!0),V(Li,null,Fi(l.value,S=>(q(),V("div",{key:S,class:"square"},[R("button",{onClick:()=>f(S)},[j(Ul,{entryId:S,isFree:S===L(i).freeSpaceText},null,8,["entryId","isFree"]),j(Xn,{name:"fade"},{default:fe(()=>[L(i).chckedEntryIds.includes(S)?(q(),V("img",Kl)):hn("",!0)]),_:2},1024)],8,Vl)]))),128))],4),R("div",zl,[R("div",Yl,[jl,j(Ki,{game:L(o),gameId:_.gameId,maxDescriptionLength:300},null,8,["game","gameId"])]),R("div",$l,[Ql,R("div",null,[j(zi,{open:a.value,onClose:u,onDenied:u,onApproved:p},{content:fe(()=>[Xl]),_:1},8,["open"]),R("button",{onClick:c,class:"primary remove",style:{margin:"0 auto"}},[j(Yi,{class:"icon",color:"var(--color-foreground)"}),Wi(" Delete my bingo card ")])])])])])])):hn("",!0)}}),Zl=Ot(Jl,[["__scopeId","data-v-31655f33"]]),fi=n=>(Jn("data-v-25f86290"),n=n(),Zn(),n),ea=fi(()=>R("h2",null,"Sorry buddy...",-1)),ta=fi(()=>R("p",{class:"content-text"}," The bingo card you are trying to play is outdated 😭. Do you want to delete this card create a new one? ",-1)),na=tt({__name:"PlayView",setup(n){const e=Gi(),t=qi(),s=es(),i=e.params.gameId;let r;typeof i=="string"?r=i:r=i[0];const o=e.params.cardId;let l;typeof o=="string"?l=o:l=o[0];const a=$(!1),c=$(!0),u=$(!1);let h="";Hi(async()=>{const S=ue(de,"games",r),J=(await lt(S)).data();if(J&&J.gridWidth){const Te=ue(de,"cards",l),Ie=(await lt(Te)).data();if(Ie&&Ie.gameId===r){h=Ie.title;for(const _i of Ie.entryIds){const pi=ue(de,"entries",_i),sn=await lt(pi);if(!sn.exists())a.value=!0;else{const rn=sn.data();rn?rn.updatedAt>Ie.createdAt&&s.emit(ke(Ae.WARNING,`The creator has updated the game, this made some changes to your card.
                  Feel free to delete this bingo card and create a new one if you prefer!`,8e3)):a.value=!0}}c.value=!1}else return p()}else return f()});const f=()=>{t.push("/"),s.emit(ke(Ae.ERROR,`The bingo game you are trying to play does not exist (anymore) 😭.
      Make sure you have the correct link or contact the creator of the game!`,1e4))},p=()=>{t.push("/game/"+r),s.emit(ke(Ae.ERROR,`The bingo card you are trying to play does not exist (anymore) 😭.
      Do you have the right link?`,1e4))},_=async()=>{console.log("deleteOutdated"),await ts(l)&&t.push(`/game/${r}/play/new?title=${h}`)},C=()=>{s.emit(ke(Ae.INFO,`You are a real party pooper 😢.
      There is literally no game to play behind the popup.
      I am not letting you close it, enjoy looking at it 🖕 !`,1e4))};return(S,Se)=>(q(),V("div",null,[j(Bi,{open:!c.value&&a.value&&!u.value,"prevent-close":!0},{header:fe(()=>[ea]),content:fe(()=>[ta]),footer:fe(()=>[R("button",{onClick:C,class:"secondary"}," NO, I HATE FUN "),R("button",{onClick:_,class:"primary"}," YES PLEASE ")]),_:1},8,["open"]),j(Zl,{cardId:L(l),gameId:L(r)},null,8,["cardId","gameId"])]))}}),aa=Ot(na,[["__scopeId","data-v-25f86290"]]);export{aa as default};
