import ListagemEstacionamento from './ListagemEstacionamento';
import ReservarEstacionamento from './ReservarEstacionamento';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Estacionamento = () => {
  const options = {
    headerShown: false,
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ListagemEstacionamento"
        component={ListagemEstacionamento}
        options={options}
      />

      <Stack.Screen
        name="ReservarEstacionamento"
        component={ReservarEstacionamento}
        options={options}
      />
    </Stack.Navigator>
  );
};

export default Estacionamento;
