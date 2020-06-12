import React, { useContext, useState, useEffect } from 'react';
import { Alert } from 'react-native';
import firebase from '../../services/firebaseConnection';
import { format, isPast } from 'date-fns';

import { AuthContext } from '../../contexts/auth'
import Header from '../../components/Header';
import { Background, Container, Nome, Saldo, Title, List } from './styles';
import HistoricoList from '../../components/HistoricoList';

export default function Home() {
  const { user } = useContext(AuthContext);
  const [saldo, setSaldo] = useState(0);
  const [historico, setHistorico] = useState([]);
  const uid = user && user.uid;
  useEffect(() => {
    async function loadList(){
      await firebase.database().ref('users').child(uid).on('value', (snapshot) => {
        setSaldo(snapshot.val().saldo);
      });
      await firebase.database().ref('historico')
      .child(uid)
      .orderByChild('date').equalTo(format( new Date,'dd/MM/yy'))
      .limitToLast(10).on('value', (snapshot) => {
        setHistorico([]);

        snapshot.forEach( (childItem) => {
          let list ={
            key: childItem.key,
            tipo: childItem.val().tipo,
            valor: childItem.val().valor,
            date: childItem.val().date
          };

          setHistorico(oldArray => [...oldArray, list].reverse());
        })
      })
    }
    loadList();
  }, []);

 function handleDelete(data){
  if( isPast(new Date(data.date))){
    //se a data do rsgistro ja passou
    alert('Você não pode excluir um registro antigo');
    return;
  }

  Alert.alert(
    'Cuidado Atenção!',
    `Você deseja excluir ${data.tipo} - Valor: ${data.valor}`,
    [
      {
        text: 'Cancelar',
        style: 'cancel'
      },
      {
        text: 'Continuar',
        onPress: () => haandleDeleteSuccess(data)
      }
    ]
  )
 }

async function haandleDeleteSuccess(){
  await firebase.database().ref('historico')
  .child(uid).child(data.key).remove()
  .then(async () => {
    let saldoAtual = saldo;
    data.tipo === 'despesa' ? saldoAtual += parseFloat(data.valor) : saldoAtual-=parseFloat(data.valor);

    await firebase.database().ref('users').child(uid)
    .child('saldo').set(saldoAtual);
  })
 }


 return (
   <Background>
     <Header />
     <Container>
       <Nome>{user && user.name}</Nome>
 <Saldo>R${saldo.toFixed(2)}</Saldo>
     </Container>
     <Title>Ultimas movimentações</Title>
     <List 
     showsVerticalScrollIndicator={false}
     data={historico}
     keyExtrato={ item => item.key}
     renderItem={ ({item}) => ( <HistoricoList data={item} deleteItem={handleDelete}/> )}
     />
   </Background>

   
  );
}