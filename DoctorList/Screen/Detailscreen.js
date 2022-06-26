import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
function DetainScreen1 ({route, navigation}){

    return(
  
  
          <View style={{ justifyContent: 'flex-end',display: 'flex'}}>
             <ImageBackground source={require('../doctorimage/4.png')} style={{width:"100%",height:"100%", borderRadius:25}}>
             <View   style={{backgroundColor:"#992975",borderRadius:10,width:"100%",height:180,marginBottom:2}}>
          <TouchableOpacity   onPress={()=>{navigation.navigate('Image',
           { source:{
            uri:
              'https://www.tebinja.com/img/uploads/doctors/thumbnails/' +
              route.params.item._source.url
          }})}} >
          <Image 
            style={{width: 150, height: 150,marginRight:15,borderRadius:55}}
            source={{
              uri:
                'https://www.tebinja.com/img/uploads/doctors/thumbnails/' +
                route.params.item._source.url
            }}></Image>
            </TouchableOpacity>
            </View>
            <View style={{backgroundColor:"#992975",borderRadius:10,width:"100%",height:280,marginBottom:2}}>
                     <Text style={{fontSize: 12,texalign:"right",}}>  نام پزشک:{route.params.item._source.fname} </Text>
                     <Text style={{fontSize: 12}}> نام دانشگاه:{route.params.item._source.university.name}</Text>
  
                     <Text>آدرس </Text>
                
                <ScrollView
            backgroundColor="#F08517"
            horizontal={true}
            showsHorizontalScrollIndicator={true}
            scrollEventThrottle={2000}
            decelerationRate="fast"
            style={{ borderRadius: 10, paddingTop: 5,width:160,maxHeight:25}}>
              
            {route.params.item._source.clinics.map((v, i) => (
              <>
                <Text  style={{fontSize: 10,color:"black"}}>{v.address}</Text>
              </>
            ))}
                   </ScrollView>
                <View style={{justifyContent:"space-between", backgroundColor:"#F08517", borderRadius: 10, paddingTop: 5,marginTop:5,width:160,maxHeight:25}}>
                   <View style={{flexDirection:"row",justifyContent:"space-between"}}
           
          >
            {route.params.item._source.clinics.map((v, i) => (
              <>
                
                  {v.telePhones.map((vv, ii) => (
                    <Text style={{fontSize: 10,color:"black",textAlign:"right"}}>  {vv.createdAt}</Text>
                  ))}
              
                {/* <Text style={{fontSize: 10,color:"gray"}}>شماره : {v.longtitude} </Text> */}
          
              </>
            ))}
            </View>
                   </View>
  
  
  
          </View>
  
  
     
            </ImageBackground>
          </View>
  
    );
  }
  export default DetainScreen1;