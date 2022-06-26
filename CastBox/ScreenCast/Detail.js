import * as React from 'react';

import {
    Button,
    FlatList,
    Image,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import IconEntypo from "react-native-vector-icons/Entypo"

function DetailScreen({ navigation,route }) {

    return (
    <View >
      <ImageBackground
        opacity ={0.5}
        style={styles.img_back}
        source={route.params.sr.Image} >
          <View style={styles.navigate}>
                <IconEntypo  onPress={() => navigation.goBack()} style={styles.icon_style} name="arrow-long-left" size={60}/>
                <Text style={styles.title}>{route.params.sr.podcastname}</Text> 
           </View>
       
            <Image
            style={styles.img_little}
            source={route.params.sr.Image}/>
        </ImageBackground>
       <ScrollView  
         style={styles.render_episod}>
          {route.params.sr.EpisodArray.map((v, i) => (

          <View style={{backgroundColor: 'white'}}>
              <View  style={styles.episod_line}></View>    
                 <View  style={{flexDirection:"row"}}>
                  <Image 
                      style={styles.img_episod}
                      source={route.params.sr.Image}/>
                      <Text style={styles.txt_episod}>{v.title}</Text>
                </View>
            </View>
          ))}
        </ScrollView>
        </View>
    
    )}
            
export default DetailScreen

const styles = StyleSheet.create({

  img_back:{
    resizeMode: 'contain',
    width: 400,
    height: 220,
    flexGrow:1,
    alignItems: 'center',
    justifyContent:'center',
  },
  navigate:{
    display:"flex",
    flexDirection:"row"
  },
  icon_style:{
    marginTop:5,
    marginLeft:2,
    marginRight:10
  },
  title:{
      fontSize:25,
      fontWeight:"bold",
      marginRight:120,
      marginTop:15
  },
  img_little:{
    borderColor: "gray",
    borderWidth:1 ,
    resizeMode: 'contain',
    width: 150,
    height: 150,
    marginTop:10,
    marginRight:200,
    marginBottom:-80
  },
  render_episod:{
     borderRadius: 10,
     paddingTop: 2,
     marginTop:20
  },
  episod_line:{
     backgroundColor: '#E2E5E0',
     height: 5,
     width: '100%'},
     img_episod:{
      resizeMode: 'contain',
      width: 160,
      height: 60,
      margin: 5,
      borderRadius: 25,
     },
     txt_episod:{
      marginTop:34,
      marginLeft:2
     }
  })