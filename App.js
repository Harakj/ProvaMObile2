import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { TextInput } from 'react-native-web';
import ('./Screans/login')
import ('./Screans/estoque')


import { createStackNavigator } from '@react-navigation/stack';
import estoque from './Screans/estoque';

const MyStack = createStackNavigator({
  screens: {
    estoque: estoque,
    Profile: ProfileScreen,
  },
});
