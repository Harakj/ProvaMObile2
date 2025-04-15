import { StyleSheet, Text, View, Button, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { TextInput } from 'react-native-web';


export default function estoque(navigation) {
    return (
      <View style={styles.container}>
        <Image source={require('./assets/cadeira.png')} />
        <Text>Cadeira ergonomica de escritorio</Text>
        <Text>A escolha de uma cadeira adequada é muito importante para evitar futuras lesões. Com esta cadeira da Pctop você terá o conforto é o bem-estar que precisa ao longo do seu dia. Além disso, você pode colocá-la em qualquer lugar da sua casa ou oficina, pois o seu design se adapta a vários ambientes. Dê um toque mais moderno aos seus espaços!</Text>

        <Image source={require('./assets/lampada.png')} />
        <Text>Lampada led 7w</Text>
        <Text>O BNDES afirma que as lâmpadas LED: Proporcionam maior visibilidade, Reduzem a poluição visual, Protegem contra elevação de preços, Reduzem as emissões de carbono</Text>
        
        <Image source={require('./assets/mesa.png')} />
        <Text>mesa grande escritorio </Text>
        <Text>é um móvel composto por uma ou mais tábuas ou pranchas que assentam e se apoiam em cima de um ou vários pés.</Text>

        <Image source={require('./assets/planta.png')} />
        <Text>planta de plastico falsa </Text>
        <Text>são feitas de materiais inorgânicos e são uma opção prática para quem não quer se preocupar com regas, podas e manutenção..</Text>

        <Image source={require('./assets/tapete.png')} />
        <Text>tapete para casa </Text>
        <Text>O tapete aquece a casa, da sensação de aconchego, demarca ambientes e colore o cômodo</Text>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});