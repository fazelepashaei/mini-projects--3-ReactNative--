import * as React from 'react';

import {
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import Data from '../json/CastData'
import DetailScreen from './Detail'
import Iconlist from "../ComponentCast/iconlist"
import Live from '../ComponentCast/Live'
import Radio from './Radio';
import SwiperFunction from '../ComponentCast/Swiper'
import TextInputFunction from "../ComponentCast/Searchbar"
import TopShow from "../ComponentCast/Topshow"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const styles = StyleSheet.create({
  line:{
    backgroundColor:'#C7C1C1', 
    width:'100%',
    height:1
  },
  boldline:{
    backgroundColor:"#C7C1C1", 
    width:'100%',
    height:5
  },
  zero:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  more:{
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red'},
  image_zero:{
    width: 120,
    height: 110, 
    marginBottom:10
  },
  category:{
    fontWeight:"bold",
    fontSize:20
  },
firs_row:{
  flexDirection: 'row',
  justifyContent:"space-between",
  paddingBottom:15
},
podcast_name:{
  fontWeight:"bold",
  fontSize:11
},
author_name:{
  color: 'gray'
},
})
const HomeScreen=({ navigation,route }) =>{

      const renderItem = ({item, id}) => (
   <ScrollView>
      <View style={styles.line}></View> 
      <View style={styles.boldline}></View> 
        <View style={styles.zero}>
          <Text style={styles.category}>{item.Category}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('DetailScreen')}>
              <Text style={styles.more}>
                MORE
              </Text>
            </TouchableOpacity>
        </View>
       <View style={{flexDirection: 'column',   paddingLeft:5, paddingRight:5}}>
         <View style={styles.firs_row}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('DetailScreen', {sr: item.Top[0]})}>
                  <Image style={styles.image_zero}  source={item.Top[0].Image} />
                  <Text style={styles.podcast_name}>{item.Top[0].podcastname}</Text>
                  <Text style={styles.author_name}>{item.Top[0].AuthorFirstName}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('DetailScreen', {sr: item.Top[1]})}>
                  <Image style={styles.image_zero}  source={item.Top[1].Image} />
                  <Text  style={styles.podcast_name}>{item.Top[1].podcastname}</Text>
                  <Text style={styles.author_name}>{item.Top[1].AuthorFirstName}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('DetailScreen', {sr: item.Top[2]})}>
                  <Image style={styles.image_zero}  source={item.Top[2].Image} />
                  <Text  style={styles.podcast_name}>{item.Top[2].podcastname}</Text>
                  <Text style={styles.author_name}>{item.Top[2].AuthorFirstName}</Text>
                </TouchableOpacity>       
         </View>
         <View style={styles.firs_row}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('DetailScreen', {sr: item.Top[3]})}>
                  <Image style={styles.image_zero}  source={item.Top[3].Image} />
                  <Text style={styles.podcast_name}>{item.Top[3].podcastname}</Text>
                  <Text style={styles.author_name}>{item.Top[3].AuthorFirstName}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('DetailScreen', {sr: item.Top[4]})}>
                  <Image style={styles.image_zero}  source={item.Top[4].Image} />
                  <Text  style={styles.podcast_name}>{item.Top[4].podcastname}</Text>
                  <Text style={styles.author_name}>{item.Top[4].AuthorFirstName}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('DetailScreen', {sr: item.Top[5]})}>
                  <Image style={styles.image_zero}  source={item.Top[5].Image} />
                  <Text  style={styles.podcast_name}>{item.Top[5].podcastname}</Text>
                  <Text style={styles.author_name}>{item.Top[5].AuthorFirstName}</Text>
                </TouchableOpacity>

            </View>
           </View>
     </ScrollView>
      );
    
      return (
<View>
        <ScrollView>   
            <View style={{width: 400, height: 300}}><SwiperFunction/></View>
             <Iconlist navigation={navigation}/>
             <TopShow navigation={navigation}/> 
             <Live    navigation={navigation}/>
          <FlatList
            style={{height: 1200}}
            data={Data}
            keyExtractor={(id, index) => id}
            renderItem={renderItem}
          />  
      </ScrollView>
        <View >
          <TextInputFunction navigation={navigation}/>
       </View>
  </View>
      );
    };

function DiscoverScreen() {
  return (
      <Stack.Navigator   screenOptions={{headerShown: false}} >
        <Stack.Screen    name="Home" component={HomeScreen} />
        <Stack.Screen    name="DetailScreen" component={DetailScreen} />
        <Stack.Screen    name="Radio"  component={Radio} />
      </Stack.Navigator>
  );  
}
export default DiscoverScreen;
