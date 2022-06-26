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
function HomeScreen1({navigation}){
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const renderItem = ({item, index}) => (
      // <TouchableOpacity  onPress={()=>{navigation.navigate('Detail',{item})}}>
      <View style={{flexDirection: 'row',backgroundColor:"#1AABC3"}}>
        <View
          style={{ 
            flex:4,
            height: 200,
            justifyContent: 'flex-start',
            flexDirection: 'column',
            padding: 3,
            margin:10,
           
            // borderRadius:25
          }}>
               
                <ImageBackground source={require('../doctorimage/1.jpeg')} resizeMode="cover" style={{width:"100%",height:"100%", borderRadius:25}}>
    
             
                <View style={{flex:2, flexDirection:"row",justifyContent:"space-between"}}>
                 <TouchableOpacity  onPress={()=>{navigation.navigate('Detail',{item})}}>
          <Image
            style={{width: 80, height: 80,marginRight:35,borderRadius:45}}
            source={{
              uri:
                'https://www.tebinja.com/img/uploads/doctors/thumbnails/' +
                item._source.url,
            }}></Image>
           </TouchableOpacity>
            </View>
     
          {/* <View style={{flex:1}}>  */}
          <View style={{flex:2, flexDirection:"column"}}>
                      <View style={{backgroundColor:"#1AABC3",borderRadius:10,width:80,height:15,marginBottom:2}}>
                          <Text style={{fontSize: 10,textAlign:"right"}}> {item._source.fname} </Text>
                     </View>
                     <View style={{backgroundColor:"#1AABC3",borderRadius:10,width:120,height:15}}>
                     <Text style={{fontSize: 10,textAlign:"right"}}> دانشگاه  {item._source.university.name}</Text>
                     </View>
                {/* </View> */}
                <ScrollView
              
            backgroundColor="#1AABC3"
            horizontal={true}
            showsHorizontalScrollIndicator={true}
            scrollEventThrottle={2000}
            decelerationRate="fast"
            style={{ borderRadius: 25, paddingTop: 5,marginTop:2,width:180,maxHeight:25}}>
              
            {item._source.clinics.map((v, i) => (
              <>
                <Text  style={{fontSize: 10,color:"black",textAlign:"right"}}>آدرس {v.address} </Text>
              </>
            ))}
                   </ScrollView>
                {/* <View style={{flex:1,justifyContent:"space-between"}}> */}
                   <View style={{backgroundColor:"#1AABC3",borderRadius:10,width:140,height:15,marginBottom:5,marginTop:2}}
           
          >
            {item._source.clinics.map((v, i) => (
              <>
                
                  {v.telePhones.map((vv, ii) => (
                    <Text style={{fontSize: 10,color:"black"}}> شماره تماس {vv.phone}</Text>
                  ))}
              
                {/* <Text style={{fontSize: 10,color:"gray"}}>شماره : {v.longtitude} </Text> */}
          
              </>
            ))}
                   </View>
                   {/* </View> */}
                   </View>
            
   
            </ImageBackground>
                   </View>
         
       
      </View>
      // </TouchableOpacity>
    );
    const getDoctors = async () => {
      try {
        const response = await fetch(
          'https://www.tebinja.com/api/v1/doctors/searchi',
        );
  
        const json = await response.json();
        setData(json.doctors.hits);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      getDoctors();
    }, []);
  
  
    return (
      <View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({id}, index) => id}
            renderItem={renderItem}
      
          />
        )}
      </View>
    );
  };
  export default HomeScreen1;