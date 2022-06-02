import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { DatePickerAndroid, StyleSheet, Text, View } from 'react-native';
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
// import { withSSRContext } from 'aws-amplify';
import { Feather } from '@expo/vector-icons';

export default function VerifiedDocTT({ navigation }) {
    // BOL Number, Item Description, Date of Discharge, Country of Final Destination, Name & Address of Shipping Agent/Freight Forwarder
    const initial_state = {"name": "",
    "bolNumber": "",
    "itemDescription": "",
    "dateOfDischarge": "",
    "countryOfFinalDestination": "",
    "nameAndAddofShippingAgent": "",
    "description": "",
    "image": "",
    "tag": "",
    "owner": "maars505",
    "creator":"maars505",
    "likes": 0,
    "type": "nft"
    }

    const verifyDoc = () => {
        console.log("verify doc")
    }


    // const [input, setInput]= useState(initial_state)
    const [formState, setFormState] = useState(initial_state)
    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);
    const createDocument = () => {
        console.log("creating document here")
        navigation.push("UploadPage")
        // navigation.reset({
        //     index: 0,
        //     routes: [{ name: 'UploadPage' }],
        //   });
    }
    function setInput(key, value) {
        setFormState({ ...formState, [key]: value })
      }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.box_image}>
                <Feather name="check-square" size={50} color="#00A807" />
                <Text style={{textAlign: "center"}}>Your document has been verified.</Text>
                <Text style={{textAlign: "center"}}>View the document details below.</Text>

            </View>



            <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                <View style={styles.Forminputs}>
                    <Text style={styles.information}>BOL Number</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={val => setInput('bolNumber', val)}
                        value={formState.bolNumber}
                        placeholder="AQSIQ170923130"
                        />
{/* BOL Number, Item Description, Date of Discharge, Country of Final Destination, Name & Address of Shipping Agent/Freight Forwarder */}
                    <Text style={styles.information}>Item Description</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={val => setInput('itemDescription', val)}
                        value={formState.itemDescription}
                        placeholder="1667 CARTONS OF RED WINE"
                        />

                    <Text style={styles.information}>Date of Discharge</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={val => setInput('dateOfDischarge', val)}
                        value={formState.dateOfDischarge}
                        placeholder="2018-01-26"
                        />

                    <Text style={styles.information}>Country of Final Destination</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={val => setInput('countryOfFinalDestination', val)}
                        value={formState.countryOfFinalDestination}
                        placeholder="China"
                        />

                    <Text style={styles.information}>Name & Address of Shipping Agent/Freight Forwarder</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={val => setInput('nameAndAddofShippingAgent', val)}
                        value={formState.nameAndAddofShippingAgent}
                        placeholder="SG FREIGHT

                        101 ORCHARD ROAD
                        #13-37
                        
                        SINGAPORE
                        S642131"
                        />
                </View>

                <Pressable
        style={styles.button}
        onPress={verifyDoc}
      >
        <Text style={{color: "#FFFFFF",}}>Request Ownership</Text>
      </Pressable>
            </KeyboardAvoidingView>


        <Text>earsOpen up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        {/* </View> */}
        </ScrollView>
    );
    }

const styles = StyleSheet.create({
    container: {
    flex:1, 
    flexDirection:"column",

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
        },
    box_image: {
        width: "90%",
        height: 200,
        marginTop: 30,
        marginHorizontal: 20,
        backgroundColor:"#F8F8F8",
        borderRadius: 32,
        justifyContent:"center",
        alignItems:"center"
    },
    input: {
        height: 56,
        width: 330,
        marginLeft:22,
        margin: 13,
        borderWidth: 1,
        padding: 10,
        borderRadius:8
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
    button: {
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: "70%",
        position: 'absolute',
        bottom: "10%",
        right: "15%",
        height: 70,
        backgroundColor: '#667080',
        borderRadius: 30,
        height: 50,
        color: "#FFFFFF",
        },
    });
