"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[39489],{3905:function(e,a,t){t.d(a,{Zo:function(){return u},kt:function(){return c}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),s=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u=function(e){var a=s(e.components);return n.createElement(p.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(t),c=r,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||i;return t?n.createElement(k,l(l({ref:a},u),{},{components:t})):n.createElement(k,l({ref:a},u))}));function c(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},15301:function(e,a,t){t.r(a),t.d(a,{assets:function(){return u},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var n=t(87462),r=t(63366),i=(t(67294),t(3905)),l=["components"],o={id:"administration-pulsar-manager",title:"Pulsar Manager",sidebar_label:"Pulsar Manager"},p=void 0,s={unversionedId:"administration-pulsar-manager",id:"administration-pulsar-manager",title:"Pulsar Manager",description:"Pulsar Manager is a web-based GUI management and monitoring tool that helps administrators and users manage and monitor tenants, namespaces, topics, subscriptions, brokers, clusters, and so on, and supports dynamic configuration of multiple environments.",source:"@site/docs/administration-pulsar-manager.md",sourceDirName:".",slug:"/administration-pulsar-manager",permalink:"/docs/next/administration-pulsar-manager",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/administration-pulsar-manager.md",tags:[],version:"current",frontMatter:{id:"administration-pulsar-manager",title:"Pulsar Manager",sidebar_label:"Pulsar Manager"},sidebar:"docsSidebar",previous:{title:"Geo-replication",permalink:"/docs/next/administration-geo"},next:{title:"Pulsar statistics",permalink:"/docs/next/administration-stats"}},u={},d=[{value:"Install",id:"install",level:2},{value:"Quick Install",id:"quick-install",level:3},{value:"Configure Database or JWT authentication",id:"configure-database-or-jwt-authentication",level:3},{value:"Configure Database (optional)",id:"configure-database-optional",level:4},{value:"Enable JWT authentication (optional)",id:"enable-jwt-authentication-optional",level:4},{value:"Set the administrator account and password",id:"set-the-administrator-account-and-password",level:3},{value:"Configure the environment",id:"configure-the-environment",level:3},{value:"Other Installation",id:"other-installation",level:2},{value:"Bare-metal installation",id:"bare-metal-installation",level:3},{value:"Custom docker image installation",id:"custom-docker-image-installation",level:3},{value:"Configuration",id:"configuration",level:2}],m={toc:d};function c(e){var a=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Pulsar Manager is a web-based GUI management and monitoring tool that helps administrators and users manage and monitor tenants, namespaces, topics, subscriptions, brokers, clusters, and so on, and supports dynamic configuration of multiple environments."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you are monitoring your current stats with Pulsar dashboard, we recommend you use Pulsar Manager instead. Pulsar dashboard is deprecated."))),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("h3",{id:"quick-install"},"Quick Install"),(0,i.kt)("p",null,"The easiest way to use the Pulsar Manager is to run it inside a ",(0,i.kt)("a",{parentName:"p",href:"https://www.docker.com/products/docker"},"Docker")," container."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\ndocker pull apachepulsar/pulsar-manager:v0.2.0\ndocker run -it \\\n    -p 9527:9527 -p 7750:7750 \\\n    -e SPRING_CONFIGURATION_FILE=/pulsar-manager/pulsar-manager/application.properties \\\n    apachepulsar/pulsar-manager:v0.2.0\n\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pulsar Manager is divided into front-end and back-end, the front-end service port is ",(0,i.kt)("inlineCode",{parentName:"li"},"9527")," and the back-end service port is ",(0,i.kt)("inlineCode",{parentName:"li"},"7750"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SPRING_CONFIGURATION_FILE"),": Default configuration file for spring."),(0,i.kt)("li",{parentName:"ul"},"By default, Pulsar Manager uses the ",(0,i.kt)("inlineCode",{parentName:"li"},"herddb")," database. HerdDB is a SQL distributed database implemented in Java and can be found at ",(0,i.kt)("a",{parentName:"li",href:"https://herddb.org/"},"herddb.org")," for more information.")),(0,i.kt)("h3",{id:"configure-database-or-jwt-authentication"},"Configure Database or JWT authentication"),(0,i.kt)("h4",{id:"configure-database-optional"},"Configure Database (optional)"),(0,i.kt)("p",null,"If you have a large amount of data, you can use a custom database, otherwise, some display errors may occur, such as the topic information cannot be displayed when the topic exceeds 10000.\nThe following is an example of PostgreSQL."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Initialize database and table structures using the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/blob/master/src/main/resources/META-INF/sql/postgresql-schema.sql"},"file"),"."),(0,i.kt)("li",{parentName:"ol"},"Download and modify the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/blob/master/src/main/resources/application.properties"},"configuration file"),", then add the PostgreSQL configuration.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"\nspring.datasource.driver-class-name=org.postgresql.Driver\nspring.datasource.url=jdbc:postgresql://127.0.0.1:5432/pulsar_manager\nspring.datasource.username=postgres\nspring.datasource.password=postgres\n\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Add a configuration mount and start with a docker image.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\ndocker pull apachepulsar/pulsar-manager:v0.2.0\ndocker run -it \\\n    -p 9527:9527 -p 7750:7750 \\\n    -v /your-path/application.properties:/pulsar-manager/pulsar-\nmanager/application.properties\n    -e SPRING_CONFIGURATION_FILE=/pulsar-manager/pulsar-manager/application.properties \\\n    apachepulsar/pulsar-manager:v0.2.0\n\n")),(0,i.kt)("h4",{id:"enable-jwt-authentication-optional"},"Enable JWT authentication (optional)"),(0,i.kt)("p",null,"If you want to turn on JWT authentication, configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"application.properties")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"\nbackend.jwt.token=token\n\njwt.broker.token.mode=PRIVATE\njwt.broker.public.key=file:///path/broker-public.key\njwt.broker.private.key=file:///path/broker-private.key\n\nor \njwt.broker.token.mode=SECRET\njwt.broker.secret.key=file:///path/broker-secret.key\n\n")),(0,i.kt)("p",null,"\u2022\t",(0,i.kt)("inlineCode",{parentName:"p"},"backend.jwt.token"),": token for the superuser. You need to configure this parameter during cluster initialization.",(0,i.kt)("br",{parentName:"p"}),"\n","\u2022\t",(0,i.kt)("inlineCode",{parentName:"p"},"jwt.broker.token.mode"),": multiple modes of generating token, including PUBLIC, PRIVATE, and SECRET.",(0,i.kt)("br",{parentName:"p"}),"\n","\u2022\t",(0,i.kt)("inlineCode",{parentName:"p"},"jwt.broker.public.key"),": configure this option if you use the PUBLIC mode.",(0,i.kt)("br",{parentName:"p"}),"\n","\u2022\t",(0,i.kt)("inlineCode",{parentName:"p"},"jwt.broker.private.key"),": configure this option if you use the PRIVATE mode.",(0,i.kt)("br",{parentName:"p"}),"\n","\u2022\t",(0,i.kt)("inlineCode",{parentName:"p"},"jwt.broker.secret.key"),": configure this option if you use the SECRET mode.",(0,i.kt)("br",{parentName:"p"}),"\n","For more information, see ",(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/docs/en/security-token-admin/"},"Token Authentication Admin of Pulsar"),"."),(0,i.kt)("p",null,"Docker command to add profile and key files mount."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\ndocker pull apachepulsar/pulsar-manager:v0.2.0\ndocker run -it \\\n    -p 9527:9527 -p 7750:7750 \\\n    -v /your-path/application.properties:/pulsar-manager/pulsar-\nmanager/application.properties\n    -v /your-path/private.key:/pulsar-manager/private.key\n    -e SPRING_CONFIGURATION_FILE=/pulsar-manager/pulsar-manager/application.properties \\\n    apachepulsar/pulsar-manager:v0.2.0\n\n")),(0,i.kt)("h3",{id:"set-the-administrator-account-and-password"},"Set the administrator account and password"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'\nCSRF_TOKEN=$(curl http://localhost:7750/pulsar-manager/csrf-token)\ncurl \\\n   -H \'X-XSRF-TOKEN: $CSRF_TOKEN\' \\\n   -H \'Cookie: XSRF-TOKEN=$CSRF_TOKEN;\' \\\n   -H "Content-Type: application/json" \\\n   -X PUT http://localhost:7750/pulsar-manager/users/superuser \\\n   -d \'{"name": "admin", "password": "apachepulsar", "description": "test", "email": "username@test.org"}\'\n\n')),(0,i.kt)("p",null,"The request parameter in curl command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'\n{"name": "admin", "password": "apachepulsar", "description": "test", "email": "username@test.org"}\n\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," is the Pulsar Manager login username, currently ",(0,i.kt)("inlineCode",{parentName:"li"},"admin"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"password")," is the password of the current user of Pulsar Manager, currently ",(0,i.kt)("inlineCode",{parentName:"li"},"apachepulsar"),". The password should be more than or equal to 6 digits.")),(0,i.kt)("h3",{id:"configure-the-environment"},"Configure the environment"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Login to the system, Visit http://localhost:9527 to login.  The current default account is  ",(0,i.kt)("inlineCode",{parentName:"p"},"admin/apachepulsar"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Click "New Environment" button to add an environment.')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Input the "Environment Name". The environment name is used for identifying an environment.')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Input the "Service URL". The Service URL is the admin service url of your Pulsar cluster.'))),(0,i.kt)("h2",{id:"other-installation"},"Other Installation"),(0,i.kt)("h3",{id:"bare-metal-installation"},"Bare-metal installation"),(0,i.kt)("p",null,"When using binary packages for direct deployment, you can follow these steps."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Download and unzip the binary package, which is available on the ",(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/en/download/"},"Pulsar Download")," page."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n    wget https://dist.apache.org/repos/dist/release/pulsar/pulsar-manager/pulsar-manager-0.2.0/apache-pulsar-manager-0.2.0-bin.tar.gz\n    tar -zxvf apache-pulsar-manager-0.2.0-bin.tar.gz\n\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Extract the back-end service binary package and place the front-end resources in the back-end service directory."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n    cd pulsar-manager\n    tar -zxvf pulsar-manager.tar\n    cd pulsar-manager\n    cp -r ../dist ui\n\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Modify ",(0,i.kt)("inlineCode",{parentName:"p"},"application.properties")," configuration on demand."),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"If you don't want to modify the ",(0,i.kt)("inlineCode",{parentName:"p"},"application.properties")," file, you can add the configuration to the startup parameters via ",(0,i.kt)("inlineCode",{parentName:"p"},". /bin/pulsar-manager --backend.jwt.token=token")," to add the configuration to the startup parameters. This is a capability of the spring boot framework."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Start Pulsar Manager"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n./bin/pulsar-manager\n\n")))),(0,i.kt)("h3",{id:"custom-docker-image-installation"},"Custom docker image installation"),(0,i.kt)("p",null,"You can find the docker image in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-manager/tree/master/docker"},"Docker Hub")," directory and build an image from the source code as well:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'\ngit clone https://github.com/apache/pulsar-manager\ncd pulsar-manager/front-end\nnpm install --save\nnpm run build:prod\ncd ..\n./gradlew build -x test\ncd ..\ndocker build -f docker/Dockerfile --build-arg BUILD_DATE=`date -u +"%Y-%m-%dT%H:%M:%SZ"` --build-arg VCS_REF=`latest` --build-arg VERSION=`latest` -t apachepulsar/pulsar-manager .\n\n')),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"application.properties"),(0,i.kt)("th",{parentName:"tr",align:null},"System env on Docker Image"),(0,i.kt)("th",{parentName:"tr",align:null},"Desc"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"backend.jwt.token"),(0,i.kt)("td",{parentName:"tr",align:null},"JWT_TOKEN"),(0,i.kt)("td",{parentName:"tr",align:null},"token for the superuser. You need to configure this parameter during cluster initialization."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"token"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"jwt.broker.token.mode"),(0,i.kt)("td",{parentName:"tr",align:null},"N/A"),(0,i.kt)("td",{parentName:"tr",align:null},"multiple modes of generating token, including PUBLIC, PRIVATE, and SECRET."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"PUBLIC")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"PRIVATE")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"SECRET"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"jwt.broker.public.key"),(0,i.kt)("td",{parentName:"tr",align:null},"PUBLIC_KEY"),(0,i.kt)("td",{parentName:"tr",align:null},"configure this option if you use the PUBLIC mode."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"file:///path/broker-public.key"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"jwt.broker.private.key"),(0,i.kt)("td",{parentName:"tr",align:null},"PRIVATE_KEY"),(0,i.kt)("td",{parentName:"tr",align:null},"configure this option if you use the PRIVATE mode."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"file:///path/broker-private.key"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"jwt.broker.secret.key"),(0,i.kt)("td",{parentName:"tr",align:null},"SECRET_KEY"),(0,i.kt)("td",{parentName:"tr",align:null},"configure this option if you use the SECRET mode."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"file:///path/broker-secret.key"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"spring.datasource.driver-class-name"),(0,i.kt)("td",{parentName:"tr",align:null},"DRIVER_CLASS_NAME"),(0,i.kt)("td",{parentName:"tr",align:null},"the driver class name of the database."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"org.postgresql.Driver"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"spring.datasource.url"),(0,i.kt)("td",{parentName:"tr",align:null},"URL"),(0,i.kt)("td",{parentName:"tr",align:null},"the JDBC URL of your  database."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"jdbc:postgresql://127.0.0.1:5432/pulsar_manager"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"spring.datasource.username"),(0,i.kt)("td",{parentName:"tr",align:null},"USERNAME"),(0,i.kt)("td",{parentName:"tr",align:null},"the username of database."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"postgres"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"spring.datasource.password"),(0,i.kt)("td",{parentName:"tr",align:null},"PASSWORD"),(0,i.kt)("td",{parentName:"tr",align:null},"the password of database."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"postgres"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"N/A"),(0,i.kt)("td",{parentName:"tr",align:null},"LOG_LEVEL"),(0,i.kt)("td",{parentName:"tr",align:null},"the level of log."),(0,i.kt)("td",{parentName:"tr",align:null},"DEBUG")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For more information about backend configurations, see ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/blob/master/src/README"},"here"),"."),(0,i.kt)("li",{parentName:"ul"},"For more information about frontend configurations, see ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/tree/master/front-end"},"here"),".")))}c.isMDXComponent=!0}}]);