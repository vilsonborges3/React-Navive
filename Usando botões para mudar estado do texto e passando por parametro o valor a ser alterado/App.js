import React, {Component} from 'react'
import { View, Text, Button } from 'react-native'

class App extends Component {
  //criando states com construtor 
  constructor(props){
    super(props);
    this.state = {
      nome: 'Vilson'
    };

    //com isso deixamos a função entrar para poder acessar os states e poderemos mudar o valor de nome
    this.entrar = this.entrar.bind(this)
  }
  entrar(nome){
    //metodo que troca valor
    this.setState({
      nome: nome
    })
  }

  render(){
    let nome = 'Matheus';

    //é preciso passar uma função anonima para que ele nao execute direto a função entrar
    return (
      <View style={{marginTop: 20 }}>
        <Button title='Entrar' onPress={() => this.entrar('Heitor')}/>
        <Text style={{fontSize: 23, color: 'red', textAlign: 'center'}}>
          {this.state.nome}
        </Text>

      </View>
    );
  }
}



export default App;