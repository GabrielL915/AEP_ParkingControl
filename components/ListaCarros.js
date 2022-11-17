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
  modelo: {
    color: 'black',
    fontSize: 17,

  },
  texts: {
    marginLeft: 25,
    flex: 1
  },
  placa: {
    color: 'black',
    fontSize: 12,
  },

  icon: {
    width: 35,
    height: 35,
    display: 'flex',
    alignItems: 'flex-end'
  },
});

const ListaCarros = ({ modelo, placa, cor}) => {
  
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.texts}>
        <Text style={styles.modelo}>{modelo}</Text>
        <Text style={styles.placa}>{placa}</Text>
        <Text style={styles.placa}>{cor}</Text>
      </View>
      <Image style={styles.icon} source={require('../assets/Imagem4.png')} />
    </TouchableOpacity>
  );
};

export default ListaCarros;
