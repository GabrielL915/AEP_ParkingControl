import * as React from 'react';
import { View, StyleSheet, SafeAreaView, Text, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import MapScreen from '../components/MapScreen';
import { Callout } from 'react-native-maps';

const Busca = ({ navigation }) => {
  const [text, setText] = React.useState('');
  return (
    <SafeAreaView style={styles.container}>
      <MapScreen />
      <Callout style={styles.callout}>
        <View style={styles.calloutView}>
          <Image style={styles.img} source={require('../assets/Imagem8.png')} />
          <TextInput
            style={styles.calloutSearch}
            value={text}
            onChangeText={(text) => setText(text)}
            placeholder="Search"
             theme={themeBar}
          />
          <Image style={styles.img} source={require('../assets/Imagem9.png')} />
        </View>
      </Callout>
    </SafeAreaView>
  );
};

const themeBar = {
  colors: {
    primary: 'white',
    text: 'black',
    placeholder: 'black',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  calloutView: {
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 30,
    marginTop: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  calloutSearch: {
    width: '80%',
    backgroundColor: 'tranparent',
  },
  callout: {
    flex: 1,
    width: '100%'
  },
  img: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    margin: 0,
    padding: 0,
  },
});

export default Busca;
