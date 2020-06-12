import React, {Component} from 'react';
import { View, Text,StyleSheet, TextInput, TouchableOpacity, Keyboard} from 'react-native';
import api from '../services/api'


// > /convert?q=USD_BRL&compact=ultra&apiKey=f690587b025297fdc59f

class Conversor extends Component{
    constructor(props){
        super(props);
        this.state = {
            moedaA: props.moedaA,
            moedaB: props.moedaB,
            moedaB_valor: 0,
            valorConvertido: 0
        };
        this.converter = this.converter.bind(this);
    }
    async converter(){
        let de_para = this.state.moedaA + '_' + this.state.moedaB;
        const response = await api.get('convert?q=' + de_para + '&compact=ultra&apiKey=f690587b025297fdc59f')
        let cotacao = response.data[de_para];
        let resultado = (cotacao * parseFloat(this.state.moedaB_valor));
        this.setState({
            valorConvertido: resultado.toFixed(2)
        });
        Keyboard.dismiss(); //fechar automaticamente o teclado
    }

    render(){
        return(
            <View style={styles.container}>

                <Text style={styles.tilulo}>{this.props.moedaA} para {this.props.moedaB}</Text>
                <TextInput
                placeholder='Valor a ser convertido'
                style={styles.areaInput}
                onChangeText={(moedaB_valor) => this.setState({moedaB_valor})} //Com ES6 não é preciso repetir 
                keyboardType='numeric'
                />
                <TouchableOpacity style={styles.botaoArea} onPress={this.converter}>
                    <Text style={styles.botaoTexto}>Converter</Text>
                </TouchableOpacity>
                <Text style={styles.valorConvertido}>
                    {(this.state.valorConvertido === 0) ? '': this.state.valorConvertido}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tilulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000'
    },
    areaInput:{
        width: 280,
        height: 45,
        backgroundColor: '#CCE',
        color: '#000',
        textAlign: 'center',
        marginTop: 15,
        fontSize: 20,
        borderRadius: 5
    },
    botaoArea:{
        width: 150,
        height: 45,
        backgroundColor: '#FF0001',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    botaoTexto:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
    },
    valorConvertido:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 15

    }

});
export default Conversor;