(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ResetPassword"],{"0813":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-container",{staticClass:"text-center"},[r("img",{attrs:{src:s("b395"),alt:"",width:"150px"}}),r("h2",[e._v(" TROD APP ")]),r("h4",[e._v("correo: support@trodapp.com ")]),r("h4",[e._v("número: +1 (888) 2206679 ")])]),r("v-container",{staticClass:"text-center"},[r("v-card",{staticClass:"ma-auto",attrs:{flat:""}},[r("v-card-title",[e._v(" Enter your new password. ")]),r("v-text-field",{staticClass:"ma-2",attrs:{placeholder:"*Password",required:"",outlined:"",dense:"",type:"password"},model:{value:e.user.new_password,callback:function(t){e.$set(e.user,"new_password",t)},expression:"user.new_password"}}),r("v-text-field",{staticClass:"ma-2",attrs:{placeholder:"*Confirm password",required:"",outlined:"",dense:"",type:"password"},model:{value:e.user.confirm_password,callback:function(t){e.$set(e.user,"confirm_password",t)},expression:"user.confirm_password"}}),r("v-divider"),r("v-btn",{staticClass:"ma-2",attrs:{color:"#E47911",dark:"",large:"",loading:e.loading},on:{click:e.send_password}},[e._v(" Send ")])],1)],1)],1)},n=[],o=(s("4160"),s("4fad"),s("159b"),s("3835")),a=s("5d02"),i=s("3d20"),c=s.n(i),d={data:function(){return{loading:!1,user:{unique_id:"",new_password:"",confirm_password:""}}},computed:{idToken:function(){return this.$route.params.id}},mounted:function(){var e=this;a["a"].check_token(this.idToken).then((function(t){e.user.unique_id=t.user})).catch((function(t){e.loading=!1;var s=t.response.data,r="";Object.entries(s).forEach((function(e){var t=Object(o["a"])(e,2),s=t[0],n=t[1];r+=s+": "+n+" \n "})),c.a.fire({icon:"error",title:"Error",text:r}).then((function(){e.$router.push("/")}))}))},methods:{send_password:function(){var e=this;this.loading=!0,a["a"].change_password(this.user).then((function(t){console.log(t),c.a.fire({icon:"success",title:"Success",text:"The new password has been sent."}).then((function(){e.loading=!1,e.$router.go(-1)}))})).catch((function(t){e.loading=!1;var s=t.response.data,r="";Object.entries(s).forEach((function(e){var t=Object(o["a"])(e,2),s=t[0],n=t[1];r+=s+": "+n+" \n "})),c.a.fire({icon:"error",title:"Error",text:r})}))}}},u=d,l=s("2877"),p=Object(l["a"])(u,r,n,!1,null,null,null);t["default"]=p.exports},b395:function(e,t,s){e.exports=s.p+"img/logo200x200.6d7e2c47.png"}}]);
//# sourceMappingURL=ResetPassword.de04f7be.js.map