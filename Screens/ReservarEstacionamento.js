import MapScreen from '../components/MapScreen';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Button } from 'react-native-paper';

const ReservarEstacionamento = ({ navigation }) => {
  const estacionamentoIcon = require('../assets/estacionamentoFoto.png');
  const menuInformations = [
    {
      nome: 'estacionamentos',
      vagas: 'vagas',
      endereco: 'end',
      icon: estacionamentoIcon,
    },
  ];

  const gotoListagem = () => {
    navigation.navigate('ListagemEstacionamento');
  };

  return (
    <SafeAreaView style={styles.container}>
      {menuInformations.map((element) => {
        return (
          <View>
            <TouchableOpacity onPress={gotoListagem}>
              <Image
                style={styles.img}
                source={require('../assets/Imagem10.png')}
              />
            </TouchableOpacity>
            <View style={styles.card}>
              <Image style={styles.icon} source={element.icon} />
              <View style={styles.texts}>
                <Text style={styles.nome}>{element.nome}</Text>
                <Text style={styles.vagas}>{element.vagas}</Text>
                <Text style={styles.vagas}>{element.endereco}</Text>
              </View>
            </View>
          </View>
        );
      })}

      <MapScreen />
      <Button
        style={styles.bnt}
        mode="contained"
        onPress={() => console.log('Pressed')}>
        Reservar
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    paddingVertical: 30,
    paddingHorizontal: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 2,
    borderColor: '#09BD66',
  },
  nome: {
    color: 'black',
    fontSize: 25,
  },
  texts: {
    marginLeft: 25,
    flex: 1,
  },
  vagas: {
    color: 'black',
    fontSize: 12,
  },

  icon: {
    width: 75,
    height: 75,
    marginLeft: 15,
    borderRadius: 20,
  },
  bnt: {
    width: '90%',
    height: '8%',
    backgroundColor: '#46AEA2',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 20,
  },
  img: {
    width: 30,
    height: 30,
  },
});
export default ReservarEstacionamento;
