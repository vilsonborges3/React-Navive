import React, {Component} from 'react'
import { View, Text, Image } from 'react-native'

class App extends Component {
  render(){
    let nome = 'Matheus';
    let img = 'https://sujeitoprogramador.com/steve.png';
    return (
      <View>
        <Text>Hello world!!!</Text>
        <Text>My first app</Text>
        <Text style={{color: '#ff0000', fontSize: 25, margin: 15}}>
          Sujeito programador
        </Text>
        <Image
          source={{ uri: img }}
          style = {{width: 300, height: 300}}
        />
        <Text style={{fontSize: 30 }}>{nome}</Text>
      </View>
    );
  }
}

export default App;