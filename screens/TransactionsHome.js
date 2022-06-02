// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import Constants from 'expo-constants';
// import { LogBox } from 'react-native';
// LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
// LogBox.ignoreAllLogs();//Ignore all log notifications
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


// import * as React from 'react';
// import { StyleSheet, Text, View, Dimensions } from 'react-native';
// import MapView from 'react-native-maps';
import Constants from 'expo-constants';
import { LogBox } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

export function TransactionsHome(props) {
    const { value, date, text1, text2} = props;
    console.log(props)
    // const value = "Received Document"
    return (
        <View  style={{display: 'flex', flexDirection: 'column', 
        borderColor: "#D9D9D9",border: "1px solid grey", borderRadius: 15, 
        padding: 10, borderWidth: 1, marginVertical: 5, backgroundColor: 'white'}}>
        {/* marginLeft: "10%", */}
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: "space-between", color: "grey"}}>
                {value == "Received" ? (<Text style={styles.received}>{value} Document</Text>) : 
                            (<Text style={styles.transferred}>Transferred Document</Text>) }
                <Text style={styles.date}>{date}</Text>
            </View>

            <View >
                <Text style={{marginBottom: 10,}}>{text1}</Text>
                <Text>{text2}</Text>
            </View>

            <View style={{}}>
                <Text></Text>
                <Text></Text>
            </View>

           
        </View>

    );
    }


    const styles = StyleSheet.create({
        date: {
            fontSize: 18,
            color: "#667080",
        },
        transferred: {
            fontSize: 18,
            color: "#E80000",
            marginBottom: 10
        }, 
        received: {
            fontSize: 18,
            color: "#00A807",
            marginBottom: 10
        }, 
        container: {
          flex: 1,
          backgroundColor: '##F5F5F5',
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
      
      
      
      
      





