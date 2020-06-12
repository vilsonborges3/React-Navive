import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, ActivityIndicator } from 'react-native';

import 'firebase/auth';
import firebase from './src/firebaseConnection'


console.disableYellowBox=true;

export default function App(){
  const [email, setEmail] = useState('');
  const [passward, setPasseward] = useState('');

  async function cadastrar(){
    await firebase.auth().createUserWithEmailAndPassword(email, passward)
    .then( (value) => {
      alert('Usuario criado: ' + value.user.email);
    })
    .catch( (error) => {
      if(error.code === 'auth/weak-passwaord'){
        alert('Sua senha deve ter pelo menos 6 caracteres');
        return;
      }
      if(error.code === 'auth/invalid-email'){
        alert('Email invalido');
        return;
      }else{
        alert('Ops algo deu errado!');
        return;
      }
    })
    setEmail('');
    setPasseward('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Email:</Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid = 'transparent'
      onChangeText={(texto) => setEmail(texto)}
      value={email}
      />

      <Text style={styles.texto}>Senha:</Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid = 'transparent'
      onChangeText={(texto) => setPasseward(texto)}
      value={passward}
      />
      
      <Button 
      title='Cadastrar'
      onPress = {cadastrar}
      />

    

  
    </View>
  );
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