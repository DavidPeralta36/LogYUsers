import React from 'react';
import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View,TextInput,TouchableOpacity,Alert  } from 'react-native';
import Cuerpo from './components/Cuerpo';

export default function App() {
    const [email, setEmail] = useState("");
    const [logear, setLogear] = React.useState(null);
    const [password, setPassword] = useState("");
    const correo = "Admin";
    const contraseña = "1234";


    const emailSend = () => {
      setLogear(true)
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

    const alertaPW = () =>
    Alert.alert(
      "Ups..",
      "Correo o contraseñas incorrectas",
      [
        { text: "Entendido"}
      ]
    );
      
      if(logear !== null){
        console.log(logear)
        return(
            <Cuerpo/>
        )
      }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio de sesion</Text>
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
          emailSend();
        }}>
        <Text style={styles.loginText}>Iniciar sesion :)</Text>
      </TouchableOpacity>
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
  title:{
      fontSize:30,
      color:"#fff",
      fontWeight:"bold"
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


