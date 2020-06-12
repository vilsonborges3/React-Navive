import React, {Component} from 'react'
import {
  Text,
  View, 
  StyleSheet,
  Picker
} from 'react-native'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pizza: 0,
      pizzas: [
        {key: 1, nome: 'Strogonoff', valor: 35.90},
        {key: 2, nome: 'Brigadeiro', valor: 20.90},
        {key: 3, nome: 'Calabreza', valor: 18.00}
      ]
    }
  }
  render(){
    let pizzasItem = this.state.pizzas.map( (v,k) => {
      return <Picker.Item key={k} value={k} label={v.nome} />
    })
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Menu pizzas</Text>
        <Picker
        selectedValue={this.state.pizza}
        onValueChange={(itemValue, itemIndex) => this.setState({pizza: itemValue})}
        >
         {pizzasItem}
        </Picker>
        <Text style={styles.pizzas}>
          Voce escolheu: {this.state.pizzas[this.state.pizza].nome}
        </Text>

        <Text style={styles.pizzas}>
          Valor: {this.state.pizzas[this.state.pizza].valor.toFixed(2)} reais
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
  logo: {
    textAlign: 'center',
    fontSize: 25
  },
  pizzas: {
    marginTop: 20,
    backgroundColor: '#DDD',
    fontSize: 25,
    textAlign: 'center'
  }
});

export default App;