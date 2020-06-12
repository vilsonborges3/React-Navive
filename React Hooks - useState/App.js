import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

export default function App(){
  const [nome, setNome] = useState('Vilson') ; //o primeiro parametro é o estado, a segunda posição éuma função que sera chamada para alterar o valor do estado
  // use state é o padrao do estado

  const [input, setInput] = useState('');
  function alteraNome(){
    setNome(input)

  }

  return (
    <View style={styles.container}>
      <TextInput
      placeholder={'Seu nome...'}
      value={input}
      onChangeText={(texto) => setInput(texto)}
      />

      <TouchableOpacity style={styles.btn} onPress={alteraNome}>
        <Text style={styles.btnText} >
          Alterar Nome
        </Text>
      </TouchableOpacity>

      <Text style={styles.texto}>{nome}</Text>
    </View>
  );


}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 15
  },
  texto: {
    color: '#000',
    fontSize: 35
  },
  btn:{
    backgroundColor: '#222',
    marginTop:30

  },
  btnText:{
    fontSize:15,
    color: '#FFF',
    textAlign: 'center'
  }
});