webpackJsonp([24],{IrRb:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={data:function(){return{projecttypes:[],file1:[],file2:[],file3:[],form:{id:0,companyid:"",projectname:"",companytype:"",plantype:"",industrytype:"",projecttype:"",secretlevel:"",budget:"",nationfunds:"",provincefunds:"",cityfunds:"",districtfunds:"",responseperson:"",contractperson:"",telephone:"",phone:"",other:"",startdate:"",enddate:"",reportdate:"",status:0},rules:{projectname:[{required:!0,message:"该项不能为空",trigger:"blur"}],companytype:[{required:!0,message:"该项不能为空",trigger:"change"}],plantype:[{required:!0,message:"该项不能为空",trigger:"change"}],industrytype:[{required:!0,message:"该项不能为空",trigger:"change"}],projecttype:[{required:!0,message:"该项不能为空",trigger:"change"}],secretlevel:[{required:!0,message:"该项不能为空",trigger:"change"}],budget:[{required:!0,message:"该项不能为空",trigger:"blur"},{type:"number",message:"该项为数字"}],nationfunds:[{required:!0,message:"该项不能为空",trigger:"blur"},{type:"number",message:"该项为数字"}],provincefunds:[{required:!0,message:"该项不能为空",trigger:"blur"},{type:"number",message:"该项为数字"}],cityfunds:[{required:!0,message:"该项不能为空",trigger:"blur"},{type:"number",message:"该项为数字"}],districtfunds:[{required:!0,message:"该项不能为空",trigger:"blur"},{type:"number",message:"该项为数字"}],responseperson:[{required:!0,message:"该项不能为空",trigger:"blur"}],contractperson:[{required:!0,message:"该项不能为空",trigger:"blur"}],telephone:[{required:!0,message:"该项不能为空",trigger:"blur"},{type:"number",message:"该项为数字"}],phone:[{required:!0,message:"该项不能为空",trigger:"blur"},{type:"number",message:"该项为数字"}],startdate:[{required:!0,message:"该项不能为空",trigger:"change"}],enddate:[{required:!0,message:"该项不能为空",trigger:"change"}]},fileList:[]}},created:function(){this.getdata()},methods:{onSubmit:function(){var e=this;this.$refs.form.validate(function(t){if(t){var r=!1,l=!1,a=!1;e.$api.get("api/Provinceassistancefundsstorages?filter="+encodeURI('{"where":{"and":[{"provinceassistancefundsid":'+e.form.id+"}]}}"),null,function(t){if(0!==t.length){for(var s in t)switch(t[s].type){case"file1":r=!0;break;case"file2":l=!0;break;case"file3":a=!0;break;default:console.log("什么也不是")}r&&l&&a?(e.form.status=1,e.$api.patch("api/Provinceassistancefunds",e.form,function(t){e.$router.push("/fatable"),e.$alert("提交成功","提示",{confirmButtonText:"确定",type:"success"})})):e.$alert("文件未上传","提示",{confirmButtonText:"确定",type:"error"})}else e.$alert("文件未上传","提示",{confirmButtonText:"确定",type:"error"})})}else e.$alert("表单未全部填写完成","提示",{confirmButtonText:"确定",type:"error"})})},save:function(){var e=this;this.$api.patch("api/Provinceassistancefunds",this.form,function(t){e.form.id=t.id,e.$message.success("保存成功")})},getdata:function(){var e=this;this.form.companyid=localStorage.getItem("companyid"),this.form.reportdate=this.getdate(),this.$route.query.proid&&(this.$api.get("api/Provinceassistancefundsstorages?filter="+encodeURI('{"where":{"and":[{"provinceassistancefundsid":'+this.$route.query.proid+"}]}}"),null,function(t){if(0!==t.length)for(var r in t)switch(t[r].type){case"file1":e.file1=[{name:t[r].name.slice(14),url:t[r].url}];break;case"file2":e.file2=[{name:t[r].name.slice(14),url:t[r].url}];break;case"file3":e.file3=[{name:t[r].name.slice(14),url:t[r].url}];break;default:console.log("什么也不是")}}),this.$api.get("api/Provinceassistancefunds/"+this.$route.query.proid,null,function(t){e.form=t}))},getdate:function(){var e=new Date,t=e.getFullYear(),r=e.getMonth()+1,l=e.getDate();return r>=1&&r<=9&&(r="0"+r),l>=0&&l<=9&&(l="0"+l),t+"-"+r+"-"+l},pagejump:function(){this.$router.push("/fatable")},beforeupload:function(){if(0===this.form.id)return this.$alert("请先保存再上传文件","提示",{confirmButtonText:"确定",type:"error"}),!1},uploadsuccess1:function(e,t,r){var l=this;this.$api.post("api/Provinceassistancefundsstorages",{id:0,name:e[0].name,url:e[0].url,type:"file1",provinceassistancefundsid:this.form.id},function(e){l.file1=[{name:e.name.slice(14),url:e.url}]})},uploadsuccess2:function(e,t,r){var l=this;this.$api.post("api/Provinceassistancefundsstorages",{id:0,name:e[0].name,url:e[0].url,type:"file2",provinceassistancefundsid:this.form.id},function(e){l.file2=[{name:e.name.slice(14),url:e.url}]})},uploadsuccess3:function(e,t,r){var l=this;this.$api.post("api/Provinceassistancefundsstorages",{id:0,name:e[0].name,url:e[0].url,type:"file3",provinceassistancefundsid:this.form.id},function(e){l.file3=[{name:e.name.slice(14),url:e.url}]})},fileremove:function(e){var t=this;this.$api.get("api/Provinceassistancefundsstorages?filter="+encodeURI('{"where":{"url":{"like":"%'+e.url+'%"}}}'),null,function(e){0!==e.length?(t.$api.delete("api/Provinceassistancefundsstorages/"+e[0].id,null,function(e){}),t.$message.success("删除成功")):t.$alert("文件未上传成功，文件不存在，删除错误","提示",{confirmButtonText:"确定"})})}}},a={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"crumbs"},[r("sapn",[e._v("省市项目区级奖补资金项目")])],1),e._v(" "),r("div",{staticClass:"container"},[r("div",{staticStyle:{"text-align":"right"}},[r("el-button",{on:{click:e.pagejump}},[e._v("草稿箱")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("提交")])],1),e._v(" "),r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"180px","label-position":"left",rules:e.rules}},[r("el-row",{attrs:{gutter:40}},[r("el-col",{attrs:{span:12,align:"left"}},[r("el-form-item",{attrs:{label:"项目名称",prop:"projectname"}},[r("el-input",{model:{value:e.form.projectname,callback:function(t){e.$set(e.form,"projectname",t)},expression:"form.projectname"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"单位类别",prop:"companytype"}},[r("el-select",{attrs:{placeholder:"请选择单位类别"},model:{value:e.form.companytype,callback:function(t){e.$set(e.form,"companytype",t)},expression:"form.companytype"}},[r("el-option",{key:"kind1",attrs:{label:"科研院所",value:"科研院所"}}),e._v(" "),r("el-option",{key:"kind2",attrs:{label:"高等院校",value:"高等院校"}}),e._v(" "),r("el-option",{key:"kind3",attrs:{label:"国有企业",value:"国有企业"}}),e._v(" "),r("el-option",{key:"kind4",attrs:{label:"民营企业",value:"民营企业"}}),e._v(" "),r("el-option",{key:"kind5",attrs:{label:"股份制企业",value:"股份制企业"}}),e._v(" "),r("el-option",{key:"kind6",attrs:{label:"国家行政机关",value:"国家行政机关"}}),e._v(" "),r("el-option",{key:"kind7",attrs:{label:"事业单位",value:"事业单位"}}),e._v(" "),r("el-option",{key:"kind8",attrs:{label:"其他",value:"其他"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"计划类别",prop:"plantype"}},[r("el-select",{attrs:{placeholder:"请选择计划类别"},model:{value:e.form.plantype,callback:function(t){e.$set(e.form,"plantype",t)},expression:"form.plantype"}},[r("el-option",{key:"plan1",attrs:{label:"高新技术产业提升计划",value:"高新技术产业提升计划"}}),e._v(" "),r("el-option",{key:"plan2",attrs:{label:"信息化产业推进计划",value:"信息化产业推进计划"}}),e._v(" "),r("el-option",{key:"plan3",attrs:{label:"社会发展及科技惠民计划",value:"社会发展及科技惠民计划"}}),e._v(" "),r("el-option",{key:"plan4",attrs:{label:"软科学研究计划",value:"软科学研究计划"}}),e._v(" "),r("el-option",{key:"plan5",attrs:{label:"科技服务平台建设计划",value:"科技服务平台建设计划"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"行业类别",prop:"industrytype"}},[r("el-select",{attrs:{placeholder:"请选择行业类别"},model:{value:e.form.industrytype,callback:function(t){e.$set(e.form,"industrytype",t)},expression:"form.industrytype"}},[r("el-option",{key:"industry1",attrs:{label:"工业",value:"工业"}}),e._v(" "),r("el-option",{key:"industry2",attrs:{label:"科技服务",value:"科技服务"}}),e._v(" "),r("el-option",{key:"industry3",attrs:{label:"信息化",value:"信息化"}}),e._v(" "),r("el-option",{key:"industry4",attrs:{label:"社会发展和软科学研究",value:"社会发展和软科学研究"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"项目类别",prop:"projecttype"}},[r("el-select",{attrs:{placeholder:"请选择项目类别"},model:{value:e.form.projecttype,callback:function(t){e.$set(e.form,"projecttype",t)},expression:"form.projecttype"}},[r("el-option",{attrs:{label:"支持科技创新平台建设",value:"支持科技创新平台建设"}}),e._v(" "),r("el-option",{attrs:{label:"支持创业创新综合服务平台建设",value:"支持创业创新综合服务平台建设"}}),e._v(" "),r("el-option",{attrs:{label:"支持科技服务业发展",value:"支持科技服务业发展"}}),e._v(" "),r("el-option",{attrs:{label:"促进高新技术企业发展",value:"促进高新技术企业发展"}}),e._v(" "),r("el-option",{attrs:{label:"大力发展信息产业",value:"大力发展信息产业"}}),e._v(" "),r("el-option",{attrs:{label:"支持中小微企业上市融资",value:"支持中小微企业上市融资"}}),e._v(" "),r("el-option",{attrs:{label:"鼓励企业加大研发投入",value:"鼓励企业加大研发投入"}}),e._v(" "),r("el-option",{attrs:{label:"鼓励企业实施技术改造",value:"鼓励企业实施技术改造"}}),e._v(" "),r("el-option",{attrs:{label:"加大科技计划项目扶持力度",value:"加大科技计划项目扶持力度"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"项目密级",prop:"secretlevel"}},[r("el-select",{attrs:{placeholder:"请选择项目密级"},model:{value:e.form.secretlevel,callback:function(t){e.$set(e.form,"secretlevel",t)},expression:"form.secretlevel"}},[r("el-option",{key:"level1",attrs:{label:"公开",value:"公开"}}),e._v(" "),r("el-option",{key:"level2",attrs:{label:"秘密",value:"秘密"}}),e._v(" "),r("el-option",{key:"level3",attrs:{label:"机密",value:"机密"}}),e._v(" "),r("el-option",{key:"level4",attrs:{label:"绝密",value:"绝密"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"项目开始日期",prop:"startdate"}},[r("el-date-picker",{attrs:{type:"date",placeholder:"选择开始日期",format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd"},model:{value:e.form.startdate,callback:function(t){e.$set(e.form,"startdate",t)},expression:"form.startdate"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"项目截止日期",prop:"enddate"}},[r("el-date-picker",{attrs:{type:"date",placeholder:"选择截止日期",format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd"},model:{value:e.form.enddate,callback:function(t){e.$set(e.form,"enddate",t)},expression:"form.enddate"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"项目总经费预算（万元）",prop:"budget"}},[r("el-input",{model:{value:e.form.budget,callback:function(t){e.$set(e.form,"budget",e._n(t))},expression:"form.budget"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"项目获得的国家级补助资金",prop:"nationfunds"}},[r("el-input",{model:{value:e.form.nationfunds,callback:function(t){e.$set(e.form,"nationfunds",e._n(t))},expression:"form.nationfunds"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"项目获得的省级补助资金",prop:"provincefunds"}},[r("el-input",{model:{value:e.form.provincefunds,callback:function(t){e.$set(e.form,"provincefunds",e._n(t))},expression:"form.provincefunds"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"项目获得的市级补助资金",prop:"cityfunds"}},[r("el-input",{model:{value:e.form.cityfunds,callback:function(t){e.$set(e.form,"cityfunds",e._n(t))},expression:"form.cityfunds"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"项目申报区级补助资金",prop:"districtfunds"}},[r("el-input",{model:{value:e.form.districtfunds,callback:function(t){e.$set(e.form,"districtfunds",e._n(t))},expression:"form.districtfunds"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"项目负责人",prop:"responseperson"}},[r("el-input",{model:{value:e.form.responseperson,callback:function(t){e.$set(e.form,"responseperson",t)},expression:"form.responseperson"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"项目联系人",prop:"contractperson"}},[r("el-input",{model:{value:e.form.contractperson,callback:function(t){e.$set(e.form,"contractperson",t)},expression:"form.contractperson"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"联系座机",prop:"telephone"}},[r("el-input",{model:{value:e.form.telephone,callback:function(t){e.$set(e.form,"telephone",e._n(t))},expression:"form.telephone"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"联系手机",prop:"phone"}},[r("el-input",{model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",e._n(t))},expression:"form.phone"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"备注",prop:"other"}},[r("el-input",{attrs:{type:"textarea",rows:"2"},model:{value:e.form.other,callback:function(t){e.$set(e.form,"other",t)},expression:"form.other"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:8,offset:2}},[r("el-upload",{ref:"upload",staticClass:"upload-demo1",attrs:{action:"http://132.232.146.241:3000/api/StorageFiles/upload","on-success":e.uploadsuccess1,"on-remove":e.fileremove,"before-upload":e.beforeupload,"file-list":e.file1,"show-file-list":!0,limit:1,"list-type":"picture-"}},[r("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("选取材料文件")]),e._v(" "),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("上传区级补助资金申请表，只能上传xls、xlsx、doc、docx、pdf格式文件，且不超过1MB")])],1),r("br")],1),e._v(" "),r("el-col",{attrs:{span:8,offset:2}},[r("el-upload",{ref:"upload",staticClass:"upload-demo2",attrs:{action:"http://132.232.146.241:3000/api/StorageFiles/upload","on-success":e.uploadsuccess2,"on-remove":e.fileremove,"before-upload":e.beforeupload,"file-list":e.file2,"show-file-list":!0,limit:1,"list-type":"picture-"}},[r("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("选取材料文件")]),e._v(" "),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("上传省市立项证明材料，只能上传xls、xlsx、doc、docx、pdf格式文件，且不超过5MB")])],1),r("br")],1),e._v(" "),r("el-col",{attrs:{span:8,offset:2}},[r("el-upload",{ref:"upload",staticClass:"upload-demo3",attrs:{action:"http://132.232.146.241:3000/api/StorageFiles/upload","on-success":e.uploadsuccess3,"on-remove":e.fileremove,"before-upload":e.beforeupload,"file-list":e.file3,"show-file-list":!0,limit:1,"list-type":"picture-"}},[r("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("选取材料文件")]),e._v(" "),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("上传省市拨款证明材料，只能上传xls、xlsx、doc、docx、pdf格式文件，且不超过5MB")])],1),r("br")],1)],1),e._v(" "),r("el-row",{attrs:{align:"center"}},[r("el-col",{attrs:{span:24}},[r("div",{staticStyle:{"text-align":"center"}},[r("el-button",{on:{click:e.save}},[e._v("保存")])],1)])],1)],1)],1)])},staticRenderFns:[]},s=r("VU/8")(l,a,!1,null,null,null);t.default=s.exports}});