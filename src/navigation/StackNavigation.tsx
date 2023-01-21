import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Onboard from "../pages/Onboard";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import MakeTransaction from "../pages/MakeTransaction";

const MainStack = createNativeStackNavigator();

export const MainStackScreen = () => {
    return <MainStack.Navigator>
        <MainStack.Screen options={{headerShown: false}} name="Onboard" component={Onboard}/>
        <MainStack.Screen options={{headerShown: false}} name="SignIn" component={SignIn}/>
        <MainStack.Screen options={{headerShown: false}} name="SignUp" component={SignUp}/>
        <MainStack.Screen options={{headerShown: false}} name="Home" component={Home}/>
        <MainStack.Screen options={{headerShown: false}} name="MakeTransaction" component={MakeTransaction}/>
    </MainStack.Navigator>
}
