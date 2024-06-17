"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9890],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),f=o,g=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return t?r.createElement(g,a(a({ref:n},u),{},{components:t})):r.createElement(g,a({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1814:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],s={id:"peons",title:"Peon service",sidebar_label:"Peon"},l=void 0,c={unversionedId:"design/peons",id:"design/peons",title:"Peon service",description:"\x3c!--",source:"@site/docs/29.0.1/design/peons.md",sourceDirName:"design",slug:"/design/peons",permalink:"/docs/29.0.1/design/peons",draft:!1,tags:[],version:"current",frontMatter:{id:"peons",title:"Peon service",sidebar_label:"Peon"},sidebar:"docs",previous:{title:"MiddleManager",permalink:"/docs/29.0.1/design/middlemanager"},next:{title:"Indexer",permalink:"/docs/29.0.1/design/indexer"}},u={},p=[{value:"Configuration",id:"configuration",level:2},{value:"HTTP endpoints",id:"http-endpoints",level:2},{value:"Running",id:"running",level:2}],d={toc:p},f="wrapper";function g(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)(f,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Peon service is a task execution engine spawned by the MiddleManager. Each Peon runs a separate JVM and is responsible for executing a single task. Peons always run on the same host as the MiddleManager that spawned them."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"For Apache Druid Peon configuration, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.1/configuration/#peon-query-configuration"},"Peon Query Configuration")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.1/configuration/#additional-peon-configuration"},"Additional Peon Configuration"),"."),(0,i.kt)("p",null,"For basic tuning guidance for MiddleManager tasks, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.1/operations/basic-cluster-tuning#task-configurations"},"Basic cluster tuning"),"."),(0,i.kt)("h2",{id:"http-endpoints"},"HTTP endpoints"),(0,i.kt)("p",null,"Peons run a single task in a single JVM. The MiddleManager is responsible for creating Peons for running tasks.\nPeons should rarely run on their own."),(0,i.kt)("h2",{id:"running"},"Running"),(0,i.kt)("p",null,"The Peon should seldom run separately from the MiddleManager, except for development purposes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"org.apache.druid.cli.Main internal peon <task_file> <status_file>\n")),(0,i.kt)("p",null,"The task file contains the task JSON object.\nThe status file indicates where the task status will be output."))}g.isMDXComponent=!0}}]);