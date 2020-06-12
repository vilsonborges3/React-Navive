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
    return (
      <View style={{flex: 1, 
                    flexDirection: 'column', //direção das tres view
                    justifyContent: 'center', //coluna 
                    alignItems: 'flex-start' //linha
      }}>

        <View style={{height: 50, width: 50, backgroundColor: 'green'}}></View>

        <View style={{width: 50, height: 50, backgroundColor: 'red'}}></View>

        <View style={{width: 50, height: 50, backgroundColor: 'yellow'}}></View>


      </View>
    );
  }
}

export default App;