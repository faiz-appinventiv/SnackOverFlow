import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { vh,vw,Color } from '../utils'

export default function CustomTextInput(props:any) {
    const {placeholder,multiline=false,height=56,onChangeText,value , keyboardType='default'}=props
  return (
        <TextInput placeholder={placeholder} multiline={multiline} style={{...styles.textInput,height:height}}
        onChangeText={(text)=>onChangeText(text)}
        autoCorrect={false}
        value={value}
        keyboardType={keyboardType}/>
  )
}

const styles = StyleSheet.create({
    textInput:{
      // width:vw(171),
      fontSize:vw(17),
      backgroundColor:Color.whitey,
      borderRadius:vw(8),
      paddingHorizontal:vw(17),
      paddingVertical:vh(17)
    }
})