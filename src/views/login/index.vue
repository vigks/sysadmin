<template>
    <div class="login-container">
        <div class="login-form-wrapper">
            <div>
                <img src="../../assets/images/login-title.png" alt="浙江友联智慧管理系统" class="login-title">
            </div>
            <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="form-bg">
                <h1>欢迎登录</h1>
                <el-form-item class="self-input-filed" prop="username">
                    <el-input v-model="loginForm.username" placeholder="请输入您的用户名" type="text">
                        <i slot="prefix" class="login-icon user-icon"></i>
                    </el-input>
                </el-form-item>
                <el-form-item class="self-input-filed" prop="password">
                    <el-input v-model="loginForm.password" placeholder="请输入您的密码" type="password" @keyup.enter.native="doLogin">
                        <i slot="prefix" class="login-icon password-icon"></i>
                    </el-input>
                </el-form-item>
                <div class="self-input-filed options">
                    <el-checkbox v-model="remember" class="remember">记住密码</el-checkbox>
                    <span @click="$message.error('联系管理员');" class="forget">忘记密码?</span>
                </div>
                <div>
                    <img src="../../assets/images/Login_btn.png" alt="登录" class="login-btn" @click="doLogin">
                </div>
                {{userInfo}}
            </el-form>
        </div>
    </div>
</template>

<script>
    import {mapActions,mapState} from 'vuex'
    export default {
        name: 'Login',
        computed: {
            ...mapState({
                userInfo: state => state.user.userInfo
            })
        },
        data(){
            const validateUsername = (rule, value, callback) => {
                if (!value) {
                    callback(new Error('请输入用户名'))
                } else {
                    callback()
                }
            }
            const validatePassword = (rule, value, callback) => {
                if (value.length < 4) {
                    callback(new Error('请输入大于3位字符的密码'))
                } else {
                    callback()
                }
            }

            return {
                loginForm: {
                    username: '',
                    password: ''
                },
                remember: false,
                loginRules: {
                    username: [{ required: true, trigger: 'blur', validator: validateUsername }],
                    password: [{ required: true, trigger: 'blur', validator: validatePassword }]
                }
            }
        },
        methods: {
            doLogin() {
                this.$refs.loginForm.validate(async valid => {
                    if (valid) {
                        await this.userLogin(this.loginForm)
                        this.$router.push({ path: '/'})
                    }
                })
            },
            ...mapActions({
                userLogin: 'user/login'
            })
        }
    }
</script>
<style lang="scss" scoped>
    .login-container {
        background: url("../../assets/images/login-background.png") no-repeat scroll center center;
        background-size: cover;
        height: 100vh;
        width: 100%;
        min-height: 600px;
        .login-form-wrapper {
            position: fixed;
            width: 600px;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
        }
        .login-title {
            width: 100%;
        }
        .form-bg {
            height: 475px;
            background: url("../../assets/images/form-bg.png") no-repeat scroll center center;
            background-size: cover;
            h1{
                font-size: 40px;
                font-weight: 400;
                text-align: center;
                color: #ffffff;
                padding-top: 40px;
            }
        }
        .self-input-filed {
            width: 400px;
            margin: 0 auto 15px;
            height: 60px;
            line-height: 60px;
            box-sizing: border-box;
            padding: 0 17px;
        }
        .login-icon {
            display: inline-block;
            width: 16px;
            height: 16px;
            vertical-align: text-top;
            margin-left: 3px;
        }
        .user-icon {
            background: url("../../assets/images/wode.png") no-repeat scroll center center;
            background-size: cover;
        }
        .password-icon {
            background: url("../../assets/images/mima.png") no-repeat scroll center center;
            background-size: cover;
        }
        .input-group-bg{
            background: #D5DFF3;
        }
        .remember {
            width: 100px;
            float: left;
            margin-left: 2px;
        }
        .forget {
            font-size: 14px;
            cursor: pointer;
            color: #ffffff;
        }
        .el-checkbox{
            color: #ffffff;
        }
        .el-checkbox__input.is-checked + .el-checkbox__label{
            color: #ffffff;
        }
        .options{
            display: flex;
            justify-content: space-between;
        }
    }
    .el-input__inner {
        height: 60px;
    }
    .login-btn {
        display: block;
        width: 366px;
        margin: auto;
        cursor: pointer;
    }
</style>
