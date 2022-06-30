export function ToggleNewInstall() {
    return (dispatch :any,getState: any) =>{
        dispatch({
            type: 'ToggleNewInstall',
            payload:true
        })
    }
}