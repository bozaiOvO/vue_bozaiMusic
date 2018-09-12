import {request} from './request'
function getSonglist(id) {
    return request({
        url: 'api/playlist/detail',
        params:{id},
        method: 'get',//请求方法
    })
}
function getMp3(id){
    return request({
        url:'api/music/url',
        params:{id},
        method:'get'
    })
}
export default{
    getSonglist,
    getMp3
}
