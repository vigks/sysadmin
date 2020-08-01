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
                <el-input v-model="queryParams.roleName" placeholder="请输入内容"></el-input>
            </div>
            <el-button type="primary">查询</el-button>
        </div>

        <el-table
                ref="singleTable"
                :data="tableData"
                highlight-current-row
                @current-change="handleCurrentChange"
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
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "user",
        data() {
            return {
                queryParams: {
                    roleName: ''
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
                }]
            }
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