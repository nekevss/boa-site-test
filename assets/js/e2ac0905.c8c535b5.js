"use strict";(self.webpackChunkboajs_dev=self.webpackChunkboajs_dev||[]).push([[2823],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,d=c["".concat(l,".").concat(m)]||c[m]||h[m]||o;return a?n.createElement(d,s(s({ref:t},u),{},{components:a})):n.createElement(d,s({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2276:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={layout:"post",tags:["post"],title:"Boa release v0.13",author:"Boa Developers",permalink:"2021/09/30/boa-release-13.html"},s=void 0,i={permalink:"/boa-site-test/blog/2021/09/30/boa-release-13",source:"@site/blog/2021-09-30-boa-release-13.md",title:"Boa release v0.13",description:"Boa v0.13 is here! Boa is a JavaScript engine written in the Rust programming language. It makes it easy to embed a JS engine in your projects, and you can even use it from webassembly. See the about page for more info.",date:"2021-09-30T00:00:00.000Z",formattedDate:"September 30, 2021",tags:[{label:"post",permalink:"/boa-site-test/blog/tags/post"}],readingTime:4.13,hasTruncateMarker:!1,authors:[{name:"Boa Developers"}],frontMatter:{layout:"post",tags:["post"],title:"Boa release v0.13",author:"Boa Developers",permalink:"2021/09/30/boa-release-13.html"},prevItem:{title:"Boa release v0.14",permalink:"/boa-site-test/blog/2022/03/15/boa-release-14"},nextItem:{title:"Boa release v0.12",permalink:"/boa-site-test/blog/2021/06/07/boa-release-12"}},l={authorsImageUrls:[void 0]},p=[{value:"ECMAScript language features",id:"ecmascript-language-features",level:2},{value:"Boa API",id:"boa-api",level:2},{value:"Calling Rust closures from JavaScript",id:"calling-rust-closures-from-javascript",level:3},{value:"Boa prelude",id:"boa-prelude",level:3},{value:"Test 262",id:"test-262",level:2},{value:"Keeping up with Rust",id:"keeping-up-with-rust",level:2},{value:"Keeping things in order",id:"keeping-things-in-order",level:2},{value:"VM",id:"vm",level:2},{value:"Opening up the discussion",id:"opening-up-the-discussion",level:2},{value:"Thank You",id:"thank-you",level:2}],u={toc:p},c="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Boa v0.13 is here! Boa is a JavaScript engine written in the Rust programming language. It makes it easy to embed a JS engine in your projects, and you can even use it from webassembly. See the ",(0,r.kt)("a",{parentName:"p",href:"/about"},"about")," page for more info."),(0,r.kt)("p",null,"We currently support part of the language. In this release, our conformance has grown to 41.97% of the official ECMAScript Test Suite (Test262). We have closed 40 issues and merged 105 pull requests. You can check the full list of changes ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/boa-dev/boa/blob/v0.13/CHANGELOG.md"},"here"),"."),(0,r.kt)("p",null,"This release brings some new features, such as support for calling Rust closures from JavaScript to improve better interopability between JS and Rust."),(0,r.kt)("h2",{id:"ecmascript-language-features"},"ECMAScript language features"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges"},"named capture groups")," are now implemented and enabled."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const RE_DATE = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;\n\nconst matchObj = RE_DATE.exec("1999-12-31");\nconst year = matchObj.groups.year; // 1999\nconst month = matchObj.groups.month; // 12\nconst day = matchObj.groups.day; // 31\n')),(0,r.kt)("p",null,"This release brings support for the relative indexing method ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/at"},"String.prototype.at()"),". This makes it easier to fetch values at the end of an array or string instead of doing ",(0,r.kt)("inlineCode",{parentName:"p"},"str[str.length - 1]"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const sentence = "The quick brown fox jumps over the lazy dog.";\nlet index = 5;\nconsole.log(\n  `Using an index of ${index} the character returned is ${sentence.at(index)}`\n);\n// expected output: "Using an index of 5 the character returned is u"\n')),(0,r.kt)("p",null,"Other implemented language features include destructoring assignments, ",(0,r.kt)("inlineCode",{parentName:"p"},"replaceAll()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Object.values()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Object.keys()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Object.preventExtensions()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"splice()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sort()"),", spreading objects and more."),(0,r.kt)("h2",{id:"boa-api"},"Boa API"),(0,r.kt)("h3",{id:"calling-rust-closures-from-javascript"},"Calling Rust closures from JavaScript"),(0,r.kt)("p",null,"In addition to registering Rust functions as global JavaScript functions, our API has been expanded to register Rust closures. ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/Boa/0.13.0/boa/context/struct.Context.html#method.register_global_closure"},(0,r.kt)("inlineCode",{parentName:"a"},"register_global_closure"))," allows to capture variables in closures that can be called from javascript:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let mut context = Context::new();\nlet add_value = 1.0;\ncontext.register_global_closure("addOne", 1, move |_, args, _| {\n    let argument = args.get(0).unwrap().as_number().unwrap();\n    Ok(JsValue::new(argument + add_value))\n})?;\nassert_eq!(context.eval("addOne(41)")?, 42.into());\n')),(0,r.kt)("p",null,"To see the full capabilities of this feature, take a look at our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/boa-dev/boa/blob/main/boa/examples/closures.rs"},"examples"),". Thanks to @HalidOdat and @jedel1043 for their work on this."),(0,r.kt)("h3",{id:"boa-prelude"},"Boa prelude"),(0,r.kt)("p",null,"This release exposes a prelude of useful things that are already imported. This should make it more ergonomic to work with."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use boa::prelude::*; // This would import all the commonly-used things\n\nfn main() {\n    let number = JSValue::number(3.1415);\n    let realm = Realm::create();\n    let mut engine = Interpreter::new(realm);\n    let result = forward(&mut engine, "Math.PI");\n}\n')),(0,r.kt)("h2",{id:"test-262"},"Test 262"),(0,r.kt)("p",null,"Test262 is the implementation conformance test suite maintained by TC39. It's used by nearly all engines to measure how conformant they are to the specification. Boa pulls the tests in-tree and runs them against all PRs."),(0,r.kt)("p",null,"Since v0.12 we have managed to pass 6391 more tests and are 7% more conformant. This has been great progress by all involved and we hope this continues to improve. Most of these new passes have come from refactors across the codebase which have had little impact on performance, in fact, v0.13 is much faster than v0.12."),(0,r.kt)("p",null,"You can track Boa's conformance to the specification ",(0,r.kt)("a",{parentName:"p",href:"https://boa-dev.github.io/boa/test262/#"},"here")),(0,r.kt)("h2",{id:"keeping-up-with-rust"},"Keeping up with Rust"),(0,r.kt)("p",null,"Rust is changing underneath us. This means we need to make sure our code is conforming the latest standards and we're taking advantage of the best optimizations the language can provide. In order to do this we rely on Clippy, this is Rust's in-house linter. We updated our code to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/boa-dev/boa/pull/1352"},"respect the latest Rust version")," and updated ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/boa-dev/boa/pull/1356"},"formatting"),'. Often a nice bonus of doing this is getting performance improvements for free as Clippy gets more "smarter". Thanks to @neeldug and @RageKnify for the work in this area.'),(0,r.kt)("h2",{id:"keeping-things-in-order"},"Keeping things in order"),(0,r.kt)("p",null,"Previously object properties were stored using ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/rustc-hash/1.1.0/rustc_hash/type.FxHashMap.html"},(0,r.kt)("inlineCode",{parentName:"a"},"FxHashMap")),". Despite being very fast it didn't offer any guarantees about the order. Properties need to retain the same order they were entered. In order to achieve this we switched over to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/indexmap/1.7.0/indexmap/"},"IndexMap"),". Traits in Rust make this easy as IndexMap was designed to be a drop-in replacement for other HashMap implementations by following the same Trait. Thanks to IndexMap offering the possibility to use alternative hashing algorithms, we could continue using the fast ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/rustc-hash/1.1.0/rustc_hash/struct.FxHasher.html"},(0,r.kt)("inlineCode",{parentName:"a"},"FxHasher"))," algorithm from rustc. Performance losses were minimal on some benchmarks and we actually made some gains in others. Thanks to @raskad for their work on this"),(0,r.kt)("h2",{id:"vm"},"VM"),(0,r.kt)("p",null,"There is still on-going work to utilise a VM, this is happening ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/boa-dev/boa/blob/main/docs/vm.md#state-of-play"},"alongside")," how Boa runs today. Although its not exposed yet there has been plenty of refactorings to the VM in order to make it performant. Hopefully we can talk about this in more detail soon."),(0,r.kt)("h2",{id:"opening-up-the-discussion"},"Opening up the discussion"),(0,r.kt)("p",null,"As of this release Boa has begun to utilise Github's Discussions feature. You can catch more long-ranging projects ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/boa-dev/boa/discussions"},"here")),(0,r.kt)("h2",{id:"thank-you"},"Thank You"),(0,r.kt)("p",null,"This has been the biggest release yet, there have been many features and fixes. We want to thank all the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/boa-dev/boa/graphs/contributors?from=2021-06-01&to=2021-09-26&type=c"},"contributors")," in this release, whether it was features, fixes or raising bugs."),(0,r.kt)("p",null,"If you're interested in contributing to Boa, we have some ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/boa-dev/boa/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22"},'"good first issues"')," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/boa-dev/boa/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22"},'"issues where help is wanted"'),"."))}h.isMDXComponent=!0}}]);