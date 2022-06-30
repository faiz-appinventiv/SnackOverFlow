import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {vw,vh,normalize} from '../utils/index'

interface propInterface{
    textColor: string,
    bgColor:string,
    text:string,
    onPressButton: Function,
    disable:boolean
}

export default function Button(props : propInterface) {
    const navigation=useNavigation<any>()

    const {textColor,bgColor,text,onPressButton,disable=false} = props
  return (
    <TouchableOpacity style={{...styles.signInWithEmail,backgroundColor:bgColor,}} activeOpacity={0.80} onPress={()=>onPressButton()} disabled={disable}>
        <Text style={{...styles.signUpText,color:textColor}}>{text}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    signInWithEmail:{
        height:vh(56),
        // width:'100%',
        marginHorizontal:vw(16),
        marginTop:vh(16),
        borderRadius:8,
        paddingHorizontal:vw(24),
        // alignItems:'center',
        justifyContent:'center',
      },
      signUpText:{
        fontSize:vw(17),
        // color:'#ee6723',
        fontWeight:'500',
        textAlign:'center'
      }
})