"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[52274],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return f}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),u=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(a),f=n,h=m["".concat(p,".").concat(f)]||m[f]||s[f]||l;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},50199:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),i=["components"],o={id:"client-java-2.10.0",title:"Client Java 2.10.0",sidebar_label:"Client Java 2.10.0"},p=void 0,u={unversionedId:"versioned/client-java-2.10.0",id:"versioned/client-java-2.10.0",title:"Client Java 2.10.0",description:"- Java] Support creating a consumer in the paused state [#11974",source:"@site/release-notes/versioned/client-java-2.10.0.md",sourceDirName:"versioned",slug:"/versioned/client-java-2.10.0",permalink:"/release-notes/versioned/client-java-2.10.0",draft:!1,tags:[],version:"current",frontMatter:{id:"client-java-2.10.0",title:"Client Java 2.10.0",sidebar_label:"Client Java 2.10.0"}},c={},s=[],m={toc:s};function f(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[Java]"," Support creating a consumer in the paused state ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11974"},"#11974")),(0,l.kt)("li",{parentName:"ul"},"[Java]"," Support passing existing executor providers to the client ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12037"},"#12037")),(0,l.kt)("li",{parentName:"ul"},"[Java]"," Fix the producer OOM if got an exception while adding messages to batch container ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12170"},"#12170")),(0,l.kt)("li",{parentName:"ul"},"[Java]"," Allow to config client allocator out of memory policy ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12200"},"#12200")),(0,l.kt)("li",{parentName:"ul"},"[Java]"," Support negative ack redelivery backoff ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12566"},"#12566")),(0,l.kt)("li",{parentName:"ul"},"[Java]"," Fix confusing logs in UnAckedMessageTracker ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13017"},"#13017")),(0,l.kt)("li",{parentName:"ul"},"[Java]"," Fix parseProtobufSchema method will be called two times ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13163"},"#13163")),(0,l.kt)("li",{parentName:"ul"},"[Java]"," Add getNumPartitions method into PartitionedProducerImpl ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13239"},"#13239")),(0,l.kt)("li",{parentName:"ul"},"[Java]"," Allow config client dns bind addr and port ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13390"},"#13390")),(0,l.kt)("li",{parentName:"ul"},"[Java]"," Support adding custom properties for the reconsumeLater interface ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13461"},"#13461")),(0,l.kt)("li",{parentName:"ul"},"[Java]"," Allow Client Builder set Dnslookup params ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13503"},"#13503")),(0,l.kt)("li",{parentName:"ul"},"[Java]"," Avoid repeatedly set startMessageIdData to null for ConsumerImpl ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13606"},"#13606")),(0,l.kt)("li",{parentName:"ul"},"[Java]"," Let the 'properties' to be empty for ConsumerBuilder and ProducerBuilder ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14074"},"#14074")),(0,l.kt)("li",{parentName:"ul"},"[Java]"," Log producer batchSize and msgSize percentiles ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14229"},"#14229"))))}f.isMDXComponent=!0}}]);