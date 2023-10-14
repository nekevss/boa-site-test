"use strict";(self.webpackChunkboajs_dev=self.webpackChunkboajs_dev||[]).push([[5506],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>p});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),g=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=g(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),s=g(r),b=o,p=s["".concat(l,".").concat(b)]||s[b]||c[b]||a;return r?n.createElement(p,i(i({ref:t},d),{},{components:r})):n.createElement(p,i({ref:t},d))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=b;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[s]="string"==typeof e?e:o,i[1]=u;for(var g=2;g<a;g++)i[g]=r[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},7469:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>u,toc:()=>g});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:6},i="Debuggers",u={unversionedId:"debugging/debug_other",id:"debugging/debug_other",title:"Debuggers",description:"There are also other methods of debugging listed below.",source:"@site/docs/debugging/debug_other.md",sourceDirName:"debugging",slug:"/debugging/debug_other",permalink:"/boa-site-test/docs/debugging/debug_other",draft:!1,editUrl:"https://github.com/boa-dev/boa-dev.github.io/tree/main/docs/docs/debugging/debug_other.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"infoSidebar",previous:{title:"$boa.limits",permalink:"/boa-site-test/docs/debugging/debug_object/documentation/limits"},next:{title:"Architecture",permalink:"/boa-site-test/docs/category/architecture"}},l={},g=[{value:"VS Code Debugger",id:"vs-code-debugger",level:2},{value:"LLDB Manual debugging",id:"lldb-manual-debugging",level:2}],d={toc:g},s="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"debuggers"},"Debuggers"),(0,o.kt)("p",null,"There are also other methods of debugging listed below."),(0,o.kt)("h2",{id:"vs-code-debugger"},"VS Code Debugger"),(0,o.kt)("p",null,"The quickest way to get debugging is to use the CodeLLDB plugin and add breakpoints. You can get\nmore information ",(0,o.kt)("a",{parentName:"p",href:"https://jason-williams.co.uk/debugging-rust-in-vscode"},"here"),"."),(0,o.kt)("h2",{id:"lldb-manual-debugging"},"LLDB Manual debugging"),(0,o.kt)("p",null,"You can also use rust-lldb. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," already has this enabled, you\nshould be able to use that environment to run your code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rust-lldb ./target/debug/boa [arguments]\n")))}c.isMDXComponent=!0}}]);