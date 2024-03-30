import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {PRODUCTS_URL} from '../../service/urls';

import {getRequest} from '../../service/verbs';
import ProductCard from '../../components/product/productCard';
import {screenStyle} from '../../styles/screenStyle';
import CategorySelect from '../../components/widgets/categorySelect';

const ProductList = ({route}) => {
  const [products, setProducts] = useState([]);
  const fikterCategory = route?.params?.category;

  const getAllProducts = category => {
    const url = category
      ? PRODUCTS_URL + `/category/${category}`
      : PRODUCTS_URL;
    getRequest(url)
      .then(response => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch(err => {
        console.log(err, 'Error');
      });
  };

  useEffect(() => {
    getAllProducts(fikterCategory);
  }, []);
  return (
    <View style={screenStyle.container}>
      <CategorySelect onSelect={value => getAllProducts(value)} />
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={products}
        renderItem={({item}) => <ProductCard item={item} />}
        keyExtractor={item => item.id.toString()} // Her öğenin benzersiz bir anahtarı olmalıdır
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProductList;
