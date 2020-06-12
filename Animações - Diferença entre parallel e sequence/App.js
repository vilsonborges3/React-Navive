import React, {Component} from 'react'
import {
  View, 
  StyleSheet,
  FlatList,
  Text,
  Animated
  
} from 'react-native'



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      LarAnimada: new Animated.Value(150),
      AltAnimada: new Animated.Value(50),
      OpacidadeAnimada: new Animated.Value(0)

    }

    Animated.sequence([ //substituindo por Animated.parallel  teremos aqui tudo ao mesmo tempo
      
      Animated.timing(
        this.state.OpacidadeAnimada,
        {
            toValue: 1,
            duration: 2000
        }
      ),

      Animated.parallel([       //faz tudo ao mesmo tempo

        Animated.timing(
          this.state.LarAnimada,
          {
            toValue: 300,
            duration: 2000
          }
        ),
        Animated.timing(
          this.state.AltAnimada,
          {
            toValue: 150,
            duration: 2000
          }
        )
          //voltou para sequencia
      ]),
      Animated.timing(
        this.state.OpacidadeAnimada,
        {
          toValue: 0,
          duration: 1500
        }
      )

    ]).start();

    /*
    Animated.timing(
      this.state.AltAnimada,
      {
        toValue: 300,
        duration: 5000
      }
    ).start();
    */
    

  }
  render(){
    return(
      <View style={styles.container}>
        <Animated.View style={{width: this.state.LarAnimada, 
                      height: this.state.AltAnimada, 
                      backgroundColor:'#4169E1', 
                      justifyContent: 'center', opacity: this.state.OpacidadeAnimada}}> 

          <Text style={{color: '#FFFFFF', fontSize: 22, textAlign: 'center' }}>Carregando...</Text>
        </Animated.View>

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