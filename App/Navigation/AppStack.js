//import liraries
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React, { Component } from 'react';
import CarSelect from '../Screens/CarSelect/CarSelect';
import SelectCarType from '../Screens/CarSelect/SelectCarType';
import HomePage from '../Screens/HomePage/HomePage';
import BottomTab from './BottomTab';
import ServicePage from '../Screens/SingleServicePage/ServicePage';
import ValueAddedServices from '../Screens/SingleServicePage/ValueAddedServices';
import MechanicalRepairs from '../Screens/SingleServicePage/MechanicalRepairs';
import ServiceSingleCardDetail from '../Screens/SingleServicePage/ServiceSingleCardDetail';
import BasicService from '../Screens/SingleServicePage/BasicService';
import FrequentlyAsked from '../Components/BasicServiceComponent/FrequentlyAsked';
import MOBILmodel from '../Components/BasicServiceComponent/MOBILmodel';
import SpecialOffersModel from '../Components/BasicServiceComponent/SpecialOffersModel';
import ReferPage from '../Screens/Refer/ReferPage';
import Leaderboard from '../Components/ReferPageComponent/Leaderboard';
import CuratedCustomService from '../Screens/SingleServicePage/CuratedCustomService';
import GoMechanicAssurance from '../Components/GoMechanicGuaranteeComponents/GoMechanicAssurance';
import GoMechActivation from '../Components/AccountComponent/ActivateOBDComponent/GoMechActivation';
import UserProfile from '../Components/AccountComponent/ProfileComponent/UserProfile';
import GoConnect from '../Components/HelpPageComponent/GoConnect';
import HelpAndSupport from '../Components/HelpPageComponent/HelpAndSupport';
import OrderHistory from '../Components/AccountComponent/OrderHistory/OrderHistory';
import HelpAndSupChild1 from '../Components/HelpPageComponent/HelpAndSupChild1';
import HelpAndSupportChild2 from '../Components/HelpPageComponent/HelpAndSupportChild2';
import FulePrices from '../Components/HelpPageComponent/FulePrices';
import TrafficRulesAndFines from '../Components/HelpPageComponent/TrafficRulesAndFines';
import SmartDeviceSmaterCar from '../Components/AccountComponent/ActivateOBDComponent/ActivateOBDChildPage/SmartDeviceSmaterCar';
import GoAppMoney from '../Components/AccountComponent/GoAppMoney/GoAppMoney';
import SetPreferrences from '../Components/AccountComponent/SetPreferrencesComponent/SetPreferrences';
import OBDActivation from '../Components/AccountComponent/OBDActivation/OBDActivation';
import OnBording from '../Screens/Auth/OnBording';
import Login from '../Screens/Auth/Login';
import Otp from '../Screens/Auth/Otp';
import CarSearch from '../Screens/CarSelect/CarSearch';
import Cart from '../Screens/SingleServicePage/Cart';
import CardCheckout from '../Screens/SingleServicePage/CardCheckout';

const Stack = createStackNavigator();
// create a component
const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="BottomTab"
      // initialRouteName="CarSelect"   

      screenOptions={{
        headerShown: false,
        // gestureEnabled: true,
        // gestureDirection: 'horizontal',
        // ...TransitionPresets.ModalTransition,
      }}>
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="Onbording" component={OnBording} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Otp" component={Otp} />

      <Stack.Screen name="CarSelect" component={CarSelect} />
      <Stack.Screen name="SelectCarType" component={SelectCarType} />
      <Stack.Screen name="CarSearch" component={CarSearch} />

      {/* <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="CarSelect" component={CarSelect} /> */}
      {/* <Stack.Screen name="SelectCarType" component={SelectCarType} /> */}
      <Stack.Screen name="HomePage" component={HomePage} />


      {/* AppStack components */}
      <Stack.Screen name="ServicePage" component={ServicePage} />
      <Stack.Screen name="ValueAddedServices" component={ValueAddedServices} />
      <Stack.Screen name="MechanicalRepairs" component={MechanicalRepairs} />
      <Stack.Screen
        name="ServiceSingleCardDetail"
        component={ServiceSingleCardDetail}
      />
      <Stack.Screen name="BasicService" component={BasicService} />
      <Stack.Screen name="FrequentlyAsked" component={FrequentlyAsked} />
      <Stack.Screen name="MOBILmodel" component={MOBILmodel} />
      <Stack.Screen name="SpecialOffersModel" component={SpecialOffersModel} />
      <Stack.Screen name="Referral" component={ReferPage} />
      <Stack.Screen name="Leaderboard" component={Leaderboard} />
      <Stack.Screen
        name="CuratedCustomService"
        component={CuratedCustomService}
      />
      <Stack.Screen
        name="GoMechanicAssurance"
        component={GoMechanicAssurance}
      />
      <Stack.Screen name="GoMechActivation" component={GoMechActivation} />
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen name="GoConnect" component={GoConnect} />
      <Stack.Screen name="HelpAndSupport" component={HelpAndSupport} />
      <Stack.Screen name="OrderHistory" component={OrderHistory} />
      <Stack.Screen name="HelpAndSupChild1" component={HelpAndSupChild1} />
      <Stack.Screen
        name="HelpAndSupportChild2"
        component={HelpAndSupportChild2}
      />
      <Stack.Screen name="FulePrices" component={FulePrices} />
      <Stack.Screen
        name="TrafficRulesAndFines"
        component={TrafficRulesAndFines}
      />
      <Stack.Screen
        name="SmartDeviceSmaterCar"
        component={SmartDeviceSmaterCar}
      />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="CardCheckout" component={CardCheckout} />

      <Stack.Screen name="GoAppMoney" component={GoAppMoney} />
      <Stack.Screen name="SetPreferrences" component={SetPreferrences} />
      <Stack.Screen name="OBDActivation" component={OBDActivation} />
    </Stack.Navigator>
  );
};

export default AppStack;
