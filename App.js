import React, { useRef } from 'react';
import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View,TextInput,TouchableOpacity,Alert,Animated  } from 'react-native';
import Cuerpo from './components/Cuerpo';

export default function App() {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const fadeAnim2 = useRef(new Animated.Value(0)).current;
    const [iniciando, setIniciando] = useState(false);
    const [email, setEmail] = useState("");
    const [logear, setLogear] = React.useState(false);
    const [password, setPassword] = useState("");
    const correo = "Admin";
    const contraseña = "1234";

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver:true
    }).start();
    Animated.timing(fadeAnim2, {
      toValue: 1,
      duration: 4000,
      useNativeDriver:true
    }).start();

    const emailSend = () => {
        if(email.length === 0 || password.length === 0){
          alert("Agregue las credenciales validas")
        }else{
          if(email != correo || password != contraseña){
            //alert("Correo o contraseña incorrecta || Intentelo de nuevo")
            alertaPW()
          }
          else{
            setLogear(true)
          }
        }
        console.log(email)
        setEmail("")
        console.log(password)
        setPassword("")
        
    }

    const fadeOut = () => {
      // Will change fadeAnim value to 0 in 3 seconds
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 3000,
        useNativeDriver:true
      }).start();

      Animated.timing(fadeAnim2, {
        toValue: 0,
        duration: 2000,
        useNativeDriver:true
      }).start();
      setTimeout(emailSend,2900)
      
    };

    const fadeOutError = () => {
      // Will change fadeAnim value to 0 in 3 seconds
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver:true
      }).start();
      Animated.timing(fadeAnim2, {
        toValue: 1,
        duration: 1000,
        useNativeDriver:true
      }).start();
    };

    const alertaPW = () =>{
      fadeOutError();
    Alert.alert(
      "Ups..",
      "Correo o contraseñas incorrectas",
      [
        { text: "Entendido"}
      ]
    )
    
  }
      
      if(logear !== false){
        console.log(logear)
        return(
            <Cuerpo/>
        )
      }

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.title,
                    {
                      // Bind opacity to animated value
                      opacity: fadeAnim
                    }
                    ]}>{iniciando? "Iniciando sesion... Espere" : "Inicio de sesion"}</Animated.Text>
      
      <Animated.View style={[styles.fadingContainer,
                    {
                      // Bind opacity to animated value
                      opacity: fadeAnim2
                    }
                    ]}>
        <Image style={styles.image} source={require("./assets/navegador.png")} />
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Correo o Nombre de usuario"
          placeholderTextColor="white"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="white"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot_button}
        onPress={() => {
          alert("Nimodos para que la olvidas jj || Admin - 1234")
        }}>Olvidaste tu contraseña? :(</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn} onPress={() => {
          fadeOut();
        }}>
        <Text style={styles.loginText}>Iniciar sesion:)</Text>
      </TouchableOpacity>
      </Animated.View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#34054F",
      alignItems: "center",
      justifyContent: "center",
      },
      fadingContainer:{
        padding: 1,
        alignItems: "center",
        justifyContent: "center",
      },
  title:{
      fontSize:25,
      color:"#fff",
      fontWeight:"bold",

      },
  image: {
    marginBottom: 40,
    width:200,
    height:200
    },
  inputView: {
    backgroundColor: "#2C4AC1",
    borderRadius: 10,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
 
  TextInput: {
    height: 50,
    width:210,
    flex: 1,
    color:'white',
    padding: 10,
    marginLeft: 20,
    alignItems: "center",
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
    color:'white'
  },
 
  loginBtn: {
    width: 210,
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#E013D1",
  },
  loginText:{
    color:"white"
  }
  
});


