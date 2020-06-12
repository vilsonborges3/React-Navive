import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, ActivityIndicator } from 'react-native';

import 'firebase/auth';
import firebase from './src/firebaseConnection'


console.disableYellowBox=true;

export default function App(){
  const [email, setEmail] = useState('');
  const [passward, setPasseward] = useState('');
  const [user, setUser] = useState('');


  async function logar(){
    await firebase.auth().signInWithEmailAndPassword(email, passward)
    .then( (value) => {
      alert('Bem vindo: ' + value.user.email);
      setUser(value.user.email)
    })
    .catch( (error) => {
        alert('Ops algo deu errado!');
        return;
    })
    setEmail('');
    setPasseward('');
  }

  async function logout (){
    await firebase.auth().signOut();
    setUser('');
    alert('Saiu com sucesso');
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
      title='Acessar'
      onPress = {logar}
      />
      <Text>
        {user}
      </Text>
      {user.length > 0 ?
      (
      <Button 
      title='Sair'
      onPress={logout}
      />
      ) :
      (
        <Text>Nenhum usuário logado</Text>
      )}
      
      
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