import React, {Component} from 'react'
import { View, StyleSheet, TextInput, Text, TouchableOpacity, Image} from 'react-native'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./src/biscoito.png')
    };
    this.quebraBiscoito = this.quebraBiscoito.bind(this);
    this.frases = ['A vida trará coisas boas se tiver paciência',
      'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
      'Não compense na ira o que lhe falta na razão.', 
      'Defeitos e virtudes são apenas dois lados da mesma moeda.', 
      'A maior de todas as torres começa no solo.', 
      'Não há que ser forte. Há que ser flexível.', 
      'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
      'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
      'A juventude não é uma época da vida, é um estado de espírito.',
      'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
      'Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.',
      'Siga os bons e aprenda com eles.', 
      'Não importa o tamanho da montanha, ela não pode tapar o sol.', 
      'O bom-senso vale mais do que muito conhecimento.', 'Quem quer colher rosas tem de estar preparado para suportar os espinhos.',
      'Aquele que se importa com o sentimento dos outros, não é um tolo.', 'A adversidade é um espelho que reflete o verdadeiro eu'
    ];
  }
  quebraBiscoito (){
    let numeroAleatorio = Math.floor(Math.random()*this.frases.length);
    this.setState({
      textoFrase: '"' + this.frases[numeroAleatorio] + '"',
      img: require('./src/biscoitoAberto.png')
    })

  }

  render(){
    return (
      <View style={styles.container}>
        <Image
        source={this.state.img}
        style={styles.img}
        />
        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>
              Abrir Biscoito
            </Text>
          </View>
        </TouchableOpacity>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 250,
    height: 250
  },
  textoFrase:{
    fontSize: 20,
    color: '#dd7b22',
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#ffae49',
    borderRadius: 25,
    backgroundColor: '#dd7b22',

  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  btnTexto:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
    
  }

});

export default App;