import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//#e3c166, "#bd9833"
function HomeScreen1({navigation}) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const renderItem = ({item, index}) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Detail', {item});
      }}>
      <View style={{padding: 10}}>
        <Text style={styles.txt}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
  const getDijikala = async () => {
    try {
      const response = await fetch(
        'https://api.digikala.com/v1/',
      );

      const json = await response.json();
      setData(json.data.header_banners);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDijikala();
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
}

function DetainScreen1({route, navigation}) {
  return (
    <View>
      <Text>OKKK</Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    backgroundColor: '#bd9833',
    fontSize: 15,
    width: 100,
    height: 30,
    borderRadius: 10,
    marginBottom: 5,
    marginLeft: 10,
    textAlign: 'center',
    fontStyle: 'italic',
    borderColor: '#bd9833',
  },
  info: {
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#bd9833',
    borderRadius: 20,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 10,
  },
  detail: {
    flexDirection: 'row',
    backgroundColor: '#242422',
    width: 600,
    height: 500,
  },
});

const stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Homeee" headerMode="none" component={HomeScreen1} />
        <stack.Screen
          name="Detail"
          headerMode="none"
          component={DetainScreen1}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;