(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Sales"],{"00dd":function(t,e,a){"use strict";var n=a("d4ec"),o=a("bee2"),r=a("ab58"),s=a("3d20"),i=a.n(s),l=function(){function t(){Object(n["a"])(this,t)}return Object(o["a"])(t,[{key:"general_store",value:function(t){return r["a"].get("sales/"+t+"/general/").then((function(t){return t.data})).catch((function(t){i.a.fire({icon:"error",title:"Error",text:t.response.data})}))}},{key:"general_admin",value:function(){return r["a"].get("admin/sales/general/").then((function(t){return t.data})).catch((function(t){i.a.fire({icon:"error",title:"Error",text:t.response.data})}))}},{key:"current_month",value:function(){return r["a"].get("admin/sales/current_month/").then((function(t){return t.data})).catch((function(t){i.a.fire({icon:"error",title:"Error",text:t.response.data})}))}},{key:"last_month",value:function(){return r["a"].get("admin/sales/last_month/").then((function(t){return t.data})).catch((function(t){i.a.fire({icon:"error",title:"Error",text:t.response.data})}))}},{key:"three_months",value:function(){return r["a"].get("admin/sales/three_months/").then((function(t){return t.data})).catch((function(t){i.a.fire({icon:"error",title:"Error",text:t.response.data})}))}},{key:"add_sales",value:function(t){var e=new FormData;return e.append("file",t),r["a"].post("admin/sales/",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){return t.data})).catch((function(t){i.a.fire({icon:"error",title:"Error",text:t.response.data["file"]})}))}},{key:"delete_stores",value:function(t){return r["a"].post("admin/stores/remove_stores/",{id_stores:t}).then((function(t){return t.data})).catch((function(t){i.a.fire({icon:"error",title:"Error",text:t.response.data})}))}},{key:"export_stores",value:function(t){return r["a"].post("admin/stores/export_stores/",{id_stores:t}).then((function(t){return t.data})).catch((function(t){i.a.fire({icon:"error",title:"Error",text:t.response.data})}))}},{key:"add_walmart",value:function(t){return r["a"].post("walmart/",{store:t.store,walmart_username:t.walmart_username,walmart_password:t.walmart_password,last_4_digits_of_the_card:t.card,CVV:t.CVV,month:t.month,year:t.year}).then((function(t){return t.data})).catch((function(t){i.a.fire({icon:"error",title:"Error",text:t.response.data})}))}},{key:"update_walmart",value:function(t,e){return r["a"].put("walmart/"+e+"/",{store:t.store,walmart_username:t.username,walmart_password:t.password,last_4_digits_of_the_card:t.card,CVV:t.CVV,month:t.month,year:t.year}).then((function(t){return t.data})).catch((function(t){i.a.fire({icon:"error",title:"Error",text:t.response.data})}))}}]),t}();e["a"]=new l},1148:function(t,e,a){"use strict";var n=a("a691"),o=a("1d80");t.exports="".repeat||function(t){var e=String(o(this)),a="",r=n(t);if(r<0||r==1/0)throw RangeError("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(e+=e))1&r&&(a+=e);return a}},1182:function(t,e,a){},"1b83":function(t,e,a){},"34ba":function(t,e,a){"use strict";a("1182")},"408a":function(t,e,a){var n=a("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=n(t))throw TypeError("Incorrect invocation");return+t}},"4d8a":function(t,e,a){"use strict";a("1b83")},af7c:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav-bar",{attrs:{name:t.title}}),a("v-container",{staticClass:"text-center"},[a("router-link",{attrs:{to:"/addsale"}},[t.isStaff?a("v-btn",{attrs:{color:"#E47911",large:"",height:"40px",dark:""}},[a("v-icon",{attrs:{left:"",dark:""}},[t._v(" mdi-plus ")]),t._v(" Add a sale register ")],1):t._e()],1)],1),a("v-container",{staticClass:"text-center"},[a("v-card",{staticClass:"ma-auto",attrs:{width:"90%",outlined:""}},[a("br"),a("v-card",{staticClass:"ma-auto",attrs:{width:"75%",tile:""}},[a("p",{staticClass:"font-weight-bold text-left px-3 py-1"},[t._v("General sales")]),a("v-divider"),a("v-expansion-panels",{attrs:{focusable:""}},t._l(t.sales,(function(e,n){return a("v-expansion-panel",{key:n},[a("v-expansion-panel-header",{staticClass:"font-weight-light text-left px-2"},[t._v(" "+t._s(e.name)+" ")]),"Current sales"!==e.name?a("v-expansion-panel-content",[a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("tbody",[a("tr",[a("td",[t._v(t._s(e.total)+" ")]),a("td",[t._v("$ "+t._s(e.amount)+" ")])])])]},proxy:!0}],null,!0)})],1):a("v-expansion-panel-content",[a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("tbody",[a("tr",[a("td",[t._v(t._s(e.total_day)+" ")]),a("td",[t._v("$ "+t._s(e.amount_day)+" ")])]),a("tr",[a("td",[t._v(t._s(e.total)+" ")]),a("td",[t._v("$ "+t._s(e.amount)+" ")])])])]},proxy:!0}],null,!0)})],1)],1)})),1)],1),a("br"),t.isStaff?a("v-card",{staticClass:"ma-auto",attrs:{width:"75%",tile:""}},[a("p",{staticClass:"font-weight-bold text-left px-3 py-1"},[t._v("Total sold by store")]),a("v-divider"),a("v-expansion-panels",{attrs:{focusable:""}},t._l(t.stores,(function(e,n){return a("v-expansion-panel",{key:n,on:{click:function(e){return t.loadDataSales(n)}}},[a("v-expansion-panel-header",{staticClass:"font-weight-light text-left px-2"},[t._v(" "+t._s(e.name1)+" ")]),a("v-expansion-panel-content",[a("v-card",[a("v-card-title",[a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("v-data-table",{attrs:{headers:t.headers,search:t.search,items:t.items,loading:t.loading,"loading-text":"Loading... Please wait","hide-default-footer":"",page:t.page,"items-per-page":t.itemsPerPage},on:{"update:page":function(e){t.page=e},"page-count":function(e){t.pageCount=e}},scopedSlots:t._u([{key:"item.unique_id",fn:function(e){var n=e.item;return[a("router-link",{attrs:{to:t.getLink(n.unique_id)}},[t._v(" View "),a("v-icon",{attrs:{color:"#E47911"}},[t._v(" mdi-eye ")])],1)]}}],null,!0)}),a("v-pagination",{attrs:{length:t.pageCount},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1),a("br"),a("p",{staticClass:"font-weight-bold text-center py-2"},[t._v("Total sales: $"+t._s(e.total1))])],1)],1)})),1)],1):t._e(),a("br"),a("p",{staticClass:"font-weight-bold text-center py-2"},[t._v("Total sales: $"+t._s(t.amount_total))])],1)],1),a("footer-nav")],1)},o=[],r=(a("b680"),a("d000")),s=a("fd2d"),i=a("00dd"),l={components:{NavBar:r["a"],FooterNav:s["a"]},data:function(){return{title:"SALES",amount_total:0,load:!1,loading:!0,page:1,pageCount:0,itemsPerPage:5,sales:[{name:"Current sales",total_day:"Total Current Day Sales",amount_day:0,total:"Total Current Month Sales",amount:0},{name:"Last month sales",total:"Total Last Month Sales",amount:0},{name:"Past 3 month sales",total:"Total Past 3 Months Sales",amount:0}],stores:[{method:"loadCurrent()",name1:"Current month",total1:0},{method:"loadCurrent()",name1:"Last month",total1:0},{method:"loadCurrent()",name1:"Past 3 months",total1:0}],items:[],search:"",headers:[{text:"Store",value:"name"},{text:"Total sold",value:"total_sold"},{text:"Actions",value:"unique_id",sortable:!1,search:!1}]}},computed:{isStaff:function(){return!!this.$store.state.auth.user.is_staff},idStore:function(){if(!this.isStaff)return this.$store.state.auth.store_user.unique_id}},mounted:function(){var t=this;this.isStaff?i["a"].general_admin().then((function(e){t.sales[0].amount_day=parseFloat(e.total_current_day_sales).toFixed(2),t.sales[0].amount=parseFloat(e.total_current_sales).toFixed(2),t.sales[1].amount=parseFloat(e.total_last_month).toFixed(2),t.sales[2].amount=parseFloat(e.total_three_months).toFixed(2),t.amount_total=parseFloat(e.total_sales).toFixed(2)})):i["a"].general_store(this.idStore).then((function(e){t.sales[0].amount_day=parseFloat(e.total_current_day_sales).toFixed(2),t.sales[0].amount=parseFloat(e.total_current_sales).toFixed(2),t.sales[1].amount=parseFloat(e.total_last_month_sales).toFixed(2),t.sales[2].amount=parseFloat(e.total_three_months_before_sales).toFixed(2),t.amount_total=parseFloat(e.total_sales).toFixed(2)}))},methods:{getLink:function(t){return console.log(t),"/viewstore"},loadDataSales:function(t){var e=this;0==t?(this.loading=!0,i["a"].current_month().then((function(t){e.loading=!1,e.items=t.current_month,e.stores[0].total1=parseFloat(t.total_current_month).toFixed(2)}))):1==t?(this.loading=!0,i["a"].last_month().then((function(t){e.loading=!1,e.items=t.current_month,e.stores[1].total1=parseFloat(t.total_last_month).toFixed(2)}))):2==t&&(this.loading=!0,i["a"].three_months().then((function(t){e.loading=!1,e.items=t.current_month,e.stores[2].total1=parseFloat(t.total_three_months).toFixed(2)})))}}},u=l,c=(a("4d8a"),a("2877")),d=Object(c["a"])(u,n,o,!1,null,null,null);e["default"]=d.exports},b680:function(t,e,a){"use strict";var n=a("23e7"),o=a("a691"),r=a("408a"),s=a("1148"),i=a("d039"),l=1..toFixed,u=Math.floor,c=function(t,e,a){return 0===e?a:e%2===1?c(t,e-1,a*t):c(t*t,e/2,a)},d=function(t){var e=0,a=t;while(a>=4096)e+=12,a/=4096;while(a>=2)e+=1,a/=2;return e},f=l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!i((function(){l.call({})}));n({target:"Number",proto:!0,forced:f},{toFixed:function(t){var e,a,n,i,l=r(this),f=o(t),m=[0,0,0,0,0,0],h="",p="0",_=function(t,e){var a=-1,n=e;while(++a<6)n+=t*m[a],m[a]=n%1e7,n=u(n/1e7)},v=function(t){var e=6,a=0;while(--e>=0)a+=m[e],m[e]=u(a/t),a=a%t*1e7},g=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==m[t]){var a=String(m[t]);e=""===e?a:e+s.call("0",7-a.length)+a}return e};if(f<0||f>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(h="-",l=-l),l>1e-21)if(e=d(l*c(2,69,1))-69,a=e<0?l*c(2,-e,1):l/c(2,e,1),a*=4503599627370496,e=52-e,e>0){_(0,a),n=f;while(n>=7)_(1e7,0),n-=7;_(c(10,n,1),0),n=e-1;while(n>=23)v(1<<23),n-=23;v(1<<n),_(1,1),v(2),p=g()}else _(0,a),_(1<<-e,0),p=g()+s.call("0",f);return f>0?(i=p.length,p=h+(i<=f?"0."+s.call("0",f-i)+p:p.slice(0,i-f)+"."+p.slice(i-f))):p=h+p,p}})},d000:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-toolbar",{attrs:{dense:"",color:"#000",dark:""}},[a("v-btn",{attrs:{icon:""}},[a("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}})],1),a("v-toolbar-title",[t._v(t._s(t.name))]),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.logout()}}},[a("v-icon",[t._v(" mdi-logout ")])],1)],1),a("v-navigation-drawer",{attrs:{absolute:"",temporary:"",color:"#000",dark:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{nav:"",dense:""}},[a("v-list-item-group",{attrs:{"active-class":"gray--text text--accent-4",dark:""},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},[a("router-link",{attrs:{to:"/dashboard"}},[a("v-list-item",[a("v-icon",[t._v(" mdi-home ")]),t._v(" "),a("v-list-item-title",[t._v(" HOME ")])],1)],1),a("router-link",{attrs:{to:"/contact"}},[a("v-list-item",[a("v-icon",[t._v(" mdi-phone ")]),t._v(" "),a("v-list-item-title",[t._v(" CONTACT ")])],1)],1),a("router-link",{attrs:{to:"/faqs"}},[a("v-list-item",[a("v-icon",[t._v(" mdi-home ")]),t._v(" "),a("v-list-item-title",[t._v(" FAQ'S ")])],1)],1),a("router-link",{attrs:{to:"/profile"}},[a("v-list-item",[a("v-icon",[t._v(" mdi-account ")]),t._v(" "),a("v-list-item-title",[t._v(" PROFILE ")])],1)],1)],1)],1)],1)],1)},o=[],r={name:"NavBar",props:["name"],data:function(){return{drawer:!1,group:null}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},created:function(){this.loggedIn||this.$router.push("/")},methods:{logout:function(){this.$store.dispatch("auth/logout")}},watch:{group:function(){this.drawer=!1}}},s=r,i=(a("34ba"),a("2877")),l=Object(i["a"])(s,n,o,!1,null,null,null);e["a"]=l.exports},fd2d:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",[a("v-card",{staticClass:"text-center",attrs:{flat:"",tile:"",width:"100%"}},[t.isStaff?a("v-card-text",t._l(t.modules,(function(e,n){return a("router-link",{key:n,attrs:{to:e.to}},[a("v-btn",{staticClass:"mx-4",attrs:{icon:""}},[a("v-icon",{attrs:{size:"24px"}},[t._v(" "+t._s(e.icon)+" ")])],1)],1)})),1):a("v-card-text",t._l(t.items,(function(e,n){return a("router-link",{key:n,attrs:{to:e.to}},[a("v-btn",{staticClass:"mx-4",attrs:{icon:""}},[a("v-icon",{attrs:{size:"24px"}},[t._v(" "+t._s(e.icon)+" ")])],1)],1)})),1)],1)],1)},o=[],r={name:"FooterNav",data:function(){return{modules:[{icon:"mdi-currency-usd",to:"/sales"},{icon:"mdi-shopping",to:"/stores"},{icon:"mdi-account-supervisor",to:"/users"},{icon:"mdi-credit-card-outline",to:"/payments"},{icon:"mdi-account-group",to:"/referrals"},{icon:"mdi-file-document-outline",to:"/invoices"}],items:[{icon:"mdi-currency-usd",to:"/sales"},{icon:"mdi-shopping",to:"/viewstore"},{icon:"mdi-credit-card-outline",to:"/payments"},{icon:"mdi-account-group",to:"/referrals"},{icon:"mdi-file-document-outline",to:"/invoices"}]}},computed:{isStaff:function(){return!!this.$store.state.auth.user.is_staff}}},s=r,i=a("2877"),l=Object(i["a"])(s,n,o,!1,null,null,null);e["a"]=l.exports}}]);
//# sourceMappingURL=Sales.5abd83ec.js.map