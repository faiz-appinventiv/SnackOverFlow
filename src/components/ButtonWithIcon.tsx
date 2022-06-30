import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {vw, vh, LocalImages, normalize} from '../utils/index';

interface propInterface {
  textColor: string;
  bgColor: string;
  image: any;
  text: string;
  onPressButton: Function;
  disable:boolean
}

export default function ButtonWithIcon(props: propInterface) {

  const {textColor, bgColor, text, onPressButton, image,disable=false} = props;
  return (
    <TouchableOpacity
      style={{...styles.button, backgroundColor: bgColor}}
      activeOpacity={0.9}
      disabled={disable}
      onPress={() => onPressButton()}>
      <Image source={image} style={styles.image} resizeMode={'contain'} />
      <Text style={{...styles.text, color: textColor}}>{text}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    height: vh(56),
    margin: normalize(16),
    justifyContent:'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: vw(24),
    paddingVertical: vh(16),
  },
  text: {
    fontSize: normalize(17),
    // color:'#ee6723',
    fontWeight: '500',
    textAlign: 'center',
    marginLeft: vw(3.1),
  },
  image: {
    height: vh(24),
    width: vw(24),
  },
});
