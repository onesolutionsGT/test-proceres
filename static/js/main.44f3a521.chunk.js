(this["webpackJsonptest-proceres"]=this["webpackJsonptest-proceres"]||[]).push([[0],{33:function(e,t,a){e.exports=a(45)},38:function(e,t,a){},39:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},40:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),l=a.n(o),s=(a(38),a(39),a(40),a(24)),c=a(25),i=a(26),h=a(31),m=a(27),u=a(16),C=a(30),O=a(28),E=a(75),d=a(69),p=a(71),g=a(70),b=a(73),f=a(74),T=a(76),I=a(72),N=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={nombre:"",correo:"",telefono:""},a.handleInputChange=a.handleInputChange.bind(Object(u.a)(a)),a.handleClick=a.handleClick.bind(Object(u.a)(a)),a.state={classes:Object(O.a)((function(e){return Object(E.a)({root:{display:"flex",flexWrap:"wrap"},margin:{margin:e.spacing(1)},withoutLabel:{marginTop:e.spacing(3)},textField:{width:200}})}))},a}return Object(C.a)(t,e),Object(i.a)(t,[{key:"handleInputChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(s.a)({},n,a))}},{key:"handleClick",value:function(){var e=this.state.nombre,t=this.state.telefono,a=this.state.correo;fetch("https://cors-anywhere.herokuapp.com/https://proceres.com.gt/api/lead",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({CardName:e,GroupCode:100,Currency:"USD",CODIGOWEB:"",BRAICES:"",PROYECTO:"Test Proyecto",TELEFONO:t,CORREOELECTRONICO:a,INFORMACION1:"",INFORMACION2:"",CONTACTO:"",INTERES:"",TIPOP:"",METROS:"",DORMITORIOS:"",MOTIVO:"",NECESIDAD:"",VISITA:"",INFORMACION3:"",PRESUPUESTO:"",ZONA:"",COMPRO:"",COMENTARIO:"",SEGUIMIENTO:"",CONTACTADO:"",FECHA1:"",CREADOR:"",FECHA2:"",ACTUALIZADO:"",FECHA3:"",LISTACONTACTO:"",ESTATUS:"",TIPOCONTACTO:"",PERTENECE:""})}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch(console.log)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null),r.a.createElement(g.a,{maxWidth:"sm",style:{backgroundColor:"#fff",height:"100vh",padding:"25px"}},r.a.createElement(p.a,{variant:"h2",component:"h2"},"Formulario Proceres"),r.a.createElement(T.a,{fullWidth:!0,className:(this.state.classes.margin,this.state.classes.textField),style:{backgroundColor:"#F9F9F9"}},r.a.createElement(f.a,{htmlFor:"txtNombre"},"Nombre"),r.a.createElement(b.a,{id:"txtNombre",name:"nombre",value:this.state.nombre||"",onChange:this.handleInputChange})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(T.a,{fullWidth:!0,className:(this.state.classes.margin,this.state.classes.textField),style:{backgroundColor:"#F9F9F9"}},r.a.createElement(f.a,{htmlFor:"txtCorreo"},"Correo"),r.a.createElement(b.a,{id:"txtCorreo",name:"correo",value:this.state.correo||"",onChange:this.handleInputChange})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(T.a,{fullWidth:!0,className:(this.state.classes.margin,this.state.classes.textField),style:{backgroundColor:"#F9F9F9"}},r.a.createElement(f.a,{htmlFor:"txtTelefono"},"Tel\xe9fono"),r.a.createElement(b.a,{id:"txtTelefono",name:"telefono",value:this.state.telefono||"",onChange:this.handleInputChange})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(I.a,{onClick:this.handleClick,color:"primary"},"Creame un Cliente")))}}]),t}(n.Component);var F=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.44f3a521.chunk.js.map