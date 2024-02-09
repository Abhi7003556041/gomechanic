//import liraries
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, PermissionsAndroid } from 'react-native';
import NavigationService from './App/Services/Navigation';
import AuthStack from './App/Navigation/AuthStack';
import { COLORS } from './App/Constants/Colors';
import { StatusBar, Theme } from 'react-native-basic-elements';
import AppStack from './App/Navigation/AppStack';
import { moderateScale } from './App/Constants/PixelRatio';
import { useDispatch, useSelector } from 'react-redux';
import AuthService from './App/Services/Auth';
import { setcar, setuser } from './App/Redux/reducer/User';
import { promptForEnableLocationIfNeeded } from 'react-native-android-location-enabler';
import { Platform } from 'react-native';
import { enableLatestRenderer } from 'react-native-maps';
const Stack = createStackNavigator();
// create a component
const App = () => {
  const [SplaceScreen, setSplaceScreen] = useState(true)
  const { login_status,car_status } = useSelector(state => state.User);
  const dispatch = useDispatch();



async function handleEnabledPressed() {
  if (Platform.OS === 'android') {
    try {
      const enableResult = await promptForEnableLocationIfNeeded();
      console.log('enableResult', enableResult);
      if(enableResult){
        setSplaceScreen(false)
      }
    } catch (error) {
      if (error) {
        console.error(error.message);
      }
    }
  }
}
  
  useEffect(() => {
    // setTimeout(() => {
    //   setSplaceScreen(false)
    // }, 2000);
    checkUser()
   
    return () => {

    }
  }, [])
  const checkUser = async () => {
    let account = await AuthService.getAccount()
    let car = await AuthService.getCar()
    console.log("account",account);
    console.log("car",car);

    if(account || car){
      dispatch(setuser(account))
      dispatch(setcar(car))
    }
    handleEnabledPressed()
   
  }

  if (SplaceScreen) {
    return <View style={{ flex: 1, backgroundColor: "#fff", alignItems: "center", justifyContent: "center", }}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />
      <Image
        style={{ height: moderateScale(50), width: moderateScale(200) }}
      
        source={require('../gomechanic-Abhijit01/App/Assets/images/A1-LOGO-FINAL---2.png')}
      />
    </View>
  }
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Theme.Provider


        theme={{
          light: {
            primaryThemeColor: COLORS.primaryThemeColor,
            secondaryThemeColor: COLORS.secondaryThemeColor,
            primaryFontColor: COLORS.primaryFontColor,
            secondaryFontColor: COLORS.secondaryFontColor,
            cardColor: COLORS.cardColor,
            headerColor: COLORS.headerColor,
            pageBackgroundColor: COLORS.pageBackgroundColor,
            tabBarColor: COLORS.tabBarColor,
            shadowColor: '#999',
            statusBarStyle: 'dark-content',
            buttonColor: COLORS.buttonColor,
            borderColor: COLORS.borderColor,
          },
          dark: {
            primaryThemeColor: COLORS.primaryThemeColor,
            secondaryThemeColor: COLORS.secondaryThemeColor,
            primaryFontColor: COLORS.primaryFontColor,
            secondaryFontColor: COLORS.secondaryFontColor,
            cardColor: COLORS.cardColor,
            headerColor: COLORS.headerColor,
            pageBackgroundColor: COLORS.pageBackgroundColor,
            tabBarColor: COLORS.tabBarColor,
            shadowColor: '#999',
            statusBarStyle: 'dark-content',
            buttonColor: COLORS.buttonColor,
            borderColor: COLORS.borderColor,
          },
        }}
        mode={'light'}>

        <NavigationContainer ref={r => NavigationService.setTopLevelNavigator(r)}>
          <Stack.Navigator
            initialRouteName="AuthStack"
            screenOptions={{
              headerShown: false,
              // gestureEnabled: true,
              // gestureDirection: 'horizontal',
              // ...TransitionPresets.ModalTransition,
            }}>
              {login_status || car_status ?
                <Stack.Screen name="AppStack" component={AppStack} />
                :
                <Stack.Screen name="AuthStack" component={AuthStack} />
}
          </Stack.Navigator>
        </NavigationContainer>
      </Theme.Provider>
    </View>
  );
};

export default App;
