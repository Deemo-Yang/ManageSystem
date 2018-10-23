webpackJsonp([1],{eQO9:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=t("tgjG"),a=t.n(o),s=t("mtWM"),l=t.n(s),n={name:"register",data:function(){var e=this;return{checked:"",dialogVisible:!1,companys:[],img:a.a,form:{companyname:"",companytype:"",contactperson:"",phone:"",legalperson:"",organizationcode:"",registeraddr:"",workaddr:"",password:"",checkpass:"",email:""},rules:{companyname:[{validator:function(e,r,t){""===r?t(new Error("请输入用户名")):l.a.get("http://132.232.146.241:3000/api/Companys?filter="+encodeURI('{"where":{"and":[{"companyname":"'+r+'"}]}}'),null).then(function(e){console.log(r),0===e.data.length?t():t(new Error("该用户名已存在"))}).catch(function(e){console.log(e)})},trigger:"blur"},{required:!0,message:"请输入公司名"}],companytype:[{required:!0,message:"请输入公司类型",trigger:"blur"}],contactperson:[{required:!0,message:"请输入联系人",trigger:"blur"}],phone:[{required:!0,message:"请输入联系电话",trigger:"blur"},{type:"number",message:"请正确填写联系电话"}],legalperson:[{required:!0,message:"请输入法人",trigger:"blur"}],organizationcode:[{required:!0,message:"请输入组织机构代码",trigger:"blur"},{type:"number",message:"请正确填写组织机构代码"}],workaddr:[{required:!0,message:"请输入办公地址",trigger:"blur"}],registeraddr:[{required:!0,message:"请输入注册地址",trigger:"blur"}],password:[{validator:function(r,t,o){""===t?o(new Error("请输入密码")):t.length<8?o(new Error("密码位数不能小于8！")):(""!==e.form.checkpass&&e.$refs.form.validateField("checkpass"),o())},trigger:"blur"},{required:!0,message:"请输入密码"}],checkpass:[{validator:function(r,t,o){""===t?o(new Error("请再次输入密码")):t!==e.form.password?o(new Error("两次输入密码不一致!")):o()},trigger:"blur"},{required:!0,message:"请重新输入密码"}],email:[{validator:function(e,r,t){var o=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;if(!r)return t(new Error("邮箱不能为空"));setTimeout(function(){o.test(r)?t():t(new Error("请输入正确的邮箱格式"))},100)},trigger:"blur"},{required:!0,messsage:"请输入邮箱"}]}}},computed:{confirm:function(){return!this.checked}},created:function(){},methods:{onSubmit:function(){var e=this;this.$refs.form.validate(function(r){if(!r)return console.log("error submit!!"),!1;e.$refs.upload.submit()})},onreturn:function(){this.$router.go(-1)},uploadSuccess:function(e){var r=this;console.log(e[0].url),this.$api.post("/api/myusers",{id:0,username:this.form.companyname,email:this.form.email,password:this.$md5(this.form.password),status:0},function(t){console.log(t.id),r.$api.post("/api/Companys",{id:0,companyname:r.form.companyname,companytype:r.form.companytype,contactperson:r.form.contactperson,phone:r.form.phone,legalperson:r.form.legalperson,organizationcode:r.form.organizationcode,registeraddr:r.form.registeraddr,workaddr:r.form.workaddr,licenseurl:e[0].url,status:0,usersid:t.id},function(e){r.$router.push("/login"),r.$alert("提交成功！请等待审核","提示",{confirmButtonText:"确定",type:"success"})})})},beforeUpload:function(e){var r="jpg"===e.name.split(".")[1],t="jpeg"===e.name.split(".")[1],o="png"===e.name.split(".")[1],a=e.size/1024/1024<1;return r||t||o?a||this.$message.error("上传文件大小不能超过 1MB!"):this.$message.error("上传文件只能是 jpg、jpeg、png 格式!"),r||t||o&&a}}},i={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"img",staticStyle:{background:"url('../static/img/pic3.jpg')","background-size":"100% 100%"}},[t("el-row",[t("el-col",{staticStyle:{"margin-top":"100px"},attrs:{span:12,offset:6}},[t("el-card",{staticClass:"box-card",staticStyle:{"border-radius":"15px",height:"700px"}},[t("div",{staticStyle:{height:"600px",overflow:"auto","margin-top":"30px"}},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("i",{staticClass:"el-icon-edit"}),t("span",[e._v("  新用户注册")])]),e._v(" "),t("el-row",[t("el-col",{attrs:{span:12}},[t("div",{staticClass:"text item"},[t("el-form",{ref:"form",attrs:{model:e.form,"label-width":"140px",rules:e.rules}},[t("el-form-item",{attrs:{label:"用户名（单位名）",prop:"companyname",placeholder:"填写单位名"}},[t("el-input",{model:{value:e.form.companyname,callback:function(r){e.$set(e.form,"companyname",r)},expression:"form.companyname"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{attrs:{type:"password"},model:{value:e.form.password,callback:function(r){e.$set(e.form,"password",r)},expression:"form.password"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"再次输入密码",prop:"checkpass"}},[t("el-input",{attrs:{type:"password"},model:{value:e.form.checkpass,callback:function(r){e.$set(e.form,"checkpass",r)},expression:"form.checkpass"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"E-mail",prop:"email"}},[t("el-input",{attrs:{type:"email"},model:{value:e.form.email,callback:function(r){e.$set(e.form,"email",r)},expression:"form.email"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"单位类型",prop:"companytype"}},[t("el-select",{attrs:{placeholder:"请选择单位类型"},model:{value:e.form.companytype,callback:function(r){e.$set(e.form,"companytype",r)},expression:"form.companytype"}},[t("el-option",{attrs:{label:"民营企业",value:"民营企业"}}),e._v(" "),t("el-option",{attrs:{label:"事业单位",value:"事业单位"}}),e._v(" "),t("el-option",{attrs:{label:"国有企业",value:"国有企业"}}),e._v(" "),t("el-option",{attrs:{label:"混合制企业",value:"混合制企业"}}),e._v(" "),t("el-option",{attrs:{label:"学校",value:"学校"}}),e._v(" "),t("el-option",{attrs:{label:"科研院所",value:"科研院所"}}),e._v(" "),t("el-option",{attrs:{label:"其他",value:"其他"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"联系人姓名",prop:"contactperson"}},[t("el-input",{model:{value:e.form.contactperson,callback:function(r){e.$set(e.form,"contactperson",r)},expression:"form.contactperson"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"联系人电话",prop:"phone"}},[t("el-input",{model:{value:e.form.phone,callback:function(r){e.$set(e.form,"phone",e._n(r))},expression:"form.phone"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"法人代表",prop:"legalperson"}},[t("el-input",{model:{value:e.form.legalperson,callback:function(r){e.$set(e.form,"legalperson",r)},expression:"form.legalperson"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"统一社会信用代码",prop:"organizationcode"}},[t("el-input",{model:{value:e.form.organizationcode,callback:function(r){e.$set(e.form,"organizationcode",e._n(r))},expression:"form.organizationcode"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"注册地址",prop:"registeraddr"}},[t("el-input",{model:{value:e.form.registeraddr,callback:function(r){e.$set(e.form,"registeraddr",r)},expression:"form.registeraddr"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"办公地址",prop:"workaddr"}},[t("el-input",{model:{value:e.form.workaddr,callback:function(r){e.$set(e.form,"workaddr",r)},expression:"form.workaddr"}})],1)],1)],1)]),e._v(" "),t("el-col",{attrs:{span:12,align:"center"}},[t("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"http://132.232.146.241:3000/api/StorageFiles/upload","list-type":"picture",limit:1,"auto-upload":!1,"before-upload":e.beforeUpload,"on-success":e.uploadSuccess}},[t("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("点击选取营业执照")]),e._v(" "),t("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("上传营业执照文件，只能上传jpg/png/jpeg文件,大小不超过1MB")])],1)],1)],1),e._v(" "),t("el-row",[t("el-col",{attrs:{span:6,align:"center"}},[t("el-checkbox",{model:{value:e.checked,callback:function(r){e.checked=r},expression:"checked"}},[e._v("我已仔细阅读并接受"),t("el-popover",{attrs:{placement:"top",width:"850",trigger:"click"}},[t("h1",{attrs:{align:"center"}},[e._v("昆明滇池国家旅游度假区经济发展局创新创业项目网上申报说明")]),e._v(" "),t("p",[e._v("  昆明滇池国家旅游度假区经济发展局创新创业项目综合管理平台是昆明滇池国家旅游度假区各类科技计划项目信息网络报送的统一入口。申报单位须仔细阅读如下申报说明，只有申报单位确认遵守如下约定才能进行申报帐号注册、项目信息报送等操作。")]),e._v(" "),t("p",[e._v("   1、申报单位必须严格遵守国家有关信息保密的法律法规，不能在本系统报送任何涉密信息。")]),e._v(" "),t("p",[e._v("   2、申报单位在帐号注册、项目信息报送过程中必须遵守国家有关网络使用、信息安全的法律法规。")]),e._v(" "),t("p",[e._v("   3、申报单位必须保证各项注册信息的真实性、准确定，并配合完成管理单位对注册信息的各类审核确认工作。")]),e._v(" "),t("p",[e._v("   4、申报单位须仔细阅读相关科技计划的项目管理文件或办法，确认本单位具备相关项目申报资格。")]),e._v(" "),t("p",[e._v("   5、申报单位在注册完成后须确保帐号信息的安全性，若发现任何非法使用帐号信息或存在安全隐患的情况，须立即通知管理单位。")]),e._v(" "),t("p",[e._v("   6、注册完成后如出现注册信息变更，请及时将变更内容加盖公章后送至管理单位进行修改。")]),e._v(" "),t("el-button",{attrs:{slot:"reference",size:"middle",type:"text"},slot:"reference"},[e._v("使用说明")])],1)],1)],1),e._v(" "),t("el-col",{attrs:{span:18}},[t("div",[t("el-button",{staticStyle:{"margin-left":"150px"},attrs:{type:"primary",disabled:e.confirm},on:{click:e.onSubmit}},[e._v("提交注册申请")]),e._v(" "),t("el-button",{on:{click:e.onreturn}},[e._v("返回")])],1)])],1)],1)]),e._v(" "),t("el-dialog",{attrs:{title:"提示",visible:e.dialogVisible,width:"30%","before-close":e.handleClose},on:{"update:visible":function(r){e.dialogVisible=r}}},[t("span",[e._v("提交成功，请等待审核。。。")]),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.dialogVisible=!1}}},[e._v("确 定")])],1)])],1)],1)],1)},staticRenderFns:[]};var p=t("VU/8")(n,i,!1,function(e){t("j/au")},"data-v-87370bfc",null);r.default=p.exports},"j/au":function(e,r){},tgjG:function(e,r,t){e.exports=t.p+"static/img/pic2.ad9c3e5.jpg"}});