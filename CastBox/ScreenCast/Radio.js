import * as React from 'react';

import {
    Button,
    FlatList,
    Image,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

import IconEntypo from "react-native-vector-icons/Entypo"

function Radio({ navigation }) {
    return (
      <View style={{  justifyContent: 'center', alignItems: 'center' }}>  
           <IconEntypo  onPress={() => navigation.goBack()} style={styles.icon_style} name="arrow-long-left" size={60}/>
        <Text>Detail screen</Text>
        <Button
          title="Go to Audiobook"
        
        />
      </View>
    );
  }
  export default Radio;
  const styles = StyleSheet.create({
    icon_style:{
      marginTop:35,
      marginRight:30
    },
    })