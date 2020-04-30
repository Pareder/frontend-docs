(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{170:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(1),o=r(9),c=(r(0),r(187)),a={id:"resource_customresources",title:"Custom Resource",sidebar_label:"Custom Resource"},s={id:"resources/resource_customresources",title:"Custom Resource",description:"[connectResource](/(/frontend-docs/docs//resources/connect_resources) will add all possible methods to work with standard REST API.",source:"@site/docs/resources/customResource.md",permalink:"/frontend-docs/docs/resources/resource_customresources",editUrl:"https://github.com/django-stars/frontend-docs/tree/master/docs/resources/customResource.md",sidebar_label:"Custom Resource",sidebar:"resourcesSitebar",previous:{title:"ConnectResources",permalink:"/frontend-docs/docs/resources/connect_resources"},next:{title:"prefetchResources",permalink:"/frontend-docs/docs/resources/resource_prefetchResources"}},u=[{value:"Basic ussage",id:"basic-ussage",children:[]}],i={rightToc:u};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"[connectResource]","(/(/frontend-docs/docs//resources/connect_resources) will add all possible methods to work with standard REST API.\nBut what if you need something more then sending 1 HTTP request, what if you have more complex logic?\nIn this case you may need to use ",Object(c.b)("del",{parentName:"p"},"customresource")),Object(c.b)("p",null,Object(c.b)("del",{parentName:"p"},"customresource")," is a function that takes 1 argument ",Object(c.b)("inlineCode",{parentName:"p"},"async")," function and returs modified connectResource function.\n",Object(c.b)("strong",{parentName:"p"},"modified")," means that you will still have all props that you have with simple ",Object(c.b)("del",{parentName:"p"},"customresource"),", but in additional you will have one more async property in your React Component ",Object(c.b)("del",{parentName:"p"},"this.props","[namespace]",".customRequest")," that run your custom async action instead of sending 1 HTTP request based on REST grud."),Object(c.b)("h2",{id:"basic-ussage"},"Basic ussage"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"import { customResource } from '@ds-frontend/resource'\n\nfunction myCustomFetch(API, payload, meta) {\n  return new Promise(function(resolve,reject){\n    setTimeout(()=>resolve({ succes: true }),1000)\n  })\n}\n\nconst customConnectResource = customResource(myCustomFetch)\n\ncustomConnectResource({ namespace: 'delay' })(MyReactElement)\n\n")),Object(c.b)("p",null,"In this example customConnectResource function that takes ","[Resouce]","(",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:3000/(/frontend-docs/docs//resources/connect_resources#resource"}),"http://localhost:3000/(/frontend-docs/docs//resources/connect_resources#resource"),") as an argument and return HOC. The difference between ",Object(c.b)("del",{parentName:"p"},"connectResource")," is that customConnectResource can take only 1 ","[Resouce]","(",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:3000/(/frontend-docs/docs//resources/connect_resources#resource"}),"http://localhost:3000/(/frontend-docs/docs//resources/connect_resources#resource"),") config, it can not be an array. And it will add 1 more property ",Object(c.b)("inlineCode",{parentName:"p"},"this.props.delay.customFetch"),"."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"myCustomFetch")," is function that will be triggered instead of stantard HTTP request. This function acceps 3 arguments:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"[API]","(/(/frontend-docs/docs//api/api_about) module for sending HTTP request"),Object(c.b)("li",{parentName:"ul"},"payload. Is redux action payload"),Object(c.b)("li",{parentName:"ul"},"meta. Is redux action meta data")),Object(c.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Pay attantion that function for custom request should return ","[Promise]","(",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/(/frontend-docs/docs//Web/JavaScript/Reference/Global_Objects/Promise"}),"https://developer.mozilla.org/en-US/(/frontend-docs/docs//Web/JavaScript/Reference/Global_Objects/Promise"),")"))))}l.isMDXComponent=!0},187:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=o.a.createContext({}),l=function(e){var t=o.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s({},t,{},e)),r},d=function(e){var t=l(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,b=d["".concat(a,".").concat(m)]||d[m]||p[m]||c;return r?o.a.createElement(b,s({ref:t},i,{components:r})):o.a.createElement(b,s({ref:t},i))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var i=2;i<c;i++)a[i]=r[i];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);