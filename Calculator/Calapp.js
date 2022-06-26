import React, { useState } from "react";
import {Text, View, TouchableOpacity, StyleSheet,TouchableHighlight} from 'react-native';
let ttt = '';
const Calapp = () => {
  const [data, setdata] = useState('');
  const [real, setreal] = useState('');
  const Calculator = ({item, key}) => {
    return (
      <View style={{}}>
      <View style={{marginTop:5,backgroundColor:"black"}}>
  
        <View style={styles.first_row}>
          <TouchableHighlight
           activeOpacity={0.9}
           underlayColor="#DDDDDD"
            style={styles.circle}
            onPress={() => onPress({item})}>
            <Text style={styles.number} id={key}>
              {item}
            </Text>
          </TouchableHighlight>
        </View>
      </View>
      </View>
    );
  };

  const onPress = ({item}) => {
    console.log('item char', item);
    if (item == '=') {
      setdata(eval(ttt));
      console.log('eval', eval(ttt)), (ttt = '');
    } else if (item === 'C') {
      ttt = '';
      setdata();
      setreal();
    } else {
      ttt += item;
      setdata(ttt);
      try{
      setreal(eval(ttt))
      }
      catch(error)
      {
      console.error(error);
      }
    }
  };

  let numbers = [
    'C',
    '%',
    '/',
    '*',
    9,
    8,
    7,
    '.',
    6,
    5,
    4,
    '-',
    3,
    2,
    1,
    '+',
    0,
    '=',
  ];
  return (
    <View>
    <View 
    style={styles.container_screen}>
    <Text style={styles.final_data}>{data}</Text>
    <Text style={styles.real_data}>{real}</Text>
   </View>
    <View style={styles.container_cal}>
      {numbers.map((item, index) => {
        // console.log('item', item);
        return <Calculator key={index} item={item} />;
      })}

    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container_screen:{
    flexDirection:"column",
    justifyContent:"space-between",
    width: 400,
    height: 200,
    backgroundColor: 'black',
   
  },  
  final_data:{
    textAlign:"center", 
    marginTop:30,
    fontSize:50,
    color:"white"
    },
    real_data: {
    textAlign:"left",
     fontSize:20,
     marginBottom:50,
     marginLeft:10,
     color:"gray"
    },
  container_cal: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor:"black",
    height:"100%"},
  first_row: {
    width: 70,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
    padding: 15,
    backgroundColor: "black",
    flexWrap: 'wrap-reverse',
    marginLeft:10
  },
  circle: {
    backgroundColor:"black",
    width: 50,
    height: 45,
    borderRadius: 25,
    justifyContent: 'center',
  },
  number: {
    textAlign: 'center',
    color:"white",
    fontSize:25

  },
});

export default Calapp;
