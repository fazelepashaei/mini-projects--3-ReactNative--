import {
  ImageBackground,
  View,
} from 'react-native';

import React from 'react';
import Swiper from 'react-native-web-swiper';

const SwiperFunction = ({navigation}) => {
  return (
    <View>
      <View style={{height: 300}}>
  
        <Swiper
          loop
          timeout={-4.5}
          controlsProps={{
            dotActiveStyle: {backgroundColor: 'white'},
          }}>
     
            <ImageBackground
              source={require('../assets/gooshfilm.jpeg')}
              resizeMode="cover"
              style={{height: 300, width: '100%'}}>
            </ImageBackground>
            <ImageBackground
              source={require('../assets/ketabbaz.jpeg')}
              resizeMode="cover"
              style={{height: 300, width: '100%'}}>
            </ImageBackground>
            <ImageBackground
              resizeMode="cover"
              style={{height: 300, width: '100%'}}
              source={require('../assets/navcast.jpeg')}>
            </ImageBackground>
            <ImageBackground
              resizeMode="cover"
              style={{height: 300, width: '100%'}}
              source={require('../assets/fullstack.jpeg')}>
            </ImageBackground>
            <ImageBackground
              resizeMode="cover"
              style={{height: 300, width: '100%'}}
              source={require('../assets/block.jpeg')}>
            </ImageBackground>
            <ImageBackground
              resizeMode="cover"
              style={{height: 300, width: '100%'}}
              source={require('../assets/hamfekr.png')}>
            </ImageBackground>
            <ImageBackground
              resizeMode="cover"
              style={{height: 300, width: '100%'}}
              source={require('../assets/farsi.png')}>
            </ImageBackground>
       
        </Swiper>
      </View>
    </View>
  );
};
export default SwiperFunction;
