(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a(25)},,,,,function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(10),s=a.n(i),l=(a(18),a(2)),c=a(3),d=a(5),r=a(4),u=a(6),h=a(8),m=a(12),b=a(1),p=a(7),v=(a(19),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(r.a)(t).call(this,e))).state={isEditing:!1,task:a.props.task},a.handleRemove=a.handleRemove.bind(Object(b.a)(a)),a.toggleForm=a.toggleForm.bind(Object(b.a)(a)),a.handleChange=a.handleChange.bind(Object(b.a)(a)),a.handleEdit=a.handleEdit.bind(Object(b.a)(a)),a.handleToggle=a.handleToggle.bind(Object(b.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleRemove",value:function(){this.props.removeTodo(this.props.id)}},{key:"toggleForm",value:function(){this.setState({isEditing:!this.state.isEditing})}},{key:"handleEdit",value:function(e){e.preventDefault(),this.props.updateTodo(this.props.id,this.state.task),this.setState({isEditing:!1})}},{key:"handleChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(p.a)({},n,a))}},{key:"handleToggle",value:function(e){this.props.toggleTodo(this.props.id)}},{key:"render",value:function(){return this.state.isEditing?o.a.createElement("div",{className:"Todo"},o.a.createElement("form",{className:"Todo-edit-form",onSubmit:this.handleEdit},o.a.createElement("input",{type:"text",value:this.state.task,name:"task",onChange:this.handleChange}),o.a.createElement("button",null,"Save"))):o.a.createElement("div",{className:"Todo"},o.a.createElement("li",{className:this.props.completed?"Todo-task completed":"Todo-task",onClick:this.handleToggle},this.props.task),o.a.createElement("div",null,o.a.createElement("button",{onClick:this.toggleForm},"Edit"),o.a.createElement("button",{onClick:this.handleRemove},"X")))}}]),t}(n.Component)),g=a(11),f=a.n(g),k=(a(22),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(r.a)(t).call(this,e))).state={task:""},a.handleChange=a.handleChange.bind(Object(b.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(p.a)({},n,a))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.createTodo(Object(h.a)({},this.state,{id:f()(),completed:!1})),this.setState({task:""})}},{key:"render",value:function(){return o.a.createElement("form",{className:"NewTodoForm",onSubmit:this.handleSubmit},o.a.createElement("label",null,"New Todo"),o.a.createElement("input",{type:"text",placeholder:"New Todo",id:"task",name:"task",value:this.state.task,onChange:this.handleChange}),o.a.createElement("button",null,"Add New Todo"))}}]),t}(n.Component)),j=(a(23),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(r.a)(t).call(this,e))).state={todos:[]},a.create=a.create.bind(Object(b.a)(a)),a.remove=a.remove.bind(Object(b.a)(a)),a.edit=a.edit.bind(Object(b.a)(a)),a.toggleCompleted=a.toggleCompleted.bind(Object(b.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"create",value:function(e){this.setState({todos:[].concat(Object(m.a)(this.state.todos),[e])})}},{key:"remove",value:function(e){this.setState({todos:this.state.todos.filter((function(t){return t.id!==e}))})}},{key:"edit",value:function(e,t){var a=this.state.todos.map((function(a){return a.id===e?Object(h.a)({},a,{task:t}):a}));this.setState({todos:a})}},{key:"toggleCompleted",value:function(e){var t=this.state.todos.map((function(t){return t.id===e?Object(h.a)({},t,{completed:!t.completed}):t}));this.setState({todos:t})}},{key:"render",value:function(){var e=this,t=this.state.todos.map((function(t){return o.a.createElement(v,{key:t.id,id:t.id,task:t.task,completed:t.completed,removeTodo:e.remove,updateTodo:e.edit,toggleTodo:e.toggleCompleted})}));return o.a.createElement("div",{className:"TodoList"},o.a.createElement("h1",null,"Todo List! ",o.a.createElement("span",null,"React Todo List")),o.a.createElement("ul",null,t,o.a.createElement(k,{createTodo:this.create})))}}]),t}(n.Component)),O=(a(24),function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(j,null))}}]),t}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[13,1,2]]]);
//# sourceMappingURL=main.9d1456b4.chunk.js.map