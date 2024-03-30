import {View, Text, StyleSheet, useContext, FlatList} from 'react-native';
import React from 'react';
import StoreContext from '../../context';
import CarCard from '../../components/cart/carCard';
import {screenStyle} from '../../styles/screenStyle';

const Cart = () => {
  const {cart} = useContext(StoreContext);

  return (
    <View style={screenStyle.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={cart}
        renderItem={({item}) => <CarCard item={item.title} />}
        keyExtractor={item => item.id.toString()} // Her öğenin benzersiz bir anahtarı olmalıdır
      />
    </View>
  );
};

export default Cart;
