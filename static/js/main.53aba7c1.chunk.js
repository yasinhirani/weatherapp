(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),s=c.n(n),r=c(5),i=c.n(r),j=(c(12),c(3)),l=c.n(j),u=c(6),o=c(4);c(14);var p=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)("Mumbai"),i=Object(o.a)(r,2),j=i[0],p=i[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var t,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.openweathermap.org/data/2.5/weather?q=".concat(j,"&units=metric&appid=074da6b6822590cafa8ebc99142b2fcb"),e.next=3,fetch(t);case 3:return c=e.sent,e.next=6,c.json();case 6:a=e.sent,s(a.main);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[j]),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"box",children:[Object(a.jsx)("div",{className:"inputdata",children:Object(a.jsx)("input",{type:"search",placeholder:"enter city name",value:j,className:"inputfield",onChange:function(e){p(e.target.value)}})}),c?Object(a.jsxs)("div",{className:"info",children:[Object(a.jsxs)("h2",{className:"location",children:[Object(a.jsx)("i",{className:"fa fa-street-view","aria-hidden":"true"}),j]}),Object(a.jsxs)("h1",{className:"temp",children:[c.temp,Object(a.jsx)("sup",{children:"o"}),"Cel"]}),Object(a.jsxs)("h3",{className:"minmax",children:["Min:",c.temp_min,Object(a.jsx)("sup",{children:"o"}),"cel | Max:",c.temp_max,Object(a.jsx)("sup",{children:"o"}),"cel"]})]}):Object(a.jsx)("p",{className:"errormsg",children:"No city found"})]})})})};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.53aba7c1.chunk.js.map