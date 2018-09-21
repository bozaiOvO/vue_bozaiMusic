import {request} from './request'
function emailLogin(email,password){
    return request({
        url:'/login',
        params:{
            email,
            password
        }
    })
}
function phoneLogin(phone,password){
    return request({
        url:'api/login/cellphone',
        params:{
            phone,
            password
        }
    })
}
function getUserDetail(uid){
    return request({
        url:"api/user/detail",
        params:{
            uid
        }
    })
}
export default{
    emailLogin,
    phoneLogin,
    getUserDetail
}