import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import WidgetsTitle from '../components/widgets/widgetsTitle';
import {getRequest} from '../service/verbs';
import {CATEGORY_URL, PRODUCTS_URL} from '../service/urls';
import data from './data.json';
import WidgetproductCard from '../components/widgets/productCard';
import CategorySelect from '../components/widgets/categorySelect';

const BestSeller = () => {
  const [products, setProducts] = useState([]);

  const getBestSellerProducts = (category = 'jewelery') => {
    getRequest(CATEGORY_URL + `/${category}`, {limit: 4})
      .then(response => {
        setProducts(response.data);
      })
      .catch(err => {
        console.log(err, 'Error');
      });
  };

  useEffect(() => {
    getBestSellerProducts();
  }, []);
  return (
    <View style={styles.container}>
      <WidgetsTitle title={'Best Seller'} category="electronics" />
      <CategorySelect onSelect={value => getBestSellerProducts(value)} />

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={products}
        renderItem={({item}) => <WidgetproductCard item={item} />}
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

export default BestSeller;
