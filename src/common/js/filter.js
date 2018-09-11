export function filterSinger(arr){
    let str = ''
    for(let i = 0 ; i < arr.length ; i ++){
        str += arr[i].name+'/'
    }
    return str = str.substr(0,str.length-1)
}