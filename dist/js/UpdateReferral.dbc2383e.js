(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["UpdateReferral"],{1182:function(e,t,r){},"2d61":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("nav-bar",{attrs:{name:e.title}}),r("v-card",{staticClass:"ma-1",attrs:{cols:"12"}},[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-select",{staticClass:"mb-n5",attrs:{items:e.stores,label:"*Store owner",outlined:"",dense:""},model:{value:e.referral.store_owner,callback:function(t){e.$set(e.referral,"store_owner",t)},expression:"referral.store_owner"}})],1),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{staticClass:"mb-n5",attrs:{outlined:"",dense:"",label:"*Name",required:""},model:{value:e.referral.name,callback:function(t){e.$set(e.referral,"name",t)},expression:"referral.name"}})],1),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{staticClass:"mb-n5",attrs:{outlined:"",dense:"",label:"*Destination email",required:""},model:{value:e.referral.destination_email,callback:function(t){e.$set(e.referral,"destination_email",t)},expression:"referral.destination_email"}})],1),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{staticClass:"mb-n5",attrs:{outlined:"",dense:"",label:"*Phone number",required:""},model:{value:e.referral.phone_number,callback:function(t){e.$set(e.referral,"phone_number",t)},expression:"referral.phone_number"}})],1),r("v-col",[r("v-btn",{staticClass:"mx-4 my-2",attrs:{color:"#989898",dark:""},on:{click:function(t){return e.$router.go(-1)}}},[e._v(" GO BACK ")]),r("v-btn",{staticClass:"mx-4 my-2",attrs:{color:"#E47911",dark:"",loading:e.loading},on:{click:e.update}},[e._v(" SAVE ")])],1)],1)],1)],1)],1)},a=[],o=(r("4160"),r("b0c0"),r("4fad"),r("159b"),r("3835")),i=r("d000"),s=r("65b4"),u=r("3d20"),l=r.n(u),c={components:{NavBar:i["a"]},data:function(){return{title:"UPDATE REFERRAL",loading:!1,referral:{store_owner:"",name:"",destination_email:"",phone_number:""},stores:[]}},computed:{unique_id:function(){return this.$route.params.id}},mounted:function(){var e=this;s["a"].get(this.unique_id).then((function(t){console.log(t),e.referral.store_owner=parseInt(t.store_owner),e.referral.name=t.name,e.referral.destination_email=t.destination_email,e.referral.phone_number=t.phone_number})).catch((function(e){var t=e.response.data,r="";Object.entries(t).forEach((function(e){var t=Object(o["a"])(e,2),n=t[0],a=t[1];r+=n+": "+a+" \n "})),l.a.fire({icon:"error",title:"Error",text:r})})),s["a"].list_owners().then((function(t){for(var r=0;r<t.length;r++)e.stores.push({text:t[r].store.name+" - "+t[r].owner.username,value:t[r].id})})).catch((function(e){var t=e.response.data,r="";Object.entries(t).forEach((function(e){var t=Object(o["a"])(e,2),n=t[0],a=t[1];r+=n+": "+a+" \n "})),l.a.fire({icon:"error",title:"Error",text:r})}))},methods:{update:function(){var e=this;s["a"].update(this.referral,this.unique_id).then((function(t){l.a.fire({icon:"success",title:"Success",text:"The referred was successfully modified."}).then((function(){e.$router.go(-1)}))})).catch((function(e){var t=e.response.data,r="";Object.entries(t).forEach((function(e){var t=Object(o["a"])(e,2),n=t[0],a=t[1];r+=n+": "+a+" \n "})),l.a.fire({icon:"error",title:"Error",text:r})}))}}},d=c,f=r("2877"),m=Object(f["a"])(d,n,a,!1,null,null,null);t["default"]=m.exports},"34ba":function(e,t,r){"use strict";r("1182")},"35ca":function(e,t,r){"use strict";var n=r("d4ec"),a=r("bee2"),o=r("ab58"),i=(r("3d20"),function(){function e(){Object(n["a"])(this,e)}return Object(a["a"])(e,[{key:"list_admin",value:function(){return o["a"].get("admin/users/").then((function(e){return e.data}))}},{key:"delete",value:function(e){return o["a"].delete("admin/users/"+e+"/").then((function(e){return e.data}))}},{key:"register",value:function(e){var t=new FormData;return t.append("email",e.email),t.append("username",e.username),t.append("img",e.img),t.append("is_staff",e.staff),t.append("phone_number",e.phone),t.append("password",e.password),t.append("confirm_password",e.confirm_password),t.append("first_name",e.firstname),t.append("last_name",e.lastname),o["a"].post("admin/users/",t,{headers:{"content-type":"multipart/form-data"}}).then((function(e){return e.data}))}},{key:"update",value:function(e,t){var r=new FormData;return r.append("email",e.email),r.append("username",e.username),r.append("is_staff",e.staff),e.img&&r.append("img",e.img),r.append("phone_number",e.phone),r.append("first_name",e.firstname),r.append("last_name",e.lastname),o["a"].put("user/"+t+"/update_user/",r,{headers:{"content-type":"multipart/form-data"}}).then((function(e){return e.data}))}},{key:"get",value:function(e){return o["a"].get("admin/users/"+e+"/").then((function(e){return e.data}))}},{key:"get_profile",value:function(){return o["a"].get("user/profile/").then((function(e){return e.data}))}},{key:"update_profile",value:function(e,t){var r=new FormData;return r.append("email",e.email),r.append("username",e.username),r.append("is_staff",!1),e.img&&r.append("img",e.img),r.append("phone_number",e.phone),r.append("first_name",e.firstname),r.append("last_name",e.lastname),o["a"].put("user/"+t+"/update_user/",r,{headers:{"content-type":"multipart/form-data"}}).then((function(e){return e.data}))}}]),e}());t["a"]=new i},"65b4":function(e,t,r){"use strict";r("b0c0");var n=r("d4ec"),a=r("bee2"),o=r("ab58"),i=(r("3d20"),function(){function e(){Object(n["a"])(this,e)}return Object(a["a"])(e,[{key:"list_admin",value:function(){return o["a"].get("referral/all/").then((function(e){return e.data}))}},{key:"list_referrals_store",value:function(e){return o["a"].get("referral/"+e+"/stores/").then((function(e){return e.data}))}},{key:"list_user_referrals",value:function(e){return o["a"].get("referral/"+e+"/user_referrals/").then((function(e){return e.data}))}},{key:"add_referral",value:function(e){return o["a"].post("referral/",{store_owner:e.store_owner,name:e.name,destination_email:e.destination_email,phone_number:e.phone_number}).then((function(e){return e.data}))}},{key:"list_owners",value:function(){return o["a"].get("stores_owner/").then((function(e){return e.data}))}},{key:"delete_referrals",value:function(e){return o["a"].post("referral/remove_referrals/",{id_referrals:e})}},{key:"update",value:function(e,t){return o["a"].put("referral/"+t+"/",{store_owner:e.store_owner,name:e.name,destination_email:e.destination_email,phone_number:e.phone_number}).then((function(e){return e.data}))}},{key:"get",value:function(e){return o["a"].get("referral/"+e+"/").then((function(e){return e.data}))}}]),e}());t["a"]=new i},d000:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-toolbar",{attrs:{dense:"",color:"#000",dark:""}},[r("v-btn",{attrs:{icon:""}},[r("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}})],1),r("v-toolbar-title",[e._v(e._s(e.name))]),r("v-spacer"),r("v-btn",{attrs:{icon:""},on:{click:function(t){return e.logout()}}},[r("v-icon",[e._v(" mdi-logout ")])],1)],1),r("v-navigation-drawer",{attrs:{absolute:"",temporary:"",color:"#000",dark:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("v-list",{attrs:{nav:"",dense:""}},[r("v-list-item-group",{attrs:{"active-class":"gray--text text--accent-4",dark:""},model:{value:e.group,callback:function(t){e.group=t},expression:"group"}},[r("router-link",{attrs:{to:"/dashboard"}},[r("v-list-item",[r("v-icon",[e._v(" mdi-home ")]),e._v(" "),r("v-list-item-title",[e._v(" HOME ")])],1)],1),r("router-link",{attrs:{to:"/contact"}},[r("v-list-item",[r("v-icon",[e._v(" mdi-phone ")]),e._v(" "),r("v-list-item-title",[e._v(" CONTACT ")])],1)],1),r("router-link",{attrs:{to:"/faqs"}},[r("v-list-item",[r("v-icon",[e._v(" mdi-home ")]),e._v(" "),r("v-list-item-title",[e._v(" FAQ'S ")])],1)],1),r("router-link",{attrs:{to:"/profile"}},[r("v-list-item",[r("v-icon",[e._v(" mdi-account ")]),e._v(" "),r("v-list-item-title",[e._v(" PROFILE ")])],1)],1)],1)],1)],1)],1)},a=[],o=(r("4160"),r("4fad"),r("159b"),r("3835")),i=r("35ca"),s=r("3d20"),u=r.n(s),l={name:"NavBar",props:["name"],data:function(){return{drawer:!1,group:null}},mounted:function(){var e=this;i["a"].get_profile().then().catch((function(t){var r=t.response.data,n="";Object.entries(r).forEach((function(e){var t=Object(o["a"])(e,2),r=t[0],a=t[1];n+=r+": "+a+" \n "})),console.log(t.response.status),401==t.response.status?u.a.fire({icon:"error",title:"Error",text:"Session expired. Please log in again."}).then((function(){localStorage.removeItem("user"),e.$router.push("/")})):u.a.fire({icon:"error",title:"Error",text:n})}))},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},methods:{logout:function(){this.$store.dispatch("auth/logout")}},watch:{group:function(){this.drawer=!1}}},c=l,d=(r("34ba"),r("2877")),f=Object(d["a"])(c,n,a,!1,null,null,null);t["a"]=f.exports}}]);
//# sourceMappingURL=UpdateReferral.dbc2383e.js.map