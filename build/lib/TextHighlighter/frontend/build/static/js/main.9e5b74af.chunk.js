(this.webpackJsonptext_highlighter=this.webpackJsonptext_highlighter||[]).push([[0],{36:function(e,t,n){e.exports=n(45)},45:function(e,t,n){"use strict";n.r(t);var r=n(5),a=n.n(r),o=n(15),l=n.n(o),c=n(6),s=n(12),u=n(0),i=n(3),b=n(1),h=n(2),p=n(29),k=n(61),f=n(62),d=n(27),g=Object(d.a)({root:{backgroundColor:function(e){return e.color},"&.Mui-selected":{color:"black",fontWeight:"bold",backgroundColor:function(e){return e.color}}}})(k.a),m=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this;if("$break$"!=this.props.token){var t={backgroundColor:this.props.color};return a.a.createElement("span",{onClick:function(){return e.props.onClick()},style:t},this.props.token," ")}return a.a.createElement("br",null)}}]),n}(a.a.Component),v=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).render=function(){var e=r.state.tokens.map((function(e,t){var n=r.state.labels[t];return a.a.createElement(m,{color:r.props.args.colors[n],token:e,label:n,key:t.toString(),onClick:function(){return r.handleChange(t)}})})),t=Object(c.a)(Object.keys(r.props.args.colors));return a.a.createElement("div",{style:r.props.theme},a.a.createElement("div",null,a.a.createElement(f.a,{"aria-label":"label-classes",value:r.state.current,onChange:r.setCurrent,exclusive:!0,size:"small"},t.map((function(e,t){var n=r.props.args.colors[e];return a.a.createElement(g,{value:e,"aria-label":e,key:e,color:n},r.props.args.display_names[e])})).concat([a.a.createElement(g,{value:"None","aria-label":"None",color:"white"},"None")]))),a.a.createElement("div",null,e))},r.state={tokens:e.args.tokens,labels:e.args.labels,current:"None"},r.handleChange=r.handleChange.bind(Object(s.a)(r)),r.setCurrent=r.setCurrent.bind(Object(s.a)(r)),r}return Object(i.a)(n,[{key:"setCurrent",value:function(e,t){t&&this.setState((function(e){return{current:t,tokens:e.tokens,labels:e.labels}}))}},{key:"handleChange",value:function(e){var t=this;"None"!=this.state.current&&this.setState((function(t,n){var r=t.labels.map((function(n,r){return r==e?t.current:n}));return{tokens:t.tokens,labels:r,current:t.current}}),(function(){return p.a.setComponentValue({labels:t.state.labels})}))}}]),n}(p.b),C=Object(p.c)(v);l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(C,null)),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.9e5b74af.chunk.js.map