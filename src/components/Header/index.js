import React from 'react';
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';

import {Container, ButtonMenu} from './styles'

export default function Header() {
  const navigation = useNavigation();

  return (
    <Container>
      <ButtonMenu onPress={ () => navigation.toggleDrawer() }>
        <Icon name='menu' color='#FFF' size={30} />
      </ButtonMenu>
    </Container>
    );
}