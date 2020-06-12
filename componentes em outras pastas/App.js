import React, {Component} from 'react'
import {
  View, 
  StyleSheet,
  FlatList
} from 'react-native'
import Pessoas from './src/Pessoas'

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      feed: [
        {id: 1, nome: 'Matheus', idade: 50, email: 'matheus@matheus.com'},
        {id: 2, nome: 'Joao', idade: 22, email: 'joao@hotmail.com'},
        {id: 3, nome: 'henrique', idade: 29, email: 'henrique@gmail.com'},
        {id: 4, nome: 'Vilson', idade: 23, email:'vilsonborges98@gmail.com'}
      ]
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <FlatList 
        keyExtractor={(item) => item.id}
        data={this.state.feed} //lista
        renderItem={ ({item}) => <Pessoas data={item} /> } //renderiza
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    
  },
  
});

export default App;