import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
import { LinearGradient } from 'expo-linear-gradient';
export function Card() {
    return (
        <View style={styles.container}>
        <LinearGradient
            colors={['#C3C6C9', '#667080', '#C3C6C9' ]}
            style={styles.linearGradient}
            start={{ x: 0.7, y: 0 }}
          >
            <Text style={styles.itemDesc}>ITEM DESC</Text>
            <Text style={styles.itemDesc2}>1667 CARTONS OF RED WINE</Text>
            <Text style={styles.itemDesc3}>BOL NO.</Text>
            <Text style={styles.itemDesc4}>AQSIQ170923130</Text>
            <Text style={styles.itemDesc5}>26/01</Text>
            <View style={styles.circle} />

        </LinearGradient>
        <StatusBar style="auto" />
        </View>
    );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemDesc2: {
    position: "absolute",
    left: "9.52%",
    top: "20%",
    color: "white",
    fontSize: 18,
    fontWeight: 'bold',
    width: "70%"
  },
  itemDesc3: {
    position: "absolute",
    left: "9.52%",
    top: "60%",
    color: "white",
    fontSize: 15,
  },
  itemDesc4: {
    position: "absolute",
    left: "9.52%",
    top: "75%",
    color: "white",
    fontSize: 17,
  },
  itemDesc5: {
    position: "absolute",
    left: "80.48%",
    top: "75%",
    color: "white",
    fontSize: 17,
  },
  circle: {
    top: "13%",
    left: "80.48%",
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: '#F79E1B',


  },
    linearGradient: {
        width: 370,
        height: 180.99,
        borderRadius: "30px",
        paddingHorizontal: 10,
        },

    itemDesc: {
        position: "absolute",
        height: 17.1,
        left: "9.52%",
        right: "50.48%",
        top: "10%",
        color: "white"

    },
    itemDescText: {
        position: "absolute",
        height: 17.1,
        left: "9.52%",
        right: "50.48%",
        top: "10%",
        color: "white"

    }
});