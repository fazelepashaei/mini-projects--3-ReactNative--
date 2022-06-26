import React, {useEffect, useRef} from 'react';
// import all the components we are going to use
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import LottieView from 'lottie-react-native';

const Liveanimations = () => {
  let animationRef = useRef();
  useEffect(() => {
    // To play complete animation
    animationRef.play();
    // Similary you can use this reset, pause, resume
 
    // To play from a specific startFrame and endFrame
    // animationRef.play(30, 120);
  }, []);
 
  return (
    <SafeAreaView style={{width: 20,height: 20,backgroundColor: '#F2F2F2',marginRight:140}}>
      <View style={styles.container}>
        <LottieView
          ref={(animation) => {
            animationRef = animation;
          }}
          source={require('../json/animation.json')}
          autoPlay
          loop
        />
      </View>
    </SafeAreaView>
  );
};
 
export default Liveanimations;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    padding: 46,
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  smallText: {
    fontSize: 18,
    textAlign: 'center',
  },
});