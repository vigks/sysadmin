<template>
    <div class="app-container">
        <el-container>
            <el-header class="header">
                <div class="menu-wrapper">
                    <div class="logo">
                        <img src="../assets/logo.png" alt="">
                    </div>
                    <div class="menu">
                        <el-dropdown>
                            <span class="el-dropdown-link">
                                园区概览<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item>
                                            人员管理
                                        </el-dropdown-item>
                                        <el-dropdown-item>
                                            区域管理
                                        </el-dropdown-item>
                                        <el-dropdown-item>
                                            设备管理
                                        </el-dropdown-item>
                                    </el-dropdown-menu>
                        </el-dropdown>
                        <el-dropdown>
                            <span class="el-dropdown-link">
                                基础管理<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>
                                    人员管理
                                </el-dropdown-item>
                                <el-dropdown-item>
                                    区域管理
                                </el-dropdown-item>
                                <el-dropdown-item>
                                    设备管理
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>
                <div class="avatar">
                    <img src="../assets/images/user-icon-normat.png" alt="">
                    退出
                </div>
            </el-header>
            <el-main>
                <transition name="fade-transform" mode="out-in">
                    <keep-alive :include="cachedViews">
                        <router-view :key="key" />
                    </keep-alive>
                </transition>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: 'Layout',
        data() {
            return {
                cachedViews: []
            }
        },
        computed: {
            key() {
                return this.$route.path
            }
        }
    }
</script>

<style lang="scss" scoped>
.app-container{
    background: #021557;
    height: 100vh;
    .header {
        display: flex;
        justify-content: space-between;
        height: 60px;
        .menu-wrapper {
            display: flex;
        }
        .logo {
            width: 300px;
            display: flex;
            align-items: center;
            margin: 0 30px;
            img{
                width: 100%;
                cursor: pointer;
            }
        }
        .menu {
            min-width: 600px;
            display: flex;
            align-items: center;
            color: #ffffff;
            .el-dropdown{
                margin-right: 20px;
                font-size: 16px;
                color: #ffffff;
            }
        }
        .avatar {
            display: flex;
            align-items: center;
            font-size: 16px;
            color: #ffffff;
            cursor: pointer;
            img{
                width: 25px;
                margin-right: 10px;
            }
        }
        .el-dropdown-link {
            cursor: pointer;
        }
    }
}
</style>
