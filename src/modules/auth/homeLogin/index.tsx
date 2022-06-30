import {View, ImageBackground, StyleSheet, Image, Alert} from 'react-native';
import React from 'react';
import {vw, vh, normalize} from '../../../utils';
import {LocalImages, AuthFunctions} from '../../../utils';
import {SignInButton} from '../../../components';
import Button from '../../../components/Button';
import {useDispatch} from 'react-redux';
import {StoreUID} from '../action';

export default function HomeLogin({navigation}: any) {
  // useEffect(()=>{
  //   const subscriberFunc = Auth().onAuthStateChanged(user => {
  //     console.log('my login user', user);
  //     if (user) {
  //       // console.log("user",user)
  //       // if(!user._user.emailVerified)
  //       navigation.navigate('GoalScreen');
  //       // else {
  //       //   Auth().signOut()
  //       //   Alert.alert("Email not Verified")
  //       //   navigation.navigate('Login')
  //       // }
  //     } else {
  //       navigation.navigate('Home');
  //     }
  //   });

  //   return () => {
  //     subscriberFunc();
  //   };
  // }, []);

  const dispatch = useDispatch<any>();

  const onButtonPress: Function = () => {
    navigation.navigate('Signin');
  };

  return (
    <View>
      <ImageBackground
        source={LocalImages.BackgrounndHomeImage}
        style={styles.backgroundContainer}
        blurRadius={7}>
        {/* <ScrollView> */}
        <View style={styles.logoContainer}>
          <Image
            source={LocalImages.LogoImage}
            style={styles.logo}
            resizeMode={'contain'}
          />
        </View>
        <View style={styles.buttons}>
          <SignInButton
            buttonColor={'#1877f2'}
            img={LocalImages.FacebookLogo}
            text="Sign In With Facebook"
            buttonTextColor="#ffffff"
            opacity={1}
            onPress={(userDetails: any) => {
              AuthFunctions.signInWithFacebook(
                () => {
                  console.log(userDetails);
                  navigation.navigate('NameScreen');
                },
                () => {
                  Alert.alert('Sign In Failed');
                },
              );
            }}
          />
          <SignInButton
            buttonColor={'#ffffff'}
            img={LocalImages.GoogleLogo}
            onPress={() => {
              AuthFunctions.signInWithGoogle(
                (userDetails: any) => {
                  dispatch(StoreUID(userDetails.user.uid));
                  console.log('Userdetails', userDetails);
                  navigation.navigate('NameScreen');
                },
                (error: any) => {
                  console.log('error', error);
                  Alert.alert('Sign In Failed');
                },
              );
            }}
            text="Sign In With Google"
            buttonTextColor="#000000"
            opacity={0.54}
          />
          <SignInButton
            buttonColor={'#000000'}
            img={LocalImages.AppleLogo}
            text="Sign In With Apple"
            buttonTextColor="#ffffff"
            opacity={1}
            onPress={(userDetails: any) => {
              AuthFunctions.signInWithGoogle(
                () => {
                  console.log(userDetails);

                  navigation.navigate('GoalScreen');
                },
                (error: any) => {
                  console.log('error', error);
                  Alert.alert('Sign In Failed');
                },
              );
            }}
          />
        </View>
        <View style={styles.lineCont}>
          <View style={styles.line} />
        </View>
        <Button
          disable={false}
          textColor="#ee6723"
          bgColor="white"
          text="Sign in with Email"
          onPressButton={onButtonPress}
        />
        {/* </ScrollView> */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    height: '100%',
    width: '100%',
  },
  logo: {
    height: vh(125),
    width: vw(140),
  },
  logoContainer: {
    alignItems: 'center',
    // flex:0.6
    marginTop: vh(209),
  },
  buttons: {
    marginTop: vh(144),
    marginBottom: normalize(16),
    marginHorizontal: normalize(16),
  },
  lineCont: {
    paddingHorizontal: vw(80),
    paddingVertical: vh(12),
    // backgroundColor:'white',
    // opacity:0.3,
    height: vh(26),
  },
  line: {
    backgroundColor: 'white',
    height: vh(2),
    opacity: 0.3,
  },
  signInWithEmail: {
    height: vh(56),
    margin: normalize(16),
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: vw(24),
    paddingVertical: vh(16),
  },
  signUpText: {
    fontSize: normalize(17),
    color: '#ee6723',
    fontWeight: '500',
    textAlign: 'center',
  },
});
