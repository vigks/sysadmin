<template>
    <div class="page-content">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>权限管理</el-breadcrumb-item>
            <el-breadcrumb-item>角色管理</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="btn-group">
            <el-button type="primary">新建</el-button>
            <el-button type="primary">编辑</el-button>
            <el-button type="primary">删除</el-button>
        </div>
        <div class="search-content">
            <div class="input-label">
                <div class="label-name">角色名称</div>
                <el-input v-model="queryParams.username" placeholder="请输入内容"></el-input>
            </div>
            <el-button type="primary">查询</el-button>
        </div>
        <el-table
                ref="singleTable"
                :data="tableData"
                highlight-current-row
                style="width: 100%">
            <el-table-column
                    type="index"
                    width="50">
            </el-table-column>
            <el-table-column
                    property="date"
                    label="日期"
                    width="120">
            </el-table-column>
            <el-table-column
                    property="name"
                    label="姓名"
                    width="120">
            </el-table-column>
            <el-table-column
                    property="address"
                    label="地址">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="handleEdit(scope.row)">新增</el-button>
                    <el-button
                            size="mini"
                            @click="handleEdit(scope.row)">修改</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="30%">
                        <span>这是一段信息</span>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="dialogVisible = false">取 消</el-button>
                            <el-button type="primary" @click="dialogVisible = false">保 存</el-button>
                        </span>
        </el-dialog>
    </div>
</template>

<script>
    import {mapActions,mapGetters} from 'vuex'
    import * as Api from '@/api/user'
    export default {
        name: "user",
        computed: {
            ...mapGetters({
                userList: 'user/userList'
            })
        },
        data() {
            return {
                queryParams: {
                    username: '',
                    page: 1,
                    limit: 10
                },
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
                dialogVisible: false
            }
        },
        methods: {
            ...mapActions({
                getUserList: 'user/getUserList'
            }),
            handleEdit(row){

            },
            handleDelete(row){
                this.$confirm('确认要删除吗？','提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(async ()=> {
                    await Api.deleteUser(row)
                    this.$message.success('删除成功')
                })
            },
            getUser(params) {

            },
            createUser(params) {

            },
            updateUser(params){

            }
        },
        mounted() {
            this.getUserList(this.queryParams)
        }
    }
</script>

<style scoped lang="scss">
.input-label {
    display: flex;
    float: left;
    margin-bottom: 12px;
    margin-right: 12px;
    word-break:keep-all;
    white-space:nowrap;
    align-items: center;
    .label-name {
        margin-right: 12px;
        color: #ffffff;
    }
}
</style>