webpackJsonp([11],{Fz6U:function(t,e){},Wtxq:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={name:"basetable",data:function(){return{select_word:"",selectTab:"table",tabledata:[],tabledata1:[],tabledata2:[],Companys:[],dialogVisible:!1,innerVisible1:!1,innerVisible2:!1,active:0,dialogid:"",activeStatus:"",reviewStatus:"",currentPage:1,currentPage1:1,currentPage2:1,pagesize:10,total:0}},created:function(){this.getdata()},computed:{tableData:function(){for(var t in this.tabledata)for(var e in this.Companys)this.tabledata[t].companyid===this.Companys[e].id&&this.$set(this.tabledata,t,{id:this.tabledata[t].id,num:this.tabledata[t].id.toString().padStart(5,"0"),authenticationtype:this.tabledata[t].authenticationtype,companyname:this.Companys[e].companyname,reportdate:this.tabledata[t].reportdate,status:this.tabledata[t].status});return this.tabledata},tableData1:function(){for(var t in this.tabledata1)for(var e in this.Companys)this.tabledata1[t].companyid===this.Companys[e].id&&this.$set(this.tabledata1,t,{id:this.tabledata1[t].id,num:this.tabledata1[t].id.toString().padStart(5,"0"),authenticationtype:this.tabledata1[t].authenticationtype,companyname:this.Companys[e].companyname,reportdate:this.tabledata1[t].reportdate,status:this.tabledata1[t].status});return this.tabledata1},tableData2:function(){for(var t in this.tabledata2)for(var e in this.Companys)this.tabledata2[t].companyid===this.Companys[e].id&&this.$set(this.tabledata2,t,{id:this.tabledata2[t].id,num:this.tabledata2[t].id.toString().padStart(5,"0"),authenticationtype:this.tabledata2[t].authenticationtype,companyname:this.Companys[e].companyname,reportdate:this.tabledata2[t].reportdate,status:this.tabledata2[t].status});return this.tabledata2},buttonValue1:function(){if(6===this.active||5===this.reviewStatus)return!0},buttonValue2:function(){if(0===this.active)return!0}},methods:{getdata:function(){var t=this;this.tabledata=[],this.tabledata1=[],this.tabledata2=[],this.$api.get("/api/Companys",null,function(e){t.Companys=e}),this.$api.get("api/Intellectualdemonstrations?filter="+encodeURI('{"where":{"and":[{"status":1}]}}'),null,function(e){t.tabledata=e}),this.$api.get("api/Intellectualdemonstrations?filter="+encodeURI('{"where":{"and":[{"status":{"nin":[1]}},{"status":{"nin":[2]}},{"status":{"nin":[5]}},{"status":{"nin":[0]}},{"status":{"nin":[-1]}},{"status":{"nin":[9]}},{"status":{"nin":[11]}}]}}'),null,function(e){t.tabledata1=e}),this.$api.get("api/Intellectualdemonstrations?filter="+encodeURI('{"where":{"or":[{"status":2},{"status":5},{"status":9},{"status":11}]}}'),null,function(e){t.tabledata2=e})},prodelete:function(t,e,a){var i=this;this.$api.get("api/Sciprojectsupportconditions?filter="+encodeURI('{"where":{"scienceprojectid":{"like":"%'+e.id+'%"}}}'),null,function(t){0!==t.length&&i.$api.delete("api/Sciprojectsupportconditions/"+t[0].id,null,function(t){})}),this.$api.get("api/Sciprojectcontents?filter="+encodeURI('{"where":{"scienceprojectid":{"like":"%'+e.id+'%"}}}'),null,function(t){0!==t.length&&i.$api.delete("api/Sciprojectcontents/"+t[0].id,null,function(t){})}),this.$api.get("api/Sciprojectoutputs?filter="+encodeURI('{"where":{"scienceprojectid":{"like":"%'+e.id+'%"}}}'),null,function(t){0!==t.length&&i.$api.delete("api/Sciprojectoutputs/"+t[0].id,null,function(t){}),a(e)})},mainprodelete:function(t){var e=this;this.$api.delete("api/Intellectualdemonstrations/"+t.id,null,function(t){e.getdata()})},refresh:function(){this.getdata()},set2:function(t,e){var a=this;this.$confirm("是否不通过审核?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"danger"}).then(function(){a.$api.patch("/api/Intellectualdemonstrations/"+e.id,{status:2},function(t){console.log(t),a.getdata()})})},set3:function(t,e){var a=this;this.$confirm("是否通过审核?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"success"}).then(function(){a.$api.patch("/api/Intellectualdemonstrations/"+e.id,{status:3},function(t){console.log(t),a.getdata()})})},setn1:function(t,e){var a=this;this.$confirm("是否返回重新修改?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.$api.patch("/api/Intellectualdemonstrations/"+e.id,{status:-1},function(t){console.log(t),a.getdata()})})},set1:function(t,e){var a=this;this.$api.patch("/api/Intellectualdemonstrations/"+e.id,{status:1},function(t){console.log(t),a.getdata()})},next:function(){1===this.active?this.innerVisible1=!0:5===this.active&&(this.innerVisible2=!0),console.log(this.active),this.active++},back:function(){this.active--},pass:function(){2===this.active?this.reviewStatus=4:6===this.active&&(this.activeStatus=9),this.innerVisible1=!1,this.innerVisible2=!1},nopass:function(){2===this.active?this.reviewStatus=5:6===this.active&&(this.activeStatus=11),this.innerVisible1=!1,this.innerVisible2=!1},reAcceptance:function(){this.activeStatus=10,this.innerVisible2=!1},handleEdit:function(t,e){this.activeStatus=e.status,this.reviewStatus=e.status,3===e.status||4===e.status?this.active=e.status-2:e.status>5&&e.status<=8?this.active=e.status-3:e.status>8&&(this.active=5),this.dialogVisible=!0,this.dialogid=e.id},confirm:function(){var t=this;2===this.active?this.$api.patch("/api/Intellectualdemonstrations/"+this.dialogid,{status:this.reviewStatus},function(e){t.$message.success("节点状态修改成功"),t.getdata(),t.dialogVisible=!1}):6===this.active?this.$api.patch("/api/Intellectualdemonstrations/"+this.dialogid,{status:this.activeStatus},function(e){t.$message.success("节点状态修改成功"),t.getdata(),t.dialogVisible=!1}):this.active>=3&&this.active<=5?this.$api.patch("/api/Intellectualdemonstrations/"+this.dialogid,{status:this.active+3},function(e){t.$message.success("节点状态修改成功"),t.getdata(),t.dialogVisible=!1}):1===this.active?this.$api.patch("/api/Intellectualdemonstrations/"+this.dialogid,{status:this.active+2},function(e){t.$message.success("节点状态修改成功"),t.getdata(),t.dialogVisible=!1}):0===this.active&&this.$api.patch("/api/Intellectualdemonstrations/"+this.dialogid,{status:this.active+1},function(e){t.$message.success("节点状态修改成功"),t.getdata(),t.dialogVisible=!1})},current_change:function(t){this.currentPage=t},current_change1:function(t){this.currentPage1=t},current_change2:function(t){this.currentPage2=t},check:function(t,e){this.$router.push({path:"/table2",query:{proid:e.id}})},search:function(){var t,e=this;this.$api.get("api/Companys?filter="+encodeURI('{"where":{"companyname":{"like":"%'+this.select_word+'%"}}}'),null,function(a){switch(console.log(a),t=a,e.selectTab){case"table":for(var i in console.log(111),e.tabledata=[],t)e.$api.get("api/Intellectualdemonstrations?filter="+encodeURI('{"where":{"and":[{"status":1},{"companyid":"'+t[i].id+'"}]}}'),null,function(t){for(var a in t)e.$set(e.tabledata,a,t[a])});break;case"table1":for(var n in console.log(222),e.tabledata1=[],t)e.$api.get("api/Intellectualdemonstrations?filter="+encodeURI('{"where":{"and":[{"status":{"nin":[1,2,5,0,-1,9,11]}},{"companyid":"'+t[n].id+'"}]}}'),null,function(t){for(var a in t)e.$set(e.tabledata1,a,t[a])});break;case"table2":for(var s in console.log(333),e.tabledata2=[],t)e.$api.get("api/Intellectualdemonstrations?filter="+encodeURI('{"where":{"and":[{"status":{"nin":[1,3,4,6,7,8,10,0,-1]}},{"companyid":"'+t[s].id+'"}]}}'),null,function(t){for(var a in t)e.$set(e.tabledata2,a,t[a])})}})}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table"},[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-tickets"}),t._v("知识产权试点/示范企业认定")])],1)],1),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"handle-box"},[a("label",{staticStyle:{"font-size":"13px",color:"#6f7180"}},[t._v("公司名称筛选")]),t._v(" "),a("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"公司名称筛选关键词"},model:{value:t.select_word,callback:function(e){t.select_word=e},expression:"select_word"}}),t._v(" "),a("el-button",{attrs:{type:"primary",icon:"search"},on:{click:t.search}},[t._v("搜索")]),t._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{icon:"el-icon-refresh",round:""},on:{click:t.refresh}},[t._v("刷新")])],1),t._v(" "),a("el-tabs",{model:{value:t.selectTab,callback:function(e){t.selectTab=e},expression:"selectTab"}},[a("el-tab-pane",{attrs:{label:"待处理",name:"table"}},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData.slice((t.currentPage-1)*t.pagesize,t.currentPage*t.pagesize),fit:!0}},[a("el-table-column",{attrs:{prop:"num",label:"编号",resizable:!1,sortable:"",align:"center",fixed:"left"}}),t._v(" "),a("el-table-column",{attrs:{prop:"authenticationtype",label:"认证类型",resizable:!1,align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"companyname",label:"工作单位",resizable:!1,align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"reportdate",label:"填报时间",sortable:"",resizable:!1,align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"等待操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{attrs:{type:"warning",size:"medium"}},[t._v("初审")])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"详情",align:"center",resizable:!1,width:"150px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){t.check(e.$index,e.row)}}},[t._v("查看")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",resizable:!1,width:"200px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{attrs:{placement:"top",effect:"dark",content:"通过审核"}},[a("el-button",{attrs:{type:"success",size:"mini",icon:"el-icon-check",round:""},on:{click:function(a){t.set3(e.$index,e.row)}}})],1),t._v(" "),a("el-tooltip",{attrs:{placement:"top",effect:"dark",content:"返回重新修改"}},[a("el-button",{attrs:{type:"warning",size:"mini",icon:"el-icon-edit",round:""},on:{click:function(a){t.setn1(e.$index,e.row)}}})],1),t._v(" "),a("el-tooltip",{attrs:{placement:"top",effect:"dark",content:"不通过审核"}},[a("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-close",round:""},on:{click:function(a){t.set2(e.$index,e.row)}}})],1)]}}])})],1),t._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":t.pagesize,layout:"total, prev, pager, next",total:t.tableData.length},on:{"update:currentPage":function(e){t.currentPage=e},"current-change":t.current_change}})],1)],1),t._v(" "),a("el-tab-pane",{attrs:{label:"处理中",name:"table1"}},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData1.slice((t.currentPage1-1)*t.pagesize,t.currentPage1*t.pagesize),fit:!0}},[a("el-table-column",{attrs:{prop:"num",label:"编号",resizable:!1,sortable:"",align:"center",fixed:"left"}}),t._v(" "),a("el-table-column",{attrs:{prop:"authenticationtype",label:"认证类型",resizable:!1,align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"companyname",label:"工作单位",resizable:!1,align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"reportdate",label:"填报时间",sortable:"",resizable:!1,align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"等待操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[3===e.row.status?a("el-tag",{attrs:{type:"primary",size:"medium"}},[t._v("专家评审")]):t._e(),t._v(" "),4===e.row.status?a("el-tag",{attrs:{type:"primary",size:"medium"}},[t._v("立项")]):t._e(),t._v(" "),6===e.row.status?a("el-tag",{attrs:{type:"primary",size:"medium"}},[t._v("签订合同")]):t._e(),t._v(" "),7===e.row.status?a("el-tag",{attrs:{type:"primary",size:"medium"}},[t._v("中期检查")]):t._e(),t._v(" "),8===e.row.status?a("el-tag",{attrs:{type:"primary",size:"medium"}},[t._v("验收")]):t._e(),t._v(" "),10===e.row.status?a("el-tag",{attrs:{type:"primary",size:"medium"}},[t._v("重新验收")]):t._e()],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"项目详情",align:"center",resizable:!1,width:"150px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){t.check(e.$index,e.row)}}},[t._v("查看")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"节点详情",align:"center",resizable:!1},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(a){t.handleEdit(e.$index,e.row)}}},[t._v("管理")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",resizable:!1},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{attrs:{placement:"top",effect:"dark",content:"返回重新修改"}},[a("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-close",round:""},on:{click:function(a){t.setn1(e.$index,e.row)}}})],1)]}}])})],1),t._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":t.currentPage1,"page-size":t.pagesize,layout:"total, prev, pager, next",total:t.tableData1.length},on:{"update:currentPage":function(e){t.currentPage1=e},"current-change":t.current_change1}})],1)],1),t._v(" "),a("el-tab-pane",{attrs:{label:"处理完成",name:"table2"}},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData2.slice((t.currentPage2-1)*t.pagesize,t.currentPage2*t.pagesize),fit:!0}},[a("el-table-column",{attrs:{prop:"num",label:"编号",resizable:!1,sortable:"",align:"center",fixed:"left"}}),t._v(" "),a("el-table-column",{attrs:{prop:"authenticationtype",label:"认证类型",resizable:!1,align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"companyname",label:"工作单位",resizable:!1,align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"reportdate",label:"填报时间",sortable:"",resizable:!1,align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"等待操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[2===e.row.status?a("el-tag",{attrs:{type:"danger",size:"medium"}},[t._v("初审不通过")]):t._e(),t._v(" "),5===e.row.status?a("el-tag",{attrs:{type:"danger",size:"medium"}},[t._v("专家评审不通过")]):t._e(),t._v(" "),9===e.row.status?a("el-tag",{attrs:{type:"success",size:"medium"}},[t._v("验收通过")]):t._e(),t._v(" "),11===e.row.status?a("el-tag",{attrs:{type:"danger",size:"medium"}},[t._v("验收不通过")]):t._e()],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"详情",align:"center",resizable:!1,width:"150px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small"},on:{click:function(a){t.check(e.$index,e.row)}}},[t._v("查看")])]}}])})],1),t._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":t.currentPage2,"page-size":t.pagesize,layout:"total, prev, pager, next",total:t.tableData2.length},on:{"update:currentPage":function(e){t.currentPage2=e},"current-change":t.current_change2}})],1)],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"节点管理",visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-dialog",{attrs:{width:"30%",title:"专家评审是否通过？",visible:t.innerVisible1,"close-on-click-modal":!1,"show-close":!1,"append-to-body":""},on:{"update:visible":function(e){t.innerVisible1=e}}},[a("el-button",{staticStyle:{"margin-top":"12px"},on:{click:t.pass}},[t._v("通过")]),t._v("  \n                "),a("el-button",{staticStyle:{"margin-top":"12px"},on:{click:t.nopass}},[t._v("不通过")])],1),t._v(" "),a("el-dialog",{attrs:{width:"30%",title:"验收是否通过？",visible:t.innerVisible2,"close-on-click-modal":!1,"show-close":!1,"append-to-body":""},on:{"update:visible":function(e){t.innerVisible2=e}}},[a("el-button",{staticStyle:{"margin-top":"12px"},on:{click:t.pass}},[t._v("通过")]),t._v("  \n                "),a("el-button",{staticStyle:{"margin-top":"12px"},on:{click:t.reAcceptance}},[t._v("重新验收")]),t._v("  \n                "),a("el-button",{staticStyle:{"margin-top":"12px"},on:{click:t.nopass}},[t._v("不通过")])],1),t._v(" "),a("el-steps",{staticStyle:{height:"500px"},attrs:{active:t.active,direction:"vertical","finish-status":"success"}},[a("el-step",{attrs:{title:"初审"}}),t._v(" "),5!==t.reviewStatus?a("el-step",{attrs:{title:"专家评审"}}):t._e(),t._v(" "),5===t.reviewStatus?a("el-step",{attrs:{title:"专家评审不通过",status:"error"}}):t._e(),t._v(" "),a("el-step",{attrs:{title:"立项"}}),t._v(" "),a("el-step",{attrs:{title:"签订合同"}}),t._v(" "),a("el-step",{attrs:{title:"中期检查"}}),t._v(" "),10!==t.activeStatus&9!==t.activeStatus&11!==t.activeStatus?a("el-step",{attrs:{title:"验收"}}):t._e(),t._v(" "),9===t.activeStatus?a("el-step",{attrs:{title:"验收通过"}}):t._e(),t._v(" "),10===t.activeStatus?a("el-step",{attrs:{title:"重新验收",status:"finish"}}):t._e(),t._v(" "),11===t.activeStatus?a("el-step",{attrs:{title:"验收不通过",status:"error"}}):t._e()],1),t._v(" "),a("el-button",{staticStyle:{"margin-top":"12px"},attrs:{disabled:t.buttonValue2},on:{click:t.back}},[t._v("上一步")]),t._v("  \n            "),a("el-button",{staticStyle:{"margin-top":"12px"},attrs:{disabled:t.buttonValue1},on:{click:t.next}},[t._v("下一步")]),t._v(" "),a("el-button",{staticStyle:{"margin-top":"12px",float:"right"},on:{click:t.confirm}},[t._v("确定")])],1)],1)])},staticRenderFns:[]};var s=a("VU/8")(i,n,!1,function(t){a("Fz6U")},"data-v-d9c9d570",null);e.default=s.exports}});