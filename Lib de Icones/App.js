import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  return (
    <View style={styles.container}>
      <Icon name='home' size={40} color='#000'/>
      <Icon name='reply' size={40} color='#000'/>
      <Icon name='upload' size={40} color='#000'/>
      <Icon name='coffee' size={40} color='#000'/>

      <TouchableOpacity>
        <View>
          <Icon name='facebook' size={40} color='#3b5998'/>
          <Text>Login com facebook</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
