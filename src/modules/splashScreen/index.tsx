import {
  View,
  ImageBackground,
  StyleSheet,
  Image,
} from 'react-native';
import React, { useEffect } from 'react';
import {vw, vh} from '../../utils';
import {LocalImages} from '../../utils';
import Auth from '@react-native-firebase/auth';
import { useDispatch } from 'react-redux';
import { ClearUID } from '../auth/action';

export default function SplashScreen({navigation}: any) {
  const dispatch=useDispatch()

  useEffect(()=>{
    
      const subscriberFunc = Auth().onAuthStateChanged(user => {
        // console.log('my login user', user);
        setTimeout(()=>{
          if (user) {
            // console.log("user",user)
            // if(!user._user.emailVerified)
            navigation.replace('GoalScreen');
            // else {
            //   Auth().signOut()
            //   Alert.alert("Email not Verified")
            //   navigation.navigate('Login')
            // }
          } else {
            navigation.replace('AuthStack');
          }
        },1000)
        })
        
    return () => {
      subscriberFunc();
    };
  }, []);

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
        {/* </ScrollView> */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    height: '100%',
    width: '100%',
    alignItems:'center',
    justifyContent:'center'
  },
  logo: {
    height: vh(200),
    width: vw(200),
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent:'center'
  },
});

