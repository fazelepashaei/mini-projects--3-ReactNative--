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

import IconEvilIcons from "react-native-vector-icons/EvilIcons"
import IconFontisto from "react-native-vector-icons/Fontisto"
import IconFoundation from "react-native-vector-icons/Foundation"
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

export default Iconlist=({ navigation,route }) =>{
return(
    <View style={styles.container_icon}>
<IconFoundation 
style={{width: 30}}
name="book"
size={35}
color="#ED5821"
onPress={() => navigation.navigate('Radio')}
/>
     <IconMaterialCommunityIcons
     style={{width: 30}}
     name="radio"
     size={35}
     color="#ED5821"
     onPress={() => navigation.navigate('Radio')}
   />
   <IconFontisto
   style={{width: 30}}
   name="fire"
   size={35}
   color="#ED5821"
   onPress={() => navigation.navigate('Radio')}
 />
 <IconFontisto
 style={{width: 35}}
 name="earth"
 size={35}
 color="#ED5821"
 onPress={() => navigation.navigate('Radio')}
/>
</View>
)}
const styles = StyleSheet.create({
    container_icon:{
        display: 'flex',
        flexDirection:"row",
         justifyContent:"space-between",
         padding:25
    }
})