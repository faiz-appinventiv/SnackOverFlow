import {FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color, vh, vw} from '../../../utils';
import { SectionTitle } from '../../../components';

export default function ItemSelection() {
  return (
    <SafeAreaView>
      <ScrollView bounces={false}>
        <View style={styles.bars}>
          <View style={styles.inactiveBar}></View>
          <View style={styles.inactiveBar}></View>
          <View style={styles.activeBar}></View>
          <View style={styles.inactiveBar}></View>
        </View>
        <View>
        <SectionTitle  text={'Select 4 items below that suits your mood.'}/>
        {/* <FlatList
        data={}
        /> */}
        </View>
      </ScrollView>
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
});
