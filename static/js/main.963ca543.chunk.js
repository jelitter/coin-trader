(this["webpackJsonpcoin-trader"]=this["webpackJsonpcoin-trader"]||[]).push([[0],{176:function(e,t,i){},178:function(e,t,i){},180:function(e,t,i){},181:function(e,t,i){},319:function(e,t,i){},320:function(e,t,i){},321:function(e,t,i){"use strict";i.r(t);var n,c=i(1),r=i.n(c),s=i(60),a=i.n(s),l=i(16),o=(i(176),i(71)),d=i(27),u=i.n(d),j=i(164),b=i(107),v=i(163),h=i(330),O={cash:2e3,coins:0},p=function(e){return Math.random()*e*.03*(Math.random()>.5?1:-1)};i(145);!function(e){e[e.Buy=0]="Buy",e[e.Sell=1]="Sell"}(n||(n={}));i(178);var m=i(3),f=function(e){var t=e.bep,i=e.currentPrice,n=e.countUpDuration;return Object(m.jsxs)("div",{className:"BreakEvenPrice",title:"Break Even Price",children:[Object(m.jsx)("div",{children:"B.E.P."}),Object(m.jsx)("div",{className:"bep",children:t?Object(m.jsx)(u.a,{preserveValue:!0,end:t,decimals:2,duration:n,useEasing:!0,prefix:"$"}):Object(m.jsx)(m.Fragment,{children:"\u2014"})}),t&&Object(m.jsx)("div",{className:"single-pl ".concat(i-t>=0?"pos":"neg"),children:t>0?Object(m.jsx)(u.a,{decimals:2,duration:n,end:i-t,prefix:"$",preserveValue:!0,useEasing:!0}):(0).toFixed(2)})]})},x=(i(180),function(e){var t=e.currentPrice,i=e.PL,n=e.realizedPL;return Object(m.jsx)("div",{className:"HeaderDetail",children:Object(m.jsx)("table",{children:Object(m.jsxs)("tbody",{children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Coin Current Price"}),Object(m.jsx)("td",{className:"current",children:Object(m.jsx)(u.a,{preserveValue:!0,end:t,decimals:2,duration:.5,useEasing:!0,prefix:"$"})})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Profit/Loss"}),Object(m.jsx)("td",{className:"pl ".concat(i>=0?"pos":"neg"),children:Object(m.jsx)(u.a,{preserveValue:!0,end:i,decimals:2,duration:.5,useEasing:!0,prefix:"$"})})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Realized Profit/Loss"}),Object(m.jsx)("td",{className:"realized ".concat(n>=0?"pos":"neg"),children:Object(m.jsx)(u.a,{preserveValue:!0,end:n,decimals:2,duration:.5,useEasing:!0,prefix:"$"})})]})]})})})}),g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=0;if("number"===typeof e?n=e:(null===t&&(t=new Date),n=Math.ceil((t.getTime()-e.getTime())/1e3)),n<2)return"now";var c=Math.floor(n/86400),r=Math.floor(n%86400/3600),s=Math.floor(n%3600/60),a=Math.floor(n%60),l=c>0?c+(1===c?" day":" days"):null,o=r>0?r+(1===r?" hour":" hours"):null,d=s>0?s+(1===s?" min":" mins"):null,u=a>0?a+(a<=1?" sec":" secs"):null,j=[l,o,d,u].filter(Boolean);return"".concat(j[0]," ").concat(i).trim()},y=(i(181),function(e){var t=e.orders,i=e.name,n=Object(c.useState)(new Date),r=Object(l.a)(n,2),s=r[0],a=r[1];return Object(c.useEffect)((function(){var e=setInterval((function(){a(new Date)}),1e3);return function(){return clearInterval(e)}}),[]),Object(m.jsx)("div",{className:"OrderList",children:t.length>0?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"vignette ".concat(i)}),Object(m.jsx)("ul",{children:t.sort((function(e,t){return t.orderNumber-e.orderNumber})).map((function(e){return Object(m.jsxs)("li",{className:"fadeIn",children:[Object(m.jsx)("span",{className:"duration",children:g(e.date,s,"ago")})," \xa0 [Order #",e.orderNumber,"] \xa0 $",e.price.toFixed(2)]},e.id)}))})]}):Object(m.jsxs)("div",{className:"empty",children:["No ",i," yet"]})})}),N=i(323),S=i(324),w=i(328),E=i(161),M=i(162),P=i(72),A=i(68),k=i(153),D=i(166),B={id:null,timeStamp:"",price:Number.MAX_VALUE},F={id:null,timeStamp:"",price:-Number.MAX_VALUE},L=function(e){var t,i,n,c,r,s,a,l,o,d,u,j,b,v,h=e.prices,O=e.bep,p=h.find((function(e){return(null===e||void 0===e?void 0:e.price)===h.reduce((function(e,t){return(null===t||void 0===t?void 0:t.price)>e?null===t||void 0===t?void 0:t.price:e}),0)})),f=h.find((function(e){return(null===e||void 0===e?void 0:e.price)===h.reduce((function(e,t){return(null===t||void 0===t?void 0:t.price)<e?null===t||void 0===t?void 0:t.price:e}),Number.MAX_VALUE)}));(null===p||void 0===p?void 0:p.price)>(null===(t=F)||void 0===t?void 0:t.price)&&(F=p),(null===f||void 0===f?void 0:f.price)<(null===(i=B)||void 0===i?void 0:i.price)&&(B=f);var x=O>0?Math.max(null!==(n=null===(c=F)||void 0===c?void 0:c.price)&&void 0!==n?n:0,O):null!==(r=null===(s=F)||void 0===s?void 0:s.price)&&void 0!==r?r:0,g=O>0?Math.min(null!==(a=null===(l=B)||void 0===l?void 0:l.price)&&void 0!==a?a:0,O):null!==(o=null===(d=B)||void 0===d?void 0:d.price)&&void 0!==o?o:0,y=[F.id?null===(u=F)||void 0===u?void 0:u.price:null===p||void 0===p?void 0:p.price,B.id?null===(j=B)||void 0===j?void 0:j.price:null===f||void 0===f?void 0:f.price,O].filter((function(e){return e===+e})).sort((function(e,t){return e-t}));return Object(m.jsx)("div",{className:"chart-container",children:Object(m.jsx)(N.a,{width:"100%",height:"100%",children:Object(m.jsxs)(S.a,{width:500,height:300,data:h,margin:{top:20,right:5,left:0,bottom:10},children:[Object(m.jsx)(w.a,{strokeDasharray:"3 3"}),Object(m.jsx)(E.a,{dataKey:"timeStamp"}),Object(m.jsx)(M.a,{dataKey:"price",domain:[Math.floor(g-5),Math.ceil(x+5)]}),Object(m.jsx)(M.a,{dataKey:"price",domain:[Math.floor(g-5),Math.ceil(x+5)],tickCount:y.length,ticks:y,yAxisId:"right",orientation:"right"}),Object(m.jsx)(P.a,{}),Object(m.jsx)(A.a,{}),(null===h||void 0===h?void 0:h.length)>0&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(k.a,{y:null===(b=F)||void 0===b?void 0:b.price,stroke:"#ec5e33",strokeWidth:2,label:{position:"top",value:"Max",fill:"#ef967b",fontSize:"0.75rem"}}),Object(m.jsx)(k.a,{y:null===(v=B)||void 0===v?void 0:v.price,stroke:"#2A58FB",strokeWidth:2,label:{position:"bottom",value:"Min",fill:"#8197e5",fontSize:"0.75rem"}})]}),O>0&&Object(m.jsx)(k.a,{y:O,stroke:"#43a334",strokeWidth:2,label:{position:"top",value:"BEP",fill:"#63a958",fontSize:"0.9rem"}}),Object(m.jsx)(D.a,{dataKey:"price",dot:!1,isAnimationActive:!1,stroke:"#8884d8",strokeWidth:2,unit:"$"})]})})})},I=(i(319),.5),V=function(e){var t=e.orders,i=e.initialPrices,r=e.setOrders,s=e.wallet,a=e.setWallet,d=Object(c.useState)(i),O=Object(l.a)(d,2),g=O[0],N=O[1],S=Object(c.useState)(g[g.length-1].price),w=Object(l.a)(S,2),E=w[0],M=w[1],P=Object(c.useState)(s.coins>0?s.coins*E:null),A=Object(l.a)(P,2),k=A[0],D=A[1],B=Object(c.useState)(new Date),F=Object(l.a)(B,2),V=F[0],z=F[1],C=Object(c.useState)(0),$=Object(l.a)(C,2),T=$[0],W=$[1],U=Object(c.useState)(0),K=Object(l.a)(U,2),J=K[0],X=K[1],_=JSON.stringify(g);Object(c.useEffect)((function(){var e=setInterval((function(){var e=+(E+p(E)).toFixed(2);M(e),g.length>240&&g.shift(),N([].concat(Object(o.a)(g),[{id:Object(h.a)(),timeStamp:(new Date).toISOString().substring(11,19),price:e}])),W(s.coins*e-s.coins*k)}),2e3);return function(){return clearInterval(e)}}),[k,E,g,_,s.coins]);return Object(m.jsxs)("div",{className:"orders",children:[Object(m.jsxs)("div",{className:"logo",children:[Object(m.jsx)(v.a,{style:{height:"6rem",width:"50%",marginLeft:"-70px"}}),Object(m.jsx)(x,{currentPrice:E,PL:T,realizedPL:J})]}),Object(m.jsxs)("div",{className:"header",children:[Object(m.jsxs)("div",{className:"title",children:[Object(m.jsx)(b.a,{style:{height:"2rem",color:"#2A58FB",verticalAlign:"middle"}}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{style:{fontSize:"0.75rem",textAlign:"left",opacity:"0.75"},children:"Wallet"}),Object(m.jsx)(u.a,{decimals:2,duration:I,end:s.coins*E+s.cash,prefix:"$",preserveValue:!0,useEasing:!0})]})]}),Object(m.jsxs)("div",{className:"coins",title:"Coins",children:[Object(m.jsx)(j.a,{style:{height:"2rem",color:"gold",verticalAlign:"middle"}}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{style:{fontSize:"0.75rem",textAlign:"left",opacity:"0.75"},children:[s.coins," coins"]}),Object(m.jsx)(u.a,{decimals:2,duration:I,end:s.coins*E,prefix:"$",preserveValue:!0,useEasing:!0})]})]}),Object(m.jsxs)("div",{className:"cash",title:"Cash",children:[Object(m.jsx)(b.b,{style:{height:"2rem",color:"#43a334",verticalAlign:"middle"}}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{style:{fontSize:"0.75rem",textAlign:"left",opacity:"0.75"},children:"Cash"}),Object(m.jsx)(u.a,{decimals:2,duration:I,end:s.cash,prefix:"$",preserveValue:!0,useEasing:!0})]})]})]}),Object(m.jsxs)("div",{className:"actions",children:[Object(m.jsx)("button",{className:"buy",disabled:s.cash<=E,onClick:function(){return function(){var e,i,c=t[t.length-1],l={id:Object(h.a)(),date:new Date,orderNumber:(null!==(e=null===c||void 0===c?void 0:c.orderNumber)&&void 0!==e?e:0)+1,type:n.Buy,price:E};r([].concat(Object(o.a)(t),[l])),a({cash:s.cash-l.price,coins:s.coins+1});var d=[].concat(Object(o.a)(t),[l]).filter((function(e){return e.type===n.Buy&&e.date.getTime()>V.getTime()})).map((function(e){return e.price})),u=null!==(i=d.reduce((function(e,t){return e+t}),0)/d.length)&&void 0!==i?i:0;D(+u.toFixed(2))}()},children:"Buy"}),Object(m.jsx)("button",{className:"sell",disabled:s.coins<=0,onClick:function(){return function(){var e,i=t[t.length-1],c={id:Object(h.a)(),date:new Date,orderNumber:(null!==(e=null===i||void 0===i?void 0:i.orderNumber)&&void 0!==e?e:0)+1,type:n.Sell,price:E};r([].concat(Object(o.a)(t),[c])),a({cash:s.cash+c.price,coins:s.coins-1}),X(J+(c.price-k)),1===s.coins&&(D(null),z(c.date))}()},children:"Sell"})]}),Object(m.jsx)(L,{prices:g,bep:k}),Object(m.jsx)("div",{className:"sales",children:Object(m.jsx)(y,{orders:t.filter((function(e){return e.type===n.Sell})),name:"sales"})}),Object(m.jsxs)("div",{className:"purchases",children:[Object(m.jsx)(f,{bep:k,currentPrice:E,countUpDuration:I}),Object(m.jsx)(y,{orders:t.filter((function(e){return e.type===n.Buy})),name:"purchases"})]})]})},z=function(){return Object(m.jsxs)("div",{className:"footer",children:["\xa9 ",(new Date).getFullYear()," Isaac Sanchez"]})},C=function(e){for(var t=[],i=new Date,n=new Date(i.getTime()-1e3*e),c=0;c<e;c++){var r=new Date(n.getTime()+1e3*c).toISOString().substring(11,19),s=0===c?100:t[c-1].price+p(t[c-1].price);t.push({id:Object(h.a)(),timeStamp:r,price:+s.toFixed(2)})}return t}(240),$=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),i=t[0],n=t[1],r=Object(c.useState)(O),s=Object(l.a)(r,2),a=s[0],o=s[1],d=Object(c.useRef)(null);return Object(c.useEffect)((function(){d.current.scrollIntoView()})),Object(m.jsxs)("div",{className:"App",ref:d,children:[Object(m.jsx)(V,{orders:i,initialPrices:C,setOrders:n,wallet:a,setWallet:o}),Object(m.jsx)(z,{})]})},T=(i(320),function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,331)).then((function(t){var i=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;i(e),n(e),c(e),r(e),s(e)}))});a.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)($,{})}),document.getElementById("root")),T()}},[[321,1,2]]]);
//# sourceMappingURL=main.963ca543.chunk.js.map