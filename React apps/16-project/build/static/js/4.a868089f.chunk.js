(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{44:function(e,t,c){e.exports={comments:"Comments_comments__FfULl"}},45:function(e,t,c){e.exports={form:"NewCommentForm_form__2tYu2",loading:"NewCommentForm_loading__3Fih_",control:"NewCommentForm_control__146bC",actions:"NewCommentForm_actions__13No2"}},46:function(e,t,c){e.exports={item:"CommentItem_item__3i6P8"}},47:function(e,t,c){e.exports={comments:"CommentsList_comments__3ts6m"}},48:function(e,t,c){e.exports={quote:"HighlightedQuote_quote__gi15A"}},53:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(2),o=c(8),a=c(37),m=c(44),r=c.n(m),j=c(35),i=c(36),d=c(15),u=c(45),l=c.n(u),b=c(1),x=function(e){var t=Object(n.useRef)(),c=Object(j.a)(i.a),s=c.sendRequest,o=c.status,a=c.error,m=e.onAddedComment;Object(n.useEffect)((function(){"completed"!==o||a||m()}),[o,a,m]);var r=function(c){c.preventDefault();var n=t.current.value;s({commentData:{text:n},quoteId:e.quoteId})};return Object(b.jsxs)("form",{className:l.a.form,onSubmit:r,children:["pending"===o&&Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(d.a,{})}),Object(b.jsxs)("div",{className:l.a.control,onSubmit:r,children:[Object(b.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(b.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(b.jsx)("div",{className:l.a.actions,children:Object(b.jsx)("button",{className:"btn",children:"Add Comment"})})]})},O=c(46),h=c.n(O),f=function(e){return Object(b.jsx)("li",{className:h.a.item,children:Object(b.jsx)("p",{children:e.text})})},p=c(47),_=c.n(p),N=function(e){return Object(b.jsx)("ul",{className:_.a.comments,children:e.comments.map((function(e){return Object(b.jsx)(f,{text:e.text},e.id)}))})},C=function(){var e=Object(n.useState)(!1),t=Object(a.a)(e,2),c=t[0],o=t[1],m=Object(s.j)().quoteId,u=Object(j.a)(i.c),l=u.sendRequest,O=u.status,h=u.data;Object(n.useEffect)((function(){l(m)}),[m,l]);var f,p=Object(n.useCallback)((function(){l(m)}),[l,m]);return"pending"===O&&(f=Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(d.a,{})})),"completed"===O&&(h||h.length>0)&&(f=Object(b.jsx)(N,{comments:h})),"completed"!==O||h&&0!==h.length||(f=Object(b.jsx)("p",{className:"centered",children:"No comments were added yet!"})),Object(b.jsxs)("section",{className:r.a.comments,children:[Object(b.jsx)("h2",{children:"User Comments"}),!c&&Object(b.jsx)("button",{className:"btn",onClick:function(){o(!0)},children:"Add a Comment"}),c&&Object(b.jsx)(x,{quoteId:m,onAddedComment:p}),f]})},g=c(48),v=c.n(g),q=function(e){return Object(b.jsxs)("figure",{className:v.a.quote,children:[Object(b.jsx)("p",{children:e.text}),Object(b.jsx)("figcaption",{children:e.author})]})};t.default=function(){var e=Object(s.k)(),t=Object(s.j)().quoteId,c=Object(j.a)(i.e,!0),a=c.sendRequest,m=c.status,r=c.data,u=c.error;return Object(n.useEffect)((function(){a(t)}),[a,t]),"pending"===m?Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(d.a,{})}):u?Object(b.jsx)("p",{className:"centered",children:u}):r.text?Object(b.jsxs)(n.Fragment,{children:[Object(b.jsx)(q,{text:r.text,author:r.author}),Object(b.jsx)(s.c,{path:e.path,exact:!0,children:Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(o.b,{className:"btn--flat",to:"".concat(e.url,"/comments"),children:"Load Coments"})})}),Object(b.jsx)(s.c,{path:"".concat(e.path,"/comments"),children:Object(b.jsx)(C,{})})]}):Object(b.jsx)("p",{children:"No quote found!"})}}}]);
//# sourceMappingURL=4.a868089f.chunk.js.map