webpackJsonp([9],{FF94:function(e,t){},a52u:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table"},[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-tickets"}),e._v("项目详情")])],1)],1),e._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"handle-box"},[a("label",{staticStyle:{"font-size":"13px",color:"#6f7180"}},[e._v("项目名称筛选")]),e._v(" "),a("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"项目名称筛选关键词"},model:{value:e.select_word,callback:function(t){e.select_word=t},expression:"select_word"}}),e._v(" "),a("label",{staticStyle:{"font-size":"13px",color:"#6f7180"}},[e._v("项目时间筛选")]),e._v(" "),a("el-date-picker",{attrs:{type:"month",placeholder:"选择项目开始时间"},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}}),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"search"},on:{click:e.search}},[e._v("搜索")]),e._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{icon:"el-icon-refresh",round:""},on:{click:e.refresh}},[e._v("刷新")])],1),e._v(" "),a("el-tabs",[a("el-tab-pane",{attrs:{label:"待受理"}},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,fit:!0},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-row",[a("el-col",{attrs:{span:8,align:"center"}},[a("el-form-item",{attrs:{label:"国内发明专利数量/申请补助金额"}},[a("span",[e._v(e._s(t.row.inlandnop)+"/"+e._s(t.row.inlandapplyfunds))])]),e._v(" "),a("el-form-item",{attrs:{label:"国外发明专利数量/申请补助金额"}},[a("span",[e._v(e._s(t.row.foreignnop)+"/"+e._s(t.row.foreignapplyfunds))])]),e._v(" "),a("el-form-item",{attrs:{label:"实用新型专利数量/申请补助金额"}},[a("span",[e._v(e._s(t.row.practicalnewnop)+"/"+e._s(t.row.practicalnewapplyfunds))])]),e._v(" "),a("el-form-item",{attrs:{label:"外观设计专利数量/申请补助金额"}},[a("span",[e._v(e._s(t.row.apdesignnop)+"/"+e._s(t.row.apdesignfunds))])])],1),e._v(" "),a("el-col",{attrs:{span:8,align:"center"}},[a("el-form-item",{attrs:{label:"软件著作权数量/申请补助金额"}},[a("span",[e._v(e._s(t.row.softcopyrightcount)+"/"+e._s(t.row.softcopyrightfunds))])]),a("br"),e._v(" "),a("el-form-item",{attrs:{label:"版权数量/申请补助金额"}},[a("span",[e._v(e._s(t.row.copyrightcount)+"/"+e._s(t.row.copyrightfunds))])]),a("br"),e._v(" "),a("el-form-item",{attrs:{label:"商标专利权数量/申请补助金额"}},[a("span",[e._v(e._s(t.row.logolicensingcount)+"/"+e._s(t.row.logolicensingfunds))])])],1),e._v(" "),a("el-col",{attrs:{span:8,align:"center"}},[a("el-form-item",{attrs:{label:"集成电路布图权数量/申请补助金额"}},[a("span",[e._v(e._s(t.row.iclayoutcount)+"/"+e._s(t.row.iclayoutfunds))])]),a("br"),e._v(" "),a("el-form-item",{attrs:{label:"植物新品种权数量/申请补助金额"}},[a("span",[e._v(e._s(t.row.newplantcount)+"/"+e._s(t.row.newplantfunds))])]),a("br"),e._v(" "),a("el-form-item",{attrs:{label:"新药证书数量/申请补助金额"}},[a("span",[e._v(e._s(t.row.newmedicationcount)+"/"+e._s(t.row.newmedicationfunds))])])],1)],1)],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"projectname",label:"项目名称",resizable:!1,sortable:"",width:"150px",fixed:"left",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"industrycategory",label:"行业类别",resizable:!1,width:"150px",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"authorizeyear",label:"知识产权授权年度",resizable:!1,width:"150px",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"contactperson",label:"项目联系人",resizable:!1,width:"150px",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"contactphone",label:"项目联系人电话",resizable:!1,width:"150px",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"contactemail",label:"项目联系人邮箱",resizable:!1,width:"150px",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"memo",label:"备注",resizable:!1,width:"150px",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"status",align:"center",label:"状态",formatter:e.formatter,resizable:!1,width:"150px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{attrs:{type:"danger",size:"medium"}},[e._v(e._s(t.row.status))])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"currentnode",label:"当前节点",align:"center",formatter:e.formatter,resizable:!1,width:"150px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-popover",{attrs:{trigger:"hover",placement:"top"}},[a("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{attrs:{type:"info",size:"medium"}},[e._v("待审核")])],1)])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"项目详情",align:"center",resizable:!1,width:"150px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small"},on:{click:function(a){e.check(t.$index,t.row)}}},[e._v("查看")])]}}])})],1)],1),e._v(" "),a("el-tab-pane",{attrs:{label:"已受理"}},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData1,fit:!0},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-row",[a("el-col",{attrs:{span:8,align:"center"}},[a("el-form-item",{attrs:{label:"国内发明专利数量/申请补助金额"}},[a("span",[e._v(e._s(t.row.inlandnop)+"/"+e._s(t.row.inlandapplyfunds))])]),e._v(" "),a("el-form-item",{attrs:{label:"国外发明专利数量/申请补助金额"}},[a("span",[e._v(e._s(t.row.foreignnop)+"/"+e._s(t.row.foreignapplyfunds))])]),e._v(" "),a("el-form-item",{attrs:{label:"实用新型专利数量/申请补助金额"}},[a("span",[e._v(e._s(t.row.practicalnewnop)+"/"+e._s(t.row.practicalnewapplyfunds))])]),e._v(" "),a("el-form-item",{attrs:{label:"外观设计专利数量/申请补助金额"}},[a("span",[e._v(e._s(t.row.apdesignnop)+"/"+e._s(t.row.apdesignfunds))])])],1),e._v(" "),a("el-col",{attrs:{span:8,align:"center"}},[a("el-form-item",{attrs:{label:"软件著作权数量/申请补助金额"}},[a("span",[e._v(e._s(t.row.softcopyrightcount)+"/"+e._s(t.row.softcopyrightfunds))])]),a("br"),e._v(" "),a("el-form-item",{attrs:{label:"版权数量/申请补助金额"}},[a("span",[e._v(e._s(t.row.copyrightcount)+"/"+e._s(t.row.copyrightfunds))])]),a("br"),e._v(" "),a("el-form-item",{attrs:{label:"商标专利权数量/申请补助金额"}},[a("span",[e._v(e._s(t.row.logolicensingcount)+"/"+e._s(t.row.logolicensingfunds))])])],1),e._v(" "),a("el-col",{attrs:{span:8,align:"center"}},[a("el-form-item",{attrs:{label:"集成电路布图权数量/申请补助金额"}},[a("span",[e._v(e._s(t.row.iclayoutcount)+"/"+e._s(t.row.iclayoutfunds))])]),a("br"),e._v(" "),a("el-form-item",{attrs:{label:"植物新品种权数量/申请补助金额"}},[a("span",[e._v(e._s(t.row.newplantcount)+"/"+e._s(t.row.newplantfunds))])]),a("br"),e._v(" "),a("el-form-item",{attrs:{label:"新药证书数量/申请补助金额"}},[a("span",[e._v(e._s(t.row.newmedicationcount)+"/"+e._s(t.row.newmedicationfunds))])])],1)],1)],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"projectname",label:"项目名称",resizable:!1,sortable:"",width:"150px",fixed:"left",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"industrycategory",label:"行业类别",resizable:!1,width:"150px",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"authorizeyear",label:"知识产权授权年度",resizable:!1,width:"150px",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"contactperson",label:"项目联系人",resizable:!1,width:"150px",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"contactphone",label:"项目联系人电话",resizable:!1,width:"150px",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"contactemail",label:"项目联系人邮箱",resizable:!1,width:"150px",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"memo",label:"备注",resizable:!1,width:"150px",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"status",align:"center",label:"状态",formatter:e.formatter,resizable:!1,width:"150px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{attrs:{type:"danger",size:"medium"}},[e._v(e._s(t.row.status))])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"currentnode",label:"当前节点",align:"center",formatter:e.formatter,resizable:!1,width:"150px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-popover",{attrs:{trigger:"hover",placement:"top"}},[a("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},["0"===t.row.currentnode?a("el-tag",{attrs:{type:"primary",size:"medium"}},[e._v("专家评审")]):e._e(),e._v(" "),"1"===t.row.currentnode?a("el-tag",{attrs:{type:"primary",size:"medium"}},[e._v("立项")]):e._e(),e._v(" "),"2"===t.row.currentnode?a("el-tag",{attrs:{type:"primary",size:"medium"}},[e._v("签订合同")]):e._e(),e._v(" "),"3"===t.row.currentnode?a("el-tag",{attrs:{type:"primary",size:"medium"}},[e._v("中期检查")]):e._e(),e._v(" "),"4"===t.row.currentnode?a("el-tag",{attrs:{type:"primary",size:"medium"}},[e._v("验收")]):e._e(),e._v(" "),"5"===t.row.currentnode?a("el-tag",{attrs:{type:"success",size:"medium"}},[e._v("验收通过")]):e._e(),e._v(" "),"6"===t.row.currentnode?a("el-tag",{attrs:{type:"danger",size:"medium"}},[e._v("验收不通过")]):e._e()],1)])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"项目详情",align:"center",resizable:!1,width:"150px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small"},on:{click:function(a){e.check(t.$index,t.row)}}},[e._v("查看")])]}}])})],1)],1),e._v(" "),a("el-tab-pane",{attrs:{label:"不受理"}},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData2,fit:!0},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-row",[a("el-col",{attrs:{span:8,align:"center"}},[a("el-form-item",{attrs:{label:"国内发明专利数量/申请补助金额"}},[a("span",[e._v(e._s(t.row.inlandnop)+"/"+e._s(t.row.inlandapplyfunds))])]),e._v(" "),a("el-form-item",{attrs:{label:"国外发明专利数量/申请补助金额"}},[a("span",[e._v(e._s(t.row.foreignnop)+"/"+e._s(t.row.foreignapplyfunds))])]),e._v(" "),a("el-form-item",{attrs:{label:"实用新型专利数量/申请补助金额"}},[a("span",[e._v(e._s(t.row.practicalnewnop)+"/"+e._s(t.row.practicalnewapplyfunds))])]),e._v(" "),a("el-form-item",{attrs:{label:"外观设计专利数量/申请补助金额"}},[a("span",[e._v(e._s(t.row.apdesignnop)+"/"+e._s(t.row.apdesignfunds))])])],1),e._v(" "),a("el-col",{attrs:{span:8,align:"center"}},[a("el-form-item",{attrs:{label:"软件著作权数量/申请补助金额"}},[a("span",[e._v(e._s(t.row.softcopyrightcount)+"/"+e._s(t.row.softcopyrightfunds))])]),a("br"),e._v(" "),a("el-form-item",{attrs:{label:"版权数量/申请补助金额"}},[a("span",[e._v(e._s(t.row.copyrightcount)+"/"+e._s(t.row.copyrightfunds))])]),a("br"),e._v(" "),a("el-form-item",{attrs:{label:"商标专利权数量/申请补助金额"}},[a("span",[e._v(e._s(t.row.logolicensingcount)+"/"+e._s(t.row.logolicensingfunds))])])],1),e._v(" "),a("el-col",{attrs:{span:8,align:"center"}},[a("el-form-item",{attrs:{label:"集成电路布图权数量/申请补助金额"}},[a("span",[e._v(e._s(t.row.iclayoutcount)+"/"+e._s(t.row.iclayoutfunds))])]),a("br"),e._v(" "),a("el-form-item",{attrs:{label:"植物新品种权数量/申请补助金额"}},[a("span",[e._v(e._s(t.row.newplantcount)+"/"+e._s(t.row.newplantfunds))])]),a("br"),e._v(" "),a("el-form-item",{attrs:{label:"新药证书数量/申请补助金额"}},[a("span",[e._v(e._s(t.row.newmedicationcount)+"/"+e._s(t.row.newmedicationfunds))])])],1)],1)],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"projectname",label:"项目名称",resizable:!1,sortable:"",width:"150px",fixed:"left",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"industrycategory",label:"行业类别",resizable:!1,width:"150px",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"authorizeyear",label:"知识产权授权年度",resizable:!1,width:"150px",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"contactperson",label:"项目联系人",resizable:!1,width:"150px",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"contactphone",label:"项目联系人电话",resizable:!1,width:"150px",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"contactemail",label:"项目联系人邮箱",resizable:!1,width:"150px",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"memo",label:"备注",resizable:!1,width:"150px",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"status",align:"center",label:"状态",formatter:e.formatter,resizable:!1,width:"150px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{attrs:{type:"danger",size:"medium"}},[e._v(e._s(t.row.status))])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"currentnode",label:"当前节点",align:"center",formatter:e.formatter,resizable:!1,width:"150px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-popover",{attrs:{trigger:"hover",placement:"top"}},[a("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{attrs:{type:"info",size:"medium"}},[e._v("不审核")])],1)])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"项目详情",align:"center",resizable:!1,width:"150px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small"},on:{click:function(a){e.check(t.$index,t.row)}}},[e._v("查看")])]}}])})],1)],1)],1)],1)])},staticRenderFns:[]};var r=a("VU/8")({name:"basetable",data:function(){return{tableData:[{contractnumber:11111}],tableData1:[],tableData2:[],multipleSelection:[],contractnumber:"",name:"",contractor:"",begindate:"",enddate:"",budget:"",funding:"",appropriation:"",status:"",currentpoint:"",select_word:"",date:""}},created:function(){this.getData()},methods:{}},l,!1,function(e){a("FF94")},"data-v-d0f82f6e",null);t.default=r.exports}});