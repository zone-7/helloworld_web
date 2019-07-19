import request from '@/utils/request'

const Qs = require('qs')

export function login(username, password) {
    let loginData = {
        'username': username,
        'password': password
    }
    return request({
        url: '/ylzbigdata_znkf/login',
        method: 'post',
        data: Qs.stringify(loginData)
    })
}

export function getInfo(username) {
    let jsonData = {
        'username': username
    }
    return request({
        url: '/ylzbigdata_znkf/info',
        method: 'post',
        data: Qs.stringify(jsonData)
    })
}

export function getFunctions(username) {
    let jsonData = {
        'username': username
    }
    return request({
        url: '/ylzbigdata_znkf/functions',
        method: 'post',
        data: Qs.stringify(jsonData)
    })
}

export function logout(username) {
    let jsonData = {
        'username': username
    }
    return request({
        url: '/ylzbigdata_znkf/logout',
        method: 'post',
        data: Qs.stringify(jsonData)
    })
}
