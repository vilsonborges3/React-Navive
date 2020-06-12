import React, {Component} from 'react'
import { View, Text, StyleSheet } from 'react-native'

class App extends Component {
  //criando states com construtor 
  constructor(props){
    super(props);
    this.state = {
      nome: 'Vilson'
    };

  }
  
  render(){
    //é preciso passar uma função anonima para que ele nao execute direto a função entrar
    return (
      <View style={styles.area}>
        <Text style={[styles.textoPrincipal, styles.alinhaTexto]}>Eu sou Texto 1</Text>
        <Text style={styles.alinhaTexto}>Eu sou Texto 2</Text>
        <Text>Eu sou Texto 3</Text>
        <Text style={styles.textoPrincipal}>Eu sou Texto 4</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  area:{
    marginTop: 40
  },
  textoPrincipal:{
    fontSize: 25, 
    color: '#FF0000'
  },
  alinhaTexto:{
    textAlign: 'center'
  }
});

export default App;