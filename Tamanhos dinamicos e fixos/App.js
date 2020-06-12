import React, {Component} from 'react'
import { View, Text } from 'react-native'

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
      <View style={{flex: 1, backgroundColor: '#222'}}>
        <View style={{height: 65, backgroundColor: '222'}}></View>
        <View style={{flex: 2, backgroundColor: '#fff'}}></View>
        <View style={{height: 65, backgroundColor: '222'}}></View>


      </View>
    );
  }
}

export default App;