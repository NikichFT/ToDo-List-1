(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{35:function(e,t,a){"use strict";a.r(t);var c=a(1),o=a(0),n=a.n(o),s=a(8),i=a.n(s),r=a(5),l=a(15),d=a(9),p=a(3),u="POST/CREATE_POST",m="POST/COMPLETE_POST",j="POST/OVERDUE_POST",b="APP/SHOW_ALERT",O="APP/HIDE_ALERT";function h(e){return function(t){t({type:u,title:e.title,id:e.id,date:e.date,completed:e.completed,timeToComplete:e.timeToComplete,overdue:e.overdue,changed:e.changed}),e.timeToComplete>0?setTimeout((function(){t(v(e.id,e.date,e.changed))}),e.timeToComplete):setTimeout((function(){t(v(e.id,e.date,e.changed))}),0)}}function v(e,t,a){return{type:j,id:e,date:t,changed:a}}var f=a(2),g=a(21),x={completeTask:function(e){return{type:m,id:e}},overdueTask:v,createPost:h},T=Object(p.b)((function(e){return{syncPosts:e.posts.posts,id:e.posts.id}}),x)((function(e){var t=e.post,a=e.completeTask,n=e.completed,s=e.overdue,i=(e.changeTask,e.createPost),r=e.timeToComplete,l=function(e){var t=new Date;if(e){var a=t.getFullYear(),c=t.getMonth()+1,o=t.getDate(),n=t.toString().split(" ")[4].split(":")[0],s=t.toString().split(" ")[4].split(":")[1],i=t.toString().split(" ")[4].split(":")[2],r=Date.parse("".concat(e.split("T")[0].split("-").join(".")," ").concat(e.split("T")[1]))-Date.parse("".concat(a,".").concat(c,".").concat(o," ").concat(n,":").concat(s,":").concat(i));return r||null}},d=Object(o.useState)({title:t.title,id:t.id,date:t.date,completed:t.overdue,overdue:t.overdue,timeToComplete:t.timeToComplete}),p=Object(g.a)(d,2),u=p[0],m=p[1];Object(o.useEffect)((function(){m(t)}),[t]),Object(o.useEffect)((function(){m(u)}),[u]);return Object(c.jsxs)("div",{className:"card ".concat(n?"bg-success text-white":"bg-light text-dark"," mb-3"),children:[Object(c.jsxs)("div",{className:"card-body ".concat(s&&t.date?"bg-danger":""),style:{textDecoration:n?"line-through":"none"},children:[Object(c.jsx)("input",{type:"text",value:t.title,name:"title",onChange:function(e){!function(e){var a,c;e.persist(),i((a={},Object(f.a)(a,e.target.name,e.target.value),Object(f.a)(a,"id",t.id),Object(f.a)(a,"date",t.date),Object(f.a)(a,"completed",t.completed),Object(f.a)(a,"overdue",u.overdue),Object(f.a)(a,"timeToComplete",r),Object(f.a)(a,"changed",!0),a)),m((c={},Object(f.a)(c,e.target.name,e.target.value),Object(f.a)(c,"id",t.id),Object(f.a)(c,"date",u.date),Object(f.a)(c,"completed",t.completed),Object(f.a)(c,"overdue",u.overdue),Object(f.a)(c,"timeToComplete",r),Object(f.a)(c,"changed",!0),c))}(e)},className:"form-control card-header"}),Object(c.jsxs)("div",{className:"card-body",children:[Object(c.jsx)("div",{className:"card-text",children:"complete before: "}),Object(c.jsx)("div",{className:"col-10",children:Object(c.jsx)("input",{className:"form-control",type:"datetime-local",value:t.date,name:"date",onChange:function(e){!function(e){var a,c;e.persist(),i((a={title:t.title,id:t.id},Object(f.a)(a,e.target.name,e.target.value),Object(f.a)(a,"completed",t.completed),Object(f.a)(a,"overdue",u.overdue),Object(f.a)(a,"timeToComplete",l(e.target.value)),Object(f.a)(a,"changed",!0),a)),m((c={title:t.title,id:t.id},Object(f.a)(c,e.target.name,e.target.value),Object(f.a)(c,"completed",t.completed),Object(f.a)(c,"overdue",u.overdue),Object(f.a)(c,"timeToComplete",l(e.target.value)),Object(f.a)(c,"changed",!0),c))}(e)},id:"datetime-local-input"})})]})]}),Object(c.jsx)("div",{className:"input-group-text",style:{display:"".concat(s&&t.date?"none":"inline-block")},children:Object(c.jsx)("input",{className:"form-check-input btn-outline-info",onChange:function(){a(t.id)},type:"checkbox",checked:n,value:n,"aria-label":"Checkbox for following text input"})}),n&&Object(c.jsx)("button",{name:"completed",value:"false",onClick:function(e){return function(e){e.persist(),i({title:u.title,id:Date.now().toString(),completed:!t.completed,overdue:!1}),m({title:u.title,id:Date.now().toString(),date:u.date,completed:!t.completed,overdue:!1})}(e)},type:"button",className:"btn btn-primary",children:"Copy"})]})})),y={createPost:h},C=Object(p.b)((function(e){return{syncPosts:e.posts}}),y)((function(e){var t=e.syncPosts;return 0==t.length?"No tasks yet":t.map((function(e){return e.completed&&Object(c.jsx)(T,{post:e,overdue:e.overdue,completed:e.completed,timeToComplete:e.timeToComplete},e.id)}))})),N=a(6),k=a(17),P=a(18),S=a(22),w=a(20),D=function(e){var t=e.text;return Object(c.jsx)("div",{className:"alert alert-danger",role:"alert",children:t})},E=function(e){Object(S.a)(a,e);var t=Object(w.a)(a);function a(){var e;Object(k.a)(this,a);for(var c=arguments.length,o=new Array(c),n=0;n<c;n++)o[n]=arguments[n];return(e=t.call.apply(t,[this].concat(o))).state={title:"",date:void 0,completed:!1,overdue:!1},e.submitHandler=function(t){if(t.preventDefault(),!e.state.title.trim())return e.props.showAlert("You are trying to create an empty task");var a=new Date,c={title:e.state.title,id:Date.now().toString(),date:e.state.date,completed:!1,overdue:!1,timeToComplete:function(e){if(e){var t=a.getFullYear(),c=a.getMonth()+1,o=a.getDate(),n=a.toString().split(" ")[4].split(":")[0],s=a.toString().split(" ")[4].split(":")[1],i=a.toString().split(" ")[4].split(":")[2],r=Date.parse("".concat(e.split("T")[0].split("-").join(".")," ").concat(e.split("T")[1]))-Date.parse("".concat(t,".").concat(c,".").concat(o," ").concat(n,":").concat(s,":").concat(i));return r||null}}(e.state.date)};e.props.createPost(c),e.setState({title:""})},e.changeInputHandler=function(t){t.persist(),e.setState((function(e){return Object(N.a)(Object(N.a)({},e),Object(f.a)({},t.target.name,t.target.value))}))},e}return Object(P.a)(a,[{key:"render",value:function(){return Object(c.jsxs)("form",{onSubmit:this.submitHandler,children:[this.props.alert&&Object(c.jsx)(D,{text:this.props.alert}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"title",children:"Task Name"}),Object(c.jsx)("input",{type:"text",className:"form-control",id:"title",value:this.state.title,name:"title",onChange:this.changeInputHandler}),Object(c.jsx)("label",{htmlFor:"datetime-local-input",className:"col-form-label",children:"Date and time"}),Object(c.jsx)("div",{className:"col-10",children:Object(c.jsx)("input",{className:"form-control",onChange:this.changeInputHandler,type:"datetime-local",defaultValue:this.state.date,name:"date",id:"datetime-local-input"})})]}),Object(c.jsx)("button",{className:"btn btn-success",type:"submit",children:"Add"})]})}}]),a}(n.a.Component),A={createPost:h,showAlert:function(e){return function(t){t({type:b,payload:e}),setTimeout((function(){t({type:O})}),3e3)}}},H=Object(p.b)((function(e){return{todos:e.posts.posts,alert:e.app.alert}}),A)(E),F=a(4),M={createPost:h},I=Object(p.b)((function(e){return{syncPosts:Object(F.a)(e.posts.sort((function(e,t){return e.timeToComplete-t.timeToComplete})))}}),M)((function(e){var t=e.syncPosts;return 0==t.length?"No tasks yet":t.map((function(e){return!e.completed&&Object(c.jsx)(T,{post:e,overdue:e.overdue,completed:e.completed,timeToComplete:e.timeToComplete},e.id)}))})),R={createPost:h},_=Object(p.b)((function(e){return{syncPosts:[].concat(Object(F.a)(e.posts.filter((function(e){if(!e.completed)return e})).sort((function(e,t){if(!e.overdue||!t.overdue)return e.timeToComplete-t.timeToComplete}))),Object(F.a)(e.posts.filter((function(e){if(e.completed)return e}))))}}),R)((function(e){var t=e.syncPosts,a=new Date,o=[a.getFullYear(),a.getMonth()+1,a.getDate()].map((function(e){return e>0&&e<10?"0"+e:e}));return 0==t.length?"No tasks yet":t.map((function(e){return e.date?e.date.split("T")[0]==o.join("-")&&Object(c.jsx)(T,{post:e,overdue:e.overdue,completed:e.completed,timeToComplete:e.timeToComplete},e.id):Object(c.jsx)(T,{post:e,overdue:e.overdue,completed:e.completed,timeToComplete:e.timeToComplete},e.id)}))})),Y=function(){return Object(c.jsx)("div",{className:"container pt-3",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"col text-white bg-secondary",children:[Object(c.jsxs)("div",{className:"col",style:{paddingBottom:"10%"},children:[Object(c.jsx)("h2",{className:"card-header",children:"Tasks for today"}),Object(c.jsx)(H,{})]}),Object(c.jsx)(_,{})]}),Object(c.jsxs)("div",{className:"col text-dark bg-warning",children:[Object(c.jsx)("h2",{className:"card-header",children:"Unfinished tasks"}),Object(c.jsx)("div",{className:"col",style:{paddingBottom:"10%"},children:Object(c.jsx)(H,{})}),Object(c.jsx)(I,{})]}),Object(c.jsxs)("div",{className:"col text-dark bg-info",children:[Object(c.jsx)("h2",{className:"card-header",children:"Finished tasks"}),Object(c.jsx)(C,{})]})]})})},B={alert:null},L=Object(d.load)({states:["posts"],namespace:"Tasks"});L&&L.posts&&L.posts.length||(L={posts:[]});var J=Object(r.combineReducers)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L.posts,t=arguments.length>1?arguments[1]:void 0,a=t.type,c=t.title,o=t.id,n=t.date,s=t.completed,i=t.overdue,r=t.changed,l=t.timeToComplete;switch(a){case u:return r?Object(F.a)(e).map((function(e){return e.id!==o||e.completed||(e.title=c,e.id=o,e.date=n,e.completed=s,e.timeToComplete=l,e.overdue=i),e})):[].concat(Object(F.a)(e),[{title:c,id:o,date:n,completed:s,timeToComplete:l,overdue:i}]);case m:return Object(F.a)(e).map((function(e){return e.id===o&&(e.completed=!e.completed),e}));case j:return Object(F.a)(e).map((function(e){return e.id===o&&!e.completed&&e.date&&e.date===n?(e.overdue=!0,e.completed=null):e.changed&&(e.overdue=!1),e}));default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(N.a)(Object(N.a)({},e),{},{alert:t.payload});case O:return Object(N.a)(Object(N.a)({},e),{},{alert:null});default:return e}}}),U=a(19),V=[l.a];r.applyMiddleware.apply(void 0,V);var W=Object(r.createStore)(J,Object(U.composeWithDevTools)(r.applyMiddleware.apply(void 0,V.concat([Object(d.save)({states:["posts"],namespace:"Tasks"})])))),q=Object(c.jsx)(p.a,{store:W,children:Object(c.jsx)(Y,{})});i.a.render(q,document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.e0620046.chunk.js.map