(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Contact"],{1182:function(t,a,r){},"34ba":function(t,a,r){"use strict";r("1182")},b395:function(t,a,r){t.exports=r.p+"img/logo200x200.6d7e2c47.png"},b8fa:function(t,a,r){"use strict";r.r(a);var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav-bar",{attrs:{name:t.title}}),e("v-container",{staticClass:"text-center"},[e("img",{attrs:{src:r("b395"),alt:"",width:"150px"}})]),e("v-container",{staticClass:"text-center"},[e("v-card",{staticClass:"ma-auto",attrs:{flat:""}},[e("h2",[t._v(" TROD APP ")]),e("h4",[t._v("correo: support@trodapp.com ")]),e("h4",[t._v("número: +1 (888) 2206679 ")])])],1)],1)},o=[],n=r("d000"),i={components:{NavBar:n["a"]},data:function(){return{title:"CONTACT"}}},s=i,c=r("2877"),l=Object(c["a"])(s,e,o,!1,null,null,null);a["default"]=l.exports},d000:function(t,a,r){"use strict";var e=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",[r("v-toolbar",{attrs:{dense:"",color:"#000",dark:""}},[r("v-btn",{attrs:{icon:""}},[r("v-app-bar-nav-icon",{on:{click:function(a){a.stopPropagation(),t.drawer=!t.drawer}}})],1),r("v-toolbar-title",[t._v(t._s(t.name))]),r("v-spacer"),r("v-btn",{attrs:{icon:""},on:{click:function(a){return t.logout()}}},[r("v-icon",[t._v(" mdi-logout ")])],1)],1),r("v-navigation-drawer",{attrs:{absolute:"",temporary:"",color:"#000",dark:""},model:{value:t.drawer,callback:function(a){t.drawer=a},expression:"drawer"}},[r("v-list",{attrs:{nav:"",dense:""}},[r("v-list-item-group",{attrs:{"active-class":"gray--text text--accent-4",dark:""},model:{value:t.group,callback:function(a){t.group=a},expression:"group"}},[r("router-link",{attrs:{to:"/dashboard"}},[r("v-list-item",[r("v-icon",[t._v(" mdi-home ")]),t._v(" "),r("v-list-item-title",[t._v(" HOME ")])],1)],1),r("router-link",{attrs:{to:"/contact"}},[r("v-list-item",[r("v-icon",[t._v(" mdi-phone ")]),t._v(" "),r("v-list-item-title",[t._v(" CONTACT ")])],1)],1),r("router-link",{attrs:{to:"/faqs"}},[r("v-list-item",[r("v-icon",[t._v(" mdi-home ")]),t._v(" "),r("v-list-item-title",[t._v(" FAQ'S ")])],1)],1),r("router-link",{attrs:{to:"/profile"}},[r("v-list-item",[r("v-icon",[t._v(" mdi-account ")]),t._v(" "),r("v-list-item-title",[t._v(" PROFILE ")])],1)],1)],1)],1)],1)],1)},o=[],n={name:"NavBar",props:["name"],data:function(){return{drawer:!1,group:null}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},methods:{logout:function(){this.$store.dispatch("auth/logout")}},watch:{group:function(){this.drawer=!1}}},i=n,s=(r("34ba"),r("2877")),c=Object(s["a"])(i,e,o,!1,null,null,null);a["a"]=c.exports}}]);
//# sourceMappingURL=Contact.c922f089.js.map