import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';
import Busca from '../Screens/Busca';
import Carros from '../Screens/Carros';
import Estacionamento from '../Screens/Estacionamento';
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: {
            position: 'absolute',
            botton: 25,
            backgroundColor: '#fff',
            height: 90,
          },
        }}>
        <Tab.Screen
          name="Carros"
          component={Carros}
          options={() => ({
            tabBarIcon: () => (
              <View>
                <Image
                  style={styles.img}
                  source={require('../assets/Imagem1.png')}
                />
              </View>
            ),
            headerShown: false,
          })}
        />

        <Tab.Screen
          name="Busca"
          component={Busca}
           options={() => ({
            tabBarIcon: () => (
              <View>
                <Image
                  style={styles.img}
                  source={require('../assets/Imagem7.png')}
                />
              </View>
            ),
            headerShown: false,
          })}
        />

        <Tab.Screen
          name="Estacionamento"
          component={Estacionamento}
          options={() => ({
            tabBarIcon: () => (
              <View>
                <Image
                  style={styles.img}
                  source={require('../assets/Imagem2.png')}
                />
              </View>
            ),
            headerShown: false,
          })}
        />
      </Tab.Navigator>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 30,
    height: 30,
  },
});

export default Tabs;
