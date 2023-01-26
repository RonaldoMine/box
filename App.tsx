import {NativeBaseProvider} from "native-base";
import {ImageBackground} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {MainStackScreen} from "./src/navigation/StackNavigation";

export default function App() {
    const bg = require('./assets/images/bg.jpg');
    return (
        <NativeBaseProvider>
            <NavigationContainer>
                {/*<ImageBackground resizeMode={"cover"} source={bg} style={{flex: 1}}>*/}
                    <MainStackScreen/>
                {/*</ImageBackground>*/}
            </NavigationContainer>
        </NativeBaseProvider>
    );
}
