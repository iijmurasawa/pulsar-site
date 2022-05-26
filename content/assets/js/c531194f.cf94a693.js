"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[79761],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return h}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),f=u(r),h=n,m=f["".concat(p,".").concat(h)]||f[h]||c[h]||l;return r?a.createElement(m,i(i({ref:t},s),{},{components:r})):a.createElement(m,i({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},32997:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var a=r(87462),n=r(63366),l=(r(67294),r(3905)),i=["components"],o={id:"pulsar-2.6.4",title:"Apache Pulsar 2.6.4",sidebar_label:"Apache Pulsar 2.6.4"},p=void 0,u={unversionedId:"versioned/pulsar-2.6.4",id:"versioned/pulsar-2.6.4",title:"Apache Pulsar 2.6.4",description:"2021-06-02",source:"@site/release-notes/versioned/pulsar-2.6.4.md",sourceDirName:"versioned",slug:"/versioned/pulsar-2.6.4",permalink:"/release-notes/versioned/pulsar-2.6.4",draft:!1,tags:[],version:"current",frontMatter:{id:"pulsar-2.6.4",title:"Apache Pulsar 2.6.4",sidebar_label:"Apache Pulsar 2.6.4"}},s={},c=[{value:"2021-06-02",id:"2021-06-02",level:4},{value:"Broker",id:"broker",level:4},{value:"Tiered storage",id:"tiered-storage",level:3}],f={toc:c};function h(e){var t=e.components,r=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"2021-06-02"},"2021-06-02"),(0,l.kt)("h4",{id:"broker"},"Broker"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Disallow parsing of token with none signature in authenticateToken ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9172"},"#9172")),(0,l.kt)("li",{parentName:"ul"},"Fix marking individual deletes as dirty ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9732"},"#9732")),(0,l.kt)("li",{parentName:"ul"},"Issue 9082: Broker expires messages one at a time after topic unload ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9083"},"#9083")),(0,l.kt)("li",{parentName:"ul"},"[logging]"," Upgrade Log4j2 version to 2.14.0, replace legacy log4j dependency with log4j-1.2-api ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8880"},"#8880")),(0,l.kt)("li",{parentName:"ul"},"Upgrade Bouncy castle to newest version ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8047"},"#8047")),(0,l.kt)("li",{parentName:"ul"},"Fixed logic for forceful topic deletion ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7356"},"#7356")),(0,l.kt)("li",{parentName:"ul"},"Perform periodic flush of ManagedCursor mark-delete posistions ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8634"},"#8634")),(0,l.kt)("li",{parentName:"ul"},"Fix the batch index ack persistent issue. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9504"},"#9504")),(0,l.kt)("li",{parentName:"ul"},"Fix the partition number not equals expected error ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9446"},"#9446")),(0,l.kt)("li",{parentName:"ul"},"Fix the closed ledger did not delete after expired ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9136"},"#9136")),(0,l.kt)("li",{parentName:"ul"},"Fix testBrokerSelectionForAntiAffinityGroup by increasing OverloadedThreshold ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9393"},"#9393"))),(0,l.kt)("h3",{id:"tiered-storage"},"Tiered storage"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[tiered-storage]"," Allow AWS credentials to be refreshed ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9387"},"#9387"))))}h.isMDXComponent=!0}}]);