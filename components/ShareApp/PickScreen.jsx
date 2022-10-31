import React from 'react';
import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, Platform,TextInput,TouchableOpacity,Alert  } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import * as Sharing from 'expo-sharing';
import * as ImageManipulator from "expo-image-manipulator";

const PickScreen = () => {
  const [selectedImage, setSelectedImage] = React.useState(null);

  //Abre el selector de imagenes          
  let openImagePickerAsync = async () => {   
    //espera al picker 
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
    //validacion de cancelacion
    if (pickerResult.cancelled === true) {
        console.log("Cancelado")
      return;
    }
    //guarda la uri de la imagen
    setSelectedImage({ localUri: pickerResult.uri });
    console.log(selectedImage)
    }

  //abre el modulo de compartir
  let openShareDialogAsync = async () => {
    //espera al modulo
    const imageTmp = await ImageManipulator.manipulateAsync(selectedImage.localUri);
    //ejecuta el parametro
    await Sharing.shareAsync(imageTmp.uri);
  };
    //cuando la imagen seleccionada sea !null desplegara esta pantalla
    if(selectedImage !== null)
    {
        console.log("Aceptado")
        return(
          <View style={styles.container2}>
            <Text style={styles.loginText2}>Imagen seleccionada</Text>
            <Image
              source={{ uri: selectedImage.localUri }}
              style={styles.imagen}
            />
            <TouchableOpacity style={styles.loginBtn2} onPress={openShareDialogAsync}>
              <Text style={styles.loginText}>Compartir.</Text>
            </TouchableOpacity> 
          </View>
        )
    }

  return (
    <View style={styles.container}>
        <Image style={styles.image} source={require("../../assets/imagenes.png")} />
        <Text style={styles.instructions}>Comparte una foto con tus amigos</Text>
      <TouchableOpacity style={styles.loginBtn} onPress={openImagePickerAsync}>
        <Text>Elegir una imagen</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#581845",
      height:"100%",
      alignItems: "center",
      justifyContent: "center",
      paddingTop:30,
      paddingBottom:286,
    },
    container2: {
      flex: 1,
      backgroundColor: "#581845",
      height:"100%",
      alignItems: "center",
      justifyContent: "center",
      paddingTop:30,
      paddingBottom:210,
    },
   
    image: {
      marginBottom: 40,
      width:200,
      height:200
    },
    imagen: {
      marginBottom: 30,
      width:300,
      height:300,
      resizeMode: "contain"
    },
    loginText2:{
      color:'white',
      fontSize:20,
      marginBottom:15
    },
    loginBtn: {
      width: 210,
      borderRadius: 10,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#FFC300",
    },
    loginBtn2 : {
      width: 210,
      borderRadius: 10,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#49DC99",
    },
    loginText:{
        color:'white'
    },
    loginBtn3 : {
      width: 210,
      borderRadius: 10,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#8F0000",
      
    },
    instructions:{
      fontSize:20,
      color:'white',
      marginBottom: 30
    },
    thumbnail: {
        width: "60%",
        height: "60%",
        resizeMode: "contain"}
  });
export default PickScreen