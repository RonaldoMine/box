import {Box, Button, Center, Heading, HStack, ScrollView, Text, View, VStack} from "native-base";
import {useState} from "react";
import {BarChart} from "react-native-gifted-charts";
import {IonIcon} from "./components/Icons";

export default function Transaction() {
    const buttonFilters = [{
        id: 1,
        label: '1W',
    }, {
        id: 2,
        label: '1M',
    }, {
        id: 3,
        label: '3M',
    }, {
        id: 4,
        label: '6M',
    }, {
        id: 5,
        label: 'ALL',
    }];
    const [currentFilter, setCurrentFilter] = useState(3);
    const dataBarChart = [
        {value: 250}, {value: 500}
    ]

    return (<ScrollView bgColor={"rgba(255,255,255,0.60)"} paddingX={4}>
        <View paddingTop={"50px"}>
            <Button width={"40px"} borderWidth={1} borderColor={"#FFF"} bg={"#5C85E6"} rounded={"full"} _text={{
                textAlign: "left",
            }} variant={"link"} leftIcon={<IonIcon name={"arrow-back"} size={14}/>} _icon={{
                color: "#FFF",
                size: 5
            }}></Button>
            <Center>
                <Heading size={"xl"} color={"#5C85E6"}>Transactions</Heading>
            </Center>
            <Box bgColor={"rgba(219,219,219,0.5)"} marginY={5}>
                <HStack space={4} padding={1.5} justifyContent={"space-around"}>
                    {buttonFilters.map((button) => {
                        return <Button key={button.id} onPress={() => setCurrentFilter(button.id)}
                                       bgColor={currentFilter === button.id ? "#FFF" : "transparent"}
                                       _text={{
                                           color: `${currentFilter === button.id ? "#5C85E6" : "#383838"}`,
                                           fontWeight: "extrabold"
                                       }}>
                            {button.label}
                        </Button>
                    })}
                </HStack>
            </Box>
            <VStack space={2}>
                <Text>
                    Spending. February 2022
                </Text>
                <Heading>
                    $ 24,4000
                </Heading>
            </VStack>
        </View>
        {/*<BarChart horizontal
            data={dataBarChart}
        />*/}
        <HStack marginTop={5} borderRadius={5} bg={"rgba(219,219,219,0.5)"} padding={3} justifyContent={"space-between"} alignItems={"center"}>
            <HStack space={2} alignItems={"center"}>
                <Box bg={"white"} borderRadius={5} padding={2}><IonIcon size={6} color={"green.600"} name={"trending-up-sharp"} /></Box>
                <Text>Income + Feb 2022</Text>
            </HStack>
            <Text color={"green.600"}>$24,900.90</Text>
        </HStack>
        <HStack marginTop={5} borderRadius={5} bg={"rgba(219,219,219,0.5)"} padding={3} justifyContent={"space-between"} alignItems={"center"}>
            <HStack space={2} alignItems={"center"}>
                <Box bg={"white"} borderRadius={5} padding={2}><IonIcon size={6} color={"red.600"} name={"trending-down-sharp"} /></Box>
                <Text>Outcome + Feb 2022</Text>
            </HStack>
            <Text color={"red.600"}>$15,090.90</Text>
        </HStack>
    </ScrollView>);
}
