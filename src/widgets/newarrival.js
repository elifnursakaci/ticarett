import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import WidgetsTitle from '../components/widgets/widgetsTitle';
import {getRequest} from '../service/verbs';
import {PRODUCTS_URL, CATEGORY_URL} from '../service/urls';
import data from './data.json';
import WidgetproductCard from '../components/widgets/productCard';

const NewArrival = () => {
  const [products, setProducts] = useState([]);

  const getNewArrivalProducts = () => {
    getRequest(CATEGORY_URL + "/men's clothing", {limit: 4})
      .then(response => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch(err => {
        console.log(err, 'Error');
      });
  };

  useEffect(() => {
    getNewArrivalProducts();
  }, []);
  return (
    <View style={styles.container}>
      <WidgetsTitle title={'New Arrival'} category="jewelery" />

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

export default NewArrival;
