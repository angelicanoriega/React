(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(26)},17:function(e,t,a){},19:function(e,t,a){},22:function(e,t,a){},24:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(8),o=a.n(i),c=(a(17),a(2)),r=a(3),l=a(5),m=a(4),d=a(6),u=(a(19),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={username:"",password:""},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"onUsernameChange",value:function(e){this.setState({username:e.target.value})}},{key:"onPasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"submitLogin",value:function(e){this.props.showFirst()}},{key:"render",value:function(){return s.a.createElement("div",{className:"inner-container"},s.a.createElement("div",{className:"header"},"Login"),s.a.createElement("div",{className:"box"},s.a.createElement("div",{className:"input-group"},s.a.createElement("label",{htmlFor:"username"},"Username"),s.a.createElement("input",{type:"text",name:"username",className:"login-input",placeholder:"Username",onChange:this.onUsernameChange.bind(this)})),s.a.createElement("div",{className:"input-group"},s.a.createElement("label",{htmlFor:"password"},"Password"),s.a.createElement("input",{type:"password",name:"password",className:"login-input",placeholder:"Password",onChange:this.onPasswordChange.bind(this)})),s.a.createElement("button",{type:"button",className:"login-btn",onClick:this.submitLogin.bind(this)},"Login")))}}]),t}(n.Component)),h=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={username:"",email:"",password:""},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onPasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"submitRegister",value:function(e){this.props.showFirst()}},{key:"render",value:function(){return s.a.createElement("div",{className:"inner-container"},s.a.createElement("div",{className:"header"},"Register"),s.a.createElement("div",{className:"box"},s.a.createElement("div",{className:"input-group"},s.a.createElement("label",{htmlFor:"email"},"Email"),s.a.createElement("input",{type:"text",name:"email",className:"login-input",placeholder:"Email",onChange:this.onEmailChange.bind(this)})),s.a.createElement("div",{className:"input-group"},s.a.createElement("label",{htmlFor:"password"},"Password"),s.a.createElement("input",{type:"password",name:"password",className:"login-input",placeholder:"Password",onChange:this.onPasswordChange.bind(this)})),s.a.createElement("button",{type:"button",className:"login-btn",onClick:this.submitRegister.bind(this)},"Register")))}}]),t}(n.Component),p=function(e){function t(e){var a;return Object(c.a)(this,t),a=Object(l.a)(this,Object(m.a)(t).call(this,e)),console.log(e),a.state={isLoginOpen:!0,isRegisterOpen:!1},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"showLoginBox",value:function(){this.setState({isLoginOpen:!0,isRegisterOpen:!1})}},{key:"showRegisterBox",value:function(){this.setState({isRegisterOpen:!0,isLoginOpen:!1})}},{key:"render",value:function(){return s.a.createElement("div",{className:"root-container"},s.a.createElement("div",{className:"box-controller"},s.a.createElement("div",{className:"controller "+(this.state.isLoginOpen?"selected-controller":""),onClick:this.showLoginBox.bind(this)},"Login"),s.a.createElement("div",{className:"controller "+(this.state.isRegisterOpen?"selected-controller":""),onClick:this.showRegisterBox.bind(this)},"Register")),s.a.createElement("div",{className:"box-cu"}," ",this.state.isLoginOpen&&s.a.createElement(u,{showFirst:this.props.showFirst})," ",this.state.isRegisterOpen&&s.a.createElement(h,{showFirst:this.props.showFirst})))}}]),t}(n.Component),b=a(11),g=a(1),v=(a(22),a(9)),E=a(10),f=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={title:"",description:""},a.InputChange=a.InputChange.bind(Object(g.a)(Object(g.a)(a))),a.Submit=a.Submit.bind(Object(g.a)(Object(g.a)(a))),a.exits=a.exits.bind(Object(g.a)(Object(g.a)(a))),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"Submit",value:function(e){e.preventDefault(),this.state.title||""!==this.state.description?(this.props.onAddTodo(this.state),this.setState({title:"",description:""})):alert("completa los campos faltantes")}},{key:"InputChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(E.a)({},n,a))}},{key:"exits",value:function(){this.props.showSecond()}},{key:"render",value:function(){return s.a.createElement("div",{className:" text-center row"},s.a.createElement("div",{className:"col-md-12 card"},s.a.createElement("form",{onSubmit:this.Submit,className:"card-body"},s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"text",name:"title",className:"form-control",value:this.state.title,onChange:this.InputChange,placeholder:"Titulo"})),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"text",name:"description",className:"form-control",value:this.state.description,onChange:this.InputChange,placeholder:"Contenido"})),s.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Guardar"),s.a.createElement("input",{type:"button",value:"Salir",className:"btn btn-danger ml-4",onClick:this.exits}))))}}]),t}(n.Component),w=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={todos:v.a},e.upList=e.upList.bind(Object(g.a)(Object(g.a)(e))),e.complet=e.complet.bind(Object(g.a)(Object(g.a)(e))),e}return Object(d.a)(t,e),Object(r.a)(t,[{key:"removelist",value:function(e){console.log(e),window.confirm("Estas segur@ de eliminar esta lista?")&&this.setState({todos:this.state.todos.filter(function(t,a){return a!==e})})}},{key:"complet",value:function(e){document.getElementById(this.state.todos[e].title).hasAttribute("class")?document.getElementById(this.state.todos[e].title).removeAttribute("class"):document.getElementById(this.state.todos[e].title).setAttribute("class","change")}},{key:"upList",value:function(e){this.setState({todos:Object(b.a)(this.state.todos).concat([e])})}},{key:"render",value:function(){var e=this,t=this.state.todos.map(function(t,a){return s.a.createElement("div",{className:"col-md-4",key:a},s.a.createElement("div",{className:"card mt-4"},s.a.createElement("div",{className:"card-title text-center"},s.a.createElement("h3",null,t.title),s.a.createElement("span",{className:"badge badge-pill badge-danger ml-2"},t.priority)),s.a.createElement("div",{className:"card-body"},s.a.createElement("div",{id:t.title},s.a.createElement("p",null,t.description))),s.a.createElement("div",{className:"card-footer text-center"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:" col-6 col-md-6"},s.a.createElement("button",{className:"btn btn-danger",onClick:e.removelist.bind(e,a)},"Borrar")),s.a.createElement("div",{className:" col-6 col-md-6  text-center"},s.a.createElement("button",{className:"btn btn-warning text-white",onClick:e.complet.bind(e,a)},"Completada")),s.a.createElement("div",null)))))});return s.a.createElement("div",{className:"App pt-3"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row mt-4"},s.a.createElement("div",{className:"col-md-12 text-center"},s.a.createElement(f,{onAddTodo:this.upList,showSecond:this.props.showSecond})),s.a.createElement("div",{className:"col-md-12 d-flex justify-content-center align-items-center mt-3"},s.a.createElement("div",{className:"row cuadro"},t)))))}}]),t}(n.Component),O=(a(24),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={isFirstpage:!0,isSecondpage:!1},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"showFirstpage",value:function(){document.getElementById("first").setAttribute("class","hidden"),document.getElementById("second").removeAttribute("class")}},{key:"showSecondpage",value:function(){document.getElementById("second").setAttribute("class","hidden"),document.getElementById("first").removeAttribute("class")}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{id:"first"},s.a.createElement(p,{showFirst:this.showFirstpage})),s.a.createElement("div",{id:"second",className:"hidden"},s.a.createElement(w,{showSecond:this.showSecondpage})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e){e.exports={a:[{title:"Ejemplo",description:"texto de prueba"}]}}},[[12,2,1]]]);
//# sourceMappingURL=main.12ee7b69.chunk.js.map