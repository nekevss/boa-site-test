"use strict";(self.webpackChunkboajs_dev=self.webpackChunkboajs_dev||[]).push([[1062],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>b});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=p(a),c=o,b=u["".concat(l,".").concat(c)]||u[c]||m[c]||r;return a?n.createElement(b,i(i({ref:t},h),{},{components:a})):n.createElement(b,i({ref:t},h))}));function b(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8403:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const r={layout:"post",tags:["post"],title:"Boa release v0.14",author:"Boa Developers"},i=void 0,s={permalink:"/boa-site-test/blog/2022/03/15/boa-release-14",source:"@site/blog/2022-03-15-boa-release-14.md",title:"Boa release v0.14",description:"Summary",date:"2022-03-15T00:00:00.000Z",formattedDate:"March 15, 2022",tags:[{label:"post",permalink:"/boa-site-test/blog/tags/post"}],readingTime:5.18,hasTruncateMarker:!1,authors:[{name:"Boa Developers"}],frontMatter:{layout:"post",tags:["post"],title:"Boa release v0.14",author:"Boa Developers"},prevItem:{title:"Boa release v0.15",permalink:"/boa-site-test/blog/2022/06/10/boa-release-15"},nextItem:{title:"Boa release v0.13",permalink:"/boa-site-test/blog/2021/09/30/boa-release-13"}},l={authorsImageUrls:[void 0]},p=[{value:"Summary",id:"summary",level:2},{value:"Boa has moved",id:"boa-has-moved",level:2},{value:"New ECMAScript features",id:"new-ecmascript-features",level:2},{value:"Virtual Machine",id:"virtual-machine",level:2},{value:"Boa opens financial contributions",id:"boa-opens-financial-contributions",level:2},{value:"What does this mean for Boa?",id:"what-does-this-mean-for-boa",level:3},{value:"Can I contribute differently?",id:"can-i-contribute-differently",level:3},{value:"Thank You",id:"thank-you",level:3},{value:"Thank you New Contributors",id:"thank-you-new-contributors",level:4}],h={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"Boa v0.14 is here! After almost 6 months of development, we are very happy to present you the newest release of the Boa\nJavaScript engine. Boa makes it easy to embed a JS engine in your projects, and you can even use it from webassembly. See\nthe ",(0,o.kt)("a",{parentName:"p",href:"/about"},"about")," page for more info. Together with this release, we present you: A new way to contribute to Boa, a virtual machine, usable examples and much more."),(0,o.kt)("p",null,"Boa currently supports part of the JavaScript language. In this release, our conformance has grown from 41.01% to 49.74%\nin the official ECMAScript Test Suite (Test262). The engine now passes 43,986 tests, coming from 33,192 in Boa 0.13\n(32.5% increase), and we have closed 40 issues and merged 137 pull requests. You can check the full list of changes\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/boa-dev/boa/blob/v0.14/CHANGELOG.md"},"here"),", and the full information on conformance\n",(0,o.kt)("a",{parentName:"p",href:"https://boa-dev.github.io/boa/test262/"},"here"),"."),(0,o.kt)("h2",{id:"boa-has-moved"},"Boa has moved"),(0,o.kt)("p",null,"First off, some breaking changes!\nBoa is now ",(0,o.kt)("a",{parentName:"p",href:"https://crates.io/crates/boa_engine"},(0,o.kt)("inlineCode",{parentName:"a"},"boa_engine"))," on crates.io. This should bring it in line with our other packages, and allows us to resolve the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/boa-dev/boa/issues/230"},"casing issue")," we had with Boa previously. It should just be a case of changing your dependencies in cargo.toml to the new destination. The old ",(0,o.kt)("a",{parentName:"p",href:"https://crates.io/crates/boa"},(0,o.kt)("inlineCode",{parentName:"a"},"Boa"))," crate will no longer receive any updates."),(0,o.kt)("h2",{id:"new-ecmascript-features"},"New ECMAScript features"),(0,o.kt)("p",null,"Boa v0.14 ships with support for ",(0,o.kt)("inlineCode",{parentName:"p"},"Object.getOwnPropertyNames"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Object.getOwnPropertySymbols"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Object.prototype.hasOwnProperty"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.from"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"AggregateError"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Typed Arrays"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Proxy"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"toLocaleString()"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Symbol.prototype.valueOf"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.prototype.at()"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"String.fromCharCode"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Object.hasOwn"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Object.fromEntries"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Proxy"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.prototype.findLast"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.prototype.findLastIndex"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"console.trace"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"String.raw( template, ...substitutions )"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/boa-dev/boa/blob/v0.14/CHANGELOG.md"},"more"),". There's also been several bug fixes and internal improvements, such as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/boa-dev/boa/pull/1684"},"switching to Bors")," for our CI management."),(0,o.kt)("h2",{id:"virtual-machine"},"Virtual Machine"),(0,o.kt)("p",null,"The biggest change in this release has definitely been the switch of the main implementation to a Virtual Machine. The\nJavaScript code first gets parsed into AST, then compiled into op-codes, and finally executed in the VM. This adds some\nextra steps, which, for now, have reduced the performance of the engine. We hope to fix some of these degradations over the course of the next few releases so hang tight. The new VM opens the door for many great features in the future (we're looking at you, async/await), and allows some nicer optimizations in the parsing and compilation phases in which we have already started working (such as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/boa-dev/boa/pull/1829"},"#1829")," and\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/boa-dev/boa/pull/1849"},"#1849"),")."),(0,o.kt)("p",null,"This move towards a VM has also brought one great new feature, generator execution (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/boa-dev/boa/pull/1790"},"#1790"),").\nYou can find out more about how to use the VM ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/boa-dev/boa/blob/main/docs/vm.md"},"here"),"."),(0,o.kt)("img",{class:"light",src:"/images/2022-03-15/boa_architecture_light.svg"}),(0,o.kt)("img",{class:"dark",src:"/images/2022-03-15/boa_architecture_dark.svg"}),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"boa-opens-financial-contributions"},"Boa opens financial contributions"),(0,o.kt)("p",null,"In the past months, due to the big and steady progress on Boa, we have received multiple requests to contribute to Boa\nfinancially. From now on, anyone can contribute with either a recurring donation, or a one-time contribution in our\n",(0,o.kt)("a",{parentName:"p",href:"https://opencollective.com/boa"},"OpenCollective page"),"."),(0,o.kt)("h3",{id:"what-does-this-mean-for-boa"},"What does this mean for Boa?"),(0,o.kt)("p",null,"Being able to receive financial contributions won't directly show a change in Boa development, but depending on how much\nfunding we get, we are already planning next steps. Having more motivated contributors would be the first step. We all\nwant to spend more of our free time in boa, and receiving a financial compensation for it is definitely making the team\nmembers eager to continue contributing."),(0,o.kt)("p",null,"But that is not our only idea. We would like to create a reproducible benchmarking platform. Currently, we just use GitHub\nactions for benchmarking, which is useful to get some general ideas on how some changes affect the performance of the\nengine. However, they have a high variability (up to 10%), meaning that we can definitely see changes if they are big, but it's\nimpossible to see differences if changes are minimal (1-2%, for example). Having the infrastructure to do proper performance\ntesting would require using dedicated CPUs, for example, which could be financed using the Boa Open Collective."),(0,o.kt)("p",null,"On the development side, there are some very big projects that require deep involvement from the team. Priorities include (not neccesarily in order):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/boa-dev/boa/projects/3"},"Async/Await support"),"."),(0,o.kt)("li",{parentName:"ul"},"Better ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/boa-dev/boa/projects/5"},"completion records")," implementation"),(0,o.kt)("li",{parentName:"ul"},"Performance improvement across the board."),(0,o.kt)("li",{parentName:"ul"},"Future implementation of Shapes/Hidden Classes."),(0,o.kt)("li",{parentName:"ul"},"Being able to measure against other engines."),(0,o.kt)("li",{parentName:"ul"},"Improved conformance of the EcmaScript specification."),(0,o.kt)("li",{parentName:"ul"},"Integration with ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/unicode-org/icu4x"},"ICU4X")," for Intl and future Temporal implementation.")),(0,o.kt)("p",null,"Implementing a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/boa-dev/boa/discussions/1531"},"proper API")," for Rust crates that want to embed Boa as they\nlike, or a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/boa-dev/boa/issues/332"},"C API")," so that other software, not written in Rust, can use Boa,\nare also a priority, and implementing all the new built-in objects to achieve 100% conformance with the ECMAScript\nspecification is also a must. All this takes time, and we will need to finance developers working on these big issues."),(0,o.kt)("h3",{id:"can-i-contribute-differently"},"Can I contribute differently?"),(0,o.kt)("p",null,"If financial contribution is not your strength, you can contribute by asking to be assigned to one of our\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/boa-dev/boa/issues?q=is%3Aopen+is%3Aissue+no%3Aassignee"},"open issues"),", and asking for mentoring if you\ndon't know your way around the engine. Our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/boa-dev/boa/blob/main/CONTRIBUTING.md"},"contribution guide"),"\nshould help you here. If you are more used to working with JavaScript or frontend web development, we also\nwelcome help to improve our web presence, either in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/boa-dev/boa-dev.github.io"},"our website"),", or in\nour ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/boa-dev/boa/issues/820"},"testing representation")," page or benchmarks page. You can also contribute to\nour Criterion benchmark comparison GitHub ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/boa-dev/criterion-compare-action"},"action"),"."),(0,o.kt)("p",null,"We are also looking to improve the documentation of the engine, both for developers of the engine itself and for users of the\nengine. Feel free to contact us in ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/tUFFk9Y"},"Discord"),"."),(0,o.kt)("h3",{id:"thank-you"},"Thank You"),(0,o.kt)("p",null,"Last but certainly not least, a big ",(0,o.kt)("strong",{parentName:"p"},"Thank You")," to all the contributors of Boa.\nIt's not often we list them but we would like to say thank you to the new contributors who joined for the last release."),(0,o.kt)("h4",{id:"thank-you-new-contributors"},"Thank you New Contributors"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/abhishekc-sharma"},"@abhishekc-sharma")," who made their first contribution in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/boa-dev/boa/pull/1612"},"#1612")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/kevinputera"},"@kevinputera")," who made their first contribution in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/boa-dev/boa/pull/1606"},"#1606")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nrabulinski"},"@nrabulinski")," who made their first contribution in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/boa-dev/boa/pull/1614"},"#1614")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/hle0"},"@hle0")," who made their first contribution in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/boa-dev/boa/pull/1618"},"#1618")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nekevss"},"@nekevss")," who made their first contribution in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/boa-dev/boa/pull/1613"},"#1613")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/lowr"},"@lowr")," who made their first contribution in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/boa-dev/boa/pull/1628"},"#1628")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Nimpruda"},"@Nimpruda")," who made their first contribution in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/boa-dev/boa/pull/1634"},"#1634")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/atouchet"},"@atouchet")," who made their first contribution in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/boa-dev/boa/pull/1638"},"#1638")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/praveenbakkal"},"@praveenbakkal")," who made their first contribution in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/boa-dev/boa/pull/1680"},"#1680")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/bsinky"},"@bsinky")," who made their first contribution in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/boa-dev/boa/pull/1665"},"#1665")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/TheDoctor314"},"@TheDoctor314")," who made their first contribution in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/boa-dev/boa/pull/1691"},"#1691"))))}m.isMDXComponent=!0}}]);