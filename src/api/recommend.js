import {request} from './request'
function getRecommendSongsList() {
    return request({
        url: 'api/personalized',
        method: 'get',//请求方法
    })
}
function getRecommendSongList(){
    return request({
        url:'api/personalized/newsong'
    })
}
export default{
    getRecommendSongsList,
    getRecommendSongList
}
