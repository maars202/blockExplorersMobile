import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import DestinationSearchScreen from "../screens/DestinationSearch";
// import GuestsScreen from "../screens/Guests";
//  import HomeScreen from "../screens/HomeScreen";
import HomeTabNavigator from "./HomeTabNavigator";
// import ExploreNavigator from "./ExploreNavigator";
// import PostScreen from "../screens/PostScreen";
// import DetailedPost from "../screens/D";
// import SearchPage from "../screens/DestinationSearch"
// import GuestsScreen from "../screens/Guests"
// import AddLocationScreen from "../screens/AddLocation"
// import UploadImagesScreen from "../screens/UploadImage"
// import PreviewImage from "../screens/PreviewImage"
import Dummy from "../screens/Dummy"
import ViewSingle from "../screens/ViewSingle"
import { StyleSheet, Text, View } from 'react-native';
import Homepage from "../screens/Homepage";
import DocumentDetails from "../screens/DocumentDetails";
import Documents from "../screens/Documents";
import ErrorDocumentDetails from "../screens/ErrorDocumentDetails";
import LoginPage from "../screens/LoginPage";
import UploadPage from "../screens/UploadPage";
import UploadPageTT from "../screens/UploadPageTT";
import VerifiedDocTT from "../screens/VerifiedDocTT";

const Stack = createStackNavigator();

const Router = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name={"Home"}
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />


      <Stack.Screen
          name={"DocumentDetails"}
          component={DocumentDetails}
          options={{
            title: ""
          }}
        />
        <Stack.Screen
          name={"Documents"}
          component={Documents}
          options={{
            title: ""
          }}
        />


        <Stack.Screen
          name={"Dummy"}
          component={Dummy}
          options={{
            title: ""
          }}  
          />   

          <Stack.Screen
          name={"ErrorDocumentDetails"}
          component={ErrorDocumentDetails}
          options={{
            title: ""
          }}  
          />

          <Stack.Screen
          name={"HomePage"}
          component={Homepage}
          options={{
            title: ""
          }}  
          />       

        <Stack.Screen
          name={"LoginPage"}
          component={LoginPage}
          options={{
            title: ""
          }}  
          /> 

        <Stack.Screen
          name={"UploadPage"}
          component={UploadPage}
          options={{
            title: ""
          }}  
          />

        <Stack.Screen
          name={"UploadPageTT"}
          component={UploadPageTT}
          options={{
            title: ""
          }}  
          />

        <Stack.Screen
          name={"VerifiedDocTT"}
          component={VerifiedDocTT}
          options={{
            title: ""
          }}  
          />

    <Stack.Screen
          name={"ViewSingle"}
          component={ViewSingle}
          options={{
            title: ""
          }}
        />

        

        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;