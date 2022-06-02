import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dummy from "../screens/Dummy"
// new icons for expo:
// import Ionicons from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
// import WalletScreen from '../screens/Wallet/index2';
import { StyleSheet, Text, View } from 'react-native';
import ViewSingle from '../screens/ViewSingle';
import Homepage from '../screens/Homepage';
import UploadPage from '../screens/UploadPage';
import UploadPageTT from '../screens/UploadPageTT';
// import DocumentDetails from "../screens/DocumentDetails"
import Documents from "../screens/Documents"
import HomePage from "../screens/Homepage"
const Tab = createBottomTabNavigator();
import DocumentDetails from "../screens/DocumentDetails";
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
const HomeTabNavigator = (props) => {
  // {
  //   "tabBarStyle": [
  //     {
  //       "display": "flex"
  //     },
  //     null
  //   ]
  // }
  return (
    <Tab.Navigator
    screenOptions={{
    headerShown: false,
    activeTintColor: '#f15454',
  }}

      >
      <Tab.Screen
        name={'Explore'}
        // ExploreNavigator
        component={HomePage}
        // options={{
        //   tabBarIcon: ({color}) => (
        //     <Fontisto name="search" size={25} color={color} />
        //   ),
        // }}
        options= {{
          tabBarIcon: ({color}) => (
            <Ionicons name="md-home" size={24} color="black" />
),
        }}
      />
      <Tab.Screen
        name={'Upload'}
        component={UploadPage}
        options={{
          tabBarIcon: ({color}) => (
        //     <FontAwesome name="heart-o" size={25} color={color} />
        // <MaterialIcons name="favorite-border" size={24} color="black" />
        <MaterialCommunityIcons name="file-document-edit-outline" size={24} color="black" />
          ),
        
        }}
      />
      <Tab.Screen
        name={'profile'}
        component={UploadPageTT}
        options={{
          tabBarIcon: ({color}) => (
        //     <EvilIcons name="user" size={25} color={color} />
        // <FontAwesome5 name="user-circle" size={24} color="black" />
        <MaterialCommunityIcons name="key-outline" size={24} color="black" />
          ),
        }}
      />

      <Tab.Screen
        name={'Setting'}
        component={Dummy}
        options={{
          tabBarIcon: ({color}) => (
        //     <EvilIcons name="user" size={25} color={color} />
        // <Entypo name="wallet" size={24} color="black" />
        <Feather name="settings" size={24} color="black" />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;


// <Tab.Screen
//         name={'Airbnb'}
//         component={() => <UploadImage />}
//         options={{
//           tabBarIcon: ({color}) => (
//         //     <FontAwesome5 name="airbnb" size={25} color={color} />
//         <FontAwesome5 name="airbnb" size={24} color="black" />
//           ),
//         }}
//       />
//       {/* , {latitude: 28, longitude: -16.5} */}
//       <Tab.Screen
//         name={'Messages'}
//         component={UploadImage}
//         options={{
//           tabBarIcon: ({color}) => (
//         //     <Feather name="message-square" size={25} color={color} />
//         <Feather name="message-square" size={24} color="black" />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name={'profile'}
//         component={UploadImage}
//         options={{
//           tabBarIcon: ({color}) => (
//         //     <EvilIcons name="user" size={25} color={color} />
//         <FontAwesome5 name="user-circle" size={24} color="black" />
//           ),
//         }}
//       />