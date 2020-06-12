import React, {Component} from 'react'
import {
  Text,
  View, 
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      numero: 0,
      botao: 'COMEÇAR',
      ultimo: 0
    };
    ///variavel do timer relogio
    this.timer = null;
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }
  
  vai(){
    if(this.timer != null){
      //Aqui vai parar o timer
      clearInterval(this.timer);
      this.timer = null;
      this.setState({botao: 'COMEÇAR'})
      return;
    }
    this.timer = setInterval( () => {
      this.setState({numero: this.state.numero + 0.01, botao:'PAUSAR'})
    }, 10);
  }

  limpar (){
    this.setState({ultimo: this.state.numero});
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      numero: 0,
      botao: 'COMEÇAR' 
    })
  }
  render(){
    return (
      <View style={styles.container}>
        <Image
        source={require('./src/cronometro.png')} 
        style={styles.cronometro}
        />
        <Text style={styles.timer}> {this.state.numero.toFixed(2)} </Text>

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.botao} onPress={this.vai}>
            <Text style={styles.texto}>{this.state.botao}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={this.limpar}>
            <Text style={styles.texto} >LIMPAR</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.lest}> {this.state.ultimo.toFixed(2)} </Text>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  timer:{
    marginTop:-160,
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea:{
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },
  botao:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 13
  },
  texto:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#00aeef'
  },
  lest: {
    marginTop:10,
    color: '#fff',
    fontSize: 65,
    fontWeight: 'bold'
  }
  
});

export default App;