import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import { carregaTopo } from '../../../services/carregaDados';
import Logo from '../../../assets/logo.png';

class Topo extends React.Component {

    //Nesse state, nós setamos um valor default para os componentes do topo

    state = {
        topo: {
            boasVindas: '',
            legenda: '',
        }
    }

    atualizaTopo() {
        const retorno = carregaTopo();
        this.setState({ topo: retorno })
    }

    //O componente DidMount chama uma função atualizaTopo() para carregar o conteúdo do topo do app.

    componentDidMount() {
        this.atualizaTopo();
    }

    render() {
        return(
        <View style={estilos.topo}>
            <Image source={Logo} style={estilos.imagem}/>
            <Text style={estilos.boasVindas}>{ this.state.topo.boasVindas }</Text> 
            <Text style={estilos.legenda}>{ this.state.topo.legenda }</Text>
        </View>
        );
    }
}



const estilos = StyleSheet.create({
   topo: {
       backgroundColor: '#F6F6F6',
       padding: 16,
   },
   imagem: {
       width: 70,
       height: 28,
   },
   boasVindas: {
       marginTop: 24,
       fontSize: 26,
       lineHeight: 42,
       fontWeight: 'bold',
       color: '#464646',
   },
   legenda: {
       fontSize: 16,
       lineHeight: 26,
       color: '#A3A3A3',
   }
});

export default Topo;