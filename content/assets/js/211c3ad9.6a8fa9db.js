"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[78592],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=o,f=p["".concat(l,".").concat(d)]||p[d]||h[d]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},47506:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={id:"personal-ci",title:"Personal CI"},i=void 0,s={unversionedId:"personal-ci",id:"personal-ci",title:"Personal CI",description:"Pulsar CI is currently hosted on Apache Infra resources. Since we cannot add more resources to Pulsar CI, we need to find other ways to reduce the load on Pulsar CI.",source:"@site/contribute/personal-ci.md",sourceDirName:".",slug:"/personal-ci",permalink:"/contribute/personal-ci",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/contribute/personal-ci.md",tags:[],version:"current",lastUpdatedBy:"Eric Shen",lastUpdatedAt:1687000957,formattedLastUpdatedAt:"Jun 17, 2023",frontMatter:{id:"personal-ci",title:"Personal CI"},sidebar:"sidebarDevelopment",previous:{title:"License header",permalink:"/contribute/testing-licenses"},next:{title:"Introduction",permalink:"/contribute/site-intro"}},l={},u=[{value:"CI workflows in a fork",id:"ci-workflows-in-a-fork",level:2},{value:"Stay in-sync with upstream",id:"stay-in-sync-with-upstream",level:2},{value:"SSH to CI jobs",id:"ssh-to-ci-jobs",level:2}],c={toc:u},p="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pulsar CI is currently hosted on Apache Infra resources. Since we cannot add more resources to Pulsar CI, we need to find other ways to reduce the load on Pulsar CI."),(0,o.kt)("p",null,"After ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/17693"},"PR-17693")," merged, any pull request directly sent to ",(0,o.kt)("inlineCode",{parentName:"p"},"apache/pulsar")," won't be triggered anymore."),(0,o.kt)("p",null,"That said, pull requests should be first tested in your own fork. GitHub Actions provides separate quota for pull requests that are executed in a forked repository."),(0,o.kt)("h2",{id:"ci-workflows-in-a-fork"},"CI workflows in a fork"),(0,o.kt)("p",null,"Here are instructions to use your personal CI on GitHub:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Push your intended pull request changes to a new branch in your fork (the usual way you do it)."),(0,o.kt)("li",{parentName:"ol"},"Open a pull request to your own fork.")),(0,o.kt)("p",null,"Below are the instructions for command-line interface."),(0,o.kt)("p",null,"Firstly, install ",(0,o.kt)("a",{parentName:"p",href:"https://cli.github.com/"},"GitHub CLI")," and configure it. With GitHub CLI, there's an easy way to open the PR to your own fork with a single command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gh pr create --repo=<your-github-id>/pulsar --base master --head <your-pr-branch> -f\n")),(0,o.kt)("p",null,'Alternatively, you can also create a PR to your own fork in the GitHub UI when opening a new PR. To do so, first click on "compare across forks" and then choose your own fork as both the forked repository and head repository.'),(0,o.kt)("h2",{id:"stay-in-sync-with-upstream"},"Stay in-sync with upstream"),(0,o.kt)("p",null,"It's worth keeping your master branch in sync with apache/pulsar's master (the upstream) so that the diff of PR will be reasonable in your own fork."),(0,o.kt)("p",null,"Read more about the instructions to sync a fork from the WebUI, from the GitHub CI, or from the command line at ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork"},"Syncing a fork"),". "),(0,o.kt)("h2",{id:"ssh-to-ci-jobs"},"SSH to CI jobs"),(0,o.kt)("p",null,'The additional benefit of the "Personal CI" is that you get SSH access to the build VMs when the build is running. That is handled by this logic in the ',(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/.github/workflows/pulsar-ci.yaml"},"pulsar-ci.yaml")," GitHub Actions workflow file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Setup ssh access to build runner VM\n  # ssh access is enabled for builds in own forks\n  if: ${{ github.repository != 'apache/pulsar' && github.event_name == 'pull_request' }}\n  uses: ./.github/actions/ssh-access\n  with:\n    limit-access-to-actor: true\n")),(0,o.kt)("p",null,"Here is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/.github/actions/ssh-access/action.yml"},"the inline ",(0,o.kt)("inlineCode",{parentName:"a"},"ssh-access")," composite action implementation"),"."),(0,o.kt)("p",null,"The SSH access is secured with the SSH key registered in GitHub. For example, your public keys are ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/horizonzy.keys"},"https://github.com/horizonzy.keys"),". You will first have to register an SSH public key in GitHub for that to work."))}h.isMDXComponent=!0}}]);