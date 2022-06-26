import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetainScreen1  from "./Screen/Detailscreen"
import HomeScreen1 from "./Screen/HomeScreen"
import ImageScreen1 from "./Screen/ImageScreen"
const stack=createNativeStackNavigator ();
function Doctorlist(){
 return(
  <NavigationContainer>
  <stack.Navigator>
    <stack.Screen name="Home" component={HomeScreen1}/>
    <stack.Screen name="Detail" component={DetainScreen1}/>
    <stack.Screen name="Image" component={ImageScreen1}/>
  </stack.Navigator>
</NavigationContainer>
 );
}

export default Doctorlist;


// import "./App.css";
// // import sideBack from "./img/sideBack.jpg";
// // import cart from "./img/cart2.jpg";
// // import sideBack from "./Components/Battelle/img/sideBack.jpg";
// // import cart from "./Components/Battelle/img/cart2.jpg";
// import sideBack from "./Components/Battelle/img/sideBack.jpg";
// import cart from "./Components/Battelle/img/cart2.jpg";

// function App() {
//   const CartNumber = 1214831012832021;
//   const CartNumberSourece = 2222831012832021;

//   const StringCartNumber = CartNumber.toString();
//   const StringCartNumberSourece = CartNumberSourece.toString();

//   const CartNumber_Lenght = CartNumber.toString().length;
//   const CartNumberSourece_Lenght = CartNumberSourece.toString().length;

//   let ShowNumber = StringCartNumber.substr(0, CartNumber_Lenght - 6);
//   let ShowNumberSourece = StringCartNumberSourece.substr(
//     0,
//     CartNumberSourece_Lenght - 6
//   );

//   let Receipt = ShowNumber + "******";
//   let ReceiptSourece = ShowNumberSourece + "******";
//   return (
//     <div className="App">
//       <div className="container">
//         <div
//           className="frame"
//           style={{ backgroundColor: "white", width: "400px", height: "480px" }}
//         >
//           <div className="logo"></div>
//           <div
//             style={{
//               flexDirection: "row",
//               display: "flex",
//               justifyContent: "space-between",
//             }}
//           >
//             <div className="Bank">بانک آینده</div>
//           </div>

//           <div className="Receipt">{ReceiptSourece}: کارت مبدا</div>
//           <div className="ReceipSource">{Receipt}:کارت مقصد</div>

//           <div className="barcode"></div>
//         </div>
//         <div
//           classname="image"
//           style={{
//             backgroundImage: `url(${sideBack})`,
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//             width: "400px",
//             height: "500px",
//           }}
//         ></div>
//       </div>
//     </div>
//   );
// }

// export default App;

////////////////////////////////////////////////
// import React, { useState } from "react";
// import { productContexttwo } from "./Components/Example/productContexttwo";

// function App() {
//   let { word, setWord } = React.useContext(productContexttwo);

//   return (
//     <div style={{ backgroundColor: "red", width: 100, height: 100 }}>
//       <h1>{word}</h1>
//     </div>
//   );
// }

// export default App;

////////////////////////////////////////////////////////
