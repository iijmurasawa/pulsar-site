"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[2954],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},71746:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],l={id:"pulsar-cs-1.0.0",title:"Pulsar DotPulsar",sidebar_label:"Pulsar DotPulsar"},s=void 0,u={unversionedId:"versioned/pulsar-cs-1.0.0",id:"versioned/pulsar-cs-1.0.0",title:"Pulsar DotPulsar",description:"Added",source:"@site/release-notes/versioned/pulsar-cs-1.0.0.md",sourceDirName:"versioned",slug:"/versioned/pulsar-cs-1.0.0",permalink:"/release-notes/versioned/pulsar-cs-1.0.0",draft:!1,tags:[],version:"current",frontMatter:{id:"pulsar-cs-1.0.0",title:"Pulsar DotPulsar",sidebar_label:"Pulsar DotPulsar"}},c={},d=[{value:"Added",id:"added",level:2},{value:"Changed",id:"changed",level:2},{value:"Fixed",id:"fixed",level:2}],p={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"added"},"Added"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A number of resilience, correctness, and performance improvements"),(0,i.kt)("li",{parentName:"ul"},"The optional listener name can be set via the PulsarClientBuilder"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Experimental"),": Added an extension method for IConsumer that will 'Process' and auto-acknowledge messages while creating an Activity (useful for doing tracing)"),(0,i.kt)("li",{parentName:"ul"},"Schema support for the following types",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Boolean"),(0,i.kt)("li",{parentName:"ul"},"Bytes (using byte[] and ReadOnlySequence\\<byte",">",")"),(0,i.kt)("li",{parentName:"ul"},"String (UTF-8, UTF-16, and US-ASCII)"),(0,i.kt)("li",{parentName:"ul"},"INT8, INT16, INT32, and INT64"),(0,i.kt)("li",{parentName:"ul"},"Float and Double"),(0,i.kt)("li",{parentName:"ul"},"Time (using TimeSpan)"),(0,i.kt)("li",{parentName:"ul"},"Timestamp and Date (using DateTime)")))),(0,i.kt)("h2",{id:"changed"},"Changed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Breaking"),": Building a producer will now create an IProducer\\<T",">","\\\nThe non-generic IProducer interface is still there, but messages can only be sent (ISend) with IProducer\\<T",">"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Breaking"),": Building a reader or consumer will now create an IConsumer\\<T",">"," or IReader\\<T",">","\\\nThe non-generic IReader and IConsumer are still there, but messages can only be consumed/read (IReceive) with IConsumer\\<T",">"," and IReader\\<T",">"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Breaking"),": Receiving a message with now return an IMessage\\<T",">"," instead of the Message class (which is now internal)\\\nThe non-generic IMessage can be used if 'Value()' (decoding the 'Data' bytes) is not used (when just handling raw messages)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Breaking"),": The message builder is now generic"),(0,i.kt)("li",{parentName:"ul"},"Setting an Action and Func StateChangedHandler on the ConsumerBuilder, ReaderBuilder, and ProducerBuilder are now extension methods"),(0,i.kt)("li",{parentName:"ul"},"Setting an Action and Func ExceptionHandler on the PulsarClientBuilder are now extension methods")),(0,i.kt)("h2",{id:"fixed"},"Fixed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When the broker sends a CommandClose","[Producer/Consumer]"," all in-flight (and following) requests to the broker are ignored.\\\nEven though we reconnect the consumer, reader, or producer the tasks for the in-flight requests will hang as long as the connection is kept alive by other producers/consumers/readers.\\\nThis situation is now handled and the requests will be sent again on the new connection.")))}m.isMDXComponent=!0}}]);