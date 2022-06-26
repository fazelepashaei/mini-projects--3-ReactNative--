import * as React from 'react';

import CommunityScreen from "./CommunityScreen"
import DiscoverScreen from './DiscoverScreen';
import IconFeather from "react-native-vector-icons/Feather"
import IconFontAwesome from "react-native-vector-icons/FontAwesome"
import IconIonicons from "react-native-vector-icons/Ionicons"
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import LibraryScreen from './LibraryScreen';
import PersonalScreen from './PersonalScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen  options={{tabBarIcon: () => ( <IconIonicons name="ios-navigate-circle-outline" color="black" size={20} /> ),}}
       name="Discover" component={DiscoverScreen} />
      <Tab.Screen options={{tabBarIcon: () => (<IconMaterialCommunityIcons name="comment-text-outline" color="black" size={20} />),}} 
       name="Community" component={CommunityScreen} />
      <Tab.Screen options={{tabBarIcon: () => (<IconFeather name="headphones" color="black" size={20} />),}} 
       name="Library" component={LibraryScreen} />
      <Tab.Screen options={{tabBarIcon: () => (<IconFontAwesome name="user-circle" color="black" size={20} />),}} 
       name="Personal" component={PersonalScreen} />
    </Tab.Navigator>
  );
}
export default MyTabs;
