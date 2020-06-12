import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, ActivityIndicator } from 'react-native';

import Login from './src/pages/Login'
import WelcomeScreen from './src/pages/WelcomeScreen'

import 'firebase/auth';
import firebase from './src/firebaseConnection'

import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

export default function App(){
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name='Login'
        component={Login}
        options={{title: 'Logar',
        headerStyle:{
          backgroundColor:'#121212'
        },
        headerTintColor: '#FFF'
        }}
        />

        <Stack.Screen 
        name='WelcomeScreen'
        component={WelcomeScreen}
        />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

