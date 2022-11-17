import { TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
});



const ListaEstacionamento = ({ nome, vagas, endereco, icon, navigation }) => {
    const gotoReserva = () => {
    navigation.navigate('ReservarEstacionamento');
  };
  return (
    <TouchableOpacity style={styles.card} onPress={gotoReserva}>
      <Image style={styles.icon} source={icon} />
      <View style={styles.texts}>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.vagas}>{vagas}</Text>
        <Text style={styles.vagas}>{endereco}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListaEstacionamento;
