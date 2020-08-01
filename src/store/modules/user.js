import { login, logout, getInfo, getUserList } from '@/api/user'
import { getUserInfo, setUserInfo } from '@/utils/auth'
import router, { resetRouter } from '@/router'
import * as Const from '../const.js'

const state = {
  userInfo: getUserInfo(),
  name: '',
  avatar: '',
  introduction: '',
  roles: [],
  userList: []
}
const getters = {
  userList: state => state.userList
}

const mutations = {
  [Const.SET_USER_INFO]: (state, playload) => {
    state.userInfo = playload
  },
  [Const.GET_USER_LIST]: (state, playload) => {
    state.userList = playload
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  // 用户登录
  async login({ commit }, userInfo) {
    const { username, password } = userInfo
    const data = await login({ username: username.trim(), password: password })
    commit(Const.SET_USER_INFO, data.user)
    setUserInfo(data.user)
  },
  // 用户列表
  async getUserList({ commit }, params) {
    const data = await getUserList(params)
    commit(Const.GET_USER_LIST, data)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
