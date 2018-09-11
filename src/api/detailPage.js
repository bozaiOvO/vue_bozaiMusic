import {request} from './request'
function getSonglist(id) {
    return request({
        url: 'api/playlist/detail',
        params:{id},
        method: 'get',//请求方法
    })
}
export default{
    getSonglist
}
