import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import GettingStarted from '../../modules/gettingStarted'
import { NameScreen,GoalScreen,ItemSelection } from '../../modules/RegisterScreen'
import AuthStack from '../AuthStack/AuthStack'
import { useSelector } from 'react-redux'
import SplashScreen from '../../modules/splashScreen'

export default function Stack() {

//  const {firstTimeInstall} = useSelector((state:any)=>state.newAppInstallReducer)

    const Stack = createNativeStackNavigator()
    // console.log("Firs",firstTimeInstall)

  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false,}} 
        // initialRouteName={'NameScreen'}
        >
            <Stack.Screen name='SplashScreen' component={SplashScreen}/>
            <Stack.Screen name ='GettingStarted' component={GettingStarted}/>
            <Stack.Screen name='AuthStack' component={AuthStack}/>
            <Stack.Screen name='NameScreen' component={NameScreen}/>
            <Stack.Screen name='GoalScreen' component={GoalScreen}/>
            <Stack.Screen name='ItemSelection' component={ItemSelection}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}