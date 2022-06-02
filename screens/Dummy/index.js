import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { LogBox, ImageBackground } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
import { LinearGradient } from 'expo-linear-gradient';
import { Transactions } from "./Transactions"
import {Card} from "../Card"
import { MaterialIcons } from '@expo/vector-icons';

export default function Dummy() {
    return (
        <View style={styles.container}>
        <Card />
        <Text style={{color: "grey", marginTop: "10%"}}>View wallets/users document transacted with below.</Text>
        

        <Transactions />
        <Transactions />
        <Transactions />
          
      <View style={styles.card2}>
  
          </View>
        <StatusBar style="auto" />
        </View>
    );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    borderRadius: "30px",
  },
  linearGradient: {
    height: "20%",
    width: "80%",
    borderRadius: "30px"
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: "100%",
    padding: '5%',
    marginTop: 50,
  },
  headerText: {
    fontSize: 24,
    marginRight: 100
  },
});


