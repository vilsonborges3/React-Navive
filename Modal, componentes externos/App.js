import React, {Component} from 'react'
import {
  Text,
  View, 
  StyleSheet,
  Button,
  Modal
  
} from 'react-native'
import Entrar from './src/Entrar'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalVisible: false

    };
    this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this)
  }
  sair(visible){
    this.setState({modalVisible: visible})
  }
  entrar(){
    this.setState({modalVisible: true});
  }
    
  render(){
    
    return (
      <View style={styles.container}>
        <Button title='Entrar' onPress={ this.entrar }/>

        <Modal transparent={true} animationType='slide' visible={this.state.modalVisible}>
          <View style={{margin: 15,flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Entrar fechar={ () => this.sair(false)}/>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 20,
    alignItems: 'center'
  },
   
});


export default App;