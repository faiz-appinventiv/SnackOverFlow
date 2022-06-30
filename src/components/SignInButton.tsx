import { View, Text, TouchableOpacity ,StyleSheet,Image} from 'react-native'
import React from 'react'
import {vw,vh,normalize} from '../utils/index'

interface IncomingProps{
    buttonColor : string,
    img:any,
    text:string,
    buttonTextColor:string,
    opacity:number,
    onPress:Function,
}

export default function SignInButton(props : IncomingProps) {
    const {buttonColor,img,text,buttonTextColor,opacity,onPress}= props
  return (
    <TouchableOpacity activeOpacity={0.90}
    style={{...styles.button,backgroundColor:buttonColor}}
    onPress={()=>{onPress()}}
    >
        <Image source={img} 
        style={styles.img}
        resizeMode={'contain'}
        />
        <Text style={{...styles.buttonText,color:buttonTextColor,opacity:opacity}}>{text}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    button:{
        flexDirection:'row',
        height:vh(54),
        width:vw(358),
        // justifyContent:'center',
        alignItems:'center',
        borderRadius:vw(8),
        marginBottom:normalize(12)
    },  
    img:{
        height:vh(24),
        width:vw(24),
        // margin:normalize(15)
        marginHorizontal:vw(15),
        marginVertical:vh(15)
    },
    buttonText:{
        fontSize:vw(20),
        // marginTop:vh(15),
        // marginBottom:vh(16),
        // alignSelf:'flex-start',
    }
})