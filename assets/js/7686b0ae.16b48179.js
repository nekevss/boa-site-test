"use strict";(self.webpackChunkboajs_dev=self.webpackChunkboajs_dev||[]).push([[8156],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(r),p=i,b=m["".concat(l,".").concat(p)]||m[p]||d[p]||o;return r?n.createElement(b,a(a({ref:t},u),{},{components:r})):n.createElement(b,a({ref:t},u))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6837:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:7},a="$boa.limits",s={unversionedId:"debugging/debug_object/documentation/limits",id:"debugging/debug_object/documentation/limits",title:"$boa.limits",description:"This module contains utilities for changing runtime limits.",source:"@site/docs/debugging/debug_object/documentation/limits.md",sourceDirName:"debugging/debug_object/documentation",slug:"/debugging/debug_object/documentation/limits",permalink:"/boa-site-test/docs/debugging/debug_object/documentation/limits",draft:!1,editUrl:"https://github.com/boa-dev/boa-dev.github.io/tree/main/docs/docs/debugging/debug_object/documentation/limits.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"infoSidebar",previous:{title:"$boa.shape",permalink:"/boa-site-test/docs/debugging/debug_object/documentation/shape"},next:{title:"Debuggers",permalink:"/boa-site-test/docs/debugging/debug_other"}},l={},c=[{value:"Getter &amp; Setter <code>$boa.limits.loop</code>",id:"getter--setter-boalimitsloop",level:2},{value:"Getter &amp; Setter <code>$boa.limits.recursion</code>",id:"getter--setter-boalimitsrecursion",level:2}],u={toc:c},m="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"boalimits"},(0,i.kt)("inlineCode",{parentName:"h1"},"$boa.limits")),(0,i.kt)("p",null,"This module contains utilities for changing runtime limits."),(0,i.kt)("h2",{id:"getter--setter-boalimitsloop"},"Getter & Setter ",(0,i.kt)("inlineCode",{parentName:"h2"},"$boa.limits.loop")),(0,i.kt)("p",null,"This is an accessor property on the module, its getter returns the loop iteration limit before an error is thrown.\nIts setter can be used to set the loop iteration limit."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"$boa.limits.loop = 10;\n\nwhile (true) {} // RuntimeLimit: Maximum loop iteration limit 10 exceeded\n")),(0,i.kt)("h2",{id:"getter--setter-boalimitsrecursion"},"Getter & Setter ",(0,i.kt)("inlineCode",{parentName:"h2"},"$boa.limits.recursion")),(0,i.kt)("p",null,"This is an accessor property on the module, its getter returns the recursion limit before an error is thrown.\nIts setter can be used to set the recursion limit."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"$boa.limits.recursion = 100;\n\nfunction x() {\n  return x();\n}\nx(); // RuntimeLimit: Maximum recursion limit 100 exceeded\n")))}d.isMDXComponent=!0}}]);