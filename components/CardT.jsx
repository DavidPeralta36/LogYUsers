import React from 'react'
import { Image, StyleSheet, Text, View,TextInput,TouchableOpacity,Alert,ScrollView  } from 'react-native';

const CardT = ({navigation, description, btnText}) => {
  return (
    <View style={styles.item}>
              <Text style={styles.menu}>{description}</Text>
              <TouchableOpacity style={styles.loginBtn}
                onPress={() => {
                    navigation.navigate('Users')
                }}>
                <Text>{btnText}</Text>
              </TouchableOpacity>
            </View>
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
    
export default CardT