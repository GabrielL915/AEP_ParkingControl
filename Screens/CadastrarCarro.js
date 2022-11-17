import { useState } from 'react';
import { TextInput, Button } from 'react-native-paper';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
const CadastrarCarro = () => {
  const [modelo, setModelo] = useState();
  const [placa, setPlaca] = useState();
  const [cor, setCor] = useState();
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Cadastrar Carro</Text>

      <TextInput
        style={styles.inputs}
        placeholder="modelo"
        value={modelo}
        underlineColor="#09BD66"
        activeUnderlineColor="#09BD66"
        theme="black"
        onChangeText={setModelo}
      />
      <TextInput
        style={styles.inputs}
        placeholder="placa"
        value={placa}
        underlineColor="#09BD66"
        activeUnderlineColor="#09BD66"
        theme="black"
        onChangeText={setPlaca}
      />
      <TextInput
        style={styles.inputs}
        placeholder="cor"
        value={cor}
        underlineColor="#09BD66"
        activeUnderlineColor="#09BD66"
        theme="black"
        onChangeText={setCor}
      />

      <Button
        style={styles.bnt}
        mode="contained"
        onPress={() => console.log('Cadastrado')}>
        Cadastrar
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 30,
  },
  inputs: {
    marginTop: 15,
    width: '80%',
    backgroundColor: 'tranparent',
  },
  text: {
    fontSize: 37,
    marginBottom: 30,
    color: '#09BD66',
  },
  bnt: {
    marginTop: 200,
    width: '90%',
    height: '8%',
    backgroundColor: '#46AEA2',
    justifyContent: 'center',
    borderRadius: 20,
  },
});

export default CadastrarCarro;
