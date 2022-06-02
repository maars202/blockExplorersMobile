import { StatusBar } from 'expo-status-bar';
import React, {useState, useRef} from 'react'
import {View, Text, RecyclerViewBackedScrollViewBase, 
    TextInput, Picker, TouchableOpacity, TextField,
    Button, Image, Scrollable, Pressable, ScrollView,
    KeyboardAvoidingView,Platform, ImageBackground, StyleSheet,ActivityIndicator} from 'react-native'
// import {} from 'react-native';
// import styles from './styles'
import { SimpleLineIcons } from '@expo/vector-icons';
import TesseractOcr, { LANG_ENGLISH, LEVEL_WORD } from 'react-native-tesseract-ocr';

// icons:
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import * as ImagePicker from 'expo-image-picker'
import { Feather } from '@expo/vector-icons';
import logo from "../../assets/9299.png"
import logo2 from "../../assets/Logo.png"
import { LinearGradient } from 'expo-linear-gradient';
import {v4 as uuid} from "uuid"

export default function UploadPage({ navigation }) {

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


    const pickImage = async () => {
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


        // const vision = require('@google-cloud/vision');
        // // Creates a client
        // const client = new vision.ImageAnnotatorClient();

        // /**
        //  * TODO(developer): Uncomment the following line before running the sample.
        //  */
        // // const fileName = 'Local image file, e.g. /path/to/image.png';

        // // Performs text detection on the local file
        // const [result2] = await client.textDetection(result.uri);
        // const detections = result2.textAnnotations;
        // console.log('Text:');
        // detections.forEach(text => console.log(text));

        // OCR PART:
        // console.log("uri is: ", result.uri)
        // // const tessOptions = { level: LEVEL_WORD };
        // const tessOptions = { level: LEVEL_WORD };
        // TesseractOcr.recognizeTokens(result.uri, LANG_ENGLISH, tessOptions);


        // const tesseract = require("node-tesseract-ocr")
        // const config = {
        //   lang: "eng",
        //   oem: 1,
        //   psm: 3,
        // }
        
        // tesseract
        //   .recognize(result.uri, config)
        //   .then((text) => {
        //     console.log("Result:", text)
        //   })
        //   .catch((error) => {
        //     console.log(error.message)
        //   })

        navigation.navigate('DocumentDetails')
        
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
        navigation.navigate('DocumentDetails')
    }


    
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 36, fontFamily: 'Poppins'}}>Create Document</Text>
            <Text style={{marginTop: 10, color: "grey"}}>Select a method to start creating your document.</Text>
            
            <StatusBar style="auto" />

            <Pressable style={styles.box_image} onPress={pickImage}>
            <SimpleLineIcons name="camera" size={50} color="black" />
                <Text style={styles.header_text}>Scan Document</Text>
                {/* { formState.image.length > 0 ? <Image source={{ uri: formState.image }} style={{ width: 240, height: 150 }} /> : <Text>No Images Selected</Text>} */}
            </Pressable>

            <Pressable style={styles.box_image} onPress={fillDocument}>
                <MaterialCommunityIcons name="file-document-edit-outline" size={50} color="black" />
                <Text style={styles.header_text}>Fill Document</Text>
            </Pressable>
        </View>
    );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#D9D9D9",
    alignItems: 'center',
    justifyContent: 'center',
  },
  box_image: {
    width: 315,
    height: 200,
    marginTop: 30,
    marginHorizontal: 20,
    backgroundColor:"#F8F8F8",
    borderRadius: 32,
    justifyContent:"center",
    alignItems:"center"
    },

  header_text:{
    fontSize: 24,
    marginTop: "10%"
    }
});