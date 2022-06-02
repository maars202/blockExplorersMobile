// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


// import * as React from 'react';
// import { StyleSheet, Text, View, Dimensions } from 'react-native';
// import MapView from 'react-native-maps';
import Constants from 'expo-constants';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

// You can import from local files
// import AssetExample from './screens/AssetExample';

// or any pure javascript modules available in npm
// import { Card } from 'react-native-paper';
// import { StatusBar, } from 'react-native';
import Router from './navigation/Router';


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


function App() {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.paragraph}>
    //     ChangzXLKCLfkjze code in the editor and watch it change on your phone! Save to get a shareable url.
    //   </Text>
    //   <Card>
    //     <AssetExample />
    //   </Card>
    // </View>
    // <View style={styles.container}>
    //   <GuestScreen />
    // </View>

    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
}
// <Card>
//         <AssetExample />
//       </Card>
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;