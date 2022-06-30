import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react';
import { vw, vh, LocalImages, Color } from '../../../utils';
import { SectionTitle ,ButtonWithIcon,DetailsModal, Button} from '../../../components';
import { useSelector } from 'react-redux';
import database from '@react-native-firebase/database';

export default function NameScreen({navigation}:any) {
    const {fname,lname,address,height,weight} :any=useSelector<any>((store)=>store.UserDetailsReducer)
    const {UID}:any =useSelector<any>((store)=>store.AuthReducer)

    const [modalVisibility,setModalVisibility] = useState<boolean>(false)
    const [submitPressed,setSubmitPressed] = useState<boolean>(false)

    const onEditPress=()=>{
        setModalVisibility(true)
    }

    const onFinalSubmit=()=>{
        database()
  .ref(`/users/${UID}`)
  .set({
      fname:fname,
      lname:lname,
      height:height,
      weight:weight,
      address:address
  })
  .then(() => console.log('Data set.'));
        // navigation.navigate("GoalScreen")
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.bars}>
                <View style={styles.activeBar}></View>
                <View style={styles.inactiveBar}></View>
                <View style={styles.inactiveBar}></View>
                <View style={styles.inactiveBar}></View>
            </View>
            <SectionTitle text="What is your Name?" />
            <View style={styles.avatar}>
                <Image source={LocalImages.UserImage} style={styles.avatarImg} 
                resizeMode='contain'/>
            </View>
            <View style={styles.personInfo}>
                <Text style={styles.nameText}>{fname?fname + ' ' + lname:'user73494'}</Text>
                <View style={styles.heightweightView}>
                    <Text style={styles.heightweightText}>{(height)?height + 'cm ':'x height '}</Text>
                    <Text style={styles.heightweightText}>{(weight)?weight + ' Kg':'x Weight'}</Text>
                </View>
                <View style={styles.heightweightView}>
                    <Image source={LocalImages.LocationIcon} style={styles.locationImg} resizeMode='contain'/>
                    <Text style={styles.heightweightText}>{(address)?address:'unknown'}</Text>
                </View>
            </View>
            <View style={styles.editButton}>
            <ButtonWithIcon text='Edit' textColor={Color.peach} image={LocalImages.EditImage} bgColor={Color.karl} onPressButton={onEditPress} disable={false}/>
            </View>
            <DetailsModal modalVisibility={modalVisibility} setModalVisibility={setModalVisibility} setSubmitPressed={setSubmitPressed}/>
            {
                submitPressed &&
                <View style={styles.profileConfirm}>
                    <ButtonWithIcon text='Your profile has been updated!' bgColor={Color.green} onPressButton={()=>{}} disable={true} image={LocalImages.Tick} textColor={Color.snowman}/>
                    </View>
            }
            {
                fname.length!=0 &&
                <View>
                    <Button text={'Continue'} bgColor={Color.peach} textColor={Color.white} disable={false} onPressButton={onFinalSubmit}/>
                </View>
            }
            {/* {fname &&<View>
                    <Button text={'Continue'} textColor={Color.white} bgColor={Color.peach} onPressButton={onFinalSubmit} disable={false}/>
                    </View>
            } */}
                {/* </View> */}
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
    avatar: {
        height: vh(120),
        width: vw(120),
        marginTop: vh(48),
        marginHorizontal: vw(135),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.whitey,
        borderRadius: vw(120),
        marginBottom: vh(24),
    },
    avatarImg: {
        height: vh(32.7),
        width: vw(30),
        marginHorizontal: vw(6.2),
        marginVertical: vh(4.2),
    },
    personInfo: {
        alignItems: 'center',
    },
    nameText: {
        fontSize: vw(17),
        fontWeight: '500',
        color: Color.teflon,
    },
    heightweightView: {
        flexDirection: 'row',
        marginTop: vh(6),
        marginBottom:vh(2)
    },
    heightweightText: {
        color: Color.gandalf,
        fontSize: vw(17),
    },
    locationImg: {
        height: vh(19),
        width: vw(14),
        marginHorizontal: vw(5),
        marginVertical: vh(2),
    },
    editButton:{
        marginTop:vh(24)
    },
    profileConfirm:{
        marginTop:'auto',
        paddingVertical:vh(16)
    }
});
