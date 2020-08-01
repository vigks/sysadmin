import request from '../utils/request'

export function login(params) {
    return request({
        url: '/sys/login',
        method: 'post',
        params: {...params}
    })
}

export function getInfo(token) {
    return request({
        url: '/vue-element-admin/user/info',
        method: 'get',
        params: {token}
    })
}

export function logout() {
    return request({
        url: '/vue-element-admin/user/logout',
        method: 'post'
    })
}

export function getUserList(params) {
    return request({
        url: '/sys/user/list',
        method: 'get',
        params
    })
}

export function createUser(data) {
    return request({
        url: '/sys/user/save',
        method: 'post',
        data
    })
}

export function updateUser(data) {
    return request({
        url: '/sys/user/update',
        method: 'post',
        data
    })
}

export function deleteUser(data) {
    return request({
        url: '/sys/user/delete',
        method: 'post',
        data
    })
}
