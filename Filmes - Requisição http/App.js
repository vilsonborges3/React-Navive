import React, {Component} from 'react'
import {
  View, 
  StyleSheet,
  FlatList,
} from 'react-native'

import api from './src/services/api';
import Filmes from './src/Filmes';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      filmes: []
    };

  }

  //transformamos em assincrono 
  async componentDidMount(){
    const response = await api.get('r-api/?api=filmes');
    this.setState({
      //quando o axios faz requizição as informações vem dentro de data
      filmes: response.data
    });
  }

  render(){ 
    return (
      <View style={StyleSheet.container}>
        <FlatList
        data={this.state.filmes}
        keyExtractor={ item => item.id.toString()}
        renderItem={ ({item}) => <Filmes data={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }

})


export default App;