"use strict";(self["webpackChunkshop_project"]=self["webpackChunkshop_project"]||[]).push([[773],{7773:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var s=function(){var e=this,t=e._self._c;return t("div",[t("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[t("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),t("el-breadcrumb-item",[e._v("商品管理")]),t("el-breadcrumb-item",[e._v("商品分类")])],1),t("el-card",[t("el-row",[t("el-col",[t("el-button",{attrs:{type:"primary"},on:{click:e.showAddCateDialog}},[e._v("添加按钮")])],1)],1),t("tree-table",{staticClass:"treeTable",attrs:{data:e.catelist,columns:e.columns,border:"","show-index":"","index-text":"#","show-row-hover":!1,"expand-type":!1,"selection-type":!1},scopedSlots:e._u([{key:"isok",fn:function(e){return[!1===e.row.cat_deleted?t("i",{staticClass:"el-icon-success",staticStyle:{color:"lightgreen"}}):t("i",{staticClass:"el-icon-error",staticStyle:{color:"red"}})]}},{key:"order",fn:function(a){return[0===a.row.cat_level?t("el-tag",{attrs:{size:"mini"}},[e._v("一级")]):1===a.row.cat_level?t("el-tag",{attrs:{type:"success",size:"mini"}},[e._v("二级")]):t("el-tag",{attrs:{type:"error",size:"mini"}},[e._v("三级")])]}}])},[t("template",{slot:"option"},[t("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"}},[e._v("编辑")]),t("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"}},[e._v("删除")])],1)],2),t("el-pagination",{attrs:{"current-page":e.queryInfo.pagenum,"page-sizes":[3,5,10,15],"page-size":e.queryInfo.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),t("el-dialog",{attrs:{title:"添加分类",visible:e.addCateDialogVisible,width:"50%"},on:{"update:visible":function(t){e.addCateDialogVisible=t},close:e.addCateDialogClose}},[t("el-form",{ref:"addCateFormRef",attrs:{model:e.addCateForm,rules:e.addCateFormRules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"分类名称：",prop:"cat_name"}},[t("el-input",{model:{value:e.addCateForm.cat_name,callback:function(t){e.$set(e.addCateForm,"cat_name",t)},expression:"addCateForm.cat_name"}})],1),t("el-form-item",{attrs:{label:"父级分类："}},[t("el-cascader",{attrs:{options:e.parentCateList,props:e.cascaderProps,clearable:""},on:{change:e.parentCateChange},model:{value:e.selectedKeys,callback:function(t){e.selectedKeys=t},expression:"selectedKeys"}})],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.addCateDialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.addCate}},[e._v("确 定")])],1)],1)],1)},i=[],r={data(){return{queryInfo:{type:3,pagenum:1,pagesize:5},catelist:[],total:0,columns:[{label:"分类名称",prop:"cat_name"},{label:"是否有效",type:"template",template:"isok"},{label:"排序",type:"template",template:"order"},{label:"操作",type:"template",template:"option"}],addCateDialogVisible:!1,addCateForm:{cat_name:"",cat_pid:0,cat_level:0},addCateFormRules:{cat_name:[{required:!0,message:"请输入分类名称",trigger:"blur"}]},parentCateList:[],selectedKeys:[],cascaderProps:{expandTrigger:"hover",value:"cat_id",label:"cat_name",children:"children",checkStrictly:!0}}},created(){this.getCateList()},methods:{async getCateList(){const{data:e}=await this.$http.get("categories",{params:this.queryInfo});if(200!==e.meta.status)return this.$message.error("获取商品分类数据列表失败！");this.catelist=e.data.result,this.total=e.data.total},handleSizeChange(e){this.queryInfo.pagesize=e,this.getCateList()},handleCurrentChange(e){this.queryInfo.pagenum=e,this.getCateList()},showAddCateDialog(){this.getparentCateList(),this.addCateDialogVisible=!0},async getparentCateList(){const{data:e}=await this.$http.get("categories",{params:{type:2}});if(200!==e.meta.status)return this.$message.error("获取父级分类数据失败！");this.parentCateList=e.data},parentCateChange(){this.selectedKeys.length>0?(this.addCateForm.cat_pid=this.selectedKeys[this.selectedKeys.length-1],this.addCateForm.cat_level=this.selectedKeys.length):(this.addCateForm.cat_pid=0,this.addCateForm.cat_level=0)},addCate(){this.$refs.addCateFormRef.validate((async e=>{if(!e)return;const{data:t}=await this.$http.post("categories",this.addCateForm);if(201!==t.meta.status)return this.$message.error("添加分类失败！");this.$message.success("添加分类成功！"),this.getCateList(),this.addCateDialogVisible=!1}))},addCateDialogClose(){this.$refs.addCateFormRef.resetFields(),this.selectedKeys=[],this.addCateForm.cat_pid=0,this.addCateForm.cat_level=0}}},l=r,o=a(1001),n=(0,o.Z)(l,s,i,!1,null,"195a48c0",null),d=n.exports}}]);
//# sourceMappingURL=773.7be4971a.js.map