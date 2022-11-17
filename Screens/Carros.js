import * as React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import ListagemCarro from './ListagemCarro';
import CadastrarCarro from './CadastrarCarro';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Carros = () => {
  const options = {
    headerShown: false,
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ListagemCarro"
        component={ListagemCarro}
        options={options}
      />
      <Stack.Screen
        name="CadastrarCarro"
        component={CadastrarCarro}
        options={options}
      />
    </Stack.Navigator>
  );
};

export default Carros;
