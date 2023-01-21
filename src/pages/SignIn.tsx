import {Button, Center, FormControl, Heading, Input, Text, View, VStack} from "native-base";

export default function SignIn({navigation}) {
    return (<View paddingY={30} paddingX={5}>
        <Text bold marginBottom={10} color={"#5C85E6"}>BOX.</Text>
        <VStack space={1}>
            <Heading bold size={"2xl"}>Welcome</Heading>
            <Text>Start manage your business</Text>
            <VStack space={4} alignItems="center" paddingY={5}>
                <FormControl isInvalid>
                    <FormControl.Label>Email*</FormControl.Label>
                    <Input placeholder="Enter your email"/>
                </FormControl>
                <FormControl isInvalid>
                    <FormControl.Label>Password*</FormControl.Label>
                    <Input placeholder="Enter your password" type={"password"}/>
                </FormControl>
            </VStack>
            <Button bgColor={"#5C85E6"} onPress={() => navigation.push('Home')}>Login</Button>
            <Button bgColor={"#fff"} borderColor={"#1F1F1F"} borderWidth={1} _text={{color: "#5C85E6"}}>Sign In with
                Google</Button>
            <Center marginTop={4}><Text>Didn't have an account? <Text
                style={{textDecoration: "underline"}}>Register</Text></Text>
            </Center>
        </VStack>

    </View>);
}
