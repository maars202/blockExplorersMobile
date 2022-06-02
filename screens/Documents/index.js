import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
import { FontAwesome5 } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import {View, Text, RecyclerViewBackedScrollViewBase, 
    TextInput, Picker, TouchableOpacity, TextField,
    Button, Image, Scrollable, Pressable, ScrollView,
    KeyboardAvoidingView,Platform, ImageBackground, 
    StyleSheet, ActivityIndicator} from 'react-native'
    import React, {useState, useRef} from 'react'
    import { MaterialIcons } from '@expo/vector-icons';
import {Card} from "../Card"
export default function Documents({ navigation }) {
    return (
        <View style={styles.container}>
            
            <View style={styles.centerText}>
                <Text style={{textAlign: "center", marginBottom: 10}}>View documents you currently own or transacted with below. </Text>
                <Text style={{textAlign: "center"}}>Click on the document to view more.</Text>
            </View>

            <Card />
            <Card />
            <Card />
        <StatusBar style="auto" />
        </View>
    );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: "100%",
    // margin: "10%",
    padding: '5%',
    // marginTop: 0,
    // position: "absolute",
    // backgroundColor: 'pink',
    marginTop: 50,
    // gap: '82px',
  },
  headerText: {
      
    // fontFamily: 'Poppins',
    // fontStyle: normal,
    // fontWeight: 500,
    fontSize: 24,
    // lineHeight: "36px",
    // position: "absolute",
    marginRight: 100
  },
  information: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 20,
    display: "flex",
    alignItems: "center",
    color: "#333333",
    marginLeft: 20
},

    centerText: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "90%",
        // margin: "10%",
        padding: '5%',
        // marginTop: 0,
        // position: "absolute",
        // backgroundColor: 'pink',
        // marginTop: 20,
        // gap: '82px',
        marginHorizontal: 40,
        textAlign: "center"
    }
});


