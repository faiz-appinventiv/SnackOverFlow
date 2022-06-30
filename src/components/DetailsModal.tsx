import {
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {Color, LocalImages, vh, vw} from '../utils';
import CustomTextInput from './CustomTextInput';
import {Button} from '.';
import {useDispatch} from 'react-redux';
import {submitDetails} from '../modules/RegisterScreen/action';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

interface userDetails {
  fname: string;
  lname: string;
  height: string;
  weight: string;
  address: string;
}

export default function DetailsModal({
  modalVisibility,
  setModalVisibility,
  setSubmitPressed
}: any) {
  // console.log("INSIDE MODAL")
  const dispatch = useDispatch<any>();
  const [details, setDetails] = useState<userDetails>({
    fname: '',
    lname: '',
    height: '',
    weight: '',
    address: '',
  });

  const onClose = () => {
    setSubmitPressed(false)
    setModalVisibility(false);
  };

  const onConfirmPress = () => {
    dispatch(submitDetails(details));
    setSubmitPressed(true)
    setModalVisibility(false);
  };

  return (
    <Modal visible={modalVisibility} animationType={'slide'}>
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView bounces={false} style={{}}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.crossImageCont} onPress={onClose}>
              <Image
                source={LocalImages.CrossImage}
                style={styles.crossImage}
              />
            </TouchableOpacity>
            <Text style={styles.headerText}>{'Edit personal info'}</Text>
          </View>
          <View style={{...styles.textInputContainer, flexDirection: 'row'}}>
            <View style={styles.nameBlock}>
              <Text style={styles.nameHeaderText}>{'First name'}</Text>
              <TextInput
                placeholder="Snackie"
                placeholderTextColor={Color.clooney}
                style={styles.textInput}
                value={details.fname}
                onChangeText={text => {
                  setDetails({...details, fname: text});
                }}
                autoCorrect={false}
              />
            </View>
            <View style={styles.nameBlock}>
              <Text style={styles.nameHeaderText}>{'Last name'}</Text>
              <TextInput
                placeholder="Overflowson"
                placeholderTextColor={Color.clooney}
                style={styles.textInput}
                value={details.lname}
                onChangeText={text => {
                  setDetails({...details, lname: text});
                }}
                autoCorrect={false}
              />
            </View>
          </View>
          <View style={styles.textInputContainer}>
            <Text style={styles.nameHeaderText}>{'Height'}</Text>
            <CustomTextInput
              placeholder={'If left as blank, it will be unknown'}
              onChangeText={(text: string) => {
                setDetails({...details, height: text});
              }}
              keyboardType={'numeric'}
              value={details.height}
            />
          </View>
          <View style={styles.textInputContainer}>
            <Text style={styles.nameHeaderText}>{'Weight'}</Text>
            <CustomTextInput
              placeholder={'If left as blank, it will be unknown'}
              onChangeText={(text: string) => {
                setDetails({...details, weight: text});
              }}
              keyboardType={'numeric'}
              value={details.weight}
            />
          </View>
          <View style={styles.textInputContainer}>
            <Text style={styles.nameHeaderText}>{'Where do you live'}</Text>
            <CustomTextInput
              placeholder={
                'If the address is left as blank, your delivery cannot arrive.'
              }
              multiline={true}
              height={112}
              onChangeText={(text: string) => {
                setDetails({...details, address: text});
              }}
              value={details.address}
            />
          </View>
          </KeyboardAwareScrollView>
          <View style={styles.confirmButton}>
            <Button
              textColor={Color.white}
              bgColor={(details.fname&&details.lname)?Color.peach:Color.clooney}
              text={'Confirm'}
              disable={(details.fname&&details.lname)?false:true}
              onPressButton={onConfirmPress}
            />
          </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderColor:'red',
    // borderWidth:2,
    backgroundColor: Color.white,
  },
  header: {
    height: 73,
    flexDirection: 'row',
    alignItems: 'center',
    // marginHorizontal:vw(16)
  },
  crossImageCont: {
    marginHorizontal: vw(16),
  },
  crossImage: {
    height: vh(14.8),
    width: vw(14.8),
    marginVertical: vh(4.6),
    marginHorizontal: vw(4.6),
  },
  headerText: {
    width: vw(278),
    height: vh(25),
    textAlign: 'center',
    color: Color.teflon,
    fontSize: vw(20),
  },
  textInputContainer: {
    paddingHorizontal: vw(16),
    paddingVertical: vh(12),
  },
  nameBlock: {
    height: vh(86),
    marginRight: vw(16),
  },
  nameHeaderText: {
    color: Color.teflon,
    fontSize: vw(17),
    marginBottom: vh(8),
  },
  textInput: {
    height: vh(56),
    width: vw(171),
    fontSize: vw(17),
    backgroundColor: Color.whitey,
    borderRadius: vw(8),
    paddingHorizontal: vw(17),
    paddingVertical: vh(17),
  },
  confirmButton: {
    // marginTop:
    // paddingVertical: 16,
    // position:'absolute',
    bottom:20,
    // width:'100%'
  },
});
