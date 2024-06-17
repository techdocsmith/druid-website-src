"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[166],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),s=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):d(d({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(o.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,o=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),m=s(n),c=a,g=m["".concat(o,".").concat(c)]||m[c]||u[c]||i;return n?r.createElement(g,d(d({ref:e},p),{},{components:n})):r.createElement(g,d({ref:e},p))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,d=new Array(i);d[0]=c;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l[m]="string"==typeof t?t:a,d[1]=l;for(var s=2;s<i;s++)d[s]=n[s];return r.createElement.apply(null,d)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},94305:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),d=["components"],l={id:"statsd",title:"StatsD Emitter"},o=void 0,s={unversionedId:"development/extensions-contrib/statsd",id:"development/extensions-contrib/statsd",title:"StatsD Emitter",description:"\x3c!--",source:"@site/docs/29.0.0/development/extensions-contrib/statsd.md",sourceDirName:"development/extensions-contrib",slug:"/development/extensions-contrib/statsd",permalink:"/docs/29.0.0/development/extensions-contrib/statsd",draft:!1,tags:[],version:"current",frontMatter:{id:"statsd",title:"StatsD Emitter"}},p={},m=[{value:"Introduction",id:"introduction",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Druid to StatsD Event Converter",id:"druid-to-statsd-event-converter",level:3}],u={toc:m},c="wrapper";function g(t){var e=t.components,n=(0,a.Z)(t,d);return(0,i.kt)(c,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To use this Apache Druid extension, ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.0/configuration/extensions#loading-extensions"},"include")," ",(0,i.kt)("inlineCode",{parentName:"p"},"statsd-emitter")," in the extensions load list."),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"This extension emits druid metrics to a StatsD server.\n(",(0,i.kt)("a",{parentName:"p",href:"https://github.com/etsy/statsd"},"https://github.com/etsy/statsd"),")\n(",(0,i.kt)("a",{parentName:"p",href:"https://github.com/armon/statsite"},"https://github.com/armon/statsite"),")"),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"All the configuration parameters for the StatsD emitter are under ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.emitter.statsd"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"property"),(0,i.kt)("th",{parentName:"tr",align:null},"description"),(0,i.kt)("th",{parentName:"tr",align:null},"required?"),(0,i.kt)("th",{parentName:"tr",align:null},"default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.emitter.statsd.hostname")),(0,i.kt)("td",{parentName:"tr",align:null},"The hostname of the StatsD server."),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"none")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.emitter.statsd.port")),(0,i.kt)("td",{parentName:"tr",align:null},"The port of the StatsD server."),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"none")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.emitter.statsd.prefix")),(0,i.kt)("td",{parentName:"tr",align:null},"Optional metric name prefix."),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},'""')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.emitter.statsd.separator")),(0,i.kt)("td",{parentName:"tr",align:null},"Metric name separator"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.emitter.statsd.includeHost")),(0,i.kt)("td",{parentName:"tr",align:null},"Flag to include the hostname as part of the metric name."),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.emitter.statsd.dimensionMapPath")),(0,i.kt)("td",{parentName:"tr",align:null},"JSON file defining the StatsD type, and desired dimensions for every Druid metric"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"Default mapping provided. See below.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.emitter.statsd.blankHolder")),(0,i.kt)("td",{parentName:"tr",align:null},"The blank character replacement as StatsD does not support path with blank character"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},'"-"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.emitter.statsd.dogstatsd")),(0,i.kt)("td",{parentName:"tr",align:null},"Flag to enable ",(0,i.kt)("a",{parentName:"td",href:"https://docs.datadoghq.com/developers/dogstatsd/"},"DogStatsD")," support. Causes dimensions to be included as tags, not as a part of the metric name. ",(0,i.kt)("inlineCode",{parentName:"td"},"convertRange")," fields will be ignored."),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.emitter.statsd.dogstatsdConstantTags")),(0,i.kt)("td",{parentName:"tr",align:null},"If ",(0,i.kt)("inlineCode",{parentName:"td"},"druid.emitter.statsd.dogstatsd")," is true, the tags in the JSON list of strings will be sent with every event."),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.emitter.statsd.dogstatsdServiceAsTag")),(0,i.kt)("td",{parentName:"tr",align:null},"If ",(0,i.kt)("inlineCode",{parentName:"td"},"druid.emitter.statsd.dogstatsd")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"druid.emitter.statsd.dogstatsdServiceAsTag")," are true, druid service (e.g. ",(0,i.kt)("inlineCode",{parentName:"td"},"druid/broker"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"druid/coordinator"),", etc) is reported as a tag (e.g. ",(0,i.kt)("inlineCode",{parentName:"td"},"druid_service:druid/broker"),") instead of being included in metric name (e.g. ",(0,i.kt)("inlineCode",{parentName:"td"},"druid.broker.query.time"),") and ",(0,i.kt)("inlineCode",{parentName:"td"},"druid")," is used as metric prefix (e.g. ",(0,i.kt)("inlineCode",{parentName:"td"},"druid.query.time"),")."),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.emitter.statsd.dogstatsdEvents")),(0,i.kt)("td",{parentName:"tr",align:null},"If ",(0,i.kt)("inlineCode",{parentName:"td"},"druid.emitter.statsd.dogstatsd")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"druid.emitter.statsd.dogstatsdEvents")," are true, ",(0,i.kt)("a",{parentName:"td",href:"/docs/29.0.0/operations/alerts"},"Alert events")," are reported to DogStatsD."),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"false")))),(0,i.kt)("h3",{id:"druid-to-statsd-event-converter"},"Druid to StatsD Event Converter"),(0,i.kt)("p",null,"Each metric sent to StatsD must specify a type, one of ",(0,i.kt)("inlineCode",{parentName:"p"},"[timer, counter, guage]"),'. StatsD Emitter expects this mapping to\nbe provided as a JSON file.  Additionally, this mapping specifies which dimensions should be included for each metric.\nStatsD expects that metric values be integers.  Druid emits some metrics with values between the range 0 and 1. To accommodate these metrics they are converted\ninto the range 0 to 100.  This conversion can be enabled by setting the optional "convertRange" field true in the JSON mapping file.\nIf the user does not specify their own JSON file, a default mapping is used.  All\nmetrics are expected to be mapped. Metrics which are not mapped will log an error.\nStatsD metric path is organized using the following schema:\n',(0,i.kt)("inlineCode",{parentName:"p"},'<druid metric name> : { "dimensions" : <dimension list>, "type" : <StatsD type>, "convertRange" : true/false}'),"\ne.g.\n",(0,i.kt)("inlineCode",{parentName:"p"},'query/time" : { "dimensions" : ["dataSource", "type"], "type" : "timer"}')),(0,i.kt)("p",null,"For metrics which are emitted from multiple services with different dimensions, the metric name is prefixed with\nthe service name.\ne.g.\n",(0,i.kt)("inlineCode",{parentName:"p"},'"druid/coordinator-segment/count" : { "dimensions" : ["dataSource"], "type" : "gauge" },\n "druid/historical-segment/count" : { "dimensions" : ["dataSource", "tier", "priority"], "type" : "gauge" }')),(0,i.kt)("p",null,"For most use-cases, the default mapping is sufficient."))}g.isMDXComponent=!0}}]);