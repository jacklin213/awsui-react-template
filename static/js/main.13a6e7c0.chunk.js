(this["webpackJsonpawsui-react-template"]=this["webpackJsonpawsui-react-template"]||[]).push([[0],{130:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(20),i=n.n(r),o=n(34),s=(n(81),n(49)),h=n(11),j=n(64),l=n(14),d=n(68),u=n(69),b=n(67),p=n(62),m={home:{text:"Home",location:"home",href:"#/home"},components:{text:"Components",location:"components",href:"#/components"}},x=n(4);function O(){return function(){var e,t=null!==(e=window.location.hash)&&void 0!==e?e:"/";return t.startsWith("#")?t.substring(1):t}().split("/").reduce((function(e,t){return""===t||"home"===t?[{text:m.home.text,href:m.home.href}]:[].concat(Object(b.a)(e),[{text:m[t].text,href:m[t].href}])}),[])}var f=function(){return Object(h.f)(),Object(x.jsx)(p.a,{items:O(),ariaLabel:"Breadcrumbs"})},g=n(37),v=n(63),w=n(66);var k=function(){return document.title="Components Table - awsui-react-template",Object(x.jsx)(v.a,{header:Object(x.jsx)(g.a,{children:"Components Table"}),columnDefinitions:[{id:"name",header:"Name",cell:function(e){return e.name}},{id:"description",header:"Description",cell:function(e){return e.description}}],items:[],loadingText:"Loading Components...",empty:Object(x.jsxs)(l.a,{textAlign:"center",color:"inherit",children:[Object(x.jsx)("b",{children:"No components"}),Object(x.jsx)(l.a,{padding:{bottom:"s"},variant:"p",color:"inherit",children:"No components to display."})]}),filter:Object(x.jsx)(w.a,{filteringPlaceholder:"Find components",filteringText:""})})};var y=function(){var e=Object(h.f)();return Object(x.jsxs)(l.a,{textAlign:"center",children:[Object(x.jsxs)(l.a,{variant:"h1",children:[Object(x.jsx)("strong",{children:"Error"})," 404"]}),Object(x.jsxs)(l.a,{variant:"h2",children:["Hmm... looks like page: ",Object(x.jsx)(l.a,{variant:"code",children:e.pathname})," was not found"]}),Object(x.jsxs)(l.a,{children:["Click ",Object(x.jsx)("a",{href:"#/home",children:"here"})," to return to the home page."]})]})},C=n(61),H=n(72),D=n(60),F=n(70),N="https://github.com/jacklin213/awsui-react-template",T="https://github.com/aws/awsui-documentation",P=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return Object(x.jsx)(F.a,{external:n,href:e,children:t})};var A=function(){return document.title="Home - awsui-react-template",Object(x.jsxs)(H.a,{header:Object(x.jsx)(g.a,{variant:"h2",description:"Created by jacklin213",actions:Object(x.jsx)(D.a,{direction:"horizontal",size:"xs",children:Object(x.jsx)(C.a,{href:N,target:"_blank",iconAlign:"right",iconName:"external",variant:"primary",children:"Github"})}),children:"Home - awsui-react-template"}),children:[Object(x.jsxs)(l.a,{variant:"p",children:["React template project bootstrapped with ",P("https://github.com/facebook/create-react-app","Create React App"),". Contains a basic implementation of HashRouter using ",P("https://github.com/remix-run/react-router","react-router-dom")," (5.3.0) and uses ",P(T,"@awsui/components-react"),"."]}),Object(x.jsxs)(l.a,{variant:"p",children:["Project automatically builds and deploys the app to gh-pages using ",P("https://github.com/peaceiris/actions-gh-pages","peaceiris/actions-gh-pages@v3")]})]})},L=n(73);var S=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(L.a,{header:Object(x.jsx)(g.a,{children:"Info Pane"}),footer:Object(x.jsx)("p",{children:"Created by jacklin213"}),children:Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{children:"Here are some links to the resources used for this project"}),Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:P(N,"awsui-react-template Github")}),Object(x.jsx)("li",{children:P(T,"@awsui-documentation")})]})]})})})},B=n(74),E=n(65);var I=function(){var e,t=Object(h.f)(),n=Object(c.useState)(null!==(e="#".concat(t.pathname))&&void 0!==e?e:m.home.href),a=Object(s.a)(n,2),r=a[0],i=a[1];return Object(c.useEffect)((function(){return i("#".concat(t.pathname))}),[t]),Object(x.jsx)(E.a,{activeHref:r,header:{href:"#/",text:"awsui-react-template"},items:[{type:"link",text:m.home.text,href:m.home.href},{type:"link",text:m.components.text,href:m.components.href},{type:"divider"},{type:"link",text:"Dummy Notifications",info:Object(x.jsx)(B.a,{color:"red",children:"2"})},{type:"divider"},{type:"link",text:"awsui-documentation",href:T,external:!0}]})};var R=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(x.jsx)(j.a,{className:n?"awsui-dark-mode":"awsui-light-mode",breadcrumbs:Object(x.jsxs)(d.a,{gridDefinition:[{colspan:6},{colspan:6}],children:[Object(x.jsx)(l.a,{children:Object(x.jsx)(f,{})}),Object(x.jsx)(l.a,{float:"right",margin:{top:"xxs"},children:Object(x.jsx)(u.a,{checked:n,onChange:function(e){var t=e.detail;return a(t.checked)},children:"Dark Mode"})})]}),navigation:Object(x.jsx)(I,{}),content:Object(x.jsxs)(h.c,{children:[Object(x.jsx)(h.a,{exact:!0,path:"/",children:Object(x.jsx)(A,{})}),Object(x.jsx)(h.a,{path:"/".concat(m.home.location),children:Object(x.jsx)(A,{})}),Object(x.jsx)(h.a,{path:"/".concat(m.components.location),children:Object(x.jsx)(k,{})}),Object(x.jsx)(h.a,{path:"*",children:Object(x.jsx)(y,{})})]}),tools:Object(x.jsx)(S,{})})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,132)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(o.a,{children:Object(x.jsx)(R,{})})}),document.getElementById("root")),z()}},[[130,1,2]]]);
//# sourceMappingURL=main.13a6e7c0.chunk.js.map