(this["webpackJsonpgoit-react-hw-02"]=this["webpackJsonpgoit-react-hw-02"]||[]).push([[0],{1:function(e,t,c){e.exports={container:"Counter_container__1tonG",button:"Counter_button__eGVxK",score:"Counter_score__2D7gq"}},14:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),s=c(4),r=c.n(s),i=(c(14),c(1)),o=c.n(i),j=c(0);var l=function(e){var t=e.children;return Object(j.jsxs)("div",{className:o.a.container,children:[Object(j.jsx)("h1",{className:o.a.title,children:"Please leave feedback"}),t]})},u=c(5),b=c(6),d=c(7),h=c(9),O=c(8);var x=function(e){var t=e.options,c=e.onBtnClick;return Object(j.jsx)("div",{children:t.map((function(e){return Object(j.jsx)("button",{className:o.a.button,type:"button",onClick:function(){return c(e)},children:e},e)}))})};var p=function(){return Object(j.jsx)("p",{className:o.a.notification,children:"No feedback given"})},m=function(e){Object(h.a)(c,e);var t=Object(O.a)(c);function c(){var e;Object(b.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.onOptionBtnClick=function(t){e.setState((function(e){return Object(u.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}))},e.countPositiveFeedbackPercentage=function(){return(e.state.good/e.countTotalFeedback()*100).toFixed()},e}return Object(d.a)(c,[{key:"render",value:function(){var e=Object.keys(this.state);return Object(j.jsxs)("div",{children:[Object(j.jsx)(x,{options:e,onBtnClick:this.onOptionBtnClick}),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("h2",{className:o.a.statisticTitle,children:"Statistic"})}),0===this.countTotalFeedback()&&Object(j.jsx)(p,{}),0!==this.countTotalFeedback()&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:o.a.score,children:"Good:"}),Object(j.jsx)("span",{className:o.a.amount,children:this.state.good})]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:o.a.score,children:"Neutral:"}),Object(j.jsx)("span",{className:o.a.amount,children:this.state.neutral})]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:o.a.score,children:"Bad:"}),Object(j.jsx)("span",{className:o.a.amount,children:this.state.bad})]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:o.a.score,children:"Total:"}),Object(j.jsx)("span",{className:o.a.amount,children:this.countTotalFeedback()})]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:o.a.score,children:"Positiv feedback:"}),Object(j.jsxs)("span",{className:o.a.amount,children:[this.countPositiveFeedbackPercentage(),"%"]})]})]})]})}}]),c}(n.Component),f=m;function v(){return Object(j.jsx)("div",{children:Object(j.jsx)(l,{children:Object(j.jsx)(f,{})})})}c(16);r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.querySelector("#root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.5d330d00.chunk.js.map