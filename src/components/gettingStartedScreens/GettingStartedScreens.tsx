import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {vh, vw} from '../../utils';

interface propsInterface {
  image: any;
  text: string;
}

export default function GettingStartedScreens(props: propsInterface) {
  const {image, text} = props;
//   console.log('PROPS', props);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageContainer: {
    height: vh(390),
    width: vw(390),
    marginTop: vh(122),
    // backgroundColor: 'black',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  textContainer: {
    alignItems:'center',
    height:vh(116),
    marginHorizontal:vw(16),
    marginVertical:vh(16),
    justifyContent:'center',
  },
  text: {
    color: '#ee6723',
    fontSize:vw(34),
    fontWeight:'bold',
    textAlign:'center',
  },
});
