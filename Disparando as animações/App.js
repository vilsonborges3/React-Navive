import React, {Component} from 'react'
import {
  View, 
  StyleSheet,
  FlatList,
  Text,
  Animated,
  TouchableOpacity
  
} from 'react-native'



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      LarAnimada: new Animated.Value(150),
      AltAnimada: new Animated.Value(50),
      OpAnimada: new Animated.Value(0),
    }
    this.carregarGrafico = this.carregarGrafico.bind(this);


  }

  carregarGrafico(){
    Animated.sequence([
      Animated.timing(
        this.state.OpAnimada,
        {
          toValue:1,
          duration: 400
        }
      ),
      Animated.timing(
        this.state.AltAnimada,
        {
          toValue:300,
          duration: 1000
        }
      )
    ]).start();
  }
  render(){
    return(
      <View style={{flex:1}}>
        <View style={{height: 80, 
                      alignItems:'center', 
                      justifyContent: 'center', 
                      flexDirection: 'row',
                      backgroundColor: '#4169E1' 
                      }}>
        <TouchableOpacity onPress={this.carregarGrafico}>
          <Text style={{fontSize: 25, color: '#FFFFFF'}}>
            Gerar grafico
          </Text>
        </TouchableOpacity>   

        </View>

        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center'}}>
          <View  >
            <Text>Vendas</Text>
          </View>
          
          <Animated.View style={{width: this.state.LarAnimada, 
                        height: this.state.AltAnimada,
                        opacity: this.state.OpAnimada, 
                        backgroundColor:'#FF0000', 
                        justifyContent: 'center', 
                         }}> 

            <Text style={{color: '#FFFFFF', fontSize: 22, textAlign: 'center' }}>R$50,00</Text>
          </Animated.View>
        </View>
      </View>
    );
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  }
});

export default App;