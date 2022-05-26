"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[46445],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(y,o(o({ref:t},c),{},{components:r})):n.createElement(y,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},20426:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],s={id:"security-policy-and-supported-versions",title:"Security Policy and Supported Versions",sidebar_label:"Security Policy and Supported Versions",original_id:"security-policy-and-supported-versions"},l=void 0,p={unversionedId:"security-policy-and-supported-versions",id:"version-2.10.0/security-policy-and-supported-versions",title:"Security Policy and Supported Versions",description:"Using Pulsar's Security Features",source:"@site/versioned_docs/version-2.10.0/security-policy-and-supported-versions.md",sourceDirName:".",slug:"/security-policy-and-supported-versions",permalink:"/docs/security-policy-and-supported-versions",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/security-policy-and-supported-versions.md",tags:[],version:"2.10.0",frontMatter:{id:"security-policy-and-supported-versions",title:"Security Policy and Supported Versions",sidebar_label:"Security Policy and Supported Versions",original_id:"security-policy-and-supported-versions"},sidebar:"version-2.10.0/docsSidebar",previous:{title:"Overview",permalink:"/docs/security-overview"},next:{title:"Transport Encryption using TLS",permalink:"/docs/security-tls-transport"}},c={},u=[{value:"Using Pulsar&#39;s Security Features",id:"using-pulsars-security-features",level:2},{value:"Security Vulnerability Announcements",id:"security-vulnerability-announcements",level:2},{value:"Versioning Policy",id:"versioning-policy",level:2},{value:"Supported Versions",id:"supported-versions",level:2},{value:"Release Frequency",id:"release-frequency",level:2}],d={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"using-pulsars-security-features"},"Using Pulsar's Security Features"),(0,i.kt)("p",null,"You can find documentation on Pulsar's available security features and how to use them here:\n",(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/docs/en/security-overview/"},"https://pulsar.apache.org/docs/en/security-overview/"),"."),(0,i.kt)("h2",{id:"security-vulnerability-announcements"},"Security Vulnerability Announcements"),(0,i.kt)("p",null,"The Pulsar community will announce security vulnerabilities and how to mitigate them on the ",(0,i.kt)("a",{parentName:"p",href:"mailto:users@pulsar.apache.org"},"users@pulsar.apache.org"),".\nFor instructions on how to subscribe, please see ",(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/contact/"},"https://pulsar.apache.org/contact/"),"."),(0,i.kt)("h2",{id:"versioning-policy"},"Versioning Policy"),(0,i.kt)("p",null,"The Pulsar project adheres to ",(0,i.kt)("a",{parentName:"p",href:"http://semver.org/spec/v2.0.0.html"},"Semantic Versioning"),". Existing releases can expect\npatches for bugs and security vulnerabilities. New features will target minor releases."),(0,i.kt)("p",null,"When upgrading an existing cluster, it is important to upgrade components linearly through each minor version. For\nexample, when upgrading from 2.8.x to 2.10.x, it is important to upgrade to 2.9.x before going to 2.10.x."),(0,i.kt)("h2",{id:"supported-versions"},"Supported Versions"),(0,i.kt)("p",null,"Feature release branches will be maintained with security fix and bug fix releases for a period of at least 12 months\nafter initial release. For example, branch 2.5.x is no longer considered maintained as of January 2021, 12 months after\nthe release of 2.5.0 in January 2020. No more 2.5.x releases should be expected at this point, even to fix security\nvulnerabilities."),(0,i.kt)("p",null,"Note that a minor version can be maintained past it's 12 month initial support period. For example, version 2.7 is still\nactively maintained."),(0,i.kt)("p",null,"Security fixes will be given priority when it comes to back porting fixes to older versions that are within the\nsupported time window. It is challenging to decide which bug fixes to back port to old versions. As such, the latest\nversions will have the most bug fixes."),(0,i.kt)("p",null,"When 3.0.0 is released, the community will decide how to continue supporting 2.x. It is possible that the last minor\nrelease within 2.x will be maintained for longer as an \u201cLTS\u201d release, but it has not been officially decided."),(0,i.kt)("p",null,"The following table shows version support timelines and will be updated with each release."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Version"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Supported"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Initial Release"),(0,i.kt)("th",{parentName:"tr",align:"center"},"At Least Until"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"2.9.x"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"November 2021"),(0,i.kt)("td",{parentName:"tr",align:"center"},"November 2022")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"2.8.x"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"June 2021"),(0,i.kt)("td",{parentName:"tr",align:"center"},"June 2022")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"2.7.x"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"November 2020"),(0,i.kt)("td",{parentName:"tr",align:"center"},"November 2021")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"2.6.x"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:"center"},"June 2020"),(0,i.kt)("td",{parentName:"tr",align:"center"},"June 2021")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"2.5.x"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:"center"},"January 2020"),(0,i.kt)("td",{parentName:"tr",align:"center"},"January 2021")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"2.4.x"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:"center"},"July 2019"),(0,i.kt)("td",{parentName:"tr",align:"center"},"July 2020")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"< 2.3.x"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")))),(0,i.kt)("p",null,"If there is ambiguity about which versions of Pulsar are actively supported, please ask on the ",(0,i.kt)("a",{parentName:"p",href:"mailto:users@pulsar.apache.org"},"users@pulsar.apache.org"),"\nmailing list."),(0,i.kt)("h2",{id:"release-frequency"},"Release Frequency"),(0,i.kt)("p",null,"With the acceptance of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/wiki/PIP-47%3A-Time-Based-Release-Plan"},"PIP-47 - A Time Based Release Plan"),",\nthe Pulsar community aims to complete 4 minor releases each year. Patch releases are completed based on demand as well\nas need, in the event of security fixes."))}m.isMDXComponent=!0}}]);