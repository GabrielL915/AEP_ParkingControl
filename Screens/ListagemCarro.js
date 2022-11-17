import { StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import ListaCarros from '../components/ListaCarros';

const ListagemCarro = ({ navigation }) => {
  const menuInformations = [
    {
      modelo: 'Chevrolet Vectra GTX',
      placa: 'MNT8836',
      cor: 'Prata',
    },
    {
      modelo: 'Chevrolet Astra',
      placa: 'MUU4016',
      cor: 'Preto',
    },
    {
      modelo: 'Honda HR-V',
      placa: 'LWM4432',
      cor: 'Preto',
    },
  ];

  const gotoCadastro = () => {
    navigation.navigate('CadastrarCarro');
  };

  return (
    <SafeAreaView>
      {menuInformations.map((element) => {
        return (
          <ListaCarros
            modelo={element.modelo}
            placa={element.placa}
            cor={element.cor}
          />
        );
      })}
      <TouchableOpacity style={styles.bnt} onPress={gotoCadastro}>
        <Image style={styles.img} source={require('../assets/Imagem3.png')} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  img: {
    marginTop: 200,
    marginLeft: 170,
    width: 50,
    height: 50,
  },
  bnt: {
    width: 60,
    height: 60,
  },
});

export default ListagemCarro;
