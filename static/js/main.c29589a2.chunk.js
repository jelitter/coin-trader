(this["webpackJsonpcoin-trader"]=this["webpackJsonpcoin-trader"]||[]).push([[0],{176:function(e,t,i){},178:function(e,t,i){},180:function(e,t,i){},181:function(e,t,i){},319:function(e,t,i){},320:function(e,t,i){},321:function(e,t,i){"use strict";i.r(t);var c,n=i(1),r=i.n(n),s=i(60),a=i.n(s),l=i(16),o=(i(176),i(71)),d=i(27),u=i.n(d),j=i(164),b=i(107),v=i(163),h=i(330),O={cash:2e3,coins:0},m=function(e){return Math.random()*e*.03*(Math.random()>.5?1:-1)};i(145);!function(e){e[e.Buy=0]="Buy",e[e.Sell=1]="Sell"}(c||(c={}));i(178);var p=i(3),x=function(e){var t=e.bep,i=e.currentPrice,c=e.countUpDuration;return Object(p.jsxs)("div",{className:"BreakEvenPrice",title:"Break Even Price",children:[Object(p.jsx)("div",{children:"B.E.P."}),Object(p.jsx)("div",{className:"bep",children:t?Object(p.jsx)(u.a,{preserveValue:!0,end:t,decimals:2,duration:c,useEasing:!0,prefix:"$"}):Object(p.jsx)(p.Fragment,{children:"\u2014"})}),t&&Object(p.jsx)("div",{className:"single-pl ".concat(i-t>=0?"pos":"neg"),children:t>0?Object(p.jsx)(u.a,{decimals:2,duration:c,end:i-t,prefix:"$",preserveValue:!0,useEasing:!0}):(0).toFixed(2)})]})},f=(i(180),function(e){var t=e.currentPrice,i=e.PL,c=e.realizedPL;return Object(p.jsx)("div",{className:"HeaderDetail",children:Object(p.jsx)("table",{children:Object(p.jsxs)("tbody",{children:[Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Coin Current Price"}),Object(p.jsx)("td",{className:"current",children:Object(p.jsx)(u.a,{preserveValue:!0,end:t,decimals:2,duration:.5,useEasing:!0,prefix:"$"})})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Profit/Loss"}),Object(p.jsx)("td",{className:"pl ".concat(i>=0?"pos":"neg"),children:Object(p.jsx)(u.a,{preserveValue:!0,end:i,decimals:2,duration:.5,useEasing:!0,prefix:"$"})})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Realized Profit/Loss"}),Object(p.jsx)("td",{className:"realized ".concat(c>=0?"pos":"neg"),children:Object(p.jsx)(u.a,{preserveValue:!0,end:c,decimals:2,duration:.5,useEasing:!0,prefix:"$"})})]})]})})})}),g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c=0;if("number"===typeof e?c=e:(null===t&&(t=new Date),c=Math.ceil((t.getTime()-e.getTime())/1e3)),c<2)return"now";var n=Math.floor(c/86400),r=Math.floor(c%86400/3600),s=Math.floor(c%3600/60),a=Math.floor(c%60),l=n>0?n+(1===n?" day":" days"):null,o=r>0?r+(1===r?" hour":" hours"):null,d=s>0?s+(1===s?" min":" mins"):null,u=a>0?a+(a<=1?" sec":" secs"):null,j=[l,o,d,u].filter(Boolean);return"".concat(j[0]," ").concat(i).trim()},N=(i(181),function(e){var t=e.orders,i=e.name,c=Object(n.useState)(new Date),r=Object(l.a)(c,2),s=r[0],a=r[1];return Object(n.useEffect)((function(){var e=setInterval((function(){a(new Date)}),1e3);return function(){return clearInterval(e)}}),[]),Object(p.jsx)("div",{className:"OrderList",children:t.length>0?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"vignette ".concat(i)}),Object(p.jsx)("ul",{children:t.sort((function(e,t){return t.orderNumber-e.orderNumber})).map((function(e){return Object(p.jsxs)("li",{className:"fadeIn",children:[Object(p.jsx)("span",{className:"duration",children:g(e.date,s,"ago")})," \xa0 [Order #",e.orderNumber,"] \xa0 $",e.price.toFixed(2)]},e.id)}))})]}):Object(p.jsxs)("div",{className:"empty",children:["No ",i," yet"]})})}),y=i(323),S=i(324),w=i(328),E=i(161),M=i(162),P=i(72),k=i(68),D=i(153),A=i(166),B={id:null,timeStamp:"",price:Number.MAX_VALUE},F={id:null,timeStamp:"",price:-Number.MAX_VALUE},L=function(e){var t,i,c,n,r,s,a,l,o,d,u,j,b,v,h=e.prices,O=e.bep,m=h.find((function(e){return(null===e||void 0===e?void 0:e.price)===h.reduce((function(e,t){return(null===t||void 0===t?void 0:t.price)>e?null===t||void 0===t?void 0:t.price:e}),0)})),x=h.find((function(e){return(null===e||void 0===e?void 0:e.price)===h.reduce((function(e,t){return(null===t||void 0===t?void 0:t.price)<e?null===t||void 0===t?void 0:t.price:e}),Number.MAX_VALUE)}));(null===m||void 0===m?void 0:m.price)>(null===(t=F)||void 0===t?void 0:t.price)&&(F=m),(null===x||void 0===x?void 0:x.price)<(null===(i=B)||void 0===i?void 0:i.price)&&(B=x);var f=O>0?Math.max(null!==(c=null===(n=F)||void 0===n?void 0:n.price)&&void 0!==c?c:0,O):null!==(r=null===(s=F)||void 0===s?void 0:s.price)&&void 0!==r?r:0,g=O>0?Math.min(null!==(a=null===(l=B)||void 0===l?void 0:l.price)&&void 0!==a?a:0,O):null!==(o=null===(d=B)||void 0===d?void 0:d.price)&&void 0!==o?o:0,N=[F.id?null===(u=F)||void 0===u?void 0:u.price:null===m||void 0===m?void 0:m.price,B.id?null===(j=B)||void 0===j?void 0:j.price:null===x||void 0===x?void 0:x.price,O].filter((function(e){return e===+e})).sort((function(e,t){return e-t}));return Object(p.jsx)("div",{className:"chart-container",children:Object(p.jsx)(y.a,{width:"100%",height:"100%",children:Object(p.jsxs)(S.a,{width:500,height:300,data:h,margin:{top:20,right:5,left:0,bottom:10},children:[Object(p.jsx)(w.a,{strokeDasharray:"3 3"}),Object(p.jsx)(E.a,{dataKey:"timeStamp"}),Object(p.jsx)(M.a,{dataKey:"price",domain:[Math.floor(g-5),Math.ceil(f+5)]}),Object(p.jsx)(M.a,{dataKey:"price",domain:[Math.floor(g-5),Math.ceil(f+5)],tickCount:N.length,ticks:N,yAxisId:"right",orientation:"right"}),Object(p.jsx)(P.a,{}),Object(p.jsx)(k.a,{}),(null===h||void 0===h?void 0:h.length)>0&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(D.a,{y:null===(b=F)||void 0===b?void 0:b.price,stroke:"#ec5e33",strokeWidth:2,label:{position:"top",value:"Max",fill:"#ef967b",fontSize:"0.75rem"}}),Object(p.jsx)(D.a,{y:null===(v=B)||void 0===v?void 0:v.price,stroke:"#2A58FB",strokeWidth:2,label:{position:"bottom",value:"Min",fill:"#8197e5",fontSize:"0.75rem"}})]}),O>0&&Object(p.jsx)(D.a,{y:O,stroke:"#43a334",strokeWidth:2,label:{position:"top",value:"BEP",fill:"#63a958",fontSize:"0.9rem"}}),Object(p.jsx)(A.a,{dataKey:"price",dot:!1,isAnimationActive:!1,stroke:"#8884d8",strokeWidth:2,unit:"$"})]})})})},I=(i(319),.5),V=function(e){var t=e.orders,i=e.initialPrices,r=e.setOrders,s=e.wallet,a=e.setWallet,d=Object(n.useState)(i),O=Object(l.a)(d,2),g=O[0],y=O[1],S=Object(n.useState)(g[g.length-1].price),w=Object(l.a)(S,2),E=w[0],M=w[1],P=Object(n.useState)(s.coins>0?s.coins*E:null),k=Object(l.a)(P,2),D=k[0],A=k[1],B=Object(n.useState)(new Date),F=Object(l.a)(B,2),V=F[0],C=F[1],$=Object(n.useState)(0),z=Object(l.a)($,2),T=z[0],W=z[1],U=Object(n.useState)(0),K=Object(l.a)(U,2),J=K[0],X=K[1],_=JSON.stringify(g);Object(n.useEffect)((function(){var e=setInterval((function(){var e=+(E+m(E)).toFixed(2);M(e),g.length>240&&g.shift(),y([].concat(Object(o.a)(g),[{id:Object(h.a)(),timeStamp:(new Date).toISOString().substring(11,19),price:e}])),W(s.coins*e-s.coins*D)}),2e3);return function(){return clearInterval(e)}}),[D,E,g,_,s.coins]);return Object(p.jsxs)("div",{className:"orders",children:[Object(p.jsxs)("div",{className:"logo",children:[Object(p.jsx)(v.a,{style:{height:"6rem",width:"50%",marginLeft:"-70px"}}),Object(p.jsx)(f,{currentPrice:E,PL:T,realizedPL:J})]}),Object(p.jsxs)("div",{className:"header",children:[Object(p.jsxs)("div",{className:"title",children:[Object(p.jsx)(b.a,{style:{height:"2rem",color:"#2A58FB",verticalAlign:"middle"}}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"subtitle",children:"Wallet"}),Object(p.jsx)(u.a,{decimals:2,duration:I,end:s.coins*E+s.cash,prefix:"$",preserveValue:!0,useEasing:!0})]})]}),Object(p.jsxs)("div",{className:"coins",title:"Coins",children:[Object(p.jsx)(j.a,{style:{height:"2rem",color:"gold",verticalAlign:"middle"}}),Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"subtitle",children:[s.coins," coins"]}),Object(p.jsx)(u.a,{decimals:2,duration:I,end:s.coins*E,prefix:"$",preserveValue:!0,useEasing:!0})]})]}),Object(p.jsxs)("div",{className:"cash",title:"Cash",children:[Object(p.jsx)(b.b,{style:{height:"2rem",color:"#43a334",verticalAlign:"middle"}}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"subtitle",children:"Cash"}),Object(p.jsx)(u.a,{decimals:2,duration:I,end:s.cash,prefix:"$",preserveValue:!0,useEasing:!0})]})]})]}),Object(p.jsxs)("div",{className:"actions",children:[Object(p.jsx)("button",{className:"buy",disabled:s.cash<=E,onClick:function(){return function(){var e,i,n=t[t.length-1],l={id:Object(h.a)(),date:new Date,orderNumber:(null!==(e=null===n||void 0===n?void 0:n.orderNumber)&&void 0!==e?e:0)+1,type:c.Buy,price:E};r([].concat(Object(o.a)(t),[l])),a({cash:s.cash-l.price,coins:s.coins+1});var d=[].concat(Object(o.a)(t),[l]).filter((function(e){return e.type===c.Buy&&e.date.getTime()>V.getTime()})).map((function(e){return e.price})),u=null!==(i=d.reduce((function(e,t){return e+t}),0)/d.length)&&void 0!==i?i:0;A(+u.toFixed(2))}()},children:"Buy"}),Object(p.jsx)("button",{className:"sell",disabled:s.coins<=0,onClick:function(){return function(){var e,i=t[t.length-1],n={id:Object(h.a)(),date:new Date,orderNumber:(null!==(e=null===i||void 0===i?void 0:i.orderNumber)&&void 0!==e?e:0)+1,type:c.Sell,price:E};r([].concat(Object(o.a)(t),[n])),a({cash:s.cash+n.price,coins:s.coins-1}),X(J+(n.price-D)),1===s.coins&&(A(null),C(n.date))}()},children:"Sell"})]}),Object(p.jsx)(L,{prices:g,bep:D}),Object(p.jsx)("div",{className:"sales",children:Object(p.jsx)(N,{orders:t.filter((function(e){return e.type===c.Sell})),name:"sales"})}),Object(p.jsxs)("div",{className:"purchases",children:[Object(p.jsx)(x,{bep:D,currentPrice:E,countUpDuration:I}),Object(p.jsx)(N,{orders:t.filter((function(e){return e.type===c.Buy})),name:"purchases"})]})]})},C=function(){return Object(p.jsxs)("div",{className:"footer",children:["\xa9 ",(new Date).getFullYear()," Isaac Sanchez"]})},$=function(e){for(var t=[],i=new Date,c=new Date(i.getTime()-1e3*e),n=0;n<e;n++){var r=new Date(c.getTime()+1e3*n).toISOString().substring(11,19),s=0===n?100:t[n-1].price+m(t[n-1].price);t.push({id:Object(h.a)(),timeStamp:r,price:+s.toFixed(2)})}return t}(240),z=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),i=t[0],c=t[1],r=Object(n.useState)(O),s=Object(l.a)(r,2),a=s[0],o=s[1],d=Object(n.useRef)(null);return Object(n.useEffect)((function(){d.current.scrollIntoView()})),Object(p.jsxs)("div",{className:"App",ref:d,children:[Object(p.jsx)(V,{orders:i,initialPrices:$,setOrders:c,wallet:a,setWallet:o}),Object(p.jsx)(C,{})]})},T=(i(320),function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,331)).then((function(t){var i=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;i(e),c(e),n(e),r(e),s(e)}))});a.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(z,{})}),document.getElementById("root")),T()}},[[321,1,2]]]);
//# sourceMappingURL=main.c29589a2.chunk.js.map