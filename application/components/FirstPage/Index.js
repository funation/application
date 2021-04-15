import React from "react"
import styled from "styled-components/native";
import { Text, Button } from "react-native";

const WholeWrapper = styled.View`
    width:100%;
    height:100%;
    background:red;
    flex:1;
    justify-content:center;
    align-items:center;
`;


const Index = ({navigation}) => {
    return(
        <WholeWrapper>
            <Button
                title="go other page"
                onPress={()=>navigation.navigate('FirstDetail')}
            />
        </WholeWrapper>
    );
};

export default Index;