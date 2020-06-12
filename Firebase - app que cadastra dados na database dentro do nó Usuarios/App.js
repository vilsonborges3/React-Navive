import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

import firebase from './src/firebaseConnection'

console.disableYellowBox=true;

export default function App(){
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  useEffect(() => { ///quando inicia app ele vai no nosso banco e pega o valor salvo em nome 

    async function dados(){


      //criar um no
      //await firebase.database().ref('tipo').set('Vendedor');
      
      //remover um nó
      //await firebase.database().ref('tipo').remove();

      //criando um child dentro de no ja existente
     /* await firebase.database().ref('usuarios').child(3).set({
        nome: 'Jose',
        cargo: 'Programador'
      }) */

      //atualizando sem perder informações
      /*await firebase.database().ref('usuarios').child(3)
      .update({
        nome: 'jose augusto'
      })*/

    }

    dados();
  }, []);

  async function cadastrar(){
    if(nome !== '' && cargo !== ''){
      let usuarios = await firebase.database().ref('usuarios');
      let chave = usuarios.push().key; //cria um key unica

      usuarios.child(chave).set({
        nome: nome,
        cargo: cargo
      });
      alert('Cadastrado com sucesso:');
      setCargo('');
      setNome('');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nome:</Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid = 'transparent'
      onChangeText={(texto) => setNome(texto)}
      value={nome}
      />

      <Text style={styles.texto}>Cargo:</Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid = 'transparent'
      onChangeText={(texto) => setCargo(texto)}
      value={cargo}
      />
      
      <Button 
      title='Novo funcionario'
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