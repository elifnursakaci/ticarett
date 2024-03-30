import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {height, width} from '../utils/constans';
import {AppColors} from '../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTLIST} from '../utils/routes';
import ProductList from '../screens/product/productList';

const Introduction = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        onProgress={() => navigation.navigate(ProductList)}
        source={require('../assets/res1.jpeg')}
        style={styles.image}></Image>

      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 30,
          right: 30,
          backgroundColor: AppColors.PRIMARY,
          width: width * 0.3,
          height: height * 0.04,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 5,
        }}>
        <Text>Shop Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  image: {
    width: width - 30,
    height: height / 4,
    resizeMode: 'contain',
  },
});

export default Introduction;
