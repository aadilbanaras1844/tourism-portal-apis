(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1/sq":function(e,t,s){"use strict";var i=s("8Y7J"),n=s("VLCt");s("EnPg"),s.d(t,"a",(function(){return r})),s.d(t,"b",(function(){return o}));var r=i.mb({encapsulation:0,styles:[["img[_ngcontent-%COMP%]{max-width:100%;max-height:150px;width:100%}"]],data:{}});function o(e){return i.Gb(0,[(e()(),i.ob(0,0,null,null,1,"img",[],null,null,null,null,null)),i.nb(1,1720320,null,0,n.a,[i.k,i.x,i.z,[2,"options"]],{lazyImage:[0,"lazyImage"],defaultImage:[1,"defaultImage"],errorImage:[2,"errorImage"]},null)],(function(e,t){var s=t.component;e(t,1,0,s.ImagePath+s._src,"assets/images/image-loading.gif","assets/images/image-loading-error.png")}),null)}},EnPg:function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));class i{constructor(){this.ImagePath="https://storage.cloud.google.com/tourism-268807.appspot.com/"}ngOnInit(){}}},SP4c:function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));class i{}},VLCt:function(e,t,s){"use strict";var i=s("SVse"),n=s("8Y7J"),r=s("XNiG"),o=s("HDdC"),a=s("LRne"),c=s("quSY");class l extends c.a{constructor(e,t){super()}schedule(e,t=0){return this}}class u extends l{constructor(e,t){super(e,t),this.scheduler=e,this.work=t,this.pending=!1}schedule(e,t=0){if(this.closed)return this;this.state=e;const s=this.id,i=this.scheduler;return null!=s&&(this.id=this.recycleAsyncId(i,s,t)),this.pending=!0,this.delay=t,this.id=this.id||this.requestAsyncId(i,this.id,t),this}requestAsyncId(e,t,s=0){return setInterval(e.flush.bind(e,this),s)}recycleAsyncId(e,t,s=0){if(null!==s&&this.delay===s&&!1===this.pending)return t;clearInterval(t)}execute(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const s=this._execute(e,t);if(s)return s;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(e,t){let s=!1,i=void 0;try{this.work(e)}catch(n){s=!0,i=!!n&&n||new Error(n)}if(s)return this.unsubscribe(),i}_unsubscribe(){const e=this.id,t=this.scheduler,s=t.actions,i=s.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==i&&s.splice(i,1),null!=e&&(this.id=this.recycleAsyncId(t,e,null)),this.delay=null}}class h extends u{constructor(e,t){super(e,t),this.scheduler=e,this.work=t}schedule(e,t=0){return t>0?super.schedule(e,t):(this.delay=t,this.state=e,this.scheduler.flush(this),this)}execute(e,t){return t>0||this.closed?super.execute(e,t):this._execute(e,t)}requestAsyncId(e,t,s=0){return null!==s&&s>0||null===s&&this.delay>0?super.requestAsyncId(e,t,s):e.flush(this)}}let d=(()=>{class e{constructor(t,s=e.now){this.SchedulerAction=t,this.now=s}schedule(e,t=0,s){return new this.SchedulerAction(this,e).schedule(s,t)}}return e.now=()=>Date.now(),e})();class f extends d{constructor(e,t=d.now){super(e,()=>f.delegate&&f.delegate!==this?f.delegate.now():t()),this.actions=[],this.active=!1,this.scheduled=void 0}schedule(e,t=0,s){return f.delegate&&f.delegate!==this?f.delegate.schedule(e,t,s):super.schedule(e,t,s)}flush(e){const{actions:t}=this;if(this.active)return void t.push(e);let s;this.active=!0;do{if(s=e.execute(e.state,e.delay))break}while(e=t.shift());if(this.active=!1,s){for(;e=t.shift();)e.unsubscribe();throw s}}}class g extends f{}const m=new g(h);var b=s("7o/Q"),p=s("EY2u");let w=(()=>{class e{constructor(e,t,s){this.kind=e,this.value=t,this.error=s,this.hasValue="N"===e}observe(e){switch(this.kind){case"N":return e.next&&e.next(this.value);case"E":return e.error&&e.error(this.error);case"C":return e.complete&&e.complete()}}do(e,t,s){switch(this.kind){case"N":return e&&e(this.value);case"E":return t&&t(this.error);case"C":return s&&s()}}accept(e,t,s){return e&&"function"==typeof e.next?this.observe(e):this.do(e,t,s)}toObservable(){switch(this.kind){case"N":return Object(a.a)(this.value);case"E":return e=this.error,new o.a(t=>t.error(e));case"C":return Object(p.b)()}var e;throw new Error("unexpected notification kind value")}static createNext(t){return void 0!==t?new e("N",t):e.undefinedValueNotification}static createError(t){return new e("E",void 0,t)}static createComplete(){return e.completeNotification}}return e.completeNotification=new e("C"),e.undefinedValueNotification=new e("N",void 0),e})();class I extends b.a{constructor(e,t,s=0){super(e),this.scheduler=t,this.delay=s}static dispatch(e){const{notification:t,destination:s}=e;t.observe(s),this.unsubscribe()}scheduleMessage(e){this.destination.add(this.scheduler.schedule(I.dispatch,this.delay,new v(e,this.destination)))}_next(e){this.scheduleMessage(w.createNext(e))}_error(e){this.scheduleMessage(w.createError(e)),this.unsubscribe()}_complete(){this.scheduleMessage(w.createComplete()),this.unsubscribe()}}class v{constructor(e,t){this.notification=e,this.destination=t}}var y=s("9ppp"),x=s("Ylt2");class O extends r.a{constructor(e=Number.POSITIVE_INFINITY,t=Number.POSITIVE_INFINITY,s){super(),this.scheduler=s,this._events=[],this._infiniteTimeWindow=!1,this._bufferSize=e<1?1:e,this._windowTime=t<1?1:t,t===Number.POSITIVE_INFINITY?(this._infiniteTimeWindow=!0,this.next=this.nextInfiniteTimeWindow):this.next=this.nextTimeWindow}nextInfiniteTimeWindow(e){const t=this._events;t.push(e),t.length>this._bufferSize&&t.shift(),super.next(e)}nextTimeWindow(e){this._events.push(new N(this._getNow(),e)),this._trimBufferThenGetEvents(),super.next(e)}_subscribe(e){const t=this._infiniteTimeWindow,s=t?this._events:this._trimBufferThenGetEvents(),i=this.scheduler,n=s.length;let r;if(this.closed)throw new y.a;if(this.isStopped||this.hasError?r=c.a.EMPTY:(this.observers.push(e),r=new x.a(this,e)),i&&e.add(e=new I(e,i)),t)for(let o=0;o<n&&!e.closed;o++)e.next(s[o]);else for(let o=0;o<n&&!e.closed;o++)e.next(s[o].value);return this.hasError?e.error(this.thrownError):this.isStopped&&e.complete(),r}_getNow(){return(this.scheduler||m).now()}_trimBufferThenGetEvents(){const e=this._getNow(),t=this._bufferSize,s=this._windowTime,i=this._events,n=i.length;let r=0;for(;r<n&&!(e-i[r].time<s);)r++;return n>t&&(r=Math.max(r,n-t)),r>0&&i.splice(0,r),i}}class N{constructor(e,t){this.time=e,this.value=t}}var E=s("pLZG"),_=s("IzEk"),k=s("5+tZ"),S=s("vkgz"),C=s("lJxs"),T=s("JIr8"),j=s("eIep");function P(e,t){e.className.includes(t)||(e.className+=` ${t}`)}function z(){return"undefined"!=typeof window?window.navigator:void 0}function A(e){return Boolean(e.parentElement&&"picture"===e.parentElement.nodeName.toLowerCase())}function V(e){return"img"===e.nodeName.toLowerCase()}function B(e,t,s){return V(e)?s&&"srcset"in e?e.srcset=t:e.src=t:e.style.backgroundImage=`url('${t}')`,e}function L(e){return t=>{const s=t.parentElement.getElementsByTagName("source");for(let i=0;i<s.length;i++){const t=s[i].getAttribute(e);t&&("srcset"in s[i]?s[i].srcset=t:s[i].src=t)}}}s("w1tV"),s("JX91"),s.d(t,"a",(function(){return U})),s.d(t,"b",(function(){return te}));const M=L("defaultImage"),W=L("lazyLoad"),Y=L("errorImage");function q(e){return(t,s,i)=>{V(t)&&A(t)&&e(t),s&&B(t,s,i)}}const J=q(M),G=q(W),$=q(Y),R={finally:({element:e})=>P(e,"ng-lazyloaded"),loadImage:({element:e,useSrcset:t,imagePath:s,decode:i})=>{let n;if(V(e)&&A(e)){const i=e.parentNode.cloneNode(!0);n=i.getElementsByTagName("img")[0],W(n),B(n,s,t)}else n=new Image,V(e)&&e.sizes&&(n.sizes=e.sizes),t&&"srcset"in n?n.srcset=s:n.src=s;return i&&n.decode?n.decode().then(()=>s):new Promise((e,t)=>{n.onload=()=>e(s),n.onerror=()=>t(null)})},setErrorImage:({element:e,errorImagePath:t,useSrcset:s})=>{$(e,t,s),P(e,"ng-failed-lazyloaded")},setLoadedImage:({element:e,imagePath:t,useSrcset:s})=>{G(e,t,s)},setup:({element:e,defaultImagePath:t,useSrcset:s})=>{J(e,t,s),function(e,t){return e.className&&e.className.includes("ng-lazyloaded")}(e)&&function(e,t){e.className=e.className.replace("ng-lazyloaded","")}(e)},isBot:e=>!(!e||!e.userAgent)&&/googlebot|bingbot|yandex|baiduspider|facebookexternalhit|twitterbot|rogerbot|linkedinbot|embedly|quora\ link\ preview|showyoubot|outbrain|pinterest\/0\.|pinterestbot|slackbot|vkShare|W3C_Validator|whatsapp|duckduckbot/i.test(e.userAgent)},Z=new WeakMap,D=new r.a;function F(e){e.forEach(e=>D.next(e))}const X={},H=e=>{const t=e.scrollContainer||X,s={root:e.scrollContainer||null};e.offset&&(s.rootMargin=`${e.offset}px`);let i=Z.get(t);return i||(i=new IntersectionObserver(F,s),Z.set(t,i)),i.observe(e.element),o.a.create(t=>{const s=D.pipe(Object(E.a)(t=>t.target===e.element)).subscribe(t);return()=>{s.unsubscribe(),i.unobserve(e.element)}})},Q=Object.assign({},R,{isVisible:({event:e})=>e.isIntersecting,getObservable:(e,t=H)=>e.customObservable?e.customObservable:t(e)}),K=Object.assign({},R,{isVisible:()=>!0,getObservable:()=>Object(a.a)("load"),loadImage:({imagePath:e})=>[e]});let U=class{constructor(e,t,s,i){this.onLoad=new n.m,this.elementRef=e,this.ngZone=t,this.propertyChanges$=new O,this.platformId=s,this.hooks=function(e,t){const s=Q,i=t&&t.isBot?t.isBot:s.isBot;if(i(z(),e))return Object.assign(K,{isBot:i});if(!t)return s;const n={};return Object.assign(n,t.preset?t.preset:s),Object.keys(t).filter(e=>"preset"!==e).forEach(e=>{n[e]=t[e]}),n}(s,i)}ngOnChanges(){this.propertyChanges$.next({element:this.elementRef.nativeElement,imagePath:this.lazyImage,defaultImagePath:this.defaultImage,errorImagePath:this.errorImage,useSrcset:this.useSrcset,offset:this.offset?0|this.offset:0,scrollContainer:this.scrollTarget,customObservable:this.customObservable,decode:this.decode})}ngAfterContentInit(){if(Object(i.o)(this.platformId)&&!this.hooks.isBot(z(),this.platformId))return null;this.ngZone.runOutsideAngular(()=>{this.scrollSubscription=this.propertyChanges$.pipe(Object(S.a)(e=>this.hooks.setup(e)),Object(j.a)(e=>this.hooks.getObservable(e).pipe(function(e,t){return s=>s.pipe(Object(E.a)(s=>e.isVisible({element:t.element,event:s,offset:t.offset,scrollContainer:t.scrollContainer})),Object(_.a)(1),Object(k.a)(()=>e.loadImage(t)),Object(S.a)(s=>e.setLoadedImage({element:t.element,imagePath:s,useSrcset:t.useSrcset})),Object(C.a)(()=>!0),Object(T.a)(()=>(e.setErrorImage(t),Object(a.a)(!1))),Object(S.a)(()=>e.finally(t)))}(this.hooks,e)))).subscribe(e=>this.onLoad.emit(e))})}ngOnDestroy(){this.scrollSubscription&&this.scrollSubscription.unsubscribe()}};var ee;let te=ee=class{static forRoot(e){return{ngModule:ee,providers:[{provide:"options",useValue:e}]}}}}}]);