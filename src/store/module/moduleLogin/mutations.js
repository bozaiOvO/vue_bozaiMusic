export default{
    setUserId(state,id){
        state.userId = id
    },
    setUserProfile(state,object){
        console.log(object)
        state.userProfile = object
    },
    removeUser(state){
        console.log('ffffffffff')
        state.userProfile=null
        state.userId = ''
    }
}