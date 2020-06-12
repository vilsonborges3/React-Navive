import React, {Component} from 'react'
import { View, Text, Image } from 'react-native'

class App extends Component {
  render(){
    let nome = 'Matheus';
    return (
      <View>
        <Text>Hello world!!!</Text>
        <Text>My first app</Text>
        <Text style={{color: '#ff0000', fontSize: 25, margin: 15}}>
          Sujeito programador
        </Text>
      
        <Text style={{fontSize: 30 }}>{nome}</Text>
        <Jobs largura={100} altura={200} fulano="Stee JOBS"/>
      </View>
    );
  }
}

class Jobs extends Component {
  render(){
    let img = 'https://sujeitoprogramador.com/steve.png';

    return (
      <View>
        <Image 
            source={{ uri: img }}
            style={{width: this.props.largura, height: this.props.altura}}
      />
      <Text>{this.props.fulano}</Text>
    </View>  
    );
  }
}

export default App;