"use strict";(self.webpackChunkboajs_dev=self.webpackChunkboajs_dev||[]).push([[4265],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>b});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=o.createContext({}),d=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=d(e.components);return o.createElement(u.Provider,{value:n},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=d(t),p=a,b=l["".concat(u,".").concat(p)]||l[p]||f[p]||i;return t?o.createElement(b,r(r({ref:n},s),{},{components:t})):o.createElement(b,r({ref:n},s))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=p;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c[l]="string"==typeof e?e:a,r[1]=c;for(var d=2;d<i;d++)r[d]=t[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1024:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>r,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var o=t(7462),a=(t(7294),t(3905));const i={sidebar_position:2},r="$boa.function",c={unversionedId:"debugging/debug_object/documentation/function",id:"debugging/debug_object/documentation/function",title:"$boa.function",description:"In this module are untility functions related to execution and debugging function.",source:"@site/docs/debugging/debug_object/documentation/function.md",sourceDirName:"debugging/debug_object/documentation",slug:"/debugging/debug_object/documentation/function",permalink:"/boa-site-test/docs/debugging/debug_object/documentation/function",draft:!1,editUrl:"https://github.com/boa-dev/boa-dev.github.io/tree/main/docs/docs/debugging/debug_object/documentation/function.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"infoSidebar",previous:{title:"$boa.gc",permalink:"/boa-site-test/docs/debugging/debug_object/documentation/gc"},next:{title:"$boa.object",permalink:"/boa-site-test/docs/debugging/debug_object/documentation/object"}},u={},d=[{value:"Function <code>$boa.function.bytecode(func)</code>",id:"function-boafunctionbytecodefunc",level:2},{value:"Function <code>$boa.function.trace(func, this, ...args)</code>",id:"function-boafunctiontracefunc-this-args",level:2},{value:"Function <code>$boa.function.traceable(func, mode)</code>",id:"function-boafunctiontraceablefunc-mode",level:2},{value:"Input",id:"input",level:3},{value:"Output",id:"output",level:3},{value:"Function <code>$boa.function.flowgraph(func, options)</code>",id:"function-boafunctionflowgraphfunc-options",level:2}],s={toc:d},l="wrapper";function f(e){let{components:n,...t}=e;return(0,a.kt)(l,(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"boafunction"},(0,a.kt)("inlineCode",{parentName:"h1"},"$boa.function")),(0,a.kt)("p",null,"In this module are untility functions related to execution and debugging function."),(0,a.kt)("h2",{id:"function-boafunctionbytecodefunc"},"Function ",(0,a.kt)("inlineCode",{parentName:"h2"},"$boa.function.bytecode(func)")),(0,a.kt)("p",null,"This function returns the compiled bytecode of a function as a string,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JavaScript"},">> function add(x, y) {\n  return x + y\n}\n>> $boa.function.bytecode(add)\n\"\n------------------------Compiled Output: 'add'------------------------\nLocation  Count   Opcode                     Operands\n\n000000    0000    DefInitArg                 0000: 'a'\n000005    0001    DefInitArg                 0001: 'b'\n000010    0002    RestParameterPop\n000011    0003    GetName                    0000: 'a'\n000016    0004    GetName                    0001: 'b'\n000021    0005    Add\n000022    0006    Return\n000023    0007    PushUndefined\n000024    0008    Return\n\nLiterals:\n    <empty>\n\nBindings:\n    0000: a\n    0001: b\n\nFunctions:\n    <empty>\n\"\n>>\n")),(0,a.kt)("h2",{id:"function-boafunctiontracefunc-this-args"},"Function ",(0,a.kt)("inlineCode",{parentName:"h2"},"$boa.function.trace(func, this, ...args)")),(0,a.kt)("p",null,"It only traces the specified function. If the specified function calls other functions,\ntheir instructions aren't traced."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JavaScript"},">> const add = (a, b) => a + b\n>> $boa.function.trace(add, undefined, 1, 2)\n5\u03bcs           DefInitArg                 0000: 'a'                  2\n4\u03bcs           DefInitArg                 0001: 'b'                  <empty>\n0\u03bcs           RestParameterPop                                      <empty>\n3\u03bcs           GetName                    0000: 'a'                  1\n1\u03bcs           GetName                    0001: 'b'                  2\n2\u03bcs           Add                                                   3\n1\u03bcs           Return                                                3\n3\n>>\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"this")," value can be changed as well as the arguments that are passed to the function."),(0,a.kt)("h2",{id:"function-boafunctiontraceablefunc-mode"},"Function ",(0,a.kt)("inlineCode",{parentName:"h2"},"$boa.function.traceable(func, mode)")),(0,a.kt)("p",null,"Marks a single function as traceable on all future executions of the function. Both useful to mark\nseveral functions as traceable and to trace functions that suspend their execution (async functions,\ngenerators, async generators)."),(0,a.kt)("h3",{id:"input"},"Input"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Javascript"},"function* g() {\n    yield 1;\n    yield 2;\n    yield 3;\n}\n$boa.function.traceable(g, true);\nvar iter = g();\niter.next();\niter.next();\niter.next();\n")),(0,a.kt)("h3",{id:"output"},"Output"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"1\u03bcs           RestParameterPop                                      <empty>\n1\u03bcs           PushUndefined                                         undefined\n2\u03bcs           Yield                                                 undefined\n4\u03bcs           GetName                    0000: 'a'                  1\n0\u03bcs           Yield                                                 1\n1\u03bcs           GeneratorNext                                         undefined\n1\u03bcs           Pop                                                   <empty>\n15\u03bcs          GetName                    0001: 'b'                  2\n1\u03bcs           Yield                                                 2\n1\u03bcs           GeneratorNext                                         undefined\n1\u03bcs           Pop                                                   <empty>\n4\u03bcs           GetName                    0002: 'c'                  3\n1\u03bcs           Yield                                                 3\n")),(0,a.kt)("h2",{id:"function-boafunctionflowgraphfunc-options"},"Function ",(0,a.kt)("inlineCode",{parentName:"h2"},"$boa.function.flowgraph(func, options)")),(0,a.kt)("p",null,"It can be used to get the instruction flowgraph, like the command-line flag.\nThis works on the function level, allows getting the flow graph without\nquiting the boa shell and adding the specified flags."),(0,a.kt)("p",null,"Besides the function it also takes an argument that, can be a string or an object.\nIf it is a string it represets the flowgraph format, otherwire if it's an object:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JavaScript"},"// These are the defaults, if not specified.\n{\n    format: 'mermaid'\n    direction: 'LeftRight' // or 'LR' shorthand.\n}\n")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JavaScript"},"$boa.function.flowgraph(func, 'graphviz')\n$boa.function.flowgraph(func, { format: 'mermaid', direction: 'TopBottom' })\n")))}f.isMDXComponent=!0}}]);