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

import Liveanimations from './LiveAnimation';
import Livedata from '../json/Livedata';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Live=({ navigation,route }) =>{
      const renderItem = ({item, id}) => (
    <ScrollView>
      <View style={styles.line}></View> 
      <View style={styles.boldline}></View> 
        <View style={styles.zero}>
          <Text style={styles.category}>{item.Category}</Text>
          <Liveanimations/>
            <TouchableOpacity onPress={() => navigation.navigate('DetailScreen')}>
              <Text style={styles.more}>
                MORE
              </Text>
            </TouchableOpacity>
        </View>
      <View style={styles.live_container}> 
         <View style={styles.firs_row}>
            <View style={styles.live_row}> 
                        <Image style={styles.image_zero}  source={item.Top[0].Image} />
                        <View style={styles.cube}><Text style={{color: 'white',textAlign: 'center'}}>Live</Text></View>
                        <Text style={styles.podcast_name}>{item.Top[0].podcastname}</Text>
            </View>
            <View style={styles.live_row}>
                  <Image style={styles.image_zero}  source={item.Top[1].Image} />
                  <View style={styles.cube}><Text style={{color: 'white',textAlign: 'center'}}>Live</Text></View>
                  <Text  style={styles.podcast_name}>{item.Top[1].podcastname}</Text>
                   
            </View>
            <View style={styles.live_row}>
                  <Image style={styles.image_zero}  source={item.Top[2].Image} />
                  <View style={styles.cube}><Text style={{color: 'white',textAlign: 'center'}}>Live</Text></View>
                  <Text  style={styles.podcast_name}>{item.Top[2].podcastname}</Text> 
                     
            </View>       
         </View>
   </View>
        </ScrollView>
      );
      return (
<View>
       <ScrollView>
          <FlatList
            style={{height: 500}}
            data={Livedata}
            keyExtractor={(id, index) => id}
            renderItem={renderItem}
          />
        </ScrollView>
  </View>
      );
    };

export default Live;
const styles = StyleSheet.create({
    live_container:{
      flexDirection: 'column',
      paddingLeft:5,
      paddingRight:5
    },
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
      fontSize:25,
      marginTop:30,
    },
  firs_row:{
    flexDirection:"column",
    justifyContent:"space-between",
    paddingBottom:15
  },
  live_row:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingRight:10,
    marginTop:10,
    
  },
  podcast_name:{
    fontWeight:"bold",
    fontSize:11,
    marginTop:40
  },
  author_name:{
    fontSize:12,
    color: 'gray',
    marginTop:60,
    marginRight:50
    
  },
  cube:{
    width:70,
    height:25,
    backgroundColor:"#ED5821",
    borderRadius:5,
    marginTop:85,
    marginRight:100
  },
  second:{
    display:"flex",
    flexDirection:"column", 
    
  }
  })