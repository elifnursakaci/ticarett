import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/colors';
import {getRequest} from '../../service/verbs';
import {CATEGORIES_URL} from '../../service/urls';
import CategoryCard from '../../components/categories/categoryCard';
import {screenStyle} from '../../styles/screenStyle';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    getRequest(CATEGORIES_URL)
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <View style={screenStyle.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={({item}) => <CategoryCard item={item} />}></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  activeCategory: {
    backgroundColor: AppColors.PRIMARY,
    padding: 10,
    marginRight: 5,
    borderRadius: 20,
  },
  inactiveCategory: {
    backgroundColor: AppColors.SOFTGRAY,
    padding: 10,
    marginRight: 5,
    borderRadius: 20,
  },
});

export default Categories;
