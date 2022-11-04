// import { Text, View } from 'react-native';

// import Apps from './CastBox/ComponentCast/CastApp'
// import Calapp from './Calculator/Calapp';
// import CastApp from './CastBox/ComponentCast/CastApp'
// import Doctorlist from './DoctorList/Doctorapp';
// import Live from './CastBox/ComponentCast/Live'
// import React from 'react';
// import Topapp from './Toplearn/topapp'

// const App = () => {
//   return (
//           // <Doctorlist/> // doctor list project for run this project uncommand
//          // <CastApp/>
//           <Topapp />
//           // castbox project
//         //   <View>
//         //    <Calapp/>   // calculator project for run this project uncommand
//         //  </View>    
//   );
// }

// export default App;

import * as React from 'react';

import { Button, Text, View } from 'react-native';
import {useContext, useEffect} from 'react';

import Context from "./contexttop"
import { NavigationContainer } from '@react-navigation/native';
import {Producttopcontex} from  "./contexttop"
import SettingsScreen from "./Screen/Setting"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

// function SettingsScreen({ route, navigation }) {
//    const {title,settitle}=useContext(Producttopcontex)
//    const { user } = route.params;
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Settings Screen</Text>
//       {/* <Text>userParam: {JSON.stringify(user)}</Text> */}
//       <Text>{title}</Text>
//       <Button
//         title="Go to Profile"
//         onPress={() => navigation.navigate('Profile')}
//       />
//     </View>
//   );
// }

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}
function AboutScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>AboutScreen Screen</Text>
    </View>
  );
}
function CallScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>CallScreen Screen</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();
function HomeScreen({ navigation }) {
  return (
  <Tab.Navigator>
    <Tab.Screen name="About" component={AboutScreen} />
    <Tab.Screen name="Call" component={CallScreen} />
  </Tab.Navigator>
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Text>Home Screen</Text>
    //   <Button
    //     title="Go to Settings"
    //     onPress={() =>
    //       navigation.navigate('Root', {
    //         screen: 'Settings',
    //         params: { user: 'jane' },
    //       })
    //     }
    //   />
    // </View>
  );
}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Root() {
  return (
    <Stack.Navigator>
      <Stack.Screen screenOptions={{ headerShown: false }} name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (

    <NavigationContainer>
      <Drawer.Navigator
        useLegacyImplementation
        initialRouteName="Root"
         
      >
        <Drawer.Screen screenOptions={{ headerShown: true }} name="Root" component={Root} />
        <Drawer.Screen  screenOptions={{ headerShown: false }}name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>

  );
}

