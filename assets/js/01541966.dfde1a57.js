"use strict";(self.webpackChunkboajs_dev=self.webpackChunkboajs_dev||[]).push([[1588],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),b=o,g=d["".concat(s,".").concat(b)]||d[b]||p[b]||i;return n?a.createElement(g,r(r({ref:t},u),{},{components:n})):a.createElement(g,r({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},6181:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_position:5},r="Boa Debug Object",l={unversionedId:"debugging/debug_object",id:"debugging/debug_object",title:"Boa Debug Object",description:"Certain debugging actions in JavaScript land can be difficult to impossible to complete.",source:"@site/docs/debugging/debug_object.md",sourceDirName:"debugging",slug:"/debugging/debug_object",permalink:"/boa-site-test/docs/debugging/debug_object",draft:!1,editUrl:"https://github.com/boa-dev/boa-dev.github.io/tree/main/docs/docs/debugging/debug_object.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"infoSidebar",previous:{title:"VM Execution Flowgraph",permalink:"/boa-site-test/docs/debugging/debug_flowgraph"},next:{title:"Debuggers",permalink:"/boa-site-test/docs/debugging/debug_other"}},s={},c=[{value:"<code>$boa.gc</code>",id:"boagc",level:2},{value:"Function <code>$boa.gc.collect()</code>",id:"function-boagccollect",level:3},{value:"Args (0): none",id:"args-0-none",level:4},{value:"Function <code>$boa.function.trace()</code>",id:"function-boafunctiontrace",level:3},{value:"Args (3): target (function), this (value), ...args (target&#39;s args values)",id:"args-3-target-function-this-value-args-targets-args-values",level:4},{value:"Function <code>$boa.function.traceable()</code>",id:"function-boafunctiontraceable",level:3},{value:"Args (2): target (function), should_trace (bool)",id:"args-2-target-function-should_trace-bool",level:4},{value:"Input",id:"input",level:4},{value:"Output",id:"output",level:4},{value:"Function <code>$boa.function.flowgraph()</code>",id:"function-boafunctionflowgraph",level:3},{value:"Args (2): target (function), options (object | string)",id:"args-2-target-function-options-object--string",level:4},{value:"<code>$boa.object</code>",id:"boaobject",level:2},{value:"Function <code>$boa.object.id()</code>",id:"function-boaobjectid",level:3},{value:"Args (1): target (object)",id:"args-1-target-object",level:4},{value:"<code>$boa.optimizer</code>",id:"boaoptimizer",level:2},{value:"Accessor <code>$boa.optimizer.constantFolding</code>",id:"accessor-boaoptimizerconstantfolding",level:3},{value:"Accessor <code>$boa.optimizer.statistics</code>",id:"accessor-boaoptimizerstatistics",level:3},{value:"<code>$boa.realm</code>",id:"boarealm",level:2},{value:"Function <code>$boa.realm.create</code>",id:"function-boarealmcreate",level:3},{value:"Args (0)",id:"args-0",level:4},{value:"<code>$boa.shape</code>",id:"boashape",level:2},{value:"Function <code>$boa.shape.id()</code>",id:"function-boashapeid",level:3},{value:"Args (1): target (object)",id:"args-1-target-object-1",level:4},{value:"Function <code>$boa.shape.type()</code>",id:"function-boashapetype",level:3},{value:"Args (1): target (object)",id:"args-1-target-object-2",level:4},{value:"Function <code>$boa.shape.same()</code>",id:"function-boashapesame",level:3},{value:"Args (2): one (object), two (object)",id:"args-2-one-object-two-object",level:4},{value:"<code>$boa.limits</code>",id:"boalimits",level:2},{value:"Accessor <code>$boa.limits.loop</code>",id:"accessor-boalimitsloop",level:3},{value:"Accessor <code>$boa.limits.recursion</code>",id:"accessor-boalimitsrecursion",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"boa-debug-object"},"Boa Debug Object"),(0,o.kt)("p",null,"Certain debugging actions in JavaScript land can be difficult to impossible to complete."),(0,o.kt)("p",null,"For these debugging purposes, ",(0,o.kt)("inlineCode",{parentName:"p"},"boa_cli")," comes with a ",(0,o.kt)("inlineCode",{parentName:"p"},"$boa")," object that contains useful utilities that can be used for inline debugging\nof ECMAScript source code evaluated by Boa via the CLI."),(0,o.kt)("p",null,"To use the debug object, simply run any target source code with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--debug-object")," CLI flag as shown below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cargo run -- ./your_target_source_code.js --debug-object\n")),(0,o.kt)("p",null,"Providing ",(0,o.kt)("inlineCode",{parentName:"p"},"--debug-object")," tells ",(0,o.kt)("inlineCode",{parentName:"p"},"boa_cli")," to inject the ",(0,o.kt)("inlineCode",{parentName:"p"},"$boa")," debug object into the context as a global variable, making\nit accessible to Boa when the source code is executed."),(0,o.kt)("p",null,"The debug object currently has the below modules implemented:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./debug_object#boagc"},(0,o.kt)("inlineCode",{parentName:"a"},"gc"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./debug_object#boafunction"},(0,o.kt)("inlineCode",{parentName:"a"},"function"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./debug_object#boaobject"},(0,o.kt)("inlineCode",{parentName:"a"},"object"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./debug_object#boaoptimizer"},(0,o.kt)("inlineCode",{parentName:"a"},"optimizer"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./debug_object#boarealm"},(0,o.kt)("inlineCode",{parentName:"a"},"realm"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./debug_object#boashape"},(0,o.kt)("inlineCode",{parentName:"a"},"shape"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./debug_object#boalimits"},(0,o.kt)("inlineCode",{parentName:"a"},"limits")))),(0,o.kt)("p",null,"If there is any functionality currently missing that you think may be helpful, please feel free to submit an issue or Pull Request!"),(0,o.kt)("h2",{id:"boagc"},(0,o.kt)("inlineCode",{parentName:"h2"},"$boa.gc")),(0,o.kt)("p",null,"This module contains functions that are related the garbage collector."),(0,o.kt)("h3",{id:"function-boagccollect"},"Function ",(0,o.kt)("inlineCode",{parentName:"h3"},"$boa.gc.collect()")),(0,o.kt)("h4",{id:"args-0-none"},"Args (0): none"),(0,o.kt)("p",null,"This function triggers the GC to scan the heap and collect garbage."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JavaScript"},"$boa.gc.collect()\n\n\n## `$boa.function`\n\nIn this module are untility functions related to execution and debugging function.\n\n### Function `$boa.function.bytecode()`\n\n#### Args (1): target (function)\n\nThis function returns the compiled bytecode of a function as a string,\n\n```JavaScript\n>> function add(x, y) {\n  return x + y\n}\n>> $boa.function.bytecode(add)\n\"\n------------------------Compiled Output: 'add'------------------------\nLocation  Count   Opcode                     Operands\n\n000000    0000    DefInitArg                 0000: 'a'\n000005    0001    DefInitArg                 0001: 'b'\n000010    0002    RestParameterPop\n000011    0003    GetName                    0000: 'a'\n000016    0004    GetName                    0001: 'b'\n000021    0005    Add\n000022    0006    Return\n000023    0007    PushUndefined\n000024    0008    Return\n\nLiterals:\n    <empty>\n\nBindings:\n    0000: a\n    0001: b\n\nFunctions:\n    <empty>\n\"\n>>\n")),(0,o.kt)("h3",{id:"function-boafunctiontrace"},"Function ",(0,o.kt)("inlineCode",{parentName:"h3"},"$boa.function.trace()")),(0,o.kt)("h4",{id:"args-3-target-function-this-value-args-targets-args-values"},"Args (3): target (function), this (value), ...args (target's args values)"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"trace()")," takes a target function, a this value, and the function's args and runs only that\nfunction as a trace."),(0,o.kt)("p",null,"This is perfect for isolating and tracing a single function. If the specified function calls other\nfunctions, their instructions aren't traced."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JavaScript"},">> const add = (a, b) => a + b\n>> $boa.function.trace(add, undefined, 1, 2)\n5\u03bcs           DefInitArg                 0000: 'a'                  2\n4\u03bcs           DefInitArg                 0001: 'b'                  <empty>\n0\u03bcs           RestParameterPop                                      <empty>\n3\u03bcs           GetName                    0000: 'a'                  1\n1\u03bcs           GetName                    0001: 'b'                  2\n2\u03bcs           Add                                                   3\n1\u03bcs           Return                                                3\n3\n>>\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," value can be changed as well as the arguments that are passed to the function."),(0,o.kt)("h3",{id:"function-boafunctiontraceable"},"Function ",(0,o.kt)("inlineCode",{parentName:"h3"},"$boa.function.traceable()")),(0,o.kt)("h4",{id:"args-2-target-function-should_trace-bool"},"Args (2): target (function), should_trace (bool)"),(0,o.kt)("p",null,"Marks a single function as traceable on all future executions of the function. Both useful to mark\nseveral functions as traceable and to trace functions that suspend their execution (async functions,\ngenerators, async generators)."),(0,o.kt)("h4",{id:"input"},"Input"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Javascript"},"function* g() {\n    yield 1;\n    yield 2;\n    yield 3;\n}\n$boa.function.traceable(g, true);\nvar iter = g();\niter.next();\niter.next();\niter.next();\n")),(0,o.kt)("h4",{id:"output"},"Output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"1\u03bcs           RestParameterPop                                      <empty>\n1\u03bcs           PushUndefined                                         undefined\n2\u03bcs           Yield                                                 undefined\n4\u03bcs           GetName                    0000: 'a'                  1\n0\u03bcs           Yield                                                 1\n1\u03bcs           GeneratorNext                                         undefined\n1\u03bcs           Pop                                                   <empty>\n15\u03bcs          GetName                    0001: 'b'                  2\n1\u03bcs           Yield                                                 2\n1\u03bcs           GeneratorNext                                         undefined\n1\u03bcs           Pop                                                   <empty>\n4\u03bcs           GetName                    0002: 'c'                  3\n1\u03bcs           Yield                                                 3\n")),(0,o.kt)("h3",{id:"function-boafunctionflowgraph"},"Function ",(0,o.kt)("inlineCode",{parentName:"h3"},"$boa.function.flowgraph()")),(0,o.kt)("h4",{id:"args-2-target-function-options-object--string"},"Args (2): target (function), options (object | string)"),(0,o.kt)("p",null,"It can be used to get the instruction flowgraph, like the command-line flag.\nThis works on the function level, allows getting the flow graph without\nquiting the boa shell and adding the specified flags."),(0,o.kt)("p",null,"Besides the function it also takes an argument that, can be a string or an object.\nIf it is a string it represets the flowgraph format, otherwire if it's an object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JavaScript"},"// These are the defaults, if not specified.\n{\n    format: 'mermaid'\n    direction: 'LeftRight' // or 'LR' shorthand.\n}\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JavaScript"},"$boa.function.flowgraph(func, 'graphviz')\n$boa.function.flowgraph(func, { format: 'mermaid', direction: 'TopBottom' })\n")),(0,o.kt)("h2",{id:"boaobject"},(0,o.kt)("inlineCode",{parentName:"h2"},"$boa.object")),(0,o.kt)("p",null,"Contains utility functions for getting internal information about an object."),(0,o.kt)("h3",{id:"function-boaobjectid"},"Function ",(0,o.kt)("inlineCode",{parentName:"h3"},"$boa.object.id()")),(0,o.kt)("h4",{id:"args-1-target-object"},"Args (1): target (object)"),(0,o.kt)("p",null,"This function returns memory address of the given object, as a string."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JavaScript"},"let o = { x: 10, y: 20 }\n$boa.object.id(o)    // '0x7F5B3251B718'\n\n// Geting the address of the $boa object in memory\n$boa.object.id($boa) // '0x7F5B3251B5D8'\n")),(0,o.kt)("h2",{id:"boaoptimizer"},(0,o.kt)("inlineCode",{parentName:"h2"},"$boa.optimizer")),(0,o.kt)("p",null,"This modules contains getters and setters for enabling and disabling optimizations."),(0,o.kt)("h3",{id:"accessor-boaoptimizerconstantfolding"},"Accessor ",(0,o.kt)("inlineCode",{parentName:"h3"},"$boa.optimizer.constantFolding")),(0,o.kt)("p",null,"This is and accessor property on the module, its getter returns ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if enabled or ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," otherwise.\nIts setter can be used to enable/disable the constant folding optimization."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JavaScript"},"$boa.optimizer.constantFolding = true\n$boa.optimizer.constantFolding // true\n")),(0,o.kt)("h3",{id:"accessor-boaoptimizerstatistics"},"Accessor ",(0,o.kt)("inlineCode",{parentName:"h3"},"$boa.optimizer.statistics")),(0,o.kt)("p",null,"This is an accessor property on the module, its getter returns ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if enabled or ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," otherwise.\nIts setter can be used to enable/disable optimization statistics, which are printed to ",(0,o.kt)("inlineCode",{parentName:"p"},"stdout"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JavaScript"},">> $boa.optimizer.constantFolding = true\n>> $boa.optimizer.statistics = true\n>> 1 + 1\nOptimizer {\n    constant folding: 1 run(s), 2 pass(es) (1 mutating, 1 checking)\n}\n\n2\n>>\n")),(0,o.kt)("h2",{id:"boarealm"},(0,o.kt)("inlineCode",{parentName:"h2"},"$boa.realm")),(0,o.kt)("p",null,"This module contains realm utilities to test cross-realm behaviour."),(0,o.kt)("h3",{id:"function-boarealmcreate"},"Function ",(0,o.kt)("inlineCode",{parentName:"h3"},"$boa.realm.create")),(0,o.kt)("h4",{id:"args-0"},"Args (0)"),(0,o.kt)("p",null,"Creates a new realm with a new set of builtins and returns its global object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"let global = $boa.realm.create();\n\nObject != global.Object; // true\n")),(0,o.kt)("h2",{id:"boashape"},(0,o.kt)("inlineCode",{parentName:"h2"},"$boa.shape")),(0,o.kt)("p",null,"This module contains helpful functions for getting information about a shape of an object."),(0,o.kt)("h3",{id:"function-boashapeid"},"Function ",(0,o.kt)("inlineCode",{parentName:"h3"},"$boa.shape.id()")),(0,o.kt)("h4",{id:"args-1-target-object-1"},"Args (1): target (object)"),(0,o.kt)("p",null,"Returns the pointer of the object's shape in memory as a string encoded in hexadecimal format."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JavaScript"},"$boa.shape.id(Number) // '0x7FC35A073868'\n$boa.shape.id({}) // '0x7FC35A046258'\n")),(0,o.kt)("h3",{id:"function-boashapetype"},"Function ",(0,o.kt)("inlineCode",{parentName:"h3"},"$boa.shape.type()")),(0,o.kt)("h4",{id:"args-1-target-object-2"},"Args (1): target (object)"),(0,o.kt)("p",null,"Returns the object's shape type."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JavaScript"},"$boa.shape.type({x: 3}) // 'shared'\n$boa.shape.type(Number) // 'unique'\n")),(0,o.kt)("h3",{id:"function-boashapesame"},"Function ",(0,o.kt)("inlineCode",{parentName:"h3"},"$boa.shape.same()")),(0,o.kt)("h4",{id:"args-2-one-object-two-object"},"Args (2): one (object), two (object)"),(0,o.kt)("p",null,"Returns ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if both objects have the same shape."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JavaScript"},"// The values of the properties are not important!\nlet o1 = { x: 10 }\nlet o2 = {}\n$boa.shape.same(o1, o2) // false\n\no2.x = 20\n$boa.shape.same(o1, o2) // true\n\no2.y = 200\n$boa.shape.same(o1, o2) // false\n")),(0,o.kt)("h2",{id:"boalimits"},(0,o.kt)("inlineCode",{parentName:"h2"},"$boa.limits")),(0,o.kt)("p",null,"This module contains utilities for changing runtime limits."),(0,o.kt)("h3",{id:"accessor-boalimitsloop"},"Accessor ",(0,o.kt)("inlineCode",{parentName:"h3"},"$boa.limits.loop")),(0,o.kt)("p",null,"This is an accessor property on the module, its getter returns the loop iteration limit before an error is thrown.\nIts setter can be used to set the loop iteration limit."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"$boa.limits.loop = 10;\n\nwhile (true) {} // RuntimeLimit: Maximum loop iteration limit 10 exceeded\n")),(0,o.kt)("h3",{id:"accessor-boalimitsrecursion"},"Accessor ",(0,o.kt)("inlineCode",{parentName:"h3"},"$boa.limits.recursion")),(0,o.kt)("p",null,"This is an accessor property on the module, its getter returns the recursion limit before an error is thrown.\nIts setter can be used to set the recursion limit."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"$boa.limits.recursion = 100;\n\nfunction x() {\n  return x();\n}\nx(); // RuntimeLimit: Maximum recursion limit 100 exceeded\n")))}p.isMDXComponent=!0}}]);