import React, {Component} from 'react'
import { View, StyleSheet, TextInput, Text, Button} from 'react-native'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      nome: '',
      input: ''
    };

    this.entrar = this.entrar.bind(this);
  }
  entrar(){
    if(this.state.input === ''){
      alert('Digite seu nome, PORRA!!!!!!');
      this.setState( {nome: ''} );
      return;
    }
    this.setState( {nome: 'Bem vindo ' + this.state.input} )

  }

  render(){
    return (
      <View style={styles.container}>
        <TextInput 
        style={styles.input}
        placeholder = 'Digite o seu nome:'
        underlineColorAndroid='tranparent'
        //é chamada toda vez que digita uma letra na text box
        onChangeText = { (texto) => this.setState({input: texto}) }
        />

    <Text style={styles.text}>{this.state.nome}</Text>
    <Button title='Enviar' onPress={this.entrar}/>
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