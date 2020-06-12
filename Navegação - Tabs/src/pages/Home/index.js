import React from 'react';
import {View, Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'


export default function Home(){
  const navigation = useNavigation();
  return (
      <View>
          <Text>Home</Text>
          <Button 
          title='Contato'
          onPress={ () => navigation.navigate('Contato')}
          />
          <Icon name='ios-call' color='#FF0000' size={30} />
      </View>
  );

}