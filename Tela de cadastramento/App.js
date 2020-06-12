import React, {Component} from 'react'
import {
  Text,
  View, 
  StyleSheet,
  TextInput,
  Slider,
  Switch,
  Picker,
  Button
} from 'react-native'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      idade: '',
      options: 0,
      sexo: [
        {key: 1, nome: 'Masculino'},
        {key: 2, nome: 'Feminino'}
      ],
      valor: 0,
      status: false,
      estudante: 'não'
    };
    this.takeName = this.takeName.bind(this);
    this.takeIdade = this.takeIdade.bind(this);
    this.showValue = this.showValue.bind(this);
    this.cadastrar = this.cadastrar.bind(this);
  }
  cadastrar(){
    if(this.state.name === '' || this.state.idade === ''){
      alert('Preencha os campos vazios!!');
      return;
    }
    if(this.state.valor === 0){
      alert('Defina um valor no limite!');
      return;
    }
    alert('Nome:' + this.state.name + '\n' + 'Idade:' + this.state.idade + '\n' + 'Sexo:' + this.state.sexo[this.state.options].nome + '\n' + 'Limite:' + this.state.valor + '\n' + 'Estudante:' + this.state.status);

  }
  takeName(text){
    this.setState({name: text});
  }

  takeIdade(text){
    this.setState({idade: text});
  }

  showValue(value){
    this.setState({valor: value})
  }

  render(){
    let sexo = this.state.sexo.map( (v,k) => {
      return <Picker.Item key={k} value={k} label={v.nome} />
    })
    return (
      <View style={styles.container}>
        <View style={styles.area}>
          <TextInput 
          style={styles.input} 
          onChangeText={this.takeName}
          >Nome:</TextInput>
        </View>  

        <View style={styles.area}>
          <TextInput 
          onChangeText={this.takeIdade}
          style={styles.input}
          >Idade:
          </TextInput>
        </View> 

        <View style={styles.area}> 

          <Picker
          style={styles.sexo}
          selectedValue = {this.state.options}
          onValuechange = {(itemValue, itemIndex) => this.setState({options: itemValue})}
          >{sexo}
          </Picker>

        </View>

        <View style={styles.area}> 
          <Text>Defina seu Limite:  R${this.state.valor.toFixed(2)}</Text>
          <Slider 
            minimumValue={0}
            maximumValue={10000}
            value={this.state.value}
            onValueChange={this.showValue}
          />
        </View>

        <View style={styles.area}> 
          <Text>Estudante: </Text>
          <Switch 
          value={this.state.status}
          onValueChange={
            (valorSwitch) => this.setState({status: valorSwitch})
          }
          />
        </View>

        <View style={styles.area}> 
          <Button title='Cadastrar'
          onPress={() => this.cadastrar()}
          />
        </View>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 40,
    backgroundColor: '#789'
  },
  area: {
    marginTop: 30,
    height: 40
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#FFF',
    margin: 30,
    fontSize: 20,
    padding:10,
    textShadowColor: '#fff'
  },
  sexo: {
    marginTop: 20,
    fontSize: 25,
    textAlign: 'center' 
  },
  button:{
    fontSize: 23, 
    color: 'red', 
    textAlign: 'center'
  }
});


export default App;