import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Login from './pages/login';
import Main from './pages/main';

const Stack = createStackNavigator();

export default function Routes() {
     return(
          <NavigationContainer>
               <Stack.Navigator>
                    <Stack.Screen
                         name="Login"
                         component={Login}
                    />
                    <Stack.Screen 
                         name="Main"
                         component={Main}
                    />
               </Stack.Navigator>
          </NavigationContainer>
     )
}
