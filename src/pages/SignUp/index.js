import React, {useState, useContext} from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import {Background, Container, Logo, AreaInput, Input,SubmitButton, SubmitText} from '../SignIn/styles';
import { AuthContext } from '../../contexts/auth';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signUp, loadingAuth } = useContext(AuthContext);

  function handleSignUp(){
    signUp(email, password, name)
  }

  return (
    <Background>
      <Container
      behavior={Platform.OS === 'ios' ? 'padding' : ''} //dar um padding no ios
      enabled
      >
        
        <AreaInput>
          <Input 
          placeholder='Nome'
          autoCorrect={false}
          autoCapitalize='none'
          value={name}
          onChangeText={ (text) => setName(text) }
          />
        </AreaInput>

        <AreaInput>
          <Input 
          placeholder='Email'
          autoCorrect={false}
          autoCapitalize='none'
          value={email}
          onChangeText={ (text) => setEmail(text) }
          />
        </AreaInput>

        <AreaInput>
          <Input 
          placeholder='Senha'
          autoCorrect={false}
          autoCapitalize='none'
          value={password}
          onChangeText={ (text) => setPassword(text) }
          />
        </AreaInput>
        <SubmitButton onPress={handleSignUp}>
          {
            loadingAuth ? (
              <ActivityIndicator size={20} color='#fff' />
            ) : (
              <SubmitText>Cadastrar</SubmitText>
            )
          }

          
        </SubmitButton>

      </Container>
    </Background>
    );
}