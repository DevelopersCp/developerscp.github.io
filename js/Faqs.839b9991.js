(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Faqs"],{1182:function(t,r,e){},"34ba":function(t,r,e){"use strict";e("1182")},"4b57":function(t,r,e){"use strict";e.r(r);var a=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("nav-bar",{attrs:{name:t.title}}),e("v-container",{staticClass:"text-center"},[e("br"),e("v-icon",{attrs:{size:"50px",color:"#000"}},[t._v(" mdi-alert ")])],1),e("v-container",{staticClass:"text-center"},[e("v-card",{staticClass:"ma-auto",attrs:{flat:""}},[e("h1",[t._v(" PAGE UNDER CONSTRUCTION ")]),e("h5",[t._v("correo: support@trodapp.com ")]),e("h5",[t._v("número: +1 (888) 2206679 ")])])],1)],1)},o=[],n=e("d000"),i={components:{NavBar:n["a"]},data:function(){return{title:"FAQ'S"}}},s=i,c=e("2877"),l=Object(c["a"])(s,a,o,!1,null,null,null);r["default"]=l.exports},d000:function(t,r,e){"use strict";var a=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("v-toolbar",{attrs:{dense:"",color:"#000",dark:""}},[e("v-btn",{attrs:{icon:""}},[e("v-app-bar-nav-icon",{on:{click:function(r){r.stopPropagation(),t.drawer=!t.drawer}}})],1),e("v-toolbar-title",[t._v(t._s(t.name))]),e("v-spacer"),e("v-btn",{attrs:{icon:""},on:{click:function(r){return t.logout()}}},[e("v-icon",[t._v(" mdi-logout ")])],1)],1),e("v-navigation-drawer",{attrs:{absolute:"",temporary:"",color:"#000",dark:""},model:{value:t.drawer,callback:function(r){t.drawer=r},expression:"drawer"}},[e("v-list",{attrs:{nav:"",dense:""}},[e("v-list-item-group",{attrs:{"active-class":"gray--text text--accent-4",dark:""},model:{value:t.group,callback:function(r){t.group=r},expression:"group"}},[e("router-link",{attrs:{to:"/dashboard"}},[e("v-list-item",[e("v-icon",[t._v(" mdi-home ")]),t._v(" "),e("v-list-item-title",[t._v(" HOME ")])],1)],1),e("router-link",{attrs:{to:"/contact"}},[e("v-list-item",[e("v-icon",[t._v(" mdi-phone ")]),t._v(" "),e("v-list-item-title",[t._v(" CONTACT ")])],1)],1),e("router-link",{attrs:{to:"/faqs"}},[e("v-list-item",[e("v-icon",[t._v(" mdi-home ")]),t._v(" "),e("v-list-item-title",[t._v(" FAQ'S ")])],1)],1),e("router-link",{attrs:{to:"/profile"}},[e("v-list-item",[e("v-icon",[t._v(" mdi-account ")]),t._v(" "),e("v-list-item-title",[t._v(" PROFILE ")])],1)],1)],1)],1)],1)],1)},o=[],n={name:"NavBar",props:["name"],data:function(){return{drawer:!1,group:null}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},created:function(){this.loggedIn||this.$router.push("/")},methods:{logout:function(){this.$store.dispatch("auth/logout")}},watch:{group:function(){this.drawer=!1}}},i=n,s=(e("34ba"),e("2877")),c=Object(s["a"])(i,a,o,!1,null,null,null);r["a"]=c.exports}}]);
//# sourceMappingURL=Faqs.839b9991.js.map