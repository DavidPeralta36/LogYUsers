import React, { useRef } from 'react'
import { StyleSheet, Text, View,ScrollView, Animated  } from 'react-native';
import CardT from './CardT';

const Home = ({navigation}) => {
  //#region declaracion de animaciones
  const fadeAnimm = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim2 = useRef(new Animated.Value(0)).current;
  const fadeAnim3 = useRef(new Animated.Value(0)).current;
  const fadeAnim4 = useRef(new Animated.Value(0)).current;
  //#endregion


  //#region Animaciones
  //lo mejor seria agregar todas las animaciones en un arreglo pero que paja
  Animated.timing(fadeAnimm, {
    toValue: 1,
    duration: 1000,
    useNativeDriver:true
  }).start();

  Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 2000,
    useNativeDriver:true
  }).start();

  Animated.timing(fadeAnim2, {
    toValue: 1,
    duration: 3000,
    useNativeDriver:true
  }).start();
  Animated.timing(fadeAnim3, {
    toValue: 1,
    duration: 4000,
    useNativeDriver:true
  }).start();

  Animated.timing(fadeAnim4, {
    toValue: 1,
    duration: 5000,
    useNativeDriver:true
  }).start();

  //#endregion

  return (
    <ScrollView backgroundColor="#34054F">
        <View style={styles.container}>

            <Animated.View style={[styles.fadingContainer, { opacity: fadeAnimm }]}>
              <Text style={styles.menu2}>Elige una actividad</Text>
            </Animated.View>   

            <Animated.View style={[styles.fadingContainer, { opacity: fadeAnim }]}>
              <CardT navigation={navigation} 
                description={"Modulo para hacer manejo de una lista de tareas pendientes"}
                btnText = {"ToDo List"}
                screen={"Todo"}
                />
            </Animated.View>

            <Animated.View style={[styles.fadingContainer, { opacity: fadeAnim2 }]}>
              <CardT navigation={navigation} 
                description={"Modulo para generar una lista de usuarios random por medio de un slideBar"}
                btnText = {"Usuarios random"}
                screen={"Users"}
                />
            </Animated.View>

            <Animated.View style={[styles.fadingContainer, { opacity: fadeAnim3 }]}>
              <CardT navigation={navigation} 
                description={"Modulo que permite modificar el tama??o de una caja en Anchura y Altura"}
                btnText = {"Ir"}
                screen={"Box"}
            />
            </Animated.View>

            <Animated.View style={[styles.fadingContainer, { opacity: fadeAnim4 }]}>
              <CardT navigation={navigation} 
                description={"Modulo sacado de la documentacion de RN que permite compartir una imagen"}
                btnText = {"Compartir Imagen"}
                screen={"Share"}
                />
            </Animated.View>
            {
              /* 
              <Animated.View
            style={[styles.fadingContainer,
                    {
                      // Bind opacity to animated value
                      opacity: fadeAnim4
                    }
                    ]}>
              <CardT navigation={navigation} 
            description={"App para ver las distintas animaciones dew react native"}
            btnText = {"Ver"}
            screen={"Ease"}
            />
            </Animated.View>

            <Animated.View
            style={[styles.fadingContainer,
                    {
                      // Bind opacity to animated value
                      opacity: fadeAnim4
                    }
                    ]}>
              <CardT navigation={navigation} 
            description={"Aplicacion para jugar con una cajita"}
            btnText = {"Jugar con la caja"}
            screen={"DragBox"}
            />
            </Animated.View>

            <Animated.View
            style={[styles.fadingContainer,
                    {
                      // Bind opacity to animated value
                      opacity: fadeAnim4
                    }
                    ]}>
              <CardT navigation={navigation} 
            description={"Carrusel de imagenes"}
            btnText = {"Bonito carrusel"}
            screen={"Carrusel"}
            />
            </Animated.View>

            <Animated.View
            style={[styles.fadingContainer,
                    {
                      // Bind opacity to animated value
                      opacity: fadeAnim4
                    }
                    ]}>
              <CardT navigation={navigation} 
            description={"App para observar la animacion del layaout"}
            btnText = {"Ver"}
            screen={"Expand"}
            />
            </Animated.View>

            <Animated.View
            style={[styles.fadingContainer,
                    {
                      // Bind opacity to animated value
                      opacity: fadeAnim4
                    }
                    ]}>
              <CardT navigation={navigation} 
            description={"App para observar la animacion del layaout 2"}
            btnText = {"Ver"}
            screen={"Moove"}
            />
            </Animated.View>
              */
            }
        </View>   
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      fadingContainer:{
        padding: 1,
      },
    menu:{
        padding:10,
        fontSize:15,
        color:"#fff",
        fontWeight:"bold",
        borderBottomWidth:1,
        borderColor:"white"
    },
    menu2:{
      fontSize:30,
      color:"#fff",
      fontWeight:"bold"
  },
  item:{
    backgroundColor:"#001886",
    height: 190,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:15,
    borderWidth:2,
    borderColor:"white"
},
    loginBtn: {
        width: 210,
        borderRadius: 5,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "#2AB57C",
        marginBottom:40
      },
    });
    
export default Home