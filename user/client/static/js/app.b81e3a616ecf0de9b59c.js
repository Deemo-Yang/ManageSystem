webpackJsonp([29],{"L/dk":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=a("VU/8")(null,i,!1,function(t){a("yUZA")},null,null).exports,c=a("/ocq"),s={data:function(){return{projectname:"",plantype:"",contactperson:"",phone:"",contractno:"",contactphone:"",industrycategory:"",dates:"",otherattachment:"",mainattachment:[],projectleader:"",acceptanceno:"",assignedfunds:"",financialfunds:"",budget:"",leaderphone:"",companyname:"",id:this.$route.params.id,url1:""}},created:function(){this.getdata()},methods:{getdata:function(){var t=this;this.$api.get("/api/Scienceprojects/"+this.id,null,function(e){t.url1="http://192.168.1.117:3000"+e.attachment1,console.log(t.url1),t.projectname=e.projectname,t.plantype=e.plantype,t.contactperson=e.contactperson,t.phone=e.contactphone,t.contractno=e.contractno,t.contactphone=e.contactphone,t.industrycategory=e.industrycategory,t.dates=e.startdate+" 至 "+e.enddate,t.mainattachment.push(e.attachment1.split("/")[5]),t.projectleader=e.projectleader,t.acceptanceno=e.acceptanceno,t.assignedfunds=e.assignedfunds,t.financialfunds=e.financialfunds,t.budget=e.budget,t.leaderphone=e.leaderphone}),this.companyname=localStorage.getItem("companyname")},onreturn:function(){this.$router.go(-1)}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("el-button",{attrs:{icon:"el-icon-arrow-left",round:"",size:"mini"},on:{click:t.onreturn}})],1),t._v(" "),a("el-row",{staticStyle:{"margin-top":"20px"},attrs:{gutter:20}},[a("el-col",{attrs:{span:8,align:"center"}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",staticStyle:{"margin-bottom":"1px"},attrs:{slot:"header",align:"left"},slot:"header"},[t._v("\n                    项目名称\n                ")]),t._v(" "),a("div",{staticClass:"text item",attrs:{align:"center"}},[t._v("\n                    "+t._s(t.projectname)+"\n                ")])]),t._v(" "),a("br"),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",staticStyle:{"margin-bottom":"1px"},attrs:{slot:"header",align:"left"},slot:"header"},[t._v("\n                    合同编号\n                ")]),t._v(" "),a("div",{staticClass:"text item",attrs:{align:"center"}},[t._v("\n                    "+t._s(t.contractno)+"\n                ")])]),t._v(" "),a("br"),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",staticStyle:{"margin-bottom":"1px"},attrs:{slot:"header",align:"left"},slot:"header"},[t._v("\n                    承建单位\n                ")]),t._v(" "),a("div",{staticClass:"text item",attrs:{align:"center"}},[t._v("\n                    "+t._s(t.companyname)+"\n                ")])]),t._v(" "),a("br"),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",staticStyle:{"margin-bottom":"1px"},attrs:{slot:"header",align:"left"},slot:"header"},[t._v("\n                    单位电话\n                ")]),t._v(" "),a("div",{staticClass:"text item",attrs:{align:"center"}},[t._v("\n                    "+t._s(t.phone)+"\n                ")])]),t._v(" "),a("br"),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",staticStyle:{"margin-bottom":"1px"},attrs:{slot:"header",align:"left"},slot:"header"},[t._v("\n                    计划类别\n                ")]),t._v(" "),a("div",{staticClass:"text item",attrs:{align:"center"}},[t._v("\n                    "+t._s(t.plantype)+"\n                ")])]),t._v(" "),a("br"),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",staticStyle:{"margin-bottom":"1px"},attrs:{slot:"header",align:"left"},slot:"header"},[t._v("\n                    行业类别\n                ")]),t._v(" "),a("div",{staticClass:"text item",attrs:{align:"center"}},[t._v("\n                    "+t._s(t.industrycategory)+"\n                ")])]),t._v(" "),a("br")],1),t._v(" "),a("el-col",{attrs:{span:8,align:"center"}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",staticStyle:{"margin-bottom":"1px"},attrs:{slot:"header",align:"left"},slot:"header"},[t._v("\n                    起止时间\n                ")]),t._v(" "),a("div",{staticClass:"text item",attrs:{align:"center"}},[t._v("\n                    "+t._s(t.dates)+"\n                ")])]),t._v(" "),a("br"),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",staticStyle:{"margin-bottom":"1px"},attrs:{slot:"header",align:"left"},slot:"header"},[t._v("\n                    项目经费预算（万元）\n                ")]),t._v(" "),a("div",{staticClass:"text item",attrs:{align:"center"}},[t._v("\n                    "+t._s(t.budget)+"\n                ")])]),t._v(" "),a("br"),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",staticStyle:{"margin-bottom":"1px"},attrs:{slot:"header",align:"left"},slot:"header"},[t._v("\n                    申请财政资金（万元）\n                ")]),t._v(" "),a("div",{staticClass:"text item",attrs:{align:"center"}},[t._v("\n                    "+t._s(t.financialfunds)+"\n                ")])]),t._v(" "),a("br"),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",staticStyle:{"margin-bottom":"1px"},attrs:{slot:"header",align:"left"},slot:"header"},[t._v("\n                    已拨付资金（万元）\n                ")]),t._v(" "),a("div",{staticClass:"text item",attrs:{align:"center"}},[t._v("\n                    "+t._s(t.assignedfunds)+"\n                ")])]),t._v(" "),a("br"),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",staticStyle:{"margin-bottom":"1px"},attrs:{slot:"header",align:"left"},slot:"header"},[t._v("\n                    验收编号\n                ")]),t._v(" "),a("div",{staticClass:"text item",attrs:{align:"center"}},[t._v("\n                    "+t._s(t.acceptanceno)+"\n                ")])]),t._v(" "),a("br"),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",staticStyle:{"margin-bottom":"1px"},attrs:{slot:"header",align:"left"},slot:"header"},[t._v("\n                    负责人\n                ")]),t._v(" "),a("div",{staticClass:"text item",attrs:{align:"center"}},[t._v("\n                    "+t._s(t.projectleader)+"\n                ")])]),t._v(" "),a("br")],1),t._v(" "),a("el-col",{attrs:{span:8,align:"center"}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",staticStyle:{"margin-bottom":"1px"},attrs:{slot:"header",align:"left"},slot:"header"},[t._v("\n                    负责人电话\n                ")]),t._v(" "),a("div",{staticClass:"text item",attrs:{align:"center"}},[t._v("\n                    "+t._s(t.leaderphone)+"\n                ")])]),t._v(" "),a("br"),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",staticStyle:{"margin-bottom":"1px"},attrs:{slot:"header",align:"left"},slot:"header"},[t._v("\n                    负责人职称\n                ")]),t._v(" "),a("div",{staticClass:"text item",attrs:{align:"center"}},[t._v("\n                    {{}}\n                ")])]),t._v(" "),a("br"),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",staticStyle:{"margin-bottom":"1px"},attrs:{slot:"header",align:"left"},slot:"header"},[t._v("\n                    职称名称\n                ")]),t._v(" "),a("div",{staticClass:"text item",attrs:{align:"center"}},[t._v("\n                    {{}}\n                ")])]),t._v(" "),a("br"),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",staticStyle:{"margin-bottom":"1px"},attrs:{slot:"header",align:"left"},slot:"header"},[t._v("\n                    联系人\n                ")]),t._v(" "),a("div",{staticClass:"text item",attrs:{align:"center"}},[t._v("\n                    "+t._s(t.contactperson)+"\n                ")])]),t._v(" "),a("br"),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",staticStyle:{"margin-bottom":"1px"},attrs:{slot:"header",align:"left"},slot:"header"},[t._v("\n                    联系人电话\n                ")]),t._v(" "),a("div",{staticClass:"text item",attrs:{align:"center"}},[t._v("\n                    "+t._s(t.contactphone)+"\n                ")])]),t._v(" "),a("br")],1)],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",staticStyle:{"margin-bottom":"1px"},attrs:{slot:"header",align:"left"},slot:"header"},[t._v("\n                    必传附件\n                ")]),t._v(" "),t._l(t.mainattachment,function(e){return a("a",{staticClass:"text item",staticStyle:{"font-size":"15px",color:"#606266"},attrs:{href:t.url1}},[a("i",{staticClass:"el-icon-document"},[t._v(t._s(e))])])})],2),t._v(" "),a("br")],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",staticStyle:{"margin-bottom":"1px"},attrs:{slot:"header",align:"left"},slot:"header"},[t._v("\n                    其他附件\n                ")]),t._v(" "),a("div",{staticClass:"text item",attrs:{align:"center"}},[t._v("\n                    "+t._s(t.otherattachment)+"\n                ")])]),t._v(" "),a("br")],1)],1)],1)},staticRenderFns:[]};a("VU/8")(s,l,!1,function(t){a("L/dk")},"data-v-232412b0",null).exports;n.default.use(c.a);var o,d=new c.a({routes:[{path:"/",redirect:"/login"},{path:"/",component:function(t){return a.e(1).then(function(){var e=[a("MpTN")];t.apply(null,e)}.bind(this)).catch(a.oe)},meta:{title:"自述文件"},children:[{path:"/dashboard",component:function(t){return a.e(11).then(function(){var e=[a("a52u")];t.apply(null,e)}.bind(this)).catch(a.oe)},meta:{title:"知识产权补助资金项目"}},{path:"/table",component:function(t){return a.e(18).then(function(){var e=[a("8C4o")];t.apply(null,e)}.bind(this)).catch(a.oe)},meta:{title:"已申请项目管理"}},{path:"/tabs",component:function(t){return a.e(17).then(function(){var e=[a("kgBe")];t.apply(null,e)}.bind(this)).catch(a.oe)},meta:{title:"tab选项卡"}},{path:"/form",component:function(t){return a.e(27).then(function(){var e=[a("uuQS")];t.apply(null,e)}.bind(this)).catch(a.oe)},meta:{title:"项目申请提交"}},{path:"/form2",component:function(t){return a.e(26).then(function(){var e=[a("TQDf")];t.apply(null,e)}.bind(this)).catch(a.oe)},meta:{title:"项目申请提交"}},{path:"/file",component:function(t){return a.e(3).then(function(){var e=[a("gAlH")];t.apply(null,e)}.bind(this)).catch(a.oe)},meta:{title:"项目申报指南文件下载"}},{path:"/editor",component:function(t){return a.e(2).then(function(){var e=[a("ENMl")];t.apply(null,e)}.bind(this)).catch(a.oe)},meta:{title:"公司基本信息"}},{path:"/markdown",component:function(t){return a.e(14).then(function(){var e=[a("Uhiw")];t.apply(null,e)}.bind(this)).catch(a.oe)},meta:{title:"知识产权补助资金项目"}},{path:"/apply",component:function(t){return a.e(25).then(function(){var e=[a("IrRb")];t.apply(null,e)}.bind(this)).catch(a.oe)},meta:{title:"省市项目区级奖补资金项目"}},{path:"/fatable",component:function(t){return a.e(19).then(function(){var e=[a("VCTI")];t.apply(null,e)}.bind(this)).catch(a.oe)},meta:{title:"省市项目区级奖补资金项目"}},{path:"/pstable",component:function(t){return a.e(20).then(function(){var e=[a("XE7U")];t.apply(null,e)}.bind(this)).catch(a.oe)},meta:{title:"知识产权补助"}},{path:"/gcompany",component:function(t){return a.e(10).then(function(){var e=[a("f6FM")];t.apply(null,e)}.bind(this)).catch(a.oe)},meta:{title:"优秀企业表单"}},{path:"/gctable",component:function(t){return a.e(16).then(function(){var e=[a("Wtxq")];t.apply(null,e)}.bind(this)).catch(a.oe)},meta:{title:"优秀企业表单"}},{path:"/table1",component:function(t){return Promise.all([a.e(0),a.e(9)]).then(function(){var e=[a("qKJD")];t.apply(null,e)}.bind(this)).catch(a.oe)}},{path:"/table2",component:function(t){return Promise.all([a.e(0),a.e(21)]).then(function(){var e=[a("Ew8L")];t.apply(null,e)}.bind(this)).catch(a.oe)}},{path:"/table3",component:function(t){return Promise.all([a.e(0),a.e(8)]).then(function(){var e=[a("B27F")];t.apply(null,e)}.bind(this)).catch(a.oe)}},{path:"/table4",component:function(t){return Promise.all([a.e(0),a.e(7)]).then(function(){var e=[a("hKIF")];t.apply(null,e)}.bind(this)).catch(a.oe)}},{path:"/table5",component:function(t){return Promise.all([a.e(0),a.e(6)]).then(function(){var e=[a("ob8k")];t.apply(null,e)}.bind(this)).catch(a.oe)}},{path:"/permission",component:function(t){return a.e(22).then(function(){var e=[a("5jj7")];t.apply(null,e)}.bind(this)).catch(a.oe)},meta:{title:"权限测试",permission:!0}},{path:"/worker",component:function(t){return a.e(24).then(function(){var e=[a("uXp4")];t.apply(null,e)}.bind(this)).catch(a.oe)},meta:{title:"知识产权先进个人/优秀工作者认定"}},{path:"/psubsidy",component:function(t){return a.e(23).then(function(){var e=[a("iub0")];t.apply(null,e)}.bind(this)).catch(a.oe)},meta:{title:"知识产权补助"}},{path:"/gwtable",component:function(t){return a.e(15).then(function(){var e=[a("Ejt3")];t.apply(null,e)}.bind(this)).catch(a.oe)},meta:{title:"知识产权先进个人/优秀工作者认定"}}]},{path:"/login",component:function(t){return a.e(5).then(function(){var e=[a("GF4k")];t.apply(null,e)}.bind(this)).catch(a.oe)}},{path:"/404",component:function(t){return a.e(12).then(function(){var e=[a("3bH0")];t.apply(null,e)}.bind(this)).catch(a.oe)}},{path:"/403",component:function(t){return a.e(13).then(function(){var e=[a("KfZE")];t.apply(null,e)}.bind(this)).catch(a.oe)}},{path:"/register",component:function(t){return a.e(4).then(function(){var e=[a("eQO9")];t.apply(null,e)}.bind(this)).catch(a.oe)}},{path:"*",redirect:"/404"}]}),u=a("zL8q"),p=a.n(u),h=a("//Fk"),v=a.n(h),f=a("mvHQ"),m=a.n(f),_=a("mtWM"),b=a.n(_),g="http://132.232.140.241:3000";function x(t){return{}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function y(t,e,a,n,i){a&&(a=function t(e){for(var a in e)null===e[a]&&delete e[a],"string"===x(e[a])?e[a]=e[a].trim():"object"===x(e[a])?e[a]=t(e[a]):"array"===x(e[a])&&(e[a]=t(e[a]));return e}(a)),b()({method:t,url:e,data:"POST"===t||"PATCH"===t?a:null,params:"GET"===t||"DELETE"===t?a:null,baseURL:g,withCredentials:!1}).then(function(t){var e=t.data;200===t.status||204===t.status?(console.log(e),n(e)):window.alert("error: code:"+t.status+m()(t.data))}).catch(function(t){t.response})}b.a.interceptors.request.use(function(t){return o=u.Loading.service({fullscreen:!0,text:"加载中，请稍候。。。"}),console.log(o),t},function(t){return Object(u.MessageBox)({title:"错误",message:"加载超时",callback:function(t){o.close()}}),v.a.reject(t)}),b.a.interceptors.response.use(function(t){return o.close(),t},function(t){return o.close(),v.a.reject(t)});var C={get:function(t,e,a,n){return y("GET",t,e,a)},post:function(t,e,a,n){return y("POST",t,e,a)},patch:function(t,e,a,n){return y("PATCH",t,e,a)},delete:function(t,e,a,n){return y("DELETE",t,e,a)}},S=(a("tvR6"),a("j1ja"),a("3tBl")),j=a.n(S),w=(a("YL4s"),a("NC6I")),E=a.n(w);a("hKoQ").polyfill(),n.default.use(p.a,{size:"small"}),n.default.prototype.$api=C,n.default.prototype.$md5=E.a,n.default.prototype.$axios=b.a,n.default.use(j.a,{background:{color:"#000"},animate:{duration:600,delay:500},loading:{image:""},cursor:"pointer",clickMethod:"doubleClick"}),new n.default({router:d,render:function(t){return t(r)}}).$mount("#app")},YL4s:function(t,e){},tvR6:function(t,e){},yUZA:function(t,e){}},["NHnr"]);