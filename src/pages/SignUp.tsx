import {Button, Center, FormControl, Heading, Input, Text, View, VStack} from "native-base";

export default function SignUp() {
    return (<View paddingY={30} paddingX={5}>
        <Text bold marginBottom={10} color={"#5C85E6"}>BOX.</Text>
        <VStack space={1}>
            <Heading bold size={"2xl"}>Get Started.</Heading>
            <Text>Start your 30-day free trial</Text>
            <VStack space={4} alignItems="center" paddingY={5}>
                <FormControl isInvalid>
                    <FormControl.Label>Company*</FormControl.Label>
                    <Input placeholder="Enter your company"/>
                </FormControl>
                <FormControl isInvalid>
                    <FormControl.Label>Name*</FormControl.Label>
                    <Input placeholder="Enter your name"/>
                </FormControl>
                <FormControl isInvalid>
                    <FormControl.Label>Email*</FormControl.Label>
                    <Input placeholder="Enter your email"/>
                </FormControl>
                <FormControl isInvalid>
                    <FormControl.Label>Password*</FormControl.Label>
                    <Input placeholder="Create password" type={"password"}/>
                </FormControl>
            </VStack>
            <Button bgColor={"#5C85E6"}>Create Account</Button>
            <Button bgColor={"#fff"} borderColor={"#1F1F1F"} borderWidth={1} _text={{color: "#5C85E6"}}>Sign Up with
                Google</Button>
            <Center marginTop={4}><Text>Already have an account?<Text style={{textDecoration: "underline"}}>Login</Text></Text>
            </Center>
        </VStack>

    </View>);
}
