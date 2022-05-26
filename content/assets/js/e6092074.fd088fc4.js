"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[61483],{3905:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function u(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=n.createContext({}),p=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),h=p(a),m=r,d=h["".concat(l,".").concat(m)]||h[m]||s[m]||i;return a?n.createElement(d,o(o({ref:e},c),{},{components:a})):n.createElement(d,o({ref:e},c))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=h;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=t,u.mdxType="string"==typeof t?t:r,o[1]=u;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},24791:function(t,e,a){a.r(e),a.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return s}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],u={id:"security-extending",title:"Extend Authentication and Authorization in Pulsar",sidebar_label:"Extend Authentication and Authorization"},l=void 0,p={unversionedId:"security-extending",id:"security-extending",title:"Extend Authentication and Authorization in Pulsar",description:"Pulsar provides a way to use custom authentication and authorization mechanisms.",source:"@site/docs/security-extending.md",sourceDirName:".",slug:"/security-extending",permalink:"/docs/next/security-extending",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/security-extending.md",tags:[],version:"current",frontMatter:{id:"security-extending",title:"Extend Authentication and Authorization in Pulsar",sidebar_label:"Extend Authentication and Authorization"},sidebar:"docsSidebar",previous:{title:"End-to-End Encryption",permalink:"/docs/next/security-encryption"},next:{title:"Bouncy Castle Providers",permalink:"/docs/next/security-bouncy-castle"}},c={},s=[{value:"Authentication",id:"authentication",level:2},{value:"Client authentication plugin",id:"client-authentication-plugin",level:3},{value:"Proxy/Broker authentication plugin",id:"proxybroker-authentication-plugin",level:3},{value:"Authorization",id:"authorization",level:2},{value:"Broker authorization plugin",id:"broker-authorization-plugin",level:3}],h={toc:s};function m(t){var e=t.components,a=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Pulsar provides a way to use custom authentication and authorization mechanisms."),(0,i.kt)("h2",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"You can use a custom authentication mechanism by providing the implementation in the form of two plugins."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Client authentication plugin"),(0,i.kt)("li",{parentName:"ul"},"Proxy/Broker authentication plugin")),(0,i.kt)("h3",{id:"client-authentication-plugin"},"Client authentication plugin"),(0,i.kt)("p",null,"For the client library, you need to implement ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.client.api.Authentication"),". By entering the command below, you can pass this class when you create a Pulsar client."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nPulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar://localhost:6650")\n    .authentication(new MyAuthentication())\n    .build();\n\n')),(0,i.kt)("p",null,"You can implement 2 interfaces on the client side:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://pulsar.apache.orghttps://pulsar.apache.org/api/client/org/apache/pulsar/client/api/Authentication.html"},(0,i.kt)("inlineCode",{parentName:"a"},"Authentication"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://pulsar.apache.orghttps://pulsar.apache.org/api/client/org/apache/pulsar/client/api/AuthenticationDataProvider.html"},(0,i.kt)("inlineCode",{parentName:"a"},"AuthenticationDataProvider")))),(0,i.kt)("p",null,"This in turn requires you to provide the client credentials in the form of ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.client.api.AuthenticationDataProvider")," and also leaves the chance to return different kinds of authentication token for different types of connection or by passing a certificate chain to use for TLS."),(0,i.kt)("p",null,"You can find the following examples for different client authentication plugins:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-client/src/main/java/org/apache/pulsar/client/impl/auth/AuthenticationTls.java"},"Mutual TLS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-client-auth-athenz/src/main/java/org/apache/pulsar/client/impl/auth/AuthenticationAthenz.java"},"Athenz")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-client-auth-sasl/src/main/java/org/apache/pulsar/client/impl/auth/AuthenticationSasl.java"},"Kerberos")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-client/src/main/java/org/apache/pulsar/client/impl/auth/AuthenticationToken.java"},"JSON Web Token (JWT)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-client/src/main/java/org/apache/pulsar/client/impl/auth/oauth2/AuthenticationOAuth2.java"},"OAuth 2.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-client/src/main/java/org/apache/pulsar/client/impl/auth/AuthenticationBasic.java"},"Basic auth"))),(0,i.kt)("h3",{id:"proxybroker-authentication-plugin"},"Proxy/Broker authentication plugin"),(0,i.kt)("p",null,"On the proxy/broker side, you need to configure the corresponding plugin to validate the credentials that the client sends. The proxy and broker can support multiple authentication providers at the same time."),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/broker.conf"),", you can choose to specify a list of valid providers:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"\n# Authentication provider name list, which is comma separated list of class names\nauthenticationProviders=\n\n")),(0,i.kt)("p",null,"For the implementation of the ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.broker.authentication.AuthenticationProvider")," interface, refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-common/src/main/java/org/apache/pulsar/broker/authentication/AuthenticationProvider.java"},"here"),"."),(0,i.kt)("p",null,"You can find the following examples for different broker authentication plugins:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-common/src/main/java/org/apache/pulsar/broker/authentication/AuthenticationProviderTls.java"},"Mutual TLS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-auth-athenz/src/main/java/org/apache/pulsar/broker/authentication/AuthenticationProviderAthenz.java"},"Athenz")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-auth-sasl/src/main/java/org/apache/pulsar/broker/authentication/AuthenticationProviderSasl.java"},"Kerberos")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-common/src/main/java/org/apache/pulsar/broker/authentication/AuthenticationProviderToken.java"},"JSON Web Token (JWT)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-common/src/main/java/org/apache/pulsar/broker/authentication/AuthenticationProviderToken.java"},"Basic auth"))),(0,i.kt)("h2",{id:"authorization"},"Authorization"),(0,i.kt)("p",null,'Authorization is the operation that checks whether a particular "role" or "principal" has permission to perform a certain operation.'),(0,i.kt)("p",null,"By default, you can use the embedded authorization provider provided by Pulsar. You can also configure a different authorization provider through a plugin. Note that although the Authentication plugin is designed for use in both the proxy and broker, the Authorization plugin is designed only for use on the broker."),(0,i.kt)("h3",{id:"broker-authorization-plugin"},"Broker authorization plugin"),(0,i.kt)("p",null,"To provide a custom authorization provider, you need to implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.broker.authorization.AuthorizationProvider")," interface, put this class in the Pulsar broker classpath and configure the class in ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/broker.conf"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"\n# Authorization provider fully qualified class-name\nauthorizationProvider=org.apache.pulsar.broker.authorization.PulsarAuthorizationProvider\n\n")),(0,i.kt)("p",null,"For the implementation of the ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.broker.authorization.AuthorizationProvider")," interface, refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-common/src/main/java/org/apache/pulsar/broker/authorization/AuthorizationProvider.java"},"here"),"."))}m.isMDXComponent=!0}}]);