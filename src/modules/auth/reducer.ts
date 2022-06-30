const initial_State={
    login:true,
    UID:''
}

const AuthReducer=(state=initial_State,action : any)=>{
    const {type,payload}=action
    switch(type){
        case 'Register':
            // state.LoginData.push(payload)
            return {...state,LoginData:payload}
        case 'Toggle_Login':
            return{...state,...payload}
        case 'StoreUID':
            return {...state,UID:payload}
        case 'Clear_UID':
            return{...state,UID:''}
        default:
            return state
    }
}
export default AuthReducer