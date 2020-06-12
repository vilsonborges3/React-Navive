import React from 'react'
import {View, Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native'


export default function WelcomeScreen({route}){
    const navigation = useNavigation();
    return (
        <View>
            <Text>Bem vindo: {route.params?.email}</Text>
            <Button 
            title='Sair'
            onPress={() => navigation.goBack()}
            />
        </View>
    );
}