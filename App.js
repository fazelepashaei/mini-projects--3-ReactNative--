import { Text, View } from 'react-native';

import Apps from './CastBox/ComponentCast/CastApp'
import Calapp from './Calculator/Calapp';
import CastApp from './CastBox/ComponentCast/CastApp'
import Doctorlist from './DoctorList/Doctorapp';
import Live from './CastBox/ComponentCast/Live'
import React from 'react';

const App = () => {
  return (
          // <Doctorlist/> // doctor list project for run this project uncommand
          <CastApp/>
          // castbox project
        //   <View>
        //    <Calapp/>   // calculator project for run this project uncommand
        //  </View>    
  );
}

export default App;


