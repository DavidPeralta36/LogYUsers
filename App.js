import React, { useRef , useEffect} from 'react';
import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View,TextInput,TouchableOpacity,Alert,Animated  } from 'react-native';
import Cuerpo from './components/Cuerpo';
import { Button } from '@rneui/base';
import AwesomeAlert from 'react-native-awesome-alerts';

export default function App() {
//#region declaraciones
    //declaracion de animaciones
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const fadeAnim2 = useRef(new Animated.Value(0)).current;
    //estado para comprobar el texto de iniciando sesion
    const [iniciando, setIniciando] = useState(false);
    //estado del correo/contraseña
    const [email, setEmail] = useState("");
    //estado usado para saber si desplegar el cuerpo de la app
    const [logear, setLogear] = React.useState(false);
    //estado de la contraseña
    const [password, setPassword] = useState("");
    //declaracion del usuario en memoria
    const correo = "Admin";
    const contraseña = "1234";
//#endregion

  //#region alerta
  //alerta contraseña incorrecta
  const [oculto, setOculto] = useState(true)
  const showAlert = () => {
    setOculto(false)
  };
  const hideAlert = () => {
    setOculto(true)
  };
  //alerta credenciales vacias
  const [oculto2, setOculto2] = useState(true)
  const showAlert2 = () => {
    setOculto2(false)
  };
  const hideAlert2 = () => {
    setOculto2(true)
  };
  //alerta de forgot password
  const [oculto3, setOculto3] = useState(true)
  const showAlert3 = () => {
    setOculto3(false)
  };
  const hideAlert3 = () => {
    setOculto3(true)
  };

//#endregion

    //inicia la animacion
    useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver:true
      }).start();
      Animated.timing(fadeAnim2, {
        toValue: 1,
        duration: 4000,
        useNativeDriver:true
      }).start();
    }, [])
    
//#region funciones
    //manda el email a validacion
    const emailSend = () => {
        //valida si esta vacia
        if(email.length === 0 || password.length === 0){
          alertaPW2()
        }else{
          //valida si coincide
          if(email != correo || password != contraseña){
            //alert("Correo o contraseña incorrecta || Intentelo de nuevo")
            alertaPW()
          }
          else{
            //concede el acceso
            setLogear(true)
          }
        }
        console.log(email)
        setEmail("")
        console.log(password)
        setPassword("")
    }

    //funcion de animacion 
    const fadeOut = () => {
      //setIniciando(true)
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

    //vuelve a mostrar el contenido
    const fadeOutError = () => {
      setIniciando(false)
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

//#region alertasFunciones
    const alertaPW = () =>{
      fadeOutError();
      showAlert();
    }
    const alertaPW2 = () =>{
      fadeOutError();
      showAlert2();
    }
    const alertaPW3 = () =>{
      fadeOutError();
      showAlert3();
    }
    //#endregion

//#endregion

//validacion de acceso
if(logear !== false){
  console.log(logear)
  return(
    //despliega el resto de la app
      <Cuerpo/>
  )
}

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Animated.Text style={[styles.title, //Si quieres agregar un segundo estilo hazlo en arreglo {[ i, i]}
                    {opacity: fadeAnim}]} >{iniciando? "Iniciando sesion... Espere" : "Inicio de sesion"}</Animated.Text>

      <Animated.View style={[styles.fadingContainer,
                    {opacity: fadeAnim2}]}>

        <Image style={styles.image} source={require("./assets/navegador.png")} />
        

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
            placeholder="Contraseña"
            placeholderTextColor="white"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        
        {/* Alertas */}
        <>
          <AwesomeAlert
            show={oculto?false : true}
            actionContainerStyle={{backgroundColor:'#624F82', borderRadius:10}}
            messageStyle={{color:'#3F3B6C'}}
            showProgress={false}
            title="Oops.."
            message="Credenciales incorrectas"
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={false}
            showConfirmButton={true}
            confirmText="Reintentar"
            confirmButtonColor="#A3C7D6"
            onConfirmPressed={() => {
              hideAlert();
            }}
            /> 
            <AwesomeAlert
            show={oculto2?false : true}
            actionContainerStyle={{backgroundColor:'#624F82', borderRadius:10}}
            messageStyle={{color:'#3F3B6C'}}
            showProgress={false}
            title="Oops.."
            message="Agrege las credenciales necesarias"
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={false}
            showConfirmButton={true}
            confirmText="Reintentar"
            confirmButtonColor="#A3C7D6"
            onConfirmPressed={() => {
              hideAlert2();
            }}
            /> 
            <AwesomeAlert
            show={oculto3?false : true}
            actionContainerStyle={{backgroundColor:'#624F82', borderRadius:10}}
            messageStyle={{color:'#3F3B6C'}}
            showProgress={false}
            title="Usuario"
            message="Username: Admin || Contraseña: 1234"
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={false}
            showConfirmButton={true}
            confirmText="Gracias"
            confirmButtonColor="#A3C7D6"
            onConfirmPressed={() => {
              hideAlert3();
            }}
            /> 
        </>

        <TouchableOpacity>
          <Text style={styles.forgot_button}
          onPress={() => {
            alertaPW3()
          }}>Olvidaste tu contraseña? :(</Text>
        </TouchableOpacity>

        <Button title='Iniciar sesion :)' loading={iniciando?true:false} onPress={() => {
            setIniciando(true)
            fadeOut();
          }} />
          
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


