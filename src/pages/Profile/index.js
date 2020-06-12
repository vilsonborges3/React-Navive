import React, {useContext} from 'react';
import { AuthContext } from '../../contexts/auth';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';

import {Container, Nome, NewLink, NewText, Logout, LogoutText} from './styles';

export default function Profile() {
    const { user, signOut } = useContext(AuthContext);
    const navigation = useNavigation();

 return (
     <Container>
         <Header />
         <Nome>
             {user && user.name}
         </Nome>
         <NewLink onPress={ () => navigation.navigate('Registrar') }> 
             <NewText>Registrar</NewText>
         </NewLink>

         <Logout onPress={ () => signOut()}>
             <LogoutText>Sair</LogoutText>
         </Logout>
     </Container>
  );
}