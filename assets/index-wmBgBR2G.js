import{Y as d,Z as Ws,$ as Us,a0 as Lt,a1 as N,a2 as _t,a3 as B,a4 as Hs,a5 as Gs,a6 as qs,a7 as oe,a8 as Ae,a9 as Ee,aa as Bs,ab as Vs,ac as Ks,ad as Sn,ae as In,af as Ys,ag as zs,ah as Ft,ai as wn,aj as js,ak as Qs,al as Ue,am as $s,an as Xs,ao as Js,ap as Zs,aq as ei,a as ti,r as ni,O as si,ar as Wt,as as ii,at as Ut,au as ri}from"./index-MCiUnmiq.js";var Ht={};const Gt="@firebase/database",qt="1.0.2";/**
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
 */let Rn="";function oi(n){Rn=n}/**
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
 */class li{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),N(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:_t(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class ai{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return B(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Nn=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new li(e)}}catch{}return new ai},z=Nn("localStorage"),et=Nn("sessionStorage");/**
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
 */const ie=new Vs("@firebase/database"),ci=function(){let n=1;return function(){return n++}}(),bn=function(n){const e=Hs(n),t=new Gs;t.update(e);const s=t.digest();return qs.encodeByteArray(s)},Te=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Te.apply(null,s):typeof s=="object"?e+=N(s):e+=s,e+=" "}return e};let j=null,Bt=!0;const hi=function(n,e){d(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(ie.logLevel=Ks.VERBOSE,j=ie.log.bind(ie),e&&et.set("logging_enabled",!0)):typeof n=="function"?j=n:(j=null,et.remove("logging_enabled"))},k=function(...n){if(Bt===!0&&(Bt=!1,j===null&&et.get("logging_enabled")===!0&&hi(!0)),j){const e=Te.apply(null,n);j(e)}},Se=function(n){return function(...e){k(n,...e)}},tt=function(...n){const e="FIREBASE INTERNAL ERROR: "+Te(...n);ie.error(e)},Q=function(...n){const e=`FIREBASE FATAL ERROR: ${Te(...n)}`;throw ie.error(e),new Error(e)},P=function(...n){const e="FIREBASE WARNING: "+Te(...n);ie.warn(e)},ui=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&P("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},kn=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},di=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},le="[MIN_NAME]",$="[MAX_NAME]",ce=function(n,e){if(n===e)return 0;if(n===le||e===$)return-1;if(e===le||n===$)return 1;{const t=Vt(n),s=Vt(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},fi=function(n,e){return n===e?0:n<e?-1:1},de=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+N(e))},pt=function(n){if(typeof n!="object"||n===null)return N(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=N(e[s]),t+=":",t+=pt(n[e[s]]);return t+="}",t},An=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function L(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const On=function(n){d(!kn(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,l,a;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=l+s,o=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(a=t;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let f=parseInt(u.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},_i=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},pi=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},gi=new RegExp("^-?(0*)\\d{1,10}$"),mi=-2147483648,yi=2147483647,Vt=function(n){if(gi.test(n)){const e=Number(n);if(e>=mi&&e<=yi)return e}return null},Ie=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw P("Exception was thrown by user callback.",t),e},Math.floor(0))}},vi=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ge=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Ci{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){P(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Ei{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(k("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',P(e)}}class nt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}nt.OWNER="owner";/**
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
 */const gt="5",Mn="v",Pn="s",xn="r",Dn="f",Ln=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Fn="ls",Wn="p",st="ac",Un="websocket",Hn="long_polling";/**
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
 */class Ti{constructor(e,t,s,i,r=!1,o="",l=!1,a=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=z.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&z.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Si(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Gn(n,e,t){d(typeof e=="string","typeof type must == string"),d(typeof t=="object","typeof params must == object");let s;if(e===Un)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Hn)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Si(n)&&(t.ns=n.namespace);const i=[];return L(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class Ii{constructor(){this.counters_={}}incrementCounter(e,t=1){B(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Xs(this.counters_)}}/**
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
 */const ze={},je={};function mt(n){const e=n.toString();return ze[e]||(ze[e]=new Ii),ze[e]}function wi(n,e){const t=n.toString();return je[t]||(je[t]=e()),je[t]}/**
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
 */class Ri{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Ie(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Kt="start",Ni="close",bi="pLPCommand",ki="pRTLPCB",qn="id",Bn="pw",Vn="ser",Ai="cb",Oi="seg",Mi="ts",Pi="d",xi="dframe",Kn=1870,Yn=30,Di=Kn-Yn,Li=25e3,Fi=3e4;class ne{constructor(e,t,s,i,r,o,l){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Se(e),this.stats_=mt(t),this.urlFn=a=>(this.appCheckToken&&(a[st]=this.appCheckToken),Gn(t,Hn,a))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Ri(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Fi)),di(()=>{if(this.isClosed_)return;this.scriptTagHolder=new yt((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Kt)this.id=l,this.password=a;else if(o===Ni)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Kt]="t",s[Vn]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Ai]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Mn]=gt,this.transportSessionId&&(s[Pn]=this.transportSessionId),this.lastSessionId&&(s[Fn]=this.lastSessionId),this.applicationId&&(s[Wn]=this.applicationId),this.appCheckToken&&(s[st]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ln.test(location.hostname)&&(s[xn]=Dn);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ne.forceAllow_=!0}static forceDisallow(){ne.forceDisallow_=!0}static isAvailable(){return ne.forceAllow_?!0:!ne.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!_i()&&!pi()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=N(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Zs(t),i=An(s,Di);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[xi]="t",s[qn]=e,s[Bn]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=N(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class yt{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ci(),window[bi+this.uniqueCallbackIdentifier]=e,window[ki+this.uniqueCallbackIdentifier]=t,this.myIFrame=yt.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){k("frame writing exception"),l.stack&&k(l.stack),k(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||k("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[qn]=this.myID,e[Bn]=this.myPW,e[Vn]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Yn+s.length<=Kn;){const o=this.pendingSegs.shift();s=s+"&"+Oi+i+"="+o.seg+"&"+Mi+i+"="+o.ts+"&"+Pi+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(Li)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{k("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const Wi=16384,Ui=45e3;let Oe=null;typeof MozWebSocket<"u"?Oe=MozWebSocket:typeof WebSocket<"u"&&(Oe=WebSocket);class F{constructor(e,t,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Se(this.connId),this.stats_=mt(t),this.connURL=F.connectionURL_(t,o,l,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[Mn]=gt,typeof location<"u"&&location.hostname&&Ln.test(location.hostname)&&(o[xn]=Dn),t&&(o[Pn]=t),s&&(o[Fn]=s),i&&(o[st]=i),r&&(o[Wn]=r),Gn(e,Un,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,z.set("previous_websocket_failure",!0);try{let s;Sn(),this.mySock=new Oe(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){F.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Oe!==null&&!F.forceDisallow_}static previouslyFailed(){return z.isInMemoryStorage||z.get("previous_websocket_failure")===!0}markConnectionHealthy(){z.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=_t(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(d(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=N(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=An(t,Wi);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ui))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}F.responsesRequiredToBeHealthy=2;F.healthyTimeout=3e4;/**
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
 */class ve{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ne,F]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=F&&F.isAvailable();let s=t&&!F.previouslyFailed();if(e.webSocketOnly&&(t||P("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[F];else{const i=this.transports_=[];for(const r of ve.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ve.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ve.globalTransportInitialized_=!1;/**
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
 */const Hi=6e4,Gi=5e3,qi=10*1024,Bi=100*1024,Qe="t",Yt="d",Vi="s",zt="r",Ki="e",jt="o",Qt="a",$t="n",Xt="p",Yi="h";class zi{constructor(e,t,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Se("c:"+this.id+":"),this.transportManager_=new ve(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ge(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Bi?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>qi?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Qe in e){const t=e[Qe];t===Qt?this.upgradeIfSecondaryHealthy_():t===zt?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===jt&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=de("t",e),s=de("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Xt,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Qt,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:$t,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=de("t",e),s=de("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=de(Qe,e);if(Yt in e){const s=e[Yt];if(t===Yi){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===$t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Vi?this.onConnectionShutdown_(s):t===zt?this.onReset_(s):t===Ki?tt("Server Error: "+s):t===jt?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):tt("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),gt!==s&&P("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),ge(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Hi))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ge(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Gi))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Xt,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(z.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class zn{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class jn{constructor(e){this.allowedEvents_=e,this.listeners_={},d(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){d(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Me extends jn{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!wn()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Me}getInitialEvent(e){return d(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Jt=32,Zt=768;class S{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function C(){return new S("")}function m(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function K(n){return n.pieces_.length-n.pieceNum_}function T(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new S(n.pieces_,e)}function Qn(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function ji(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function $n(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Xn(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new S(e,0)}function R(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof S)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new S(t,0)}function g(n){return n.pieceNum_>=n.pieces_.length}function D(n,e){const t=m(n),s=m(e);if(t===null)return e;if(t===s)return D(T(n),T(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Jn(n,e){if(K(n)!==K(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function W(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(K(n)>K(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class Qi{constructor(e,t){this.errorPrefix_=t,this.parts_=$n(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ue(this.parts_[s]);Zn(this)}}function $i(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Ue(e),Zn(n)}function Xi(n){const e=n.parts_.pop();n.byteLength_-=Ue(e),n.parts_.length>0&&(n.byteLength_-=1)}function Zn(n){if(n.byteLength_>Zt)throw new Error(n.errorPrefix_+"has a key path longer than "+Zt+" bytes ("+n.byteLength_+").");if(n.parts_.length>Jt)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Jt+") or object contains a cycle "+Y(n))}function Y(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class vt extends jn{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new vt}getInitialEvent(e){return d(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const fe=1e3,Ji=60*5*1e3,en=30*1e3,Zi=1.3,er=3e4,tr="server_kill",tn=3;class q extends zn{constructor(e,t,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=q.nextPersistentConnectionId_++,this.log_=Se("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=fe,this.maxReconnectDelay_=Ji,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Sn())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");vt.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Me.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(N(r)),d(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new In,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),d(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),d(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;q.warnOnListenWarnings_(a,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&B(e,"w")){const s=oe(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();P(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ys(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=en)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=zs(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),d(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+N(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):tt("Unrecognized action received from server: "+N(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){d(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=fe,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=fe,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>er&&(this.reconnectDelay_=fe),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Zi)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+q.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){d(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?k("getToken() completed but was canceled"):(k("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,l=new zi(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,_=>{P(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(tr)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&P(h),a())}}}interrupt(e){k("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){k("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ft(this.interruptReasons_)&&(this.reconnectDelay_=fe,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>pt(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new S(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){k("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=tn&&(this.reconnectDelay_=en,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){k("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=tn&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Rn.replace(/\./g,"-")]=1,wn()?e["framework.cordova"]=1:js()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Me.getInstance().currentlyOnline();return Ft(this.interruptReasons_)&&e}}q.nextPersistentConnectionId_=0;q.nextConnectionId_=0;/**
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
 */class He{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new y(le,e),i=new y(le,t);return this.compare(s,i)!==0}minPost(){return y.MIN}}/**
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
 */let be;class es extends He{static get __EMPTY_NODE(){return be}static set __EMPTY_NODE(e){be=e}compare(e,t){return ce(e.name,t.name)}isDefinedOn(e){throw Ee("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return y.MIN}maxPost(){return new y($,be)}makePost(e,t){return d(typeof e=="string","KeyIndex indexValue must always be a string."),new y(e,be)}toString(){return".key"}}const re=new es;/**
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
 */class ke{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class w{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??w.RED,this.left=i??M.EMPTY_NODE,this.right=r??M.EMPTY_NODE}copy(e,t,s,i,r){return new w(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return M.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return M.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,w.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,w.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}w.RED=!0;w.BLACK=!1;class nr{copy(e,t,s,i,r){return this}insert(e,t,s){return new w(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class M{constructor(e,t=M.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new M(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,w.BLACK,null,null))}remove(e){return new M(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,w.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ke(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ke(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ke(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ke(this.root_,null,this.comparator_,!0,e)}}M.EMPTY_NODE=new nr;/**
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
 */function sr(n,e){return ce(n.name,e.name)}function Ct(n,e){return ce(n,e)}/**
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
 */let it;function ir(n){it=n}const ts=function(n){return typeof n=="number"?"number:"+On(n):"string:"+n},ns=function(n){if(n.isLeafNode()){const e=n.val();d(typeof e=="string"||typeof e=="number"||typeof e=="object"&&B(e,".sv"),"Priority must be a string or number.")}else d(n===it||n.isEmpty(),"priority of unexpected type.");d(n===it||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let nn;class I{constructor(e,t=I.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,d(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ns(this.priorityNode_)}static set __childrenNodeConstructor(e){nn=e}static get __childrenNodeConstructor(){return nn}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new I(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:I.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return g(e)?this:m(e)===".priority"?this.priorityNode_:I.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:I.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=m(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(d(s!==".priority"||K(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,I.__childrenNodeConstructor.EMPTY_NODE.updateChild(T(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ts(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=On(this.value_):e+=this.value_,this.lazyHash_=bn(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===I.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof I.__childrenNodeConstructor?-1:(d(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=I.VALUE_TYPE_ORDER.indexOf(t),r=I.VALUE_TYPE_ORDER.indexOf(s);return d(i>=0,"Unknown leaf type: "+t),d(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}I.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let ss,is;function rr(n){ss=n}function or(n){is=n}class lr extends He{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?ce(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return y.MIN}maxPost(){return new y($,new I("[PRIORITY-POST]",is))}makePost(e,t){const s=ss(e);return new y(t,new I("[PRIORITY-POST]",s))}toString(){return".priority"}}const O=new lr;/**
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
 */const ar=Math.log(2);class cr{constructor(e){const t=r=>parseInt(Math.log(r)/ar,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Pe=function(n,e,t,s){n.sort(e);const i=function(a,c){const u=c-a;let h,f;if(u===0)return null;if(u===1)return h=n[a],f=t?t(h):h,new w(f,h.node,w.BLACK,null,null);{const _=parseInt(u/2,10)+a,p=i(a,_),b=i(_+1,c);return h=n[_],f=t?t(h):h,new w(f,h.node,w.BLACK,p,b)}},r=function(a){let c=null,u=null,h=n.length;const f=function(p,b){const x=h-p,Ke=h;h-=p;const Ne=i(x+1,Ke),Ye=n[x],Fs=t?t(Ye):Ye;_(new w(Fs,Ye.node,b,null,Ne))},_=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<a.count;++p){const b=a.nextBitIsOne(),x=Math.pow(2,a.count-(p+1));b?f(x,w.BLACK):(f(x,w.BLACK),f(x,w.RED))}return u},o=new cr(n.length),l=r(o);return new M(s||e,l)};/**
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
 */let $e;const te={};class G{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return d(te&&O,"ChildrenNode.ts has not been loaded"),$e=$e||new G({".priority":te},{".priority":O}),$e}get(e){const t=oe(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof M?t:null}hasIndex(e){return B(this.indexSet_,e.toString())}addIndex(e,t){d(e!==re,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(y.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=Pe(s,e.getCompare()):l=te;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new G(u,c)}addToIndexes(e,t){const s=Ae(this.indexes_,(i,r)=>{const o=oe(this.indexSet_,r);if(d(o,"Missing index implementation for "+r),i===te)if(o.isDefinedOn(e.node)){const l=[],a=t.getIterator(y.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Pe(l,o.getCompare())}else return te;else{const l=t.get(e.name);let a=i;return l&&(a=a.remove(new y(e.name,l))),a.insert(e,e.node)}});return new G(s,this.indexSet_)}removeFromIndexes(e,t){const s=Ae(this.indexes_,i=>{if(i===te)return i;{const r=t.get(e.name);return r?i.remove(new y(e.name,r)):i}});return new G(s,this.indexSet_)}}/**
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
 */let _e;class v{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&ns(this.priorityNode_),this.children_.isEmpty()&&d(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return _e||(_e=new v(new M(Ct),null,G.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||_e}updatePriority(e){return this.children_.isEmpty()?this:new v(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?_e:t}}getChild(e){const t=m(e);return t===null?this:this.getImmediateChild(t).getChild(T(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(d(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new y(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?_e:this.priorityNode_;return new v(i,o,r)}}updateChild(e,t){const s=m(e);if(s===null)return t;{d(m(e)!==".priority"||K(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(T(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(O,(o,l)=>{t[o]=l.val(e),s++,r&&v.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in t)o[l]=t[l];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ts(this.getPriority().val())+":"),this.forEachChild(O,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":bn(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new y(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new y(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new y(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,y.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,y.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===we?-1:0}withIndex(e){if(e===re||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new v(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===re||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(O),i=t.getIterator(O);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===re?null:this.indexMap_.get(e.toString())}}v.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class hr extends v{constructor(){super(new M(Ct),v.EMPTY_NODE,G.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return v.EMPTY_NODE}isEmpty(){return!1}}const we=new hr;Object.defineProperties(y,{MIN:{value:new y(le,v.EMPTY_NODE)},MAX:{value:new y($,we)}});es.__EMPTY_NODE=v.EMPTY_NODE;I.__childrenNodeConstructor=v;ir(we);or(we);/**
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
 */const ur=!0;function A(n,e=null){if(n===null)return v.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),d(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new I(t,A(e))}if(!(n instanceof Array)&&ur){const t=[];let s=!1;if(L(n,(o,l)=>{if(o.substring(0,1)!=="."){const a=A(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),t.push(new y(o,a)))}}),t.length===0)return v.EMPTY_NODE;const r=Pe(t,sr,o=>o.name,Ct);if(s){const o=Pe(t,O.getCompare());return new v(r,A(e),new G({".priority":o},{".priority":O}))}else return new v(r,A(e),G.Default)}else{let t=v.EMPTY_NODE;return L(n,(s,i)=>{if(B(n,s)&&s.substring(0,1)!=="."){const r=A(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(A(e))}}rr(A);/**
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
 */class dr extends He{constructor(e){super(),this.indexPath_=e,d(!g(e)&&m(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?ce(e.name,t.name):r}makePost(e,t){const s=A(e),i=v.EMPTY_NODE.updateChild(this.indexPath_,s);return new y(t,i)}maxPost(){const e=v.EMPTY_NODE.updateChild(this.indexPath_,we);return new y($,e)}toString(){return $n(this.indexPath_,0).join("/")}}/**
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
 */class fr extends He{compare(e,t){const s=e.node.compareTo(t.node);return s===0?ce(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return y.MIN}maxPost(){return y.MAX}makePost(e,t){const s=A(e);return new y(t,s)}toString(){return".value"}}const _r=new fr;/**
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
 */function pr(n){return{type:"value",snapshotNode:n}}function gr(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function mr(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function sn(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function yr(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class Et{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=O}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return d(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return d(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:le}hasEnd(){return this.endSet_}getIndexEndValue(){return d(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return d(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:$}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return d(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===O}copy(){const e=new Et;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function rn(n){const e={};if(n.isDefault())return e;let t;if(n.index_===O?t="$priority":n.index_===_r?t="$value":n.index_===re?t="$key":(d(n.index_ instanceof dr,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=N(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=N(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+N(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=N(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+N(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function on(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==O&&(e.i=n.index_.toString()),e}/**
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
 */class xe extends zn{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Se("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(d(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=xe.getListenId_(e,s),l={};this.listens_[o]=l;const a=rn(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),oe(this.listens_,o)===l){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,t){const s=xe.getListenId_(e,t);delete this.listens_[s]}get(e){const t=rn(e._queryParams),s=e._path.toString(),i=new In;return this.restRequest_(s+".json",t,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Qs(t);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=_t(l.responseText)}catch{P("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&P("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class vr{constructor(){this.rootNode_=v.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function De(){return{value:null,children:new Map}}function rs(n,e,t){if(g(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=m(e);n.children.has(s)||n.children.set(s,De());const i=n.children.get(s);e=T(e),rs(i,e,t)}}function rt(n,e,t){n.value!==null?t(e,n.value):Cr(n,(s,i)=>{const r=new S(e.toString()+"/"+s);rt(i,r,t)})}function Cr(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class Er{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&L(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
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
 */const ln=10*1e3,Tr=30*1e3,Sr=5*60*1e3;class Ir{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Er(e);const s=ln+(Tr-ln)*Math.random();ge(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;L(e,(i,r)=>{r>0&&B(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),ge(this.reportStats_.bind(this),Math.floor(Math.random()*2*Sr))}}/**
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
 */var H;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(H||(H={}));function os(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ls(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function as(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class Le{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=H.ACK_USER_WRITE,this.source=os()}operationForChild(e){if(g(this.path)){if(this.affectedTree.value!=null)return d(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new S(e));return new Le(C(),t,this.revert)}}else return d(m(this.path)===e,"operationForChild called for unrelated child."),new Le(T(this.path),this.affectedTree,this.revert)}}/**
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
 */class X{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=H.OVERWRITE}operationForChild(e){return g(this.path)?new X(this.source,C(),this.snap.getImmediateChild(e)):new X(this.source,T(this.path),this.snap)}}/**
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
 */class Ce{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=H.MERGE}operationForChild(e){if(g(this.path)){const t=this.children.subtree(new S(e));return t.isEmpty()?null:t.value?new X(this.source,C(),t.value):new Ce(this.source,C(),t)}else return d(m(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ce(this.source,T(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Tt{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(g(e))return this.isFullyInitialized()&&!this.filtered_;const t=m(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function wr(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(yr(o.childName,o.snapshotNode))}),pe(n,i,"child_removed",e,s,t),pe(n,i,"child_added",e,s,t),pe(n,i,"child_moved",r,s,t),pe(n,i,"child_changed",e,s,t),pe(n,i,"value",e,s,t),i}function pe(n,e,t,s,i,r){const o=s.filter(l=>l.type===t);o.sort((l,a)=>Nr(n,l,a)),o.forEach(l=>{const a=Rr(n,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,n.query_))})})}function Rr(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Nr(n,e,t){if(e.childName==null||t.childName==null)throw Ee("Should only compare child_ events.");const s=new y(e.childName,e.snapshotNode),i=new y(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
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
 */function cs(n,e){return{eventCache:n,serverCache:e}}function me(n,e,t,s){return cs(new Tt(e,t,s),n.serverCache)}function hs(n,e,t,s){return cs(n.eventCache,new Tt(e,t,s))}function ot(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function J(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Xe;const br=()=>(Xe||(Xe=new M(fi)),Xe);class E{constructor(e,t=br()){this.value=e,this.children=t}static fromObject(e){let t=new E(null);return L(e,(s,i)=>{t=t.set(new S(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:C(),value:this.value};if(g(e))return null;{const s=m(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(T(e),t);return r!=null?{path:R(new S(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(g(e))return this;{const t=m(e),s=this.children.get(t);return s!==null?s.subtree(T(e)):new E(null)}}set(e,t){if(g(e))return new E(t,this.children);{const s=m(e),r=(this.children.get(s)||new E(null)).set(T(e),t),o=this.children.insert(s,r);return new E(this.value,o)}}remove(e){if(g(e))return this.children.isEmpty()?new E(null):new E(null,this.children);{const t=m(e),s=this.children.get(t);if(s){const i=s.remove(T(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new E(null):new E(this.value,r)}else return this}}get(e){if(g(e))return this.value;{const t=m(e),s=this.children.get(t);return s?s.get(T(e)):null}}setTree(e,t){if(g(e))return t;{const s=m(e),r=(this.children.get(s)||new E(null)).setTree(T(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new E(this.value,o)}}fold(e){return this.fold_(C(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(R(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,C(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(g(e))return null;{const r=m(e),o=this.children.get(r);return o?o.findOnPath_(T(e),R(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,C(),t)}foreachOnPath_(e,t,s){if(g(e))return this;{this.value&&s(t,this.value);const i=m(e),r=this.children.get(i);return r?r.foreachOnPath_(T(e),R(t,i),s):new E(null)}}foreach(e){this.foreach_(C(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(R(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class U{constructor(e){this.writeTree_=e}static empty(){return new U(new E(null))}}function ye(n,e,t){if(g(e))return new U(new E(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=D(i,e);return r=r.updateChild(o,t),new U(n.writeTree_.set(i,r))}else{const i=new E(t),r=n.writeTree_.setTree(e,i);return new U(r)}}}function an(n,e,t){let s=n;return L(t,(i,r)=>{s=ye(s,R(e,i),r)}),s}function cn(n,e){if(g(e))return U.empty();{const t=n.writeTree_.setTree(e,new E(null));return new U(t)}}function lt(n,e){return Z(n,e)!=null}function Z(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(D(t.path,e)):null}function hn(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(O,(s,i)=>{e.push(new y(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new y(s,i.value))}),e}function V(n,e){if(g(e))return n;{const t=Z(n,e);return t!=null?new U(new E(t)):new U(n.writeTree_.subtree(e))}}function at(n){return n.writeTree_.isEmpty()}function ae(n,e){return us(C(),n.writeTree_,e)}function us(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(d(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=us(R(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(R(n,".priority"),s)),t}}/**
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
 */function ds(n,e){return ms(e,n)}function kr(n,e,t,s,i){d(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=ye(n.visibleWrites,e,t)),n.lastWriteId=s}function Ar(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function Or(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);d(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const l=n.allWrites[o];l.visible&&(o>=t&&Mr(l,s.path)?i=!1:W(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Pr(n),!0;if(s.snap)n.visibleWrites=cn(n.visibleWrites,s.path);else{const l=s.children;L(l,a=>{n.visibleWrites=cn(n.visibleWrites,R(s.path,a))})}return!0}else return!1}function Mr(n,e){if(n.snap)return W(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&W(R(n.path,t),e))return!0;return!1}function Pr(n){n.visibleWrites=fs(n.allWrites,xr,C()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function xr(n){return n.visible}function fs(n,e,t){let s=U.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let l;if(r.snap)W(t,o)?(l=D(t,o),s=ye(s,l,r.snap)):W(o,t)&&(l=D(o,t),s=ye(s,C(),r.snap.getChild(l)));else if(r.children){if(W(t,o))l=D(t,o),s=an(s,l,r.children);else if(W(o,t))if(l=D(o,t),g(l))s=an(s,C(),r.children);else{const a=oe(r.children,m(l));if(a){const c=a.getChild(T(l));s=ye(s,C(),c)}}}else throw Ee("WriteRecord should have .snap or .children")}}return s}function _s(n,e,t,s,i){if(!s&&!i){const r=Z(n.visibleWrites,e);if(r!=null)return r;{const o=V(n.visibleWrites,e);if(at(o))return t;if(t==null&&!lt(o,C()))return null;{const l=t||v.EMPTY_NODE;return ae(o,l)}}}else{const r=V(n.visibleWrites,e);if(!i&&at(r))return t;if(!i&&t==null&&!lt(r,C()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(W(c.path,e)||W(e,c.path))},l=fs(n.allWrites,o,e),a=t||v.EMPTY_NODE;return ae(l,a)}}}function Dr(n,e,t){let s=v.EMPTY_NODE;const i=Z(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(O,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=V(n.visibleWrites,e);return t.forEachChild(O,(o,l)=>{const a=ae(V(r,new S(o)),l);s=s.updateImmediateChild(o,a)}),hn(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=V(n.visibleWrites,e);return hn(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Lr(n,e,t,s,i){d(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=R(e,t);if(lt(n.visibleWrites,r))return null;{const o=V(n.visibleWrites,r);return at(o)?i.getChild(t):ae(o,i.getChild(t))}}function Fr(n,e,t,s){const i=R(e,t),r=Z(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=V(n.visibleWrites,i);return ae(o,s.getNode().getImmediateChild(t))}else return null}function Wr(n,e){return Z(n.visibleWrites,e)}function Ur(n,e,t,s,i,r,o){let l;const a=V(n.visibleWrites,e),c=Z(a,C());if(c!=null)l=c;else if(t!=null)l=ae(a,t);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),f=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=f.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=f.getNext();return u}else return[]}function Hr(){return{visibleWrites:U.empty(),allWrites:[],lastWriteId:-1}}function ct(n,e,t,s){return _s(n.writeTree,n.treePath,e,t,s)}function ps(n,e){return Dr(n.writeTree,n.treePath,e)}function un(n,e,t,s){return Lr(n.writeTree,n.treePath,e,t,s)}function Fe(n,e){return Wr(n.writeTree,R(n.treePath,e))}function Gr(n,e,t,s,i,r){return Ur(n.writeTree,n.treePath,e,t,s,i,r)}function St(n,e,t){return Fr(n.writeTree,n.treePath,e,t)}function gs(n,e){return ms(R(n.treePath,e),n.writeTree)}function ms(n,e){return{treePath:n,writeTree:e}}/**
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
 */class qr{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;d(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),d(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,sn(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,mr(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,gr(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,sn(s,e.snapshotNode,i.oldSnap));else throw Ee("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Br{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const ys=new Br;class It{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Tt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return St(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:J(this.viewCache_),r=Gr(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}function Vr(n,e){d(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),d(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Kr(n,e,t,s,i){const r=new qr;let o,l;if(t.type===H.OVERWRITE){const c=t;c.source.fromUser?o=ht(n,e,c.path,c.snap,s,i,r):(d(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!g(c.path),o=We(n,e,c.path,c.snap,s,i,l,r))}else if(t.type===H.MERGE){const c=t;c.source.fromUser?o=zr(n,e,c.path,c.children,s,i,r):(d(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=ut(n,e,c.path,c.children,s,i,l,r))}else if(t.type===H.ACK_USER_WRITE){const c=t;c.revert?o=$r(n,e,c.path,s,i,r):o=jr(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===H.LISTEN_COMPLETE)o=Qr(n,e,t.path,s,r);else throw Ee("Unknown operation type: "+t.type);const a=r.getChanges();return Yr(e,o,a),{viewCache:o,changes:a}}function Yr(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=ot(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(pr(ot(e)))}}function vs(n,e,t,s,i,r){const o=e.eventCache;if(Fe(s,t)!=null)return e;{let l,a;if(g(t))if(d(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=J(e),u=c instanceof v?c:v.EMPTY_NODE,h=ps(s,u);l=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=ct(s,J(e));l=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=m(t);if(c===".priority"){d(K(t)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=un(s,t,u,a);h!=null?l=n.filter.updatePriority(u,h):l=o.getNode()}else{const u=T(t);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const f=un(s,t,o.getNode(),a);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=St(s,c,e.serverCache);h!=null?l=n.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return me(e,l,o.isFullyInitialized()||g(t),n.filter.filtersNodes())}}function We(n,e,t,s,i,r,o,l){const a=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(g(t))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(t,s);c=u.updateFullNode(a.getNode(),_,null)}else{const _=m(t);if(!a.isCompleteForPath(t)&&K(t)>1)return e;const p=T(t),x=a.getNode().getImmediateChild(_).updateChild(p,s);_===".priority"?c=u.updatePriority(a.getNode(),x):c=u.updateChild(a.getNode(),_,x,p,ys,null)}const h=hs(e,c,a.isFullyInitialized()||g(t),u.filtersNodes()),f=new It(i,h,r);return vs(n,h,t,i,f,l)}function ht(n,e,t,s,i,r,o){const l=e.eventCache;let a,c;const u=new It(i,e,r);if(g(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),a=me(e,c,!0,n.filter.filtersNodes());else{const h=m(t);if(h===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),a=me(e,c,l.isFullyInitialized(),l.isFiltered());else{const f=T(t),_=l.getNode().getImmediateChild(h);let p;if(g(f))p=s;else{const b=u.getCompleteChild(h);b!=null?Qn(f)===".priority"&&b.getChild(Xn(f)).isEmpty()?p=b:p=b.updateChild(f,s):p=v.EMPTY_NODE}if(_.equals(p))a=e;else{const b=n.filter.updateChild(l.getNode(),h,p,f,u,o);a=me(e,b,l.isFullyInitialized(),n.filter.filtersNodes())}}}return a}function dn(n,e){return n.eventCache.isCompleteForChild(e)}function zr(n,e,t,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=R(t,a);dn(e,m(u))&&(l=ht(n,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=R(t,a);dn(e,m(u))||(l=ht(n,l,u,c,i,r,o))}),l}function fn(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function ut(n,e,t,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;g(t)?c=s:c=new E(null).setTree(t,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),p=fn(n,_,f);a=We(n,a,new S(h),p,i,r,o,l)}}),c.children.inorderTraversal((h,f)=>{const _=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!_){const p=e.serverCache.getNode().getImmediateChild(h),b=fn(n,p,f);a=We(n,a,new S(h),b,i,r,o,l)}}),a}function jr(n,e,t,s,i,r,o){if(Fe(i,t)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(g(t)&&a.isFullyInitialized()||a.isCompleteForPath(t))return We(n,e,t,a.getNode().getChild(t),i,r,l,o);if(g(t)){let c=new E(null);return a.getNode().forEachChild(re,(u,h)=>{c=c.set(new S(u),h)}),ut(n,e,t,c,i,r,l,o)}else return e}else{let c=new E(null);return s.foreach((u,h)=>{const f=R(t,u);a.isCompleteForPath(f)&&(c=c.set(u,a.getNode().getChild(f)))}),ut(n,e,t,c,i,r,l,o)}}function Qr(n,e,t,s,i){const r=e.serverCache,o=hs(e,r.getNode(),r.isFullyInitialized()||g(t),r.isFiltered());return vs(n,o,t,s,ys,i)}function $r(n,e,t,s,i,r){let o;if(Fe(s,t)!=null)return e;{const l=new It(s,e,i),a=e.eventCache.getNode();let c;if(g(t)||m(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=ct(s,J(e));else{const h=e.serverCache.getNode();d(h instanceof v,"serverChildren would be complete if leaf node"),u=ps(s,h)}u=u,c=n.filter.updateFullNode(a,u,r)}else{const u=m(t);let h=St(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=n.filter.updateChild(a,u,h,T(t),l,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(a,u,v.EMPTY_NODE,T(t),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ct(s,J(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Fe(s,C())!=null,me(e,c,o,n.filter.filtersNodes())}}function Xr(n,e){const t=J(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!g(e)&&!t.getImmediateChild(m(e)).isEmpty())?t.getChild(e):null}function _n(n,e,t,s){e.type===H.MERGE&&e.source.queryId!==null&&(d(J(n.viewCache_),"We should always have a full cache before handling merges"),d(ot(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=Kr(n.processor_,i,e,t,s);return Vr(n.processor_,r.viewCache),d(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Jr(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Jr(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return wr(n.eventGenerator_,e,t,i)}/**
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
 */let pn;function Zr(n){d(!pn,"__referenceConstructor has already been defined"),pn=n}function wt(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return d(r!=null,"SyncTree gave us an op for an invalid query."),_n(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(_n(o,e,t,s));return r}}function Rt(n,e){let t=null;for(const s of n.views.values())t=t||Xr(s,e);return t}/**
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
 */let gn;function eo(n){d(!gn,"__referenceConstructor has already been defined"),gn=n}class mn{constructor(e){this.listenProvider_=e,this.syncPointTree_=new E(null),this.pendingWriteTree_=Hr(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function to(n,e,t,s,i){return kr(n.pendingWriteTree_,e,t,s,i),i?qe(n,new X(os(),e,t)):[]}function se(n,e,t=!1){const s=Ar(n.pendingWriteTree_,e);if(Or(n.pendingWriteTree_,e)){let r=new E(null);return s.snap!=null?r=r.set(C(),!0):L(s.children,o=>{r=r.set(new S(o),!0)}),qe(n,new Le(s.path,r,t))}else return[]}function Ge(n,e,t){return qe(n,new X(ls(),e,t))}function no(n,e,t){const s=E.fromObject(t);return qe(n,new Ce(ls(),e,s))}function so(n,e,t,s){const i=Ss(n,s);if(i!=null){const r=Is(i),o=r.path,l=r.queryId,a=D(o,e),c=new X(as(l),a,t);return ws(n,o,c)}else return[]}function io(n,e,t,s){const i=Ss(n,s);if(i){const r=Is(i),o=r.path,l=r.queryId,a=D(o,e),c=E.fromObject(t),u=new Ce(as(l),a,c);return ws(n,o,u)}else return[]}function Cs(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,l)=>{const a=D(o,e),c=Rt(l,a);if(c)return c});return _s(i,e,r,t,!0)}function qe(n,e){return Es(e,n.syncPointTree_,null,ds(n.pendingWriteTree_,C()))}function Es(n,e,t,s){if(g(n.path))return Ts(n,e,t,s);{const i=e.get(C());t==null&&i!=null&&(t=Rt(i,C()));let r=[];const o=m(n.path),l=n.operationForChild(o),a=e.children.get(o);if(a&&l){const c=t?t.getImmediateChild(o):null,u=gs(s,o);r=r.concat(Es(l,a,c,u))}return i&&(r=r.concat(wt(i,n,s,t))),r}}function Ts(n,e,t,s){const i=e.get(C());t==null&&i!=null&&(t=Rt(i,C()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=t?t.getImmediateChild(o):null,c=gs(s,o),u=n.operationForChild(o);u&&(r=r.concat(Ts(u,l,a,c)))}),i&&(r=r.concat(wt(i,n,s,t))),r}function Ss(n,e){return n.tagToQueryMap.get(e)}function Is(n){const e=n.indexOf("$");return d(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new S(n.substr(0,e))}}function ws(n,e,t){const s=n.syncPointTree_.get(e);d(s,"Missing sync point for query tag that we're tracking");const i=ds(n.pendingWriteTree_,e);return wt(s,t,i,null)}/**
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
 */class Nt{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Nt(t)}node(){return this.node_}}class bt{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=R(this.path_,e);return new bt(this.syncTree_,t)}node(){return Cs(this.syncTree_,this.path_)}}const ro=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},yn=function(n,e,t){if(!n||typeof n!="object")return n;if(d(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return oo(n[".sv"],e,t);if(typeof n[".sv"]=="object")return lo(n[".sv"],e);d(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},oo=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:d(!1,"Unexpected server value: "+n)}},lo=function(n,e,t){n.hasOwnProperty("increment")||d(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&d(!1,"Unexpected increment value: "+s);const i=e.node();if(d(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},ao=function(n,e,t,s){return kt(e,new bt(t,n),s)},co=function(n,e,t){return kt(n,new Nt(e),t)};function kt(n,e,t){const s=n.getPriority().val(),i=yn(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,l=yn(o.getValue(),e,t);return l!==o.getValue()||i!==o.getPriority().val()?new I(l,A(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new I(i))),o.forEachChild(O,(l,a)=>{const c=kt(a,e.getImmediateChild(l),t);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
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
 */class At{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Ot(n,e){let t=e instanceof S?e:new S(e),s=n,i=m(t);for(;i!==null;){const r=oe(s.node.children,i)||{children:{},childCount:0};s=new At(i,s,r),t=T(t),i=m(t)}return s}function he(n){return n.node.value}function Rs(n,e){n.node.value=e,dt(n)}function Ns(n){return n.node.childCount>0}function ho(n){return he(n)===void 0&&!Ns(n)}function Be(n,e){L(n.node.children,(t,s)=>{e(new At(t,n,s))})}function bs(n,e,t,s){t&&!s&&e(n),Be(n,i=>{bs(i,e,!0,s)}),t&&s&&e(n)}function uo(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Re(n){return new S(n.parent===null?n.name:Re(n.parent)+"/"+n.name)}function dt(n){n.parent!==null&&fo(n.parent,n.name,n)}function fo(n,e,t){const s=ho(t),i=B(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,dt(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,dt(n))}/**
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
 */const _o=/[\[\].#$\/\u0000-\u001F\u007F]/,po=/[\[\].#$\u0000-\u001F\u007F]/,Je=10*1024*1024,ks=function(n){return typeof n=="string"&&n.length!==0&&!_o.test(n)},go=function(n){return typeof n=="string"&&n.length!==0&&!po.test(n)},mo=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),go(n)},As=function(n,e,t){const s=t instanceof S?new Qi(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Y(s));if(typeof e=="function")throw new Error(n+"contains a function "+Y(s)+" with contents = "+e.toString());if(kn(e))throw new Error(n+"contains "+e.toString()+" "+Y(s));if(typeof e=="string"&&e.length>Je/3&&Ue(e)>Je)throw new Error(n+"contains a string greater than "+Je+" utf8 bytes "+Y(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(L(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!ks(o)))throw new Error(n+" contains an invalid key ("+o+") "+Y(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);$i(s,o),As(n,l,s),Xi(s)}),i&&r)throw new Error(n+' contains ".value" child '+Y(s)+" in addition to actual children.")}},yo=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ks(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!mo(t))throw new Error(Bs(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class vo{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Co(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!Jn(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function ee(n,e,t){Co(n,t),Eo(n,s=>W(s,e)||W(e,s))}function Eo(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(To(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function To(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();j&&k("event: "+t.toString()),Ie(s)}}}/**
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
 */const So="repo_interrupt",Io=25;class wo{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new vo,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=De(),this.transactionQueueTree_=new At,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Ro(n,e,t){if(n.stats_=mt(n.repoInfo_),n.forceRestClient_||vi())n.server_=new xe(n.repoInfo_,(s,i,r,o)=>{vn(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Cn(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{N(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new q(n.repoInfo_,e,(s,i,r,o)=>{vn(n,s,i,r,o)},s=>{Cn(n,s)},s=>{bo(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=wi(n.repoInfo_,()=>new Ir(n.stats_,n.server_)),n.infoData_=new vr,n.infoSyncTree_=new mn({startListening:(s,i,r,o)=>{let l=[];const a=n.infoData_.getNode(s._path);return a.isEmpty()||(l=Ge(n.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Mt(n,"connected",!1),n.serverSyncTree_=new mn({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);ee(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function No(n){const t=n.infoData_.getNode(new S(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Os(n){return ro({timestamp:No(n)})}function vn(n,e,t,s,i){n.dataUpdateCount++;const r=new S(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const a=Ae(t,c=>A(c));o=io(n.serverSyncTree_,r,a,i)}else{const a=A(t);o=so(n.serverSyncTree_,r,a,i)}else if(s){const a=Ae(t,c=>A(c));o=no(n.serverSyncTree_,r,a)}else{const a=A(t);o=Ge(n.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=xt(n,r)),ee(n.eventQueue_,l,o)}function Cn(n,e){Mt(n,"connected",e),e===!1&&Ao(n)}function bo(n,e){L(e,(t,s)=>{Mt(n,t,s)})}function Mt(n,e,t){const s=new S("/.info/"+e),i=A(t);n.infoData_.updateSnapshot(s,i);const r=Ge(n.infoSyncTree_,s,i);ee(n.eventQueue_,s,r)}function ko(n){return n.nextWriteId_++}function Ao(n){Ms(n,"onDisconnectEvents");const e=Os(n),t=De();rt(n.onDisconnect_,C(),(i,r)=>{const o=ao(i,r,n.serverSyncTree_,e);rs(t,i,o)});let s=[];rt(t,C(),(i,r)=>{s=s.concat(Ge(n.serverSyncTree_,i,r));const o=xo(n,i);xt(n,o)}),n.onDisconnect_=De(),ee(n.eventQueue_,C(),s)}function Oo(n){n.persistentConnection_&&n.persistentConnection_.interrupt(So)}function Ms(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),k(t,...e)}function Ps(n,e,t){return Cs(n.serverSyncTree_,e,t)||v.EMPTY_NODE}function Pt(n,e=n.transactionQueueTree_){if(e||Ve(n,e),he(e)){const t=Ds(n,e);d(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&Mo(n,Re(e),t)}else Ns(e)&&Be(e,t=>{Pt(n,t)})}function Mo(n,e,t){const s=t.map(c=>c.currentWriteId),i=Ps(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const u=t[c];d(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=D(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;n.server_.put(a.toString(),l,c=>{Ms(n,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<t.length;f++)t[f].status=2,u=u.concat(se(n.serverSyncTree_,t[f].currentWriteId)),t[f].onComplete&&h.push(()=>t[f].onComplete(null,!0,t[f].currentOutputSnapshotResolved)),t[f].unwatcher();Ve(n,Ot(n.transactionQueueTree_,e)),Pt(n,n.transactionQueueTree_),ee(n.eventQueue_,e,u);for(let f=0;f<h.length;f++)Ie(h[f])}else{if(c==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{P("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=c}xt(n,e)}},o)}function xt(n,e){const t=xs(n,e),s=Re(t),i=Ds(n,t);return Po(n,i,s),s}function Po(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=D(t,a.path);let u=!1,h;if(d(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(se(n.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Io)u=!0,h="maxretry",i=i.concat(se(n.serverSyncTree_,a.currentWriteId,!0));else{const f=Ps(n,a.path,o);a.currentInputSnapshot=f;const _=e[l].update(f.val());if(_!==void 0){As("transaction failed: Data returned ",_,a.path);let p=A(_);typeof _=="object"&&_!=null&&B(_,".priority")||(p=p.updatePriority(f.getPriority()));const x=a.currentWriteId,Ke=Os(n),Ne=co(p,f,Ke);a.currentOutputSnapshotRaw=p,a.currentOutputSnapshotResolved=Ne,a.currentWriteId=ko(n),o.splice(o.indexOf(x),1),i=i.concat(to(n.serverSyncTree_,a.path,Ne,a.currentWriteId,a.applyLocally)),i=i.concat(se(n.serverSyncTree_,x,!0))}else u=!0,h="nodata",i=i.concat(se(n.serverSyncTree_,a.currentWriteId,!0))}ee(n.eventQueue_,t,i),i=[],u&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}Ve(n,n.transactionQueueTree_);for(let l=0;l<s.length;l++)Ie(s[l]);Pt(n,n.transactionQueueTree_)}function xs(n,e){let t,s=n.transactionQueueTree_;for(t=m(e);t!==null&&he(s)===void 0;)s=Ot(s,t),e=T(e),t=m(e);return s}function Ds(n,e){const t=[];return Ls(n,e,t),t.sort((s,i)=>s.order-i.order),t}function Ls(n,e,t){const s=he(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);Be(e,i=>{Ls(n,i,t)})}function Ve(n,e){const t=he(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,Rs(e,t.length>0?t:void 0)}Be(e,s=>{Ve(n,s)})}function xo(n,e){const t=Re(xs(n,e)),s=Ot(n.transactionQueueTree_,e);return uo(s,i=>{Ze(n,i)}),Ze(n,s),bs(s,i=>{Ze(n,i)}),t}function Ze(n,e){const t=he(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(d(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(d(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(se(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Rs(e,void 0):t.length=r+1,ee(n.eventQueue_,Re(e),i);for(let o=0;o<s.length;o++)Ie(s[o])}}/**
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
 */function Do(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Lo(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):P(`Invalid query segment '${t}' in query '${n}'`)}return e}const En=function(n,e){const t=Fo(n),s=t.namespace;t.domain==="firebase.com"&&Q(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Q("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||ui();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Ti(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new S(t.pathString)}},Fo=function(n){let e="",t="",s="",i="",r="",o=!0,l="https",a=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(l=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(i=Do(n.substring(u,h)));const f=Lo(n.substring(Math.min(n.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")t="localhost";else if(_.split(".").length<=2)t=_;else{const p=e.indexOf(".");s=e.substring(0,p).toLowerCase(),t=e.substring(p+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:a,domain:t,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
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
 */class Dt{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return g(this._path)?null:Qn(this._path)}get ref(){return new ue(this._repo,this._path)}get _queryIdentifier(){const e=on(this._queryParams),t=pt(e);return t==="{}"?"default":t}get _queryObject(){return on(this._queryParams)}isEqual(e){if(e=$s(e),!(e instanceof Dt))return!1;const t=this._repo===e._repo,s=Jn(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+ji(this._path)}}class ue extends Dt{constructor(e,t){super(e,t,new Et,!1)}get parent(){const e=Xn(this._path);return e===null?null:new ue(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}Zr(ue);eo(ue);/**
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
 */const Wo="FIREBASE_DATABASE_EMULATOR_HOST",ft={};let Uo=!1;function Ho(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||Q("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),k("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=En(r,i),l=o.repoInfo,a,c;typeof process<"u"&&Ht&&(c=Ht[Wo]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=En(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const u=i&&a?new nt(nt.OWNER):new Ei(n.name,n.options,e);yo("Invalid Firebase Database URL",o),g(o.path)||Q("Database URL must point to the root of a Firebase Database (not including a child path).");const h=qo(l,n,u,new Ci(n.name,t));return new Bo(h,n)}function Go(n,e){const t=ft[e];(!t||t[n.key]!==n)&&Q(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Oo(n),delete t[n.key]}function qo(n,e,t,s){let i=ft[e.name];i||(i={},ft[e.name]=i);let r=i[n.toURLString()];return r&&Q("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new wo(n,Uo,t,s),i[n.toURLString()]=r,r}class Bo{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Ro(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ue(this._repo,C())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Go(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Q("Cannot call "+e+" on a deleted database.")}}/**
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
 */function Vo(n){oi(Js),Ws(new Us("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Ho(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Lt(Gt,qt,n),Lt(Gt,qt,"esm2017")}q.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};q.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Vo();function Tn(n){const e=n.data();return e&&Object.defineProperty(e,"id",{value:n.id.toString(),writable:!1}),e}function Ko(n){var e;return(((e=n.path)==null?void 0:e.match(/\//g))||[]).length%2!==0}function zo(n,e=void 0,t={}){const{errorHandler:s=a=>console.error(a),autoDispose:i=!0}=t,r=ei(n)?n:ti(()=>n);let o=()=>{};const l=ni(e);return si(r,a=>{o(),r.value?Ko(r.value)?o=Wt(a,c=>{l.value=Tn(c)||null},s):o=Wt(a,c=>{l.value=c.docs.map(Tn).filter(ii)},s):l.value=e},{immediate:!0}),i===!0?Ut(()=>{o()}):typeof i=="number"&&Ut(()=>{ri(()=>{o()},i)}),l}export{zo as u};
