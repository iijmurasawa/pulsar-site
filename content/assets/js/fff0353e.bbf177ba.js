"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[13018],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57725:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],u={id:"pulsar-cs-2.1.0",title:"Pulsar DotPulsar",sidebar_label:"Pulsar DotPulsar"},l=void 0,c={unversionedId:"versioned/pulsar-cs-2.1.0",id:"versioned/pulsar-cs-2.1.0",title:"Pulsar DotPulsar",description:"Added",source:"@site/release-notes/versioned/pulsar-cs-2.1.0.md",sourceDirName:"versioned",slug:"/versioned/pulsar-cs-2.1.0",permalink:"/release-notes/versioned/pulsar-cs-2.1.0",draft:!1,tags:[],version:"current",frontMatter:{id:"pulsar-cs-2.1.0",title:"Pulsar DotPulsar",sidebar_label:"Pulsar DotPulsar"}},s={},p=[{value:"Added",id:"added",level:2},{value:"Deprecated",id:"deprecated",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"added"},"Added"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Support for on the fly authentication (AuthChallenge)"),(0,o.kt)("li",{parentName:"ul"},"The IAuthentication interface for implementing custom authentication"),(0,o.kt)("li",{parentName:"ul"},"IPulsarClientBuilder.Authentication(IAuthentication authentication) for using custom authentication"),(0,o.kt)("li",{parentName:"ul"},"The AuthenticationFactory with support for:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Token(string token)"),(0,o.kt)("li",{parentName:"ul"},"Token(Func\\<CancellationToken, ValueTask\\<string",">",">"," tokenSupplier)")))),(0,o.kt)("h2",{id:"deprecated"},"Deprecated"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"IPulsarClientBuilder.AuthenticateUsingToken(string token) is marked as obsolete. Use Authentication(AuthenticationFactory.Token(...)) instead")))}f.isMDXComponent=!0}}]);