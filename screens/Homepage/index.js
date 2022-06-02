import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View, Text, RecyclerViewBackedScrollViewBase, 
  TextInput, Picker, TouchableOpacity, TextField,
  Button, Image, Scrollable, Pressable, ScrollView,
  KeyboardAvoidingView,Platform, ImageBackground, 
  StyleSheet, ActivityIndicator} from 'react-native'
import Constants from 'expo-constants';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
import {Card} from "../Card"
TransactionsHome
import {TransactionsHome} from "../TransactionsHome"
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function Homepage({navigation}) {

    return (
        <View style={styles.container}>

        <View style={styles.header}>
            <Octicons name="feed-person" size={24} color="grey" onPress={() => {
                    console.log("going to profile now??")
                    // navigation.navigate('HomePage')
                    //  navigation.push('HomePage')
                }}/>
                <Text style={styles.headerText}>John Doe</Text>
                <Octicons name="bell-fill" size={24} color="grey" />
          </View>

        <View style={styles.header2}>
       
                <Text style={styles.headerText2}>Owned Documents</Text>
                <Text style={styles.headerText2} onPress={() => {
                    console.log("going to Documents page now")
                    navigation.navigate('Documents')
                    //  navigation.push('HomePage')
                }}>View All</Text>
          </View>
              
        <Pressable onPress={() => {
                      console.log("Going to viewing single document")
                      navigation.navigate('Dummy')
                      //  navigation.push('HomePage')
                  }} style={{height:200}}>
          <Card />

          </Pressable>    

          <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginVertical: "5%", width: "70%"}}>
              <View style={{color: "grey"}}>
                <View style={styles.circleStyle}>
                    <Ionicons name="ios-send-sharp" size={25} color="#667080" />
                </View>
                <Text style={{color: "grey"}}>Transfer</Text>
              </View>

              <View style={{}}>
                <View style={styles.circleStyle}>
                    <Ionicons name="download" size={25} color="#667080" />
                </View>
                <Text style={{color: "grey"}}>Request</Text>
              </View>
              <View style={{}}>
                <View style={styles.circleStyle}>
                    <MaterialCommunityIcons name="clock" size={25} color="#667080" />
                </View>
                <Text style={{color: "grey"}}>History</Text>
              </View>

              <StatusBar style="auto" />
          </View>
          

          <View style={styles.header2}>
       
                <Text style={styles.headerText2}>Transactions</Text>
                <Text style={styles.headerText2}>View All</Text>
          </View>
          
        
        <View style={styles.innerContainers}>
        <TransactionsHome 
        value={"Received"} 
        date={"29/01/18"} 
        text1={"Recieved ownership for BOL AQSIQ170923130 for 1667 CARTONS OF RED WINE."}
        text2={"Transaction address: 0xb794f5ea0ba39494ce839613fffba74279579268"}  
        />
        <TransactionsHome 
        value={"Transferred"} 
        date={"27/01/18"} 
        text1={"Transferred ownership for BOL AQSIQ171237123 for 1337 CARTONS OF MILK."}
        text2={"Transaction address: 0xb794f5ea0ba39494ce839613fffba74279579268"}
        />
        </View>
        </View>

        
    );
    }

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainers: {
    width: "80%",
    height: "20%",
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  setTop: {
    width: 66,
    height: 58,
  },
  circleStyle: {
    width: 48,
    height: 48,
    backgroundColor: "white",
    borderRadius: "100", 
    padding:12, 
    borderWidth: 1, 
    borderColor: "grey"
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: "90%",
    padding: '5%',
    marginTop: 10,
  },

  header2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: "90%",
  },


  headerText: {
    fontSize: 24,
    marginRight: 100
  },

  headerText2: {
    fontSize: 16,
    fontWeight: "bold"
  },
});






