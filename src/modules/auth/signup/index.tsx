import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import {
  LocalImages,
  vh,
  vw,
  normalize,
  AuthFunctions,
  Color,
} from '../../../utils';
import Button from '../../../components/Button';

export default function Signup({navigation}: any) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const validateEmail = (text: string) => {
    let reg1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    let reg2 = /^[7-9][0-9]{9}$/;
    if (email.length === 0) {
      return false;
    }
    return !(reg1.test(text) || reg2.test(text));
  };

  const onSignupBtn = () => {
    setEmail('');
    setPassword('');
    navigation.navigate('Signin');
  };

  const onButtonPress = () => {
    AuthFunctions.signupWithEmailAndPassword(
      email,
      password,
      () => {
        setEmail('');
        setPassword('');
        navigation.navigate('Signin');
      },
      (error: any) => {
        // Alert.alert(JSON.stringify(error))
        console.log(error);
      },
    );
  };
  // console.log("condition",validateEmail(email))

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View>
        <Image source={LocalImages.SignUpLogo} style={styles.logoImg} />
        <View style={styles.textCont}>
          <Text style={styles.text}>{'Go with your flow'}</Text>
        </View>
      </View>
      <View style={styles.textInputContainer}>
        <View style={styles.textInput}>
          <Image source={LocalImages.MailLogo} style={styles.imgTextField} />
          <TextInput
            placeholder="Email"
            placeholderTextColor={Color.clooney}
            style={styles.textInputText}
            onChangeText={text => {
              setEmail(text);
            }}
          />
        </View>
        {validateEmail(email) && (
          <View style={styles.errorMsg}>
            <Text style={styles.errorMsgText}>{'Invalid Email'}</Text>
          </View>
        )}
        <View style={styles.textInput}>
          <Image source={LocalImages.LockLogo} style={styles.imgTextField} />
          <TextInput
            placeholder="Password"
            placeholderTextColor={Color.clooney}
            style={styles.textInputText}
            secureTextEntry={true}
            onChangeText={text => {
              setPassword(text);
            }}
          />
        </View>
      </View>
      <View style={styles.lineCont}>
        <View style={styles.line} />
      </View>
      <Button
        textColor="white"
        bgColor="#ee6723"
        text="Create Account"
        onPressButton={onButtonPress}
        disable={false}
      />
      {/* <View style={styles.tncTextContainer}> */}
      <Text style={styles.tncTextinnerContainer}>
        {'By clicking "Create account", I agree to SnackOverflow\'s '}
        <Text style={styles.secondaryText}>{'TOS '}</Text>
        <Text style={styles.primaryText}>{'and '}</Text>
        <Text style={styles.secondaryText}>{'Privacy Policy.'}</Text>
      </Text>
      {/* </View> */}
      <View style={styles.signupSection}>
        <Text style={styles.signupStatement}>
          {'Already have an account? '}
        </Text>
        <TouchableOpacity onPress={onSignupBtn} style={styles.signupBtn}>
          <Text style={styles.signupText}>{'Signin'}</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logoImg: {
    height: vh(122.8),
    width: '100%',
    marginTop: vh(146),
  },
  textCont: {
    height: vh(82),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: vw(28),
    fontWeight: '600',
  },
  textInput: {
    flexDirection: 'row',
    height: vh(56),
    // alignItems:'center',
    backgroundColor: '#f7f7f7',
    // backgroundColor:'black',
    marginHorizontal: vw(16),
    marginTop: vh(16),
    borderRadius: vw(8),
  },
  textInputContainer: {
    // marginHorizontal:normalize(16)
    paddingBottom: vh(16),
  },
  imgTextField: {
    marginVertical: vh(21),
    marginLeft: vw(19),
    height: vh(14),
    width: vw(18),
  },
  textInputText: {
    marginVertical: vh(17),
    height: vh(22),
    fontSize: normalize(17),
    marginLeft: normalize(15),
    alignSelf: 'flex-start',
    width: vw(254),
    color: Color.teflon,
  },
  lineCont: {
    paddingHorizontal: vw(80),
    paddingVertical: vh(12),
    // backgroundColor:'white',
    // opacity:0.3,
    height: vh(26),
  },
  line: {
    backgroundColor: '#edeced',
    height: vh(2),
    opacity: 0.3,
  },
  tncTextinnerContainer: {
    flexDirection: 'row',
    //   flexWrap:'wrap',
    margin: normalize(16),
    color: '#979197',
    fontSize: normalize(12),
  },
  primaryText: {
    fontSize: normalize(12),
    color: '#979197',
  },
  secondaryText: {
    fontSize: normalize(12),
    color: '#419bf9',
  },
  errorMsg: {
    marginHorizontal: vw(16),
  },
  errorMsgText: {
    fontSize: normalize(12),
    color: 'red',
  },
  signupSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: vh(110),
  },
  signupBtn: {},
  signupStatement: {
    color: Color.gandalf,
    fontSize: vw(17),
  },
  signupText: {
    color: Color.peach,
    fontSize: vw(17),
  },
});
