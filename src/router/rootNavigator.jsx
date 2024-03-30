import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackScreen from './navigations/StackScreen';
import {PRODUCTDETAIL, PRODUCTLIST} from '../utils/routes';
import ProductList from '../screens/product/productList';
import ProductDetail from '../screens/product/productDetail';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <StackScreen name={PRODUCTLIST} component={ProductList} />
      <StackScreen name={PRODUCTDETAIL} component={ProductDetail} />
    </NavigationContainer>
  );
};

export default RootNavigator;
