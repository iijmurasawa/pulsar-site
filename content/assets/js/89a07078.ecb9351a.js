"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[21655],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(a),h=n,d=p["".concat(c,".").concat(h)]||p[h]||m[h]||o;return a?r.createElement(d,l(l({ref:t},u),{},{components:a})):r.createElement(d,l({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},72360:function(e,t,a){a.d(t,{Z:function(){return l}});var r=a(67294),n=a(86010),o="tabItem_OmH5";function l(e){var t=e.children,a=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:a},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return h}});var r=a(87462),n=a(67294),o=a(72389),l=a(67392),i=a(7094),c=a(12466),s=a(86010),u="tabList_uSqn",m="tabItem_LplD";function p(e){var t,a,o,p=e.lazy,h=e.block,d=e.defaultValue,f=e.values,v=e.groupId,g=e.className,b=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,l.l)(y,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var S=null===d?d:null!=(t=null!=d?d:null==(a=b.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(o=b[0])?void 0:o.props.value;if(null!==S&&!y.some((function(e){return e.value===S})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+S+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,i.U)(),N=w.tabGroupChoices,C=w.setTabGroupChoices,O=(0,n.useState)(S),j=O[0],E=O[1],x=[],P=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var T=N[v];null!=T&&T!==j&&y.some((function(e){return e.value===T}))&&E(T)}var D=function(e){var t=e.currentTarget,a=x.indexOf(t),r=y[a].value;r!==j&&(P(t),E(r),null!=v&&C(v,r))},F=function(e){var t,a=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;a=x[r]||x[0];break;case"ArrowLeft":var n=x.indexOf(e.currentTarget)-1;a=x[n]||x[x.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,s.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":h},g)},y.map((function(e){var t=e.value,a=e.label,o=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return x.push(e)},onKeyDown:F,onFocus:D,onClick:D},o,{className:(0,s.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":j===t})}),null!=a?a:t)}))),p?(0,n.cloneElement)(b.filter((function(e){return e.props.value===j}))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function h(e){var t=(0,o.Z)();return n.createElement(p,(0,r.Z)({key:String(t)},e))}},24726:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return m}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),l=(a(9877),a(72360),["components"]),i={id:"develop-schema",title:"Custom schema storage",sidebar_label:"Custom schema storage",original_id:"develop-schema"},c=void 0,s={unversionedId:"develop-schema",id:"develop-schema",title:"Custom schema storage",description:"By default, Pulsar stores data type schemas in Apache BookKeeper (which is deployed alongside Pulsar). You can, however, use another storage system if you wish. This doc walks you through creating your own schema storage implementation.",source:"@site/docs/develop-schema.md",sourceDirName:".",slug:"/develop-schema",permalink:"/docs/next/develop-schema",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/develop-schema.md",tags:[],version:"current",frontMatter:{id:"develop-schema",title:"Custom schema storage",sidebar_label:"Custom schema storage",original_id:"develop-schema"}},u={},m=[{value:"SchemaStorage interface",id:"schemastorage-interface",level:2},{value:"SchemaStorageFactory interface",id:"schemastoragefactory-interface",level:2},{value:"Deployment",id:"deployment",level:2}],p={toc:m};function h(e){var t=e.components,a=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"By default, Pulsar stores data type ",(0,o.kt)("a",{parentName:"p",href:"concepts-schema-registry"},"schemas")," in ",(0,o.kt)("a",{parentName:"p",href:"https://bookkeeper.apache.org"},"Apache BookKeeper")," (which is deployed alongside Pulsar). You can, however, use another storage system if you wish. This doc walks you through creating your own schema storage implementation."),(0,o.kt)("p",null,"In order to use a non-default (i.e. non-BookKeeper) storage system for Pulsar schemas, you need to implement two Java interfaces: ",(0,o.kt)("a",{parentName:"p",href:"#schemastorage-interface"},(0,o.kt)("inlineCode",{parentName:"a"},"SchemaStorage"))," and ",(0,o.kt)("a",{parentName:"p",href:"#schemastoragefactory-interface"},(0,o.kt)("inlineCode",{parentName:"a"},"SchemaStorageFactory")),"."),(0,o.kt)("h2",{id:"schemastorage-interface"},"SchemaStorage interface"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"SchemaStorage")," interface has the following methods:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"\npublic interface SchemaStorage {\n    // How schemas are updated\n    CompletableFuture<SchemaVersion> put(String key, byte[] value, byte[] hash);\n\n    // How schemas are fetched from storage\n    CompletableFuture<StoredSchema> get(String key, SchemaVersion version);\n\n    // How schemas are deleted\n    CompletableFuture<SchemaVersion> delete(String key);\n\n    // Utility method for converting a schema version byte array to a SchemaVersion object\n    SchemaVersion versionFromBytes(byte[] version);\n\n    // Startup behavior for the schema storage client\n    void start() throws Exception;\n\n    // Shutdown behavior for the schema storage client\n    void close() throws Exception;\n}\n\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For a full-fledged example schema storage implementation, see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker/src/main/java/org/apache/pulsar/broker/service/schema/BookkeeperSchemaStorage.java"},(0,o.kt)("inlineCode",{parentName:"a"},"BookKeeperSchemaStorage"))," class.")),(0,o.kt)("h2",{id:"schemastoragefactory-interface"},"SchemaStorageFactory interface"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"\npublic interface SchemaStorageFactory {\n    @NotNull\n    SchemaStorage create(PulsarService pulsar) throws Exception;\n}\n\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For a full-fledged example schema storage factory implementation, see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker/src/main/java/org/apache/pulsar/broker/service/schema/BookkeeperSchemaStorageFactory.java"},(0,o.kt)("inlineCode",{parentName:"a"},"BookKeeperSchemaStorageFactory"))," class.")),(0,o.kt)("h2",{id:"deployment"},"Deployment"),(0,o.kt)("p",null,"In order to use your custom schema storage implementation, you'll need to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Package the implementation in a ",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/deployment/jar/basicsindex.html"},"JAR")," file."),(0,o.kt)("li",{parentName:"ol"},"Add that jar to the ",(0,o.kt)("inlineCode",{parentName:"li"},"lib")," folder in your Pulsar ",(0,o.kt)("a",{parentName:"li",href:"/docs/next/getting-started-standalone#installing-pulsar"},"binary or source distribution"),"."),(0,o.kt)("li",{parentName:"ol"},"Change the ",(0,o.kt)("inlineCode",{parentName:"li"},"schemaRegistryStorageClassName")," configuration in ",(0,o.kt)("a",{parentName:"li",href:"/docs/next/reference-configuration#broker"},(0,o.kt)("inlineCode",{parentName:"a"},"broker.conf"))," to your custom factory class (i.e. the ",(0,o.kt)("inlineCode",{parentName:"li"},"SchemaStorageFactory")," implementation, not the ",(0,o.kt)("inlineCode",{parentName:"li"},"SchemaStorage")," implementation)."),(0,o.kt)("li",{parentName:"ol"},"Start up Pulsar.")))}h.isMDXComponent=!0}}]);