import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp'

const AutStack = createStackNavigator();
function AuthRoutes(){
    return (
        <AutStack.Navigator>
            <AutStack.Screen 
            name='SignIn' 
            component={SignIn}
            options={{headerShown: false}}
            />
             <AutStack.Screen 
            name='SignUp' 
            component={SignUp}
            options={{
                headerStyle:{
                    backgroundColor: '#131313',
                    borderBottomWidth: 1,
                    borderBottomColor: '#00b94a'
                },
                headerTintColor: '#FFF',
                headerBackTintleVisible: false,
                headerTitle: 'Voltar'
            }}
            />
        </AutStack.Navigator>
    )
}

export default AuthRoutes;