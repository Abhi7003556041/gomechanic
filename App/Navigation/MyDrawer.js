import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTab from './BottomTab';
import HomePage from '../Screens/HomePage/HomePage';
import Login from '../Screens/Auth/Login';
const Drawer = createDrawerNavigator();
const MYDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName={"BottomTab"}>
            <Drawer.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
            <Drawer.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
            <Drawer.Screen name="Login" component={Login} options={{ headerShown: false }} />

        </Drawer.Navigator>
    );
}
export default MYDrawer

