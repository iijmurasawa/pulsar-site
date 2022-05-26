"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[58836],{3905:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return m}});var l=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},p=Object.keys(e);for(l=0;l<p.length;l++)a=p[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(l=0;l<p.length;l++)a=p[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var n=l.createContext({}),s=function(e){var t=l.useContext(n),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=s(e.components);return l.createElement(n.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,n=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),c=s(a),m=r,k=c["".concat(n,".").concat(m)]||c[m]||h[m]||p;return a?l.createElement(k,i(i({ref:t},o),{},{components:a})):l.createElement(k,i({ref:t},o))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,i=new Array(p);i[0]=c;var u={};for(var n in t)hasOwnProperty.call(t,n)&&(u[n]=t[n]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var s=2;s<p;s++)i[s]=a[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},45004:function(e,t,a){a.r(t),a.d(t,{assets:function(){return o},contentTitle:function(){return n},default:function(){return m},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return h}});var l=a(87462),r=a(63366),p=(a(67294),a(3905)),i=["components"],u={id:"pulsar-2.8.1",title:"Apache Pulsar 2.8.1",sidebar_label:"Apache Pulsar 2.8.1"},n=void 0,s={unversionedId:"versioned/pulsar-2.8.1",id:"versioned/pulsar-2.8.1",title:"Apache Pulsar 2.8.1",description:"2021-09-10",source:"@site/release-notes/versioned/pulsar-2.8.1.md",sourceDirName:"versioned",slug:"/versioned/pulsar-2.8.1",permalink:"/release-notes/versioned/pulsar-2.8.1",draft:!1,tags:[],version:"current",frontMatter:{id:"pulsar-2.8.1",title:"Apache Pulsar 2.8.1",sidebar_label:"Apache Pulsar 2.8.1"}},o={},h=[{value:"2021-09-10",id:"2021-09-10",level:4},{value:"Broker",id:"broker",level:3},{value:"Topic Policy",id:"topic-policy",level:3},{value:"Proxy",id:"proxy",level:3},{value:"Functions",id:"functions",level:3},{value:"Security",id:"security",level:3},{value:"Transaction",id:"transaction",level:3},{value:"Pulsar Admin",id:"pulsar-admin",level:3},{value:"Tiered Storage",id:"tiered-storage",level:3},{value:"Pulsar IO",id:"pulsar-io",level:3}],c={toc:h};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,p.kt)("wrapper",(0,l.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h4",{id:"2021-09-10"},"2021-09-10"),(0,p.kt)("h3",{id:"broker"},"Broker"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Fix the issue of all web threads get stuck when deleting a namespace ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11596"},"#11596")),(0,p.kt)("li",{parentName:"ul"},"Improve error logs in BacklogQuotaManager ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11469"},"#11469")),(0,p.kt)("li",{parentName:"ul"},"Solve the issue of precise rate limiting does not take effect ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11446"},"#11446")),(0,p.kt)("li",{parentName:"ul"},"Fix replicated subscriptions direct memory leak ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11396"},"#11396")),(0,p.kt)("li",{parentName:"ul"},"Change ContextClassLoader to NarClassLoader in ProtocolHandler ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11276"},"#11276")),(0,p.kt)("li",{parentName:"ul"},"Fix the issue of ledger rollover scheduled tasks were executed before reaching the ledger maximum rollover time ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11116"},"#11116")),(0,p.kt)("li",{parentName:"ul"},"Fix publish_time not set error when broker entry metadata enable without AppendBrokerTimestampMetadataInterceptor ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11014"},"#11014")),(0,p.kt)("li",{parentName:"ul"},"Fix parseMessageMetadata error cause by not skip broker entry metadata ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10968"},"#10968")),(0,p.kt)("li",{parentName:"ul"},"Fix issue where Key_Shared consumers could get stuck ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10920"},"#10920")),(0,p.kt)("li",{parentName:"ul"},"Fix throwable exception not thrown ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10863"},"#10863")),(0,p.kt)("li",{parentName:"ul"},"Handle multiple topic creation for the same topic-name in broker ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10847"},"#10847")),(0,p.kt)("li",{parentName:"ul"},"Add REST API to enable or disable replicated subscriptions ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10790"},"#10790")),(0,p.kt)("li",{parentName:"ul"},"Fix issue that message ordering could be broken when redelivering messages on Key_Shared subscription ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10762"},"#10762")),(0,p.kt)("li",{parentName:"ul"},"Fix set-publish-rate when using preciseTopicPublishRateLimiterEnable=true ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10384"},"#10384")),(0,p.kt)("li",{parentName:"ul"},"Upgrade BookKeeper version to resolve the BouncyCastle issue ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11759"},"#11759")),(0,p.kt)("li",{parentName:"ul"},"Fix getPreviousPosition NPE ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11621"},"#11621")),(0,p.kt)("li",{parentName:"ul"},"Remove duplicated configuration ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11283"},"#11283")),(0,p.kt)("li",{parentName:"ul"},"Source tarball: apply executable file permissions to shell scripts ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11858"},"#11858")),(0,p.kt)("li",{parentName:"ul"},"Fix java_test_functions build failed ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11829"},"#11829")),(0,p.kt)("li",{parentName:"ul"},"Fix generate javadoc for kafka-connect-adaptor failed ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11807"},"#11807")),(0,p.kt)("li",{parentName:"ul"},"Fix unnecessary user interactions when building pulsar-standalone image ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11623"},"#11623")),(0,p.kt)("li",{parentName:"ul"},"Do not expose meaningless stats for publisher ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11454"},"#11454")),(0,p.kt)("li",{parentName:"ul"},"Add metrics storageLogicalSize for the TopicStats and NamespaceStats ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11430"},"#11430")),(0,p.kt)("li",{parentName:"ul"},"Compress managed ledger info ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11490"},"#11490")),(0,p.kt)("li",{parentName:"ul"},"Print message metadata when getting message by id ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11092"},"#11092")),(0,p.kt)("li",{parentName:"ul"},'Query parameter "negativeAckRedeliveryDelay" should be effective even if DLQ is disabled ',(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11495"},"#11495")),(0,p.kt)("li",{parentName:"ul"},"Fix websocket TLS bug ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11243"},"#11243")),(0,p.kt)("li",{parentName:"ul"},"Fix the Pulsar Proxy flaky test (Collector already registered that provides name: jvm_memory_direct_bytes_used) ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11900"},"#11900")),(0,p.kt)("li",{parentName:"ul"},"Fix flaky test testReacquireLocksAfterSessionLost ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11815"},"#11815")),(0,p.kt)("li",{parentName:"ul"},"Fix flaky test testUpdateDynamicLocalConfiguration ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11115"},"#11115")),(0,p.kt)("li",{parentName:"ul"},"Fix flaky test testBrokerRanking ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11114"},"#11114")),(0,p.kt)("li",{parentName:"ul"},"Fix flaky test in AdminApiOffloadTest ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11028"},"#11028")),(0,p.kt)("li",{parentName:"ul"},"Fix the flaky test in the ManagedLedgerTest ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11016"},"#11016")),(0,p.kt)("li",{parentName:"ul"},"Make Metadata ZKSessionTest less Flaky ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10955"},"#10955")),(0,p.kt)("li",{parentName:"ul"},"Make MetadataCacheTest reliable. ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10877"},"#10877")),(0,p.kt)("li",{parentName:"ul"},"Fix pulsar_standalone docker image build failed ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11862"},"#11862")),(0,p.kt)("li",{parentName:"ul"},"Producer getting producer busy is removing existing producer from list ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11804"},"#11804")),(0,p.kt)("li",{parentName:"ul"},"Revert PR 11594 to avoid copy data to direct buffer ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11792"},"#11792")),(0,p.kt)("li",{parentName:"ul"},"Upgrade aircompressor to 0.20 ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11790"},"#11790")),(0,p.kt)("li",{parentName:"ul"},"Fix wrappedBuffer always using the same block of memory ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11782"},"#11782")),(0,p.kt)("li",{parentName:"ul"},"Fix com.squareup.okhttp-okhttp-2.7.4.jar unaccounted for in LICENSE bug ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11769"},"#11769")),(0,p.kt)("li",{parentName:"ul"},"Handle NPE and memory leak when full key range isn't covered with active consumers ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11749"},"#11749")),(0,p.kt)("li",{parentName:"ul"},"Call .release() when discarding entry to prevent direct memory leak ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11748"},"#11748")),(0,p.kt)("li",{parentName:"ul"},"Avoid duplicated disconnecting producers after fail to add entry",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11741"},"#11741")),(0,p.kt)("li",{parentName:"ul"},"Expose compaction metrics to Prometheus ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11739"},"#11739")),(0,p.kt)("li",{parentName:"ul"},"Fix the topic in a fenced state and can not recover",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11737"},"#11737")),(0,p.kt)("li",{parentName:"ul"},"Remove subscription when closing Reader on non-persistent topics ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11731"},"#11731")),(0,p.kt)("li",{parentName:"ul"},"Fix branch-2.8 cherry-pick issue. ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11694"},"#11694")),(0,p.kt)("li",{parentName:"ul"},"KeyShared dispatcher on non-persistent topics was not respecting consumer flow-control ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11692"},"#11692")),(0,p.kt)("li",{parentName:"ul"},"Fix the bug, can not update topic when the update topicName is contained by an existed topic as a part ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11686"},"#11686")),(0,p.kt)("li",{parentName:"ul"},"If a topic has compaction policies configured, we must ensure the subscription is always pre-created ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11672"},"#11672")),(0,p.kt)("li",{parentName:"ul"},"Fix testSetReplicatedSubscriptionStatus run failed ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11661"},"#11661")),(0,p.kt)("li",{parentName:"ul"},"Fix Pulsar didn't respond error messages when throw InterceptException ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11650"},"#11650")),(0,p.kt)("li",{parentName:"ul"},"Fix license mismatch ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11645"},"#11645")),(0,p.kt)("li",{parentName:"ul"},"Remove unnecessary jar name in LICENSE files ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11644"},"#11644")),(0,p.kt)("li",{parentName:"ul"},"Fix java.lang.NoSuchMethodError: java.nio.ByteBuffer.position(I)Ljava/nio/ByteBuffer when enabling topic metadata compression ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11594"},"#11594")),(0,p.kt)("li",{parentName:"ul"},"Fix decode compression managedLedgerInfo data ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11569"},"#11569")),(0,p.kt)("li",{parentName:"ul"},"Fix data lost when using earliest position to subscribe to a topic ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11547"},"#11547")),(0,p.kt)("li",{parentName:"ul"},"Add test for auto-created partitioned system topic ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11545"},"#11545")),(0,p.kt)("li",{parentName:"ul"},"Replace orElse with orElseGet to avoid calling too many times. ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11542"},"#11542")),(0,p.kt)("li",{parentName:"ul"},"Fix the schema deletion when deleting topic with delete schema ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11501"},"#11501")),(0,p.kt)("li",{parentName:"ul"},"Add metrics for writing or reading size of cursor ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11500"},"#11500")),(0,p.kt)("li",{parentName:"ul"},"Do not create system topic for heartbeat namespace ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11499"},"#11499")),(0,p.kt)("li",{parentName:"ul"},"Add additional servlet support to broker ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11498"},"#11498")),(0,p.kt)("li",{parentName:"ul"},"Add metrics ","[AddEntryWithReplicasBytesRate]"," for namespace ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11472"},"#11472")),(0,p.kt)("li",{parentName:"ul"},"Deep copy the tenants to avoid concurrent sort exception ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11463"},"#11463")),(0,p.kt)("li",{parentName:"ul"},"Reduce the probability of cache inconsistencies ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11423"},"#11423")),(0,p.kt)("li",{parentName:"ul"},"Reduce integration test memory usage in CI ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11414"},"#11414")),(0,p.kt)("li",{parentName:"ul"},"Swap getTopicReference(topic) with serviceUnit.includes to reduce calling getTopicReference ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11405"},"#11405")),(0,p.kt)("li",{parentName:"ul"},"Invalidate the read handle after all cursors are consumed",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11389"},"#11389")),(0,p.kt)("li",{parentName:"ul"},"Parallel Precise Publish Rate Limiting Fix ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11372"},"#11372")),(0,p.kt)("li",{parentName:"ul"},"Fix concurrency issues in NarUnpacker ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11343"},"#11343")),(0,p.kt)("li",{parentName:"ul"},"Close the replicator and replication client when delete cluster",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11342"},"#11342")),(0,p.kt)("li",{parentName:"ul"},"Add multi roles support for authorization ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11341"},"#11341")),(0,p.kt)("li",{parentName:"ul"},"Fix NPE when unloading persistent partitioned topic ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11310"},"#11310")),(0,p.kt)("li",{parentName:"ul"},"Fixed retention of keys in compaction ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11287"},"#11287")),(0,p.kt)("li",{parentName:"ul"},"Fix missing replicator metrics ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11264"},"#11264")),(0,p.kt)("li",{parentName:"ul"},"Simplify managedLedger retention trim logic ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11255"},"#11255")),(0,p.kt)("li",{parentName:"ul"},"Fix retention size policy delete too much ledgers ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11242"},"#11242")),(0,p.kt)("li",{parentName:"ul"},"Fix init WebSocketService with ClusterData ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11234"},"#11234")),(0,p.kt)("li",{parentName:"ul"},"Make the compaction phase one loop timeout configurable ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11206"},"#11206")),(0,p.kt)("li",{parentName:"ul"},"Fixed using CommandSubscribe.getConsumerName() without checking ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11199"},"#11199")),(0,p.kt)("li",{parentName:"ul"},"Fix some typos of the PersistentTopics ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11187"},"#11187")),(0,p.kt)("li",{parentName:"ul"},"Fix failing auth test. ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11186"},"#11186")),(0,p.kt)("li",{parentName:"ul"},"Fix the deadlock when using hasMessageAvailableAsync and readNextAsync ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11183"},"#11183")),(0,p.kt)("li",{parentName:"ul"},"Fix compaction entry read exception ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11175"},"#11175")),(0,p.kt)("li",{parentName:"ul"},"Set -Dio.netty.tryReflectionSetAccessible=true for pulsar processes ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11138"},"#11138")),(0,p.kt)("li",{parentName:"ul"},"Fix broker dispatch byte rate limiter. ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11135"},"#11135")),(0,p.kt)("li",{parentName:"ul"},"Change test group to broker for ReplicatorTest and fix the test ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11134"},"#11134")),(0,p.kt)("li",{parentName:"ul"},"Fix subscription permission not working in reset cursor ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11132"},"#11132")),(0,p.kt)("li",{parentName:"ul"},"Fix Flaky-test: ","[TopicFromMessageTest]",".[testMultiTopicConsumerBatchShortName ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11125"},"#11125")),(0,p.kt)("li",{parentName:"ul"},"Fix the timestamp description for resetCursor ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11121"},"#11121")),(0,p.kt)("li",{parentName:"ul"},"Fix MsgDropRate missing from NonPersistentTopics stats output. ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11119"},"#11119")),(0,p.kt)("li",{parentName:"ul"},"Fix GetListInBundle return all Topics in bundle ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11110"},"#11110")),(0,p.kt)("li",{parentName:"ul"},"Added missing configuration entries ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11095"},"#11095")),(0,p.kt)("li",{parentName:"ul"},"Fix inputs to return a list of topic ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11094"},"#11094")),(0,p.kt)("li",{parentName:"ul"},"Add authoritative flag for topic policy to avoid redirect loop ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11051"},"#11051")),(0,p.kt)("li",{parentName:"ul"},"Made the PulsarClusterMetadataTeardown deletes idempotent ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11042"},"#11042")),(0,p.kt)("li",{parentName:"ul"},"Fix flaky test testEnableAndDisableTopicDelayedDelivery ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11009"},"#11009")),(0,p.kt)("li",{parentName:"ul"},"Do not expose meaningless stats for consumers",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11005"},"#11005")),(0,p.kt)("li",{parentName:"ul"},"Fix NoClassDefFoundError - io.airlift.compress.lz4.UnsafeUtil ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10983"},"#10983")),(0,p.kt)("li",{parentName:"ul"},"Fix direct memory leak in getLastMessageId ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10977"},"#10977")),(0,p.kt)("li",{parentName:"ul"},"Fix the backlog issue with --precise-backlog=true ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10966"},"#10966")),(0,p.kt)("li",{parentName:"ul"},"Fix create partitioned topic in replicated namespace ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10963"},"#10963")),(0,p.kt)("li",{parentName:"ul"},"Fix incorrect port of advertisedListener ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10961"},"#10961")),(0,p.kt)("li",{parentName:"ul"},"Fix NonRecoverableLedgerException when get last message ID by Reader ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10957"},"#10957")),(0,p.kt)("li",{parentName:"ul"},"Fix compaction not working for system topic ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10941"},"#10941")),(0,p.kt)("li",{parentName:"ul"},"Fix peek message failure when broker entry metadata is enabled ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10924"},"#10924")),(0,p.kt)("li",{parentName:"ul"},"Fix the unit tests for the websocket and run tests under websocket group ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10921"},"#10921")),(0,p.kt)("li",{parentName:"ul"},"When the Replicator is enabled, no managedLedger is created when updating the number of partitions ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10910"},"#10910")),(0,p.kt)("li",{parentName:"ul"},"Correct code example in transaction doc ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10901"},"#10901")),(0,p.kt)("li",{parentName:"ul"},"When topic does not exist, optimize the prompt message ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10845"},"#10845"))),(0,p.kt)("h3",{id:"topic-policy"},"Topic Policy"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Refine topic level backlog quota policies warning log ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11863"},"#11863")),(0,p.kt)("li",{parentName:"ul"},"Avoid redundant calls for getting the offload policies from the offloader ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11629"},"#11629")),(0,p.kt)("li",{parentName:"ul"},"Fix some topic policy operation without backoff ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11560"},"#11560")),(0,p.kt)("li",{parentName:"ul"},"Add backoff for setting for getting topic policies",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11487"},"#11487")),(0,p.kt)("li",{parentName:"ul"},"Disable replicating system topic across clusters",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11376"},"#11376")),(0,p.kt)("li",{parentName:"ul"},"When deleting a topic, delete the topic policy together",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11316"},"#11316")),(0,p.kt)("li",{parentName:"ul"},"Fix using partitioned topic name to get Policy ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11294"},"#11294")),(0,p.kt)("li",{parentName:"ul"},"Fix replay topic policy message not work ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11136"},"#11136")),(0,p.kt)("li",{parentName:"ul"},"Fix race condition of the SystemTopicBasedTopicPoliciesService ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11097"},"#11097")),(0,p.kt)("li",{parentName:"ul"},"Fix retention policy in topic policy not work ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11021"},"#11021")),(0,p.kt)("li",{parentName:"ul"},"Fix potential data lost on the system topic when topic compaction have not triggered yet ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11003"},"#11003")),(0,p.kt)("li",{parentName:"ul"},"Make getTopicPoliciesAsyncWithRetry as a default method ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11518"},"#11518"))),(0,p.kt)("h3",{id:"proxy"},"Proxy"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Fixed Proxy leaking outbound connections ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11848"},"#11848"))),(0,p.kt)("h3",{id:"functions"},"Functions"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Support protobuf schema for Pulsar function ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11709"},"#11709")),(0,p.kt)("li",{parentName:"ul"},"Fix cast exception occurs if function/source/sink type is ByteBuffer ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11611"},"#11611")),(0,p.kt)("li",{parentName:"ul"},"Fix source stats exposing empty exceptions list ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11478"},"#11478")),(0,p.kt)("li",{parentName:"ul"},"Set exposePulsarAdmin to true if enabled ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11417"},"#11417")),(0,p.kt)("li",{parentName:"ul"},"Add instanceId and fqn into log message properties ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11399"},"#11399")),(0,p.kt)("li",{parentName:"ul"},"Fix tls_validate_hostname is not supported in python functions runtime ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11087"},"#11087")),(0,p.kt)("li",{parentName:"ul"},"Use the subscription name defined in function details ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11076"},"#11076")),(0,p.kt)("li",{parentName:"ul"},"Fix build failure because of spotbugs ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10792"},"#10792")),(0,p.kt)("li",{parentName:"ul"},"Use keyword argument to create pulsar_client ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11080"},"#11080"))),(0,p.kt)("h3",{id:"security"},"Security"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Upgrade commons-compress to 1.21 ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11345"},"#11345")),(0,p.kt)("li",{parentName:"ul"},"Fix GetTopicsOfNamespace with binary lookup service not check auth ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11172"},"#11172")),(0,p.kt)("li",{parentName:"ul"},"Use ubuntu:20.04 base image for Pulsar docker images ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11026"},"#11026")),(0,p.kt)("li",{parentName:"ul"},"Upgrade vertx to 3.9.8 to address CVE-2019-17640 ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10889"},"#10889")),(0,p.kt)("li",{parentName:"ul"},"Exclude and remove freebuilder dependency ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10869"},"#10869")),(0,p.kt)("li",{parentName:"ul"},"Upgrade bouncycastle version to 1.69 ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10867"},"#10867")),(0,p.kt)("li",{parentName:"ul"},"Upgrade K8s client-java to 12.0.1 ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10866"},"#10866")),(0,p.kt)("li",{parentName:"ul"},"Upgrade caffeine to 2.9.1 ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10865"},"#10865")),(0,p.kt)("li",{parentName:"ul"},"Upgrade commons-codec to 1.15 ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10864"},"#10864")),(0,p.kt)("li",{parentName:"ul"},"Load credentials from secrets for Kinesis connectors ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10822"},"#10822")),(0,p.kt)("li",{parentName:"ul"},"Forbid to read other topic's data in managedLedger layer ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11912"},"#11912")),(0,p.kt)("li",{parentName:"ul"},"Bump Netty version to 4.1.66.Final ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11344"},"#11344"))),(0,p.kt)("h3",{id:"transaction"},"Transaction"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Pending ack set managed ledger config true ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11494"},"#11494")),(0,p.kt)("li",{parentName:"ul"},"Add getTxnID method in Transaction.java ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11438"},"#11438")),(0,p.kt)("li",{parentName:"ul"},"Fix direct memory leak related to commit and abort markers ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11407"},"#11407")),(0,p.kt)("li",{parentName:"ul"},"Fix transaction buffer client handle endTxn op when topic or sub have been deleted",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11304"},"#11304")),(0,p.kt)("li",{parentName:"ul"},"Fix the transaction markers that are not deleted as expected",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11126"},"#11126")),(0,p.kt)("li",{parentName:"ul"},"Fix delete sub then delete pending ack",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11023"},"#11023")),(0,p.kt)("li",{parentName:"ul"},"Prevent NPE in case of closeAsync() without a successful execution of startAsync() ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10948"},"#10948")),(0,p.kt)("li",{parentName:"ul"},"Fixed possible deadlock in the initialization of MLTransactionLog ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11194"},"#11194")),(0,p.kt)("li",{parentName:"ul"},"Fix broker init transaction related topic. ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11022"},"#11022"))),(0,p.kt)("h3",{id:"pulsar-admin"},"Pulsar Admin"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Fix pulsar admin method:getMessageById",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11852"},"#11852")),(0,p.kt)("li",{parentName:"ul"},"Allow create functions with package URL ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11666"},"#11666")),(0,p.kt)("li",{parentName:"ul"},"Add compacted topic metrics for TopicStats in CLI ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11564"},"#11564")),(0,p.kt)("li",{parentName:"ul"},"Fix time based backlog quota. ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11509"},"#11509")),(0,p.kt)("li",{parentName:"ul"},"Add offload ledger info for admin topics stats ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11465"},"#11465")),(0,p.kt)("li",{parentName:"ul"},"Add complete metadata for admin.topics().examineMessages ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11443"},"#11443")),(0,p.kt)("li",{parentName:"ul"},"Remove duplicate check for replicationClusterSet ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11429"},"#11429")),(0,p.kt)("li",{parentName:"ul"},"Pulsar Admin List Subscription lists only subscriptions created for Partition-0 when partition specific subscriptions are created ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11355"},"#11355")),(0,p.kt)("li",{parentName:"ul"},"Expose broker entry metadata and deliverAtTime to peekMessages/getMessages ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11279"},"#11279")),(0,p.kt)("li",{parentName:"ul"},"Allow null to be set as namespace level subscription TTL ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11253"},"#11253")),(0,p.kt)("li",{parentName:"ul"},"Enable peeking encrypted batch messages ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11244"},"#11244")),(0,p.kt)("li",{parentName:"ul"},"Fix async response filter ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11052"},"#11052")),(0,p.kt)("li",{parentName:"ul"},"Add error log for schema admin operation ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11427"},"#11427"))),(0,p.kt)("h3",{id:"tiered-storage"},"Tiered Storage"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"OffloadPoliciesImplBuilder missing method and not implements OffloadPolicies.Builder ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11453"},"#11453")),(0,p.kt)("li",{parentName:"ul"},"Remove unused listener to reduce creating executor pool ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11215"},"#11215"))),(0,p.kt)("h3",{id:"pulsar-io"},"Pulsar IO"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Make KafkaSourceRecord ack() non-blocking to avoid deadlock ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11435"},"#11435")),(0,p.kt)("li",{parentName:"ul"},"Allow Sinks to use native AVRO and JSON ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11322"},"#11322")),(0,p.kt)("li",{parentName:"ul"},"Refine the key in redis sink when key is null ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11192"},"#11192")),(0,p.kt)("li",{parentName:"ul"},"Change the nar package name for pulsar-io-kafka-connect-adaptor ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10976"},"#10976"))))}m.isMDXComponent=!0}}]);