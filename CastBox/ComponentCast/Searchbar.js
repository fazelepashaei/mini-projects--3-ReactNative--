import {StyleSheet, Text, TextInput, View} from 'react-native';

import IconFeather from "react-native-vector-icons/Feather"
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons"
import IconOcticons from "react-native-vector-icons/Octicons"
import React from 'react';

export default TextInputFunction = ({navigation}) => {
    const [text, setText] = React.useState('');
  return (
        <View style={styles.search_bar_1}>
           <View> 
               <View
                style={styles.search_bar_2}>
                <IconOcticons 
                  style={{width: 30,marginTop:5,marginLeft:5}}
                  name="search"
                  size={25}
                  color="gray"
                />
                <TextInput
                  style={{width: 200}}
                  placeholder="Search SHOWS, RSS feeds,iTune..."
                  onPressIn={() => navigation.navigate('Radio')}></TextInput>
                <IconMaterialIcons name="keyboard-voice" size={30} color="gray" />
                <View
                style={styles.right_cadr}>
                <View style={styles.circle}></View>
                <IconFeather
                  style={{width: 30}}
                  name="arrow-down-circle"
                  size={30}
                  color="black"
                />
                </View>
              </View>
           </View>
  </View> 
  );
};
const styles = StyleSheet.create({
   search_bar_1:{
     position: 'absolute',
     zIndex: 999, 
     bottom: 650,
     left:5, 
     width: 50,
     height: 50
  },
  search_bar_2:{
    height: 40,
    width: 300,
    backgroundColor: 'white',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 25,
    flexDirection: 'row',

  },
  right_cadr:{
    width: 60,
    height: 40,
    backgroundColor: 'white',
    marginLeft: 65,
    borderTopLeftRadius:25,
    borderBottomLeftRadius:25,
    paddingTop:5,
    paddingLeft:5
  },
circle: {
    width:12,
    height:12,
    borderRadius:15,
    backgroundColor:"red",
    marginBottom:-10,
    marginLeft:15}
})