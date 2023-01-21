import { View, Text, VStack, Input, Button } from "native-base";

const MakeTransaction = () => {
    return (
        <View flex={1} p={'5%'}>

            <View flex={0.2} alignItems='center' justifyContent={'flex-end'}>
                <Button.Group isAttached colorScheme={'trueGray'}>
                    <Button bgColor={'#5C85E6'}>Deposit</Button>
                    <Button variant={'outline'} _text={{color: "#5C85E6"}}>Withdraw</Button>
                </Button.Group>
            </View>

            <VStack flex={0.8} justifyContent='center'>
                <View>
                    <Input textAlign={'center'} variant={'underlined'} fontSize={'lg'} placeholder={'Phone number'} />
                </View>
                <View mt={'10%'}>
                    <Text textAlign={'center'} color="gray.400">Enter the amount</Text>
                    <Input textAlign={'center'} variant={'unstyled'} fontSize={'4xl'} fontWeight={'semibold'} placeholder="10.000" />
                    <Button bgColor={'#5C85E6'} p={5}> Send Money</Button>
                </View>
            </VStack>
        </View>
    );
};

export default MakeTransaction;
