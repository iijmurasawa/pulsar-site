"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[88175],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(r),h=n,f=m["".concat(o,".").concat(h)]||m[h]||s[h]||l;return r?a.createElement(f,i(i({ref:t},c),{},{components:r})):a.createElement(f,i({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},97634:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return s}});var a=r(87462),n=r(63366),l=(r(67294),r(3905)),i=["components"],p={id:"client-cpp-2.8.0",title:"Client CPP 2.8.0",sidebar_label:"Client CPP 2.8.0"},o=void 0,u={unversionedId:"versioned/client-cpp-2.8.0",id:"versioned/client-cpp-2.8.0",title:"Client CPP 2.8.0",description:"- Fix dangling reference bug in getRandomName #8596",source:"@site/release-notes/versioned/client-cpp-2.8.0.md",sourceDirName:"versioned",slug:"/versioned/client-cpp-2.8.0",permalink:"/release-notes/versioned/client-cpp-2.8.0",draft:!1,tags:[],version:"current",frontMatter:{id:"client-cpp-2.8.0",title:"Client CPP 2.8.0",sidebar_label:"Client CPP 2.8.0"}},c={},s=[],m={toc:s};function h(e){var t=e.components,r=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fix dangling reference bug in getRandomName ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8596"},"#8596")),(0,l.kt)("li",{parentName:"ul"},"Optimize batch message buffer allocation ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8749"},"#8749")),(0,l.kt)("li",{parentName:"ul"},"Make pool connections configurable in perf tools ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8913"},"#8913")),(0,l.kt)("li",{parentName:"ul"},"Support setting listener name ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9119"},"#9119")),(0,l.kt)("li",{parentName:"ul"},"Fix batch message handling of the UnAckedMessageTracker ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9170"},"#9170")),(0,l.kt)("li",{parentName:"ul"},"Fix ServerError is not converted to string in log ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9277"},"#9277")),(0,l.kt)("li",{parentName:"ul"},"Remove Boost::System runtime dependency ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9498"},"#9498")),(0,l.kt)("li",{parentName:"ul"},"Removed usages of boost::regex ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9533"},"#9533")),(0,l.kt)("li",{parentName:"ul"},"Account for different variables names on different CMake versions ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9559"},"#9559")),(0,l.kt)("li",{parentName:"ul"},"Allow to disable static or dynamic lib at build time ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9570"},"#9570")),(0,l.kt)("li",{parentName:"ul"},"Avoid multiple compilations of same source files ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9675"},"#9675")),(0,l.kt)("li",{parentName:"ul"},"Support configure debug level logs simply ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10031"},"#10031")),(0,l.kt)("li",{parentName:"ul"},"Add /opt/homebrew/ as a possible path for OpenSSL on Mac ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10141"},"#10141")),(0,l.kt)("li",{parentName:"ul"},"Fix race condition in MemoryLimitController ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10142"},"#10142")),(0,l.kt)("li",{parentName:"ul"},"Fix releasing semaphore and memory quota after send timeout ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10144"},"#10144")),(0,l.kt)("li",{parentName:"ul"},"Allow configuring memory limit from C API ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10145"},"#10145")),(0,l.kt)("li",{parentName:"ul"},"Fix use-after-free undefined behavior due to object lifetime problem ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10220"},"#10220")),(0,l.kt)("li",{parentName:"ul"},"Support enable replicate subscription ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10243"},"#10243")),(0,l.kt)("li",{parentName:"ul"},"Fix C++ client cannot be built with Boost <=1.53 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10307"},"#10307")),(0,l.kt)("li",{parentName:"ul"},"Support check connect state ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10349"},"#10349")),(0,l.kt)("li",{parentName:"ul"},"Avoid sending flow requests with zero permits ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10506"},"#10506")),(0,l.kt)("li",{parentName:"ul"},"Add single file logger factory ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10712"},"#10712")),(0,l.kt)("li",{parentName:"ul"},"Reduce redeliverMessages when message listener is enabled ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10726"},"#10726"))))}h.isMDXComponent=!0}}]);