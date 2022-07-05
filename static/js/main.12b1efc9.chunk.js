(this["webpackJsonptwilio-sms-web"]=this["webpackJsonptwilio-sms-web"]||[]).push([[0],{101:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(17),i=n.n(o),r=(n(46),n(47),n(48),n(49),n(50),n(14)),s=n(4),u=n(3),l=n(11),d=n(1),b="auth-token",j="api-key",h="",m=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:h;Object(l.a)(this,e),this.accountSid=t,this.authToken=n,this.apiKey=c,this.apiSecret=a,this.type=o},O=function(e){switch(e.type){case j:return{username:e.apiKey,password:e.apiSecret};case b:return{username:e.accountSid,password:e.authToken};default:return{username:"",password:""}}},f=function(e){return e instanceof Error&&"Network Error"===e.message?new Error("Incorrect credentials or unable to access your Twilio account"):e instanceof Error&&"Request failed with status code 401"===e.message?new Error("Incorrect credentials"):e},p=a.a.createContext({}),v=a.a.createContext((function(e){})),x=function(){return[Object(c.useContext)(p),Object(c.useContext)(v)]},g=function(e){var t=e.children,n=Object(c.useState)({}),a=Object(u.a)(n,2),o=a[0],i=a[1];return Object(d.jsx)(p.Provider,{value:o,children:Object(d.jsx)(v.Provider,{value:function(e){return i(e)},children:t})})},C=a.a.createContext({}),S=a.a.createContext((function(e){})),N=function(){return[Object(c.useContext)(C),Object(c.useContext)(S)]},y=function(e){var t=e.children,n=Object(c.useState)(""),a=Object(u.a)(n,2),o=a[0],i=a[1];return Object(d.jsx)(C.Provider,{value:o,children:Object(d.jsx)(S.Provider,{value:function(e){return i(e)},children:t})})},A=n(103),T=(n(52),function(e){var t=e.children,n=Object(s.f)();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"default-layout-container container grid-lg",children:Object(d.jsxs)("header",{className:"navbar bg-primary",style:{padding:".5em"},children:[Object(d.jsxs)("section",{className:"navbar-section",children:[Object(d.jsx)("span",{className:"btn btn-link text-light",onClick:function(){n.push("/authentication")},children:"Authentication"}),Object(d.jsx)("span",{className:"btn btn-link text-light",onClick:function(){n.push("/phone-numbers")},children:"Messages"})]}),Object(d.jsx)("section",{className:"navbar-center hide-xs",children:Object(d.jsx)("span",{className:"h5",children:"Twilio SMS Web"})}),Object(d.jsx)("section",{className:"navbar-section",children:Object(d.jsxs)("a",{className:"btn btn-link text-light",href:"https://github.com/rafasantos/twilio-sms-web",target:"_blank",rel:"noreferrer",children:["GitHub ",Object(d.jsx)(A.a,{})]})})]})}),Object(d.jsx)("div",{className:"default-layout-container container grid-lg text-left",style:{marginTop:"1em"},children:t})]})}),w=(n(61),function(e){var t=e.onChange,n=void 0===t?function(){}:t;return Object(d.jsxs)("div",{className:"text-center",children:[Object(d.jsx)("div",{className:"authentication-method-card-header",children:"Choose your Twilio authentication method:"}),Object(d.jsx)("button",{className:"authentication-method-card-method-btn btn btn-secondary",id:"AUTHENTICATION-METHOD-AUTH-TOKEN",onClick:function(e){return n(b)},children:"AuthToken"}),Object(d.jsxs)("div",{className:"authentication-method-card-divider",children:[Object(d.jsx)("hr",{}),"or",Object(d.jsx)("hr",{})]}),Object(d.jsx)("button",{className:"authentication-method-card-method-btn btn btn-primary",id:"AUTHENTICATION-METHOD-API-KEY",onClick:function(e){return n(j)},children:"Api Key"})]})}),k=function(){var e=Object(s.f)();return Object(d.jsxs)(T,{children:[Object(d.jsx)("h4",{children:"Authentication"}),Object(d.jsx)(w,{onChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;t===b?e.push("/authentication-token"):t===j&&e.push("/authentication-api-key")}})]})},E=(n(62),n(27)),I=n.n(E),P=n(39),K=n(15),D=n.n(K),R=function(){var e=x(),t=Object(u.a)(e,1)[0],n=O(t);return function(){var e=Object(P.a)(I.a.mark((function e(c){var a,o,i,r,s,u;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.phoneNumber,o="https://api.twilio.com/2010-04-01/Accounts/".concat(t.accountSid,"/Messages.json"),i=[],e.next=5,D.a.get(o,{auth:n,params:{From:a}});case 5:return r=e.sent,e.next=8,D.a.get(o,{auth:n,params:{To:a}});case 8:return s=e.sent,i=i.concat(r.data.messages).concat(s.data.messages),u=function(e,t){return Date.parse(e.date_created)>Date.parse(t.date_created)?-1:1},e.abrupt("return",i.sort(u));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},H=n(104),F=function(e){var t=e.className;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"".concat(t," text-center message-list-loading-container"),children:Object(d.jsx)(H.a,{className:"message-list-loading text-primary"})})})},M=n(105),q=n(106),L=(n(82),n(83),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"none";return"message-action-button btn btn-primary ".concat(e)}),U=function(e){var t=e.className,n=void 0===t?"":t,c=e.text,a=void 0===c?"":c,o=e.onClick,i=void 0===o?function(){}:o;return Object(d.jsx)("button",{className:n,onClick:i,children:a})},_=function(e){switch(e){case"outbound":return"Compose";case"inbound":return"Reply";default:return"none"}},B=function(e){var t=e.direction,n=void 0===t?"none":t,c=e.onClick,a=void 0===c?function(){}:c;return"none"===n?Object(d.jsx)(d.Fragment,{}):Object(d.jsx)(U,{className:L(n),text:_(n),onClick:a})},G=function(e){return e.includes("inbound")?"inbound":"outbound"},Y=function(e){return"message-card-label text-code text-small ".concat(G(e))},z=function(e){return"inbound"===G(e)?180:0},J={padding:"0",margin:"0"},V=function(e){var t=new Date(e);return"".concat(t.toDateString()," ").concat(t.toLocaleTimeString())},Q=function(e){var t=e.txt;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"tooltip message-card-copy-btn","data-tooltip":"Copy to clipboard",onClick:function(){return e=t,navigator.clipboard.writeText(e).then((function(){return console.log("Text copied",e)})).catch((function(){return console.log("Unable to copy to clipboard")}));var e},children:Object(d.jsx)(M.a,{twoToneColor:"#5755d9",style:J})})})},W=function(e){var t=e.messageSid,n=void 0===t?"":t,c=e.direction,a=void 0===c?"":c,o=e.from,i=void 0===o?"":o,r=e.to,s=void 0===r?"":r,l=e.date,b=void 0===l?new Date:l,j=e.status,h=void 0===j?"":j,m=e.body,O=void 0===m?"":m,f=e.onActionClick,p=void 0===f?function(){}:f,v=N(),x=Object(u.a)(v,2)[1],g=G(a);return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"message-card",children:[Object(d.jsx)("div",{className:Y(a),children:Object(d.jsx)(q.a,{rotate:z(a)})}),Object(d.jsxs)("div",{className:"message-card-main-container",children:[Object(d.jsxs)("div",{className:"message-card-header text-tiny",children:[Object(d.jsxs)("span",{children:[Object(d.jsx)(Q,{txt:i}),Object(d.jsx)("strong",{children:"From:"})," ",i]}),Object(d.jsxs)("span",{children:[Object(d.jsx)(Q,{txt:s}),Object(d.jsx)("strong",{children:"To:"})," ",s]}),Object(d.jsxs)("span",{className:"message-card-header-status",children:[Object(d.jsx)("strong",{children:"Status:"})," ",h]}),Object(d.jsxs)("span",{children:[Object(d.jsx)("strong",{children:"Direction:"})," ",a]})]}),Object(d.jsx)("div",{className:"message-card-body text-code text-small",children:O}),Object(d.jsxs)("div",{className:"message-card-footer text-tiny",children:[Object(d.jsx)("strong",{children:"Date: "}),V(b),Object(d.jsxs)("span",{children:[Object(d.jsx)("strong",{children:"MessageSid: "}),n]})]}),Object(d.jsx)("div",{className:"message-card-action-container",children:Object(d.jsx)(B,{direction:g,onClick:function(){return function(e,t,n,c,a){c("inbound"===e?t:n),a()}(g,i,s,x,p)}})})]})]})})},X=function(e){var t=e.phoneNumber,n=void 0===t?"":t,a=e.onActionClick,o=void 0===a?function(){}:a,i=e.onComplete,r=void 0===i?function(){}:i,s=e.onError,l=void 0===s?function(){}:s,b=Object(c.useState)(!0),j=Object(u.a)(b,2),h=j[0],m=j[1],O=Object(c.useState)([]),f=Object(u.a)(O,2),p=f[0],v=f[1],x=Object(c.useState)(!1),g=Object(u.a)(x,2),C=g[0],S=g[1],N=Object(c.useState)(null),y=Object(u.a)(N,2),A=y[0],T=y[1],w=Object(c.useCallback)((function(e){var t=e.map((function(e){return{messageSid:e.sid,direction:e.direction,from:e.from,to:e.to,date:e.date_created,status:e.status,body:e.body}}));v(t),m(!1)}),[v,m]),k=R({onSuccess:w,onComplete:r,onError:l});return Object(c.useEffect)((function(){S(!0)}),[S]),Object(c.useEffect)((function(){C&&(null===n||void 0===n?void 0:n.length)>0&&A!==n&&(k({phoneNumber:n}).then(w).catch(l).then(r),T(n),m(!0))}),[C,n,A,k,p,w,l,r,T,m]),h?Object(d.jsx)(F,{className:"h1 m-2"}):p.map((function(e){return Object(d.jsx)(W,{messageSid:e.messageSid,from:e.from,to:e.to,body:e.body,direction:e.direction,status:e.status,date:e.date,onActionClick:o},e.messageSid)}))},Z=(n(84),function(e){var t=e.onSuccess,n=void 0===t?function(){}:t,c=e.onError,a=void 0===c?function(){}:c,o=e.onComplete,i=void 0===o?function(){}:o,r=x(),s=Object(u.a)(r,1)[0],l=O(s);return function(e){var t=e.to,c=e.from,o=e.body,r=new URLSearchParams;r.append("To",t),r.append("From",c),r.append("Body",o);var u="https://api.twilio.com/2010-04-01/Accounts/".concat(s.accountSid,"/Messages.json");D.a.post(u,r,{auth:l,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){return n(e)})).catch((function(e){return a(e)})).then((function(){return i()}))}}),$=function(e){var t=e.text;return null!==t&&t.length>0?Object(d.jsx)("span",{className:"label label-success",style:{padding:".5em",margin:".5em 0em .5em 0em"},children:t}):null},ee=function(e){var t=e.error;return t?Object(d.jsx)("span",{className:"label label-error",style:{padding:".5em",margin:".5em 0em .5em 0em"},children:t instanceof Error?"".concat(t.name,": ").concat(t.message):"Error: ".concat(String(t))}):null},te=function(e){var t=e.type,n=void 0===t?"text":t,a=e.name,o=void 0===a?"":a,i=e.value,r=void 0===i?"":i,s=e.autoComplete,l=void 0===s?"":s,b=e.placeholder,j=void 0===b?"Placeholder":b,h=e.label,m=void 0===h?"Label":h,O=e.validation,f=void 0===O?function(){}:O,p=e.invalidHint,v=void 0===p?"Invalid value":p,x=e.isRequired,g=void 0!==x&&x,C=e.isEnabled,S=void 0===C||C,N=e.onChange,y=void 0===N?function(){}:N,A=Object(c.useState)(!0),T=Object(u.a)(A,2),w=T[0],k=T[1],E=function(){try{return null!==f(r)}catch(e){return!1}},I="form-label ".concat(w||E()?"":"has-error"),P=!w&&!E();return Object(d.jsxs)("label",{className:I,children:[m,":",g&&Object(d.jsx)("sup",{className:"text-error",children:"\u2217 "}),Object(d.jsx)("input",{type:n,name:o,className:"form-input",placeholder:j,required:g,value:r,autoComplete:l,disabled:!S,onChange:function(e){return y(e.target.value)},onBlur:function(){return k(!1)}}),P&&Object(d.jsx)("span",{className:"form-input-hint",children:v}),!P&&Object(d.jsx)("span",{className:"form-input-hint",children:j})]})},ne=function(e){var t=e.name,n=void 0===t?"":t,a=e.value,o=void 0===a?"":a,i=e.placeholder,r=void 0===i?"Placeholder":i,s=e.label,l=void 0===s?"Label":s,b=e.validation,j=void 0===b?function(){}:b,h=e.invalidHint,m=void 0===h?"Invalid value":h,O=e.isRequired,f=void 0!==O&&O,p=e.isEnabled,v=void 0===p||p,x=e.rows,g=void 0===x?3:x,C=e.onChange,S=void 0===C?function(){}:C,N=Object(c.useState)(!0),y=Object(u.a)(N,2),A=y[0],T=y[1],w=function(){try{return null!==j(o)}catch(e){return!1}},k="form-label ".concat(A||w()?"":"has-error"),E=!A&&!w();return Object(d.jsxs)("label",{className:k,children:[l,":",f&&Object(d.jsx)("sup",{className:"text-error",children:"\u2217 "}),Object(d.jsx)("textarea",{className:"form-input",name:n,placeholder:r,required:f,value:o,rows:g,disabled:!v,onChange:function(e){return S(e.target.value)},onBlur:function(){return T(!1)}}),E&&Object(d.jsx)("span",{className:"form-input-hint",children:m}),!E&&Object(d.jsx)("span",{className:"form-input-hint",children:r})]})},ce=function(e){var t=e.phoneNumber,n=void 0===t?"":t,a=N(),o=Object(u.a)(a,2),i=o[0],r=o[1],s=Object(c.useState)(!1),l=Object(u.a)(s,2),b=l[0],j=l[1],h=Object(c.useState)(""),m=Object(u.a)(h,2),O=m[0],f=m[1],p=Object(c.useState)(!1),v=Object(u.a)(p,2),x=v[0],g=v[1],C=Object(c.useState)(i),S=Object(u.a)(C,2),y=S[0],A=S[1],T=Object(c.useState)(""),w=Object(u.a)(T,2),k=w[0],E=w[1],I=Z({onSuccess:function(e){g(!0),setTimeout((function(){return g(!1)}),5e3)},onError:function(e){f(e)},onComplete:function(){j(!1)}});return Object(c.useEffect)((function(){r("")}),[r]),Object(d.jsxs)("div",{children:[Object(d.jsx)(ee,{error:O}),Object(d.jsxs)("form",{className:"form-group",onSubmit:function(e){e.preventDefault(),j(!0),I({to:y,from:n,body:k}),r(y)},children:[Object(d.jsxs)("fieldset",{disabled:b,children:[Object(d.jsx)(te,{label:"To",type:"tel",value:y,onChange:function(e){e.length>0&&(e="+"+e.replace(/\D/g,"")),e.length<13&&(A(e),r(e))},validation:function(e){return e.match("^\\+\\d{11}")},placeholder:"Recipient's phone number",invalidHint:"Phone number is invalid, it must contain the country code followed by 10 digits",isRequired:!0}),Object(d.jsx)(ne,{label:"Message",value:k,isRequired:!0,placeholder:"Enter the message to sent to: ".concat(y," from: ").concat(n),validHint:"This message is going to be sent to: ".concat(y," from: ").concat(n),invalidHint:"Invalid message, it must be between 3 and 200 characters",rows:"3",validation:function(e){return e.match("[\\w\\d]{3,}")},onChange:function(e){e.length<200&&E(e)}})]}),Object(d.jsx)("div",{className:"text-center m-2",children:Object(d.jsx)("button",{className:"message-composer-submit btn btn-primary ".concat(b?"loading":""),type:"submit",children:"Send"})})]}),Object(d.jsx)("div",{className:"text-center",children:x&&Object(d.jsx)($,{text:"Message sent successfully."})})]})},ae=function(e){var t=e.phoneNumber,n=void 0===t?"":t,a=Object(c.useState)("messages"),o=Object(u.a)(a,2),i=o[0],r=o[1],s=function(){return r("composer")},l="messages"===i,b="composer"===i,j="tab-item messages-page-tabs-area ".concat(l?"active":""),h="tab-item messages-page-tabs-area ".concat(b?"active":"");return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"messages-page-tabs-container",children:Object(d.jsx)("div",{className:"messages-page-tabs-content",children:Object(d.jsxs)("ul",{className:"tab tab-block",children:[Object(d.jsx)("li",{className:j,onClick:function(){return r("messages")},children:"Messages"}),Object(d.jsx)("li",{className:h,onClick:s,children:"Composer"})]})})}),l&&Object(d.jsx)(X,{phoneNumber:n,onActionClick:s}),b&&Object(d.jsx)(ce,{phoneNumber:n})]})},oe=n(41),ie=function(e){var t=e.onSuccess,n=void 0===t?function(){}:t,c=e.onError,a=void 0===c?function(){}:c,o=e.onComplete,i=void 0===o?function(){}:o;return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new m,t=O(e),c="https://api.twilio.com/2010-04-01/Accounts/".concat(e.accountSid,"/IncomingPhoneNumbers.json?Beta=false");D.a.get(c,{auth:t}).then((function(e){return n(e)})).catch((function(e){return a(e)})).then((function(){return i()}))}},re=(n(85),function(e){var t=e.onError,n=void 0===t?function(){}:t,a=e.onComplete,o=void 0===a?function(){}:a,i=e.onPhoneNumberChange,r=void 0===i?function(){}:i,s=x(),l=Object(u.a)(s,1)[0],b=Object(c.useState)(!0),j=Object(u.a)(b,2),h=j[0],m=j[1],O=Object(c.useState)([]),f=Object(u.a)(O,2),p=f[0],v=f[1],g=ie({onSuccess:function(e){var t,n=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.incoming_phone_numbers.filter((function(e){return e.capabilities.sms})).map((function(e){return e.phone_number})).sort();v(n)},onError:n,onComplete:function(){m(!1),o()}}),C=function(e){var t=e.substr(0,2);return t+=" "+e.substr(2,3),t+=" "+e.substr(5,3),t+=" "+e.substr(8)},S=p.map((function(e){return{value:e,label:C(e)}})),N=h?"Loading phone numbers...":"Select (or type) a phone number...";return Object(c.useEffect)((function(){0===p.length&&g(l)}),[g,p,l]),Object(d.jsx)(oe.a,{placeholder:N,isLoading:h,options:S,onChange:function(e){r(e.value)}})}),se=function(){var e=Object(c.useState)(null),t=Object(u.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(""),i=Object(u.a)(o,2),r=i[0],l=i[1],b=x(),j=Object(u.a)(b,1)[0],h=Object(s.f)();if(!(null===j||void 0===j?void 0:j.accountSid))return h.push("/authentication"),null;var m=""!==r;return Object(d.jsxs)(T,{children:[Object(d.jsx)("h4",{children:"Messages"}),Object(d.jsx)(ee,{error:n}),Object(d.jsx)(re,{onError:function(e){return a(e)},onPhoneNumberChange:function(e){return l(e)}}),m&&Object(d.jsx)(ae,{phoneNumber:r})]})},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e?"loading":""},le=function(e){var t=e.accountSid,n=void 0===t?"":t,c=e.authToken,a=void 0===c?"":c,o=e.loading,i=void 0!==o&&o,r=e.onAccountSidChange,s=void 0===r?function(){}:r,u=e.onAuthTokenChange,l=void 0===u?function(){}:u,b=e.onCancel,j=void 0===b?function(){}:b,h=e.onSignIn,m=void 0===h?function(){}:h;return Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m()},children:[Object(d.jsx)(te,{type:"text",name:"AccountSid",label:"Account SID",value:n,autoComplete:"account-sid",placeholder:"Account SID located at your Twilio Console",isRequired:!0,isEnabled:!i,onChange:s}),Object(d.jsx)(te,{type:"password",name:"AuthToken",label:"Auth Token",value:a,autoComplete:"auth-token",placeholder:"Auth Token located at your Twilio Console",isRequired:!0,isEnabled:!i,onChange:l}),Object(d.jsxs)("div",{className:"buttons-container",children:[Object(d.jsx)("button",{className:"btn btn-secondary",id:"AUTHENTICATION-TOKEN-CANCEL",type:"button",onClick:j,children:"Cancel"}),Object(d.jsx)("button",{className:"btn btn-primary ".concat(ue(i)),id:"AUTHENTICATION-TOKEN-SIGN-IN",type:"submit",children:"Sign-in"})]})]})},de=function(){var e=x(),t=Object(u.a)(e,2),n=t[0],a=t[1],o=Object(c.useRef)(n),i=Object(c.useState)(n.accountSid),r=Object(u.a)(i,2),l=r[0],j=r[1],h=Object(c.useState)(n.authToken),O=Object(u.a)(h,2),p=O[0],v=O[1],g=Object(c.useState)(!1),C=Object(u.a)(g,2),S=C[0],N=C[1],y=Object(c.useState)(null),A=Object(u.a)(y,2),w=A[0],k=A[1],E=Object(s.f)(),I=ie({onError:function(e){k(f(e)),N(!1)},onSuccess:function(){a(o.current),E.push("/phone-numbers")}});return Object(d.jsxs)(T,{children:[Object(d.jsx)("h4",{children:"Authentication with Auth Token"}),Object(d.jsx)(ee,{error:w}),Object(d.jsx)(le,{accountSid:l,authToken:p,onAccountSidChange:j,onAuthTokenChange:v,loading:S,onSignIn:function(){var e=new m(l,p,"","",b);o.current=e,N(!0),I(e)},onCancel:function(){return E.push("/authentication")}})]})},be=function(e){var t=e.accountSid,n=void 0===t?"":t,c=e.apiKey,a=void 0===c?"":c,o=e.apiSecret,i=void 0===o?"":o,r=e.loading,s=void 0!==r&&r,u=e.onAccountSidChange,l=void 0===u?function(){}:u,b=e.onApiKeyChange,j=void 0===b?function(){}:b,h=e.onApiSecretChange,m=void 0===h?function(){}:h,O=e.onCancel,f=void 0===O?function(){}:O,p=e.onSignIn,v=void 0===p?function(){}:p;return Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),v()},children:[Object(d.jsx)(te,{type:"text",name:"AccountSid",label:"Account SID",value:n,autoComplete:"account-sid",placeholder:"Account SID located at your Twilio Console",isRequired:!0,isEnabled:!s,onChange:l}),Object(d.jsx)(te,{type:"text",name:"ApiKey",label:"API Key",value:a,autoComplete:"api-key",placeholder:"API Key located at your Twilio Console",isRequired:!0,isEnabled:!s,onChange:j}),Object(d.jsx)(te,{type:"password",name:"ApiSecret",label:"API Secret",value:i,autoComplete:"api-secret",placeholder:"API Secret for your API Key",isRequired:!0,isEnabled:!s,onChange:m}),Object(d.jsxs)("div",{className:"buttons-container",children:[Object(d.jsx)("button",{className:"btn btn-secondary",id:"AUTHENTICATION-API-KEY-CANCEL",type:"button",onClick:f,children:"Cancel"}),Object(d.jsx)("button",{className:"btn btn-primary",id:"AUTHENTICATION-API-KEY-SIGN-IN",type:"submit",children:"Sign-in"})]})]})},je=function(){var e=x(),t=Object(u.a)(e,2),n=t[0],a=t[1],o=Object(c.useRef)(n),i=Object(c.useState)(n.accountSid),r=Object(u.a)(i,2),l=r[0],b=r[1],h=Object(c.useState)(n.apiKey),O=Object(u.a)(h,2),p=O[0],v=O[1],g=Object(c.useState)(n.apiSecret),C=Object(u.a)(g,2),S=C[0],N=C[1],y=Object(c.useState)(!1),A=Object(u.a)(y,2),w=A[0],k=A[1],E=Object(c.useState)(null),I=Object(u.a)(E,2),P=I[0],K=I[1],D=Object(s.f)(),R=ie({onError:function(e){K(f(e)),k(!1)},onSuccess:function(){a(o.current),D.push("/phone-numbers")}});return Object(d.jsxs)(T,{children:[Object(d.jsx)("h4",{children:"Authentication with Api Key"}),Object(d.jsx)(ee,{error:P}),Object(d.jsx)(be,{accountSid:l,apiKey:p,apiSecret:S,loading:w,onAccountSidChange:b,onApiKeyChange:v,onApiSecretChange:N,onSignIn:function(){var e=new m(l,"",p,S,j);o.current=e,k(!0),R(e)},onCancel:function(){return D.push("/authentication")}})]})},he=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(g,{children:Object(d.jsx)(y,{children:Object(d.jsx)(r.a,{children:Object(d.jsxs)(s.c,{children:[Object(d.jsx)(s.a,{exact:!0,path:"/",component:k}),Object(d.jsx)(s.a,{path:"/authentication",component:k}),Object(d.jsx)(s.a,{path:"/authentication-token",component:de}),Object(d.jsx)(s.a,{path:"/authentication-api-key",component:je}),Object(d.jsx)(s.a,{path:"/phone-numbers",component:se})]})})})})})},me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,107)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),o(e),i(e)}))},Oe=n(40),fe=n.n(Oe);(function(){var e="GTM-NV6RVQF";var t={gtmId:e};console.log("Initializing Google Tag Manager:",t),fe.a.initialize(t)})(),i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(he,{})}),document.getElementById("root")),me()},46:function(e,t,n){},50:function(e,t,n){},52:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){}},[[101,1,2]]]);
//# sourceMappingURL=main.12b1efc9.chunk.js.map