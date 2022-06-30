export const submitDetails = (payload: any) => {
  return (
    dispatch: (arg0: {type: string; payload: any}) => void,
    getState: any,
  ) => {
    // console.log("payload",payload)
    console.log('getstate', getState());
    dispatch({type: 'Submit_Details', payload});
  };
};

export const SignOut = () => {
  return (dispatch: (arg0: {type: string}) => void, getState: any) => {
    // console.log("payload",payload)
    console.log('getstate', getState());
    dispatch({type: 'Signout'});
  };
};
