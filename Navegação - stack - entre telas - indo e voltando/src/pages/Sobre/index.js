import React from 'react';
import {View, Text, Button} from 'react-native';

import { useNavigation } from '@react-navigation/native'

export default function Sobre({ route }){
  const navigation = useNavigation();

  navigation.setOptions({
    title: 'Sobre '+route.params?.nome
  })

  return (
      <View>
          <Text>Sobre</Text>
          <Text>{route.params?.nome /* recebe dados da outra tela */ }</Text> 
          <Text>{route.params?.email /* recebe dados da outra tela */ }</Text> 

          <Button 
          title='Voltar para Home!'
          onPress={() => navigation.goBack() }
          />

          <Button 
          title='Contato'
          onPress={ () => navigation.navigate('Contato')}
          />
      </View>
  );

}