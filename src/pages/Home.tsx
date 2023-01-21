import {View, Text, Spacer, FlatList, Heading, HStack, Avatar, VStack, Button} from "native-base";
import {TouchableOpacity} from 'react-native'
import {height} from "../constants";

const history = [
    {
        id: 1,
        initial: 'AD',
        to: 'Adobe',
        date: 'Sep 15, 2022',
        amount: 'XAF14.99'
    },
    {
        id: 2,
        initial: 'DHL',
        to: 'DHL Delivery',
        date: 'Sep 15, 2022',
        amount: 'XAF14.99'
    },
    {
        id: 3,
        initial: 'FX',
        to: 'FedEx',
        date: 'Sep 15, 2022',
        amount: 'XAF14.99'
    },
    {
        id: 4,
        initial: 'Ubr',
        to: 'Uber',
        date: 'Sep 15, 2022',
        amount: 'XAF14.99'
    }
]

const HeaderComponent = () => {
    return <HStack justifyContent={'space-between'} py={2.5} bgColor={'white'}>
        <Heading fontSize={'lg'} color={'gray.400'}>History</Heading>
        <TouchableOpacity>
            <Text color={'blue.500'}>See all</Text>
        </TouchableOpacity>
    </HStack>
}

const ListItem = ({initial, to, date, amount}: any) => {
    return <HStack w={'100%'} py={1.5} alignItems={"center"} justifyContent={'space-between'}>
        <Avatar>{initial}</Avatar>
        <HStack flex={1} justifyContent={'space-between'} alignItems={'center'}>
            <VStack ml={2}>
                <Heading fontSize={'md'}>{to}</Heading>
                <Text color={'gray.500'}>{date}</Text>
            </VStack>
            <Text fontWeight={'semibold'}>{amount}</Text>
        </HStack>
    </HStack>
}

const Home = ({navigation}) => {
    return (
        <View flex={1} bgColor={'white'}>
            <View flex={0.4} px={'5%'} pt={'5%'}>
                <HStack justifyContent={'space-between'}>
                    <View p={'5%'} w={'48%'} h={height / 4} bgColor={"#5C85E6"} rounded='xl' shadow={3}>
                        <VStack flex={1} justifyContent={'flex-end'}>
                            <Text color={'gray.400'}>Deposit</Text>
                            <Heading fontSize={'2xl'} color={'white'} mt={1.5}>65000</Heading>
                        </VStack>
                    </View>

                    <View p={'5%'} w={'48%'} bgColor={'white'} shadow={3} rounded='xl'>
                        <VStack flex={1} justifyContent={'flex-end'}>
                            <Text color={'gray.400'}>Withdraw</Text>
                            <Heading fontSize={'2xl'} mt={1.5}>65000</Heading>
                        </VStack>
                    </View>
                </HStack>

                <HStack space={3} flex={1} alignItems='center' justifyContent={'center'}>
                    <Button onPress={() => navigation.push('MakeTransaction')} bgColor={"#fff"} borderColor={"#1F1F1F"}
                            borderWidth={1} _text={{color: "#5C85E6"}} rounded='lg' w={'30%'}>Withdraw</Button>
                    <Button onPress={() => navigation.push('MakeTransaction')} bgColor={'#5C85E6'} rounded='lg'
                            w={'30%'}>Deposit</Button>
                </HStack>
            </View>
            <View flex={0.6} px={'5%'}>
                <FlatList
                    data={history}
                    keyExtractor={(_, idx) => idx.toString()}
                    renderItem={({item}) => <ListItem initial={item.initial} to={item.to} date={item.date}
                                                      amount={item.amount}/>}
                    ListHeaderComponent={HeaderComponent}
                    ItemSeparatorComponent={() => <Spacer size={1}/>}
                    stickyHeaderIndices={[0]}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
};

export default Home;
