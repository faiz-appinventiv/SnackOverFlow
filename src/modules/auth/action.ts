export function Register(payload: any) {
  return (dispatch: (arg0: {type: string; payload: any}) => void) => {
    dispatch({
      type: 'Register',
      payload,
    });
  };
}
export function ToggleLogin(payload: any) {
  return (dispatch: (arg0: {type: string; payload: any}) => void) => {
    dispatch({
      type: 'Toggle_Login',
      payload,
    });
  };
}

export function StoreUID(payload: any) {
  return (dispatch: (arg0: {type: string; payload: any}) => void) => {
    dispatch({
      type: 'StoreUID',
      payload,
    });
  };
}

export function ClearUID() {
  return (dispatch: (arg0: {type: string}) => void) => {
    dispatch({
      type: 'Clear_UID',
    });
  };
}
