(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[6],{41:function(e,t,c){e.exports={card:"Card_card__1F6AX"}},42:function(e,t,c){e.exports={form:"QuoteForm_form__3q86a",loading:"QuoteForm_loading__18fJL",control:"QuoteForm_control__3I_H5",actions:"QuoteForm_actions__O18-p"}},55:function(e,t,c){"use strict";c.r(t);var n=c(0),o=c(2),r=c(37),a=c(12),s=c(41),u=c.n(s),i=c(1),l=function(e){return Object(i.jsx)("div",{className:u.a.card,children:e.children})},d=c(15),j=c(42),b=c.n(j),f=function(e){var t=Object(n.useState)(!1),c=Object(r.a)(t,2),s=c[0],u=c[1],j=Object(n.useRef)(),f=Object(n.useRef)();return Object(i.jsxs)(a.Fragment,{children:[Object(i.jsx)(o.a,{when:s,message:function(e){return"Are you sure you want to leave? All your entered data will be lost!"}}),Object(i.jsx)(l,{children:Object(i.jsxs)("form",{onFocus:function(){u(!0)},className:b.a.form,onSubmit:function(t){t.preventDefault();var c=j.current.value,n=f.current.value;e.onAddQuote({author:c,text:n})},children:[e.isLoading&&Object(i.jsx)("div",{className:b.a.loading,children:Object(i.jsx)(d.a,{})}),Object(i.jsxs)("div",{className:b.a.control,children:[Object(i.jsx)("label",{htmlFor:"author",children:"Author"}),Object(i.jsx)("input",{type:"text",id:"author",ref:j})]}),Object(i.jsxs)("div",{className:b.a.control,children:[Object(i.jsx)("label",{htmlFor:"text",children:"Text"}),Object(i.jsx)("textarea",{id:"text",rows:"5",ref:f})]}),Object(i.jsx)("div",{className:b.a.actions,children:Object(i.jsx)("button",{onClick:function(){u(!1)},className:"btn",children:"Add Quote"})})]})})]})},h=c(35),x=c(36);t.default=function(){var e=Object(h.a)(x.b),t=e.sendRequest,c=e.status,r=Object(o.h)();Object(n.useEffect)((function(){"completed"===c&&r.push("/quotes")}),[c,r]);return Object(i.jsx)(f,{isLoading:"pending"===c,onAddQuote:function(e){t(e)}})}}}]);
//# sourceMappingURL=6.b663d659.chunk.js.map