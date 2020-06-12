import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

class Filmes extends Component{
    render(){
        const {nome, foto} = this.props.data //desconstrução

        return(
            <View>
                <View style={styles.card}>
                    <Text style={styles.titulo}>{nome}</Text>
                    <Image
                    source={{uri: foto}}
                    style={styles.capa}
                    />

                    <View style={styles.areaBotao}>
                        <TouchableOpacity style={styles.botao} onPress={() => alert('Filme selecionado: '+nome)}>
                            <Text style={styles.botaoTexto}>LEIA MAIS</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        shadowOffset: {width: 0, height: 1},
        shadowColor: '#000',
        backgroundColor: '#FFF',
        shadowOpacity: 0.8,
        margin: 15, 
        shadowRadius: 5,
        borderRadius: 5,
        elevation: 3
    },
    titulo: {
        fontSize: 18,
        padding: 15,
    },
    capa:{
        height: 250,
        zIndex: 2
    },
    areaBotao:{
        alignItems: 'flex-end',
        marginTop: -40,
        zIndex: 3 //para garantir que o botao fique em cima da capa 9>2 entao estara por cima da capa
    },
    botao:{
        width: 100,
        backgroundColor: '#09A6FF',
        opacity: 1,
        padding: 8,
        borderTopLeftRadius: 5, //arredonda borda da parte superior esquerda
        borderBottomLeftRadius: 5 // e a debaixo
    },
    botaoTexto:{
        textAlign: 'center',
        color: '#FFF'

    }

    
});

export default Filmes