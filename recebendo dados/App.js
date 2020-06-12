import React, {Component} from 'react'
import { View, StyleSheet, TextInput, Text } from 'react-native'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      nome: ''
    };

    this.pegaNome = this.pegaNome.bind(this);
  }

  pegaNome(texto){
    if(texto.length > 0){
      this.setState({nome: 'Bem vindo ' + texto});
    }
    else{
      this.setState({nome: ''});
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <TextInput 
        style={styles.input}
        placeholder = 'Digite o seu nome:'
        underlineColorAndroid='tranparent'
        //é chamada toda vez que digita uma letra na text box
        onChangeText = {this.pegaNome}
        />

    <Text style={styles.text}>{this.state.nome}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  input:{
    height: 45, //largura
    borderWidth: 1, //espessura da borda
    borderColor: '#222',
    margin: 30, //margem de fora
    fontSize: 20,
    padding: 10 //espa çamento dentro do texto
  },
  text: {
    textAlign: 'center',
    fontSize: 25
  }
});

export default App;