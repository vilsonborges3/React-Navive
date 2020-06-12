import React from 'react';
import {View, Text, Button} from 'react-native';

import { useNavigation,  StackActions } from '@react-navigation/native'

export default function Contato(){
  const navigation = useNavigation();

  navigation.setOptions({
    title: 'Contato '
  })

  return (
      <View>
          <Text>Contato</Text>
          <Button 
          title='Voltar'
          onPress={() => navigation.goBack() }
          />

          <Button
          title='Home'
          onPress={ () => navigation.dispatch(StackActions.popToTop())} //voltar para inicio
          />
      </View>
  );

}