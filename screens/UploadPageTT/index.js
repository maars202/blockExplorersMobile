import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';
import React, {useState, useRef} from 'react'
import {View, Text, RecyclerViewBackedScrollViewBase, 
    TextInput, Picker, TouchableOpacity, TextField,
    Button, Image, Scrollable, Pressable, ScrollView,
    KeyboardAvoidingView,Platform, ImageBackground, StyleSheet,ActivityIndicator} from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons';

// icons:
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import * as ImagePicker from 'expo-image-picker'
import { Feather } from '@expo/vector-icons';
import logo from "../../assets/9299.png"
import logo2 from "../../assets/Logo.png"
import { LinearGradient } from 'expo-linear-gradient';
import {v4 as uuid} from "uuid"


export default function UploadPageTT({ navigation }) {

    const initial_state = {"name": "",
                        "description": "",
                        "image": "",
                        "tag": "",
                        "owner": "maars505",
                        "creator":"maars505",
                        "likes": 0,
                        "type": "nft"
                        }
  // const [input, setInput]= useState(initial_state)
  const [formState, setFormState] = useState(initial_state)
  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }


    const verifyTT = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
         console.log(result);
    
        if (!result.cancelled) {
          setInput("image", result.uri);
            // console.log("result. uri: ", result.uri)

        }
        console.log("pickImage")
        navigation.navigate('VerifiedDocTT')
        
    }

    const fillDocument = async () => {
        console.log("leads to 'Document Details page")
        // let result = await ImagePicker.launchImageLibraryAsync({
        //   mediaTypes: ImagePicker.MediaTypeOptions.All,
        //   allowsEditing: true,
        //   aspect: [4, 3],
        //   quality: 1,
        // });
        //  console.log(result);
    
        // if (!result.cancelled) {
        //   setInput("image", result.uri);
        //     // console.log("result. uri: ", result.uri)
        // }
        navigation.navigate('VerifiedDocTT')
    }


    
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 36, fontFamily: 'Poppins'}}>Verify Document</Text>
            <Text style={{marginTop: 10, color: "grey"}}>Upload your document to verify its validity.</Text>
            
            <StatusBar style="auto" />

            <Pressable style={styles.box_image} onPress={verifyTT}>
            {/* <SimpleLineIcons name="camera" size={50} color="black" /> */}
              <MaterialIcons name="upload-file" size={50} color="black" />
                <Text style={styles.header_text}>Upload .tt File</Text>
                {/* { formState.image.length > 0 ? <Image source={{ uri: formState.image }} style={{ width: 240, height: 150 }} /> : <Text>No Images Selected</Text>} */}
            </Pressable>


            <Pressable
        style={styles.button}
        onPress={verifyTT}
      >
        <Text style={{color: "#FFFFFF",}}>Upload</Text>
      </Pressable>
          
        </View>
    );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white",
    alignItems: 'center',
    justifyContent: 'center',
  },
  box_image: {
    width: "90%",
    height: 400,
    marginTop: 30,
    marginHorizontal: 20,
    backgroundColor:"#EEF1F4",
    borderRadius: 32,
    justifyContent:"center",
    alignItems:"center"
    },

  header_text:{
    fontSize: 24,
    marginTop: "10%"
    },
  button: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: "70%",
    position: 'absolute',
    bottom: "5%",
    right: "15%",
    height: 70,
    backgroundColor: '#667080',
    borderRadius: 30,
    height: 50,
    color: "#FFFFFF",
    },
});