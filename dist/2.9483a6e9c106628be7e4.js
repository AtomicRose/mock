webpackJsonp([2,13],{12:function(e,t,r){"use strict";function o(e){r(215)}Object.defineProperty(t,"__esModule",{value:!0});var a=r(217),s=r.n(a),n=r(218),i=r(1),c=o,p=i(s.a,n.a,!1,c,null,null);t.default=p.exports},174:function(e,t,r){var o=r(175);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);r(149)("2cb70d49",o,!0)},175:function(e,t,r){t=e.exports=r(148)(),t.push([e.i,".em-new .ivu-form-item-label{font-weight:600;font-size:13px}.em-new .ivu-form-item-label span{font-weight:400;font-size:12px;color:#586069}.em-new__content{padding:66px 260px 42px;margin-top:20px;width:100%;background:#fff;-webkit-box-shadow:0 2px 3px #eee;box-shadow:0 2px 3px #eee;border-radius:4px;margin-bottom:20px}.em-new__form-description{line-height:18px;margin-top:5px}.em-new__form-hr{border-bottom:1px solid #eee;padding-bottom:30px}",""])},176:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(2),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(o);t.default={name:"newProject",data:function(){return{remoteLoading:!1,users:[],groups:[],projectUrl:"",confirmName:"",form:{groupId:"",projectId:"",projectName:"",projectUrl:"",projectDesc:"",projectSwagger:"",projectMembers:[]}}},props:{projectData:null},mounted:function(){var e=this,t=this.projectData;this.$nextTick(function(){e.$refs.projectName.focus()}),t?(this.remoteLoading=!0,this.users=t.members.map(function(e){return{value:e._id,label:e.nick_name}}),this.form.projectId=t._id,this.form.projectName=t.name,this.form.projectDesc=t.description,this.form.projectSwagger=t.swagger_url,this.projectUrl=t.url.slice(1),this.$nextTick(function(){e.remoteLoading=!1,e.form.projectMembers=e.users.map(function(e){return e.value})}),t.group?(this.groups=[{value:t.group._id,label:t.group.name}],this.form.groupId=t.group._id):(this.groups=[{value:t.user._id,label:t.user.nick_name}],this.form.groupId=t.user._id)):(this.fetchGroup(),this.form.groupId=this.user.id)},computed:{user:function(){return this.$store.state.user},isEdit:function(){return!!this.projectData},isGroup:function(){return this.projectData?!!this.projectData.group:this.form.groupId!==this.user.id}},methods:{convertUrl:function(e){var t="/"+e;return"/"===t?"/":t.replace(/\/\//g,"/").replace(/\/$/,"")},fetchGroup:function(){var e=this;a.group.getList().then(function(t){t.data.success&&(e.groups=[{value:e.user.id,label:e.user.nickName}].concat(t.data.data.map(function(e){return{value:e._id,label:e.name}})))})},submit:function(){var e=this,t={id:this.form.projectId,name:this.form.projectName,group:this.form.groupId,swagger_url:this.form.projectSwagger,description:this.form.projectDesc,url:this.convertUrl(this.projectUrl),members:this.isGroup?[]:this.form.projectMembers};this.isEdit?a.project.update({data:t}).then(function(t){t.data.success&&(e.$Message.success(e.$t("p.new.form.success.update")),e.$store.commit("mock/SET_REQUEST_PARAMS",{pageIndex:1}),e.$store.dispatch("mock/FETCH",e.$route))}):(t.group===this.user.id&&(t.group=""),a.project.create({data:t}).then(function(r){if(r.data.success)if(e.$Message.success(e.$t("p.new.form.success.create")),t.group){var o=e.groups.filter(function(e){return e.value===t.group})[0];e.$router.push("/group/"+o.value+"?name="+o.label)}else e.$router.push("/")}))},remote:function(e){var t=this;e?(this.remoteLoading=!0,a.u.getList({params:{keywords:e}}).then(function(r){if(t.remoteLoading=!1,r.data.success){var o=r.data.data.map(function(e){return{value:e._id,label:e.nick_name,userName:e.name}});t.users=o.filter(function(t){var r=t.label.toLowerCase(),o=t.userName.toLowerCase(),a=e.toLowerCase();return r.indexOf(a)>-1||o.indexOf(a)>-1})}})):this.users=[]},remove:function(){var e=this,t=this.projectData._id;this.$store.dispatch("project/REMOVE",t).then(function(){e.$Message.success(e.$t("p.new.form.success.delete",{name:e.projectData.name})),e.$router.push("/")})}}}},177:function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"fade"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.pageAnimated,expression:"pageAnimated"}],staticClass:"em-container"},[r("div",{staticClass:"em-new__content"},[r("Form",{ref:"formValidate",attrs:{"label-position":"top",model:e.form}},[r("Form-item",{attrs:{label:e.$tc("p.new.form.name",1)}},[r("template",{slot:"label"},[e._v("\n            "+e._s(e.$tc("p.new.form.name",1))+"\n            "),r("Tooltip",{attrs:{content:e.$tc("p.new.form.name",2)}},[r("Icon",{attrs:{type:"help-circled"}})],1)],1),r("Row",[r("Col",{attrs:{span:"7"}},[r("Form-item",[r("i-select",{attrs:{disabled:e.isEdit},model:{value:e.form.groupId,callback:function(t){e.$set(e.form,"groupId",t)},expression:"form.groupId"}},e._l(e.groups,function(t){return r("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])}))],1)],1),r("Col",{staticStyle:{"text-align":"center"},attrs:{span:"1"}},[e._v("/")]),r("Col",{attrs:{span:"16"}},[r("Form-item",[r("i-input",{ref:"projectName",attrs:{placeholder:"example"},model:{value:e.form.projectName,callback:function(t){e.$set(e.form,"projectName",t)},expression:"form.projectName"}})],1)],1)],1)],2),r("Form-item",{attrs:{label:e.$tc("p.new.form.url",1)}},[r("template",{slot:"label"},[e._v("\n            "+e._s(e.$tc("p.new.form.url",1))+"\n            "),r("Tooltip",{attrs:{content:e.$tc("p.new.form.url",2)}},[r("Icon",{attrs:{type:"help-circled"}})],1)],1),r("i-input",{attrs:{placeholder:"example"},model:{value:e.projectUrl,callback:function(t){e.projectUrl=t},expression:"projectUrl"}},[r("span",{attrs:{slot:"prepend"},slot:"prepend"},[e._v("/")])])],2),r("Form-item",{staticClass:"em-new__form-hr",attrs:{label:e.$tc("p.new.form.description",1)}},[r("i-input",{attrs:{placeholder:e.$tc("p.new.form.description",2)},model:{value:e.form.projectDesc,callback:function(t){e.$set(e.form,"projectDesc",t)},expression:"form.projectDesc"}})],1),r("Form-item",{attrs:{label:e.$tc("p.new.form.swagger",0)}},[r("template",{slot:"label"},[e._v("\n            "+e._s(e.$tc("p.new.form.swagger",0))+"\n            "),r("span",[e._v("("+e._s(e.$tc("p.new.form.swagger",1))+")")])]),r("i-input",{attrs:{placeholder:"http://example.com/swagger.json"},model:{value:e.form.projectSwagger,callback:function(t){e.$set(e.form,"projectSwagger",t)},expression:"form.projectSwagger"}}),r("p",{staticClass:"em-new__form-description"},[e._v("\n          "+e._s(e.$tc("p.new.form.swagger",2))+" "),r("router-link",{attrs:{to:"/docs#swagger"}},[r("Icon",{attrs:{type:"help-circled"}})],1)],1)],2),r("Form-item",{staticClass:"em-new__form-hr",attrs:{label:e.$t("p.new.form.member[0]")}},[r("template",{slot:"label"},[e._v("\n            "+e._s(e.$t("p.new.form.member[0]"))+"\n            "),r("span",[e._v("("+e._s(e.isGroup?e.$tc("p.new.form.member[1]",2):e.$tc("p.new.form.member[1]",1))+")")])]),r("i-select",{attrs:{multiple:"",filterable:"",remote:"",disabled:e.isGroup,placeholder:e.$t("p.new.form.member[2]"),"remote-method":e.remote,loading:e.remoteLoading},model:{value:e.form.projectMembers,callback:function(t){e.$set(e.form,"projectMembers",t)},expression:"form.projectMembers"}},e._l(e.users,function(t){return r("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])}))],2),r("Form-item",{class:{"em-new__form-hr":e.isEdit}},[r("Button",{attrs:{type:"primary",long:""},on:{click:e.submit}},[e._v(e._s(e.isEdit?e.$t("p.new.form.button.update"):e.$t("p.new.form.button.create")))])],1),e.isEdit?r("Form-item",{attrs:{label:e.$tc("p.new.form.confirm",0)}},[r("i-input",{attrs:{placeholder:e.$tc("p.new.form.confirm",1)},model:{value:e.confirmName,callback:function(t){e.confirmName=t},expression:"confirmName"}}),r("p",{staticClass:"em-new__form-description"},[e._v("\n          "+e._s(e.$tc("p.new.form.confirm",2))+" "),r("strong",{staticStyle:{"word-break":"break-all"}},[e._v("\n            "+e._s(e.projectData.user&&e.projectData.user.nick_name||e.projectData.group&&e.projectData.group.name)+" / "+e._s(e.projectData.name)+"\n          ")])])],1):e._e(),e.isEdit?r("Form-item",[r("Button",{attrs:{type:"error",long:"",disabled:e.confirmName!==e.projectData.name},on:{click:e.remove}},[e._v(e._s(e.$t("p.new.form.button.delete")))])],1):e._e()],1)],1)])])},a=[],s={render:o,staticRenderFns:a};t.a=s},215:function(e,t,r){var o=r(216);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);r(149)("ce93467e",o,!0)},216:function(e,t,r){t=e.exports=r(148)(),t.push([e.i,".em-new .ivu-form-item-label{font-weight:600;font-size:13px}.em-new .ivu-form-item-label span{font-weight:400;font-size:12px;color:#586069}.em-new__content{padding:66px 260px 42px;margin-top:20px;width:100%;background:#fff;-webkit-box-shadow:0 2px 3px #eee;box-shadow:0 2px 3px #eee;border-radius:4px;margin-bottom:20px}.em-new__form-description{line-height:18px;margin-top:5px}.em-new__form-hr{border-bottom:1px solid #eee;padding-bottom:30px}",""])},217:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(30),a=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default={name:"new",components:{Project:a.default}}},218:function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"em-new"},[r("em-header",{attrs:{icon:"plus-round",title:e.$t("p.new.header.title"),description:e.$t("p.new.header.description")}}),r("em-keyboard-short"),r("project")],1)},a=[],s={render:o,staticRenderFns:a};t.a=s},30:function(e,t,r){"use strict";function o(e){r(174)}Object.defineProperty(t,"__esModule",{value:!0});var a=r(176),s=r.n(a),n=r(177),i=r(1),c=o,p=i(s.a,n.a,!1,c,null,null);t.default=p.exports}});