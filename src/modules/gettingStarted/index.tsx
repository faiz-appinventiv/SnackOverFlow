/* eslint-disable react/react-in-jsx-scope */
import {View, StyleSheet} from 'react-native';
import {Button, GettingStartedScreens} from '../../components';
import {LocalImages} from '../../utils';
import Swiper from 'react-native-swiper';
import {vw, vh} from '../../utils';
import {ToggleNewInstall} from './action';
import {useDispatch} from 'react-redux';

export default function GettingStarted({navigation}: any) {
  // useEffect(()=>{
  //   if(firstTimeInstall)
  //   navigation.replace('AuthStack')
  // },[])
  const dispatch = useDispatch<any>();
  // const {firstTimeInstall} = useSelector((state:any)=>state.newAppInstallReducer)
  console.log();

  const buttonPress = () => {
    dispatch(ToggleNewInstall());
    navigation.replace('AuthStack');
  };

  return (
    <View style={styles.container}>
      <Swiper
        activeDotStyle={styles.activeDotStyle}
        activeDotColor={'#c1bec1'}
        dotColor={'#edeced'}
        dotStyle={styles.dotStyle}
        loop={false}>
        <View>
          <GettingStartedScreens
            image={LocalImages.GettingStarted1}
            text={'Hand-pickle high quality snacks.'}
          />
        </View>
        <View>
          <GettingStartedScreens
            image={LocalImages.GettingStarted2}
            text={'Shop global. Mind-blownly affordable.'}
          />
        </View>
        <View>
          <GettingStartedScreens
            image={LocalImages.GettingStarted3}
            text={'Deliver on the promise of time.'}
          />
        </View>
      </Swiper>
      <View style={styles.getStartedBtn}>
        <Button
          text={'Get Started'}
          bgColor={'#ee6723'}
          textColor={'white'}
          onPressButton={buttonPress}
          disable={false}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  activeDotStyle: {
    width: vw(20),
    height: vh(6),
  },
  dotStyle: {
    height: vh(6),
    width: vw(6),
  },
  getStartedBtn: {
    //   paddingHorizontal:vw(16),
    paddingVertical: vh(16),
    marginBottom: vh(16),
  },
});
