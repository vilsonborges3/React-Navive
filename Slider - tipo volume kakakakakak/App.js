import React, {Component} from 'react'
import {
  Text,
  View, 
  StyleSheet,
  Slider
} from 'react-native'

class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      valor: 50
    };
  }

  render(){
    return (
      <View style={styles.container}>
        <Slider
          minimumValue={0}
          maximumValue={100}
          onValueChange = { (valorSelecionado) => this.setState({valor: valorSelecionado})} //é chamada quando for arrastado o slider e ele captura esse valor
          value={this.state.valor} //tipo que o valorinicial
          minimumTrackTintColor = '#00FF00'
          maximumTrackTintColor = '#FF0000'
        />
        <Text style={{textAlign: 'center', fontSize: 30}}>
          {this.state.valor.toFixed(0)}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 20
  },
});


export default App;