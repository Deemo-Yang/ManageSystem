webpackJsonp([5],{"8MqI":function(t,l,e){"use strict";(function(t){var o=e("7t+N"),r=(e.n(o),e("zmOW"));e.n(r);l.a={data:function(){return{rooturl:"http://132.232.140.241:3000",form:{id:"",projectname:"",companytype:"",plantype:"",industrytype:"",projecttype:"",secretlevel:"",startdate:"",enddate:"",budget:"",nationfunds:"",provincefunds:"",cityfunds:"",districtfunds:"",responseperson:"",contractperson:"",telephone:"",phone:"",other:"",ts:"",reportdate:"",status:""},appendix:{id:"",scienceprojectid:"",name:"",type:"",url:""}}},created:function(){this.getdata()},methods:{download:function(){t(document).ready(function(t){t("#page-content").wordExport("省市项目区级配套补助资金表格")})},onreturn:function(){this.$router.go(-1)},getdata:function(){var t=this;this.$api.get("api/Provinceassistancefunds/"+this.$route.query.proid,null,function(l){t.form=l,t.$api.get("api/Provinceassistancefundsstorages?filter="+encodeURI('{"where":{"provinceassistancefundsid":{"like":"%'+l.id+'%"}}}'),null,function(l){t.appendix=l})})}}}}).call(l,e("7t+N"))},kb61:function(t,l){},ob8k:function(t,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var o=e("8MqI"),r={render:function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("div",{staticStyle:{"margin-top":"20px"},attrs:{id:"app"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"handle-box"},[e("div",[e("el-button",{attrs:{icon:"el-icon-arrow-left",round:"",size:"mini"},on:{click:t.onreturn}}),t._v(" "),e("el-button",{staticStyle:{float:"right"},on:{click:t.download}},[t._v("下载文件")])],1),t._v(" "),e("div",{staticStyle:{"margin-top":"20px"},attrs:{id:"page-content"}},[e("h2",{staticStyle:{"text-align":"center"}},[t._v("省市项目区级配套补助资金表格")]),t._v(" "),e("table",{staticStyle:{border:"1px solid black","border-collapse":"collapse","margin-bottom":"0px"}},[e("tbody",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"20%"}},[t._v("项目名称：")]),t._v(" "),e("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"30%"}},[t._v(t._s(t.form.projectname))]),t._v(" "),e("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"10%"}},[t._v("单位类别：")]),t._v(" "),e("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"40%"}},[t._v(t._s(t.form.companytype))])]),t._v(" "),e("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"20%"}},[t._v("计划类别：")]),t._v(" "),e("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"30%"}},[t._v(t._s(t.form.plantype))]),t._v(" "),e("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"20%"}},[t._v("行业类别：")]),t._v(" "),e("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"30%"}},[t._v(t._s(t.form.industrytype))])]),t._v(" "),e("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"20%"}},[t._v("项目类别：")]),t._v(" "),e("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"30%"}},[t._v(t._s(t.form.projecttype))]),t._v(" "),e("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"20%"}},[t._v("项目密级：")]),t._v(" "),e("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"30%"}},[t._v(t._s(t.form.secretlevel))])]),t._v(" "),e("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"20%"}},[t._v("项目开始日期：")]),t._v(" "),e("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"30%"}},[t._v(t._s(t.form.startdate))]),t._v(" "),e("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"20%"}},[t._v("项目截至日期：")]),t._v(" "),e("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"30%"}},[t._v(t._s(t.form.enddate))])]),t._v(" "),e("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[t._v("项目总经费预算（万元）")]),t._v(" "),e("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{colspan:"3"}},[t._v(t._s(t.form.budget))])]),t._v(" "),e("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[t._v("项目获得的国家级补助资金（万元）：")]),t._v(" "),e("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{colspan:"3"}},[t._v(t._s(t.form.nationfunds))])]),t._v(" "),e("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[t._v("项目获得的省级补助资金（万元）：")]),t._v(" "),e("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{colspan:"3"}},[t._v(t._s(t.form.provincefunds))])]),t._v(" "),e("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[t._v("项目获得的市级补助资金（万元）：")]),t._v(" "),e("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{colspan:"3"}},[t._v(t._s(t.form.cityfunds))])]),t._v(" "),e("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[t._v("项目申请区级补助资金（万元）：")]),t._v(" "),e("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{colspan:"3"}},[t._v(t._s(t.form.districtfunds))])]),t._v(" "),e("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[t._v("项目负责人：")]),t._v(" "),e("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[t._v(t._s(t.form.responseperson))]),t._v(" "),e("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[t._v("项目联系人：")]),t._v(" "),e("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[t._v(t._s(t.form.contractperson))])]),t._v(" "),e("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[t._v("联系座机：")]),t._v(" "),e("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[t._v(t._s(t.form.telephone))]),t._v(" "),e("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[t._v(" 联系手机：")]),t._v(" "),e("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[t._v(t._s(t.form.phone))])]),t._v(" "),e("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[t._v("备注：")]),t._v(" "),e("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{colspan:"3"}},[t._v(t._s(t.form.other))])])])])]),t._v(" "),e("h2",{staticStyle:{"text-align":"left"}},[t._v("四、附件")]),t._v(" "),e("table",{staticClass:"table table-bordered",staticStyle:{"margin-bottom":"0px",border:"1px solid black","border-collapse":"collapse","font-size":"16px",width:"100%"}},[e("tbody",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse","text-align":"center","vertical-align":"middle"},attrs:{width:"20%"}},[t._v("附件")]),t._v(" "),e("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"90%"}},[e("ul",{staticStyle:{"text-align":"center"}},t._l(t.appendix,function(l){return e("span",{key:l.id,staticStyle:{"text-align":"center"}},[e("a",{attrs:{href:t.rooturl+l.url}},[t._v(t._s(l.name.slice(14))),e("br")])])}))])])])])])])])},staticRenderFns:[]};var s=function(t){e("kb61")},a=e("VU/8")(o.a,r,!1,s,null,null);l.default=a.exports}});