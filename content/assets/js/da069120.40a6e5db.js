"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[84406],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(n),m=i,d=f["".concat(c,".").concat(m)]||f[m]||s[m]||o;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},26626:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],l={id:"client-cpp-2.5.2",title:"Client CPP 2.5.2",sidebar_label:"Client CPP 2.5.2"},c=void 0,p={unversionedId:"versioned/client-cpp-2.5.2",id:"versioned/client-cpp-2.5.2",title:"Client CPP 2.5.2",description:"* CPP Client] Auto update topic partitions [#6732",source:"@site/release-notes/versioned/client-cpp-2.5.2.md",sourceDirName:"versioned",slug:"/versioned/client-cpp-2.5.2",permalink:"/release-notes/versioned/client-cpp-2.5.2",draft:!1,tags:[],version:"current",frontMatter:{id:"client-cpp-2.5.2",title:"Client CPP 2.5.2",sidebar_label:"Client CPP 2.5.2"}},u={},s=[],f={toc:s};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"[CPP Client]"," Auto update topic partitions ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6732"},"#6732")),(0,o.kt)("li",{parentName:"ul"},"[CPP Client]"," Subscription InitialPosition is not correctly set on regex consumers. ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6810"},"#6810")),(0,o.kt)("li",{parentName:"ul"},"[CPP Client]"," Fix message id is always the default value in send callback ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6812"},"#6812")),(0,o.kt)("li",{parentName:"ul"},"[CPP Client]"," Fix message id error if messages were sent to a partitioned topic ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6938"},"#6938"))))}m.isMDXComponent=!0}}]);