(this["webpackJsonpphonebooks-redux-toolkit"]=this["webpackJsonpphonebooks-redux-toolkit"]||[]).push([[0],{67:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"fetchContacts",(function(){return y})),n.d(r,"addContact",(function(){return C})),n.d(r,"deleteContact",(function(){return A}));var c={};n.r(c),n.d(c,"getItems",(function(){return te}));var a=n(0),o=n.n(a),i=n(3),u=n(19),b=n(6),s=n(10),d=n(2),j=n(5),l=n(9),f=n.n(l),p=n(20),O=n(13),x=n.n(O);x.a.defaults.baseURL="https://62051128161670001741b54b.mockapi.io/api/v1";var m,h,g,v,k,w,y=Object(b.c)("items/fetchContacts",Object(p.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/contacts");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))),C=Object(b.c)("items/addContact",function(){var e=Object(p.a)(f.a.mark((function e(t){var n,r,c,a,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,r=t.number,c={name:n,number:r},e.next=4,x.a.post("/contacts",c);case 4:return a=e.sent,o=a.data,e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),A=Object(b.c)("items/deleteContact",function(){var e=Object(p.a)(f.a.mark((function e(t){var n,r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,e.next=3,x.a.delete("/contacts/".concat(n));case 3:return r=e.sent,c=r.data,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),z=Object(b.b)("filter/changeFilter"),L=Object(b.d)([],(m={},Object(d.a)(m,y.fulfilled,(function(e,t){return t.payload})),Object(d.a)(m,C.fulfilled,(function(e,t){var n=t.payload;return[].concat(Object(u.a)(e),[n])})),Object(d.a)(m,A.fulfilled,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n.id}))})),m)),F=Object(b.d)("",Object(d.a)({},z,(function(e,t){return t.payload}))),N=Object(b.d)(!1,(h={},Object(d.a)(h,y.pending,(function(){return!0})),Object(d.a)(h,C.pending,(function(){return!0})),Object(d.a)(h,A.pending,(function(){return!0})),Object(d.a)(h,y.fulfilled,(function(){return!1})),Object(d.a)(h,C.fulfilled,(function(){return!1})),Object(d.a)(h,A.fulfilled,(function(){return!1})),Object(d.a)(h,y.rejected,(function(){return!1})),Object(d.a)(h,C.rejected,(function(){return!1})),Object(d.a)(h,A.rejected,(function(){return!1})),h)),S=Object(b.d)(null,(g={},Object(d.a)(g,y.rejected,(function(e,t){var n=t.error;return alert(n.message)})),Object(d.a)(g,y.pending,(function(){return null})),Object(d.a)(g,C.rejected,(function(e,t){var n=t.error;return alert("Add contact error: ",n.message)})),Object(d.a)(g,C.pending,(function(){return null})),Object(d.a)(g,A.rejected,(function(e,t){var n=t.error;return alert("Delete contact error: ",n.message)})),Object(d.a)(g,A.pending,(function(){return null})),g)),D=Object(j.b)({items:L,filter:F,isLoading:N,error:S}),I=Object(b.a)({reducer:D,middleware:function(e){return Object(u.a)(e({serializableCheck:{ignoredActions:[s.a,s.f,s.b,s.c,s.d,s.e]}}))}}),J=n(16),Z=n.n(J),q=n(22),B=n(23),E=n(38),M=n(7),P=n(8),H=P.b.button(v||(v=Object(M.a)(["\n   {\n    padding: 5px 30px;\n    margin: 10px;\n    border: 1px solid #ccc;\n    border-radius: 10%;\n    box-shadow: 0px 4px 10px 2px rgba(black, 0.2);\n    font-weight: bold;\n    color: #00ff00;\n    cursor: pointer;\n  }\n"]))),R=P.b.input(k||(k=Object(M.a)(["\n   {\n    padding: 5px;\n    margin: 10px;\n    background-color: #efefef;\n    border-color: #cccccc;\n  }\n"]))),T=n(1);function U(){var e=Object(a.useState)(""),t=Object(q.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),o=Object(q.a)(c,2),u=o[0],b=o[1],s=Object(i.b)(),d=Object(i.c)((function(e){return e.items})),j=function(e){var t=e.target,n=t.name,c=t.value;switch(n){case"name":r(c);break;case"number":b(c);break;default:return}},l=function(e){if(d.some((function(t){return t.name.toLowerCase()===e.toLowerCase()})))return 1},f=function(){r(""),b("")};return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(B.a,{}),Object(T.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),l(n))return B.b.error("This Name is already exists !"),void f();s(C({id:Object(E.a)(5),name:n,number:u})),f()},children:[Object(T.jsxs)("label",{children:["Name:\xa0\xa0\xa0",Object(T.jsx)(R,{type:"text",name:"name",value:n,onChange:j,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),Object(T.jsx)("br",{}),Object(T.jsxs)("label",{children:["Number:",Object(T.jsx)(R,{type:"tel",name:"number",value:u,onChange:j,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),Object(T.jsx)("br",{}),Object(T.jsx)(H,{type:"submit",children:"Add contact"})]})]})}var Y,$=P.b.input(w||(w=Object(M.a)(["\n   {\n    padding: 5px;\n    margin: 10px;\n    background-color: #efefef;\n    border-color: #cccccc;\n  }\n"])));function G(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.filter}));return Object(T.jsxs)("label",{children:[Object(T.jsx)("i",{children:"Find contacts by name"}),Object(T.jsx)($,{type:"text",value:t,onChange:function(t){e(z(t.target.value))}})]})}var K,Q,V=P.b.button(Y||(Y=Object(M.a)(["\n   {\n    padding: 5px 20px;\n    margin: 10px;\n    border: 1px solid #ccc;\n    border-radius: 10%;\n    box-shadow: 0px 4px 10px 2px rgba(black, 0.2);\n    color: #ff0000;\n    border-color: #cccccc;\n    cursor: pointer;\n  }\n"]))),W=function(e,t){if(""===t.trim())return e;var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))},X=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.filter})),n=Object(i.c)((function(e){return e.items}));return Object(T.jsx)("ul",{children:W(n,t).map((function(t){var n=t.id,r=t.name,c=t.number;return Object(T.jsxs)("li",{children:[r,": ",c,Object(T.jsx)(V,{type:"button",name:"delete",onClick:function(){return e(A({id:n}))},children:"Delete"})]},n)}))})},_=Object(P.a)(K||(K=Object(M.a)(["\n*{\n  padding: 0px;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 20px;\n}\n\nh1, h2{ \nmargin: 10px;\n}\n"]))),ee=P.b.div(Q||(Q=Object(M.a)(["\n   {\n    width: 100%;\n  }\n"]))),te=function(e){return e.items};function ne(){var e=Object(i.b)(),t=Object(i.c)(c.getItems);return Object(a.useEffect)((function(){e(r.fetchContacts())}),[e]),Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(_,{}),Object(T.jsxs)(ee,{children:[Object(T.jsx)("h1",{children:"Phonebook"}),Object(T.jsx)(U,{}),Object(T.jsx)("h2",{children:"Contacts"}),t.length>0&&Object(T.jsx)(G,{}),t.length>0?Object(T.jsx)(X,{}):Object(T.jsx)("p",{children:"Your phonebook is empty"})]})]})}Z.a.render(Object(T.jsx)(o.a.StrictMode,{children:Object(T.jsx)(i.a,{store:I,children:Object(T.jsx)(ne,{})})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.523f55c0.chunk.js.map