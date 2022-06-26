import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
function ImageScreen1({route, navigation}){
  console.log(route)
  return(
    <View style={{width:"100%",height:"100%"}}>
        <Image  
          style={{
            // resizeMode: 'contain',
            width: "100%",
            height:"100%", 
            
          }}
          source={route.params.source}
        />
    </View>
  );
}
export default ImageScreen1;
