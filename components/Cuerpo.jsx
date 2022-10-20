import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet,ScrollView  } from 'react-native';
import Home from './Home';
import SliderUsers from './Users/SliderUsrs'
import PickScreen from './ShareApp/PickScreen';
import DragBox from './Animaciones/DragBox';
import CarruselAnimado from './Animaciones/CarruselAnimado';
import BigBox from './Animaciones/BigBox';
import Eases from './Animaciones/Eases';
import ExpandLayout from './Animaciones/ExpandLayaout';
import MooveAnimation from './Animaciones/MooveAnimation';


const Stack = createNativeStackNavigator();

const Cuerpo = () => {
    const HomeScreen = ({ navigation }) => {
        return (
          <Home navigation={navigation}/>
        );
      };
      const UsersScreen = () => {
        return (
            <ScrollView>
              <SliderUsers/>
            </ScrollView>
            
        );
      };
      const ShareScreen = () => {
        return (
            <ScrollView>
              <PickScreen/>
            </ScrollView>
        );
      };
      const DBoxScreen = () => {
        return (
            <ScrollView>
              <DragBox/>
            </ScrollView>
        );
      };
      const CarruselScreen = () => {
        return (
            <ScrollView>
              <CarruselAnimado/>
            </ScrollView>
        );
      };
      const BoxScreen = () => {
        return (
            <ScrollView>
              <BigBox/>
            </ScrollView>
        );
      };
      const EasesScreen = () => {
        return (
            <ScrollView>
              <Eases/>
            </ScrollView>
        );
      };
      const ExpandScreen = () => {
        return (
            <ScrollView>
              <ExpandLayout/>
            </ScrollView>
        );
      };
      const MooveScreen = () => {
        return (
            <ScrollView>
              <MooveAnimation/>
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
                                options={{ title: 'Usuarios random', headerStyle: {
                                            backgroundColor: '#34054F',},
                                            headerTintColor: '#fff',
                                            headerTitleStyle: {
                                                fontWeight: 'bold',},} } />
                  <Stack.Screen name="Share" component={ShareScreen}
                                options={{ title: 'Share App', headerStyle: {
                                            backgroundColor: '#34054F',},
                                            headerTintColor: '#fff',
                                            headerTitleStyle: {
                                                fontWeight: 'bold',},} } />
                  <Stack.Screen name="DragBox" component={DBoxScreen}
                                options={{ title: 'Arrastra la cajita', headerStyle: {
                                            backgroundColor: '#710687',},
                                            headerTintColor: '#fff',
                                            headerTitleStyle: {
                                                fontWeight: 'bold',},} } />
                  <Stack.Screen name="Carrusel" component={CarruselScreen}
                                options={{ title: 'Un carrusel?', headerStyle: {
                                            backgroundColor: '#710687',},
                                            headerTintColor: '#fff',
                                            headerTitleStyle: {
                                                fontWeight: 'bold',},} } />
                  <Stack.Screen name="Box" component={BoxScreen}
                                options={{ title: 'Una cajota', headerStyle: {
                                            backgroundColor: '#710687',},
                                            headerTintColor: '#fff',
                                            headerTitleStyle: {
                                                fontWeight: 'bold',},} } />
                  <Stack.Screen name="Ease" component={EasesScreen}
                                options={{ title: 'Animaciones varias', headerStyle: {
                                            backgroundColor: '#710687',},
                                            headerTintColor: '#fff',
                                            headerTitleStyle: {
                                                fontWeight: 'bold',},} } /> 
                  <Stack.Screen name="Expand" component={ExpandScreen}
                                options={{ title: 'Expandir el layaout', headerStyle: {
                                            backgroundColor: '#710687',},
                                            headerTintColor: '#fff',
                                            headerTitleStyle: {
                                                fontWeight: 'bold',},} } />
                  <Stack.Screen name="Moove" component={MooveScreen}
                                options={{ title: 'Moover el layaout', headerStyle: {
                                            backgroundColor: '#710687',},
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