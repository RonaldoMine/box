import {
    ArrowBackIcon,
    Avatar,
    Box,
    Button,
    Center,
    ChevronRightIcon,
    Heading,
    HStack,
    QuestionIcon,
    ShareIcon,
    Text,
    View,
    VStack
} from "native-base";
import {FlatList} from "react-native";
import {FontAwesome} from "./components/Icons";

export default function Setting() {
    const accountOptions = [{
        icon: <FontAwesome name="rocket" color={"#5C85E6"} size={14}/>,
        text: "Manage Users"
    }, {
        icon: <FontAwesome name={"bell"} color={"#5C85E6"}/>,
        text: "Notifications"
    }];
    const otherOptions = [{
        icon: <FontAwesome name={"question"} color={"#5C85E6"}/>,
        text: "About"
    }, {
        icon: <FontAwesome name={"share-alt"} color={"#5C85E6"}/>,
        text: "Share"
    }];
    return (<View flex={1} paddingTop={"50px"} paddingX={8}>
        <Button width={"40px"} borderWidth={1} borderColor={"#FFF"} bg={"#5C85E6"} rounded={"full"} _text={{
            textAlign: "left",
        }} variant={"link"} _icon={{
            color: "#FFF",
            size: 5
        }} leftIcon={<FontAwesome name={"arrow-left"} size={13}/>}></Button>
        <Center>
            <Heading size={"xl"} color={"#5C85E6"}>Settings</Heading>
        </Center>
        <VStack marginTop={10} size={2}>
            <Box px={"5"} py={"4"} m={"2"} borderRadius={"2xl"} bg={"#FFF"}>
                <HStack justifyContent={"space-between"}>
                    <HStack>
                        <Avatar bg={"#5C85E6"} source={{
                            uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80s"
                        }}>
                            AJ
                        </Avatar>
                        <VStack marginLeft={4}>
                            <Text bold>John Doe</Text>
                            <Text>Manage Account detail</Text>
                        </VStack>
                    </HStack>
                    <Button size="sm" variant="link" colorScheme="gray">
                        <ChevronRightIcon size="3"/>
                    </Button>

                </HStack>
            </Box>
            <Box px={"5"} py={"2"} m={"2"} borderRadius={"2xl"} bg={"#FFF"}>
                <FlatList data={accountOptions} renderItem={({item, index}) => {
                    return <Box py="3" borderColor="gray.100"
                                borderBottomWidth={index < accountOptions.length - 1 ? 1 : 0}><HStack
                        justifyContent={"space-between"}>
                        <HStack alignItems={"center"}>
                            {item.icon}
                            <VStack marginLeft={3}>
                                <Text bold>{item.text}</Text>
                            </VStack>
                        </HStack>
                        <Button size="sm" variant="link" colorScheme="gray">
                            <ChevronRightIcon size="3"/>
                        </Button>

                    </HStack></Box>
                }}>
                </FlatList>
            </Box>
            <Box px={"5"} py={"2"} m={"2"} borderRadius={"2xl"} bg={"#FFF"}>
                <FlatList data={otherOptions} renderItem={({item, index}) => {
                    return <Box py="3" borderColor="gray.100"
                                borderBottomWidth={index < otherOptions.length - 1 ? 1 : 0}><HStack
                        justifyContent={"space-between"}>
                        <HStack alignItems={"center"}>
                            {item.icon}
                            <VStack marginLeft={3}>
                                <Text bold>{item.text}</Text>
                            </VStack>
                        </HStack>
                        <Button size="sm" variant="link" colorScheme="gray">
                            <ChevronRightIcon size="3"/>
                        </Button>

                    </HStack></Box>
                }}>
                </FlatList>
            </Box>
        </VStack>

    </View>);
}
