// In App.js in a new project

import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cart from '../../screens/cart';
import {CART, TAB} from '../../utils/routes';
import TabNavigator from '../../router/tabNavigator';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator style={styles.container}>
      <Stack.Screen name={TAB} component={TabNavigator} />
      <Stack.Screen name={CART} component={Cart} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors,
  },
});

export default StackNavigator;
