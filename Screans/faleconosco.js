import { StyleSheet, Text, View, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { TextInput } from 'react-native-web';

export default function faleconosco(navigation) {
    return (
      <View style={styles.container}>
        <Image source={require('./assets/faleconosco.png')} />
        <TextInput
            style={{height: 40, padding: 5}}
            placeholder="nome:"
            placeholderr="e-mail:"
            placeholderrr="mensagem:"
            onChangeText={newText => setText(newText)}
            defaultValue={text}
        />
        <Text style={{padding: 10, fontSize: 42}}>
        </Text>
      </View>
    );
  }