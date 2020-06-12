import React, {Component} from 'react'
import {
  Text,
  View, 
  StyleSheet,
  FlatList
} from 'react-native'

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
        renderItem={ ({item}) => <Pessoa data={item} /> } //renderiza
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    
  },
  areaPessoa: {
    backgroundColor: '#222',
    height: 200,
    marginBottom: 15
  },
  textoPessoa:{
    color: '#FFF',
    fontSize: 20
  }
});

export default App;

class Pessoa extends Component{
  render(){
    return(
      <View style={styles.areaPessoa}>
        <Text style={styles.textoPessoa}> Nome: {this.props.data.nome} </Text>
        <Text style={styles.textoPessoa}> Idade: {this.props.data.idade} </Text>
        <Text style={styles.textoPessoa}> Email: {this.props.data.email} </Text>
      </View>
    );
  }
}