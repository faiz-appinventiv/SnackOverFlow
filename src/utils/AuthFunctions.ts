import Auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken,Settings} from 'react-native-fbsdk-next';
Settings.setAppID('552140496412761');
Settings.initializeSDK();

// import AuthErrorHandling from './ErrorHandling';

/**
 * @function signupWithEmailAndPassword
 * @description sign up user with email and password
 * @param {*} email
 * @param {*} password
 * @param {*} successCallback
 * @param {*} failureCallback
 */
const signupWithEmailAndPassword = (
  email : string,
  password : string,
  successCallback : any,
  failureCallback : any,
) : any => {
  Auth()
    .createUserWithEmailAndPassword(email, password)
    .then(userDetails => {
      // userDetails.user.sendEmailVerification();
      // Alert.alert('Email Verification Link Sent');
      // console.log('UserDetails', userDetails);
      successCallback(userDetails);
    })
    .catch(error => {
      // console.log('Error', error);
      failureCallback(error);
    });
};

/**
 *
 * @param {*} email
 * @param {*} password
 * @param {*} successCallback
 * @param {*} failureCallback
 */
const signInWithEmailAndPassword = (
  email : string,
  password : string,
  successCallback : any,
  failureCallback : any,
) => {
  Auth()
    .signInWithEmailAndPassword(email, password)
    .then(userDetails => {
      // if (userDetails.user.emailVerified) {
        successCallback(userDetails);
      // } else {
        // console.log('else UserDetails', userDetails);
        // userDetails.user.sendEmailVerification();
        // failureCallback();
      // }
      // console.log("SigninSuccess",userDetails)
      // successCallback(userDetails)
    })
    .catch(error => {
      // console.log('SigninError', error);
      failureCallback(error);
    });
};

/**
 * @function sign
 */
const signOutWithFirebase = () => {
  return Auth().signOut();
};

/**
 * @function GoogleConfigure
 * @description Google Login Configuration
 */

GoogleSignin.configure({
  webClientId:
    '1089285859400-61h8lmdr1vtcfvfoc7ue81bjtndngr3g.apps.googleusercontent.com',
});

/**
 * @function signInWithGoogle
 * @param {*} successCallback
 * @param {*} failureCallback
 */

async function signInWithGoogle(successCallback : any, failureCallback : any) {
  try {
    const {idToken} = await GoogleSignin.signIn();
    // console.log("googf",goog)
    // const {idToken} = goog
    // console.log('idToken', idToken);

    // Create a Google credential with the token
    const googleCredential = Auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    Auth()
      .signInWithCredential(googleCredential)
      .then(userDetails => {
        console.log("USER",userDetails)
        successCallback(userDetails);
      })
      .catch(error => {
        console.log('errrrrrrrrr:', error);
        failureCallback(error);
      });
  } catch (err : any) {
    console.log('error code ', err.code);
    console.log('error ', err);
    failureCallback(err);
  }
}

/**
 * @function signInAnonymously
 * @description Sign in anonymously
 * @param {*} successCallback 
 * @param {*} failureCallback 
 */

const signInAnonymously = (successCallback : any, failureCallback : any) => {
  Auth()
    .signInAnonymously()
    .then(userData => {
      successCallback(userData);
    })
    .catch(error => failureCallback(error));
};

/**
 * @function signInWithPhoneNumber
 * @param {*} PhoneNumber 
 * @param {*} setConfirm 
 * @param {*} setVerifyPhone 
 * @param {*} successCallback 
 * @param {*} failureCallback 
 */

const signInWithPhoneNumber = (
  PhoneNumber : string,
  setConfirm : any,
  setVerifyPhone :any,
  successCallback :any,
  failureCallback: any,
) => {
  Auth()
    .signInWithPhoneNumber('+91' + PhoneNumber)
    // Auth().signInWithCredential(credential)
    .then(confirmation => {
      successCallback();
      // console.log('PHONE RESPONSE', response);
      setConfirm(confirmation);
      setVerifyPhone(true);
    })
    .catch(error => {
      failureCallback(error);
      setVerifyPhone(false);
    });
};

/**
 * @function confirmCode
 * @description Phone number Verification
 * @param {*} confirm 
 * @param {*} verificationCode 
 * @param {*} setVerifyPhone 
 * @param {*} successCallback 
 * @param {*} failureCallback 
 */

const confirmCode = (
  confirm : any,
  verificationCode : string,
  setVerifyPhone : any,
  successCallback : any,
  failureCallback : any,
) => {
  // console.log(confirm.confirm(verifyCode));
  confirm
    .confirm(verificationCode)
    .then(res  => {
      successCallback(res);
      setVerifyPhone(false);
    })
    .catch(error => failureCallback(error));
};

/**
 * @function signInWithEmailLink
 * @param {*} email 
 * @param {*} successCallback 
 * @param {*} failureCallback 
 */

const signInWithEmailLink = (email : string, successCallback: any, failureCallback :any) => {
  Auth()
    .signInWithEmailLink(email)
    .then(res => {
      successCallback(res);
    })
    .catch(error => {
      failureCallback(error);
    });
};

/**
 * @function signInWithFacebook
 * @param {*} successCallback 
 * @param {*} failureCallback 
 */

async function signInWithFacebook(successCallback :any, failureCallback: any) {
  try {
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);
    // console.log("result",result)

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = Auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    Auth()
      .signInWithCredential(facebookCredential)
      .then(res => {
        successCallback(res);
      })
      .catch(error => {
        failureCallback(error);
      });
  } catch (error) {
    failureCallback(error);
  }
}

/**
 * @exports
 * @description
 */
export default {
  signupWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOutWithFirebase,
  signInWithGoogle,
  signInAnonymously,
  signInWithPhoneNumber,
  confirmCode,
  signInWithEmailLink,
  signInWithFacebook,
};
