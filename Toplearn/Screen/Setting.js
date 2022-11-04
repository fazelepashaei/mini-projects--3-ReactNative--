import * as React from 'react';

import { Button, Text, View } from 'react-native';
import {useContext, useEffect} from 'react';

import {Producttopcontex} from  "../contexttop"

function SettingsScreen({ route, navigation }) {
    const {title,settitle}=useContext(Producttopcontex)
    const { user } = route.params;
   return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text>Settings Screen</Text>
       {/* <Text>userParam: {JSON.stringify(user)}</Text> */}
       <Text>{title}</Text>
       <Button
         title="Go to Profile"
         onPress={() => navigation.navigate('Profile')}
       />
            <Button
         title="Go to Profile"
         onPress={console.log("ok")}
       />
     </View>
   );
 }
 export default SettingsScreen;