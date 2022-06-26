import * as React from 'react';

import { Button, Image, Text, View } from 'react-native';

import MyTabs from '../ScreenCast/bottomTab';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [isloadig, setisloadin] = React.useState(true);
  React.useEffect(() => {

    setTimeout(() => {
      setisloadin(false);
    }, 10000);
  });
  if (isloadig) {
    return (
      <View style={{backgroundColor:"#FE7D40"}}>
        <Image
      style={{
        resizeMode:"contain",
        width: "100%",
        height: "100%",
      }}
      source={require('../assets/castbox2.jpeg')} 
    />
      </View>
    );
  }  
  return (
    <NavigationContainer >
      <MyTabs />
    </NavigationContainer>
  );
}
