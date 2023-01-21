// @ts-ignore
import React, {ImageBackground} from "react-native";
import {Button, Heading, HStack, Text, View, VStack} from "native-base";

export default function Onboard({ navigation }) {
    let {StyleSheet} = React;
    let styles = StyleSheet.create({
        primaryColor: "#5C85E6",
        blackColor: "#1F1F1F"
    });
    return (
        <View flex={1} justifyContent={'space-between'} padding={25}>
            <Heading textAlign={"right"} color={styles.primaryColor}>
                Box.
            </Heading>
            <VStack space={2}>
                <Heading size={"2xl"} bold color={styles.primaryColor}>
                    All your finances in one app
                </Heading>
                <Text marginBottom={10} color={styles.blackColor}>
                    Manage your finances in our app.
                    We do everything to keep your money safe.
                </Text>
                <HStack space={4} justifyContent={'space-evenly'}>
                    <Button shadow={2} rounded={"md"} bgColor={"#fff"} borderColor={styles.primaryColor} borderWidth={1} _text={{color: "#5C85E6"}} width={"1/2"}
                            onPress={() => navigation.navigate('SignIn')}>
                        Login
                    </Button>
                    <Button shadow={2} rounded={"md"} backgroundColor={styles.primaryColor} width={"1/2"}
                            onPress={() => navigation.navigate('SignUp')}>
                        Register
                    </Button>
                </HStack>
            </VStack>
        </View>);

}
