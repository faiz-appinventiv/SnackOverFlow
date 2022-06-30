const initial_state={
    fname:'',
    lname:'',
    height:'',
    weight:'',
    address:'',
}

export const UserDetailsReducer=(state=initial_state,action : {type:string,payload:any})=>{
    const {type,payload}=action
    switch(type){
        case 'Submit_Details':
            return {...state,...payload};
        case 'Signout':
            return {...state,...initial_state}
        default:
            return state;
    }
}