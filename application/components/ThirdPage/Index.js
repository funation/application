import React from "react"
import styled from "styled-components/native";
import { Text, Button } from "react-native";

const WholeWrapper = styled.View`
    width:100%;
    height:100%;
    background:green;
    flex:1;
    justify-content:center;
    align-items:center;
`;

const Index = ({navigation}) => {
    return(
        <WholeWrapper>
            <Text>
                Third page
            </Text>
            <Button
                title="Third Detail"
                onPress={()=>navigation.navigate("ThirdDetail")}
            />
        </WholeWrapper>
    );
};

export default Index;