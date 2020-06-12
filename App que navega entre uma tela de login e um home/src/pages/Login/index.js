import React, { useState } from 'react'
import {View, Text, TextInput, Button, StyleSheet} from 'react-native'

import { useNavigation } from '@react-navigation/native'

import 'firebase/auth'

import firebase from 'C:/Users/vilso/Desktop/Expo/src/firebaseConnection'

export default function Login(){
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [passward, setPasseward] = useState('');
    async function logar (){
        await firebase.auth().signInWithEmailAndPassword(email,passward)
        .then( (value) => {
            navigation.navigate('WelcomeScreen', {'email': email});
        })
        .catch( (error) => {
            alert('Ops Algo deu errado!');
            return;
        })
    }
    return(
        <View>
            <Text style={styles.texto}>Email:</Text>
            <TextInput 
            style={styles.input}
            underlineColorAndroid= 'transparent'
            onChangeText={(text) => setEmail(text)}
            />

            <Text style={styles.texto}>Senha:</Text>
            <TextInput
            style={styles.input}
            underlineColorAndroid= 'transparent'
            onChangeText={(text) => setPasseward(text)}
            />
            <Button 
            title='Acessar'
            onPress={logar}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 10,
    },
    texto:{
      fontSize: 20,
    },
    input:{
      marginBottom: 10,
      padding: 10,
      borderWidth: 1,
      borderColor:'#121212',
      height: 40,
      fontSize: 17
    }
  })