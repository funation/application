import React from "react";
import { View, Text, Button } from "react-native";

const Index = ({navigation}) => {
    return(
        <View>
            <Button
                title="fourth detail"
                onPress={()=>navigation.navigate('FourthDetail')}
            />
            <Text>
                Fourth Index
            </Text>
        </View>
    )
}

export default Index;