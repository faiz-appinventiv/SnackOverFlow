const initial_State={
    firstTimeInstall:false
}

const newAppInstallReducer=(state=initial_State,action: { type: string; payload: any })=>{
    const {type,payload}=action
    switch(type){
        case 'ToggleNewInstall':
            return{...state,firstTimeInstall:payload}
        default:
            return state
    }
}
export default newAppInstallReducer