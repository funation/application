import React from "react"
import styled from "styled-components/native";
import { Text, Button } from "react-native";

const WholeWrapper = styled.View`
    width:100%;
    height:100%;
    background:blue;
    flex:1;
    justify-content:center;
    align-items:center;
`;

const Index = ({navigation}) => {
    return(
        <WholeWrapper>
            <Button
                title="Second Detail"
                onPress={()=>navigation.navigate("SecondDetail")}
            />
            <Text>
                Second page
            </Text>
        </WholeWrapper>
    );
};

export default Index;