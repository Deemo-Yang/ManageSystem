webpackJsonp([21],{Ew8L:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var o=t("ctop"),r={render:function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{staticClass:"container"},[t("div",{staticClass:"handle-box"},[t("div",[t("el-button",{attrs:{icon:"el-icon-arrow-left",round:"",size:"mini"},on:{click:e.onreturn}}),e._v(" "),t("el-button",{staticStyle:{float:"right"},on:{click:e.download}},[e._v("下载文件")])],1),e._v(" "),t("div",{attrs:{id:"page-content"}},[e._m(0),e._v(" "),t("table",{staticStyle:{width:"100%",border:"1px solid black","border-collapse":"collapse","margin-left":"auto","margin-right":"auto","text-align":"center"}},[t("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse",height:"40px","font-size":"16px"}},[t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"10%"}},[e._v("单位名称")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"40%"}},[e._v(e._s(e.form.companyname))]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"15%"}},[e._v("项目编号")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"35%"}},[e._v(e._s(e.form.projectnumber))])]),e._v(" "),t("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse",height:"40px","font-size":"16px"}},[t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("认定类型")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v(e._s(e.form.authenticationtype))]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("申请补助资金（万元）")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v(e._s(e.form.funds))])]),e._v(" "),t("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse",height:"40px","font-size":"16px"}},[t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("联系人")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.form.contactperson)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("联系电话")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.form.contactphone)+"\n                    ")])]),e._v(" "),t("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse",height:"40px","font-size":"16px"}},[t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("项目起止时间")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[t("span",[e._v(e._s(e.form.startdate))]),e._v(" "),t("span",[e._v("至")]),e._v("  \n                        "),t("span",[e._v(e._s(e.form.enddate))])])])]),e._v(" "),t("table",{staticStyle:{width:"100%",border:"1px solid black","border-collapse":"collapse","margin-left":"auto","margin-right":"auto","text-align":"center"}},[e._m(1),e._v(" "),t("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse",height:"40px","font-size":"16px"}},[t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{colspan:"3"}},[e._v("\n                        "+e._s(e.form.firstyear)+"年\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{colspan:"3"}},[e._v("\n                        "+e._s(e.form.secondyear)+"年\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{colspan:"3"}},[e._v("\n                        "+e._s(e.form.thirdyear)+"年\n                    ")])]),e._v(" "),e._m(2),e._v(" "),t("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse",height:"40px","font-size":"16px"}},[t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("销售总收入")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.firstsellincome)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{rowspan:"2"}},[e._v("\n                        "+e._s(e.formEPT.firstproductpercent)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("销售总收入")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.secondsellincome)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{rowspan:"2"}},[e._v("\n                        "+e._s(e.formEPT.secondproductpercent)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("销售总收入")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.thirdsellincome)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{rowspan:"2"}},[e._v("\n                        "+e._s(e.formEPT.thirdproductpercent)+"\n                    ")])]),e._v(" "),t("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse",height:"40px","font-size":"16px"}},[t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("专利产品")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.firstproductsincome)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("专利产品")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.secondproductsincome)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("专利产品")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.thirdproductsincome)+"\n                    ")])])]),e._v(" "),t("table",{staticStyle:{width:"100%",border:"1px solid black","border-collapse":"collapse","margin-left":"auto","margin-right":"auto","text-align":"center"}},[e._m(3),e._v(" "),t("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse",height:"40px","font-size":"16px"}},[t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{colspan:"5"}},[e._v("\n                        "+e._s(e.form.firstyear)+"年\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{colspan:"5"}},[e._v("\n                        "+e._s(e.form.secondyear)+"年\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{colspan:"5"}},[e._v("\n                        "+e._s(e.form.thirdyear)+"年\n                    ")])]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),t("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse",height:"40px","font-size":"16px"}},[t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("发明")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.firstinlandacceptinventionaccept)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.firstinlandacceptinvention)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.firstforeignacceptinventionaccept)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.firstforeignacceptinvention)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("发明")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.secondinlandacceptinventionaccept)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.secondinlandacceptinvention)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.secondforeignacceptinventionaccept)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.secondforeignacceptinvention)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("发明")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.thirdinlandacceptinventionaccept)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.thirdinlandacceptinvention)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.thirdforeignacceptinventionaccept)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.thirdforeignacceptinvention)+"\n                    ")])]),e._v(" "),t("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse",height:"40px","font-size":"16px"}},[t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("实用新型")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.firstinlandappearanceaccept)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.firstinlandappearance)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.firstforeignappearanceaccept)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.firstforeignappearance)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("实用新型")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.secondinlandappearanceaccept)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.secondinlandappearance)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.secondforeignappearanceaccept)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.secondforeignappearance)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("实用新型")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.thirdinlandappearanceaccept)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.thirdinlandappearance)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.thirdforeignappearanceaccept)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.thirdforeignappearance)+"\n                    ")])]),e._v(" "),t("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse",height:"40px","font-size":"16px"}},[t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("外观设计")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.firstinlandmodelaccept)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.firstinlandmodel)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.firstforeignmodelaccept)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.firstforeignmodel)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("外观设计")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.secondinlandmodelaccept)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.secondinlandmodel)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.secondforeignmodelaccept)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.secondforeignmodel)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("外观设计")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.thirdinlandmodelaccept)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.thirdinlandmodel)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.thirdforeignmodelaccept)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.thirdforeignmodel)+"\n                    ")])]),e._v(" "),t("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse",height:"40px","font-size":"16px"}},[t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("软著")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.firstinlandsciaccept)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.firstinlandsci)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.firstforeignsciaccept)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.firstforeignsci)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("软著")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.secondinlandsciaccept)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.secondinlandsci)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.secondforeignsciaccept)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.secondforeignsci)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("软著")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.thirdinlandsciaccept)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.thirdinlandsci)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.thirdforeignsciaccept)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.thirdforeignsci)+"\n                    ")])]),e._v(" "),t("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse",height:"40px","font-size":"16px"}},[t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("合计")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(parseInt(e.formEPT.firstinlandacceptinventionaccept)+parseInt(e.formEPT.firstinlandappearanceaccept)+parseInt(e.formEPT.firstinlandmodelaccept)+parseInt(e.formEPT.firstinlandsciaccept))+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(parseInt(e.formEPT.firstinlandacceptinvention)+parseInt(e.formEPT.firstinlandappearance)+parseInt(e.formEPT.firstinlandmodel)+parseInt(e.formEPT.firstinlandsci))+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(parseInt(e.formEPT.firstforeignacceptinventionaccept)+parseInt(e.formEPT.firstforeignappearanceaccept)+parseInt(e.formEPT.firstforeignmodelaccept)+parseInt(e.formEPT.firstforeignsciaccept))+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(parseInt(e.formEPT.firstforeignacceptinvention)+parseInt(e.formEPT.firstforeignappearance)+parseInt(e.formEPT.firstforeignmodel)+parseInt(e.formEPT.firstforeignsci))+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("合计")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(parseInt(e.formEPT.secondinlandacceptinventionaccept)+parseInt(e.formEPT.secondinlandappearanceaccept)+parseInt(e.formEPT.secondinlandmodelaccept)+parseInt(e.formEPT.secondinlandsciaccept))+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(parseInt(e.formEPT.secondinlandacceptinvention)+parseInt(e.formEPT.secondinlandappearance)+parseInt(e.formEPT.secondinlandmodel)+parseInt(e.formEPT.secondinlandsci))+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(parseInt(e.formEPT.secondforeignacceptinventionaccept)+parseInt(e.formEPT.secondforeignappearanceaccept)+parseInt(e.formEPT.secondforeignmodelaccept)+parseInt(e.formEPT.secondforeignsciaccept))+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(parseInt(e.formEPT.secondforeignacceptinvention)+parseInt(e.formEPT.secondforeignappearance)+parseInt(e.formEPT.secondforeignmodel)+parseInt(e.formEPT.secondforeignsci))+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("合计")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(parseInt(e.formEPT.thirdinlandacceptinventionaccept)+parseInt(e.formEPT.thirdinlandappearanceaccept)+parseInt(e.formEPT.thirdinlandmodelaccept)+parseInt(e.formEPT.firstinlandsciaccept))+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(parseInt(e.formEPT.thirdinlandacceptinvention)+parseInt(e.formEPT.thirdinlandappearance)+parseInt(e.formEPT.thirdinlandmodel)+parseInt(e.formEPT.thirdinlandsci))+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(parseInt(e.formEPT.thirdforeignacceptinventionaccept)+parseInt(e.formEPT.thirdforeignappearanceaccept)+parseInt(e.formEPT.thirdforeignmodelaccept)+parseInt(e.formEPT.thirdforeignsciaccept))+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(parseInt(e.formEPT.thirdforeignacceptinvention)+parseInt(e.formEPT.thirdforeignappearance)+parseInt(e.formEPT.thirdforeignmodel)+parseInt(e.formEPT.thirdforeignsci))+"\n                    ")])])]),e._v(" "),t("table",{staticStyle:{width:"100%",border:"1px solid black","border-collapse":"collapse","margin-left":"auto","margin-right":"auto","text-align":"center"}},[e._m(6),e._v(" "),t("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse",height:"40px","font-size":"16px"}},[t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{colspan:"3"}},[e._v("\n                        "+e._s(e.form.firstyear)+"年\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{colspan:"3"}},[e._v("\n                        "+e._s(e.form.secondyear)+"年\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{colspan:"3"}},[e._v("\n                        "+e._s(e.form.thirdyear)+"年\n                    ")])]),e._v(" "),t("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse",height:"40px","font-size":"16px"}},[t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"10%"}},[e._v("企业负责人（人）")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse",width:"10%"}},[e._v("\n                        "+e._s(e.formEPT.firstleader)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{rowspan:"2",width:"10%"}},[e._v("\n                        知识产权培训人数占企业总人数比率（%）\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"10%"}},[e._v("企业负责人（人）")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse",width:"10%"}},[e._v("\n                        "+e._s(e.formEPT.secondleader)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse",width:"10%"},attrs:{rowspan:"2"}},[e._v("\n                        知识产权培训人数占企业总人数比率（%）\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"10%"}},[e._v("企业负责人（人）")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse",width:"10%"}},[e._v("\n                        "+e._s(e.formEPT.thirdleader)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse",width:"10%"},attrs:{rowspan:"2"}},[e._v("\n                        知识产权培训人数占企业总人数比率（%）\n                    ")])]),e._v(" "),t("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse",height:"40px","font-size":"16px"}},[t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"10%"}},[e._v("科技人员（人）")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.firsttechnicalperson)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"10%"}},[e._v("科技人员（人）")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.secondtechnicalperson)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"10%"}},[e._v("科技人员（人）")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.thirdtechnicalperson)+"\n                    ")])]),e._v(" "),t("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse",height:"40px","font-size":"16px"}},[t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"10%"}},[e._v("企业员工（人）")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.firststaff)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.firstpercent)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"10%"}},[e._v("企业员工（人）")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.secondstaff)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.secondpercent)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"10%"}},[e._v("企业员工（人）")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.thirdstaff)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.formEPT.thirdpercent)+"\n                    ")])]),e._v(" "),t("tr",{staticClass:"text-left"},[t("td",{staticClass:"method titfont",staticStyle:{border:"1px solid black","border-collapse":"collapse","font-size":"16px","text-align":"left","vertical-align":"top"},attrs:{colspan:"9"}},[t("strong",[e._v("知识产权工作实施方案（分年度安排及完成目标等）:")]),t("br"),e._v(e._s(e.form.implementationplan)+"\n                    ")])]),e._v(" "),t("tr",{staticClass:"text-left"},[t("td",{staticClass:"method titfont",staticStyle:{border:"1px solid black","border-collapse":"collapse","font-size":"16px","text-align":"left","vertical-align":"top"},attrs:{colspan:"9"}},[t("strong",[e._v("财政资金用途：")]),t("br"),e._v(e._s(e.form.fundspurpose)+"\n                    ")])])]),e._v(" "),t("table",{staticStyle:{width:"100%",border:"1px solid black","border-collapse":"collapse","margin-left":"auto","margin-right":"auto","text-align":"center"}},[t("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse",height:"40px","font-size":"16px"}},[t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"10%"}},[e._v("单位负责人")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.form.responseperson)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"10%"}},[e._v("填表人")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.form.fillformperson)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"10%"}},[e._v("联系电话")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("\n                        "+e._s(e.form.phone)+"\n                    ")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"10%"}},[e._v("填表日期")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"150px"}},[e._v("\n                        "+e._s(e.form.reportdate)+"\n                    ")])])])]),e._v(" "),t("h2",{staticStyle:{"text-align":"left"}},[e._v("附件")]),e._v(" "),t("table",{staticClass:"table table-bordered",staticStyle:{"margin-bottom":"0px",border:"1px solid black","border-collapse":"collapse","font-size":"16px",width:"100%"}},[t("tbody",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[t("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse","text-align":"center","vertical-align":"middle"},attrs:{width:"20%"}},[e._v("附件")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"90%"}},[t("ul",e._l(e.appendix,function(l){return t("span",{key:l.id},[t("b",[e._v(e._s(l.type+":"))]),e._v("  "),t("a",{attrs:{href:e.rooturl+l.url}},[e._v(e._s(l.name.slice(14))),t("br")])])}))])])])])])])},staticRenderFns:[function(){var e=this.$createElement,l=this._self._c||e;return l("div",[l("h1",{staticStyle:{"text-align":"center","font-family":"'Times New Roman', Times, serif"}},[this._v("度假区知识产权试点示范单位任务书")])])},function(){var e=this.$createElement,l=this._self._c||e;return l("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse",height:"40px","font-size":"16px"}},[l("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{colspan:"12"}},[this._v("新增经济效益")])])},function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse",height:"40px","font-size":"16px"}},[t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"10%"}},[e._v("类别")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("收入")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("专利产品销售收入占销售总收入比重")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"10%"}},[e._v("类别")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("收入")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("专利产品销售收入占销售总收入比重")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"10%"}},[e._v("类别")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("收入")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("专利产品销售收入占销售总收入比重")])])},function(){var e=this.$createElement,l=this._self._c||e;return l("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse",height:"40px","font-size":"16px"}},[l("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{colspan:"15"}},[this._v("新增专利数")])])},function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse",height:"40px","font-size":"16px"}},[t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{rowspan:"2",width:"10%"}},[e._v("专利类别")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{colspan:"2"}},[e._v("中国专利")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{colspan:"2"}},[e._v("外国专利")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{rowspan:"2",width:"10%"}},[e._v("专利类别")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{colspan:"2"}},[e._v("中国专利")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{colspan:"2"}},[e._v("外国专利")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{rowspan:"2",width:"10%"}},[e._v("专利类别")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{colspan:"2"}},[e._v("中国专利")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{colspan:"2"}},[e._v("外国专利")])])},function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse",height:"40px","font-size":"16px"}},[t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("申请")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("授权")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("申请")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("授权")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("申请")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("授权")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("申请")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("授权")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("申请")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("授权")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("申请")]),e._v(" "),t("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[e._v("授权")])])},function(){var e=this.$createElement,l=this._self._c||e;return l("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse",height:"40px","font-size":"16px"}},[l("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{colspan:"9"}},[this._v("知识产权培训")])])}]},a=t("VU/8")(o.a,r,!1,null,null,null);l.default=a.exports},ctop:function(e,l,t){"use strict";(function(e){var o=t("7t+N"),r=(t.n(o),t("zmOW"));t.n(r);l.a={data:function(){return{rooturl:"http://49.4.80.58:3000",companyname:"",form:{id:"",companyid:"",companyname:"",projectnumber:"",authenticationtype:"",startdate:"",enddate:"",funds:"",contactperson:"",contactphone:"",implementationplan:"",fundspurpose:"",responseperson:"",fillformperson:"",phone:"",reportdate:"",intellectualid:"",firstyear:"",secondyear:"",thirdyear:""},formEPT:{id:0,intellectualid:0,firstsellincome:"",firstproductpercent:"",firstproductsincome:"",secondsellincome:"",secondproductpercent:"",secondproductsincome:"",thirdsellincome:"",thirdproductpercent:"",thirdproductsincome:"",firstinlandacceptinventionaccept:"",firstforeignacceptinventionaccept:"",firstinlandmodelaccept:"",firstforeignmodelaccept:"",firstinlandappearanceaccept:"",firstforeignappearanceaccept:"",firstinlandsciaccept:"",firstforeignsciaccept:"",firstinlandacceptinvention:"",firstforeignacceptinvention:"",firstinlandmodel:"",firstforeignmodel:"",firstinlandappearance:"",firstforeignappearance:"",firstinlandsci:"",firstforeignsci:"",secondinlandacceptinventionaccept:"",secondforeignacceptinventionaccept:"",secondinlandmodelaccept:"",secondforeignmodelaccept:"",secondinlandappearanceaccept:"",secondforeignappearanceaccept:"",secondinlandsciaccept:"",secondforeignsciaccept:"",secondinlandacceptinvention:"",secondforeignacceptinvention:"",secondinlandmodel:"",secondforeignmodel:"",secondinlandappearance:"",secondforeignappearance:"",secondinlandsci:"",secondforeignsci:"",thirdinlandacceptinventionaccept:"",thirdforeignacceptinventionaccept:"",thirdinlandmodelaccept:"",thirdforeignmodelaccept:"",thirdinlandappearanceaccept:"",thirdforeignappearanceaccept:"",thirdinlandsciaccept:"",thirdforeignsciaccept:"",thirdinlandacceptinvention:"",thirdforeignacceptinvention:"",thirdinlandmodel:"",thirdforeignmodel:"",thirdinlandappearance:"",thirdforeignappearance:"",thirdinlandsci:"",thirdforeignsci:"",firstleader:"",firsttechnicalperson:"",firststaff:"",firstpercent:"",secondleader:"",secondtechnicalperson:"",secondstaff:"",secondpercent:"",thirdleader:"",thirdtechnicalperson:"",thirdstaff:"",thirdpercent:""},appendix:{id:"",scienceprojectid:"",name:"",type:"",url:""},fileList:[]}},created:function(){this.getdata()},methods:{download:function(){e(document).ready(function(e){e("#page-content").wordExport("度假区知识产权试点示范单位任务书")})},onreturn:function(){this.$router.go(-1)},getdata:function(){var e=this;this.$api.get("api/Intellectualdemonstrations/"+this.$route.query.proid,null,function(l){e.$set(e.form,"firstyear",l.firstyear),e.$set(e.form,"secondyear",l.secondyear),e.$set(e.form,"thirdyear",l.thirdyear),e.form=l,e.$api.get("api/Companys/"+l.companyid,null,function(l){console.log(l),console.log("22"),e.$set(e.form,"companyname",l.companyname)}),e.$api.get("api/Intellectualdemonstrationexpects?filter="+encodeURI('{"where":{"intellectualid":{"like":"%'+l.id+'%"}}}'),null,function(l){e.formEPT=l[0]}),e.$api.get("api/Intellectualdemonstrationstorages?filter="+encodeURI('{"where":{"intellectualdemonstrationid":{"like":"%'+l.id+'%"}}}'),null,function(l){for(var t in e.appendix=l,e.appendix)switch(e.appendix[t].type){case"file1":e.$set(e.appendix[t],"type","度假区企业知识产权试点示范认定申请表");break;case"file2":e.$set(e.appendix[t],"type","企业营业执照副本复印件");break;case"file3":e.$set(e.appendix[t],"type","企业知识产权工作报告");break;case"file4":e.$set(e.appendix[t],"type","专利证书及缴纳当年年费的收据复印件");break;case"file5":e.$set(e.appendix[t],"type","企业相关知识产权制度、战略复印件");break;case"file6":e.$set(e.appendix[t],"type","企业近三个会计年度财务报表和知识产权经费情况表");break;case"file7":e.$set(e.appendix[t],"type","申请单位无侵犯他人知识产权声明书");break;case"file8":e.$set(e.appendix[t],"type","知识产权工作报告所填报内容对应的各项证明材料");break;case"file9":e.$set(e.appendix[t],"type","其他相关证明材料上传");break;case"opinion1":e.$set(e.appendix[t],"type","专家评审意见");break;case"opinion2":e.$set(e.appendix[t],"type","签订合同评审意见");break;case"opinion3":e.$set(e.appendix[t],"type","中期检查评审意见");break;case"opinion4":e.$set(e.appendix[t],"type","验收评审意见")}})})}}}}).call(l,t("7t+N"))}});