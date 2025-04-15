import { StyleSheet, Text, View, Button, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { TextInput } from 'react-native-web';


export default function login(navigation) {
  return (
    <View style={{padding: 10}}>
    <TextInput
      style={{height: 40, padding: 5}}
      placeholder="e-mail:"
      placeholderr="senha:"
      onChangeText={newText => setText(newText)}
      defaultValue={text}
    />
    <Text style={{padding: 10, fontSize: 42}}>
    </Text>
    <Button
    title="Entra"
    onPress={() =>
        navigation.navigate('estoque')
    }
/>
  </View>
  )
};












