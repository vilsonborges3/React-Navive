import React from 'react';
import {View, Text, Button} from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Home(){
  const navigation = useNavigation();

  function irSobre(){
    navigation.navigate('Sobre', {nome: 'Vilson', email: 'vilsonborges98@gmail.com'});

  }


  return (
      <View>
          <Text>Home</Text>
          <Text>Bem vindo a tela Home!!</Text>
          <Button 
          title='Ir para sobre'
          onPress={irSobre}
          />
      </View>
  );

}