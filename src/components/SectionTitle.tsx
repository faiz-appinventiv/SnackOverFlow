import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { vh,vw,Color } from '../utils'

export default function SectionTitle({text}:any) {
  return (
    <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    textContainer:{
        height:vh(82),
        marginHorizontal:vw(16),
        marginVertical:vh(24)
    },
    text:{
        color:Color.teflon,
        fontSize:vw(28),
        fontWeight:'bold',
    }
})