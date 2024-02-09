import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon, useTheme } from 'react-native-basic-elements';
import HomePage from '../Screens/HomePage/HomePage';
import ReferPage from '../Screens/Refer/ReferPage';
import Help from '../Screens/Help/Help';
import Account from '../Screens/Account/Account';
import { moderateScale } from '../Constants/PixelRatio';
import Sos from '../Screens/SOS/Sos';
import { useSelector } from 'react-redux';
import NavigationService from '../Services/Navigation';
import Login from '../Screens/Auth/Login';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    const colors = useTheme()
    const { login_status } = useSelector(state => state.User)

    return (
        <Tab.Navigator
        initialRouteName='HomePage'
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontSize: 11,
                    fontWeight: '500',
                    marginBottom: moderateScale(10),
                },
                tabBarStyle: {
                    backgroundColor: '#fff',
                    height: moderateScale(55),
                    paddingTop: 5
                },
                tabBarActiveTintColor: colors.primaryThemeColor,
                tabBarInactiveTintColor: '#777',
            }}

        >

            <Tab.Screen name="Home" component={HomePage} options={{
                tabBarIcon: ({ color, size, }) => {
                    return <Icon
                        name='home'
                        type='Octicons'
                        color={color}
                        size={20}
                    />
                },
            }} />
            {/* {login_status ? */}
            {/* <Tab.Screen name="Help" component={Help} options={{
                tabBarIcon: ({ color, size, }) => {
                    return <Icon
                        name='comment-question-outline'
                        type='MaterialCommunityIcon'
                        color={color}
                        size={21}
                    />
                },
            }} /> */}
            <Tab.Screen
                name="Help"
                component={Help}
                options={{
                    tabBarIcon: ({ color, size, }) => {
                        return <Icon
                            name='comment-question-outline'
                            type='MaterialCommunityIcon'
                            color={color}
                            size={21}
                        />
                    },
                }}
                listeners={({ navigation, route }) => ({
                    tabPress: e => {
                        e.preventDefault();
                        if (login_status == false) {
                            navigation.navigate('Login')
                        }
                        else{
                            navigation.navigate('Help')
                        }
                    },
                })}
            />
            <Tab.Screen name="SOS" component={Sos} options={{
                tabBarIcon: ({ color, size, }) => {
                    return <Icon
                        name='people'
                        type='Octicon'
                        color={color}
                        size={24}
                    />
                },
            }} />
            <Tab.Screen name="Referral" component={ReferPage} options={{
                tabBarIcon: ({ color, size, }) => {
                    return <Icon
                        name='slideshare'
                        type='FontAwesome'
                        color={color}
                        size={20}
                    />
                },
            }}
            listeners={({ navigation, route }) => ({
                tabPress: e => {
                    e.preventDefault();
                    if (login_status == false) {
                        navigation.navigate('Login')
                    }
                    else{
                        navigation.navigate('Referral')
                    }
                },
            })}
            />
            <Tab.Screen name="Account" component={Account} options={{
                tabBarIcon: ({ color, size, }) => {
                    return <Icon
                        name='user-o'
                        type='FontAwesome'
                        color={color}
                        size={20}
                    />
                },
            }} 
            listeners={({ navigation, route }) => ({
                tabPress: e => {
                    e.preventDefault();
                    if (login_status == false) {
                        navigation.navigate('Login')
                    }
                    else{
                        navigation.navigate('Account')
                    }
                },
            })}
            />


        </Tab.Navigator>
    );
}

export default BottomTab