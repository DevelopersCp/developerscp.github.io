(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Support"],{1182:function(t,e,a){},"1deb":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav-bar",{attrs:{name:t.title}}),a("v-container",{staticClass:"text-center"},[a("br"),a("v-icon",{attrs:{size:"50px",color:"#000"}},[t._v(" mdi-alert ")])],1),a("v-container",{staticClass:"text-center"},[a("v-card",{staticClass:"ma-auto",attrs:{flat:""}},[a("h1",[t._v(" PAGE UNDER CONSTRUCTION ")]),a("h5",[t._v("correo: support@trodapp.com ")]),a("h5",[t._v("número: +1 (888) 2206679 ")])])],1)],1)},r=[],o=a("d000"),i={components:{NavBar:o["a"]},data:function(){return{title:"CALL SUPPORT"}}},s=i,u=a("2877"),p=Object(u["a"])(s,n,r,!1,null,null,null);e["default"]=p.exports},"34ba":function(t,e,a){"use strict";a("1182")},"35ca":function(t,e,a){"use strict";var n=a("d4ec"),r=a("bee2"),o=a("ab58"),i=(a("3d20"),function(){function t(){Object(n["a"])(this,t)}return Object(r["a"])(t,[{key:"list_admin",value:function(){return o["a"].get("admin/users/").then((function(t){return t.data}))}},{key:"delete",value:function(t){return o["a"].delete("admin/users/"+t+"/").then((function(t){return t.data}))}},{key:"register",value:function(t){var e=new FormData;return e.append("email",t.email),e.append("username",t.username),e.append("img",t.img),e.append("is_staff",t.staff),e.append("phone_number",t.phone),e.append("password",t.password),e.append("confirm_password",t.confirm_password),e.append("first_name",t.firstname),e.append("last_name",t.lastname),o["a"].post("admin/users/",e,{headers:{"content-type":"multipart/form-data"}}).then((function(t){return t.data}))}},{key:"update",value:function(t,e){var a=new FormData;return a.append("email",t.email),a.append("username",t.username),a.append("is_staff",t.staff),t.img&&a.append("img",t.img),a.append("phone_number",t.phone),a.append("first_name",t.firstname),a.append("last_name",t.lastname),o["a"].put("user/"+e+"/update_user/",a,{headers:{"content-type":"multipart/form-data"}}).then((function(t){return t.data}))}},{key:"get",value:function(t){return o["a"].get("admin/users/"+t+"/").then((function(t){return t.data}))}},{key:"get_profile",value:function(){return o["a"].get("user/profile/").then((function(t){return t.data}))}},{key:"update_profile",value:function(t,e){var a=new FormData;return a.append("email",t.email),a.append("username",t.username),a.append("is_staff",!1),t.img&&a.append("img",t.img),a.append("phone_number",t.phone),a.append("first_name",t.firstname),a.append("last_name",t.lastname),o["a"].put("user/"+e+"/update_user/",a,{headers:{"content-type":"multipart/form-data"}}).then((function(t){return t.data}))}}]),t}());e["a"]=new i},d000:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-toolbar",{attrs:{dense:"",color:"#000",dark:""}},[a("v-btn",{attrs:{icon:""}},[a("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}})],1),a("v-toolbar-title",[t._v(t._s(t.name))]),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.logout()}}},[a("v-icon",[t._v(" mdi-logout ")])],1)],1),a("v-navigation-drawer",{attrs:{absolute:"",temporary:"",color:"#000",dark:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{nav:"",dense:""}},[a("v-list-item-group",{attrs:{"active-class":"gray--text text--accent-4",dark:""},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},[a("router-link",{attrs:{to:"/dashboard"}},[a("v-list-item",[a("v-icon",[t._v(" mdi-home ")]),t._v(" "),a("v-list-item-title",[t._v(" HOME ")])],1)],1),a("router-link",{attrs:{to:"/contact"}},[a("v-list-item",[a("v-icon",[t._v(" mdi-phone ")]),t._v(" "),a("v-list-item-title",[t._v(" CONTACT ")])],1)],1),a("router-link",{attrs:{to:"/faqs"}},[a("v-list-item",[a("v-icon",[t._v(" mdi-home ")]),t._v(" "),a("v-list-item-title",[t._v(" FAQ'S ")])],1)],1),a("router-link",{attrs:{to:"/profile"}},[a("v-list-item",[a("v-icon",[t._v(" mdi-account ")]),t._v(" "),a("v-list-item-title",[t._v(" PROFILE ")])],1)],1)],1)],1)],1)],1)},r=[],o=(a("4160"),a("4fad"),a("159b"),a("3835")),i=a("35ca"),s=a("3d20"),u=a.n(s),p={name:"NavBar",props:["name"],data:function(){return{drawer:!1,group:null}},mounted:function(){var t=this;i["a"].get_profile().then().catch((function(e){var a=e.response.data,n="";Object.entries(a).forEach((function(t){var e=Object(o["a"])(t,2),a=e[0],r=e[1];n+=a+": "+r+" \n "})),console.log(e.response.status),401==e.response.status?u.a.fire({icon:"error",title:"Error",text:"Session expired. Please log in again."}).then((function(){localStorage.removeItem("user"),t.$router.push("/")})):u.a.fire({icon:"error",title:"Error",text:n})}))},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},methods:{logout:function(){this.$store.dispatch("auth/logout")}},watch:{group:function(){this.drawer=!1}}},c=p,l=(a("34ba"),a("2877")),d=Object(l["a"])(c,n,r,!1,null,null,null);e["a"]=d.exports}}]);
//# sourceMappingURL=Support.728949f7.js.map