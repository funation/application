import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import FirstPage from './components/FirstPage/Index';
import SecondPage from './components/SecondPage/Index';
import ThirdPage from './components/ThirdPage/Index';
import FourthPage from './components/FourthPage/Index';

import FirstDetail from './components/FirstPage/DetailPage';
import SecondDetail from "./components/SecondPage/SecondDetail";
import ThirdDetail from "./components/ThirdPage/ThirdDetail";
import FourthDetail from "./components/FourthPage/FourthDetail";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const FirstPageStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FirstIndex" component={FirstPage} />
      <Stack.Screen name="FirstDetail" component={FirstDetail} />
    </Stack.Navigator>
  );
};

const SecondPageStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="SecondIndex" component={SecondPage} />
      <Stack.Screen name="SecondDetail" component={SecondDetail} />
    </Stack.Navigator>
  )
}

const ThirdPageStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="ThirdIndex" component={ThirdPage} />
      <Stack.Screen name="ThirdDetail" component={ThirdDetail} />
    </Stack.Navigator>
  )
}

const FourthPageStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="FourthIndex" component={FourthPage} />
      <Stack.Screen name="FourthDetail" component={FourthDetail} />
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="FirstPage" component={FirstPageStack} />
        <Tab.Screen name="SecondPage" component={SecondPageStack} />
        <Tab.Screen name="ThirdPage" component={ThirdPageStack} />
        <Tab.Screen name="FourhtPage" component={FourthPageStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
