import {FlatList, SafeAreaView, StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import {Color, vw, vh, LocalImages, AuthFunctions} from '../../../utils';
import {Button, ButtonWithIcon, SectionTitle} from '../../../components';
import Auth from '@react-native-firebase/auth';
import { useDispatch } from 'react-redux';
import { SignOut } from '../action';
import { ClearUID } from '../../auth/action';


export default function GoalScreen({navigation}:any) {

  const [selected, setSelected] = useState<any>('')

  let tabStrings=['No goal! Just snacking','Snacking for party time!','Snacking in a healthy way']

  const dispatch=useDispatch()

  const renderTabs=({item}:any)=>{
    //   console.log("ITEM",item)
      return(
        <TouchableOpacity
        style={styles.button}
        activeOpacity={0.9}
        onPress={() =>{
            setSelected(item)
        }}>
        <Image source={(item==selected)?LocalImages.Selected:LocalImages.Unselected} style={styles.image} resizeMode={'contain'}/>
        <Text style={styles.tabText}>{item}</Text>
      </TouchableOpacity>
      )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bars}>
        <View style={styles.inactiveBar}></View>
        <View style={styles.activeBar}></View>
        <View style={styles.inactiveBar}></View>
        <View style={styles.inactiveBar}></View>
      </View>
      <SectionTitle text="What is your goal?" />
          <FlatList
          data={tabStrings}
          renderItem={renderTabs}
          style={styles.flatlist}
          bounces={false}
          keyExtractor={(item,index)=>{
            return JSON.stringify(index)
          }}
          />
          <View style={styles.bottomBtn}>
              <Button text={'Continue'} textColor={Color.white} bgColor={Color.peach} onPressButton={()=>{navigation.navigate('ItemSelection')}} disable={false}/>
              <Button text={'Back'} textColor={Color.peach} bgColor={Color.karl} onPressButton={()=>{
                AuthFunctions.signOutWithFirebase().then(res=>navigation.navigate('AuthStack'))
                dispatch(SignOut())
                dispatch(ClearUID())
              }}
              disable={false}/>
          </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    flex: 1,
  },
  bars: {
    flexDirection: 'row',
    marginVertical: vh(16),
    marginHorizontal: vw(16),
  },
  activeBar: {
    marginRight: vw(12),
    backgroundColor: '#fecf33',
    width: vw(80.5),
    height: vh(6),
    borderRadius: vw(40),
  },
  inactiveBar: {
    borderRadius: vw(40),
    marginRight: vw(12),
    backgroundColor: '#edeced',
    width: vw(80.5),
    height: vh(6),
  },
  button:{
    height: vh(56),
    marginTop:vh(16),
    marginHorizontal:vw(16),
    justifyContent:'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: vw(19),
    paddingVertical: vh(16),
    backgroundColor:Color.whitey
  },
  image:{
    height:vh(18),
    width:vw(18)
  },
  tabText:{
    fontSize: vw(17),
    // color:'#ee6723',
    fontWeight: '500',
    textAlign: 'center',
    marginLeft: vw(3.1),
    color:Color.gandalf
  },
  flatlist:{
      paddingBottom:vh(16),
      height:vh(232),
    //   marginBottom:vh(254)
  },
  bottomBtn:{
      height:vh(160),
      paddingBottom:vh(16),
  }
});
