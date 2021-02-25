(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["AddSale"],{"00dd":function(t,e,r){"use strict";var a=r("d4ec"),n=r("bee2"),o=r("ab58"),i=r("3d20"),s=r.n(i),c=function(){function t(){Object(a["a"])(this,t)}return Object(n["a"])(t,[{key:"general_store",value:function(t){return o["a"].get("sales/"+t+"/general/").then((function(t){return t.data})).catch((function(t){s.a.fire({icon:"error",title:"Error",text:t.response.data})}))}},{key:"general_admin",value:function(){return o["a"].get("admin/sales/general/").then((function(t){return t.data})).catch((function(t){s.a.fire({icon:"error",title:"Error",text:t.response.data})}))}},{key:"current_month",value:function(){return o["a"].get("admin/sales/current_month/").then((function(t){return t.data})).catch((function(t){s.a.fire({icon:"error",title:"Error",text:t.response.data})}))}},{key:"last_month",value:function(){return o["a"].get("admin/sales/last_month/").then((function(t){return t.data})).catch((function(t){s.a.fire({icon:"error",title:"Error",text:t.response.data})}))}},{key:"three_months",value:function(){return o["a"].get("admin/sales/three_months/").then((function(t){return t.data})).catch((function(t){s.a.fire({icon:"error",title:"Error",text:t.response.data})}))}},{key:"add_sales",value:function(t){var e=new FormData;return e.append("file",t),o["a"].post("admin/sales/",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){return t.data})).catch((function(t){s.a.fire({icon:"error",title:"Error",text:t.response.data["file"]})}))}},{key:"delete_stores",value:function(t){return o["a"].post("admin/stores/remove_stores/",{id_stores:t}).then((function(t){return t.data})).catch((function(t){s.a.fire({icon:"error",title:"Error",text:t.response.data})}))}},{key:"export_stores",value:function(t){return o["a"].post("admin/stores/export_stores/",{id_stores:t}).then((function(t){return t.data})).catch((function(t){s.a.fire({icon:"error",title:"Error",text:t.response.data})}))}},{key:"add_walmart",value:function(t){return o["a"].post("walmart/",{store:t.store,walmart_username:t.walmart_username,walmart_password:t.walmart_password,last_4_digits_of_the_card:t.card,CVV:t.CVV,month:t.month,year:t.year}).then((function(t){return t.data})).catch((function(t){s.a.fire({icon:"error",title:"Error",text:t.response.data})}))}},{key:"update_walmart",value:function(t,e){return o["a"].put("walmart/"+e+"/",{store:t.store,walmart_username:t.username,walmart_password:t.password,last_4_digits_of_the_card:t.card,CVV:t.CVV,month:t.month,year:t.year}).then((function(t){return t.data})).catch((function(t){s.a.fire({icon:"error",title:"Error",text:t.response.data})}))}}]),t}();e["a"]=new c},1182:function(t,e,r){},"34ba":function(t,e,r){"use strict";r("1182")},"5f47":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("nav-bar",{attrs:{name:t.title}}),r("v-spacer"),r("v-card",{staticClass:"ma-1",attrs:{cols:"12"}},[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("h5",[t._v("*File")]),r("v-file-input",{attrs:{label:"Choose file",outlined:"",dense:""},on:{change:t.selectFile}}),r("h6",[t._v("This field is required.")])],1)],1),r("v-col",[r("router-link",{attrs:{to:"/sales"}},[r("v-btn",{staticClass:"mx-4 my-2",attrs:{color:"#989898",dark:""}},[t._v(" GO BACK ")])],1),r("v-btn",{staticClass:"mx-4 my-2 primary",attrs:{light:"",loading:t.loading},on:{click:t.add_sales}},[t._v(" ADD REGISTER ")])],1)],1)],1)],1)},n=[],o=r("d000"),i=r("00dd"),s=r("3d20"),c=r.n(s),l={components:{NavBar:o["a"]},data:function(){return{title:"ADD SALE",loading:!1,file:void 0}},methods:{add_sales:function(){var t=this;this.loading=!0,i["a"].add_sales(this.file).then((function(e){c.a.fire({icon:"success",title:"Success",text:e["message"]}).then((function(){t.loading=!1,t.$router.push("/sales")}))}))},selectFile:function(t){this.file=t,console.log(this.file)}}},u=l,d=r("2877"),f=Object(d["a"])(u,a,n,!1,null,null,null);e["default"]=f.exports},d000:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-toolbar",{attrs:{dense:"",color:"#000",dark:""}},[r("v-btn",{attrs:{icon:""}},[r("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}})],1),r("v-toolbar-title",[t._v(t._s(t.name))]),r("v-spacer"),r("v-btn",{attrs:{icon:""},on:{click:function(e){return t.logout()}}},[r("v-icon",[t._v(" mdi-logout ")])],1)],1),r("v-navigation-drawer",{attrs:{absolute:"",temporary:"",color:"#000",dark:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",{attrs:{nav:"",dense:""}},[r("v-list-item-group",{attrs:{"active-class":"gray--text text--accent-4",dark:""},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},[r("router-link",{attrs:{to:"/dashboard"}},[r("v-list-item",[r("v-icon",[t._v(" mdi-home ")]),t._v(" "),r("v-list-item-title",[t._v(" HOME ")])],1)],1),r("router-link",{attrs:{to:"/contact"}},[r("v-list-item",[r("v-icon",[t._v(" mdi-phone ")]),t._v(" "),r("v-list-item-title",[t._v(" CONTACT ")])],1)],1),r("router-link",{attrs:{to:"/faqs"}},[r("v-list-item",[r("v-icon",[t._v(" mdi-home ")]),t._v(" "),r("v-list-item-title",[t._v(" FAQ'S ")])],1)],1),r("router-link",{attrs:{to:"/profile"}},[r("v-list-item",[r("v-icon",[t._v(" mdi-account ")]),t._v(" "),r("v-list-item-title",[t._v(" PROFILE ")])],1)],1)],1)],1)],1)],1)},n=[],o={name:"NavBar",props:["name"],data:function(){return{drawer:!1,group:null}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},created:function(){this.loggedIn||this.$router.push("/")},methods:{logout:function(){this.$store.dispatch("auth/logout")}},watch:{group:function(){this.drawer=!1}}},i=o,s=(r("34ba"),r("2877")),c=Object(s["a"])(i,a,n,!1,null,null,null);e["a"]=c.exports}}]);
//# sourceMappingURL=AddSale.a8ffe2b8.js.map