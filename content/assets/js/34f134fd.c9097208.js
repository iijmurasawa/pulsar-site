"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[18250],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return h}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),o=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=o(a),h=n,f=m["".concat(u,".").concat(h)]||m[h]||c[h]||l;return a?r.createElement(f,i(i({ref:t},s),{},{components:a})):r.createElement(f,i({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},97106:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return c}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),i=["components"],p={id:"client-java-2.8.3",title:"Client Java 2.8.3",sidebar_label:"Client Java 2.8.3"},u=void 0,o={unversionedId:"versioned/client-java-2.8.3",id:"versioned/client-java-2.8.3",title:"Client Java 2.8.3",description:"- Fix adding message to list potential issue 14377",source:"@site/release-notes/versioned/client-java-2.8.3.md",sourceDirName:"versioned",slug:"/versioned/client-java-2.8.3",permalink:"/release-notes/versioned/client-java-2.8.3",draft:!1,tags:[],version:"current",frontMatter:{id:"client-java-2.8.3",title:"Client Java 2.8.3",sidebar_label:"Client Java 2.8.3"}},s={},c=[],m={toc:c};function h(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fix adding message to list potential issue ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14377"},"14377")),(0,l.kt)("li",{parentName:"ul"},"Fix send to deadLetterTopic not working when reach maxRedeliverCount ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14317"},"14317")),(0,l.kt)("li",{parentName:"ul"},"Fix time unit mismatch in errMsg when producer send fails. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14299"},"14299")),(0,l.kt)("li",{parentName:"ul"},"Fix PersistentAcknowledgmentsGroupingTracker set BitSet issue. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14260"},"14260")),(0,l.kt)("li",{parentName:"ul"},"Check ",(0,l.kt)("inlineCode",{parentName:"li"},"getTlsTrustStorePath")," NPE when user forget to set it. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14253"},"14253")),(0,l.kt)("li",{parentName:"ul"},"[Issue 12262]"," Fix consume failure when BatchReceivePolicy#maxNumBytes < message size ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14139"},"14139")),(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("inlineCode",{parentName:"li"},"scheduleWithFixedDelay")," instead of ",(0,l.kt)("inlineCode",{parentName:"li"},"scheduleAtFixedRate")," for java producer batch timer ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14125"},"14125")),(0,l.kt)("li",{parentName:"ul"},"Add a default timeout for OAuth2 Metadata Resolver ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14056"},"14056")),(0,l.kt)("li",{parentName:"ul"},"Fix send chunking message failed when ordering key is set. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13699"},"13699")),(0,l.kt)("li",{parentName:"ul"},"Fixed Producer semaphore permit release issue ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13682"},"13682")),(0,l.kt)("li",{parentName:"ul"},"Fix the wrong multi-topic has message available behavior ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13634"},"13634")),(0,l.kt)("li",{parentName:"ul"},"Use PulsarByteBufAllocator to allocate buffer for chunks ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13536"},"13536")),(0,l.kt)("li",{parentName:"ul"},"Fix resources leak when create producer failed ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13505"},"13505")),(0,l.kt)("li",{parentName:"ul"},"Fix semaphore and memory leak when chunks failed to enqueue ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13454"},"13454")),(0,l.kt)("li",{parentName:"ul"},"Fix invalid setting of enabled ciphers to fix warning from BoringSSL ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13435"},"13435")),(0,l.kt)("li",{parentName:"ul"},"[Producer]"," Change the time units from ns to ms ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13057"},"13057")),(0,l.kt)("li",{parentName:"ul"},"Fix consume message order issue when use listener. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13023"},"13023")),(0,l.kt)("li",{parentName:"ul"},"Use sendAsync instead of send when produce message to retry topic. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12946"},"12946")),(0,l.kt)("li",{parentName:"ul"},"[Java Client]"," Avoid IllegalStateException in ClientCnx debug logs ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12899"},"12899")),(0,l.kt)("li",{parentName:"ul"},"[pulsar-client]"," Add conf backoff values ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12520"},"12520")),(0,l.kt)("li",{parentName:"ul"},"Add log error tracking for semaphore count leak ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12410"},"12410"))))}h.isMDXComponent=!0}}]);