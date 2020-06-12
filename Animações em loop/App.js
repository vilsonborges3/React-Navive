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
      OpacidadeAnimada: new Animated.Value(1)

    }

    


  //animação em loop
  Animated.loop(
    //Pode só uma animação
    //mas podemos criar sequencia
    Animated.sequence([

      Animated.timing(
        this.state.LarAnimada,
        {
          toValue: 200,
          duration:700
        },
        ),
        Animated.timing(
          this.state.LarAnimada,
          {
            toValue: 150,
            duration: 700
          }
      )

    ])
  ).start()
    

  }
  render(){
    return(
      <View style={styles.container}>
        <Animated.View style={{width: this.state.LarAnimada, 
                      height: this.state.AltAnimada, 
                      backgroundColor:'#4169E1', 
                      justifyContent: 'center', 
                      opacity: this.state.OpacidadeAnimada, borderRadius: 25}}> 

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