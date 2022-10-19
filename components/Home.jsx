import React from 'react'
import { Image, StyleSheet, Text, View,TextInput,TouchableOpacity,Alert,ScrollView  } from 'react-native';
import CardT from './CardT';

const Home = ({navigation}) => {
  return (
    <ScrollView backgroundColor="#34054F">
        <View style={styles.container}>
            <Text style={styles.menu2}>Elige una actividad</Text>

            <CardT navigation={navigation} 
            description={"Aplicacion para generar una lista de usuarios random por medio de un slideBar"}
            btnText = {"Usuarios random"}
            />

            <CardT navigation={navigation} 
            description={"Aplicacion para Compartir una foro en tus redes sociales"}
            btnText = {"Compartir Imagen"}
            />
        </View>   
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:3,
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