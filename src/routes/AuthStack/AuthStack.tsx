import HomeLogin from "../../modules/auth/homeLogin";
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signin from "../../modules/auth/signin";
import Signup from "../../modules/auth/signup";

export default function AuthStack() {
    
    const AuthStack=createNativeStackNavigator()

  return (
    <AuthStack.Navigator screenOptions={{headerShown:false}}
    initialRouteName={'Home'}>
            <AuthStack.Screen name ='Home' component={HomeLogin}/>
            <AuthStack.Screen name ='Signin' component={Signin}/>
            <AuthStack.Screen name='Signup' component={Signup}/>
    </AuthStack.Navigator>
  )
}