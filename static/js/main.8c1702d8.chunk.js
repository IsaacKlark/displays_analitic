(this.webpackJsonpdisplays_analytic=this.webpackJsonpdisplays_analytic||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a(1),i=a.n(s),c=a(7),n=a.n(c),p=(a(14),a(8)),l=a(5),u=(a(15),a(26)),o=a(4),m=a.p+"static/media/operation_room.aca16f00.jpg",b=a.p+"static/media/pressure.5e7f9c5c.png",h=[{temperature:18,pressure:760,humidity:50},{temperature:25,pressure:780,humidity:60},{temperature:23,pressure:730,humidity:55},{temperature:19,pressure:800,humidity:57},{temperature:17,pressure:700,humidity:58},{temperature:25,pressure:750,humidity:50},{temperature:18,pressure:759,humidity:60},{temperature:19,pressure:769,humidity:52},{temperature:20,pressure:760,humidity:54},{temperature:17,pressure:720,humidity:55}];var d=function(){for(var e=Object(s.useState)(h),t=Object(l.a)(e,2),a=t[0],i=t[1],c=Object(s.useState)(!1),n=Object(l.a)(c,2),d=n[0],j=n[1],g=Object(s.useState)(!0),N=Object(l.a)(g,2),A=N[0],C=N[1],O=a.map((function(e){return e.temperature})),x=a.map((function(e){return e.pressure})),y=a.map((function(e){return e.humidity})),z=function(e,t){var a=e-.5+Math.random()*(t-e+1);return Math.round(a)},M=1;M<99999;M++)window.clearInterval(M);var T=Object(u.a)(100);d?T.subscribe((function(){var e=Object(p.a)(a);e.shift(),e.push({temperature:z(15,30),pressure:z(700,800),humidity:z(50,60)}),i(e)})):setTimeout((function(){C(!0)}),1e3);var v={labels:["","","","","","","","","",""],datasets:[{label:"temperature, C",data:O,fill:!1,borderColor:"red"}]},I={labels:["","","","","","","","","",""],datasets:[{label:"temperature, C",data:x,fill:!1,borderColor:"gray"}]},E={labels:["","","","","","","","","",""],datasets:[{label:"temperature, C",data:y,fill:!1,borderColor:"blue"}]},W={maintainAspectRatio:!1,legend:{display:!1},animation:{duration:0}};return Object(r.jsxs)("section",{className:"mainWrapper",children:[Object(r.jsx)("h1",{className:"head",children:"medical operating room live analytics dashboard"}),Object(r.jsxs)("div",{className:"pannel",children:[Object(r.jsxs)("div",{className:"imageAndButtonWrapper",children:[Object(r.jsx)("img",{src:m,alt:"medical operating room view",className:"operationRoom"}),Object(r.jsx)("button",{type:"button",className:"monitoringButton",onClick:function(){C(!1),j(!d)},children:d?"stop monitoring":"start monitoring"})]}),Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"dataWrapper dataWrapperTemperature",children:[Object(r.jsx)("img",{src:"data:image/png;base64,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",alt:"temperature",className:"panelContentImage"}),Object(r.jsxs)("p",{className:"temperature",children:["Temperature, ",Object(r.jsx)("sup",{children:"o"}),"C"]}),A?Object(r.jsx)("p",{className:"temperature",children:"N/A"}):Object(r.jsx)(o.Chart,{type:"line",data:v,options:W,width:"600",height:"200"})]}),Object(r.jsxs)("div",{className:"dataWrapper dataWrapperPressure",children:[Object(r.jsx)("img",{src:b,alt:"pressure",className:"panelContentImage"}),Object(r.jsx)("p",{className:"pressure",children:"Pressure, mm"}),A?Object(r.jsx)("p",{className:"pressure",children:"N/A"}):Object(r.jsx)(o.Chart,{type:"line",data:I,options:W,width:"600",height:"200"})]}),Object(r.jsxs)("div",{className:"dataWrapper dataWrapperHumidity",children:[Object(r.jsx)("img",{src:"data:image/png;base64,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",alt:"humidity",className:"panelContentImage"}),Object(r.jsx)("p",{className:"humidity",children:"Hymidity, %"}),A?Object(r.jsx)("p",{className:"humidity",children:"N/A"}):Object(r.jsx)(o.Chart,{type:"line",data:E,options:W,width:"600",height:"200"})]})]})]})]})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,27)).then((function(t){var a=t.getCLS,r=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),r(e),s(e),i(e),c(e)}))};n.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(d,{})}),document.getElementById("root")),j()}},[[24,1,2]]]);
//# sourceMappingURL=main.8c1702d8.chunk.js.map