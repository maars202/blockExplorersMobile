import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { LogBox } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications


export function Transactions(props) {

    return (
        <View  style={{display: 'flex', flexDirection: 'row', padding: "5%", borderColor: "#D9D9D9", borderWidth: "2pt", margin: "5%", borderRadius: "20px"}}>
        {/* marginLeft: "10%", */}
            <View style={{width: "20%"}}><Ionicons name="person-circle" size={40} color="grey" /></View>
            <View style={{width: "60%"}}>
              <Text style={{fontSize: 15, fontWeight: 'bold', marginBottom: 10}}>John Doe</Text>
              <Text>0xb794f5ea0ba39494ce8</Text>
                <Text>39613fffba74279579268</Text>
            </View>
            <View style={{width: "20%", justifyContent: "right", alignItems: "right"}}>
              <Text style={{marginBottom: 5}}>29/01</Text>
              <MaterialCommunityIcons name="download-circle-outline" size={24} color="green" style={{marginLeft: 20}}/>
            </View>
        </View>

    );
    }
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '0px',
      gap: '16px',
      width: '390px',
      height: '239.68px',
    },
    card2: {
      position: 'absolute',
      left: '0%',
      right: '0%',
      top: '0%',
      bottom: '0%',
      height: '10%',
      background: '#979797',
      borderRadius: "30px",
    },
    linearGradient: {
      height: "20%",
      width: "80%",
      borderRadius: "30px"
    }
  });
  
  
  
  
  