import React, {useState, useEffect, useMemo, useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, AsyncStorage} from 'react-native';

export default function App(){
  const [nome, setNome] = useState('') ; //o primeiro parametro é o estado, a segunda posição éuma função que sera chamada para alterar o valor do estado
  // use state é o padrao do estado

  const [input, setInput] = useState('');

  const nomeInput = useRef(null); // usado para referenciar algo, nesse caso, foi a abertura do teclado atraves do botao

  //Did mount, chamado quando nosso cmponente montado na tela 
  useEffect( ()=>{
    async function getStorage(){
      const nomeStorage = await AsyncStorage.getItem('nomes');
      if(nomeStorage !== null)
        setNome(nomeStorage); //alterou a state
    }
    getStorage();

    //return() => {} //will amount
  }, []);

  //Funciona como didUpdate
  //O primeiro parametro e uma função que sera executada e o segunparametro é um array onde podemos passar uma state para que ele possa ficar monitorando
  useEffect( ()=>{
    async function saveStorage(){
      await AsyncStorage.setItem('nomes', nome)
    } // toda vez que nome mudar ele executa a função 
    saveStorage();

  }, [nome] ) //quando nome for alterado, queremos que ele execute a função e salve no asyncstorage


  function alteraNome(){
    setNome(input)

  }

  function novoNome(){
    nomeInput.current.focus();
  }

  const letrasNome = useMemo( () => nome.length, [nome]) // Para nao ter renderização desnecessaria ele so chama afunção quando nome mudar

  return (
    <View style={styles.container}>
      <TextInput
      placeholder={'Seu nome...'}
      value={input}
      onChangeText={(texto) => setInput(texto)}
      ref={nomeInput} //referenciado em nome input do ref
      />

      <TouchableOpacity style={styles.btn} onPress={alteraNome}>
        <Text style={styles.btnText} >
          Alterar Nome
        </Text>
      </TouchableOpacity>

      <Text style={styles.texto}>{nome}</Text>
      <Text style={styles.texto}>Tem {letrasNome} Letras</Text>
      <TouchableOpacity onPress={novoNome}>
        <Text>Novo nome</Text>
      </TouchableOpacity>


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