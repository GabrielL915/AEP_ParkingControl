import { SafeAreaView } from 'react-native';
import ListaEstacionamento from '../components/ListaEstacionamento';

const estacionamentoIcon = require('../assets/estacionamentoFoto.png');

const ListagemEstacionamento = ({ navigation }) => {
  const menuInformations = [
    {
      nome: 'estacionamentos',
      vagas: 'vagas',
      endereco: 'end',
      icon: estacionamentoIcon,
    },
    {
      nome: 'estacionamentos',
      vagas: 'vagas',
      endereco: 'end',
      icon: estacionamentoIcon,
    },
    {
      nome: 'estacionamentos',
      vagas: 'vagas',
      endereco: 'end',
      icon: estacionamentoIcon,
    },
  ];

  return (
    <SafeAreaView>
      {menuInformations.map((element) => {
        return (
          <ListaEstacionamento
            nome={element.nome}
            vagas={element.vagas}
            endereco={element.endereco}
            icon={element.icon}
            navigation={navigation}
          />
        );
      })}
    </SafeAreaView>
  );
};

export default ListagemEstacionamento;
