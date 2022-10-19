import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, StyleSheet, Text, View,TextInput,TouchableOpacity,Alert,ScrollView  } from 'react-native';
import { Button } from '@rneui/base';
import Home from './Home';
import SliderUsers from './Users/SliderUsrs'

const Stack = createNativeStackNavigator();

const Cuerpo = () => {
    const HomeScreen = ({ navigation }) => {
        return (
          <Home navigation={navigation}/>
        );
      };
      const UsersScreen = ({ navigation, route }) => {
        return (
            <ScrollView>
                <SliderUsers/>
            </ScrollView>
            
        );
      };
      
        return (
            <NavigationContainer >
                <Stack.Navigator >
                  <Stack.Screen name="Home" 
                                component={HomeScreen} 
                                options={{ title: '                Menu Principal', headerStyle: {
                                            backgroundColor: '#710687',},
                                            headerTintColor: '#fff',
                                            headerTitleStyle: {
                                                fontWeight: 'bold',},} }/>
                  <Stack.Screen name="Users" component={UsersScreen}
                                options={{ title: 'Usuarios Random', headerStyle: {
                                            backgroundColor: '#34054F',},
                                            headerTintColor: '#fff',
                                            headerTitleStyle: {
                                                fontWeight: 'bold',},} } />
                </Stack.Navigator>
            </NavigationContainer>
        );
      };
      
      const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          },
        loginBtn: {
            width: 210,
            borderRadius: 10,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
            backgroundColor: "#2AB57C",
            marginBottom:40
          },
        });

export default Cuerpo