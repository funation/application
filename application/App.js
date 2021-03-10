import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Linking,
} from 'react-native';

import axios from "axios";

const App = () => {

  const [nick, setNick] = useState([])

  useEffect(()=> {
    const fetchData = async() => {
      const result = await axios("https://do.funation.io/api/getUserName")
      setNick(result.data.name)
    }
    fetchData();
  })

  return (
    <View>
      <Text onPress={() => Linking.openURL("https://do.funation.io/auth/kakao")}>
        {nick.name}dlrh
        {nick.img}입니다
      </Text>
    </View>
  );
};

export default App;
