(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["UpdateStore"],{1182:function(e,t,a){},"34ba":function(e,t,a){"use strict";a("1182")},"35ca":function(e,t,a){"use strict";var n=a("d4ec"),r=a("bee2"),s=a("ab58"),o=(a("3d20"),function(){function e(){Object(n["a"])(this,e)}return Object(r["a"])(e,[{key:"list_admin",value:function(){return s["a"].get("admin/users/").then((function(e){return e.data}))}},{key:"delete",value:function(e){return s["a"].delete("admin/users/"+e+"/").then((function(e){return e.data}))}},{key:"register",value:function(e){var t=new FormData;return t.append("email",e.email),t.append("username",e.username),t.append("img",e.img),t.append("is_staff",e.staff),t.append("phone_number",e.phone),t.append("password",e.password),t.append("confirm_password",e.confirm_password),t.append("first_name",e.firstname),t.append("last_name",e.lastname),s["a"].post("admin/users/",t,{headers:{"content-type":"multipart/form-data"}}).then((function(e){return e.data}))}},{key:"update",value:function(e,t){var a=new FormData;return a.append("email",e.email),a.append("username",e.username),a.append("is_staff",e.staff),e.img&&a.append("img",e.img),a.append("phone_number",e.phone),a.append("first_name",e.firstname),a.append("last_name",e.lastname),s["a"].put("user/"+t+"/update_user/",a,{headers:{"content-type":"multipart/form-data"}}).then((function(e){return e.data}))}},{key:"get",value:function(e){return s["a"].get("admin/users/"+e+"/").then((function(e){return e.data}))}},{key:"get_profile",value:function(){return s["a"].get("user/profile/").then((function(e){return e.data}))}},{key:"update_profile",value:function(e,t){var a=new FormData;return a.append("email",e.email),a.append("username",e.username),a.append("is_staff",!1),e.img&&a.append("img",e.img),a.append("phone_number",e.phone),a.append("first_name",e.firstname),a.append("last_name",e.lastname),s["a"].put("user/"+t+"/update_user/",a,{headers:{"content-type":"multipart/form-data"}}).then((function(e){return e.data}))}}]),e}());t["a"]=new o},"58f4":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("nav-bar",{attrs:{name:e.title}}),a("v-card",{staticClass:"ma-1",attrs:{cols:"12"}},[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{staticClass:"mb-n5",attrs:{outlined:"",dense:"",required:"",label:"Name"},model:{value:e.store.name,callback:function(t){e.$set(e.store,"name",t)},expression:"store.name"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{staticClass:"mb-n5",attrs:{outlined:"",dense:"",label:"Phone number"},model:{value:e.store.phone_number,callback:function(t){e.$set(e.store,"phone_number",t)},expression:"store.phone_number"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{staticClass:"mb-n5",attrs:{outlined:"",dense:"",label:"Email"},model:{value:e.store.email,callback:function(t){e.$set(e.store,"email",t)},expression:"store.email"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{staticClass:"mb-n5",attrs:{outlined:"",dense:"",label:"Address"},model:{value:e.store.address,callback:function(t){e.$set(e.store,"address",t)},expression:"store.address"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{staticClass:"mb-n5",attrs:{outlined:"",dense:"",type:"number",label:"Zip code"},model:{value:e.store.zipcode,callback:function(t){e.$set(e.store,"zipcode",t)},expression:"store.zipcode"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{staticClass:"mb-n5",attrs:{outlined:"",dense:"",label:"State"},model:{value:e.store.state,callback:function(t){e.$set(e.store,"state",t)},expression:"store.state"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-select",{staticClass:"mb-n5",attrs:{items:e.items,label:"Status",outlined:"",dense:""},model:{value:e.store.status,callback:function(t){e.$set(e.store,"status",t)},expression:"store.status"}})],1),a("v-col",[a("v-btn",{staticClass:"mx-4 my-2",attrs:{color:"#989898",dark:""},on:{click:function(t){return e.$router.go(-1)}}},[e._v(" GO BACK ")]),a("v-btn",{staticClass:"mx-4 my-2",attrs:{color:"#E47911",dark:"",loading:e.loading},on:{click:e.update}},[e._v(" UPDATE ")])],1)],1)],1)],1)],1)},r=[],s=(a("4160"),a("b0c0"),a("4fad"),a("159b"),a("3835")),o=a("d000"),i=a("02e9"),l=a("3d20"),u=a.n(l),c={components:{NavBar:o["a"]},data:function(){return{title:"UPDATE STORE",loading:!1,store:{name:"",email:"",phone_number:"",address:"",zipcode:null,state:"",status:""},items:[{text:"Active",value:"A"},{text:"Pending activation",value:"PA"},{text:"Suspended",value:"S"},{text:"Denied activation",value:"DA"},{text:"Vacation",value:"V"},{text:"Everyday",value:"ED"}]}},computed:{unique_id:function(){return this.$route.params.id}},mounted:function(){var e=this;i["a"].get_info(this.unique_id).then((function(t){e.store.name=t.name,e.store.phone_number=t.phone_number,e.store.email=t.email,e.store.address=t.address,e.store.zipcode=t.zipcode,e.store.state=t.state,e.store.status=t.status})).catch((function(t){var a=t.response.data,n="";Object.entries(a).forEach((function(e){var t=Object(s["a"])(e,2),a=t[0],r=t[1];n+=a+": "+r+" \n "})),e.loading=!1,u.a.fire({icon:"error",title:"Error",text:n})}))},methods:{update:function(){var e=this;this.loading=!0,i["a"].update(this.store,this.unique_id).then((function(t){e.loading=!1,u.a.fire({icon:"success",title:"Success",text:"The store was successfully modified."}).then((function(){e.$router.go(-1)}))})).catch((function(t){var a=t.response.data,n="";Object.entries(a).forEach((function(e){var t=Object(s["a"])(e,2),a=t[0],r=t[1];n+=a+": "+r+" \n "})),e.loading=!1,u.a.fire({icon:"error",title:"Error",text:n})}))}}},d=c,p=a("2877"),m=Object(p["a"])(d,n,r,!1,null,null,null);t["default"]=m.exports},d000:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-toolbar",{attrs:{dense:"",color:"#000",dark:""}},[a("v-btn",{attrs:{icon:""}},[a("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}})],1),a("v-toolbar-title",[e._v(e._s(e.name))]),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(t){return e.logout()}}},[a("v-icon",[e._v(" mdi-logout ")])],1)],1),a("v-navigation-drawer",{attrs:{absolute:"",temporary:"",color:"#000",dark:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{attrs:{nav:"",dense:""}},[a("v-list-item-group",{attrs:{"active-class":"gray--text text--accent-4",dark:""},model:{value:e.group,callback:function(t){e.group=t},expression:"group"}},[a("router-link",{attrs:{to:"/dashboard"}},[a("v-list-item",[a("v-icon",[e._v(" mdi-home ")]),e._v(" "),a("v-list-item-title",[e._v(" HOME ")])],1)],1),a("router-link",{attrs:{to:"/contact"}},[a("v-list-item",[a("v-icon",[e._v(" mdi-phone ")]),e._v(" "),a("v-list-item-title",[e._v(" CONTACT ")])],1)],1),a("router-link",{attrs:{to:"/faqs"}},[a("v-list-item",[a("v-icon",[e._v(" mdi-home ")]),e._v(" "),a("v-list-item-title",[e._v(" FAQ'S ")])],1)],1),a("router-link",{attrs:{to:"/profile"}},[a("v-list-item",[a("v-icon",[e._v(" mdi-account ")]),e._v(" "),a("v-list-item-title",[e._v(" PROFILE ")])],1)],1)],1)],1)],1)],1)},r=[],s=(a("4160"),a("4fad"),a("159b"),a("3835")),o=a("35ca"),i=a("3d20"),l=a.n(i),u={name:"NavBar",props:["name"],data:function(){return{drawer:!1,group:null}},mounted:function(){var e=this;o["a"].get_profile().then().catch((function(t){var a=t.response.data,n="";Object.entries(a).forEach((function(e){var t=Object(s["a"])(e,2),a=t[0],r=t[1];n+=a+": "+r+" \n "})),console.log(t.response.status),401==t.response.status?l.a.fire({icon:"error",title:"Error",text:"Session expired. Please log in again."}).then((function(){localStorage.removeItem("user"),e.$router.push("/")})):l.a.fire({icon:"error",title:"Error",text:n})}))},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},methods:{logout:function(){this.$store.dispatch("auth/logout")}},watch:{group:function(){this.drawer=!1}}},c=u,d=(a("34ba"),a("2877")),p=Object(d["a"])(c,n,r,!1,null,null,null);t["a"]=p.exports}}]);
//# sourceMappingURL=UpdateStore.2f7780bb.js.map