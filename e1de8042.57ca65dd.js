(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{179:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(9),o=(n(0),n(187)),c={id:"resource_prefetchResources",title:"prefetchResources",sidebar_label:"prefetchResources"},s={id:"resources/resource_prefetchResources",title:"prefetchResources",description:"~~prefetchResources~~ is [HOC](https://reactjs.org/docs/higher-order-components.html) that call async action to retrive remote data when your component mounts to the [DOM](https://www.w3schools.com/js/js_htmldom.asp).",source:"@site/docs/resources/prefetchResources.md",permalink:"/frontend-docs/docs/resources/resource_prefetchResources",editUrl:"https://github.com/django-stars/frontend-docs/tree/master/docs/resources/prefetchResources.md",sidebar_label:"prefetchResources",sidebar:"resourcesSitebar",previous:{title:"Custom Resource",permalink:"/frontend-docs/docs/resources/resource_customresources"},next:{title:"withFinalForm",permalink:"/frontend-docs/docs/resources/resource_withFinalForm"}},i=[{value:"<del>Standard workflow</del>",id:"standard-workflow",children:[]},{value:"<del>API</del>",id:"api",children:[{value:"<del>resources</del>",id:"resources",children:[]},{value:"<del>options</del>",id:"options",children:[]}]},{value:"<del>customresource on mount</del>",id:"customresource-on-mount",children:[]},{value:"<del>prefetchResources us connectResources</del>",id:"prefetchresources-us-connectresources",children:[]}],l={rightToc:i};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("del",{parentName:"p"},"prefetchResources")," is ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://reactjs.org/docs/higher-order-components.html"}),"HOC")," that call async action to retrive remote data when your component mounts to the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.w3schools.com/js/js_htmldom.asp"}),"DOM"),"."),Object(o.b)("h2",{id:"standard-workflow"},Object(o.b)("del",{parentName:"h2"},"Standard workflow")),Object(o.b)("p",null,"The main idea is that in most cases when you need to render some React Element you may need to send HTTP request to retrive some remote data and then draw your widget. To do this you basically need to implement next logic"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"using React lifecycle methods, send HTTP request when your Component will be mounted to the DOM"),Object(o.b)("li",{parentName:"ol"},"Show loading indicator while fetching remote data"),Object(o.b)("li",{parentName:"ol"},"Terminate pending HTTP request when Component will be unmounted from the DOM"),Object(o.b)("li",{parentName:"ol"},"clear Redux store data for given Component.")),Object(o.b)("p",null,"All this things are already made with ",Object(o.b)("del",{parentName:"p"},"prefetchResources"),", so that you can safe your time and do not dublicate your code."),Object(o.b)("h2",{id:"api"},Object(o.b)("del",{parentName:"h2"},"API")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"prefetchResources(resources, options)\n")),Object(o.b)("h3",{id:"resources"},Object(o.b)("del",{parentName:"h3"},"resources")),Object(o.b)("p",null,"Where ",Object(o.b)("inlineCode",{parentName:"p"},"resources")," is param that will be passed to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/frontend-docs/docs/resources/connect_resources"}),"connectResources")," function.\nSame as with connectResources, ",Object(o.b)("inlineCode",{parentName:"p"},"resources")," could be ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/frontend-docs/docs/resources/connect_resources#resource"}),"Resource")," object or ",Object(o.b)("strong",{parentName:"p"},"Array<Resource",">")," or simple ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/frontend-docs/docs/resources/connect_resources#simple-syntax"}),"String")),Object(o.b)("h3",{id:"options"},Object(o.b)("del",{parentName:"h3"},"options")),Object(o.b)("p",null,"Object with additional configurations"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Property"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"refresh"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Boolean"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"true")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"destroyOnUnmount"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Boolean"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"true")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"defaultParams"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Object"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"null")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Loader"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"React Element"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}))))),Object(o.b)("h4",{id:"refresh"},Object(o.b)("del",{parentName:"h4"},"refresh")),Object(o.b)("p",null,"Boolean flag that mostly will used in pair with ",Object(o.b)("inlineCode",{parentName:"p"},"destroyOnUnmount = false"),".\nIn general this flag help you to control if you need to send HTTP request once more in case you already have all information to draw your widget."),Object(o.b)("p",null,"Lest have an example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"//in your redux store you have next information\n\n{\n  users: {\n    data: {\n      count: 2,\n      results: [\n        { uuid: 1, name: 'Users1'},\n        { uuid: 2, name: 'Users2'},\n      ]\n    }\n  }\n}\n\nimport { prefetchResources } from '@ds-frontend/resource'\n\nprefetchResources('users', { refresh: true })(MyReactElement)\n\n\n")),Object(o.b)("p",null,"So in this example you already have all data in store to render your React Element. So if you need to refresh this data then you may need to set ",Object(o.b)("inlineCode",{parentName:"p"},"refresh: true")," otherwise set it to ",Object(o.b)("inlineCode",{parentName:"p"},"false")),Object(o.b)("h4",{id:"destroyonunmount"},Object(o.b)("del",{parentName:"h4"},"destroyOnUnmount")),Object(o.b)("p",null,"Boolean flag that determinates if you need to store data after your Component will be removed from the DOM or not."),Object(o.b)("p",null,"For example:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Your redux store is empty")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),"{\n\n}\n")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"React renders your component with prefetchResources HOC")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import { prefetchResources } from '@ds-frontend/resource'\n\nprefetchResources('users')(MyReactElement)\n\n")),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"After your element appears in the DOM, ",Object(o.b)("del",{parentName:"li"},"prefetchResources")," HOC will send GET /users HTTP request and store data in redux. Now in redux store you have")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),"{\n  users: {\n    data: {\n      count: 2,\n      results: [\n        { uuid: 1, name: 'Users1'},\n        { uuid: 2, name: 'Users2'},\n      ]\n    }\n  }\n}\n")),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"Component unmounts from the DOM. And here u can decide if u need this information cached or not. So if destroyOnUnmount false, then ",Object(o.b)("inlineCode",{parentName:"li"},"users")," object will not be removed from  redux. If ",Object(o.b)("inlineCode",{parentName:"li"},"true"),", you will have again empty store in redux.")),Object(o.b)("h4",{id:"defaultparams"},Object(o.b)("del",{parentName:"h4"},"defaultParams")),Object(o.b)("p",null,"Default params is optional param that will help you to pass some hardcoded values to your initial HTTP request.\nLets have same example with users list Componet, but now we have lot of users and in UI we have table with pagination. So that on your ComponentDidMount function you should not just ",Object(o.b)("inlineCode",{parentName:"p"},"GET /api/users"),", but define some custom range of users to show ",Object(o.b)("inlineCode",{parentName:"p"},"GET /api/users/?offset=0&limit=25"),". To solve this task you may need to use ",Object(o.b)("inlineCode",{parentName:"p"},"defaultParams")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import { prefetchResources } from '@ds-frontend/resource'\n\nprefetchResources({\n  namespace: 'users',\n  queries: ['offset', 'limit']\n}, {\n  defaultParams: {\n    offset: 0,\n    limit: 25\n  }\n})(MyReactElement)\n")),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Please do not forget that you need to define ",Object(o.b)("inlineCode",{parentName:"p"},"queries")," in Resource configs)"))),Object(o.b)("h4",{id:"loader"},Object(o.b)("del",{parentName:"h4"},"Loader")),Object(o.b)("p",null,"This is React Element that will be shown while initial request is pending."),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This component will be shown ",Object(o.b)("strong",{parentName:"p"},"only")," when ",Object(o.b)("strong",{parentName:"p"},"initial")," request is pending"))),Object(o.b)("p",null,"By default ",Object(o.b)("del",{parentName:"p"},"prefetchResources")," will not render your Component while initial request is pending.\nIf you want to show your own loader you can create your Loader Component for example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'function MyAwesomeLoader({ isLoading, children }){\n  if(isLoading){\n    return "Let\'s enjoy this awesome text"\n  }\n  return children\n}\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import { prefetchResources } from '@ds-frontend/resource'\n\nprefetchResources({\n  namespace: 'users',\n  queries: ['offset', 'limit']\n}, {\n  defaultParams: {\n    offset: 0,\n    limit: 25\n  },\n  Loader: MyAwesomeLoader\n})(MyReactElement)\n")),Object(o.b)("h2",{id:"customresource-on-mount"},Object(o.b)("del",{parentName:"h2"},"customresource on mount")),Object(o.b)("p",null,"You can use ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/frontend-docs/docs/resources/resource_customresources"}),"customresource")," in pair with ",Object(o.b)("del",{parentName:"p"},"prefetchResources"),".\nTo do that you just need to pass ",Object(o.b)("del",{parentName:"p"},"customresource")," as a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/frontend-docs/docs/resources/resource_prefetchResources#resources"}),"resources")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import { customResource, prefetchResources } from '@ds-frontend/resource'\n\nfunction myCustomFetch(API, payload, meta) {\n  return new Promise(function(resolve,reject){\n    setTimeout(()=>resolve({ succes: true }),1000)\n  })\n}\n\nconst customConnectResource = customResource(myCustomFetch)\n\nexport default prefetchResources(\n  customConnectResource({\n    namespace: 'test'\n  }),\n  {\n    refresh: false,\n  }\n)\n\n//same with short sintax\nexport default prefetchResources(\n  customConnectResource('test'),\n  {\n    refresh: false,\n  }\n)\n\n")),Object(o.b)("h2",{id:"prefetchresources-us-connectresources"},Object(o.b)("del",{parentName:"h2"},"prefetchResources us connectResources")),Object(o.b)("p",null,"In deneral connectResources is a part of prefetchResources.\nThe main difference is that connectResources will only pass aditional props to your Component and prefetchResources has some implementation with React life cicle."),Object(o.b)("p",null,"To decide what HOC to use, you may take a look on this diagram:"),Object(o.b)("div",null,Object(o.b)("img",{src:"/frontend-docs/img/diagram.svg"})),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Please do not use React lifecycle methods to send HTTP request on mount by your own.\nIt is important to use ",Object(o.b)("strong",{parentName:"p"},"prefetchResources")," for several reasons:"),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"do not dublicate code"),Object(o.b)("li",{parentName:"ul"},"do not loose implementation that is already done in ",Object(o.b)("strong",{parentName:"li"},"prefetchResources"))))))}b.isMDXComponent=!0},187:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},u=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,m=u["".concat(c,".").concat(d)]||u[d]||p[d]||o;return n?a.a.createElement(m,s({ref:t},l,{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);